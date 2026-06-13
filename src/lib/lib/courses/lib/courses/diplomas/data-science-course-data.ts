// Data Science (Diploma) - Complete Course Data
// File: data-science-diploma.ts

export const dataScienceDiploma = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "data-science-diploma",
  title: "Data Science (Diploma)",
  description: "Advanced professional program covering statistical modeling, machine learning, big data technologies, and data engineering. This diploma prepares you for senior data science roles with hands-on experience in predictive analytics, deep learning, and production deployment of data products.",
  duration: "14 weeks",
  timeCommitment: "10-12 hours per week",
  price: 18,
  upgradePrice: null,
  icon: "🤖",
  badge: "Diploma",
  prerequisites: "Certificate in Business Analytics or equivalent experience",
  
  // 2. MODULE ARCHITECTURE - 10 Modules for Diploma
  modules: [
    // MODULE 1: Advanced Statistical Methods
    {
      id: 1,
      title: "Advanced Statistical Methods",
      completed: false,
      content: `
# Module 1: Advanced Statistical Methods

## Foundations of Statistical Inference
Statistical inference forms the backbone of data science, enabling us to make predictions and decisions based on data. Modern data science requires understanding both frequentist and Bayesian approaches to inference.

### Probability Distributions
Key probability distributions in data science:

**Continuous Distributions:**
- **Normal Distribution** - Bell curve, μ=mean, σ=standard deviation
- **Exponential Distribution** - Modeling time between events (λ=rate)
- **Beta Distribution** - Flexible distribution on [0,1] interval
- **Gamma Distribution** - Generalization of exponential (shape=k, scale=θ)

**Discrete Distributions:**
- **Binomial Distribution** - Number of successes in n trials (p=success probability)
- **Poisson Distribution** - Number of events in fixed interval (λ=rate)
- **Geometric Distribution** - Trials until first success
- **Negative Binomial** - Trials until r successes

### Hypothesis Testing Framework
Comprehensive testing methodology:

**Test Types:**
1. **One-sample t-test** - Compare mean to hypothesized value
2. **Two-sample t-test** - Compare means of two groups
3. **ANOVA** - Compare means of three or more groups
4. **Chi-square test** - Test independence of categorical variables
5. **Z-test** - Large sample mean comparison
6. **Non-parametric tests** - Mann-Whitney, Kruskal-Wallis, Wilcoxon

**Test Components:**
- **Null Hypothesis (H₀)** - Default position, no effect
- **Alternative Hypothesis (H₁)** - Research hypothesis
- **Significance Level (α)** - Typically 0.05 (5% risk of Type I error)
- **p-value** - Probability under H₀ of observed or more extreme results
- **Test Statistic** - Calculated from sample data
- **Critical Value** - Threshold for rejection region

### Bayesian Statistics
Probabilistic approach to inference:

**Bayes' Theorem:**
P(A|B) = [P(B|A) * P(A)] / P(B)
- **Posterior** - P(A|B), updated belief after evidence
- **Likelihood** - P(B|A), probability of evidence given hypothesis
- **Prior** - P(A), initial belief before evidence
- **Evidence** - P(B), total probability of evidence

**Bayesian Methods:**
- **Conjugate Priors** - Prior and posterior same distribution family
- **Markov Chain Monte Carlo (MCMC)** - Sampling from posterior distributions
- **Gibbs Sampling** - Special case of MCMC for multivariate distributions
- **Bayesian Networks** - Probabilistic graphical models
- **Hierarchical Models** - Multi-level Bayesian modeling

### Regression Analysis
Modeling relationships between variables:

**Linear Regression:**
y = β₀ + β₁x₁ + ... + βₚxₚ + ε
- **OLS Estimation** - Minimize sum of squared residuals
- **R²** - Proportion of variance explained (0 to 1)
- **Adjusted R²** - R² adjusted for number of predictors
- **Residual Analysis** - Checking model assumptions

**Assumption Diagnostics:**
1. **Linearity** - Relationship between predictors and response is linear
2. **Independence** - Residuals are independent
3. **Homoscedasticity** - Constant variance of residuals
4. **Normality** - Residuals normally distributed
5. **No Multicollinearity** - Predictors not highly correlated

### Time Series Analysis
Modeling temporal data:

**Components of Time Series:**
- **Trend** - Long-term direction (increasing, decreasing, stationary)
- **Seasonality** - Regular periodic fluctuations
- **Cyclical** - Non-periodic fluctuations (>1 year)
- **Irregular** - Random, unpredictable variations

**Time Series Models:**
- **ARIMA** - AutoRegressive Integrated Moving Average
- **SARIMA** - Seasonal ARIMA
- **Exponential Smoothing** - Weighted moving average
- **GARCH** - Modeling volatility in financial data
- **Prophet** - Facebook's time series forecasting

### Multivariate Analysis
Analyzing multiple variables simultaneously:

**Dimensionality Reduction:**
- **Principal Component Analysis (PCA)** - Linear dimensionality reduction
- **Factor Analysis** - Identify latent variables
- **Multidimensional Scaling** - Preserve pairwise distances
- **t-SNE** - t-Distributed Stochastic Neighbor Embedding
- **UMAP** - Uniform Manifold Approximation and Projection

**Cluster Analysis:**
- **K-means** - Partition data into k clusters
- **Hierarchical Clustering** - Nested cluster tree
- **DBSCAN** - Density-based clustering
- **Gaussian Mixture Models** - Probabilistic clustering

### Statistical Learning Theory
Theoretical foundations:

**Bias-Variance Tradeoff:**
Total Error = Bias² + Variance + Irreducible Error
- **Bias** - Error from approximating real-world problem
- **Variance** - Model sensitivity to training data fluctuations
- **Tradeoff** - Simple models (high bias, low variance) vs complex models (low bias, high variance)

**Regularization Methods:**
- **Ridge Regression (L2)** - Penalize squared coefficients
- **Lasso Regression (L1)** - Penalize absolute coefficients
- **Elastic Net** - Combination of L1 and L2 penalties
- **Early Stopping** - Stop training before overfitting

### Experimental Design
Designing data collection for inference:

**Design Principles:**
- **Randomization** - Random assignment to treatments
- **Replication** - Multiple experimental units per treatment
- **Blocking** - Group similar units to reduce variability
- **Factorial Designs** - Test multiple factors simultaneously
- **Response Surface Methodology** - Optimize response variables

**A/B Testing Framework:**
1. **Formulate Hypothesis** - Define success metrics
2. **Calculate Sample Size** - Power analysis for detection
3. **Random Assignment** - Ensure comparable groups
4. **Run Experiment** - Collect data during test period
5. **Statistical Analysis** - Compare performance
6. **Decision Making** - Implement or discard change

### Bayesian Networks
Probabilistic graphical models:

**Structure:**
- **Nodes** - Random variables
- **Edges** - Conditional dependencies
- **Directed Acyclic Graph** - No cycles in relationships
- **Conditional Probability Tables** - Quantify relationships

**Inference Algorithms:**
- **Variable Elimination** - Efficient exact inference
- **Belief Propagation** - Message passing in trees
- **Monte Carlo Methods** - Approximate inference for complex networks
- **Learning Algorithms** - Structure and parameter learning from data

### Statistical Software
Tools for advanced analysis:

**R Packages:**
- **stats** - Base statistical functions
- **MASS** - Modern Applied Statistics
- **bayesplot** - Bayesian visualization
- **forecast** - Time series forecasting
- **brms** - Bayesian regression models

**Python Libraries:**
- **statsmodels** - Statistical models and tests
- **pymc3** - Bayesian modeling
- **arch** - Time series volatility models
- **scipy.stats** - Statistical functions
- **sklearn** - Machine learning with statistical foundation

### Model Evaluation Metrics
Comprehensive assessment:

**Regression Metrics:**
- **MSE** - Mean Squared Error (penalizes large errors)
- **RMSE** - Root Mean Squared Error (in original units)
- **MAE** - Mean Absolute Error (robust to outliers)
- **R²** - Coefficient of Determination
- **Adjusted R²** - R² adjusted for predictors

**Classification Metrics:**
- **Accuracy** - (TP+TN)/Total
- **Precision** - TP/(TP+FP)
- **Recall/Sensitivity** - TP/(TP+FN)
- **F1 Score** - Harmonic mean of precision and recall
- **ROC-AUC** - Area under ROC curve

**Statistical Tests for Models:**
- **F-test** - Overall model significance
- **t-test** - Individual coefficient significance
- **Likelihood Ratio Test** - Compare nested models
- **AIC/BIC** - Model selection criteria
`,
      quiz: [
        {
          id: 1,
          question: "Which distribution is used for modeling time between events?",
          options: [
            "Exponential Distribution",
            "Normal Distribution",
            "Binomial Distribution",
            "Poisson Distribution"
          ],
          correctAnswer: 0,
          explanation: "The exponential distribution models the time between events in a Poisson process with rate parameter λ."
        },
        {
          id: 2,
          question: "What is the typical significance level (α) used in hypothesis testing?",
          options: [
            "0.05",
            "0.01",
            "0.10",
            "0.005"
          ],
          correctAnswer: 0,
          explanation: "The conventional significance level is α = 0.05, representing a 5% risk of Type I error (false positive)."
        },
        {
          id: 3,
          question: "What does MCMC stand for in Bayesian statistics?",
          options: [
            "Markov Chain Monte Carlo",
            "Markov Chain Model Comparison",
            "Monte Carlo Markov Chain",
            "Markov Covariance Monte Carlo"
          ],
          correctAnswer: 0,
          explanation: "MCMC stands for Markov Chain Monte Carlo, a class of algorithms for sampling from probability distributions."
        },
        {
          id: 4,
          question: "Which assumption of linear regression requires constant variance of residuals?",
          options: [
            "Homoscedasticity",
            "Linearity",
            "Independence",
            "Normality"
          ],
          correctAnswer: 0,
          explanation: "Homoscedasticity means the variance of the residuals is constant across all values of the predictors."
        },
        {
          id: 5,
          question: "What does ARIMA stand for in time series analysis?",
          options: [
            "AutoRegressive Integrated Moving Average",
            "AutoRegression Independent Moving Average",
            "Average Regression Integrated Moving Average",
            "AutoRegressive Independent Mean Adjustment"
          ],
          correctAnswer: 0,
          explanation: "ARIMA stands for AutoRegressive Integrated Moving Average, combining differencing with AR and MA components."
        },
        {
          id: 6,
          question: "Which dimensionality reduction method is linear?",
          options: [
            "Principal Component Analysis (PCA)",
            "t-SNE",
            "UMAP",
            "Multidimensional Scaling"
          ],
          correctAnswer: 0,
          explanation: "PCA is a linear dimensionality reduction technique that finds orthogonal directions of maximum variance."
        },
        {
          id: 7,
          question: "What is the formula for total error in bias-variance decomposition?",
          options: [
            "Bias² + Variance + Irreducible Error",
            "Bias + Variance + Error",
            "Bias × Variance + Error",
            "Bias² × Variance + Error"
          ],
          correctAnswer: 0,
          explanation: "Total expected error = Bias² + Variance + Irreducible Error, showing the tradeoff between bias and variance."
        },
        {
          id: 8,
          question: "Which regularization method uses L1 penalty?",
          options: [
            "Lasso Regression",
            "Ridge Regression",
            "Elastic Net",
            "Early Stopping"
          ],
          correctAnswer: 0,
          explanation: "Lasso regression uses L1 penalty (sum of absolute coefficients) which can shrink coefficients to exactly zero."
        },
        {
          id: 9,
          question: "What principle of experimental design involves random assignment to treatments?",
          options: [
            "Randomization",
            "Replication",
            "Blocking",
            "Factorial Design"
          ],
          correctAnswer: 0,
          explanation: "Randomization ensures each experimental unit has equal chance of receiving any treatment, reducing selection bias."
        },
        {
          id: 10,
          question: "Which Python library specializes in Bayesian modeling?",
          options: [
            "pymc3",
            "statsmodels",
            "scipy.stats",
            "sklearn"
          ],
          correctAnswer: 0,
          explanation: "PyMC3 is a Python library for probabilistic programming and Bayesian statistical modeling."
        },
        {
          id: 11,
          question: "How many main components of time series were discussed?",
          options: [
            "Four",
            "Three",
            "Five",
            "Six"
          ],
          correctAnswer: 0,
          explanation: "The four components are: Trend, Seasonality, Cyclical, and Irregular (random) components."
        },
        {
          id: 12,
          question: "What does OLS stand for in regression analysis?",
          options: [
            "Ordinary Least Squares",
            "Optimal Least Squares",
            "Ordinary Linear Squares",
            "Optimal Linear Solution"
          ],
          correctAnswer: 0,
          explanation: "OLS stands for Ordinary Least Squares, the most common method for estimating linear regression parameters."
        },
        {
          id: 13,
          question: "Which metric is the harmonic mean of precision and recall?",
          options: [
            "F1 Score",
            "Accuracy",
            "ROC-AUC",
            "MSE"
          ],
          correctAnswer: 0,
          explanation: "F1 Score = 2 × (Precision × Recall) / (Precision + Recall), harmonic mean of precision and recall."
        },
        {
          id: 14,
          question: "What type of graph structure do Bayesian networks use?",
          options: [
            "Directed Acyclic Graph (DAG)",
            "Undirected Graph",
            "Complete Graph",
            "Tree Structure"
          ],
          correctAnswer: 0,
          explanation: "Bayesian networks use Directed Acyclic Graphs (DAGs) where edges represent conditional dependencies with no cycles."
        },
        {
          id: 15,
          question: "Which test compares means of three or more groups?",
          options: [
            "ANOVA",
            "t-test",
            "Chi-square test",
            "Z-test"
          ],
          correctAnswer: 0,
          explanation: "ANOVA (Analysis of Variance) tests whether means of three or more groups are statistically different."
        },
        {
          id: 16,
          question: "What is the Bayesian equivalent of frequentist p-value?",
          options: [
            "Posterior Probability",
            "Likelihood",
            "Prior Probability",
            "Bayes Factor"
          ],
          correctAnswer: 0,
          explanation: "In Bayesian statistics, posterior probabilities quantify belief in hypotheses given observed data."
        },
        {
          id: 17,
          question: "Which clustering algorithm is density-based?",
          options: [
            "DBSCAN",
            "K-means",
            "Hierarchical Clustering",
            "Gaussian Mixture Models"
          ],
          correctAnswer: 0,
          explanation: "DBSCAN (Density-Based Spatial Clustering of Applications with Noise) finds clusters based on density."
        },
        {
          id: 18,
          question: "What does AIC stand for in model selection?",
          options: [
            "Akaike Information Criterion",
            "Akaike Inference Criterion",
            "Average Information Criterion",
            "Algorithmic Information Criterion"
          ],
          correctAnswer: 0,
          explanation: "AIC stands for Akaike Information Criterion, which balances model fit with complexity (lower is better)."
        },
        {
          id: 19,
          question: "Which R package is for Bayesian regression models?",
          options: [
            "brms",
            "MASS",
            "forecast",
            "bayesplot"
          ],
          correctAnswer: 0,
          explanation: "The brms package provides an interface to fit Bayesian regression models using Stan backend."
        },
        {
          id: 20,
          question: "What is the formula for R² in regression?",
          options: [
            "1 - (SSE/SST)",
            "SSE/SST",
            "SST/SSE",
            "SSR/SST"
          ],
          correctAnswer: 0,
          explanation: "R² = 1 - (SSE/SST) where SSE = sum of squared errors and SST = total sum of squares."
        }
      ]
    },

    // MODULE 2: Machine Learning Fundamentals
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      completed: false,
      content: `
# Module 2: Machine Learning Fundamentals

## Introduction to Machine Learning
Machine learning is the scientific study of algorithms and statistical models that computer systems use to perform tasks without explicit instructions. The global machine learning market is expected to grow from $21.7 billion in 2022 to $209.9 billion by 2029, at a CAGR of 38.8%.

### Types of Machine Learning
Three primary learning paradigms:

**Supervised Learning:**
- **Classification** - Predict categorical labels (spam/not spam)
- **Regression** - Predict continuous values (house prices)
- **Algorithms**: Linear Regression, Logistic Regression, SVM, Random Forest
- **Requires**: Labeled training data

**Unsupervised Learning:**
- **Clustering** - Group similar instances (customer segmentation)
- **Dimensionality Reduction** - Reduce feature space (PCA, t-SNE)
- **Association** - Find rules linking variables (market basket analysis)
- **Algorithms**: K-means, DBSCAN, Apriori, Autoencoders
- **Requires**: Only input data, no labels

**Reinforcement Learning:**
- **Agent** - Learns by interacting with environment
- **Reward** - Feedback signal for actions
- **Policy** - Mapping from states to actions
- **Algorithms**: Q-learning, Deep Q Networks, Policy Gradient
- **Applications**: Game playing, robotics, autonomous systems

### Model Training Process
Systematic approach to building ML models:

**Training Pipeline:**
1. **Data Collection** - Gather relevant data
2. **Data Preparation** - Cleaning, transformation, feature engineering
3. **Model Selection** - Choose appropriate algorithm
4. **Training** - Fit model to training data
5. **Validation** - Tune hyperparameters
6. **Evaluation** - Assess on test data
7. **Deployment** - Put model into production

**Data Splitting Strategies:**
- **Train/Test Split** - Simple random split (typically 70/30 or 80/20)
- **Cross-Validation** - K-fold (k=5 or 10), Leave-One-Out
- **Stratified Sampling** - Maintain class distribution in splits
- **Time-based Split** - For temporal data, train on past, test on future

### Feature Engineering
Creating effective input representations:

**Numerical Feature Engineering:**
- **Scaling** - MinMaxScaler, StandardScaler, RobustScaler
- **Transformations** - Log, Square root, Box-Cox
- **Binning** - Convert continuous to categorical
- **Polynomial Features** - Create interaction terms
- **Aggregation** - Mean, median, sum over groups

**Categorical Feature Engineering:**
- **One-Hot Encoding** - Binary columns for each category
- **Label Encoding** - Integer codes for categories
- **Target Encoding** - Mean target value per category
- **Frequency Encoding** - Category frequency as feature
- **Embedding** - Learned low-dimensional representations

**Text Feature Engineering:**
- **Bag of Words** - Word frequency vectors
- **TF-IDF** - Term frequency-inverse document frequency
- **Word Embeddings** - Word2Vec, GloVe, FastText
- **Character n-grams** - Sequence of n characters
- **Sentence Embeddings** - Universal Sentence Encoder, BERT

### Model Evaluation
Comprehensive assessment framework:

**Classification Metrics:**
- **Confusion Matrix** - TP, TN, FP, FN counts
- **Accuracy** = (TP+TN)/Total (not good for imbalanced data)
- **Precision** = TP/(TP+FP) (quality of positive predictions)
- **Recall/Sensitivity** = TP/(TP+FN) (coverage of actual positives)
- **F1 Score** = 2 × (Precision×Recall)/(Precision+Recall)
- **ROC Curve** - TPR vs FPR at various thresholds
- **AUC-ROC** - Area under ROC curve (0.5=random, 1=perfect)
- **PR Curve** - Precision-Recall curve for imbalanced data
- **Log Loss** - Cross-entropy loss for probabilities

**Regression Metrics:**
- **Mean Absolute Error (MAE)** = average(|y_true - y_pred|)
- **Mean Squared Error (MSE)** = average((y_true - y_pred)²)
- **Root Mean Squared Error (RMSE)** = sqrt(MSE)
- **R² Score** = 1 - (SSE/SST)
- **Mean Absolute Percentage Error (MAPE)** = average(|(y_true - y_pred)/y_true|)

**Business Metrics Alignment:**
- **Revenue Impact** - Expected monetary value of predictions
- **Cost-sensitive Evaluation** - Different costs for different errors
- **ROI Calculation** - Return on investment from model deployment
- **Implementation Costs** - Compute, storage, maintenance

### Overfitting and Underfitting
Managing model complexity:

**Overfitting Symptoms:**
- Training accuracy >> Test accuracy
- Model learns noise in training data
- High variance, low bias
- Complex model with many parameters

**Underfitting Symptoms:**
- Both training and test accuracy are low
- Model fails to capture data patterns
- High bias, low variance
- Overly simple model

**Prevention Strategies:**
- **Regularization** - L1/L2 penalties, dropout (neural networks)
- **Early Stopping** - Stop training when validation performance plateaus
- **Pruning** - Remove parts of decision trees
- **Ensemble Methods** - Combine multiple models
- **Cross-Validation** - Reliable performance estimation
- **Feature Selection** - Remove irrelevant features

### Hyperparameter Tuning
Optimizing model configuration:

**Grid Search:**
- Exhaustive search over parameter grid
- Guaranteed to find best combination in grid
- Computationally expensive for many parameters
- sklearn: GridSearchCV

**Random Search:**
- Random sampling of parameter space
- More efficient than grid search
- Can find good combinations with fewer evaluations
- sklearn: RandomizedSearchCV

**Bayesian Optimization:**
- Build probabilistic model of objective function
- Use acquisition function to decide next parameters
- More efficient than random search
- Libraries: scikit-optimize, Hyperopt, Optuna

**Evolutionary Algorithms:**
- Genetic algorithms for parameter optimization
- Mutation, crossover, selection operations
- Good for complex, non-convex spaces
- Libraries: DEAP, TPOT

### Ensemble Methods
Combining multiple models:

**Bagging (Bootstrap Aggregating):**
- Train multiple models on different bootstrap samples
- Average predictions (regression) or vote (classification)
- Reduces variance
- **Random Forest** - Ensemble of decision trees with bagging

**Boosting:**
- Train models sequentially, each correcting previous errors
- Weighted combination of models
- Reduces bias and variance
- **AdaBoost** - Adaptive boosting with exponential loss
- **Gradient Boosting** - Fit new models to residuals
- **XGBoost** - Optimized gradient boosting with regularization
- **LightGBM** - Gradient boosting with histogram-based splitting
- **CatBoost** - Gradient boosting with categorical feature handling

**Stacking:**
- Train multiple base models
- Train meta-model on base model predictions
- Can combine different types of models
- Often achieves best performance in competitions

### Model Interpretability
Understanding model predictions:

**Global Interpretability:**
- **Feature Importance** - Contribution of each feature
- **Partial Dependence Plots** - Marginal effect of features
- **Global Surrogate Models** - Simple model approximating complex model

**Local Interpretability:**
- **LIME** - Local Interpretable Model-agnostic Explanations
- **SHAP** - SHapley Additive exPlanations
- **Counterfactual Explanations** - Minimal changes to flip prediction

**Model-specific Methods:**
- **Decision Trees** - Direct interpretation of splits
- **Linear Models** - Coefficient magnitudes and signs
- **Attention Weights** - In neural networks, which inputs are attended to

### ML Workflow Automation
Streamlining model development:

**AutoML Tools:**
- **Google AutoML** - Cloud-based automated machine learning
- **H2O AutoML** - Open source AutoML platform
- **TPOT** - Tree-based Pipeline Optimization Tool
- **Auto-sklearn** - Automated machine learning with scikit-learn

**MLOps Components:**
- **Version Control** - Code, data, and model versioning
- **Experiment Tracking** - MLflow, Weights & Biases, Neptune
- **Model Registry** - Centralized model storage and management
- **Pipeline Orchestration** - Airflow, Kubeflow, Prefect
- **Model Monitoring** - Performance drift detection
- **Automated Retraining** - Trigger retraining based on metrics

### Ethical Considerations in ML
Responsible machine learning:

**Bias and Fairness:**
- **Dataset Bias** - Underrepresented groups in training data
- **Algorithmic Bias** - Models amplifying existing biases
- **Fairness Metrics** - Demographic parity, equal opportunity
- **Bias Mitigation** - Pre-processing, in-processing, post-processing techniques

**Transparency and Accountability:**
- **Explainability** - Ability to understand model decisions
- **Auditability** - Traceability of model development process
- **Documentation** - Model cards, datasheets for datasets
- **Governance** - Policies and processes for ML systems

**Privacy Preservation:**
- **Differential Privacy** - Formal privacy guarantee
- **Federated Learning** - Train models without sharing raw data
- **Homomorphic Encryption** - Compute on encrypted data
- **Synthetic Data** - Generate artificial data preserving patterns

### Industry Applications
Real-world ML implementations:

**Financial Services:**
- Fraud detection (anomaly detection algorithms)
- Credit scoring (gradient boosting models)
- Algorithmic trading (reinforcement learning)
- Customer churn prediction (classification models)

**Healthcare:**
- Disease diagnosis (image classification CNNs)
- Drug discovery (graph neural networks)
- Patient risk stratification (survival analysis)
- Medical imaging analysis (computer vision)

**Retail and E-commerce:**
- Recommendation systems (collaborative filtering)
- Demand forecasting (time series models)
- Price optimization (reinforcement learning)
- Customer segmentation (clustering algorithms)

**Manufacturing:**
- Predictive maintenance (time series classification)
- Quality control (computer vision)
- Supply chain optimization (operations research + ML)
- Process optimization (reinforcement learning)
`,
      quiz: [
        {
          id: 1,
          question: "What is the expected CAGR of the global machine learning market?",
          options: [
            "38.8%",
            "25.5%",
            "42.3%",
            "30.1%"
          ],
          correctAnswer: 0,
          explanation: "The global machine learning market is expected to grow at a CAGR of 38.8% from 2022 to 2029."
        },
        {
          id: 2,
          question: "Which type of learning predicts continuous values?",
          options: [
            "Regression",
            "Classification",
            "Clustering",
            "Association"
          ],
          correctAnswer: 0,
          explanation: "Regression is a supervised learning task that predicts continuous numerical values."
        },
        {
          id: 3,
          question: "What is the typical train/test split ratio?",
          options: [
            "70/30 or 80/20",
            "60/40 or 75/25",
            "50/50 or 90/10",
            "65/35 or 85/15"
          ],
          correctAnswer: 0,
          explanation: "Typical train/test splits are 70/30 or 80/20, with more data allocated to training."
        },
        {
          id: 4,
          question: "Which feature engineering method creates binary columns for each category?",
          options: [
            "One-Hot Encoding",
            "Label Encoding",
            "Target Encoding",
            "Frequency Encoding"
          ],
          correctAnswer: 0,
          explanation: "One-hot encoding creates binary (0/1) columns for each category value."
        },
        {
          id: 5,
          question: "What does TF-IDF stand for in text processing?",
          options: [
            "Term Frequency-Inverse Document Frequency",
            "Text Frequency-Inverse Document Frequency",
            "Term Frequency-Integrated Document Frequency",
            "Text Frequency-Integrated Document Frequency"
          ],
          correctAnswer: 0,
          explanation: "TF-IDF stands for Term Frequency-Inverse Document Frequency, weighting terms by importance."
        },
        {
          id: 6,
          question: "Which metric is not suitable for imbalanced classification?",
          options: [
            "Accuracy",
            "F1 Score",
            "Precision",
            "Recall"
          ],
          correctAnswer: 0,
          explanation: "Accuracy can be misleading for imbalanced data (e.g., 99% accuracy if 99% negative class)."
        },
        {
          id: 7,
          question: "What does AUC-ROC value of 0.5 indicate?",
          options: [
            "Random classifier",
            "Perfect classifier",
            "Good classifier",
            "Poor classifier"
          ],
          correctAnswer: 0,
          explanation: "AUC-ROC = 0.5 means the classifier performs no better than random guessing."
        },
        {
          id: 8,
          question: "Which ensemble method reduces variance by averaging predictions?",
          options: [
            "Bagging",
            "Boosting",
            "Stacking",
            "Voting"
          ],
          correctAnswer: 0,
          explanation: "Bagging (Bootstrap Aggregating) reduces variance by averaging predictions from multiple models."
        },
        {
          id: 9,
          question: "What does XGBoost stand for?",
          options: [
            "eXtreme Gradient Boosting",
            "eXpanded Gradient Boosting",
            "eXperimental Gradient Boosting",
            "eXtended Gradient Boosting"
          ],
          correctAnswer: 0,
          explanation: "XGBoost stands for eXtreme Gradient Boosting, an optimized gradient boosting implementation."
        },
        {
          id: 10,
          question: "Which method provides local model interpretability?",
          options: [
            "LIME",
            "Feature Importance",
            "Partial Dependence Plots",
            "Global Surrogate Models"
          ],
          correctAnswer: 0,
          explanation: "LIME (Local Interpretable Model-agnostic Explanations) explains individual predictions."
        },
        {
          id: 11,
          question: "How many primary types of machine learning were discussed?",
          options: [
            "Three",
            "Four",
            "Two",
            "Five"
          ],
          correctAnswer: 0,
          explanation: "The three primary types are: Supervised Learning, Unsupervised Learning, and Reinforcement Learning."
        },
        {
          id: 12,
          question: "Which cross-validation method uses k folds?",
          options: [
            "K-fold Cross-Validation",
            "Leave-One-Out",
            "Stratified Sampling",
            "Time-based Split"
          ],
          correctAnswer: 0,
          explanation: "K-fold cross-validation splits data into k folds, using k-1 for training and 1 for validation, rotating k times."
        },
        {
          id: 13,
          question: "What scaling method is robust to outliers?",
          options: [
            "RobustScaler",
            "MinMaxScaler",
            "StandardScaler",
            "Normalizer"
          ],
          correctAnswer: 0,
          explanation: "RobustScaler uses median and interquartile range, making it robust to outliers."
        },
        {
          id: 14,
          question: "Which formula calculates F1 score?",
          options: [
            "2 × (Precision × Recall) / (Precision + Recall)",
            "(Precision + Recall) / 2",
            "Precision × Recall",
            "Precision / Recall"
          ],
          correctAnswer: 0,
          explanation: "F1 Score = 2 × (Precision × Recall) / (Precision + Recall), harmonic mean of precision and recall."
        },
        {
          id: 15,
          question: "What is the main symptom of overfitting?",
          options: [
            "Training accuracy >> Test accuracy",
            "Training accuracy ≈ Test accuracy (both low)",
            "Training accuracy ≈ Test accuracy (both high)",
            "Test accuracy >> Training accuracy"
          ],
          correctAnswer: 0,
          explanation: "Overfitting shows high training accuracy but significantly lower test accuracy."
        },
        {
          id: 16,
          question: "Which hyperparameter tuning method uses random sampling?",
          options: [
            "Random Search",
            "Grid Search",
            "Bayesian Optimization",
            "Evolutionary Algorithms"
          ],
          correctAnswer: 0,
          explanation: "Random Search randomly samples parameters from distributions, more efficient than exhaustive grid search."
        },
        {
          id: 17,
          question: "Which boosting algorithm handles categorical features well?",
          options: [
            "CatBoost",
            "AdaBoost",
            "XGBoost",
            "LightGBM"
          ],
          correctAnswer: 0,
          explanation: "CatBoost (Categorical Boosting) is designed to handle categorical features effectively without extensive preprocessing."
        },
        {
          id: 18,
          question: "What does SHAP stand for in interpretability?",
          options: [
            "SHapley Additive exPlanations",
            "SHapley Attribute Explanations",
            "SHared Additive Explanations",
            "SHapley Algorithmic Explanations"
          ],
          correctAnswer: 0,
          explanation: "SHAP stands for SHapley Additive exPlanations, based on cooperative game theory's Shapley values."
        },
        {
          id: 19,
          question: "Which AutoML tool is open source?",
          options: [
            "H2O AutoML",
            "Google AutoML",
            "Azure AutoML",
            "AWS SageMaker Autopilot"
          ],
          correctAnswer: 0,
          explanation: "H2O AutoML is an open-source automated machine learning platform."
        },
        {
          id: 20,
          question: "Which privacy technique provides formal guarantees?",
          options: [
            "Differential Privacy",
            "Federated Learning",
            "Homomorphic Encryption",
            "Synthetic Data"
          ],
          correctAnswer: 0,
          explanation: "Differential privacy provides mathematically rigorous privacy guarantees for data analysis."
        }
      ]
    },

    // MODULE 3: Deep Learning and Neural Networks
    {
      id: 3,
      title: "Deep Learning and Neural Networks",
      completed: false,
      content: `
# Module 3: Deep Learning and Neural Networks

## Introduction to Deep Learning
Deep learning uses neural networks with multiple layers to learn hierarchical representations of data. The deep learning market size is projected to grow from $9.5 billion in 2022 to $93.3 billion by 2028, at a CAGR of 46.2%.

### Neural Network Fundamentals
Basic building blocks of neural networks:

**Perceptron:**
- Basic computational unit of neural networks
- Input: x₁, x₂, ..., xₙ
- Weights: w₁, w₂, ..., wₙ
- Bias: b
- Output: f(Σ(wᵢxᵢ) + b) where f is activation function

**Activation Functions:**
- **Sigmoid** - σ(x) = 1/(1+e⁻ˣ) [0,1], suffers from vanishing gradient
- **Tanh** - tanh(x) = (eˣ - e⁻ˣ)/(eˣ + e⁻ˣ) [-1,1], zero-centered
- **ReLU** - f(x) = max(0,x), most popular, avoids vanishing gradient
- **Leaky ReLU** - f(x) = max(αx,x), α small (e.g., 0.01), fixes dying ReLU
- **ELU** - Exponential Linear Unit, smoother than ReLU
- **Swish** - f(x) = x × sigmoid(βx), Google's activation, often outperforms ReLU

**Network Architecture:**
- **Input Layer** - Receives features
- **Hidden Layers** - Multiple layers for hierarchical feature learning
- **Output Layer** - Produces predictions (different activations for different tasks)
- **Parameters** - Weights and biases learned during training

### Training Neural Networks
Optimization process for neural networks:

**Backpropagation Algorithm:**
1. **Forward Pass** - Compute predictions and loss
2. **Backward Pass** - Compute gradients using chain rule
3. **Parameter Update** - Update weights using gradients
4. **Repeat** until convergence

**Loss Functions:**
- **Mean Squared Error** - For regression: L = 1/n Σ(y - ŷ)²
- **Cross-Entropy Loss** - For classification: L = -Σ y log(ŷ)
- **Binary Cross-Entropy** - For binary classification
- **Categorical Cross-Entropy** - For multi-class classification
- **Hinge Loss** - For SVM-style classification
- **Huber Loss** - Robust to outliers, combines MSE and MAE

**Optimization Algorithms:**
- **Stochastic Gradient Descent (SGD)** - Update after each sample
- **Mini-batch Gradient Descent** - Update after each batch (typical: 32, 64, 128)
- **Momentum** - Accumulates past gradients for smoother updates
- **RMSProp** - Adapts learning rate per parameter
- **Adam** - Combines Momentum and RMSProp (most popular)
- **AdamW** - Adam with decoupled weight decay
- **Learning Rate Schedulers** - Reduce learning rate over time

### Regularization Techniques
Preventing overfitting in deep networks:

**Architectural Regularization:**
- **Dropout** - Randomly set activations to zero during training (p=0.5 common)
- **DropConnect** - Drop connections instead of activations
- **Batch Normalization** - Normalize activations in mini-batches
- **Layer Normalization** - Normalize across features (for RNNs)
- **Weight Decay** - L2 regularization on weights
- **Early Stopping** - Stop when validation loss stops improving

**Data Augmentation:**
- **Image Augmentation** - Rotation, flip, crop, color jitter
- **Text Augmentation** - Synonym replacement, back translation
- **Audio Augmentation** - Noise addition, time stretching
- **Synthetic Data** - Generative models creating new examples

**Other Techniques:**
- **Gradient Clipping** - Prevent exploding gradients
- **Label Smoothing** - Convert hard labels to soft probabilities
- **Mixup** - Linear interpolation of samples and labels
- **Cutout** - Randomly mask parts of input

### Convolutional Neural Networks (CNNs)
Specialized for grid-like data (images):

**CNN Architecture:**
- **Convolutional Layers** - Learn spatial features with shared weights
- **Pooling Layers** - Reduce spatial dimensions (Max Pooling, Average Pooling)
- **Fully Connected Layers** - Final classification/regression

**Convolution Operations:**
- **Kernel/Filter** - Small matrix that slides over input
- **Stride** - Step size of kernel movement
- **Padding** - Add zeros around input to control output size
- **Dilation** - Spacing between kernel elements
- **Groups** - Split input channels into groups

**Popular CNN Architectures:**
- **LeNet-5** - Early CNN for digit recognition (1998)
- **AlexNet** - Deep CNN breakthrough (2012, ImageNet winner)
- **VGG** - Very deep with 3×3 convolutions (2014)
- **GoogLeNet/Inception** - Multiple filter sizes in parallel (2014)
- **ResNet** - Residual connections enable very deep networks (2015)
- **DenseNet** - Each layer connects to all subsequent layers (2016)
- **EfficientNet** - Compound scaling of depth, width, resolution (2019)

### Recurrent Neural Networks (RNNs)
Specialized for sequence data:

**Basic RNN:**
- Hidden state: hₜ = f(Wₕₕhₜ₋₁ + Wₓₕxₜ + b)
- Output: yₜ = g(Wₕᵧhₜ + c)
- Problem: Vanishing/exploding gradients in long sequences

**Long Short-Term Memory (LSTM):**
- **Forget Gate** - What information to discard
- **Input Gate** - What new information to store
- **Cell State** - Long-term memory
- **Output Gate** - What to output
- Solves vanishing gradient problem for longer sequences

**Gated Recurrent Unit (GRU):**
- Simplified version of LSTM
- **Update Gate** - Combination of forget and input gates
- **Reset Gate** - How much past information to forget
- Fewer parameters than LSTM, often comparable performance

**Bidirectional RNNs:**
- Process sequence in both directions
- Forward RNN: left to right
- Backward RNN: right to left
- Combine both for final output
- Better context understanding

### Transformers and Attention
Modern architecture for sequences:

**Attention Mechanism:**
- **Query, Key, Value** - Three learned projections
- **Scaled Dot-Product Attention**: Attention(Q,K,V) = softmax(QKᵀ/√dₖ)V
- **Multi-Head Attention** - Multiple attention heads in parallel
- Allows focusing on relevant parts of input regardless of position

**Transformer Architecture:**
- **Encoder** - Processes input sequence
- **Decoder** - Generates output sequence (for seq2seq tasks)
- **Positional Encoding** - Adds position information to embeddings
- **Layer Normalization** - Applied before sub-layers (Pre-LN) or after (Post-LN)
- **Feed-Forward Networks** - Position-wise fully connected layers

**Transformer Variants:**
- **BERT** - Bidirectional Encoder Representations from Transformers
- **GPT** - Generative Pre-trained Transformer (Decoder-only)
- **T5** - Text-to-Text Transfer Transformer
- **ViT** - Vision Transformer (for images)
- **Swin Transformer** - Hierarchical vision transformer

### Autoencoders and Generative Models
Learning representations and generating data:

**Autoencoders:**
- **Encoder** - Maps input to latent representation
- **Decoder** - Reconstructs input from latent representation
- **Applications**: Dimensionality reduction, anomaly detection, denoising

**Variational Autoencoders (VAEs):**
- Probabilistic autoencoder
- Learn latent distribution (typically Gaussian)
- Can generate new samples by sampling from latent space
- Loss: Reconstruction loss + KL divergence

**Generative Adversarial Networks (GANs):**
- **Generator** - Creates fake samples
- **Discriminator** - Distinguishes real from fake
- Adversarial training: Generator tries to fool discriminator
- **Variants**: DCGAN, StyleGAN, CycleGAN, WGAN

**Diffusion Models:**
- Forward process: Gradually add noise to data
- Reverse process: Learn to denoise
- State-of-the-art for image generation (2022-2023)
- **Stable Diffusion** - Latent diffusion models

### Deep Learning Frameworks
Tools for implementing neural networks:

**TensorFlow Ecosystem:**
- **TensorFlow Core** - Main library
- **Keras** - High-level API (now integrated)
- **TensorFlow Lite** - For mobile and embedded devices
- **TensorFlow.js** - For JavaScript environments
- **TensorFlow Serving** - Model deployment

**PyTorch Ecosystem:**
- **PyTorch Core** - Dynamic computation graphs
- **TorchVision** - For computer vision
- **TorchText** - For NLP
- **TorchAudio** - For audio processing
- **PyTorch Lightning** - High-level wrapper

**Other Frameworks:**
- **JAX** - Composable transformations of Python+NumPy
- **MXNet** - Efficient and flexible deep learning
- **Caffe/Caffe2** - Originally from Berkeley, now Facebook
- **ONNX** - Open Neural Network Exchange format

### Hardware for Deep Learning
Accelerating neural network training:

**GPUs:**
- **NVIDIA** - Dominant in deep learning (CUDA platform)
- **AMD** - ROCm platform, growing support
- **Memory Considerations** - VRAM size limits model/batch size

**TPUs (Tensor Processing Units):**
- Google's custom ASICs for neural networks
- Optimized for matrix operations
- Available via Google Cloud

**Other Accelerators:**
- **FPGAs** - Field Programmable Gate Arrays
- **ASICs** - Application-Specific Integrated Circuits
- **Neuromorphic Chips** - Brain-inspired hardware

**Cloud Platforms:**
- **AWS** - EC2 instances with GPUs, SageMaker
- **Google Cloud** - TPUs, GPU instances
- **Azure** - GPU VMs, Machine Learning service
- **Specialized** - Lambda Labs, Paperspace, RunPod

### Model Compression and Optimization
Deploying efficient models:

**Quantization:**
- Reduce precision of weights/activations
- **FP32 → FP16** - Half precision (common for training)
- **FP32 → INT8** - 8-bit integers (for inference)
- **Mixed Precision** - Different precisions for different operations

**Pruning:**
- Remove unnecessary weights/neurons
- **Magnitude-based** - Remove smallest weights
- **Structured** - Remove entire filters/channels
- **Iterative** - Prune, retrain, repeat

**Knowledge Distillation:**
- Train small student model to mimic large teacher model
- Use teacher's soft predictions as additional training signal
- Often achieves better performance than training student from scratch

**Architecture Search:**
- **Neural Architecture Search (NAS)** - Automatically find optimal architecture
- **EfficientNet** - Result of NAS + compound scaling
- **MobileNet** - Designed for mobile devices

### Ethical Considerations in Deep Learning
Specific challenges in deep learning:

**Bias Amplification:**
- Deep models can amplify biases in training data
- Face recognition systems performing worse on certain demographics
- Requires careful dataset curation and evaluation

**Deepfakes and Misinformation:**
- Generative models can create realistic fake content
- Need for detection methods and policies
- Watermarking and provenance tracking

**Privacy in Federated Learning:**
- Train models across devices without sharing raw data
- Still vulnerable to model inversion attacks
- Differential privacy can provide guarantees

**Environmental Impact:**
- Large models require significant energy for training
- GPT-3 training estimated to emit 552 tons of CO₂
- Need for efficient architectures and renewable energy

### Emerging Trends
Latest developments in deep learning:

**Large Language Models (LLMs):**
- GPT-3/4 (175B+ parameters), PaLM, LLaMA, Claude
- In-context learning, few-shot prompting
- Reinforcement Learning from Human Feedback (RLHF)

**Multimodal Models:**
- DALL-E, Stable Diffusion (text-to-image)
- CLIP (connects images and text)
- AudioLM, MusicLM (audio generation)

**Foundation Models:**
- Large models pre-trained on broad data
- Fine-tuned for specific tasks
- Prompt engineering and in-context learning

**Neural Rendering and 3D:**
- NeRF (Neural Radiance Fields)
- InstantNGP (accelerated NeRF)
- 3D generative models
`,
      quiz: [
        {
          id: 1,
          question: "What is the projected CAGR for the deep learning market?",
          options: [
            "46.2%",
            "38.5%",
            "52.1%",
            "42.8%"
          ],
          correctAnswer: 0,
          explanation: "The deep learning market is projected to grow at a CAGR of 46.2% from 2022 to 2028."
        },
        {
          id: 2,
          question: "Which activation function is most commonly used in modern neural networks?",
          options: [
            "ReLU",
            "Sigmoid",
            "Tanh",
            "Leaky ReLU"
          ],
          correctAnswer: 0,
          explanation: "ReLU (Rectified Linear Unit) is the most popular activation function due to its simplicity and effectiveness."
        },
        {
          id: 3,
          question: "What is the typical batch size for mini-batch gradient descent?",
          options: [
            "32, 64, or 128",
            "16, 32, or 64",
            "64, 128, or 256",
            "8, 16, or 32"
          ],
          correctAnswer: 0,
          explanation: "Typical batch sizes are powers of 2: 32, 64, or 128, balancing memory efficiency and gradient estimate quality."
        },
        {
          id: 4,
          question: "Which optimization algorithm combines Momentum and RMSProp?",
          options: [
            "Adam",
            "SGD",
            "AdamW",
            "RMSProp"
          ],
          correctAnswer: 0,
          explanation: "Adam (Adaptive Moment Estimation) combines ideas from Momentum (first moment) and RMSProp (second moment)."
        },
        {
          id: 5,
          question: "What does CNN stand for?",
          options: [
            "Convolutional Neural Network",
            "Convergent Neural Network",
            "Cascaded Neural Network",
            "Complex Neural Network"
          ],
          correctAnswer: 0,
          explanation: "CNN stands for Convolutional Neural Network, specialized for processing grid-like data such as images."
        },
        {
          id: 6,
          question: "Which CNN architecture introduced residual connections?",
          options: [
            "ResNet",
            "AlexNet",
            "VGG",
            "GoogLeNet"
          ],
          correctAnswer: 0,
          explanation: "ResNet (Residual Network) introduced residual connections that enable training of very deep networks."
        },
        {
          id: 7,
          question: "What problem do LSTMs solve that basic RNNs struggle with?",
          options: [
            "Vanishing gradient problem in long sequences",
            "Exploding gradient problem",
            "Overfitting",
            "Underfitting"
          ],
          correctAnswer: 0,
          explanation: "LSTMs (Long Short-Term Memory) solve the vanishing gradient problem, allowing them to learn long-term dependencies."
        },
        {
          id: 8,
          question: "Which mechanism allows focusing on relevant parts of input regardless of position?",
          options: [
            "Attention",
            "Convolution",
            "Pooling",
            "Normalization"
          ],
          correctAnswer: 0,
          explanation: "The attention mechanism allows models to focus on relevant parts of the input sequence regardless of their position."
        },
        {
          id: 9,
          question: "What does BERT stand for?",
          options: [
            "Bidirectional Encoder Representations from Transformers",
            "Bidirectional Embedding Representations from Transformers",
            "Bidirectional Encoding Representations from Transformers",
            "Bidirectional Extraction Representations from Transformers"
          ],
          correctAnswer: 0,
          explanation: "BERT stands for Bidirectional Encoder Representations from Transformers, a transformer-based language model."
        },
        {
          id: 10,
          question: "Which generative model uses a generator and discriminator in adversarial training?",
          options: [
            "GAN (Generative Adversarial Network)",
            "VAE (Variational Autoencoder)",
            "Diffusion Model",
            "Autoencoder"
          ],
          correctAnswer: 0,
          explanation: "GANs use a generator to create samples and a discriminator to distinguish real from fake, trained adversarially."
        },
        {
          id: 11,
          question: "Which framework uses dynamic computation graphs?",
          options: [
            "PyTorch",
            "TensorFlow",
            "JAX",
            "MXNet"
          ],
          correctAnswer: 0,
          explanation: "PyTorch uses dynamic computation graphs (define-by-run) while TensorFlow traditionally used static graphs."
        },
        {
          id: 12,
          question: "What does TPU stand for?",
          options: [
            "Tensor Processing Unit",
            "Tensor Processing Unit",
            "Training Processing Unit",
            "Tensor Performance Unit"
          ],
          correctAnswer: 0,
          explanation: "TPU stands for Tensor Processing Unit, Google's custom ASIC designed specifically for neural network computations."
        },
        {
          id: 13,
          question: "Which technique reduces precision of weights for efficient inference?",
          options: [
            "Quantization",
            "Pruning",
            "Knowledge Distillation",
            "Architecture Search"
          ],
          correctAnswer: 0,
          explanation: "Quantization reduces the precision of weights and activations (e.g., from 32-bit to 8-bit) for efficient inference."
        },
        {
          id: 14,
          question: "What is the common dropout probability during training?",
          options: [
            "0.5",
            "0.3",
            "0.7",
            "0.1"
          ],
          correctAnswer: 0,
          explanation: "A dropout probability of 0.5 is commonly used, meaning each neuron has 50% chance of being dropped during training."
        },
        {
          id: 15,
          question: "Which loss function is used for binary classification?",
          options: [
            "Binary Cross-Entropy",
            "Mean Squared Error",
            "Categorical Cross-Entropy",
            "Huber Loss"
          ],
          correctAnswer: 0,
          explanation: "Binary cross-entropy loss is used for binary classification problems with two classes."
        },
        {
          id: 16,
          question: "What does GRU stand for?",
          options: [
            "Gated Recurrent Unit",
            "Gated Recurrent Unit",
            "Gradient Recurrent Unit",
            "Gated Recurrent Update"
          ],
          correctAnswer: 0,
          explanation: "GRU stands for Gated Recurrent Unit, a simplified version of LSTM with fewer parameters."
        },
        {
          id: 17,
          question: "Which normalization is preferred for RNNs?",
          options: [
            "Layer Normalization",
            "Batch Normalization",
            "Weight Normalization",
            "Instance Normalization"
          ],
          correctAnswer: 0,
          explanation: "Layer Normalization is preferred for RNNs because it works across the feature dimension rather than batch dimension."
        },
        {
          id: 18,
          question: "What does NAS stand for in deep learning?",
          options: [
            "Neural Architecture Search",
            "Network Architecture Search",
            "Neural Automated Search",
            "Network Automated Search"
          ],
          correctAnswer: 0,
          explanation: "NAS stands for Neural Architecture Search, automatically finding optimal neural network architectures."
        },
        {
          id: 19,
          question: "Which model compression technique trains a small student to mimic a large teacher?",
          options: [
            "Knowledge Distillation",
            "Quantization",
            "Pruning",
            "Low-rank Factorization"
          ],
          correctAnswer: 0,
          explanation: "Knowledge distillation trains a smaller student model to mimic the predictions of a larger teacher model."
        },
        {
          id: 20,
          question: "What are models like GPT-3 and PaLM classified as?",
          options: [
            "Large Language Models (LLMs)",
            "Convolutional Neural Networks",
            "Variational Autoencoders",
            "Generative Adversarial Networks"
          ],
          correctAnswer: 0,
          explanation: "GPT-3, PaLM, and similar models with billions of parameters are classified as Large Language Models (LLMs)."
        }
      ]
    },

    // MODULE 4: Big Data Technologies
    {
      id: 4,
      title: "Big Data Technologies",
      completed: false,
      content: `
# Module 4: Big Data Technologies

## Introduction to Big Data
Big Data refers to datasets that are too large or complex for traditional data processing systems. The global big data market size is expected to grow from $271.83 billion in 2022 to $655.53 billion by 2029, at a CAGR of 13.4%.

### The 5 Vs of Big Data
Characteristics defining big data:

1. **Volume** - Scale of data (terabytes to exabytes)
   - Social media: 500+ terabytes daily (Twitter, Facebook)
   - IoT devices: 79.4 zettabytes by 2025 (IDC forecast)

2. **Velocity** - Speed of data generation and processing
   - Real-time processing requirements
   - High-frequency trading: microseconds latency
   - Social media streams: thousands of posts per second

3. **Variety** - Different forms of data
   - Structured: Databases, spreadsheets (20% of enterprise data)
   - Semi-structured: JSON, XML, log files (30% of enterprise data)
   - Unstructured: Text, images, videos (50% of enterprise data)

4. **Veracity** - Quality and reliability of data
   - Data accuracy issues in 30-40% of big data projects
   - Trustworthiness and credibility challenges

5. **Value** - Business value extraction
   - Only 0.5% of all data is ever analyzed (MIT research)
   - Proper analysis can yield significant business insights

### Big Data Architecture Patterns
Common architectural approaches:

**Lambda Architecture:**
- **Batch Layer** - Processes all data (high latency, complete accuracy)
- **Speed Layer** - Processes real-time data (low latency, approximate results)
- **Serving Layer** - Merges batch and real-time views
- **Use Cases**: Social media analytics, fraud detection

**Kappa Architecture:**
- Single stream processing pipeline
- All data treated as stream
- Replay capability for reprocessing
- Simpler than Lambda, gaining popularity

**Data Lake Architecture:**
- Centralized repository for raw data
- Schema-on-read (unlike data warehouse: schema-on-write)
- Stores structured, semi-structured, unstructured data
- Often built on cloud storage (S3, ADLS, GCS)

**Data Mesh Architecture:**
- Domain-oriented decentralized architecture
- Data as a product
- Self-serve data infrastructure
- Federated governance

### Hadoop Ecosystem
Open-source framework for distributed storage and processing:

**Core Components:**
- **HDFS** - Hadoop Distributed File System
  - Blocks: 128MB or 256MB default size
  - Replication: Default 3 copies for fault tolerance
  - NameNode: Manages metadata
  - DataNodes: Store actual data blocks

- **YARN** - Yet Another Resource Negotiator
  - Resource management layer
  - Manages cluster resources
  - Schedules applications

- **MapReduce** - Programming model
  - Map phase: Process and transform data
  - Shuffle phase: Sort and transfer data
  - Reduce phase: Aggregate results
  - Being replaced by Spark for many use cases

**Hadoop Ecosystem Tools:**
- **Hive** - SQL-like interface (HiveQL) for querying
- **Pig** - High-level scripting language (Pig Latin)
- **HBase** - NoSQL database on HDFS
- **Sqoop** - Transfer between Hadoop and relational databases
- **Flume** - Collect, aggregate, move log data
- **Oozie** - Workflow scheduler

### Apache Spark
Unified analytics engine for large-scale data processing:

**Spark Architecture:**
- **Driver Program** - Main program, creates SparkContext
- **Cluster Manager** - YARN, Mesos, Kubernetes, or Standalone
- **Worker Nodes** - Execute tasks
- **Executors** - Run on worker nodes, execute tasks
- **Tasks** - Unit of work sent to executor

**Spark APIs:**
- **Spark SQL** - Structured data processing (DataFrames/Datasets)
- **Spark Streaming** - Real-time stream processing
- **MLlib** - Machine learning library
- **GraphX** - Graph processing

**Spark Concepts:**
- **RDD** - Resilient Distributed Dataset (immutable, partitioned)
- **DataFrame** - Distributed collection organized into named columns
- **Dataset** - Type-safe, object-oriented programming interface
- **Transformations** - Lazy operations (map, filter, join)
- **Actions** - Trigger computation (count, collect, save)

**Spark Performance:**
- In-memory processing: 100x faster than Hadoop MapReduce for iterative algorithms
- DAG (Directed Acyclic Graph) execution engine
- Catalyst optimizer for SQL queries
- Tungsten execution engine for CPU/memory efficiency

### Stream Processing
Real-time data processing technologies:

**Apache Kafka:**
- Distributed event streaming platform
- **Topics** - Categories/feeds for messages
- **Partitions** - Topics split into partitions for parallelism
- **Producers** - Publish messages to topics
- **Consumers** - Subscribe to topics and process messages
- **Brokers** - Kafka servers forming cluster
- **ZooKeeper** - Coordination service (being phased out in newer versions)

**Stream Processing Frameworks:**
- **Apache Flink** - True streaming (vs micro-batching)
- **Apache Storm** - First generation stream processor
- **Spark Streaming** - Micro-batch processing
- **ksqlDB** - Streaming SQL engine for Kafka
- **Apache Samza** - Integrated with Kafka

**Stream Processing Patterns:**
- **Event Time vs Processing Time** - Handling late data
- **Windowing** - Tumbling, sliding, session windows
- **Watermarks** - Progress indicators in event time
- **State Management** - Maintaining state across events
- **Exactly-once Semantics** - Guarantee each event processed once

### NoSQL Databases
Non-relational databases for big data:

**Types of NoSQL Databases:**
1. **Document Stores** - MongoDB, Couchbase
   - Store JSON/BSON documents
   - Flexible schema
   - Good for content management, catalogs

2. **Key-Value Stores** - Redis, DynamoDB
   - Simple key-value pairs
   - High performance, low latency
   - Good for caching, session storage

3. **Column-Family Stores** - Cassandra, HBase
   - Store data in columns rather than rows
   - Good for time series, IoT data
   - High write throughput

4. **Graph Databases** - Neo4j, Amazon Neptune
   - Store nodes and relationships
   - Good for social networks, recommendation engines
   - Efficient for connected data queries

**CAP Theorem:**
- **Consistency** - All nodes see same data at same time
- **Availability** - Every request receives response
- **Partition Tolerance** - System continues despite network partitions
- Can only guarantee 2 out of 3
- Most NoSQL databases choose AP (Availability + Partition Tolerance)

### Data Warehousing Modernization
Modern approaches to data warehousing:

**Cloud Data Warehouses:**
- **Snowflake** - Cloud-native, separation of storage and compute
- **BigQuery** - Google's serverless data warehouse
- **Redshift** - Amazon's cloud data warehouse
- **Azure Synapse Analytics** - Microsoft's analytics service
- **Databricks SQL** - SQL analytics on data lake

**Data Lakehouses:**
- Combine benefits of data lakes and data warehouses
- ACID transactions on data lakes
- Schema enforcement and governance
- Direct access to data in open formats (Parquet, Delta Lake)
- **Delta Lake** - Open format storage layer (Databricks)
- **Apache Iceberg** - Open table format (Netflix, Apple)
- **Apache Hudi** - Incremental processing (Uber)

### Data Pipeline Tools
Orchestration and workflow management:

**Orchestration Tools:**
- **Apache Airflow** - Programmatic workflow orchestration (Python)
- **Prefect** - Modern workflow orchestration
- **Dagster** - Data-aware workflow orchestrator
- **Luigi** - Spotify's pipeline builder
- **Apache NiFi** - Data flow automation

**Data Integration Tools:**
- **dbt** - Data build tool (transformations in data warehouse)
- **Fivetran** - Managed ELT service
- **Stitch** - Simple ETL service
- **Matillion** - Cloud-native ETL/ELT
- **Informatica** - Enterprise data integration

### Cloud Big Data Services
Managed big data services on cloud platforms:

**AWS Big Data Services:**
- **EMR** - Elastic MapReduce (managed Hadoop/Spark)
- **Glue** - Serverless ETL service
- **Kinesis** - Real-time data streaming
- **MSK** - Managed Streaming for Kafka
- **Athena** - Serverless query service for S3

**Google Cloud Big Data Services:**
- **Dataproc** - Managed Spark and Hadoop
- **Dataflow** - Managed stream and batch processing
- **Pub/Sub** - Messaging and event ingestion
- **Bigtable** - NoSQL database service
- **Data Fusion** - Visual data integration

**Azure Big Data Services:**
- **HDInsight** - Managed Hadoop, Spark, Kafka
- **Data Factory** - Cloud ETL service
- **Event Hubs** - Real-time data ingestion
- **Stream Analytics** - Real-time analytics
- **Databricks** - Apache Spark-based analytics

### Data Governance and Quality
Managing big data at scale:

**Data Governance Framework:**
- **Data Catalog** - Metadata management (Collibra, Alation, AWS Glue Data Catalog)
- **Data Lineage** - Tracking data flow and transformations
- **Data Quality** - Monitoring and validation
- **Master Data Management** - Golden record creation
- **Data Security** - Access control, encryption, masking

**Data Quality Dimensions for Big Data:**
- **Completeness** - Percentage of expected data available
- **Accuracy** - Data correctly represents real-world values
- **Consistency** - Uniformity across different data sources
- **Timeliness** - Data available when needed
- **Validity** - Data conforms to defined business rules
- **Uniqueness** - No duplicate records

**Data Observability:**
- Monitoring data pipelines and quality
- Alerting on data issues
- Root cause analysis for data problems
- Tools: Monte Carlo, Bigeye, Soda Data

### Performance Optimization
Optimizing big data systems:

**Storage Optimization:**
- **Compression** - Snappy, Gzip, Zstandard, LZ4
- **Columnar Formats** - Parquet, ORC (optimized for analytics)
- **Partitioning** - Divide data by date, category, etc.
- **Bucketing/Clustering** - Group similar data together

**Query Optimization:**
- **Statistics Collection** - Table and column statistics
- **Indexing** - Improve query performance
- **Materialized Views** - Pre-computed query results
- **Caching** - Frequently accessed data in memory

**Compute Optimization:**
- **Resource Allocation** - Right-sizing clusters
- **Auto-scaling** - Scale based on workload
- **Spot/Preemptible Instances** - Cost-effective compute
- **Serverless** - Pay only for queries executed

### Emerging Trends
Future directions in big data:

**Data Fabric and Data Mesh:**
- Automated data integration
- Self-service data access
- Federated governance

**Real-time Analytics at Scale:**
- Sub-second query performance on petabyte-scale data
- Real-time machine learning inference

**Unified Batch and Streaming:**
- Same code for batch and streaming
- Simplified architecture

**AI/ML Integration:**
- Automated feature engineering
- ML model operationalization at scale
- AI-powered data quality and governance

**Green Computing:**
- Energy-efficient data centers
- Carbon-aware scheduling
- Sustainable data practices
`,
      quiz: [
        {
          id: 1,
          question: "What is the expected CAGR for the global big data market?",
          options: [
            "13.4%",
            "18.2%",
            "22.5%",
            "9.8%"
          ],
          correctAnswer: 0,
          explanation: "The global big data market is expected to grow at a CAGR of 13.4% from 2022 to 2029."
        },
        {
          id: 2,
          question: "Which of the 5 Vs refers to the scale of data?",
          options: [
            "Volume",
            "Velocity",
            "Variety",
            "Veracity"
          ],
          correctAnswer: 0,
          explanation: "Volume refers to the scale of data, ranging from terabytes to exabytes in big data systems."
        },
        {
          id: 3,
          question: "What percentage of enterprise data is unstructured?",
          options: [
            "50%",
            "30%",
            "20%",
            "40%"
          ],
          correctAnswer: 0,
          explanation: "Approximately 50% of enterprise data is unstructured (text, images, videos, etc.)."
        },
        {
          id: 4,
          question: "What is the default block size in HDFS?",
          options: [
            "128MB or 256MB",
            "64MB or 128MB",
            "256MB or 512MB",
            "32MB or 64MB"
          ],
          correctAnswer: 0,
          explanation: "HDFS default block size is 128MB or 256MB, much larger than traditional file system blocks."
        },
        {
          id: 5,
          question: "How many times faster is Spark than Hadoop MapReduce for iterative algorithms?",
          options: [
            "100x faster",
            "10x faster",
            "50x faster",
            "200x faster"
          ],
          correctAnswer: 0,
          explanation: "Spark's in-memory processing can be up to 100x faster than Hadoop MapReduce for iterative algorithms."
        },
        {
          id: 6,
          question: "What does RDD stand for in Spark?",
          options: [
            "Resilient Distributed Dataset",
            "Resilient Data Distribution",
            "Recursive Distributed Data",
            "Resilient Distributed Data"
          ],
          correctAnswer: 0,
          explanation: "RDD stands for Resilient Distributed Dataset, Spark's fundamental data structure."
        },
        {
          id: 7,
          question: "Which component manages metadata in HDFS?",
          options: [
            "NameNode",
            "DataNode",
            "ResourceManager",
            "NodeManager"
          ],
          correctAnswer: 0,
          explanation: "The NameNode manages metadata (file names, permissions, block locations) in HDFS."
        },
        {
          id: 8,
          question: "What is the default replication factor in HDFS?",
          options: [
            "3 copies",
            "2 copies",
            "4 copies",
            "5 copies"
          ],
          correctAnswer: 0,
          explanation: "HDFS default replication factor is 3, storing three copies of each block for fault tolerance."
        },
        {
          id: 9,
          question: "Which NoSQL database type stores JSON documents?",
          options: [
            "Document Stores",
            "Key-Value Stores",
            "Column-Family Stores",
            "Graph Databases"
          ],
          correctAnswer: 0,
          explanation: "Document stores like MongoDB store JSON/BSON documents with flexible schema."
        },
        {
          id: 10,
          question: "According to CAP theorem, how many properties can be guaranteed simultaneously?",
          options: [
            "2 out of 3",
            "1 out of 3",
            "3 out of 3",
            "All 3 in different scenarios"
          ],
          correctAnswer: 0,
          explanation: "CAP theorem states that a distributed system can only guarantee 2 out of 3: Consistency, Availability, Partition Tolerance."
        },
        {
          id: 11,
          question: "What does YARN stand for in Hadoop?",
          options: [
            "Yet Another Resource Negotiator",
            "Yahoo Adaptive Resource Navigator",
            "Yet Another Resource Network",
            "Yahoo Application Resource Negotiator"
          ],
          correctAnswer: 0,
          explanation: "YARN stands for Yet Another Resource Negotiator, Hadoop's resource management layer."
        },
        {
          id: 12,
          question: "Which architecture has separate batch and speed layers?",
          options: [
            "Lambda Architecture",
            "Kappa Architecture",
            "Data Lake Architecture",
            "Data Mesh Architecture"
          ],
          correctAnswer: 0,
          explanation: "Lambda Architecture has separate batch layer (complete accuracy) and speed layer (real-time processing)."
        },
        {
          id: 13,
          question: "What percentage of all data is ever analyzed according to MIT research?",
          options: [
            "0.5%",
            "5%",
            "10%",
            "1%"
          ],
          correctAnswer: 0,
          explanation: "MIT research suggests only 0.5% of all data is ever analyzed, highlighting big data's potential."
        },
        {
          id: 14,
          question: "Which Spark API is for structured data processing?",
          options: [
            "Spark SQL",
            "Spark Streaming",
            "MLlib",
            "GraphX"
          ],
          correctAnswer: 0,
          explanation: "Spark SQL provides DataFrame/Dataset API for structured data processing with SQL queries."
        },
        {
          id: 15,
          question: "Which streaming framework uses true streaming (not micro-batching)?",
          options: [
            "Apache Flink",
            "Spark Streaming",
            "Storm",
            "ksqlDB"
          ],
          correctAnswer: 0,
          explanation: "Apache Flink uses true streaming model while Spark Streaming uses micro-batching approach."
        },
        {
          id: 16,
          question: "What does dbt stand for?",
          options: [
            "Data Build Tool",
            "Database Build Tool",
            "Data Business Tool",
            "Database Business Tool"
          ],
          correctAnswer: 0,
          explanation: "dbt stands for Data Build Tool, used for transformations in the data warehouse."
        },
        {
          id: 17,
          question: "Which cloud data warehouse separates storage and compute?",
          options: [
            "Snowflake",
            "Redshift",
            "BigQuery",
            "Synapse"
          ],
          correctAnswer: 0,
          explanation: "Snowflake pioneered separation of storage and compute in cloud data warehousing."
        },
        {
          id: 18,
          question: "Which columnar format is optimized for analytics?",
          options: [
            "Parquet",
            "CSV",
            "JSON",
            "Avro"
          ],
          correctAnswer: 0,
          explanation: "Parquet is a columnar storage format optimized for analytical queries with efficient compression."
        },
        {
          id: 19,
          question: "What is the coordination service used by Kafka?",
          options: [
            "ZooKeeper",
            "YARN",
            "Mesos",
            "Kubernetes"
          ],
          correctAnswer: 0,
          explanation: "Kafka uses ZooKeeper for coordination (though newer versions are removing this dependency)."
        },
        {
          id: 20,
          question: "Which architecture treats all data as a stream?",
          options: [
            "Kappa Architecture",
            "Lambda Architecture",
            "Data Lake Architecture",
            "Data Warehouse Architecture"
          ],
          correctAnswer: 0,
          explanation: "Kappa Architecture treats all data as a stream, simplifying the architecture compared to Lambda."
        }
      ]
    },

    // MODULE 5: Natural Language Processing
    {
      id: 5,
      title: "Natural Language Processing",
      completed: false,
      content: `
# Module 5: Natural Language Processing

## Introduction to NLP
Natural Language Processing enables computers to understand, interpret, and generate human language. The global NLP market is projected to grow from $20.8 billion in 2021 to $161.8 billion by 2029, at a CAGR of 29.4%.

### NLP Pipeline
Standard workflow for NLP tasks:

**Text Preprocessing Steps:**
1. **Tokenization** - Split text into tokens (words, subwords)
   - Word tokenization: "I'm happy" → ["I", "'m", "happy"]
   - Sentence tokenization: Split into sentences
   - Subword tokenization: BPE, WordPiece, SentencePiece

2. **Normalization** - Convert to standard form
   - Lowercasing (not always appropriate)
   - Stemming: "running" → "run" (Porter, Snowball stemmers)
   - Lemmatization: "better" → "good" (requires POS tagging)
   - Removing punctuation, numbers, special characters

3. **Stop Word Removal** - Remove common words (the, is, at)
   - Can improve performance for some tasks
   - May hurt performance for tasks like sentiment analysis

4. **Part-of-Speech Tagging** - Label words with POS (noun, verb, etc.)
   - Penn Treebank: 45 tags
   - Universal Dependencies: 17 tags

5. **Named Entity Recognition** - Identify entities (person, location, etc.)

**Text Representation:**
- **One-hot Encoding** - Binary vectors for each word
- **Bag of Words** - Word frequency vectors
- **TF-IDF** - Term frequency-inverse document frequency
- **Word Embeddings** - Dense vector representations

### Word Embeddings
Dense representations capturing semantic meaning:

**Static Word Embeddings:**
- **Word2Vec** - Google (2013)
  - Skip-gram: Predict context words given target
  - CBOW: Predict target word given context
  - Typically 100-300 dimensions

- **GloVe** - Stanford (2014)
  - Global vectors from word-word co-occurrence matrix
  - Combines global statistics with local context

- **FastText** - Facebook (2016)
  - Represents words as bag of character n-grams
  - Handles out-of-vocabulary words better

**Contextual Word Embeddings:**
- **ELMo** - Deep contextualized word representations
  - Uses bidirectional LSTMs
  - Different representations for same word in different contexts

- **BERT** - Bidirectional Encoder Representations from Transformers
  - Masked language modeling (15% of tokens masked)
  - Next sentence prediction
  - Base: 12 layers, 768 hidden, 110M parameters
  - Large: 24 layers, 1024 hidden, 340M parameters

**Modern Embeddings:**
- **GPT embeddings** - From OpenAI's GPT models
- **Sentence Transformers** - For sentence-level embeddings
- **Universal Sentence Encoder** - Google's multilingual embeddings

### Text Classification
Categorizing text into predefined classes:

**Classical Approaches:**
- **Naive Bayes** - Simple probabilistic classifier
- **Logistic Regression** - Linear classifier with probabilities
- **Support Vector Machines** - Find optimal separating hyperplane
- **Random Forests** - Ensemble of decision trees

**Deep Learning Approaches:**
- **CNN for Text** - 1D convolutions over word embeddings
- **LSTM/GRU** - Process sequences for classification
- **Transformer-based** - BERT, RoBERTa, DistilBERT fine-tuning
- **Hierarchical Attention Networks** - Attention at word and sentence levels

**Applications:**
- **Sentiment Analysis** - Positive/negative/neutral classification
- **Topic Classification** - News categories, product categories
- **Spam Detection** - Email, message filtering
- **Intent Classification** - Chatbot understanding user intent

### Sequence Labeling Tasks
Predicting labels for each token in sequence:

**Named Entity Recognition (NER):**
- Identify entities: Person, Organization, Location, Date, etc.
- **IOB tagging**: B-begin, I-inside, O-outside
- **Datasets**: CoNLL-2003, OntoNotes 5.0
- **Models**: CRF, BiLSTM-CRF, Transformer-based models

**Part-of-Speech Tagging:**
- Assign grammatical categories to words
- **Models**: HMM, CRF, neural sequence taggers
- **Accuracy**: State-of-the-art >97% on Penn Treebank

**Chunking/Shallow Parsing:**
- Identify phrases (noun phrases, verb phrases)
- **IOB tagging** similar to NER

**Dependency Parsing:**
- Parse sentence into dependency tree
- **Models**: Transition-based, graph-based, neural parsers
- **Universal Dependencies** - Standardized annotation scheme

### Machine Translation
Automatically translating between languages:

**Statistical Machine Translation (SMT):**
- **Phrase-based SMT** - Translate phrases as units
- **Syntax-based SMT** - Use syntactic structure
- Requires parallel corpora for training

**Neural Machine Translation (NMT):**
- **Encoder-Decoder architecture** with attention
- **Transformer** - State-of-the-art for NMT
- **Multilingual models** - Single model for many languages
- **Zero-shot translation** - Translate between language pairs not seen during training

**Evaluation Metrics:**
- **BLEU** - Bilingual Evaluation Understudy (n-gram precision)
- **METEOR** - Recall-oriented with synonym matching
- **TER** - Translation Edit Rate (edit distance)
- **COMET** - Neural evaluation metric

### Text Generation
Generating coherent natural language:

**Autoregressive Generation:**
- **GPT models** - Generate text token by token
- **Temperature** - Controls randomness (0=deterministic, 1=creative)
- **Top-k sampling** - Sample from k most likely tokens
- **Top-p (nucleus) sampling** - Sample from smallest set with cumulative probability p

**Controlled Generation:**
- **Prompt engineering** - Design inputs to get desired outputs
- **Conditional generation** - Generate based on specific attributes
- **Style transfer** - Change writing style while preserving content

**Applications:**
- **Chatbots** - Conversational agents
- **Content creation** - Articles, product descriptions
- **Code generation** - GitHub Copilot, Codex
- **Creative writing** - Poetry, stories

### Information Extraction
Extracting structured information from text:

**Relation Extraction:**
- Identify relationships between entities
- **Pattern-based** - Handcrafted rules/patterns
- **Supervised learning** - Train on labeled relation examples
- **Distant supervision** - Use knowledge base to create training data

**Event Extraction:**
- Identify events and their participants
- **Event types**: Attack, Meet, Transport, etc.
- **Arguments**: Who, what, when, where

**Question Answering:**
- **Extractive QA** - Extract answer span from context
- **Generative QA** - Generate answer text
- **Open-domain QA** - Answer from large collection of documents
- **Datasets**: SQuAD, Natural Questions, HotpotQA

**Text Summarization:**
- **Extractive summarization** - Select important sentences
- **Abstractive summarization** - Generate new summary text
- **Models**: BART, T5, PEGASUS

### Sentiment and Emotion Analysis
Understanding subjective content:

**Sentiment Analysis Levels:**
1. **Document-level** - Overall sentiment of document
2. **Sentence-level** - Sentiment of individual sentences
3. **Aspect-based** - Sentiment about specific aspects
   - "The battery life is great but the camera is poor"
   - Battery: positive, Camera: negative

**Emotion Analysis:**
- Detect emotions: joy, sadness, anger, fear, etc.
- **Ekman's basic emotions**: 6 emotions
- **Plutchik's wheel of emotions**: 8 primary emotions

**Applications:**
- **Brand monitoring** - Track sentiment about products
- **Customer feedback analysis** - Analyze reviews, support tickets
- **Market research** - Understand public opinion
- **Trading** - Sentiment analysis of financial news

### Dialogue Systems
Building conversational agents:

**Types of Dialogue Systems:**
- **Task-oriented** - Complete specific tasks (booking, support)
- **Chatbots** - General conversation
- **Virtual assistants** - Alexa, Siri, Google Assistant

**Architecture Components:**
- **Natural Language Understanding** - Parse user input
- **Dialogue State Tracking** - Maintain conversation state
- **Dialogue Policy** - Decide next action
- **Natural Language Generation** - Generate responses

**Evaluation Metrics:**
- **Task completion rate** - Percentage of tasks successfully completed
- **User satisfaction** - Subjective ratings
- **Conversation length** - Turns to complete task
- **BLEU, ROUGE** - For response quality

### Multilingual NLP
Processing multiple languages:

**Challenges:**
- **Language diversity** - 7000+ languages worldwide
- **Resource scarcity** - Limited data for many languages
- **Script differences** - Latin, Cyrillic, Arabic, Chinese, etc.
- **Morphological complexity** - Agglutinative languages

**Approaches:**
- **Multilingual models** - Single model for many languages
- **Cross-lingual transfer** - Transfer from high-resource to low-resource languages
- **Translation-based** - Translate to/from resource-rich language

**Multilingual Models:**
- **mBERT** - Multilingual BERT (104 languages)
- **XLM-R** - Cross-lingual Language Model RoBERTa (100 languages)
- **mT5** - Multilingual T5 (101 languages)

### NLP Evaluation
Measuring NLP system performance:

**Intrinsic Evaluation:**
- **Perplexity** - How well model predicts test data (lower is better)
- **BLEU** - For translation and generation
- **ROUGE** - For summarization
- **METEOR** - For translation

**Extrinsic Evaluation:**
- **Task-based evaluation** - Performance on downstream tasks
- **Human evaluation** - Quality judgments by humans
- **A/B testing** - Compare systems in real-world use

**Benchmarks:**
- **GLUE** - General Language Understanding Evaluation (9 tasks)
- **SuperGLUE** - More challenging version of GLUE
- **XTREME** - Cross-lingual evaluation benchmark
- **SQuAD** - Question Answering benchmark

### Ethical Considerations in NLP
Responsible NLP practices:

**Bias and Fairness:**
- **Dataset bias** - Underrepresentation of certain groups
- **Algorithmic bias** - Models amplifying societal biases
- **Mitigation techniques** - Debiasing embeddings, adversarial training

**Privacy:**
- **Text anonymization** - Remove personally identifiable information
- **Differential privacy** - Formal privacy guarantees
- **Federated learning** - Train without sharing raw text data

**Misinformation and Harm:**
- **Hate speech detection** - Identify harmful content
- **Fake news detection** - Identify misinformation
- **Content moderation** - Scale human moderation with AI

**Transparency:**
- **Model cards** - Documentation of model capabilities and limitations
- **Interpretability** - Understanding model decisions
- **Auditability** - Ability to audit model behavior

### Industry Applications
Real-world NLP implementations:

**Healthcare:**
- Clinical note analysis
- Patient triage from symptoms
- Medical literature mining
- Adverse drug event detection

**Finance:**
- Earnings call analysis
- Risk assessment from news
- Fraud detection from text
- Sentiment analysis for trading

**Legal:**
- Contract analysis and review
- Legal document summarization
- Case law research
- E-discovery for litigation

**Customer Service:**
- Automated ticket routing
- Chatbot for common inquiries
- Sentiment analysis for quality assurance
- Knowledge base article generation

**Media and Publishing:**
- Automated news summarization
- Content recommendation
- Plagiarism detection
- Automated fact-checking
`,
      quiz: [
        {
          id: 1,
          question: "What is the projected CAGR for the global NLP market?",
          options: [
            "29.4%",
            "25.1%",
            "33.8%",
            "36.2%"
          ],
          correctAnswer: 0,
          explanation: "The global NLP market is projected to grow at a CAGR of 29.4% from 2021 to 2029."
        },
        {
          id: 2,
          question: "Which preprocessing step converts 'running' to 'run'?",
          options: [
            "Stemming",
            "Lemmatization",
            "Tokenization",
            "Stop Word Removal"
          ],
          correctAnswer: 0,
          explanation: "Stemming reduces words to their root form (e.g., 'running' → 'run'), while lemmatization considers context."
        },
        {
          id: 3,
          question: "Which Word2Vec architecture predicts context words given a target word?",
          options: [
            "Skip-gram",
            "CBOW",
            "GloVe",
            "FastText"
          ],
          correctAnswer: 0,
          explanation: "Skip-gram predicts context words given a target word, while CBOW predicts target word given context."
        },
        {
          id: 4,
          question: "What percentage of tokens are masked in BERT's masked language modeling?",
          options: [
            "15%",
            "10%",
            "20%",
            "25%"
          ],
          correctAnswer: 0,
          explanation: "BERT masks 15% of tokens during pre-training for masked language modeling objective."
        },
        {
          id: 5,
          question: "What does NER stand for?",
          options: [
            "Named Entity Recognition",
            "Natural Entity Recognition",
            "Named Extraction Recognition",
            "Natural Extraction Recognition"
          ],
          correctAnswer: 0,
          explanation: "NER stands for Named Entity Recognition, identifying entities like persons, organizations, locations."
        },
        {
          id: 6,
          question: "Which tagging scheme uses B-begin, I-inside, O-outside?",
          options: [
            "IOB tagging",
            "BIOES tagging",
            "IO tagging",
            "BILOU tagging"
          ],
          correctAnswer: 0,
          explanation: "IOB tagging uses B (begin), I (inside), O (outside) to label entity spans in text."
        },
        {
          id: 7,
          question: "What is the most common evaluation metric for machine translation?",
          options: [
            "BLEU",
            "ROUGE",
            "METEOR",
            "TER"
          ],
          correctAnswer: 0,
          explanation: "BLEU (Bilingual Evaluation Understudy) is the most common metric for evaluating machine translation quality."
        },
        {
          id: 8,
          question: "Which sampling method uses the smallest set with cumulative probability p?",
          options: [
            "Top-p (nucleus) sampling",
            "Top-k sampling",
            "Temperature sampling",
            "Greedy sampling"
          ],
          correctAnswer: 0,
          explanation: "Top-p (nucleus) sampling selects from the smallest set of tokens whose cumulative probability exceeds p."
        },
        {
          id: 9,
          question: "What type of summarization generates new summary text?",
          options: [
            "Abstractive summarization",
            "Extractive summarization",
            "Selective summarization",
            "Compressive summarization"
          ],
          correctAnswer: 0,
          explanation: "Abstractive summarization generates new text for the summary, while extractive selects existing sentences."
        },
        {
          id: 10,
          question: "Which model architecture is state-of-the-art for neural machine translation?",
          options: [
            "Transformer",
            "LSTM",
            "CNN",
            "RNN"
          ],
          correctAnswer: 0,
          explanation: "Transformer architecture with attention mechanism is state-of-the-art for neural machine translation."
        },
        {
          id: 11,
          question: "How many basic emotions are in Ekman's model?",
          options: [
            "6",
            "5",
            "7",
            "8"
          ],
          correctAnswer: 0,
          explanation: "Ekman's basic emotions are: happiness, sadness, anger, fear, surprise, and disgust (6 emotions)."
        },
        {
          id: 12,
          question: "What does BERT stand for?",
          options: [
            "Bidirectional Encoder Representations from Transformers",
            "Bidirectional Embedding Representations from Transformers",
            "Bidirectional Encoding Representations from Transformers",
            "Bidirectional Extraction Representations from Transformers"
          ],
          correctAnswer: 0,
          explanation: "BERT stands for Bidirectional Encoder Representations from Transformers, a transformer-based language model."
        },
        {
          id: 13,
          question: "Which FastText feature handles out-of-vocabulary words better?",
          options: [
            "Character n-grams",
            "Word embeddings",
            "Subword units",
            "Byte-pair encoding"
          ],
          correctAnswer: 0,
          explanation: "FastText represents words as bags of character n-grams, allowing it to handle out-of-vocabulary words."
        },
        {
          id: 14,
          question: "What is the typical dimension range for word embeddings?",
          options: [
            "100-300 dimensions",
            "50-100 dimensions",
            "300-500 dimensions",
            "500-1000 dimensions"
          ],
          correctAnswer: 0,
          explanation: "Word embeddings typically have 100-300 dimensions, balancing expressiveness and computational efficiency."
        },
        {
          id: 15,
          question: "Which benchmark focuses on cross-lingual evaluation?",
          options: [
            "XTREME",
            "GLUE",
            "SuperGLUE",
            "SQuAD"
          ],
          correctAnswer: 0,
          explanation: "XTREME is a benchmark for evaluating cross-lingual generalization across 40 languages and 9 tasks."
        },
        {
          id: 16,
          question: "What temperature value gives deterministic sampling?",
          options: [
            "0",
            "1",
            "0.5",
            "2"
          ],
          correctAnswer: 0,
          explanation: "Temperature = 0 gives deterministic sampling (always choose most likely token), while higher values increase randomness."
        },
        {
          id: 17,
          question: "Which metric is based on n-gram precision?",
          options: [
            "BLEU",
            "ROUGE",
            "METEOR",
            "TER"
          ],
          correctAnswer: 0,
          explanation: "BLEU calculates n-gram precision between generated text and reference translations."
        },
        {
          id: 18,
          question: "How many languages does mBERT cover?",
          options: [
            "104 languages",
            "50 languages",
            "200 languages",
            "75 languages"
          ],
          correctAnswer: 0,
          explanation: "Multilingual BERT (mBERT) covers 104 languages in a single model."
        },
        {
          id: 19,
          question: "Which type of QA extracts answer spans from context?",
          options: [
            "Extractive QA",
            "Generative QA",
            "Abstractive QA",
            "Selective QA"
          ],
          correctAnswer: 0,
          explanation: "Extractive QA extracts answer spans directly from the context document, while generative QA creates new answers."
        },
        {
          id: 20,
          question: "What does SQuAD stand for?",
          options: [
            "Stanford Question Answering Dataset",
            "Standard Question Answering Dataset",
            "Stanford Query Answering Dataset",
            "Standard Query Answering Dataset"
          ],
          correctAnswer: 0,
          explanation: "SQuAD stands for Stanford Question Answering Dataset, a popular benchmark for question answering systems."
        }
      ]
    },

    // MODULE 6: Computer Vision
    {
      id: 6,
      title: "Computer Vision",
      completed: false,
      content: `
# Module 6: Computer Vision

## Introduction to Computer Vision
Computer vision enables computers to derive meaningful information from digital images, videos, and other visual inputs. The computer vision market is projected to grow from $14.1 billion in 2022 to $41.1 billion by 2030, at a CAGR of 14.3%.

### Image Fundamentals
Basic concepts for understanding images:

**Digital Image Representation:**
- **Pixels** - Picture elements, smallest addressable element
- **Resolution** - Number of pixels (width × height)
- **Color Spaces**:
  - **RGB** - Red, Green, Blue channels (most common)
  - **HSV/HSL** - Hue, Saturation, Value/Lightness
  - **CMYK** - Cyan, Magenta, Yellow, Key (printing)
  - **Grayscale** - Single channel (0-255 intensity)

**Image Storage Formats:**
- **Lossless** - PNG, BMP, TIFF (preserve all data)
- **Lossy** - JPEG, WebP (smaller file size, some quality loss)
- **Vector** - SVG, EPS (mathematical curves, not pixel-based)

**Image Processing Operations:**
- **Filtering** - Smoothing, sharpening, edge detection
- **Morphological Operations** - Dilation, erosion, opening, closing
- **Geometric Transformations** - Rotation, scaling, translation
- **Color Transformations** - Adjust brightness, contrast, color balance

### Convolutional Neural Networks for Vision
Specialized neural networks for image tasks:

**CNN Architecture Components:**
- **Convolutional Layers** - Extract spatial features
  - Kernel sizes: 3×3, 5×5, 7×7
  - Stride: Step size (typically 1 or 2)
  - Padding: 'Same' (preserve size) or 'Valid' (no padding)
- **Pooling Layers** - Reduce spatial dimensions
  - Max pooling: Take maximum value
  - Average pooling: Take average value
  - Global pooling: Pool entire feature map
- **Fully Connected Layers** - Final classification

**Advanced CNN Architectures:**
- **ResNet** - Residual connections enable very deep networks (152 layers)
- **DenseNet** - Each layer connected to all subsequent layers
- **EfficientNet** - Compound scaling of depth, width, resolution
- **MobileNet** - Designed for mobile devices (depthwise separable convolutions)
- **Vision Transformer (ViT)** - Transformer architecture for images

**Transfer Learning for Vision:**
- Use pre-trained models (ImageNet: 1.2M images, 1000 classes)
- **Fine-tuning** - Update all or some layers on new data
- **Feature extraction** - Use CNN as fixed feature extractor
- Common pre-trained models: VGG, ResNet, EfficientNet, ViT

### Object Detection
Locating and classifying objects in images:

**Two-Stage Detectors:**
- **R-CNN** - Region-based CNN
- **Fast R-CNN** - Improved R-CNN with ROI pooling
- **Faster R-CNN** - Region Proposal Network (RPN) for proposals
- **Mask R-CNN** - Adds instance segmentation mask

**One-Stage Detectors:**
- **YOLO** - You Only Look Once (real-time detection)
  - YOLOv1-4: Original versions
  - YOLOv5: PyTorch implementation
  - YOLOv6: Meituan's version
  - YOLOv7: Bag of freebies
  - YOLOv8: Latest version with segmentation
- **SSD** - Single Shot MultiBox Detector
- **RetinaNet** - Focal loss for class imbalance

**Evaluation Metrics:**
- **IoU** - Intersection over Union (measure of overlap)
- **mAP** - Mean Average Precision (primary metric)
- **AP@[.5:.95]** - Average precision at different IoU thresholds
- **FPS** - Frames per second (speed metric)

### Image Segmentation
Partitioning images into meaningful regions:

**Semantic Segmentation:**
- Classify each pixel into semantic categories
- **FCN** - Fully Convolutional Networks
- **U-Net** - Biomedical image segmentation
- **DeepLab** - Atrous convolution, ASPP module
- **PSPNet** - Pyramid Scene Parsing Network

**Instance Segmentation:**
- Identify each object instance separately
- **Mask R-CNN** - Extends Faster R-CNN with mask prediction
- **YOLACT** - Real-time instance segmentation
- **SOLO** - Segmenting Objects by Locations

**Panoptic Segmentation:**
- Combines semantic and instance segmentation
- Assigns each pixel both semantic label and instance ID
- **Panoptic FPN** - Feature Pyramid Network extension
- **UPSNet** - Unified Panoptic Segmentation Network

### Face Recognition and Analysis
Specialized computer vision tasks:

**Face Detection:**
- **Haar Cascades** - Classic method (Viola-Jones algorithm)
- **MTCNN** - Multi-task Cascaded CNN (state-of-the-art)
- **RetinaFace** - Single-stage dense face localization

**Face Recognition:**
- **Feature Extraction** - DeepFace, FaceNet, ArcFace
- **Verification** - Are two faces the same person?
- **Identification** - Who is this person from gallery?
- **Metric Learning** - Learn embedding space where same person is close

**Face Analysis:**
- **Age Estimation** - Predict age from face
- **Gender Classification** - Male/female classification
- **Emotion Recognition** - Detect emotions from facial expressions
- **Landmark Detection** - Locate facial keypoints (eyes, nose, mouth)

### 3D Computer Vision
Understanding three-dimensional scenes:

**Depth Estimation:**
- **Stereo Vision** - Use two cameras to estimate depth
- **Monocular Depth Estimation** - Estimate depth from single image
- **LiDAR** - Light Detection and Ranging (active sensing)

**3D Reconstruction:**
- **Structure from Motion** - Reconstruct 3D from multiple 2D images
- **Multi-view Stereo** - Dense reconstruction from multiple views
- **NeRF** - Neural Radiance Fields (novel view synthesis)
- **InstantNGP** - Accelerated NeRF training

**Point Cloud Processing:**
- **PointNet** - Directly processes point clouds
- **PointNet++** - Hierarchical point cloud learning
- **Voxel-based Methods** - Convert points to 3D grid

### Video Analysis
Processing temporal sequences of images:

**Video Classification:**
- **3D CNNs** - Extend convolution to temporal dimension
- **Two-stream Networks** - Separate spatial and temporal streams
- **I3D** - Inflated 3D ConvNet
- **SlowFast** - Dual pathway for different temporal rates

**Action Recognition:**
- Identify human actions in videos
- **Datasets**: Kinetics, UCF101, HMDB51
- **Models**: TSM, X3D, Video Swin Transformer

**Video Object Detection & Tracking:**
- **Detection in Videos** - Leverage temporal consistency
- **Multi-object Tracking** - Track objects across frames
- **SORT** - Simple Online and Realtime Tracking
- **DeepSORT** - Deep association metric for tracking

### Generative Models for Vision
Creating and manipulating visual content:

**Generative Adversarial Networks:**
- **StyleGAN** - High-quality image generation with style control
- **CycleGAN** - Unpaired image-to-image translation
- **Pix2Pix** - Paired image-to-image translation
- **BigGAN** - Large scale GAN training

**Diffusion Models:**
- **DDPM** - Denoising Diffusion Probabilistic Models
- **Stable Diffusion** - Latent diffusion models (text-to-image)
- **DALL-E** - OpenAI's text-to-image model
- **Imagen** - Google's text-to-image model

**Image-to-Image Translation:**
- Change image attributes (day to night, summer to winter)
- **Conditional GANs** - Generate images conditioned on input
- **Domain Adaptation** - Adapt models across domains

### Medical Imaging
Computer vision in healthcare:

**Medical Image Modalities:**
- **X-ray** - Projection imaging
- **CT** - Computed Tomography (3D X-ray)
- **MRI** - Magnetic Resonance Imaging
- **Ultrasound** - Sound wave imaging
- **Microscopy** - Cellular and tissue imaging

**Medical Image Analysis Tasks:**
- **Detection** - Find abnormalities (tumors, fractures)
- **Segmentation** - Delineate organs, lesions
- **Classification** - Diagnose diseases
- **Registration** - Align images from different times/modalities

**Challenges in Medical Imaging:**
- **Limited labeled data** - Expensive expert annotation
- **Class imbalance** - Rare diseases underrepresented
- **Domain shift** - Different hospitals have different protocols
- **Interpretability** - Need to explain predictions for clinical trust

### Autonomous Vehicles
Computer vision for self-driving cars:

**Perception System Components:**
- **Camera** - RGB images (multiple viewpoints)
- **LiDAR** - 3D point clouds
- **Radar** - Distance and velocity
- **Ultrasonic sensors** - Short range detection

**Key Tasks:**
- **Object Detection** - Cars, pedestrians, cyclists, signs
- **Lane Detection** - Identify lane markings
- **Traffic Sign Recognition** - Read signs and signals
- **Depth Estimation** - Understand 3D scene structure
- **Semantic Segmentation** - Understand scene layout

**Datasets for Autonomous Driving:**
- **KITTI** - Pioneer dataset with multiple sensors
- **nuScenes** - Large-scale with full sensor suite
- **Waymo Open Dataset** - Diverse driving scenarios
- **Cityscapes** - Urban scene understanding

### Computational Photography
Algorithms for enhancing photographs:

**Image Enhancement:**
- **Denoising** - Remove noise while preserving details
- **Super-resolution** - Increase image resolution
- **HDR Imaging** - High Dynamic Range (combine multiple exposures)
- **Deblurring** - Remove motion blur

**Image Restoration:**
- **Inpainting** - Fill missing regions
- **Colorization** - Add color to grayscale images
- **Style Transfer** - Apply artistic styles to photos

**Camera Pipeline Processing:**
- **Demosaicing** - Convert Bayer pattern to RGB
- **White Balance** - Adjust color temperature
- **Tone Mapping** - Map HDR to display range

### Visual Transformers
Applying transformer architecture to vision:

**Vision Transformer (ViT):**
- Split image into patches (e.g., 16×16 pixels)
- Linear projection to embeddings
- Add position embeddings
- Transformer encoder processing
- Class token for classification

**Swin Transformer:**
- Hierarchical transformer
- Shifted windows for cross-window connections
- Linear computational complexity with image size

**Applications of Visual Transformers:**
- Image classification
- Object detection (DETR, Deformable DETR)
- Segmentation (Segmenter, MaskFormer)
- Multi-modal tasks (CLIP, ALIGN)

### Model Optimization for Edge Devices
Deploying vision models on resource-constrained devices:

**Model Compression Techniques:**
- **Pruning** - Remove unimportant weights
- **Quantization** - Reduce precision (FP32 → INT8)
- **Knowledge Distillation** - Train small student from large teacher
- **Neural Architecture Search** - Find efficient architectures

**Efficient Architectures:**
- **MobileNet** - Depthwise separable convolutions
- **ShuffleNet** - Channel shuffling for efficient grouping
- **EfficientNet** - Compound scaling
- **GhostNet** - Generate more features from cheap operations

**Deployment Considerations:**
- **Latency requirements** - Real-time vs batch processing
- **Power consumption** - Mobile vs server deployment
- **Memory constraints** - On-device vs cloud processing
- **Framework support** - TensorFlow Lite, PyTorch Mobile, ONNX Runtime

### Ethical Considerations in Computer Vision
Responsible development of vision systems:

**Bias and Fairness:**
- **Dataset bias** - Underrepresentation in training data
- **Algorithmic bias** - Models performing differently across demographics
- **Mitigation** - Diverse datasets, fairness-aware training

**Privacy:**
- **Face recognition** - Consent and regulation concerns
- **Surveillance** - Ethical use of tracking technologies
- **Anonymization** - Techniques to protect privacy in images/videos

**Misuse Prevention:**
- **Deepfakes** - Synthetic media creation
- **Synthetic data** - For training without privacy concerns
- **Detection methods** - Identifying manipulated content

**Transparency and Accountability:**
- **Explainability** - Understanding model decisions
- **Auditability** - Tracing model behavior
- **Documentation** - Model cards detailing capabilities and limitations

### Industry Applications
Real-world computer vision implementations:

**Retail:**
- Inventory management (shelf monitoring)
- Customer analytics (foot traffic, demographics)
- Self-checkout systems
- Quality control

**Manufacturing:**
- Defect detection
- Assembly verification
- Robotic guidance
- Predictive maintenance

**Agriculture:**
- Crop monitoring (health, yield estimation)
- Weed detection and removal
- Livestock monitoring
- Automated harvesting

**Security and Surveillance:**
- Intrusion detection
- Crowd monitoring
- License plate recognition
- Suspicious behavior detection

**Entertainment:**
- Visual effects
- Augmented reality
- Content moderation
- Game development
`,
      quiz: [
        {
          id: 1,
          question: "What is the projected CAGR for the computer vision market?",
          options: [
            "14.3%",
            "18.5%",
            "22.1%",
            "10.8%"
          ],
          correctAnswer: 0,
          explanation: "The computer vision market is projected to grow at a CAGR of 14.3% from 2022 to 2030."
        },
        {
          id: 2,
          question: "Which color space is most common for digital images?",
          options: [
            "RGB",
            "HSV",
            "CMYK",
            "YUV"
          ],
          correctAnswer: 0,
          explanation: "RGB (Red, Green, Blue) is the most common color space for digital images and displays."
        },
        {
          id: 3,
          question: "Which CNN architecture introduced residual connections?",
          options: [
            "ResNet",
            "VGG",
            "AlexNet",
            "GoogLeNet"
          ],
          correctAnswer: 0,
          explanation: "ResNet introduced residual connections that enable training of very deep neural networks."
        },
        {
          id: 4,
          question: "What does YOLO stand for in object detection?",
          options: [
            "You Only Look Once",
            "You Observe Latent Objects",
            "Your Object Locator Optimized",
            "Yield Optimal Localized Objects"
          ],
          correctAnswer: 0,
          explanation: "YOLO stands for You Only Look Once, a real-time object detection system."
        },
        {
          id: 5,
          question: "Which metric measures overlap between predicted and ground truth boxes?",
          options: [
            "IoU (Intersection over Union)",
            "mAP (Mean Average Precision)",
            "FPS (Frames Per Second)",
            "AP (Average Precision)"
          ],
          correctAnswer: 0,
          explanation: "IoU (Intersection over Union) measures the overlap between predicted bounding box and ground truth box."
        },
        {
          id: 6,
          question: "Which segmentation type classifies each pixel into semantic categories?",
          options: [
            "Semantic Segmentation",
            "Instance Segmentation",
            "Panoptic Segmentation",
            "Object Segmentation"
          ],
          correctAnswer: 0,
          explanation: "Semantic segmentation assigns a semantic category to each pixel without distinguishing instances."
        },
        {
          id: 7,
          question: "What does NeRF stand for in 3D vision?",
          options: [
            "Neural Radiance Fields",
            "Neural Rendering Fields",
            "Neural Reconstruction Fields",
            "Neural Representation Fields"
          ],
          correctAnswer: 0,
          explanation: "NeRF stands for Neural Radiance Fields, a method for novel view synthesis from 2D images."
        },
        {
          id: 8,
          question: "Which face detection method uses multi-task cascaded CNN?",
          options: [
            "MTCNN",
            "Haar Cascades",
            "RetinaFace",
            "FaceNet"
          ],
          correctAnswer: 0,
          explanation: "MTCNN (Multi-task Cascaded CNN) is a state-of-the-art face detection and alignment method."
        },
        {
          id: 9,
          question: "What does I3D stand for in video analysis?",
          options: [
            "Inflated 3D ConvNet",
            "Integrated 3D Network",
            "Inception 3D Network",
            "Inflated 3D Network"
          ],
          correctAnswer: 0,
          explanation: "I3D stands for Inflated 3D ConvNet, extending 2D CNN filters to 3D for video processing."
        },
        {
          id: 10,
          question: "Which generative model is known for text-to-image generation?",
          options: [
            "Stable Diffusion",
            "CycleGAN",
            "Pix2Pix",
            "StyleGAN"
          ],
          correctAnswer: 0,
          explanation: "Stable Diffusion is a latent diffusion model known for high-quality text-to-image generation."
        },
        {
          id: 11,
          question: "How many layers does ResNet-152 have?",
          options: [
            "152 layers",
            "101 layers",
            "50 layers",
            "34 layers"
          ],
          correctAnswer: 0,
          explanation: "ResNet-152 has 152 layers, one of the deepest variants of the ResNet architecture."
        },
        {
          id: 12,
          question: "Which medical imaging modality uses sound waves?",
          options: [
            "Ultrasound",
            "X-ray",
            "CT",
            "MRI"
          ],
          correctAnswer: 0,
          explanation: "Ultrasound imaging uses high-frequency sound waves to create images of internal structures."
        },
        {
          id: 13,
          question: "What does LiDAR stand for?",
          options: [
            "Light Detection and Ranging",
            "Laser Imaging Detection and Ranging",
            "Light Imaging Detection and Ranging",
            "Laser Detection and Ranging"
          ],
          correctAnswer: 0,
          explanation: "LiDAR stands for Light Detection and Ranging, a remote sensing method using laser pulses."
        },
        {
          id: 14,
          question: "Which dataset is specifically for autonomous driving?",
          options: [
            "KITTI",
            "ImageNet",
            "COCO",
            "CIFAR-10"
          ],
          correctAnswer: 0,
          explanation: "KITTI is a pioneer dataset for autonomous driving research with multiple sensor modalities."
        },
        {
          id: 15,
          question: "What patch size does ViT typically use?",
          options: [
            "16×16 pixels",
            "32×32 pixels",
            "8×8 pixels",
            "64×64 pixels"
          ],
          correctAnswer: 0,
          explanation: "Vision Transformer typically uses 16×16 pixel patches, which are flattened and embedded."
        },
        {
          id: 16,
          question: "Which compression technique reduces precision of weights?",
          options: [
            "Quantization",
            "Pruning",
            "Knowledge Distillation",
            "Architecture Search"
          ],
          correctAnswer: 0,
          explanation: "Quantization reduces the numerical precision of weights (e.g., from 32-bit to 8-bit)."
        },
        {
          id: 17,
          question: "What does HDR stand for in computational photography?",
          options: [
            "High Dynamic Range",
            "High Definition Rendering",
            "High Density Resolution",
            "High Detail Reconstruction"
          ],
          correctAnswer: 0,
          explanation: "HDR stands for High Dynamic Range, combining multiple exposures to capture wider brightness range."
        },
        {
          id: 18,
          question: "Which object detector uses Region Proposal Network?",
          options: [
            "Faster R-CNN",
            "YOLO",
            "SSD",
            "RetinaNet"
          ],
          correctAnswer: 0,
          explanation: "Faster R-CNN uses a Region Proposal Network (RPN) to generate object proposals."
        },
        {
          id: 19,
          question: "What does FPS measure in object detection?",
          options: [
            "Frames Per Second",
            "Features Per Second",
            "False Positives per Second",
            "Filters Per Second"
          ],
          correctAnswer: 0,
          explanation: "FPS measures Frames Per Second, indicating how many images a detector can process per second."
        },
        {
          id: 20,
          question: "Which segmentation combines semantic and instance segmentation?",
          options: [
            "Panoptic Segmentation",
            "Semantic Segmentation",
            "Instance Segmentation",
            "Object Segmentation"
          ],
          correctAnswer: 0,
          explanation: "Panoptic segmentation combines semantic segmentation (categories) and instance segmentation (individual objects)."
        }
      ]
    },

    // MODULE 7: Time Series Analysis
    {
      id: 7,
      title: "Time Series Analysis",
      completed: false,
      content: `
# Module 7: Time Series Analysis

## Introduction to Time Series Data
Time series analysis involves statistical techniques for analyzing time-ordered data points. The time series analytics market is expected to grow from $4.94 billion in 2021 to $11.49 billion by 2028, at a CAGR of 12.8%.

### Characteristics of Time Series
Key properties of temporal data:

**Components of Time Series:**
1. **Trend (T)** - Long-term direction (increasing, decreasing, or stationary)
   - Linear trend: y = β₀ + β₁t
   - Exponential trend: y = aeᵇᵗ
   - Can be deterministic or stochastic

2. **Seasonality (S)** - Regular periodic fluctuations
   - Daily, weekly, monthly, quarterly, yearly patterns
   - Fixed and known period
   - Example: Retail sales peaking during holidays

3. **Cyclical Component (C)** - Non-periodic fluctuations (>1 year)
   - Business cycles, economic cycles
   - Not fixed period like seasonality
   - Typically 2-10 year cycles

4. **Irregular/Random (I)** - Unpredictable, random variations
   - White noise: εₜ ~ N(0, σ²)
   - Can include outliers, structural breaks

**Decomposition Models:**
- **Additive**: yₜ = Tₜ + Sₜ + Cₜ + Iₜ
- **Multiplicative**: yₜ = Tₜ × Sₜ × Cₜ × Iₜ
- **Mixed**: yₜ = Tₜ × Sₜ + Cₜ + Iₜ

### Stationarity and Differencing
Fundamental concepts in time series analysis:

**Stationarity Types:**
1. **Strict Stationarity** - Joint distribution invariant to time shift
2. **Weak Stationarity (Covariance Stationarity)**:
   - Constant mean: E[yₜ] = μ for all t
   - Constant variance: Var[yₜ] = σ² for all t
   - Covariance depends only on lag: Cov(yₜ, yₜ₊ₖ) = γₖ

**Tests for Stationarity:**
- **Augmented Dickey-Fuller (ADF) test** - Null: unit root (non-stationary)
- **KPSS test** - Null: stationary
- **Phillips-Perron test** - Alternative to ADF with different autocorrelation handling

**Differencing:**
- **First difference**: Δyₜ = yₜ - yₜ₋₁
- **Second difference**: Δ²yₜ = Δyₜ - Δyₜ₋₁
- **Seasonal difference**: yₜ - yₜ₋ₛ where s=seasonal period
- Often makes non-stationary series stationary

### Autocorrelation and Partial Autocorrelation
Measuring temporal dependencies:

**Autocorrelation Function (ACF):**
- Correlation between yₜ and yₜ₊ₖ
- ρₖ = Corr(yₜ, yₜ₊ₖ) = Cov(yₜ, yₜ₊ₖ)/Var(yₜ)
- Decays slowly for non-stationary series
- Cuts off after lag p for AR(p) process

**Partial Autocorrelation Function (PACF):**
- Correlation between yₜ and yₜ₊ₖ after removing effects of lags 1,...,k-1
- φₖₖ in regression: yₜ = φₖ₁yₜ₋₁ + ... + φₖₖyₜ₋ₖ + εₜ
- Cuts off after lag q for MA(q) process

**Interpretation Guidelines:**
- **AR(p) process**: PACF cuts off after lag p, ACF decays gradually
- **MA(q) process**: ACF cuts off after lag q, PACF decays gradually
- **ARMA(p,q) process**: Both ACF and PACF decay gradually

### ARIMA Models
Box-Jenkins methodology for time series:

**ARIMA Components:**
- **AR(p)** - Autoregressive of order p: yₜ = φ₁yₜ₋₁ + ... + φₚyₜ₋ₚ + εₜ
- **I(d)** - Integrated of order d (differencing)
- **MA(q)** - Moving Average of order q: yₜ = εₜ + θ₁εₜ₋₁ + ... + θₚεₜ₋ₚ

**Model Identification (Box-Jenkins):**
1. **Identification** - Determine p, d, q using ACF/PACF
2. **Estimation** - Estimate parameters (maximum likelihood)
3. **Diagnostic Checking** - Check residuals (should be white noise)
4. **Forecasting** - Generate predictions

**Seasonal ARIMA (SARIMA):**
- ARIMA(p,d,q)(P,D,Q)ₛ
- Seasonal period: s (e.g., 12 for monthly, 4 for quarterly)
- Seasonal differencing: D
- Seasonal AR(P) and MA(Q) components

### Exponential Smoothing Methods
Weighted averaging approaches:

**Simple Exponential Smoothing:**
- For series with no trend or seasonality
- ŷₜ₊₁ = αyₜ + (1-α)ŷₜ
- α (smoothing parameter) between 0 and 1

**Holt's Linear Trend Method:**
- For series with trend but no seasonality
- Level: ℓₜ = αyₜ + (1-α)(ℓₜ₋₁ + bₜ₋₁)
- Trend: bₜ = β*(ℓₜ - ℓₜ₋₁) + (1-β*)bₜ₋₁
- Forecast: ŷₜ₊ₕ = ℓₜ + hbₜ

**Holt-Winters Seasonal Method:**
- For series with trend and seasonality
- Additive seasonality: yₜ = ℓₜ₋₁ + bₜ₋₁ + sₜ₋ₛ
- Multiplicative seasonality: yₜ = (ℓₜ₋₁ + bₜ₋₁)sₜ₋ₛ
- Three smoothing parameters: α, β*, γ

**ETS Framework:**
- Error, Trend, Seasonality
- 30 possible model combinations
- Automatic model selection using AIC, AICc, BIC

### Advanced Time Series Models
Modern approaches to time series:

**GARCH Models:**
- Generalized AutoRegressive Conditional Heteroskedasticity
- Models volatility clustering in financial time series
- σₜ² = ω + Σαᵢεₜ₋ᵢ² + Σβⱼσₜ₋ⱼ²
- Extensions: EGARCH, TGARCH, GARCH-M

**State Space Models:**
- **Kalman Filter** - Optimal estimator for linear Gaussian systems
- **Bayesian Structural Time Series** - Flexible decomposition
- **Dynamic Linear Models** - Time-varying parameters

**Prophet:**
- Facebook's forecasting procedure
- Components: trend, seasonality, holidays
- Automatic changepoint detection
- Robust to missing data, outliers

**Neural Networks for Time Series:**
- **LSTM/GRU** - Handle long-term dependencies
- **TCN** - Temporal Convolutional Networks
- **Transformer-based** - Informer, Autoformer, FEDformer
- **N-BEATS** - Neural basis expansion analysis

### Multivariate Time Series
Analyzing multiple related time series:

**Vector Autoregression (VAR):**
- Multivariate extension of AR
- yₜ = c + A₁yₜ₋₁ + ... + Aₚyₜ₋ₚ + εₜ
- Each variable depends on its own lags and lags of other variables
- **Granger Causality** - Test if one series helps predict another

**Cointegration:**
- Long-run equilibrium relationship between non-stationary series
- **Engle-Granger test** - Two-step procedure
- **Johansen test** - Multivariate cointegration
- **Error Correction Model (ECM)** - Short-term dynamics adjustment to long-term equilibrium

**Dynamic Factor Models:**
- Extract common factors driving multiple series
- **Principal Component Analysis** for time series
- Useful for dimensionality reduction

### Forecasting Evaluation
Measuring forecast accuracy:

**Point Forecast Evaluation:**
- **MAE** - Mean Absolute Error: (1/n)Σ|yₜ - ŷₜ|
- **MSE** - Mean Squared Error: (1/n)Σ(yₜ - ŷₜ)²
- **RMSE** - Root Mean Squared Error: √MSE
- **MAPE** - Mean Absolute Percentage Error: (100/n)Σ|(yₜ - ŷₜ)/yₜ|
- **sMAPE** - Symmetric MAPE
- **MASE** - Mean Absolute Scaled Error

**Interval Forecast Evaluation:**
- **Coverage** - Percentage of observations within prediction intervals
- **Interval Score** - Penalizes width and missing observations

**Forecast Comparison Tests:**
- **Diebold-Mariano test** - Compare two forecasts
- **MCS (Model Confidence Set)** - Identify set of best models
- **Encompassing test** - Check if one forecast contains all information of another

### Time Series in Finance
Specialized applications:

**Financial Time Series Characteristics:**
- **Volatility clustering** - Large changes tend to be followed by large changes
- **Heavy tails** - More extreme values than normal distribution
- **Leverage effect** - Negative returns increase volatility more than positive returns
- **Long memory** - Slow decay of autocorrelations

**Risk Management Models:**
- **VaR (Value at Risk)** - Maximum loss over given period at given confidence
- **Expected Shortfall** - Average loss beyond VaR
- **Backtesting** - Compare VaR estimates with actual losses

**Trading Strategies:**
- **Pairs trading** - Trade cointegrated pairs
- **Statistical arbitrage** - Exploit statistical mispricings
- **Momentum strategies** - Follow trends
- **Mean reversion strategies** - Bet on return to mean

### Anomaly Detection in Time Series
Identifying unusual patterns:

**Types of Anomalies:**
- **Point anomalies** - Individual unusual points
- **Contextual anomalies** - Normal in some contexts, abnormal in others
- **Collective anomalies** - Sequence of points anomalous together

**Detection Methods:**
- **Statistical methods** - Outside confidence intervals
- **Distance-based** - Far from neighbors
- **Density-based** - Low probability regions
- **Reconstruction-based** - Autoencoders with high reconstruction error
- **Forecast-based** - Large forecast errors

**Applications:**
- **Industrial monitoring** - Equipment failure prediction
- **Network security** - Intrusion detection
- **Healthcare** - Patient monitoring
- **Finance** - Fraud detection

### Time Series Databases
Specialized storage for time series data:

**Characteristics:**
- Optimized for time-ordered data
- Efficient storage of timestamp-value pairs
- Fast time-range queries
- Downsampling and aggregation capabilities

**Popular TSDBs:**
- **InfluxDB** - Written in Go, high performance
- **TimescaleDB** - PostgreSQL extension
- **Prometheus** - Monitoring and alerting
- **OpenTSDB** - On HBase
- **Druid** - Real-time analytics database

**Data Model Considerations:**
- **Metrics** - Numerical measurements over time
- **Events** - Timestamped occurrences
- **Tags/Labels** - Dimensions for grouping and filtering
- **Cardinality** - Number of unique time series

### Real-time Streaming Analytics
Processing time series as it arrives:

**Stream Processing Concepts:**
- **Event time vs processing time** - Handling late data
- **Windowing** - Tumbling, sliding, session windows
- **Watermarks** - Progress indicators in event time
- **State management** - Maintaining state across events

**Streaming Platforms:**
- **Apache Kafka** - Distributed event streaming
- **Apache Flink** - True stream processing
- **Spark Streaming** - Micro-batch processing
- **ksqlDB** - Streaming SQL engine

**Use Cases:**
- **Real-time monitoring** - System metrics, application logs
- **Algorithmic trading** - Market data processing
- **IoT analytics** - Sensor data processing
- **Clickstream analysis** - User behavior tracking

### Time Series Visualization
Effective visualization techniques:

**Basic Plots:**
- **Line plot** - Most common for single series
- **Multiple series plot** - Compare multiple series
- **Seasonal subseries plot** - Compare same season across years
- **Lag plot** - yₜ vs yₜ₋₁ for autocorrelation visualization

**Advanced Visualizations:**
- **Calendar heatmap** - Daily patterns over months/years
- **Candlestick chart** - Open, high, low, close (financial)
- **Correlogram** - Matrix of ACF/PACF plots
- **Decomposition plot** - Trend, seasonal, residual components

**Interactive Features:**
- **Zoom and pan** - Explore different time ranges
- **Tooltips** - Display values on hover
- **Brush selection** - Select time ranges for detailed analysis
- **Linked views** - Connect multiple visualizations

### Industry Applications
Real-world time series applications:

**Energy and Utilities:**
- Electricity demand forecasting
- Renewable energy production prediction
- Smart grid monitoring
- Equipment failure prediction

**Retail and E-commerce:**
- Sales forecasting
- Inventory optimization
- Website traffic prediction
- Customer demand forecasting

**Healthcare:**
- Patient vital signs monitoring
- Disease outbreak prediction
- Medical device monitoring
- Healthcare resource planning

**Transportation:**
- Traffic flow prediction
- Public transportation demand forecasting
- Fleet management
- Route optimization

**Manufacturing:**
- Production line monitoring
- Quality control time series
- Predictive maintenance
- Supply chain optimization

### Ethical Considerations
Responsible time series analysis:

**Privacy in Time Series Data:**
- **Trajectory data** - Can reveal sensitive location patterns
- **Financial data** - Personal spending patterns
- **Health data** - Medical condition monitoring
- **Anonymization techniques** - Differential privacy for time series

**Bias in Forecasting:**
- **Historical bias** - Past patterns may not represent future
- **Sample bias** - Underrepresented groups in training data
- **Algorithmic bias** - Models amplifying existing inequalities

**Transparency and Explainability:**
- **Model interpretability** - Understanding forecast drivers
- **Uncertainty quantification** - Communicating forecast uncertainty
- **Scenario analysis** - Exploring different future possibilities

**Responsible Use:**
- **Surveillance concerns** - Time-based tracking systems
- **Algorithmic fairness** - Equitable access to predictions
- **Accountability** - Responsibility for forecast-based decisions
`,
      quiz: [
        {
          id: 1,
          question: "What is the expected CAGR for the time series analytics market?",
          options: [
            "12.8%",
            "15.2%",
            "18.5%",
            "10.3%"
          ],
          correctAnswer: 0,
          explanation: "The time series analytics market is expected to grow at a CAGR of 12.8% from 2021 to 2028."
        },
        {
          id: 2,
          question: "How many main components are in time series decomposition?",
          options: [
            "Four",
            "Three",
            "Two",
            "Five"
          ],
          correctAnswer: 0,
          explanation: "The four components are: Trend, Seasonality, Cyclical, and Irregular/Random components."
        },
        {
          id: 3,
          question: "Which test has null hypothesis of unit root (non-stationary)?",
          options: [
            "Augmented Dickey-Fuller (ADF) test",
            "KPSS test",
            "Ljung-Box test",
            "Jarque-Bera test"
          ],
          correctAnswer: 0,
          explanation: "ADF test null hypothesis is that series has unit root (non-stationary). Rejecting means stationary."
        },
        {
          id: 4,
          question: "What does ARIMA stand for?",
          options: [
            "AutoRegressive Integrated Moving Average",
            "AutoRegression Independent Moving Average",
            "Average Regression Integrated Moving Average",
            "AutoRegressive Independent Mean Adjustment"
          ],
          correctAnswer: 0,
          explanation: "ARIMA stands for AutoRegressive Integrated Moving Average, combining differencing with AR and MA components."
        },
        {
          id: 5,
          question: "Which function cuts off after lag p for AR(p) process?",
          options: [
            "Partial Autocorrelation Function (PACF)",
            "Autocorrelation Function (ACF)",
            "Both ACF and PACF",
            "Neither ACF nor PACF"
          ],
          correctAnswer: 0,
          explanation: "PACF cuts off after lag p for AR(p) process, while ACF decays gradually."
        },
        {
          id: 6,
          question: "What smoothing parameter range is used in exponential smoothing?",
          options: [
            "0 to 1",
            "-1 to 1",
            "0 to infinity",
            "1 to 10"
          ],
          correctAnswer: 0,
          explanation: "Smoothing parameters (α, β, γ) in exponential smoothing are typically between 0 and 1."
        },
        {
          id: 7,
          question: "Which model is specifically for volatility clustering in financial data?",
          options: [
            "GARCH",
            "ARIMA",
            "Holt-Winters",
            "Prophet"
          ],
          correctAnswer: 0,
          explanation: "GARCH (Generalized AutoRegressive Conditional Heteroskedasticity) models volatility clustering."
        },
        {
          id: 8,
          question: "What does VAR stand for in multivariate time series?",
          options: [
            "Vector Autoregression",
            "Variable AutoRegression",
            "Vector AutoRegression",
            "Variance AutoRegression"
          ],
          correctAnswer: 0,
          explanation: "VAR stands for Vector Autoregression, a multivariate extension of autoregressive models."
        },
        {
          id: 9,
          question: "Which error metric is scale-independent?",
          options: [
            "MASE (Mean Absolute Scaled Error)",
            "MAE (Mean Absolute Error)",
            "MSE (Mean Squared Error)",
            "RMSE (Root Mean Squared Error)"
          ],
          correctAnswer: 0,
          explanation: "MASE is scale-independent because it's scaled by in-sample MAE of naive forecast."
        },
        {
          id: 10,
          question: "Which time series database is built as a PostgreSQL extension?",
          options: [
            "TimescaleDB",
            "InfluxDB",
            "Prometheus",
            "OpenTSDB"
          ],
          correctAnswer: 0,
          explanation: "TimescaleDB is built as a PostgreSQL extension, providing time series capabilities on PostgreSQL."
        },
        {
          id: 11,
          question: "What are the three smoothing parameters in Holt-Winters method?",
          options: [
            "α, β*, γ",
            "α, β, γ",
            "α, β, δ",
            "α, λ, γ"
          ],
          correctAnswer: 0,
          explanation: "Holt-Winters uses α for level, β* for trend, and γ for seasonality smoothing."
        },
        {
          id: 12,
          question: "What does ETS stand for in time series models?",
          options: [
            "Error, Trend, Seasonality",
            "Exponential, Trend, Seasonal",
            "Error, Time, Seasonal",
            "Exponential, Time, Seasonality"
          ],
          correctAnswer: 0,
          explanation: "ETS stands for Error, Trend, Seasonality, the three components in exponential smoothing models."
        },
        {
          id: 13,
          question: "Which neural network architecture is popular for time series?",
          options: [
            "LSTM",
            "CNN",
            "Transformer",
            "All of the above"
          ],
          correctAnswer: 0,
          explanation: "LSTM is particularly popular for time series due to its ability to capture long-term dependencies."
        },
        {
          id: 14,
          question: "What is the typical range for business cycles?",
          options: [
            "2-10 years",
            "1-5 years",
            "5-15 years",
            "10-20 years"
          ],
          correctAnswer: 0,
          explanation: "Business cycles typically range from 2 to 10 years, longer than seasonal patterns."
        },
        {
          id: 15,
          question: "Which test compares two forecasting models?",
          options: [
            "Diebold-Mariano test",
            "ADF test",
            "KPSS test",
            "Ljung-Box test"
          ],
          correctAnswer: 0,
          explanation: "Diebold-Mariano test statistically compares the accuracy of two forecasting models."
        },
        {
          id: 16,
          question: "What does VaR stand for in financial risk management?",
          options: [
            "Value at Risk",
            "Variance at Risk",
            "Volatility at Risk",
            "Value and Risk"
          ],
          correctAnswer: 0,
          explanation: "VaR stands for Value at Risk, estimating maximum loss over a period at given confidence level."
        },
        {
          id: 17,
          question: "Which streaming platform uses true streaming (not micro-batching)?",
          options: [
            "Apache Flink",
            "Spark Streaming",
            "Storm",
            "ksqlDB"
          ],
          correctAnswer: 0,
          explanation: "Apache Flink uses true streaming model while Spark Streaming uses micro-batching."
        },
        {
          id: 18,
          question: "What type of anomaly is normal in some contexts but abnormal in others?",
          options: [
            "Contextual anomaly",
            "Point anomaly",
            "Collective anomaly",
            "Global anomaly"
          ],
          correctAnswer: 0,
          explanation: "Contextual anomalies are normal in some contexts (e.g., time periods) but abnormal in others."
        },
        {
          id: 19,
          question: "Which company developed the Prophet forecasting procedure?",
          options: [
            "Facebook",
            "Google",
            "Amazon",
            "Microsoft"
          ],
          correctAnswer: 0,
          explanation: "Prophet was developed by Facebook's Core Data Science team for business forecasting."
        },
        {
          id: 20,
          question: "What does ACF measure in time series?",
          options: [
            "Correlation between observations at different lags",
            "Partial correlation controlling for intermediate lags",
            "Cross-correlation between different series",
            "Correlation with external variables"
          ],
          correctAnswer: 0,
          explanation: "ACF (Autocorrelation Function) measures correlation between observations at different time lags."
        }
      ]
    },

    // MODULE 8: Data Engineering for Data Science
    {
      id: 8,
      title: "Data Engineering for Data Science",
      completed: false,
      content: `
# Module 8: Data Engineering for Data Science

## Introduction to Data Engineering
Data engineering builds and maintains the infrastructure for data collection, storage, processing, and access. Data scientists spend approximately 60-80% of their time on data preparation and engineering tasks, highlighting the critical importance of robust data engineering.

### Data Engineering Lifecycle
End-to-end data management process:

**Key Stages:**
1. **Data Generation** - Sources producing data (applications, IoT, user interactions)
2. **Data Ingestion** - Collecting and importing data into systems
3. **Data Storage** - Persistent storage in appropriate formats
4. **Data Processing** - Transforming and enriching data
5. **Data Serving** - Making data available for consumption
6. **Data Governance** - Quality, security, and compliance management

**Modern Data Stack Components:**
- **Data Sources** - Databases, APIs, files, streams
- **Ingestion Tools** - Fivetran, Stitch, Airbyte, custom scripts
- **Storage** - Data warehouses, data lakes, lakehouses
- **Transformation** - dbt, Dataform, Spark
- **Orchestration** - Airflow, Prefect, Dagster
- **BI & Analytics** - Looker, Tableau, Mode
- **Reverse ETL** - Hightouch, Census (data warehouse → operational systems)

### Data Storage Solutions
Choosing appropriate storage systems:

**OLTP vs OLAP:**
- **OLTP** - Online Transaction Processing (operational systems)
  - High volume of small transactions
  - Normalized schemas (3NF)
  - Examples: PostgreSQL, MySQL, Oracle
- **OLAP** - Online Analytical Processing (analytical systems)
  - Complex queries on large datasets
  - Denormalized schemas (star/snowflake)
  - Examples: Snowflake, Redshift, BigQuery

**Data Warehouse Characteristics:**
- **Schema-on-write** - Define schema before loading
- **Structured data** - Well-defined tables and relationships
- **Optimized for analytics** - Columnar storage, compression
- **ACID compliance** - Transactions guarantee consistency

**Data Lake Characteristics:**
- **Schema-on-read** - Apply schema when querying
- **All data types** - Structured, semi-structured, unstructured
- **Cost-effective storage** - Object storage (S3, GCS, ADLS)
- **Flexible but complex** - Requires proper governance

**Lakehouse Architecture:**
- Combines best of data lakes and data warehouses
- **ACID transactions** on data lake storage
- **Open formats** - Parquet, Delta Lake, Iceberg, Hudi
- **Direct access** - BI tools query directly without ETL to warehouse

### Data Pipeline Design
Building reliable data workflows:

**ETL vs ELT:**
- **ETL** - Extract, Transform, Load (transform before loading)
  - Traditional approach
  - Transform on separate processing engine
  - Load transformed data to warehouse
- **ELT** - Extract, Load, Transform (transform after loading)
  - Modern approach
  - Load raw data to warehouse
  - Transform using warehouse compute (dbt, SQL)
  - More flexible, leverages warehouse power

**Pipeline Design Patterns:**
- **Batch Processing** - Process data in scheduled batches
- **Stream Processing** - Process data in real-time
- **Lambda Architecture** - Combine batch and stream processing
- **Kappa Architecture** - Everything as a stream

**Pipeline Quality Attributes:**
- **Reliability** - Handle failures gracefully
- **Scalability** - Handle increasing data volumes
- **Maintainability** - Easy to understand and modify
- **Performance** - Meet latency requirements
- **Cost-effectiveness** - Optimize resource usage

### Data Orchestration
Coordinating data workflows:

**Workflow Orchestration Tools:**
- **Apache Airflow** - Most popular, Python-based DAGs
- **Prefect** - Modern alternative to Airflow
- **Dagster** - Data-aware orchestrator
- **Luigi** - Spotify's pipeline builder (simpler than Airflow)
- **Apache NiFi** - GUI-based data flow automation

**Airflow Concepts:**
- **DAG** - Directed Acyclic Graph (workflow definition)
- **Operator** - Task implementation (PythonOperator, BashOperator)
- **Task** - Instance of operator in DAG
- **Sensor** - Wait for condition before proceeding
- **XCom** - Cross-communication between tasks
- **Executor** - Runs tasks (LocalExecutor, CeleryExecutor, KubernetesExecutor)

**Best Practices:**
- **Idempotent tasks** - Can be rerun safely
- **Atomicity** - Tasks succeed or fail completely
- **Retry logic** - Handle transient failures
- **Monitoring and alerting** - Track pipeline health
- **Version control** - Store DAGs in Git

### Data Quality and Testing
Ensuring reliable data:

**Data Quality Dimensions:**
1. **Accuracy** - Data correctly represents real-world values
2. **Completeness** - All required data present
3. **Consistency** - Uniform across sources and over time
4. **Timeliness** - Data available when needed
5. **Validity** - Conforms to defined business rules
6. **Uniqueness** - No duplicate records

**Data Testing Approaches:**
- **Schema validation** - Check column names, types, constraints
- **Freshness checks** - Ensure data updated within expected timeframe
- **Volume checks** - Expected number of records
- **Distribution checks** - Statistical properties within expected ranges
- **Referential integrity** - Foreign key relationships valid
- **Custom business rules** - Domain-specific validation

**Testing Tools:**
- **Great Expectations** - Python library for data testing
- **dbt tests** - Built-in testing in dbt
- **Soda SQL** - Data quality testing framework
- **Deequ** - Amazon's library for data quality (Scala)
- **Custom scripts** - Python/Spark tests

**Data Observability:**
- **Data lineage** - Track data flow through pipelines
- **Data catalog** - Metadata management
- **Monitoring** - Track data quality metrics over time
- **Alerting** - Notify on data quality issues
- **Root cause analysis** - Identify source of data problems

### Data Modeling for Analytics
Designing effective data structures:

**Data Modeling Approaches:**
- **Normalized models** - Minimize redundancy (OLTP systems)
- **Dimensional modeling** - Optimize for analysis (Kimball methodology)
- **Data Vault** - Agile data warehouse modeling
- **One Big Table** - Single denormalized table for specific use cases

**Dimensional Modeling Components:**
- **Fact tables** - Business events/transactions (sales, clicks)
  - Contain metrics (facts) and foreign keys to dimensions
  - Types: Transaction, periodic snapshot, accumulating snapshot
- **Dimension tables** - Descriptive attributes (customers, products, time)
  - Contain textual descriptions and hierarchies
  - Types: Conformed, slowly changing, junk dimensions

**Slowly Changing Dimensions (SCD):**
- **Type 0** - Never change (retain original)
- **Type 1** - Overwrite (no history)
- **Type 2** - Add new row (full history)
- **Type 3** - Add new column (limited history)
- **Type 4** - History table (separate history table)
- **Type 6** - Hybrid (1+2+3)

**Modern Data Modeling:**
- **Medallion architecture** - Bronze (raw), Silver (cleaned), Gold (business-ready)
- **Data mesh** - Domain-oriented decentralized modeling
- **Schema evolution** - Handling changing schemas over time

### Performance Optimization
Improving data pipeline efficiency:

**Storage Optimization:**
- **Partitioning** - Divide data by date, category, etc.
- **Clustering** - Co-locate related data
- **Compression** - Reduce storage size (Snappy, Zstd, Gzip)
- **Columnar formats** - Parquet, ORC (optimized for analytics)
- **Data lifecycle management** - Archive old data, delete unused data

**Compute Optimization:**
- **Query optimization** - Use appropriate indexes, materialized views
- **Resource allocation** - Right-size compute resources
- **Caching** - Cache frequently accessed data
- **Parallel processing** - Distribute work across multiple workers
- **Vectorization** - Use SIMD operations for batch processing

**Cost Optimization:**
- **Usage monitoring** - Track resource consumption
- **Rightsizing** - Match resources to workload needs
- **Spot/Preemptible instances** - Use discounted compute
- **Autoscaling** - Scale based on workload
- **Reserved instances** - Commit to usage for discounts

### Data Security and Governance
Protecting and managing data:

**Data Security Measures:**
- **Encryption** - At rest and in transit
- **Access control** - Role-based access control (RBAC)
- **Masking/anonymization** - Protect sensitive data
- **Audit logging** - Track data access and changes
- **Network security** - VPCs, firewalls, private endpoints

**Data Governance Framework:**
- **Data catalog** - Metadata management (Collibra, Alation, Amundsen)
- **Data lineage** - Track data flow and transformations
- **Data quality management** - Standards and monitoring
- **Master data management** - Authoritative data sources
- **Compliance** - GDPR, CCPA, HIPAA, SOX requirements

**Privacy Engineering:**
- **Differential privacy** - Formal privacy guarantees
- **Data minimization** - Collect only necessary data
- **Purpose limitation** - Use data only for intended purposes
- **Consent management** - Track and manage user consent

### Scalability and Distributed Systems
Building systems that scale:

**Scalability Patterns:**
- **Horizontal scaling** - Add more machines (scale out)
- **Vertical scaling** - Use more powerful machines (scale up)
- **Sharding** - Distribute data across multiple databases
- **Replication** - Copy data for availability and read scaling

**Distributed Processing Frameworks:**
- **Apache Spark** - Unified engine for large-scale data processing
- **Apache Flink** - Stream processing with exactly-once semantics
- **Apache Beam** - Unified programming model for batch and streaming
- **Dask** - Parallel computing in Python
- **Ray** - Distributed computing framework for ML

**Containerization and Orchestration:**
- **Docker** - Container runtime
- **Kubernetes** - Container orchestration
- **Helm** - Kubernetes package manager
- **Kustomize** - Kubernetes configuration management

### Cloud Data Platforms
Managed services for data engineering:

**AWS Data Services:**
- **S3** - Object storage (foundation for data lake)
- **Glue** - Serverless ETL and data catalog
- **EMR** - Managed Hadoop/Spark clusters
- **Redshift** - Data warehouse
- **Athena** - Serverless query service for S3
- **MSK** - Managed Kafka service
- **Kinesis** - Real-time data streaming

**Google Cloud Data Services:**
- **BigQuery** - Serverless data warehouse
- **Dataflow** - Managed Apache Beam service
- **Dataproc** - Managed Spark and Hadoop
- **Pub/Sub** - Messaging and event ingestion
- **Bigtable** - NoSQL database
- **Dataform** - Data transformation and modeling

**Azure Data Services:**
- **Azure Data Lake Storage** - Data lake storage
- **Azure Synapse Analytics** - Unified analytics service
- **Azure Databricks** - Apache Spark-based analytics
- **Azure Data Factory** - Cloud ETL service
- **Azure Stream Analytics** - Real-time analytics

### Data Engineering Tools Ecosystem
Essential tools for data engineers:

**Programming Languages:**
- **Python** - Most popular for data engineering (pandas, PySpark)
- **SQL** - Essential for data manipulation
- **Scala** - For Spark development (performance benefits)
- **Java** - Enterprise data systems
- **Go** - Systems programming, infrastructure tools

**Infrastructure as Code:**
- **Terraform** - Infrastructure provisioning
- **CloudFormation** - AWS-specific infrastructure
- **Ansible** - Configuration management
- **Pulumi** - Infrastructure as code with programming languages

**CI/CD for Data:**
- **Git** - Version control
- **GitHub Actions/GitLab CI/Jenkins** - Continuous integration
- **DVC** - Data version control
- **MLflow** - Machine learning lifecycle management

**Monitoring and Observability:**
- **Prometheus** - Metrics collection
- **Grafana** - Metrics visualization
- **ELK Stack** - Log management (Elasticsearch, Logstash, Kibana)
- **Datadog** - Cloud monitoring
- **Sentry** - Error tracking

### Emerging Trends
Future directions in data engineering:

**Data Mesh Architecture:**
- Domain-oriented decentralized architecture
- Data as a product
- Self-serve data infrastructure
- Federated computational governance

**Real-time Analytics:**
- Sub-second analytics on streaming data
- Real-time feature stores for ML
- Streaming data warehouses

**MLOps Integration:**
- End-to-end ML pipeline orchestration
- Feature stores
- Model monitoring and governance
- Automated retraining pipelines

**Sustainability in Data Engineering:**
- Energy-efficient data processing
- Carbon-aware scheduling
- Sustainable cloud practices
- Data minimization for environmental impact

**Low-code/No-code Platforms:**
- Democratizing data engineering
- Visual pipeline builders
- Automated data integration
- Self-service data preparation

### Career Development
Building data engineering skills:

**Essential Skills:**
- **SQL expertise** - Advanced querying, optimization
- **Programming** - Python, Scala, or Java
- **Cloud platforms** - AWS, GCP, or Azure certification
- **Distributed systems** - Understanding of Spark, Hadoop
- **Data modeling** - Dimensional modeling, schema design

**Certification Paths:**
- **AWS Certified Data Engineer - Associate**
- **Google Cloud Professional Data Engineer**
- **Azure Data Engineer Associate**
- **Databricks Certified Data Engineer**

**Learning Resources:**
- **Books** - "Fundamentals of Data Engineering", "Designing Data-Intensive Applications"
- **Courses** - Data Engineering Zoomcamp, Coursera Data Engineering Specialization
- **Communities** - Data Engineering subreddit, Slack communities
- **Open source projects** - Contribute to data engineering tools

**Career Growth:**
- **Junior Data Engineer** - Build and maintain pipelines
- **Data Engineer** - Design and implement data systems
- **Senior Data Engineer** - Architect data platforms, mentor others
- **Staff/Principal Data Engineer** - Set technical direction, solve complex problems
- **Data Engineering Manager** - Lead team, manage projects
`,
      quiz: [
        {
          id: 1,
          question: "What percentage of time do data scientists spend on data preparation?",
          options: [
            "60-80%",
            "40-60%",
            "20-40%",
            "80-90%"
          ],
          correctAnswer: 0,
          explanation: "Data scientists spend approximately 60-80% of their time on data preparation and engineering tasks."
        },
        {
          id: 2,
          question: "What does OLTP stand for?",
          options: [
            "Online Transaction Processing",
            "Online Transaction Protocol",
            "Online Transformation Processing",
            "Online Transfer Processing"
          ],
          correctAnswer: 0,
          explanation: "OLTP stands for Online Transaction Processing, handling operational transactions in databases."
        },
        {
          id: 3,
          question: "Which approach transforms data after loading to warehouse?",
          options: [
            "ELT (Extract, Load, Transform)",
            "ETL (Extract, Transform, Load)",
            "E-LT (Extract-Load-Transform)",
            "TEL (Transform, Extract, Load)"
          ],
          correctAnswer: 0,
          explanation: "ELT loads raw data first, then transforms within the data warehouse using its compute power."
        },
        {
          id: 4,
          question: "What does DAG stand for in Airflow?",
          options: [
            "Directed Acyclic Graph",
            "Directed Acyclic Graph",
            "Data Activity Graph",
            "Directed Activity Graph"
          ],
          correctAnswer: 0,
          explanation: "DAG stands for Directed Acyclic Graph, representing workflow dependencies in Airflow."
        },
        {
          id: 5,
          question: "How many data quality dimensions are commonly measured?",
          options: [
            "Six",
            "Five",
            "Four",
            "Seven"
          ],
          correctAnswer: 0,
          explanation: "The six common dimensions are: Accuracy, Completeness, Consistency, Timeliness, Validity, and Uniqueness."
        },
        {
          id: 6,
          question: "Which SCD type adds a new row for each change?",
          options: [
            "Type 2",
            "Type 1",
            "Type 3",
            "Type 4"
          ],
          correctAnswer: 0,
          explanation: "Type 2 Slowly Changing Dimensions add a new row for each change, preserving full history."
        },
        {
          id: 7,
          question: "What architecture has Bronze, Silver, and Gold layers?",
          options: [
            "Medallion architecture",
            "Data mesh architecture",
            "Lambda architecture",
            "Kappa architecture"
          ],
          correctAnswer: 0,
          explanation: "Medallion architecture has Bronze (raw), Silver (cleaned), and Gold (business-ready) layers."
        },
        {
          id: 8,
          question: "Which Python library is for data testing and validation?",
          options: [
            "Great Expectations",
            "Pandas",
            "PySpark",
            "NumPy"
          ],
          correctAnswer: 0,
          explanation: "Great Expectations is a Python library for data testing, documentation, and profiling."
        },
        {
          id: 9,
          question: "What does RBAC stand for in data security?",
          options: [
            "Role-Based Access Control",
            "Rule-Based Access Control",
            "Resource-Based Access Control",
            "Risk-Based Access Control"
          ],
          correctAnswer: 0,
          explanation: "RBAC stands for Role-Based Access Control, granting permissions based on user roles."
        },
        {
          id: 10,
          question: "Which AWS service is serverless query service for S3?",
          options: [
            "Athena",
            "Redshift",
            "EMR",
            "Glue"
          ],
          correctAnswer: 0,
          explanation: "Amazon Athena is a serverless query service that allows SQL queries directly on S3 data."
        },
        {
          id: 11,
          question: "What does IaC stand for?",
          options: [
            "Infrastructure as Code",
            "Infrastructure as Configuration",
            "Infrastructure as Compute",
            "Infrastructure as Cloud"
          ],
          correctAnswer: 0,
          explanation: "IaC stands for Infrastructure as Code, managing infrastructure through machine-readable definition files."
        },
        {
          id: 12,
          question: "Which tool is most popular for workflow orchestration?",
          options: [
            "Apache Airflow",
            "Prefect",
            "Dagster",
            "Luigi"
          ],
          correctAnswer: 0,
          explanation: "Apache Airflow is the most popular workflow orchestration tool for data pipelines."
        },
        {
          id: 13,
          question: "What format is columnar and optimized for analytics?",
          options: [
            "Parquet",
            "CSV",
            "JSON",
            "XML"
          ],
          correctAnswer: 0,
          explanation: "Parquet is a columnar storage format optimized for analytical queries with efficient compression."
        },
        {
          id: 14,
          question: "Which data modeling methodology optimizes for analysis?",
          options: [
            "Dimensional modeling",
            "Normalized modeling",
            "Data Vault",
            "One Big Table"
          ],
          correctAnswer: 0,
          explanation: "Dimensional modeling (Kimball methodology) optimizes schemas for analytical queries."
        },
        {
          id: 15,
          question: "What does DVC stand for?",
          options: [
            "Data Version Control",
            "Data Validation Control",
            "Data Virtualization Control",
            "Data Verification Control"
          ],
          correctAnswer: 0,
          explanation: "DVC stands for Data Version Control, versioning data and ML models alongside code."
        },
        {
          id: 16,
          question: "Which architecture treats data as a product?",
          options: [
            "Data mesh",
            "Data warehouse",
            "Data lake",
            "Lakehouse"
          ],
          correctAnswer: 0,
          explanation: "Data mesh architecture treats data as a product with domain-oriented ownership."
        },
        {
          id: 17,
          question: "What is horizontal scaling?",
          options: [
            "Adding more machines",
            "Using more powerful machines",
            "Increasing storage capacity",
            "Adding more CPU cores"
          ],
          correctAnswer: 0,
          explanation: "Horizontal scaling (scale out) adds more machines to distribute load."
        },
        {
          id: 18,
          question: "Which Google Cloud service is a serverless data warehouse?",
          options: [
            "BigQuery",
            "Dataflow",
            "Dataproc",
            "Bigtable"
          ],
          correctAnswer: 0,
          explanation: "BigQuery is Google Cloud's serverless, highly scalable data warehouse."
        },
        {
          id: 19,
          question: "What does CI/CD stand for?",
          options: [
            "Continuous Integration/Continuous Deployment",
            "Continuous Integration/Continuous Delivery",
            "Continuous Integration/Continuous Development",
            "All of the above"
          ],
          correctAnswer: 0,
          explanation: "CI/CD stands for Continuous Integration and Continuous Deployment/Delivery."
        },
        {
          id: 20,
          question: "Which fact table type shows status at regular intervals?",
          options: [
            "Periodic snapshot",
            "Transaction fact",
            "Accumulating snapshot",
            "Snapshot fact"
          ],
          correctAnswer: 0,
          explanation: "Periodic snapshot fact tables capture status at regular intervals (e.g., end of day balances)."
        }
      ]
    },

    // MODULE 9: MLOps and Model Deployment
    {
      id: 9,
      title: "MLOps and Model Deployment",
      completed: false,
      content: `
# Module 9: MLOps and Model Deployment

## Introduction to MLOps
MLOps (Machine Learning Operations) is the practice of collaboration between data scientists and operations professionals to manage the complete ML lifecycle. Organizations implementing MLOps see 2-5x faster model deployment and 30-50% reduction in model maintenance costs.

### MLOps vs DevOps
Comparing ML and software deployment:

**DevOps Principles Applied to ML:**
- **Continuous Integration** - Automated testing of code and data
- **Continuous Delivery** - Automated model deployment
- **Monitoring** - Application and infrastructure monitoring
- **Collaboration** - Cross-functional teams

**ML-Specific Challenges:**
- **Data dependencies** - Models depend on data, not just code
- **Model decay** - Performance degrades over time (concept drift, data drift)
- **Experimentation** - Multiple versions of models and hyperparameters
- **Reproducibility** - Need to reproduce exact training conditions
- **Compliance** - Model governance and audit requirements

**MLOps Maturity Levels:**
1. **Level 0: Manual Process** - No automation, manual deployment
2. **Level 1: ML Pipeline Automation** - Automated training and deployment
3. **Level 2: CI/CD Pipeline Automation** - Automated testing and deployment
4. **Level 3: Automated Retraining** - Trigger retraining based on performance
5. **Level 4: Full MLOps Automation** - Complete automated ML lifecycle

### ML Pipeline Architecture
End-to-end machine learning workflow:

**Pipeline Components:**
1. **Data Ingestion** - Collect raw data from various sources
2. **Data Validation** - Check data quality and schema
3. **Data Preprocessing** - Clean, transform, and feature engineering
4. **Model Training** - Train model with hyperparameter tuning
5. **Model Evaluation** - Validate model performance
6. **Model Validation** - Compare with baseline, check for bias
7. **Model Packaging** - Package model for deployment
8. **Model Deployment** - Deploy to serving environment
9. **Model Monitoring** - Monitor performance in production
10. **Model Retraining** - Trigger retraining when needed

**Pipeline Orchestration Tools:**
- **Kubeflow** - Kubernetes-native platform for ML workflows
- **MLflow Pipelines** - MLflow's pipeline functionality
- **Apache Airflow** - General workflow orchestration
- **TFX (TensorFlow Extended)** - End-to-end platform for ML
- **Metaflow** - Human-centric framework for ML (Netflix)

### Experiment Tracking
Managing ML experiments:

**What to Track:**
- **Code version** - Git commit hash
- **Data version** - Dataset used for training
- **Hyperparameters** - All configuration parameters
- **Metrics** - Training and validation metrics
- **Artifacts** - Trained models, visualizations
- **Environment** - Software versions, hardware specs
- **Metadata** - Tags, notes, experiment descriptions

**Experiment Tracking Tools:**
- **MLflow Tracking** - Open source platform
- **Weights & Biases** - Cloud-based with collaboration features
- **Neptune.ai** - Flexible metadata store
- **TensorBoard** - TensorFlow visualization toolkit
- **Comet.ml** - Enterprise MLOps platform
- **DVC (Data Version Control)** - Version control for data and models

**Best Practices:**
- **Consistent naming** - Standard experiment naming convention
- **Automatic logging** - Log all relevant information automatically
- **Tagging system** - Organize experiments with tags
- **Collaboration features** - Share experiments with team
- **Integration with pipelines** - Connect with orchestration tools

### Model Registry
Centralized model management:

**Registry Components:**
- **Model storage** - Store model artifacts with versioning
- **Metadata storage** - Store model metadata and lineage
- **Stage management** - Development, Staging, Production stages
- **Access control** - Role-based permissions
- **Audit trail** - Track all model changes and deployments

**Model Versioning Strategies:**
- **Semantic versioning** - MAJOR.MINOR.PATCH (breaking changes.features.fixes)
- **Timestamp-based** - Version with training timestamp
- **Hash-based** - Version with model hash
- **Experiment-based** - Link to experiment ID

**Model Promotion Workflow:**
1. **Development** - Initial training and experimentation
2. **Staging** - Validation and testing before production
3. **Production** - Live deployment serving predictions
4. **Archived** - Retired models kept for reference

**Registry Tools:**
- **MLflow Model Registry** - Integrated with MLflow tracking
- **Sagemaker Model Registry** - AWS managed service
- **Azure ML Model Registry** - Azure Machine Learning
- **Custom solutions** - Built on object storage (S3) with metadata database

### Model Deployment Patterns
Different approaches to serving models:

**Batch Inference:**
- Process data in batches on schedule
- **Use cases**: Recommendation systems, fraud detection reports
- **Tools**: Spark, Airflow, scheduled jobs
- **Advantages**: Efficient resource usage, no latency requirements
- **Disadvantages**: Not real-time, stale predictions

**Real-time Inference:**
- Serve predictions with low latency (<100ms typically)
- **Use cases**: Fraud detection, dynamic pricing, recommendations
- **Architectures**: REST API, gRPC, WebSocket
- **Tools**: TensorFlow Serving, TorchServe, KServe, Seldon Core
- **Advantages**: Immediate predictions, interactive applications
- **Disadvantages**: Higher infrastructure cost, scaling challenges

**Edge Deployment:**
- Deploy models on edge devices (phones, IoT devices)
- **Use cases**: Mobile apps, autonomous vehicles, smart cameras
- **Considerations**: Model size, power consumption, privacy
- **Tools**: TensorFlow Lite, PyTorch Mobile, Core ML, ONNX Runtime
- **Advantages**: Low latency, offline capability, privacy
- **Disadvantages**: Limited compute, deployment complexity

**Serverless Inference:**
- Deploy as serverless functions
- **Use cases**: Sporadic inference needs, variable load
- **Tools**: AWS Lambda, Google Cloud Functions, Azure Functions
- **Advantages**: No server management, pay per request, auto-scaling
- **Disadvantages**: Cold start latency, size limitations

### Model Serving Infrastructure
Technical infrastructure for serving:

**Serving Frameworks:**
- **TensorFlow Serving** - High-performance serving for TensorFlow models
- **TorchServe** - PyTorch model serving
- **KServe (formerly KFServing)** - Kubernetes-native model serving
- **Seldon Core** - Kubernetes platform for deploying ML models
- **Triton Inference Server** - NVIDIA's multi-framework serving
- **BentoML** - Unified model serving framework

**API Design Considerations:**
- **REST vs gRPC** - REST for simplicity, gRPC for performance
- **Input/output formats** - JSON, Protocol Buffers, Avro
- **Authentication/authorization** - API keys, OAuth, JWT tokens
- **Rate limiting** - Prevent abuse, ensure fair usage
- **Documentation** - OpenAPI/Swagger specifications

**Scalability Patterns:**
- **Horizontal scaling** - Add more serving instances
- **Load balancing** - Distribute requests across instances
- **Caching** - Cache predictions for repeated inputs
- **Batching** - Group multiple requests for efficiency
- **Async processing** - For longer-running predictions

**Monitoring Serving Infrastructure:**
- **Latency** - P50, P90, P99 response times
- **Throughput** - Requests per second
- **Error rates** - Percentage of failed requests
- **Resource utilization** - CPU, memory, GPU usage
- **Cost monitoring** - Cost per prediction

### Model Monitoring
Tracking model performance in production:

**What to Monitor:**
1. **Model Performance Metrics**
   - Accuracy, precision, recall, F1 score (when ground truth available)
   - Business metrics (conversion rate, revenue impact)

2. **Data Drift**
   - **Covariate shift** - Input feature distribution changes
   - **Concept drift** - Relationship between features and target changes
   - **Label drift** - Target distribution changes

3. **Infrastructure Metrics**
   - Latency, throughput, error rates
   - Resource utilization (CPU, memory, GPU)
   - Cost metrics

**Drift Detection Methods:**
- **Statistical tests** - KS test, Chi-square test, PSI (Population Stability Index)
- **Domain classifier** - Train classifier to distinguish training vs production data
- **Model-based** - Monitor model confidence scores
- **Manual rules** - Business rules for expected ranges

**Monitoring Tools:**
- **Evidently AI** - Open source monitoring and testing
- **Arize AI** - Enterprise ML monitoring
- **Fiddler AI** - Explainable AI and monitoring
- **WhyLabs** - AI observability platform
- **Custom solutions** - Built with Prometheus, Grafana, custom metrics

**Alerting and Response:**
- **Threshold-based alerts** - Alert when metrics cross thresholds
- **Anomaly detection** - Detect unusual patterns automatically
- **Root cause analysis** - Investigate causes of performance issues
- **Automated responses** - Trigger retraining, fallback to previous model

### Automated Retraining
Keeping models up-to-date:

**Retraining Triggers:**
- **Schedule-based** - Retrain daily, weekly, monthly
- **Performance-based** - Retrain when performance degrades below threshold
- **Data-based** - Retrain when significant data drift detected
- **Event-based** - Retrain when new data available (new product, policy change)

**Retraining Strategies:**
- **Full retraining** - Retrain from scratch with all data
- **Incremental training** - Update model with new data only
- **Transfer learning** - Fine-tune pre-trained model on new data
- **Ensemble methods** - Add new model to ensemble

**Canary Deployment for Models:**
- Deploy new model to small percentage of traffic
- Compare performance with current model
- Gradually increase traffic if performance is better
- Roll back if issues detected

**A/B Testing for Models:**
- Split traffic between different model versions
- Compare business metrics (conversion, revenue, engagement)
- Statistical significance testing
- Decision framework for choosing winning model

### Model Governance and Compliance
Managing regulatory and ethical requirements:

**Model Documentation:**
- **Model cards** - Standardized documentation of model capabilities and limitations
- **Datasheets for datasets** - Documentation of training data
- **FactSheets** - IBM's model documentation framework
- **Technical specifications** - Architecture, training details, performance

**Bias and Fairness Testing:**
- **Fairness metrics** - Demographic parity, equal opportunity, equalized odds
- **Bias detection** - Test for different performance across groups
- **Mitigation techniques** - Pre-processing, in-processing, post-processing
- **Audit trails** - Document bias testing and mitigation efforts

**Regulatory Compliance:**
- **GDPR** - Right to explanation, data privacy
- **CCPA** - California consumer privacy
- **HIPAA** - Healthcare data privacy
- **FINRA/SEC** - Financial regulations
- **Industry-specific** - Autonomous vehicles, healthcare diagnostics

**Explainability and Interpretability:**
- **Model-agnostic methods** - LIME, SHAP, Partial Dependence Plots
- **Model-specific methods** - Feature importance for tree models, attention weights
- **Counterfactual explanations** - What changes would flip prediction?
- **Human-interpretable features** - Use interpretable features when possible

### Cost Management
Optimizing ML infrastructure costs:

**Cost Components:**
- **Compute costs** - Training and inference hardware
- **Storage costs** - Data and model storage
- **Networking costs** - Data transfer between services
- **Software costs** - Licensed tools and platforms
- **Personnel costs** - Data scientists and engineers

**Cost Optimization Strategies:**
- **Right-sizing** - Match resources to workload requirements
- **Spot/Preemptible instances** - Use discounted compute for fault-tolerant workloads
- **Autoscaling** - Scale based on demand
- **Model optimization** - Smaller, more efficient models
- **Caching** - Cache predictions to avoid recomputation
- **Batch processing** - For non-real-time needs

**Cost Monitoring Tools:**
- **Cloud provider tools** - AWS Cost Explorer, GCP Cost Management, Azure Cost Management
- **Third-party tools** - CloudHealth, Cloudability, Densify
- **Custom dashboards** - Built with cloud provider APIs

**ROI Calculation:**
- **Business impact** - Revenue increase, cost savings from model
- **Implementation costs** - Development, deployment, maintenance
- **Time to value** - How quickly model generates value
- **Total cost of ownership** - All costs over model lifetime

### Security in MLOps
Protecting ML systems:

**Security Threats:**
- **Data poisoning** - Malicious training data to compromise model
- **Model stealing** - Extract model through API queries
- **Model inversion** - Reconstruct training data from model
- **Adversarial attacks** - Craft inputs to cause incorrect predictions
- **API abuse** - DDoS attacks, credential theft

**Security Best Practices:**
- **Input validation** - Validate and sanitize all inputs
- **Rate limiting** - Prevent abuse of prediction APIs
- **Model encryption** - Encrypt models at rest and in transit
- **Access control** - Strict permissions for model access
- **Audit logging** - Log all model accesses and predictions
- **Vulnerability scanning** - Regular security testing

**Privacy-Preserving ML:**
- **Differential privacy** - Formal privacy guarantees
- **Federated learning** - Train without sharing raw data
- **Homomorphic encryption** - Compute on encrypted data
- **Synthetic data** - Generate artificial training data

**Compliance and Certification:**
- **Security certifications** - SOC2, ISO 27001, PCI DSS
- **Privacy certifications** - GDPR compliance, Privacy Shield
- **Industry certifications** - Healthcare, finance, automotive

### MLOps Platform Selection
Choosing the right MLOps tools:

**Build vs Buy Considerations:**
- **Build** - Full control, customization, higher initial cost
- **Buy** - Faster implementation, vendor support, less control
- **Hybrid** - Core platform bought, extensions built

**Key Evaluation Criteria:**
- **Team size and skills** - Match tools to team capabilities
- **Scale requirements** - Current and future scale needs
- **Integration needs** - Existing systems and tools
- **Budget constraints** - Open source vs commercial
- **Compliance requirements** - Industry-specific needs

**Popular MLOps Platforms:**
- **Databricks** - Unified analytics platform with MLflow integration
- **Sagemaker** - AWS end-to-end ML platform
- **Azure Machine Learning** - Microsoft's ML platform
- **Vertex AI** - Google's unified ML platform
- **Domino Data Lab** - Enterprise MLOps platform
- **H2O AI Cloud** - End-to-end AI platform

**Open Source Stack Options:**
- **Orchestration** - Kubeflow, Airflow
- **Experiment tracking** - MLflow, Weights & Biases
- **Model serving** - KServe, Seldon Core, BentoML
- **Monitoring** - Evidently, Prometheus, Grafana
- **Feature store** - Feast, Hopsworks

### Future Trends in MLOps
Emerging developments:

**AI Governance and Ethics:**
- Automated bias detection and mitigation
- Explainability as a service
- Regulatory compliance automation
- Ethical AI frameworks

**Automated Machine Learning (AutoML):**
- End-to-end pipeline automation
- Neural architecture search
- Hyperparameter optimization
- Feature engineering automation

**Federated Learning at Scale:**
- Privacy-preserving collaborative learning
- Cross-silo federated learning
- Federated analytics
- Secure aggregation protocols

**ML on Edge Devices:**
- TinyML (machine learning on microcontrollers)
- Federated learning on edge
- Edge model management
- Privacy-preserving edge inference

**Sustainable MLOps:**
- Carbon-aware scheduling
- Energy-efficient model training
- Model efficiency optimization
- Green AI initiatives
`,
      quiz: [
        {
          id: 1,
          question: "How much faster model deployment do organizations implementing MLOps typically see?",
          options: [
            "2-5x faster",
            "1.5-2x faster",
            "3-6x faster",
            "5-10x faster"
          ],
          correctAnswer: 0,
          explanation: "Organizations implementing MLOps see 2-5x faster model deployment compared to manual processes."
        },
        {
          id: 2,
          question: "What is the main difference between MLOps and DevOps?",
          options: [
            "MLOps handles data and model dependencies",
            "MLOps is only for machine learning teams",
            "DevOps doesn't use containers",
            "There is no difference"
          ],
          correctAnswer: 0,
          explanation: "MLOps specifically addresses ML challenges like data dependencies, model decay, and experimentation management."
        },
        {
          id: 3,
          question: "Which MLOps maturity level includes automated retraining?",
          options: [
            "Level 3",
            "Level 1",
            "Level 2",
            "Level 4"
          ],
          correctAnswer: 0,
          explanation: "Level 3 MLOps includes automated retraining triggered based on performance or data drift."
        },
        {
          id: 4,
          question: "What does TFX stand for?",
          options: [
            "TensorFlow Extended",
            "TensorFlow Execution",
            "TensorFlow Experience",
            "TensorFlow Expansion"
          ],
          correctAnswer: 0,
          explanation: "TFX stands for TensorFlow Extended, Google's end-to-end platform for deploying production ML pipelines."
        },
        {
          id: 5,
          question: "Which tool is specifically for experiment tracking?",
          options: [
            "MLflow Tracking",
            "Apache Airflow",
            "Kubeflow",
            "TensorFlow Serving"
          ],
          correctAnswer: 0,
          explanation: "MLflow Tracking is specifically designed for tracking ML experiments, parameters, and metrics."
        },
        {
          id: 6,
          question: "What is semantic versioning format for models?",
          options: [
            "MAJOR.MINOR.PATCH",
            "YEAR.MONTH.DAY",
            "EXPERIMENT.RUN.ITERATION",
            "VERSION.RELEASE.BUILD"
          ],
          correctAnswer: 0,
          explanation: "Semantic versioning uses MAJOR.MINOR.PATCH for breaking changes, new features, and bug fixes respectively."
        },
        {
          id: 7,
          question: "Which deployment pattern is for sporadic inference needs?",
          options: [
            "Serverless Inference",
            "Batch Inference",
            "Real-time Inference",
            "Edge Deployment"
          ],
          correctAnswer: 0,
          explanation: "Serverless inference (e.g., AWS Lambda) is ideal for sporadic inference needs with variable load."
        },
        {
          id: 8,
          question: "What latency is typically expected for real-time inference?",
          options: [
            "<100ms",
            "<500ms",
            "<1 second",
            "<5 seconds"
          ],
          correctAnswer: 0,
          explanation: "Real-time inference typically requires <100ms latency for interactive applications."
        },
        {
          id: 9,
          question: "Which drift type refers to input feature distribution changes?",
          options: [
            "Covariate shift",
            "Concept drift",
            "Label drift",
            "Prior probability shift"
          ],
          correctAnswer: 0,
          explanation: "Covariate shift occurs when the distribution of input features changes over time."
        },
        {
          id: 10,
          question: "What does PSI stand for in drift detection?",
          options: [
            "Population Stability Index",
            "Probability Stability Index",
            "Performance Stability Index",
            "Population Shift Indicator"
          ],
          correctAnswer: 0,
          explanation: "PSI stands for Population Stability Index, a metric to detect distribution shifts in data."
        },
        {
          id: 11,
          question: "How many main retraining triggers were discussed?",
          options: [
            "Four",
            "Three",
            "Five",
            "Two"
          ],
          correctAnswer: 0,
          explanation: "The four triggers are: Schedule-based, Performance-based, Data-based, and Event-based retraining."
        },
        {
          id: 12,
          question: "What is the practice of deploying new model to small traffic percentage called?",
          options: [
            "Canary deployment",
            "Blue-green deployment",
            "A/B testing",
            "Shadow deployment"
          ],
          correctAnswer: 0,
          explanation: "Canary deployment releases new version to a small subset of users before full rollout."
        },
        {
          id: 13,
          question: "Which framework provides standardized model documentation?",
          options: [
            "Model cards",
            "Datasheets",
            "FactSheets",
            "All of the above"
          ],
          correctAnswer: 0,
          explanation: "Model cards, datasheets for datasets, and FactSheets are all frameworks for model documentation."
        },
        {
          id: 14,
          question: "Which fairness metric ensures equal prediction rates across groups?",
          options: [
            "Demographic parity",
            "Equal opportunity",
            "Equalized odds",
            "Predictive parity"
          ],
          correctAnswer: 0,
          explanation: "Demographic parity requires prediction rates to be equal across demographic groups."
        },
        {
          id: 15,
          question: "What type of instance offers discounted compute for fault-tolerant workloads?",
          options: [
            "Spot/Preemptible instances",
            "Reserved instances",
            "On-demand instances",
            "Dedicated instances"
          ],
          correctAnswer: 0,
          explanation: "Spot (AWS) or Preemptible (GCP) instances offer significant discounts but can be interrupted."
        },
        {
          id: 16,
          question: "Which security threat involves malicious training data?",
          options: [
            "Data poisoning",
            "Model stealing",
            "Model inversion",
            "Adversarial attacks"
          ],
          correctAnswer: 0,
          explanation: "Data poisoning involves injecting malicious data during training to compromise the model."
        },
        {
          id: 17,
          question: "What privacy technique trains models without sharing raw data?",
          options: [
            "Federated learning",
            "Differential privacy",
            "Homomorphic encryption",
            "Synthetic data"
          ],
          correctAnswer: 0,
          explanation: "Federated learning trains models across decentralized devices without sharing raw data."
        },
        {
          id: 18,
          question: "Which AWS service is an end-to-end ML platform?",
          options: [
            "Sagemaker",
            "Lambda",
            "EC2",
            "Glue"
          ],
          correctAnswer: 0,
          explanation: "Amazon Sagemaker is AWS's end-to-end machine learning platform."
        },
        {
          id: 19,
          question: "What does AutoML stand for?",
          options: [
            "Automated Machine Learning",
            "Automatic Machine Learning",
            "Automated Model Learning",
            "Automatic Model Learning"
          ],
          correctAnswer: 0,
          explanation: "AutoML stands for Automated Machine Learning, automating the end-to-end process of applying ML."
        },
        {
          id: 20,
          question: "What is machine learning on microcontrollers called?",
          options: [
            "TinyML",
            "EdgeML",
            "MicroML",
            "EmbeddedML"
          ],
          correctAnswer: 0,
          explanation: "TinyML refers to machine learning on resource-constrained devices like microcontrollers."
        }
      ]
    },

    // MODULE 10: Capstone Project - End-to-End Data Science
    {
      id: 10,
      title: "Capstone Project - End-to-End Data Science",
      completed: false,
      content: `
# Module 10: Capstone Project - End-to-End Data Science

## Comprehensive Data Science Integration
This capstone module integrates all previous learning into a complete data science project. You will apply knowledge from all nine modules to develop, deploy, and monitor a production-ready machine learning system for a real-world business problem.

### Project Overview
**Business Problem:** Predictive Maintenance for Industrial Equipment  
**Domain:** Manufacturing Industry  
**Goal:** Reduce unplanned downtime by 30% and maintenance costs by 25%  
**Data Volume:** 1TB+ of sensor data from 500+ machines over 2 years  
**Team Size:** 4-5 member data science team  
**Timeline:** 12-week project duration

### Project Requirements
Your end-to-end data science solution must include:

#### 1. Business Understanding & Problem Framing
- **Stakeholder Analysis** - Identify all business stakeholders and their needs
- **Success Metrics Definition** - Business and technical KPIs
- **ROI Calculation** - Expected business value from solution
- **Project Charter** - Scope, timeline, resources, risks

#### 2. Data Acquisition & Engineering
- **Data Source Identification** - Sensor data, maintenance logs, environmental data
- **Data Pipeline Design** - Real-time ingestion from IoT sensors
- **Data Quality Assessment** - Missing data, outliers, measurement errors
- **Feature Store Implementation** - Real-time feature computation and serving

#### 3. Exploratory Data Analysis
- **Statistical Analysis** - Distributions, correlations, trends
- **Anomaly Detection** - Identify faulty sensor readings
- **Time Series Analysis** - Seasonality, trends, patterns
- **Visualization Dashboard** - Interactive exploration of data

#### 4. Feature Engineering
- **Domain Feature Creation** - Vibration analysis, temperature gradients
- **Time-based Features** - Rolling averages, rates of change, seasonality indicators
- **Frequency Domain Features** - FFT analysis of vibration data
- **Feature Selection** - Identify most predictive features

#### 5. Model Development
- **Baseline Models** - Simple statistical models as benchmarks
- **Multiple Algorithm Approach** - Gradient boosting, neural networks, survival analysis
- **Hyperparameter Optimization** - Bayesian optimization for model tuning
- **Ensemble Methods** - Combine multiple models for improved performance

#### 6. Model Evaluation & Validation
- **Time-based Validation** - Train on past, validate on recent data
- **Business Metric Translation** - Convert model metrics to business impact
- **Bias & Fairness Testing** - Ensure equitable performance across machines
- **Explainability Analysis** - Understand model predictions

#### 7. Deployment Architecture
- **Real-time Inference Pipeline** - Process streaming sensor data
- **Batch Prediction Pipeline** - Daily risk scores for all machines
- **A/B Testing Framework** - Compare model versions
- **Fallback Mechanism** - Handle model failures gracefully

#### 8. Monitoring & Maintenance
- **Performance Monitoring** - Track model accuracy over time
- **Drift Detection** - Detect concept drift and data drift
- **Automated Retraining** - Trigger retraining when performance degrades
- **Cost Monitoring** - Track inference and retraining costs

#### 9. Documentation & Governance
- **Model Documentation** - Complete model card with limitations
- **Code Documentation** - Readable, maintainable code with tests
- **Process Documentation** - End-to-end workflow documentation
- **Compliance Documentation** - Regulatory requirements

#### 10. Stakeholder Communication
- **Executive Summary** - Business impact and recommendations
- **Technical Report** - Detailed methodology and results
- **Dashboard Development** - Business-facing monitoring dashboard
- **Presentation Materials** - For different stakeholder groups

### Technical Stack Requirements
Your solution must demonstrate proficiency with:

**Data Engineering:**
- **Data Ingestion** - Apache Kafka for streaming data
- **Data Processing** - Apache Spark for batch processing
- **Data Storage** - Delta Lake for feature store
- **Orchestration** - Apache Airflow for workflow management

**Machine Learning:**
- **Model Development** - Scikit-learn, XGBoost, PyTorch
- **Experiment Tracking** - MLflow
- **Hyperparameter Tuning** - Optuna or Hyperopt
- **Model Serving** - KServe or Seldon Core

**Infrastructure:**
- **Containerization** - Docker for packaging
- **Orchestration** - Kubernetes for deployment
- **Monitoring** - Prometheus and Grafana
- **CI/CD** - GitHub Actions or GitLab CI

**Cloud Platform (Choose One):**
- **AWS** - S3, EMR, SageMaker, EKS
- **GCP** - BigQuery, Dataflow, Vertex AI, GKE
- **Azure** - Data Lake, Databricks, Azure ML, AKS

### Project Deliverables
Your final submission must include:

#### 1. Technical Documentation (40-50 pages)
- **System Architecture Document** - Complete technical architecture
- **Data Dictionary** - All features with descriptions and sources
- **Model Documentation** - All models with performance metrics
- **API Documentation** - REST/gRPC API specifications
- **Deployment Guide** - Step-by-step deployment instructions

#### 2. Code Repository
- **Production-ready Code** - Well-structured, tested, documented
- **Infrastructure as Code** - Terraform/CloudFormation templates
- **CI/CD Pipeline** - Automated testing and deployment
- **Monitoring Configuration** - Alert rules, dashboard definitions

#### 3. Model Artifacts
- **Trained Models** - All model versions with metadata
- **Feature Store** - Feature definitions and transformations
- **Evaluation Results** - Comprehensive model evaluation
- **Benchmark Comparisons** - Against baseline models

#### 4. Business Documentation
- **Executive Summary** - 5-page business-focused summary
- **ROI Analysis** - Detailed business value calculation
- **Implementation Roadmap** - Phased rollout plan
- **Risk Assessment** - Potential risks and mitigation strategies

#### 5. Demonstration Assets
- **Live Demo** - Working system demonstration
- **Dashboard Screenshots** - Monitoring and business dashboards
- **API Examples** - Sample requests and responses
- **Video Walkthrough** - 10-minute system overview

### Assessment Criteria
Your capstone project will be evaluated based on:

#### 1. Technical Excellence (35%)
- **Code Quality** - Readability, testing, documentation
- **System Design** - Scalability, reliability, maintainability
- **Model Performance** - Accuracy, efficiency, robustness
- **Best Practices** - Following industry standards and patterns

#### 2. Business Impact (30%)
- **Problem Solving** - Effectiveness in addressing business problem
- **ROI Justification** - Clear business value demonstration
- **Stakeholder Alignment** - Meeting business requirements
- **Implementation Feasibility** - Practical deployment considerations

#### 3. Completeness (20%)
- **End-to-End Solution** - Covering all stages of data science lifecycle
- **Documentation** - Comprehensive and clear documentation
- **Reproducibility** - Ability to reproduce results
- **Production Readiness** - Deployment and operational considerations

#### 4. Innovation & Creativity (15%)
- **Novel Approaches** - Creative solutions to challenging problems
- **Optimization** - Efficiency improvements in processing or modeling
- **Integration** - Seamless integration of multiple components
- **Future Extensibility** - Design for future enhancements

### Learning Integration
This capstone requires integrating knowledge from all modules:

- **Modules 1-3** - Statistical methods, machine learning, deep learning
- **Modules 4-5** - Big data technologies, NLP for maintenance logs
- **Modules 6-7** - Computer vision for equipment images, time series analysis
- **Modules 8-9** - Data engineering, MLOps, and deployment

### Professional Development
Successfully completing this capstone demonstrates your ability to:
- Lead end-to-end data science projects
- Design and implement production ML systems
- Communicate effectively with technical and non-technical stakeholders
- Manage the complete ML lifecycle from problem framing to deployment
- Work effectively in a team environment

### Project Management
Recommended approach for successful completion:

**Week 1-2: Project Setup & Planning**
- Define scope and success criteria
- Set up development environment
- Create project plan with milestones

**Week 3-4: Data Understanding & Engineering**
- Explore and understand data
- Build data pipelines
- Implement feature store

**Week 5-6: Model Development**
- Develop baseline models
- Experiment with advanced models
- Optimize hyperparameters

**Week 7-8: Evaluation & Validation**
- Comprehensive model evaluation
- Business impact analysis
- Explainability and fairness assessment

**Week 9-10: Deployment & Testing**
- Deploy to staging environment
- Conduct integration testing
- Performance and load testing

**Week 11: Monitoring & Documentation**
- Implement monitoring
- Create documentation
- Prepare demonstrations

**Week 12: Finalization & Presentation**
- Final testing and validation
- Prepare final deliverables
- Project presentation

### Team Collaboration
Guidelines for effective teamwork:

**Roles and Responsibilities:**
- **Project Lead** - Overall coordination and stakeholder communication
- **Data Engineer** - Data pipelines and infrastructure
- **ML Engineer** - Model development and optimization
- **DevOps Engineer** - Deployment and monitoring
- **Quality Assurance** - Testing and validation

**Collaboration Tools:**
- **Version Control** - Git with branching strategy
- **Project Management** - Jira, Trello, or similar
- **Communication** - Slack, Microsoft Teams
- **Documentation** - Confluence, Notion, or similar
- **Code Review** - Pull requests with reviews

**Best Practices:**
- **Regular Standups** - Daily or weekly status updates
- **Code Standards** - Agreed coding conventions
- **Testing Strategy** - Unit, integration, and end-to-end tests
- **Documentation Standards** - Consistent documentation approach

### Ethical Considerations
Important ethical aspects to address:

**Data Privacy:**
- Anonymize equipment identifiers if sensitive
- Secure access to maintenance logs
- Compliance with data protection regulations

**Model Fairness:**
- Test for bias across different equipment types
- Ensure equitable performance across all machines
- Transparent about model limitations

**Safety Considerations:**
- Critical nature of predictive maintenance
- Fallback mechanisms for model failures
- Human-in-the-loop for high-risk predictions

**Environmental Impact:**
- Energy efficiency of model training
- Sustainable infrastructure choices
- Carbon footprint consideration

### Industry Standards
Compliance with relevant standards:

**MLOps Standards:**
- MLflow for experiment tracking
- OpenAPI for API documentation
- Docker/OCI for containerization
- Kubernetes for orchestration

**Data Standards:**
- Parquet for data storage
- Delta Lake/ Iceberg for table formats
- Schema registry for data contracts
- Data catalog for metadata management

**Security Standards:**
- OAuth2 for authentication
- TLS for data in transit
- Encryption for data at rest
- Regular security scanning

### Submission Guidelines
- Submit all materials through the course portal
- Include GitHub repository link with all code
- Provide documentation in PDF format
- Include video demonstration (max 10 minutes)
- Submit by the stated deadline
- Ensure all team members are credited appropriately

### Evaluation Timeline
- **Initial Review** - Within 5 business days of submission
- **Technical Assessment** - Code review and system testing
- **Business Assessment** - ROI analysis and impact evaluation
- **Final Score** - Combined score with detailed feedback
- **Certification** - Diploma awarded upon successful completion

### Career Application
How this project prepares you for data science roles:

**Portfolio Development:**
- Demonstrates end-to-end project experience
- Shows technical skills across multiple domains
- Provides talking points for interviews
- Evidence of ability to deliver production solutions

**Skill Demonstration:**
- Technical skills in data engineering and ML
- Project management and collaboration
- Business communication and stakeholder management
- Problem-solving and critical thinking

**Industry Recognition:**
- Diploma from accredited program
- Project that can be discussed with employers
- Code repository that can be shared
- Professional network through team collaboration

### Post-Project Development
Continuing your learning journey:

**Further Specialization:**
- Advanced courses in specific domains
- Certifications in cloud platforms
- Research in emerging ML techniques
- Contribution to open source projects

**Career Advancement:**
- Senior Data Scientist roles
- ML Engineer positions
- Data Science leadership
- Consulting opportunities

**Community Engagement:**
- Present project at meetups or conferences
- Write blog posts about your experience
- Mentor other aspiring data scientists
- Contribute to data science communities
`,
      quiz: [
        {
          id: 1,
          question: "What is the business goal for the predictive maintenance capstone project?",
          options: [
            "Reduce unplanned downtime by 30% and maintenance costs by 25%",
            "Increase equipment efficiency by 20%",
            "Reduce energy consumption by 15%",
            "Improve product quality by 10%"
          ],
          correctAnswer: 0,
          explanation: "The business goal is to reduce unplanned downtime by 30% and maintenance costs by 25% through predictive maintenance."
        },
        {
          id: 2,
          question: "How much sensor data is available for the capstone project?",
          options: [
            "1TB+ from 500+ machines over 2 years",
            "500GB from 200 machines over 1 year",
            "2TB from 1000 machines over 3 years",
            "100GB from 50 machines over 6 months"
          ],
          correctAnswer: 0,
          explanation: "The project involves 1TB+ of sensor data from 500+ machines collected over 2 years."
        },
        {
          id: 3,
          question: "What is the recommended team size for the capstone project?",
          options: [
            "4-5 members",
            "2-3 members",
            "6-8 members",
            "1-2 members"
          ],
          correctAnswer: 0,
          explanation: "A team of 4-5 members is recommended to cover all required roles and responsibilities."
        },
        {
          id: 4,
          question: "What percentage of the grade is based on technical excellence?",
          options: [
            "35%",
            "30%",
            "25%",
            "40%"
          ],
          correctAnswer: 0,
          explanation: "Technical excellence accounts for 35% of the capstone project assessment."
        },
        {
          id: 5,
          question: "Which streaming platform is recommended for data ingestion?",
          options: [
            "Apache Kafka",
            "Apache Flink",
            "Spark Streaming",
            "Amazon Kinesis"
          ],
          correctAnswer: 0,
          explanation: "Apache Kafka is recommended for streaming data ingestion from IoT sensors."
        },
        {
          id: 6,
          question: "What is the recommended workflow orchestration tool?",
          options: [
            "Apache Airflow",
            "Prefect",
            "Dagster",
            "Luigi"
          ],
          correctAnswer: 0,
          explanation: "Apache Airflow is recommended for workflow orchestration in the capstone project."
        },
        {
          id: 7,
          question: "Which experiment tracking tool should be used?",
          options: [
            "MLflow",
            "Weights & Biases",
            "TensorBoard",
            "Neptune.ai"
          ],
          correctAnswer: 0,
          explanation: "MLflow is recommended for experiment tracking in the capstone project."
        },
        {
          id: 8,
          question: "What validation approach is recommended for time series data?",
          options: [
            "Time-based validation (train on past, validate on recent)",
            "Random cross-validation",
            "Stratified cross-validation",
            "Leave-one-out cross-validation"
          ],
          correctAnswer: 0,
          explanation: "Time-based validation is essential for time series data to avoid data leakage."
        },
        {
          id: 9,
          question: "What percentage of the grade is for business impact?",
          options: [
            "30%",
            "25%",
            "35%",
            "20%"
          ],
          correctAnswer: 0,
          explanation: "Business impact accounts for 30% of the capstone project assessment."
        },
        {
          id: 10,
          question: "Which deployment approach is recommended for high availability?",
          options: [
            "Kubernetes",
            "Docker Compose",
            "Virtual Machines",
            "Serverless Functions"
          ],
          correctAnswer: 0,
          explanation: "Kubernetes is recommended for container orchestration and high availability deployment."
        },
        {
          id: 11,
          question: "How many main deliverables are required for the capstone?",
          options: [
            "Five",
            "Four",
            "Six",
            "Three"
          ],
          correctAnswer: 0,
          explanation: "The five deliverables are: Technical Documentation, Code Repository, Model Artifacts, Business Documentation, and Demonstration Assets."
        },
        {
          id: 12,
          question: "What is the project timeline duration?",
          options: [
            "12 weeks",
            "8 weeks",
            "16 weeks",
            "10 weeks"
          ],
          correctAnswer: 0,
          explanation: "The capstone project has a 12-week timeline for completion."
        },
        {
          id: 13,
          question: "Which cloud platform is NOT listed as an option?",
          options: [
            "Oracle Cloud",
            "AWS",
            "GCP",
            "Azure"
          ],
          correctAnswer: 0,
          explanation: "The options are AWS, GCP, or Azure. Oracle Cloud is not listed as a recommended option."
        },
        {
          id: 14,
          question: "What percentage of the grade is for completeness?",
          options: [
            "20%",
            "15%",
            "25%",
            "30%"
          ],
          correctAnswer: 0,
          explanation: "Completeness accounts for 20% of the capstone project assessment."
        },
        {
          id: 15,
          question: "Which model serving framework is recommended?",
          options: [
            "KServe or Seldon Core",
            "TensorFlow Serving only",
            "TorchServe only",
            "Custom REST API"
          ],
          correctAnswer: 0,
          explanation: "KServe or Seldon Core are recommended for model serving in Kubernetes environments."
        },
        {
          id: 16,
          question: "What monitoring stack is recommended?",
          options: [
            "Prometheus and Grafana",
            "Datadog",
            "New Relic",
            "AppDynamics"
          ],
          correctAnswer: 0,
          explanation: "Prometheus for metrics collection and Grafana for visualization are recommended."
        },
        {
          id: 17,
          question: "What is the maximum duration for the video walkthrough?",
          options: [
            "10 minutes",
            "5 minutes",
            "15 minutes",
            "20 minutes"
          ],
          correctAnswer: 0,
          explanation: "The video walkthrough should be a maximum of 10 minutes."
        },
        {
          id: 18,
          question: "Which hyperparameter optimization library is recommended?",
          options: [
            "Optuna or Hyperopt",
            "GridSearchCV only",
            "RandomSearchCV only",
            "BayesianOptimization only"
          ],
          correctAnswer: 0,
          explanation: "Optuna or Hyperopt are recommended for advanced hyperparameter optimization."
        },
        {
          id: 19,
          question: "What percentage of the grade is for innovation & creativity?",
          options: [
            "15%",
            "10%",
            "20%",
            "25%"
          ],
          correctAnswer: 0,
          explanation: "Innovation and creativity account for 15% of the capstone project assessment."
        },
        {
          id: 20,
          question: "Which data format is recommended for the feature store?",
          options: [
            "Delta Lake",
            "CSV files",
            "JSON files",
            "Parquet only"
          ],
          correctAnswer: 0,
          explanation: "Delta Lake is recommended for the feature store due to ACID transactions and time travel capabilities."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 Questions)
  finalExam: [
    // Questions from Module 1
    {
      id: 1,
      moduleId: 1,
      question: "Which distribution is used for modeling time between events?",
      options: [
        "Exponential Distribution",
        "Normal Distribution",
        "Binomial Distribution",
        "Poisson Distribution"
      ],
      correctAnswer: 0,
      explanation: "The exponential distribution models the time between events in a Poisson process."
    },
    {
      id: 2,
      moduleId: 1,
      question: "What is the typical significance level (α) used in hypothesis testing?",
      options: [
        "0.05",
        "0.01",
        "0.10",
        "0.005"
      ],
      correctAnswer: 0,
      explanation: "The conventional significance level is α = 0.05, representing a 5% risk of Type I error."
    },
    {
      id: 3,
      moduleId: 1,
      question: "What does ARIMA stand for in time series analysis?",
      options: [
        "AutoRegressive Integrated Moving Average",
        "AutoRegression Independent Moving Average",
        "Average Regression Integrated Moving Average",
        "AutoRegressive Independent Mean Adjustment"
      ],
      correctAnswer: 0,
      explanation: "ARIMA stands for AutoRegressive Integrated Moving Average."
    },
    {
      id: 4,
      moduleId: 1,
      question: "Which regularization method uses L1 penalty?",
      options: [
        "Lasso Regression",
        "Ridge Regression",
        "Elastic Net",
        "Early Stopping"
      ],
      correctAnswer: 0,
      explanation: "Lasso regression uses L1 penalty (sum of absolute coefficients)."
    },

    // Questions from Module 2
    {
      id: 5,
      moduleId: 2,
      question: "What is the expected CAGR of the global machine learning market?",
      options: [
        "38.8%",
        "25.5%",
        "42.3%",
        "30.1%"
      ],
      correctAnswer: 0,
      explanation: "The global machine learning market is expected to grow at a CAGR of 38.8% from 2022 to 2029."
    },
    {
      id: 6,
      moduleId: 2,
      question: "Which type of learning predicts continuous values?",
      options: [
        "Regression",
        "Classification",
        "Clustering",
        "Association"
      ],
      correctAnswer: 0,
      explanation: "Regression is a supervised learning task that predicts continuous numerical values."
    },
    {
      id: 7,
      moduleId: 2,
      question: "What does XGBoost stand for?",
      options: [
        "eXtreme Gradient Boosting",
        "eXpanded Gradient Boosting",
        "eXperimental Gradient Boosting",
        "eXtended Gradient Boosting"
      ],
      correctAnswer: 0,
      explanation: "XGBoost stands for eXtreme Gradient Boosting."
    },
    {
      id: 8,
      moduleId: 2,
      question: "Which privacy technique provides formal guarantees?",
      options: [
        "Differential Privacy",
        "Federated Learning",
        "Homomorphic Encryption",
        "Synthetic Data"
      ],
      correctAnswer: 0,
      explanation: "Differential privacy provides mathematically rigorous privacy guarantees."
    },

    // Questions from Module 3
    {
      id: 9,
      moduleId: 3,
      question: "What is the projected CAGR for the deep learning market?",
      options: [
        "46.2%",
        "38.5%",
        "52.1%",
        "42.8%"
      ],
      correctAnswer: 0,
      explanation: "The deep learning market is projected to grow at a CAGR of 46.2% from 2022 to 2028."
    },
    {
      id: 10,
      moduleId: 3,
      question: "Which activation function is most commonly used in modern neural networks?",
      options: [
        "ReLU",
        "Sigmoid",
        "Tanh",
        "Leaky ReLU"
      ],
      correctAnswer: 0,
      explanation: "ReLU (Rectified Linear Unit) is the most popular activation function."
    },
    {
      id: 11,
      moduleId: 3,
      question: "What does BERT stand for?",
      options: [
        "Bidirectional Encoder Representations from Transformers",
        "Bidirectional Embedding Representations from Transformers",
        "Bidirectional Encoding Representations from Transformers",
        "Bidirectional Extraction Representations from Transformers"
      ],
      correctAnswer: 0,
      explanation: "BERT stands for Bidirectional Encoder Representations from Transformers."
    },
    {
      id: 12,
      moduleId: 3,
      question: "Which generative model uses a generator and discriminator in adversarial training?",
      options: [
        "GAN (Generative Adversarial Network)",
        "VAE (Variational Autoencoder)",
        "Diffusion Model",
        "Autoencoder"
      ],
      correctAnswer: 0,
      explanation: "GANs use a generator and discriminator trained adversarially."
    },

    // Questions from Module 4
    {
      id: 13,
      moduleId: 4,
      question: "What is the expected CAGR for the global big data market?",
      options: [
        "13.4%",
        "18.2%",
        "22.5%",
        "9.8%"
      ],
      correctAnswer: 0,
      explanation: "The global big data market is expected to grow at a CAGR of 13.4% from 2022 to 2029."
    },
    {
      id: 14,
      moduleId: 4,
      question: "Which of the 5 Vs refers to the scale of data?",
      options: [
        "Volume",
        "Velocity",
        "Variety",
        "Veracity"
      ],
      correctAnswer: 0,
      explanation: "Volume refers to the scale of data in big data systems."
    },
    {
      id: 15,
      moduleId: 4,
      question: "How many times faster is Spark than Hadoop MapReduce for iterative algorithms?",
      options: [
        "100x faster",
        "10x faster",
        "50x faster",
        "200x faster"
      ],
      correctAnswer: 0,
      explanation: "Spark's in-memory processing can be up to 100x faster than Hadoop MapReduce."
    },
    {
      id: 16,
      moduleId: 4,
      question: "What does RDD stand for in Spark?",
      options: [
        "Resilient Distributed Dataset",
        "Resilient Data Distribution",
        "Recursive Distributed Data",
        "Resilient Distributed Data"
      ],
      correctAnswer: 0,
      explanation: "RDD stands for Resilient Distributed Dataset, Spark's fundamental data structure."
    },

    // Questions from Module 5
    {
      id: 17,
      moduleId: 5,
      question: "What is the projected CAGR for the global NLP market?",
      options: [
        "29.4%",
        "25.1%",
        "33.8%",
        "36.2%"
      ],
      correctAnswer: 0,
      explanation: "The global NLP market is projected to grow at a CAGR of 29.4% from 2021 to 2029."
    },
    {
      id: 18,
      moduleId: 5,
      question: "Which Word2Vec architecture predicts context words given a target word?",
      options: [
        "Skip-gram",
        "CBOW",
        "GloVe",
        "FastText"
      ],
      correctAnswer: 0,
      explanation: "Skip-gram predicts context words given a target word."
    },
    {
      id: 19,
      moduleId: 5,
      question: "What does NER stand for?",
      options: [
        "Named Entity Recognition",
        "Natural Entity Recognition",
        "Named Extraction Recognition",
        "Natural Extraction Recognition"
      ],
      correctAnswer: 0,
      explanation: "NER stands for Named Entity Recognition."
    },
    {
      id: 20,
      moduleId: 5,
      question: "What is the most common evaluation metric for machine translation?",
      options: [
        "BLEU",
        "ROUGE",
        "METEOR",
        "TER"
      ],
      correctAnswer: 0,
      explanation: "BLEU is the most common metric for evaluating machine translation."
    },

    // Questions from Module 6
    {
      id: 21,
      moduleId: 6,
      question: "What is the projected CAGR for the computer vision market?",
      options: [
        "14.3%",
        "18.5%",
        "22.1%",
        "10.8%"
      ],
      correctAnswer: 0,
      explanation: "The computer vision market is projected to grow at a CAGR of 14.3% from 2022 to 2030."
    },
    {
      id: 22,
      moduleId: 6,
      question: "Which CNN architecture introduced residual connections?",
      options: [
        "ResNet",
        "VGG",
        "AlexNet",
        "GoogLeNet"
      ],
      correctAnswer: 0,
      explanation: "ResNet introduced residual connections."
    },
    {
      id: 23,
      moduleId: 6,
      question: "What does YOLO stand for in object detection?",
      options: [
        "You Only Look Once",
        "You Observe Latent Objects",
        "Your Object Locator Optimized",
        "Yield Optimal Localized Objects"
      ],
      correctAnswer: 0,
      explanation: "YOLO stands for You Only Look Once."
    },
    {
      id: 24,
      moduleId: 6,
      question: "Which generative model is known for text-to-image generation?",
      options: [
        "Stable Diffusion",
        "CycleGAN",
        "Pix2Pix",
        "StyleGAN"
      ],
      correctAnswer: 0,
      explanation: "Stable Diffusion is known for text-to-image generation."
    },

    // Questions from Module 7
    {
      id: 25,
      moduleId: 7,
      question: "What is the expected CAGR for the time series analytics market?",
      options: [
        "12.8%",
        "15.2%",
        "18.5%",
        "10.3%"
      ],
      correctAnswer: 0,
      explanation: "The time series analytics market is expected to grow at a CAGR of 12.8% from 2021 to 2028."
    },
    {
      id: 26,
      moduleId: 7,
      question: "How many main components are in time series decomposition?",
      options: [
        "Four",
        "Three",
        "Two",
        "Five"
      ],
      correctAnswer: 0,
      explanation: "Time series decomposition has four components: Trend, Seasonality, Cyclical, and Irregular."
    },
    {
      id: 27,
      moduleId: 7,
      question: "Which test has null hypothesis of unit root (non-stationary)?",
      options: [
        "Augmented Dickey-Fuller (ADF) test",
        "KPSS test",
        "Ljung-Box test",
        "Jarque-Bera test"
      ],
      correctAnswer: 0,
      explanation: "ADF test null hypothesis is that series has unit root (non-stationary)."
    },
    {
      id: 28,
      moduleId: 7,
      question: "Which model is specifically for volatility clustering in financial data?",
      options: [
        "GARCH",
        "ARIMA",
        "Holt-Winters",
        "Prophet"
      ],
      correctAnswer: 0,
      explanation: "GARCH models volatility clustering in financial time series."
    },

    // Questions from Module 8
    {
      id: 29,
      moduleId: 8,
      question: "What percentage of time do data scientists spend on data preparation?",
      options: [
        "60-80%",
        "40-60%",
        "20-40%",
        "80-90%"
      ],
      correctAnswer: 0,
      explanation: "Data scientists spend approximately 60-80% of their time on data preparation."
    },
    {
      id: 30,
      moduleId: 8,
      question: "What does OLTP stand for?",
      options: [
        "Online Transaction Processing",
        "Online Transaction Protocol",
        "Online Transformation Processing",
        "Online Transfer Processing"
      ],
      correctAnswer: 0,
      explanation: "OLTP stands for Online Transaction Processing."
    },
    {
      id: 31,
      moduleId: 8,
      question: "Which architecture has Bronze, Silver, and Gold layers?",
      options: [
        "Medallion architecture",
        "Data mesh architecture",
        "Lambda architecture",
        "Kappa architecture"
      ],
      correctAnswer: 0,
      explanation: "Medallion architecture has Bronze (raw), Silver (cleaned), and Gold (business-ready) layers."
    },
    {
      id: 32,
      moduleId: 8,
      question: "Which Python library is for data testing and validation?",
      options: [
        "Great Expectations",
        "Pandas",
        "PySpark",
        "NumPy"
      ],
      correctAnswer: 0,
      explanation: "Great Expectations is a Python library for data testing and validation."
    },

    // Questions from Module 9
    {
      id: 33,
      moduleId: 9,
      question: "How much faster model deployment do organizations implementing MLOps typically see?",
      options: [
        "2-5x faster",
        "1.5-2x faster",
        "3-6x faster",
        "5-10x faster"
      ],
      correctAnswer: 0,
      explanation: "Organizations implementing MLOps see 2-5x faster model deployment."
    },
    {
      id: 34,
      moduleId: 9,
      question: "What does TFX stand for?",
      options: [
        "TensorFlow Extended",
        "TensorFlow Execution",
        "TensorFlow Experience",
        "TensorFlow Expansion"
      ],
      correctAnswer: 0,
      explanation: "TFX stands for TensorFlow Extended."
    },
    {
      id: 35,
      moduleId: 9,
      question: "Which deployment pattern is for sporadic inference needs?",
      options: [
        "Serverless Inference",
        "Batch Inference",
        "Real-time Inference",
        "Edge Deployment"
      ],
      correctAnswer: 0,
      explanation: "Serverless inference is ideal for sporadic inference needs."
    },
    {
      id: 36,
      moduleId: 9,
      question: "Which drift type refers to input feature distribution changes?",
      options: [
        "Covariate shift",
        "Concept drift",
        "Label drift",
        "Prior probability shift"
      ],
      correctAnswer: 0,
      explanation: "Covariate shift occurs when input feature distribution changes."
    },

    // Questions from Module 10
    {
      id: 37,
      moduleId: 10,
      question: "What is the business goal for the predictive maintenance capstone project?",
      options: [
        "Reduce unplanned downtime by 30% and maintenance costs by 25%",
        "Increase equipment efficiency by 20%",
        "Reduce energy consumption by 15%",
        "Improve product quality by 10%"
      ],
      correctAnswer: 0,
      explanation: "The goal is to reduce unplanned downtime by 30% and maintenance costs by 25%."
    },
    {
      id: 38,
      moduleId: 10,
      question: "How much sensor data is available for the capstone project?",
      options: [
        "1TB+ from 500+ machines over 2 years",
        "500GB from 200 machines over 1 year",
        "2TB from 1000 machines over 3 years",
        "100GB from 50 machines over 6 months"
      ],
      correctAnswer: 0,
      explanation: "The project involves 1TB+ of sensor data from 500+ machines over 2 years."
    },
    {
      id: 39,
      moduleId: 10,
      question: "What percentage of the grade is based on technical excellence?",
      options: [
        "35%",
        "30%",
        "25%",
        "40%"
      ],
      correctAnswer: 0,
      explanation: "Technical excellence accounts for 35% of the capstone assessment."
    },
    {
      id: 40,
      moduleId: 10,
      question: "Which streaming platform is recommended for data ingestion?",
      options: [
        "Apache Kafka",
        "Apache Flink",
        "Spark Streaming",
        "Amazon Kinesis"
      ],
      correctAnswer: 0,
      explanation: "Apache Kafka is recommended for streaming data ingestion."
    }
  ]
};
