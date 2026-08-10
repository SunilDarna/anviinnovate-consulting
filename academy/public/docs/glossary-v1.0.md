# AI/ML Terminology Atlas v1.0

5487 terms — 3724 concepts and 1763 named tools — across 16 modules. One term per line.

Tools current as of August 2026. 178 entries carry a currency note (deprecated, renamed, superseded or discontinued). 160 items could not be verified and are listed at the end rather than asserted.

Legend: `[tool]` marks a named product or project. `⚠` marks a currency note.

---

## Mathematics, statistics and optimisation
*356 terms*

### Linear algebra

- **Basis** — A linearly independent set of vectors whose span is the entire vector space.
- **Column space (range)** — The span of a matrix's columns; every vector reachable as a matrix-vector product.
- **Conjugate gradient method** `[tool]` — Iterative solver for symmetric positive-definite linear systems using mutually conjugate search directions.
- **Determinant** — Scalar giving the signed volume scaling factor of the linear map a square matrix defines.
- **Dot product** — Sum of element-wise products of two equal-length vectors, producing a scalar.
- **Eigenvalue** — Scalar factor by which a linear map stretches its associated eigenvector.
- **Eigenvector** — Nonzero vector whose direction is unchanged when a given linear map is applied.
- **Einstein summation (einsum)** `[tool]` — Notation specifying tensor products and contractions by labelling and repeating axis indices.
- **Gram matrix** — Matrix of all pairwise inner products between a collection of vectors.
- **Hadamard product** — Element-wise multiplication of two arrays of identical shape.
- **Kronecker product** — Block product forming a large matrix from all pairwise entry products of two matrices.
- **Krylov subspace** — Space spanned by repeated matrix applications to a vector, underlying iterative linear solvers.
- **Least squares** — Fitting criterion that minimises the sum of squared residuals between model and data.
- **Linear independence** — Property of a vector set in which no member is a linear combination of the others.
- **Matrix** — A rectangular two-dimensional array of numbers encoding a linear map between vector spaces.
- **Matrix inverse** — The matrix that composes with a given square matrix to yield the identity.
- **Moore-Penrose pseudoinverse** — Generalised inverse defined for any matrix, giving minimum-norm least-squares solutions.
- **Null space (kernel)** — The set of all vectors that a matrix maps to the zero vector.
- **Orthogonal matrix** — Real square matrix whose transpose equals its inverse, preserving lengths and angles.
- **Outer product** — Product of a column vector with a row vector, producing a rank-one matrix.
- **Positive semi-definite matrix (PSD)** — Symmetric matrix whose quadratic form is non-negative for every vector.
- **Rank** — The number of linearly independent columns of a matrix, equal to its independent rows.
- **Singular value** — Non-negative scalar giving the stretch factor along a principal axis of a linear map.
- **Tensor** — Multidimensional numeric array, the core data structure of numerical and deep learning frameworks.
- **Trace** — Complete recorded execution of one request through an LLM application, composed of nested spans.
- **Vector** — An ordered array of numbers representing a point, direction or magnitude in a vector space.
- **Vector space** — A set of vectors closed under addition and scalar multiplication over a field.

### Matrix decompositions

- **Cholesky decomposition** — Factorisation of a symmetric positive-definite matrix into a triangular factor times its transpose.
- **CP decomposition (CANDECOMP/PARAFAC)** — Expression of a tensor as a sum of rank-one outer products.
- **CUR decomposition** — Low-rank factorisation built from actual selected columns and rows of the original matrix.
- **Eckart-Young-Mirsky theorem** — Result proving truncated SVD gives the best low-rank approximation in Frobenius and spectral norms.
- **Eigendecomposition** — Factorisation of a diagonalisable matrix into eigenvectors, a diagonal eigenvalue matrix, and the eigenvector inverse.
- **Interpolative decomposition** — Low-rank factorisation expressing all columns of a matrix through a chosen subset of them.
- **Kronecker-factored approximation** — Approximation of a large curvature matrix as a Kronecker product of two smaller matrices.
- **LU decomposition** — Factorisation of a square matrix into lower and upper triangular factors, usually with row permutation.
- **Non-negative matrix factorisation (NMF)** `[tool]` — Factorisation into two non-negative matrices giving additive parts-based representations.
- **Polar decomposition** — Factorisation of a matrix into an orthogonal factor and a positive semi-definite factor.
- **Principal component analysis (PCA)** `[tool]` — A linear projection onto directions of maximal variance, used to shorten embeddings before indexing.
- **QR decomposition** — Factorisation of a matrix into an orthonormal matrix and an upper triangular matrix.
- **Randomised SVD** `[tool]` — Approximate SVD using random projections to sketch a matrix's dominant subspace cheaply.
- **Schur decomposition** — Factorisation of a square matrix into a unitary matrix and an upper triangular matrix.
- **Singular value decomposition (SVD)** — Factorisation of any matrix into two orthogonal matrices and a diagonal matrix of singular values.
- **Spectral theorem** — Result guaranteeing every real symmetric matrix has an orthonormal eigenbasis with real eigenvalues.
- **Tensor train decomposition** — Representation of a high-order tensor as a chain of low-order core tensors.
- **Truncated SVD** `[tool]` — SVD retaining only the largest singular values, yielding the optimal fixed-rank approximation.
- **Tucker decomposition** — Factorisation of a tensor into a small core tensor multiplied by a factor matrix per mode.

### Norms and metrics

- **Cosine similarity** — The cosine of the angle between two vectors, measuring direction agreement independently of magnitude.
- **Curse of dimensionality** — The concentration of pairwise distances as dimension grows, weakening the contrast that nearest-neighbour search relies on.
- **Frobenius norm** — Square root of the sum of all squared entries of a matrix.
- **Hamming distance** — The count of differing positions between two equal-length binary codes.
- **Jaccard index** — Ratio of intersection size to union size between two sets.
- **L-infinity norm** — The largest absolute value among a vector's components.
- **L0 pseudo-norm** — Count of nonzero entries in a vector; not a true norm.
- **L1 norm** — Sum of the absolute values of a vector's components.
- **L2 norm** — Square root of the sum of squared components; ordinary Euclidean length.
- **Lp norm** — Family of norms given by the p-th root of summed absolute values raised to p.
- **Mahalanobis distance** — Distance scaled by the inverse covariance matrix, accounting for correlation between dimensions.
- **Metric** — Distance function satisfying non-negativity, symmetry, identity of indiscernibles and the triangle inequality.
- **Minkowski distance** — Parameterised distance family whose exponent yields Manhattan, Euclidean and Chebyshev metrics.
- **Norm** — Function assigning non-negative length to vectors, satisfying homogeneity, triangle inequality and positive definiteness.
- **Nuclear norm** — Sum of a matrix's singular values, used as a convex surrogate for rank.
- **Spectral norm** — Largest singular value of a matrix; its maximum stretching factor on unit vectors.

### Calculus and autodiff

- **Adjoint method** `[tool]` — Technique computing gradients through differential equation solutions by integrating an adjoint system backwards.
- **Automatic differentiation (AD)** — Technique computing exact derivatives of programs by composing derivatives of their elementary operations.
- **Backpropagation** — Algorithm computing loss gradients for all parameters by applying the chain rule backward through the graph.
- **Chain rule** — Calculus rule expressing the derivative of composed functions as a product of local derivatives.
- **Change of variables formula** — Rule relating probability densities under an invertible transformation via the Jacobian determinant.
- **Computational graph** — Directed acyclic graph of elementary operations recording a computation so derivatives can be propagated.
- **Derivative** — Instantaneous rate of change of a function with respect to its input.
- **Directional derivative** — Rate of change of a function along a specified direction vector.
- **Dual numbers** — Numbers carrying a nilpotent infinitesimal component, used to implement forward-mode differentiation.
- **Finite-difference approximation** `[tool]` — Numerical derivative estimate formed from function evaluations at nearby input points.
- **Forward-mode automatic differentiation** — Automatic differentiation propagating derivative information alongside values from inputs towards outputs.
- **Gradient** — Vector of all first partial derivatives, pointing in the direction of steepest increase.
- **Gradient checking** `[tool]` — Verification comparing analytic gradients against finite-difference estimates to detect implementation errors.
- **Gradient checkpointing** `[tool]` — Memory-saving strategy that discards intermediate activations and recomputes them during the backward pass.
- **Hessian matrix** — Matrix of all second-order partial derivatives of a scalar function.
- **Hessian-vector product (HVP)** — Curvature probe computing the Hessian times a vector without materialising the full Hessian matrix.
- **Implicit function theorem** — Result giving derivatives of variables defined implicitly by a system of equations.
- **Jacobian matrix** — Matrix of all first-order partial derivatives of a vector-valued function.
- **Jacobian-vector product (JVP)** — Primitive of forward-mode AD multiplying a function's Jacobian by a tangent direction vector.
- **Lipschitz continuity** — Property bounding how fast a function can change between any two input points.
- **Matrix calculus** — Conventions and identities for differentiating scalar, vector and matrix functions of matrix arguments.
- **Partial derivative** — Derivative of a multivariate function with respect to one variable, holding others fixed.
- **Reverse-mode automatic differentiation** — Automatic differentiation propagating derivatives backwards from outputs, efficient for scalar objectives with many inputs.
- **Saddle point** — Stationary point that is a minimum along some directions and a maximum along others.
- **Smoothness (L-smoothness)** — Property that a function's gradient is Lipschitz continuous, placing a bound on curvature.
- **Stationary point** — Point at which the gradient of a function equals zero.
- **Straight-through estimator** `[tool]` — Gradient surrogate that passes gradients unchanged through a non-differentiable operation.
- **Taylor expansion** — Local polynomial approximation of a function built from its derivatives at a point.
- **Vector-Jacobian product (VJP)** — Reverse-mode operation applying a transposed Jacobian to a cotangent vector without materialising it.

### Probability theory

- **Bayes' theorem** — Identity expressing a posterior probability in terms of likelihood, prior and evidence.
- **Central limit theorem** — Result that sums of many independent variables approach a normal distribution.
- **Concentration inequality** — Bound limiting the probability that a random quantity deviates far from its expectation.
- **Conditional independence** — Property where two variables are independent once a third variable is known.
- **Conditional probability** — Probability of an event given that another event is known to have occurred.
- **Covariance** — Expected product of two variables' deviations from their means, measuring joint variability.
- **Cumulative distribution function (CDF)** — Function giving the probability that a random variable is at most a given value.
- **Expectation** — Probability-weighted average value of a random variable.
- **Gaussian process** — Stochastic process where every finite collection of values has a multivariate normal distribution.
- **Jensen's inequality** — Result relating the expectation of a convex function to the function of the expectation.
- **Joint distribution** — Distribution describing the simultaneous behaviour of two or more random variables.
- **Latent variable** — Unobserved random variable inferred from observed data within a probabilistic model.
- **Law of large numbers** — Result that sample averages converge to the population mean as sample size grows.
- **Law of total expectation** — Identity stating the expectation of a conditional expectation equals the unconditional expectation.
- **Marginal distribution** — Distribution of a subset of variables obtained by summing or integrating out the rest.
- **Markov chain** — Stochastic process whose next state depends only on the current state.
- **Moment** — Expectation of a power of a random variable, characterising distribution shape.
- **Probability density function (PDF)** — Function whose integral over a region gives the probability a continuous variable falls there.
- **Probability mass function (PMF)** — Function giving the probability that a discrete random variable takes each specific value.
- **Quantile function** — Inverse of the cumulative distribution function, mapping probabilities to values.
- **Random variable** — Measurable function assigning numerical values to outcomes of a random experiment.
- **Stationary distribution** — Distribution over states left unchanged by a Markov chain's transition operator.
- **Statistical independence** — Property where the joint distribution of variables factorises into the product of marginals.
- **Stochastic process** — Collection of random variables indexed by time or another ordering parameter.
- **Variance** — Expected squared deviation of a random variable from its mean.

### Distributions

- **Bernoulli distribution** — Distribution over a single binary outcome with a fixed success probability.
- **Beta distribution** — Continuous distribution on the unit interval, commonly used for probabilities.
- **Binomial distribution** — Distribution of the number of successes in a fixed number of independent Bernoulli trials.
- **Categorical distribution** — Distribution over a single draw from a finite set of mutually exclusive outcomes.
- **Cauchy distribution** — Heavy-tailed symmetric distribution with undefined mean and variance.
- **Chi-squared distribution** — Distribution of the sum of squared independent standard normal variables.
- **Dirichlet distribution** — Distribution over probability simplices, the multivariate generalisation of the beta distribution.
- **Exponential distribution** — Continuous distribution of waiting times between events in a Poisson process.
- **Exponential family** — Class of distributions whose density factorises into natural parameters and sufficient statistics.
- **F-distribution** — Distribution of a ratio of two scaled chi-squared variables, used in variance comparisons.
- **Gamma distribution** — Continuous positive distribution with shape and rate parameters, generalising the exponential.
- **Geometric distribution** — Distribution of the number of trials until the first success in repeated Bernoulli trials.
- **Gumbel distribution** — Extreme-value distribution of the maximum of many independent samples.
- **Laplace distribution** — Symmetric distribution with exponential tails, peaked at its location parameter.
- **Log-normal distribution** — Distribution of a variable whose logarithm is normally distributed.
- **Mixture distribution** — Distribution formed as a weighted combination of several component distributions.
- **Multinomial distribution** — Distribution of category counts across a fixed number of independent categorical draws.
- **Multivariate normal distribution** — Vector-valued Gaussian distribution parameterised by a mean vector and covariance matrix.
- **Negative binomial distribution** — Distribution of trials needed to reach a fixed number of successes; models overdispersed counts.
- **Normal (Gaussian) distribution** — Symmetric bell-shaped continuous distribution parameterised by mean and variance.
- **Pareto distribution** — Power-law distribution with heavy tails, describing scale-free magnitudes.
- **Poisson distribution** — Distribution of counts of independent events occurring at a constant average rate.
- **Student's t-distribution** — Heavy-tailed distribution arising when estimating a normal mean with unknown variance.
- **Uniform distribution** — Distribution assigning equal probability density or mass across a bounded range.

### Descriptive statistics

- **Arithmetic mean** — Sum of observed values divided by the number of observations.
- **Bessel's correction** — Division by n minus one when estimating variance, removing downward bias.
- **Interquartile range** — Difference between the seventy-fifth and twenty-fifth percentiles of a dataset.
- **Kernel density estimation** `[tool]` — Non-parametric estimate of a density formed by summing smoothing kernels at data points.
- **Kurtosis** — Standardised fourth moment measuring tail weight and peakedness of a distribution.
- **Median** — Middle value of an ordered dataset, splitting it into equal halves.
- **Median absolute deviation** — Robust dispersion measure given by the median of absolute deviations from the median.
- **Mode** — Most frequently occurring value in a dataset or the density peak of a distribution.
- **Pearson correlation coefficient** — Normalised covariance measuring the strength of a linear relationship between two variables.
- **Quantile** — Value below which a specified proportion of a distribution or dataset falls.
- **Skewness** — Standardised third moment measuring asymmetry of a distribution.
- **Spearman rank correlation** — Correlation computed on ranks, measuring monotonic association between variables.
- **Standard deviation** — Square root of the variance, expressing spread in the units of the data.
- **Z-score** — Value expressed as the number of standard deviations from the mean.

### Inferential statistics

- **Bias-variance decomposition** — Split of expected prediction error into squared bias, variance and irreducible noise.
- **Bootstrap** `[tool]` — Resampling procedure estimating an estimator's distribution by sampling the data with replacement.
- **Confidence interval** — Interval estimate whose construction covers the true parameter at a specified long-run rate.
- **Consistency** — Property that an estimator converges in probability to the true parameter as samples grow.
- **Cramér-Rao bound** — Lower bound on the variance of any unbiased estimator, given by inverse Fisher information.
- **Estimator** — Rule computing an estimate of a population parameter from sample data.
- **Estimator bias** — Difference between an estimator's expected value and the true parameter value.
- **Fisher information** — Expected curvature of the log-likelihood, quantifying how much data informs a parameter.
- **Jackknife** `[tool]` — Resampling procedure estimating bias and variance by systematically leaving out one observation.
- **Likelihood function** — Probability of observed data viewed as a function of model parameters.
- **Maximum a posteriori estimation (MAP)** — Parameter estimation by maximising the posterior density, combining likelihood with a prior.
- **Maximum likelihood estimation (MLE)** — Parameter estimation by maximising the likelihood of the observed data.
- **Method of moments** — Parameter estimation by equating sample moments to theoretical moments.
- **Standard error** — Estimated standard deviation of a statistic's sampling distribution.
- **Sufficient statistic** — Statistic carrying all sample information about a parameter.

### Hypothesis testing

- **Alternative hypothesis** — Claim accepted when evidence is sufficient to reject the null hypothesis.
- **Always-valid inference** — Inference whose error guarantees hold at every sample size, permitting continuous monitoring.
- **Analysis of variance (ANOVA)** `[tool]` — Test comparing means across multiple groups by partitioning total variance.
- **Benjamini-Hochberg procedure** `[tool]` — Step-up method controlling FDR by comparing ordered p-values to a linear threshold.
- **Bonferroni correction** `[tool]` — Multiple-testing adjustment dividing the significance threshold by the number of tests.
- **Chi-squared test** `[tool]` — Test of independence or goodness of fit for categorical count data.
- **Conformal prediction** — Framework producing prediction sets or intervals with distribution-free finite-sample coverage guarantees.
- **e-value** — Non-negative evidence measure with expectation at most one under the null, supporting anytime-valid testing.
- **Effect size** — Standardised magnitude of a difference or association, independent of sample size.
- **False discovery rate (FDR)** — Expected proportion of false rejections among all rejected hypotheses.
- **Family-wise error rate (FWER)** — Probability of making at least one false rejection across a family of tests.
- **Kolmogorov-Smirnov test** `[tool]` — Nonparametric test comparing two continuous distributions by their maximum cumulative difference.
- **Likelihood-ratio test** `[tool]` — Test comparing nested models through the ratio of their maximised likelihoods.
- **Mann-Whitney U test** `[tool]` — Non-parametric test comparing distributions of two independent samples using ranks.
- **Multiple comparisons problem** — Inflation of false positives that arises when many hypotheses are tested together.
- **Null hypothesis** — Default claim of no effect or no difference that a test attempts to reject.
- **p-value** — Probability of observing data at least as extreme as observed, assuming the null hypothesis.
- **Permutation test** `[tool]` — Significance test comparing the observed statistic to its distribution under relabelling.
- **Significance level** — Pre-specified threshold controlling the tolerated probability of a false rejection.
- **Statistical power** — Probability a test detects an effect of a given size when it exists.
- **Student's t-test** `[tool]` — Test comparing means using a t-distributed statistic under normality assumptions.
- **Test statistic** — Quantity computed from data whose distribution under the null hypothesis is known.
- **Type I error** — Rejecting a null hypothesis that is actually true; a false positive.
- **Type II error** — Failing to reject a null hypothesis that is actually false; a false negative.
- **Wilcoxon signed-rank test** `[tool]` — Non-parametric test comparing paired observations using signed ranks of differences.

### Bayesian methods

- **Bayes factor** — Ratio of marginal likelihoods quantifying evidence for one hypothesis over another.
- **Bayesian network** — Directed acyclic graph encoding conditional independence among variables with local conditional probability tables.
- **Conjugate prior** — Prior whose family is preserved in the posterior for a given likelihood.
- **Credible interval** — Interval containing a specified posterior probability mass for a parameter.
- **Empirical Bayes** — Approach estimating prior hyperparameters from the data rather than specifying them.
- **Evidence lower bound (ELBO)** — Variational objective combining reconstruction likelihood with KL divergence from latent prior to approximate posterior.
- **Hierarchical Bayesian model** — Model where parameters themselves have priors governed by higher-level hyperparameters.
- **Jeffreys prior** — Non-informative prior proportional to the square root of the Fisher information determinant.
- **Laplace approximation** `[tool]` — Gaussian approximation of a posterior centred at its mode using local curvature.
- **Marginal likelihood (evidence)** — Probability of observed data with parameters integrated out under the prior.
- **Mean-field approximation** — Variational family assuming the posterior factorises independently across variables.
- **Posterior distribution** — Updated distribution over parameters after conditioning on observed data.
- **Posterior predictive distribution** — Distribution of new observations obtained by averaging the likelihood over the posterior.
- **Prior distribution** — Probability distribution encoding beliefs about parameters before observing data.
- **Reparameterisation trick** — Sampling latents as a deterministic function of parameters and independent noise so gradients flow through.
- **Simulation-based inference** — Parameter inference from simulators where the likelihood cannot be evaluated directly.
- **Variational inference** — Approximating a posterior by optimising over a tractable family of distributions.

### Optimisation theory

- **Complementary slackness** — Condition requiring each multiplier or its associated inequality constraint slack to vanish.
- **Convergence rate** — Speed at which iterates approach an optimum, classified as sublinear, linear or superlinear.
- **Convex function** — Function whose graph lies below any chord joining two points on it.
- **Convex set** — Set containing the entire line segment between any two of its points.
- **Duality gap** — Difference between the optimal primal and dual objective values.
- **KKT conditions** — First-order necessary optimality conditions combining stationarity, feasibility, dual feasibility and complementary slackness.
- **Lagrange multiplier** — Variable weighting a constraint in the Lagrangian, measuring the constraint's marginal cost.
- **Lagrangian duality** — Reformulation deriving a lower-bounding dual problem from a constrained primal problem.
- **Linear programming** — Optimisation of a linear objective subject to linear equality and inequality constraints.
- **Loss landscape** — Geometry of an objective function over parameter space, including minima, saddles and flat regions.
- **Non-convex optimisation** — Minimisation of objectives with multiple local minima and no global optimality guarantee.
- **Objective function** — Scalar function of parameters that an optimisation procedure minimises or maximises.
- **Quadratic programming** — Optimisation of a quadratic objective subject to linear constraints.
- **Semidefinite programming** — Convex optimisation over matrices constrained to be positive semi-definite.
- **Slater's condition** — Constraint qualification guaranteeing strong duality when a strictly feasible point exists.
- **Stochastic approximation** — Iterative root-finding or optimisation using noisy estimates with decreasing step sizes.
- **Strong convexity** — Property that a function exceeds a quadratic lower bound, guaranteeing a unique minimiser.

### Gradient methods

- **Adafactor** `[tool]` — Memory-efficient adaptive optimiser factorising second-moment statistics across matrix rows and columns.
- **AdaGrad** `[tool]` — Optimiser scaling each coordinate's step by the inverse root of accumulated squared gradients.
- **Adam** `[tool]` — Optimiser combining momentum with per-coordinate scaling by second-moment estimates, with bias correction.
- **AdamW** `[tool]` — Adam variant applying weight decay directly to parameters rather than through the gradient.
- **Bayesian optimisation** `[tool]` — Sequential search fitting a probabilistic surrogate of the objective and optimising an acquisition function.
- **BFGS** `[tool]` — Quasi-Newton method updating a dense inverse Hessian approximation at each iteration.
- **Coordinate descent** `[tool]` — Optimisation that minimises the objective one coordinate at a time, standard for lasso fitting.
- **Evolution strategies** `[tool]` — Derivative-free optimisation perturbing parameters randomly and reweighting by observed fitness.
- **Gauss-Newton method** `[tool]` — Approximation of the Hessian for least-squares objectives using only first derivatives.
- **Gradient clipping** `[tool]` — Rescaling or truncating gradients that exceed a threshold before the optimiser applies them.
- **Gradient descent** — Iterative method stepping parameters in the direction opposite the loss gradient.
- **K-FAC** `[tool]` — Approximation of the Fisher information matrix as a Kronecker product, giving tractable natural-gradient steps.
- **L-BFGS** `[tool]` — Quasi-Newton method approximating inverse curvature from a limited history of gradient and parameter differences.
- **Learning rate** — Scalar controlling how far parameters move along the update direction at each step.
- **Learning rate schedule** — Rule varying the learning rate over training, such as warmup, decay or cosine annealing.
- **Levenberg-Marquardt algorithm** `[tool]` — Damped Gauss-Newton method interpolating between gradient descent and Newton steps.
- **Line search** `[tool]` — Procedure choosing a step length along a search direction to satisfy sufficient-decrease conditions.
- **Lion** `[tool]` — Optimiser producing sign-based updates from an interpolated momentum, storing only one state tensor per parameter.
- **Mini-batch gradient descent** `[tool]` — Gradient descent estimating gradients from small random subsets of the training data.
- **Momentum** — Accumulating an exponentially decayed running average of gradients to damp oscillation and accelerate descent.
- **Muon** `[tool]` — Optimiser orthogonalising momentum-based updates for hidden weight matrices before applying them.
- **Natural gradient descent** — Method preconditioning gradients by the inverse Fisher information, making steps invariant to parameterisation.
- **Nesterov accelerated gradient** `[tool]` — Momentum variant evaluating the gradient at a look-ahead point for improved convergence.
- **Newton's method** `[tool]` — Second-order optimisation solving for steps using the inverse Hessian of the objective.
- **Polyak averaging** `[tool]` — Averaging iterates across training steps to reduce variance in the final parameters.
- **Preconditioning** — Transforming the gradient by a matrix that rescales directions to improve the effective conditioning.
- **Quasi-Newton method** — Optimisation building an approximate inverse Hessian from successive gradient differences.
- **RMSProp** `[tool]` — Adaptive method dividing steps by the root of an exponentially decayed average of squared gradients.
- **Shampoo** `[tool]` — Structure-aware preconditioner maintaining separate matrix statistics for each dimension of a weight tensor.
- **Sharpness-aware minimisation (SAM)** `[tool]` — Objective minimising loss in a neighbourhood of the parameters, biasing training toward flat minima.
- **SOAP** `[tool]` — Optimiser running Adam inside Shampoo's eigenbasis, improving stability and reducing preconditioner update frequency.
- **Sophia** `[tool]` — Second-order optimiser using a clipped, intermittently estimated diagonal Hessian as a preconditioner.
- **Stochastic gradient descent (SGD)** `[tool]` — Gradient descent using gradients estimated from randomly sampled mini-batches rather than the full dataset.
- **Trust region method** — Optimisation restricting each step to a region where a local model is trusted.
- **Variance-reduced gradient methods** — Stochastic methods using control variates on past gradients to lower estimator variance.
- **Zeroth-order optimisation** — Optimisation using only function evaluations, estimating descent directions without gradients.

### Constrained optimisation

- **Alternating direction method of multipliers (ADMM)** `[tool]` — Splitting method alternating minimisation over variable blocks with dual multiplier updates.
- **Augmented Lagrangian method** `[tool]` — Combining Lagrange multipliers with a quadratic penalty to enforce constraints more stably.
- **Barrier method** `[tool]` — Adding a term diverging at the feasible boundary to keep iterates strictly interior.
- **Constraint** — Equality or inequality condition restricting which parameter values are admissible.
- **Feasible set** — Set of all parameter values satisfying every constraint of an optimisation problem.
- **Frank-Wolfe algorithm** `[tool]` — Projection-free method taking steps towards the linear-minimisation vertex of the feasible set.
- **Interior-point method** `[tool]` — Constrained solver following a central path of barrier subproblems towards the optimum.
- **Mirror descent** `[tool]` — Descent using a Bregman divergence in place of Euclidean geometry to respect constraints.
- **Penalty method** `[tool]` — Converting constraints into objective terms that grow with the degree of violation.
- **Projected gradient descent** `[tool]` — Gradient descent followed by projection of each iterate back onto the feasible set.
- **Proximal gradient method** `[tool]` — Alternating a gradient step on the smooth term with a proximal step on the non-smooth term.
- **Proximal operator** — Mapping returning the point minimising a function plus a quadratic proximity penalty.
- **Simplex algorithm** `[tool]` — Linear programming solver traversing vertices of the feasible polytope towards optimality.
- **Subgradient** — Generalisation of the gradient supporting a convex function at points where it is non-differentiable.

### Information theory

- **Bregman divergence** — Discrepancy measured as the gap between a convex function and its tangent approximation.
- **Conditional entropy** — Remaining uncertainty in one variable once another variable is known.
- **Cross-entropy** — Expected code length when encoding one distribution's outcomes using another distribution's code.
- **Differential entropy** — Continuous analogue of Shannon entropy defined through an integral over a density.
- **f-divergence** — General family of distribution discrepancies defined by a convex generator function.
- **Hellinger distance** — Bounded metric between distributions based on the difference of their square-root densities.
- **Information bottleneck** — Framework compressing an input while preserving information relevant to a target variable.
- **Jensen-Shannon divergence** — Symmetric bounded divergence averaging KL divergences of two distributions to their mixture.
- **Joint entropy** — Total uncertainty contained in two or more random variables considered together.
- **Kullback-Leibler divergence** — Asymmetric measure of the extra information needed when approximating one distribution by another.
- **Maximum mean discrepancy (MMD)** — Kernel-based distance between distributions given by the difference of their mean embeddings.
- **Minimum description length** — Model selection principle favouring the model giving the shortest joint encoding of model and data.
- **Mutual information** — Reduction in uncertainty about one variable from knowing another.
- **Perplexity** — Exponential of cross-entropy, expressing average branching factor of a predictive distribution.
- **Pointwise mutual information** — Log ratio of a joint probability to the product of marginals for specific outcomes.
- **Rate-distortion theory** — Framework relating achievable compression rate to permitted reconstruction distortion.
- **Rényi entropy** — Parameterised entropy family generalising Shannon entropy through an order parameter.
- **Shannon entropy** — Expected information content of a discrete distribution, measuring average uncertainty.
- **Sinkhorn divergence** `[tool]` — Entropy-regularised optimal transport distance computed by iterative matrix scaling.
- **Surprisal** — Negative logarithm of an outcome's probability, the information content of that outcome.
- **Total variation distance** — Maximum difference in probability the two distributions assign to any event.
- **Wasserstein distance** — Optimal-transport distance measuring minimum cost to move one distribution's mass onto another.

### Numerical computing

- **Backward error analysis** — Assessing an algorithm by the size of input perturbation for which its output is exact.
- **bfloat16** — Sixteen-bit format keeping FP32's eight exponent bits with a seven-bit significand.
- **Block floating point** — Representation where a group of values shares one common exponent or scale.
- **Catastrophic cancellation** — Severe relative error arising when subtracting two nearly equal approximate numbers.
- **Condition number** — Factor by which a problem amplifies input perturbations into output error.
- **Floating-point non-associativity** — Property that summation order changes results, causing non-determinism in parallel reductions.
- **FP16 (half precision)** — Sixteen-bit floating-point format with five exponent bits and ten significand bits.
- **FP32 (single precision)** — Thirty-two-bit floating-point format with eight exponent bits and twenty-three significand bits.
- **FP4 (E2M1)** — Four-bit floating-point encoding with two exponent and one mantissa bit, used with block scaling.
- **FP8 (E4M3 and E5M2)** — Eight-bit floating-point formats trading exponent bits against mantissa bits for range or precision.
- **IEEE 754 floating point** — Standard defining binary representation, rounding and exception behaviour for floating-point arithmetic.
- **Integer quantisation** — Mapping real-valued tensors onto integer grids using scale and zero-point parameters.
- **Kahan compensated summation** `[tool]` — Summation algorithm tracking a running correction term to reduce accumulated rounding error.
- **Log-sum-exp trick** `[tool]` — Subtracting the maximum before exponentiating to compute log-sum-exp without overflow.
- **Loss scaling** `[tool]` — Multiplying the loss before backward so small gradients survive representation in a narrow float format.
- **Machine epsilon** — Smallest value that, added to one, yields a different representable floating-point number.
- **Master weights** — Higher-precision parameter copies updated by the optimiser alongside low-precision compute copies.
- **Microscaling (MX) formats** — Open specification pairing narrow element types with a shared scale factor per fixed-size block.
- **Mixed-precision training** — Computing in low precision while keeping master weights and reductions in higher precision for stability.
- **NaN and infinity** — Special floating-point values representing undefined results and overflow beyond representable magnitude.
- **Numerical overflow and underflow** — Loss of a value because its magnitude exceeds or falls below the representable range.
- **Numerical stability** — Property of an algorithm whose computed result is close to the exact result for nearby input.
- **Pairwise summation** `[tool]` — Recursive divide-and-conquer summation reducing error growth compared with sequential accumulation.
- **Round-to-nearest-even** — Default rounding rule breaking ties towards the neighbour with an even last bit.
- **Significand and exponent** — The two fields of a floating-point number setting its precision and its dynamic range.
- **Stochastic rounding** — Rounding probabilistically in proportion to distance, so repeated low-precision updates remain unbiased.
- **Subnormal number** — Floating-point value below the normal exponent range, represented with reduced precision.
- **TF32** — Tensor-core format with FP32 exponent range and reduced mantissa, accumulating results in FP32.

### Sampling and Monte Carlo

- **Annealed importance sampling** `[tool]` — Estimating normalising constants by transporting samples through a sequence of intermediate distributions.
- **Antithetic variates** `[tool]` — Variance reduction pairing each sample with a negatively correlated counterpart.
- **Burn-in** — Initial chain iterations discarded before the sampler reaches its stationary distribution.
- **Control variates** `[tool]` — Variance reduction subtracting a correlated quantity with known expectation from an estimator.
- **Detailed balance** — Reversibility condition ensuring a Markov chain leaves the target distribution invariant.
- **Effective sample size (ESS)** — Number of independent samples equivalent in information to a correlated chain.
- **Gibbs sampling** `[tool]` — MCMC method updating each variable in turn from its full conditional distribution.
- **Gumbel-max trick** `[tool]` — Sampling from a categorical distribution by adding Gumbel noise to logits and taking the argmax.
- **Hamiltonian Monte Carlo (HMC)** `[tool]` — MCMC method using gradient-driven Hamiltonian dynamics to propose distant, high-acceptance moves.
- **Importance sampling** `[tool]` — Estimating expectations under one distribution using samples from another, reweighted by density ratios.
- **Inverse transform sampling** `[tool]` — Generating samples by applying a distribution's quantile function to uniform random numbers.
- **Langevin Monte Carlo** `[tool]` — Sampling by discretising gradient-driven Langevin diffusion with injected Gaussian noise.
- **Latin hypercube sampling** `[tool]` — Design ensuring each input dimension is stratified evenly across its range.
- **Markov chain Monte Carlo (MCMC)** — Sampling by constructing a Markov chain whose stationary distribution is the target.
- **Metropolis-Hastings algorithm** `[tool]` — MCMC method proposing moves and accepting them by a density-ratio acceptance rule.
- **Monte Carlo integration** — Approximating an integral as the sample mean of an integrand under a sampling distribution.
- **Monte Carlo method** — Estimating quantities by averaging over randomly generated samples.
- **Nested sampling** `[tool]` — Algorithm estimating marginal likelihood by sampling within shrinking likelihood-constrained shells.
- **No-U-Turn Sampler (NUTS)** `[tool]` — Adaptive HMC variant choosing trajectory length automatically by detecting path reversal.
- **Pseudorandom number generator** `[tool]` — Deterministic algorithm producing number sequences with statistical properties resembling randomness.
- **Quasi-Monte Carlo** — Integration using deterministic low-discrepancy sequences instead of independent random samples.
- **R-hat (Gelman-Rubin statistic)** `[tool]` — Convergence diagnostic comparing between-chain and within-chain variance across parallel chains.
- **Rejection sampling** `[tool]` — Drawing from a proposal distribution and accepting samples with probability proportional to a density ratio.
- **Score function estimator (REINFORCE)** — Gradient estimator for expectations using the log-derivative identity, requiring no differentiable sampler.
- **Self-normalised importance sampling** `[tool]` — Importance sampling normalising weights by their sum when densities are known only up to constants.
- **Sequential Monte Carlo** `[tool]` — Sampling that propagates and resamples a weighted particle set through a sequence of distributions.
- **Sobol sequence** `[tool]` — Low-discrepancy sequence covering the unit hypercube more evenly than random sampling.
- **Stratified sampling** `[tool]` — Partitioning the domain into strata and sampling within each to reduce estimator variance.

## Python and data engineering
*227 terms*

### Python language and runtime

- **Buffer protocol** — CPython interface through which an object exposes its raw memory so other objects can read it without copying.
- **CPython** `[tool]` — Reference implementation of Python written in C, against which most numeric and data libraries build native extensions.
- **CPython JIT compiler** — Optional copy-and-patch just-in-time compiler that translates hot interpreter traces into machine code at runtime.
- **Free-threaded Python** — CPython build variant with the GIL disabled, allowing threads to execute bytecode simultaneously on multiple cores.
- **Generator** — Function that uses yield to produce values lazily, one at a time, without materialising the whole sequence.
- **Global Interpreter Lock (GIL)** — CPython mutex permitting only one thread to execute Python bytecode at a time within a process.
- **Memory-mapped file (mmap)** — File region mapped into a process address space so it is accessed as memory rather than through read calls.
- **memoryview** — Built-in Python object providing zero-copy, sliceable access to another object's underlying memory buffer.
- **Python** `[tool]` — High-level, dynamically typed, interpreted general-purpose programming language, dominant for data engineering, analytics and machine learning work.
- **Serialisation** — Conversion of in-memory objects into a byte sequence suitable for storage or transmission, reversed by deserialisation.
- **Type hints** — Optional annotations declaring expected argument and return types, enforced by external checkers rather than the interpreter.

### Python packaging and tooling

- **Lock file** — Generated file pinning exact resolved dependency versions and hashes so installs are reproducible.
- **pip** `[tool]` — Standard Python package installer that resolves and fetches distributions from an index into an environment.
- **pyproject.toml** — Standardised declarative file holding a Python project's metadata, dependency list, build backend and tool configuration.
- **setup.py** — Executable build script historically used to define Python package metadata and build behaviour.  ⚠ *No longer the recommended entry point; declarative metadata in pyproject.toml replaces it for new projects.*
- **Virtual environment** — Isolated directory containing an interpreter and its own installed packages, separate from other projects and the system.

### Concurrency and parallelism

- **asyncio** `[tool]` — Python standard library framework for single-threaded cooperative concurrency built on coroutines and an event loop.
- **concurrent.futures** `[tool]` — Standard library interface submitting callables to thread or process pools and returning future objects for their results.
- **Coroutine** — Function that can suspend and resume execution at defined await points, yielding control to a scheduler.
- **CPU-bound versus I/O-bound** — Classification of workloads by whether computation or waiting on external resources dominates elapsed time.
- **Cython** `[tool]` — Compiler that produces C extension modules from annotated Python-like source for faster execution.
- **Embarrassingly parallel** — Workload that decomposes into fully independent tasks requiring no coordination or shared state.
- **Event loop** — Scheduler that repeatedly dispatches ready coroutines and I/O callbacks in an asynchronous program.
- **multiprocessing** `[tool]` — Python standard library module that distributes work across separate processes, bypassing the interpreter lock.
- **Numba** `[tool]` — Just-in-time compiler translating numeric Python and NumPy functions into machine code through LLVM.
- **Process** — Independently scheduled instance of a program with its own isolated memory space.
- **Shared memory** — Memory block mapped into several processes so they exchange data without serialising and copying it.
- **Thread** — Concurrent execution unit that shares the address space of other threads in the same process.
- **Vectorisation** — Expressing computation as whole-array operations executed in compiled loops rather than element-wise Python iteration.

### NumPy and arrays

- **Axis** — Numbered dimension of an array along which an operation or reduction is applied.
- **Boolean masking** — Selecting array elements using a same-shaped boolean array as a per-element filter.
- **Broadcasting** — Rule set that virtually expands smaller-shaped arrays so element-wise operations between mismatched shapes are defined.
- **dtype** — Descriptor specifying the element type, size and byte layout of every entry in an array or column.
- **Fancy indexing** — Selecting array elements using integer arrays of positions, which always produces a copy.
- **ndarray** — NumPy's n-dimensional array object: a contiguous typed buffer plus shape, dtype and stride metadata.
- **Python array API standard** — Cross-library specification of a common array interface so code runs unchanged on multiple array backends.
- **Row-major and column-major order** — Two conventions for flattening multidimensional arrays into linear memory, by rows or by columns.
- **Shape** — Tuple giving the number of elements along each dimension of an array.
- **Sparse matrix** — Matrix representation storing only non-zero entries plus their coordinates, in formats such as CSR, CSC or COO.
- **Strides** — Per-dimension byte offsets describing how to step through an array's flat memory buffer.
- **Universal function (ufunc)** — Compiled NumPy function applying an element-wise operation across arrays with broadcasting and type dispatch.
- **View versus copy** — Distinction between an array sharing another's memory buffer and one owning independently allocated data.
- **Zero-copy** — Data access pattern in which memory is shared or reinterpreted rather than duplicated between components.

### pandas and dataframes

- **Arrow-backed string dtype** — pandas string column stored in Arrow memory instead of Python objects, cutting memory use and speeding operations.
- **Categorical dtype** — Column type storing a small set of distinct values as integer codes plus a category mapping.
- **Chunking** — Splitting documents into retrievable units sized for embedding and prompt inclusion.
- **Copy-on-Write (CoW)** — pandas semantics where any modification of a derived object triggers a copy, so the parent is never mutated.
- **DataFrame** — Two-dimensional labelled table of columns, each with its own data type.
- **Extension array** — pandas interface allowing third-party or nullable data types to back a column alongside NumPy arrays.
- **groupby** — Operation partitioning rows by key values so an aggregation or transformation applies within each group.
- **Index** — Immutable axis of labels identifying rows or columns and used for alignment and lookup.
- **Join** — Combining two tables by matching rows on key columns under inner, outer, left or right semantics.
- **Lazy evaluation** — Deferring computation until a result is requested, so the engine can plan and optimise the whole query.
- **Missing data (NA)** — Sentinel marking an absent value, propagated or skipped by arithmetic and aggregation rules.
- **MultiIndex** — Hierarchical index carrying multiple label levels per axis position.
- **Out-of-core processing** — Processing datasets larger than memory by streaming portions from storage rather than loading everything.
- **pandas expressions (pd.col)** — Deferred column references letting pandas operations be written as expressions evaluated against a frame later.
- **Rolling window** — Computation applied over a moving fixed-size span of consecutive rows.
- **Series** — One-dimensional labelled array of a single data type, the column unit of a pandas DataFrame.
- **SettingWithCopyWarning** — pandas warning raised when assignment targeted an ambiguous view or copy of a DataFrame.  ⚠ *Removed in pandas 3.0, where Copy-on-Write makes the ambiguity it warned about impossible.*
- **Split-apply-combine** — Pattern of dividing data into groups, applying a function to each, and reassembling the results.

### Dataframe and query engines

- **Koalas** `[tool]` — Standalone library that provided a pandas-compatible API over Apache Spark.  ⚠ *Discontinued as a separate project; merged into Spark as pandas API on Spark.*
- **Spark Connect** — Client-server protocol letting thin clients submit Spark dataframe plans to a remote cluster over gRPC.

### Arrow and data interchange

- **Arrow Database Connectivity (ADBC)** — Columnar database client API and driver standard returning Arrow data directly, as an alternative to ODBC and JDBC.
- **Arrow Flight** — gRPC-based protocol streaming Arrow record batches between client and server without row-wise conversion.
- **Arrow Flight SQL** — Database-access protocol layered on Arrow Flight, carrying query execution and metadata calls with columnar results.
- **Arrow IPC** — Serialisation format writing Arrow record batches to a byte stream or file with minimal decoding cost.
- **Feather** — On-disk file variant of the Arrow IPC format, used for fast temporary storage and exchange.
- **Record batch** — Arrow unit of data: a fixed set of equal-length columnar arrays sharing one schema.

### File and serialisation formats

- **Apache Avro** — Row-oriented binary format storing records against a JSON-declared schema, designed for schema evolution.
- **Apache ORC** — Open columnar file format from the Hive ecosystem using stripes, indexes and lightweight compression.
- **Apache Parquet** — Open columnar file format storing typed, compressed and encoded column chunks with embedded schema and statistics.
- **CSV** — Plain-text row-oriented format storing tabular records as delimited fields, one record per line.
- **HDF5** — Hierarchical binary container format for large multidimensional numeric datasets with chunking and attributes.
- **JSON** — Text format encoding nested objects, arrays and scalars in a self-describing, human-readable syntax.
- **JSON Lines (NDJSON)** — Format placing one complete JSON document per line so files stream and split without full parsing.
- **MessagePack** — Compact binary serialisation format representing JSON-like structures with fewer bytes.
- **pickle** — Python-specific binary serialisation format that reconstructs arbitrary objects and can execute code during loading.
- **Protocol Buffers (protobuf)** — Binary serialisation format with compiled schemas and generated accessor code for structured messages.
- **TFRecord** — Sequence-of-records binary format holding serialised protocol buffer examples for training input pipelines.
- **UTF-8** — Variable-width byte encoding of Unicode characters, the default text encoding for data interchange.
- **Vortex** — Extensible columnar file format using cascading lightweight encodings and pluggable compression layouts.
- **WebDataset** — Convention storing training samples as grouped files inside sequential tar archives for streaming reads.
- **Zarr** — Format storing chunked, compressed n-dimensional arrays as independent objects, suited to cloud object storage.

### Model and tensor formats

- **GGUF** — Single-file format packaging quantised model weights, tensor metadata and tokeniser for local inference runtimes.
- **ONNX** — Open format encoding a model's computation graph and weights for portable execution across runtimes.
- **PyTorch checkpoint** — Serialised file holding a model's parameter tensors and optimiser state, historically pickle-based.
- **safetensors** — Tensor serialisation format storing raw weights plus JSON metadata, with no code execution on load.
- **TensorFlow SavedModel** — Directory format containing a serialised TensorFlow computation graph, weights and signature definitions.

### Compression and encoding

- **Bit-packing** — Storing small integers using only the bits their value range requires, rather than full-width words.
- **Brotli** — Lossless compression codec using a static dictionary and context modelling for high ratios on text.
- **Compression codec** — Algorithm pair that shrinks data for storage or transfer and restores it on read.
- **Delta encoding** — Storing each value as its difference from the previous one, shrinking sorted or slowly changing sequences.
- **Dictionary encoding** — Storing repeated column values once in a lookup table and replacing occurrences with small integer codes.
- **gzip (DEFLATE)** — General-purpose lossless compression combining LZ77 matching with Huffman coding.
- **LZ4** — Very fast lossless compression codec favouring throughput over compression ratio.
- **Run-length encoding (RLE)** — Compressing consecutive repeated values into a value plus a repetition count.
- **Snappy** — Compression codec optimised for speed over ratio, widely used inside columnar file formats.
- **Splittable compression** — Property allowing a compressed file to be divided into independently decompressible chunks for parallel reads.
- **Zstandard (zstd)** — Compression codec offering a tunable speed-to-ratio trade-off and optional trained dictionaries.

### Columnar storage internals

- **Bloom filter** — Probabilistic set membership structure that reports possible presence or definite absence of a value.
- **Column chunk** — The portion of one column's data belonging to a single row group within a columnar file.
- **Column statistics** — Per-chunk summaries such as minimum, maximum and null count, used to skip data during scans.
- **Columnar storage** — Physical layout grouping values of the same column together, favouring scans and compression over row retrieval.
- **Data page** — Smallest independently encoded and compressed unit inside a column chunk.
- **Footer metadata** — Trailing block of a columnar file holding schema, row group offsets and statistics for planning reads.
- **Predicate pushdown** — Pushing filter conditions down to the scan layer so non-matching data is never read or decoded.
- **Projection pushdown** — Reading only the columns a query references instead of the whole record.
- **Row group** — Horizontal chunk of a columnar file containing column segments for a contiguous set of rows.
- **Row-oriented storage** — Physical layout storing all fields of a record contiguously, favouring whole-record reads and writes.

### Table formats and lakehouse

- **Compaction** — Replacing accumulated conversation or tool output with a condensed representation once the window fills.
- **Data catalog** — Service registering table identities, schemas, locations and metadata pointers for query engines to resolve.
- **Data lake** — Central repository storing raw structured and unstructured files at scale on cheap object storage.
- **Data warehouse** — Integrated, subject-oriented, non-volatile, time-variant store of data organised for analysis and reporting.
- **Deletion vector** — Side file marking individual rows as deleted so data files need not be rewritten on delete.
- **Lakehouse** — Architecture applying warehouse-style transactions, schemas and governance directly to files in a data lake.
- **Medallion architecture** — Layered lakehouse design with raw bronze, cleaned silver and aggregated gold tables.
- **Open table format** — Specification adding transactional table semantics, schema and snapshot metadata over files in object storage.
- **Table snapshot** — Immutable record of a table's complete file set and schema at one committed point in time.
- **Time travel** — Querying a table as it existed at an earlier snapshot, version or timestamp.

### ETL and ELT

- **Deduplication** — Removing exact or near-duplicate documents from a corpus to reduce memorisation and wasted compute.
- **ELT** — Pipeline pattern loading raw data into the target first, then transforming it with the target's compute.
- **ETL** — Pipeline pattern extracting source data, transforming it externally, then loading the result into a target.
- **Full load** — Load strategy replacing the entire target dataset with a complete copy of the source each run.
- **Incremental load** — Load strategy transferring only records created or changed since the previous successful run.
- **Reverse ETL** — Pattern pushing modelled warehouse data back out into operational applications and business systems.
- **Staging area** — Intermediate storage holding extracted data before transformation and loading into final tables.
- **Upsert (merge)** — Write operation updating rows matching a key and inserting those that do not exist.

### Ingestion and change data capture

- **Binlog** — MySQL's binary log of committed data modifications, used for replication and change capture.
- **Change data capture (CDC)** — Technique detecting and propagating row-level inserts, updates and deletes from a source database.
- **Data ingestion** — Process of bringing data from source systems into a storage or processing platform.
- **Incremental snapshot** — Chunked re-read of source tables that runs concurrently with change streaming and requires no table locks.
- **Initial snapshot** — First full read of source tables that establishes a baseline before streaming subsequent changes.
- **Landing zone** — Storage location where ingested source files arrive untransformed before downstream processing.
- **Log-based CDC** — CDC reading the database's transaction log directly, capturing every change without querying tables.
- **Logical replication slot** — PostgreSQL server-side marker retaining write-ahead log segments until a consumer confirms it has read them.
- **Query-based CDC** — CDC polling tables on a timestamp or version column to find rows changed since the last run.
- **Tombstone record** — Message with a key and null value signalling deletion of that key in a compacted log.
- **Trigger-based CDC** — CDC using database triggers to write changed rows into an auxiliary change table.
- **Write-ahead log (WAL)** — Durable sequential record of database changes written before they are applied to data files.

### Pipeline orchestration

- **Asset-aware scheduling** — Triggering downstream work when an upstream dataset is updated, instead of on a fixed clock.
- **Backfill** — Reprocessing of historical periods to populate or correct a table after logic changes.
- **Catchup** — Scheduler behaviour automatically running every missed interval between a start date and the present.
- **Checkpointing** — Periodically persisting progress and state so processing resumes from the last durable point after failure.
- **Data lineage** — Recorded dependency graph showing which sources, jobs and transformations produced each dataset or column.
- **Data pipeline** — Ordered set of processing steps moving and transforming data from sources to destinations.
- **Dead letter queue (DLQ)** — Separate destination receiving messages or records that repeatedly fail processing.
- **Directed acyclic graph (DAG)** — Graph of nodes and one-way dependency edges with no cycles, defining a pipeline's execution order.
- **Dynamic task mapping** — Expanding one task definition into a variable number of parallel instances determined at run time.
- **Exponential backoff** — Retry strategy increasing the wait between attempts multiplicatively to relieve pressure on a failing dependency.
- **Idempotency** — Property whereby re-running an operation with the same inputs produces the same result without duplication.
- **Sensor** — Task type that waits and repeatedly checks until an external condition becomes true.
- **Software-defined asset** — Orchestration primitive declaring a persistent data object and the computation that keeps it current.
- **SubDagOperator** — Airflow operator that embedded a nested DAG inside a parent DAG.  ⚠ *Removed in Airflow 3.0; replaced by task groups and dynamic task mapping.*
- **Task** — Single unit of executable work within a pipeline, scheduled and retried independently.

### Batch and stream processing

- **At-least-once delivery** — Guarantee that no record is lost, at the cost of possible duplicates.
- **At-most-once delivery** — Guarantee that no record is duplicated, at the cost of possible loss.
- **Backpressure** — Mechanism slowing upstream producers when a downstream stage cannot keep pace.
- **Batch processing** — Executing computation over a bounded, accumulated set of records at scheduled intervals.
- **Event time** — Timestamp at which an event actually occurred at its source.
- **Exactly-once semantics** — Guarantee that each record affects the final result once, despite retries and failures.
- **Kappa architecture** — Design handling both real-time and historical processing through a single streaming path over a replayable log.
- **Lambda architecture** — Design running parallel batch and streaming layers whose outputs are merged at serving time.
- **Late-arriving data** — Records that reach the pipeline after the period they belong to has been processed.
- **Micro-batch** — Sub-division of a batch processed in one forward and backward pass before accumulation.
- **Processing time** — Timestamp at which an event is observed by the processing system.
- **Session window** — Window bounded by a gap of inactivity rather than a fixed duration.
- **Sliding window** — Fixed-length time interval advancing by a smaller step, so consecutive windows overlap.
- **State store** — Durable keyed storage holding a stream operator's working state between records and across restarts.
- **Stateful stream processing** — Streaming computation that retains and updates accumulated state across records.
- **Stream processing** — Executing computation continuously over an unbounded sequence of records as they arrive.
- **Transactional outbox** — Pattern writing an event to a local table in the same transaction as the business change, then publishing it.
- **Tumbling window** — Fixed-length, non-overlapping time interval that partitions a stream for aggregation.
- **Watermark** — Progress marker asserting that no events earlier than a given event time are still expected.

### Messaging and log streaming

- **Apache ZooKeeper** `[tool]` — Distributed coordination service historically used to store Kafka cluster metadata and elect controllers.  ⚠ *Removed as a Kafka dependency in Kafka 4.0; replaced by KRaft mode.*
- **Append-only commit log** — Durable, ordered, immutable sequence of records that consumers read at their own position.
- **Broker** — Server process storing partitions, serving producer writes and consumer reads in a messaging cluster.
- **Consumer group** — Set of consumers sharing a subscription, with each partition assigned to exactly one member.
- **Consumer lag** — Difference between the latest offset in a partition and the offset a consumer has processed.
- **KRaft** — Kafka's built-in Raft consensus protocol managing cluster metadata within the brokers themselves.
- **Log compaction** — Retention mode keeping only the most recent record per key rather than discarding by age.
- **Log partition** — Ordered, append-only shard of a topic, the unit of parallelism and ordering in a log-based system.
- **Message queue** — Broker holding messages until consumers retrieve them, decoupling producer and consumer availability.
- **Offset** — Monotonic position identifier of a record within a partition, tracked by consumers to mark progress.
- **Partition rebalancing** — Reassignment of partitions across group members when membership or partition count changes.
- **Publish-subscribe** — Messaging model where producers publish to a named channel and every interested subscriber receives a copy.
- **Replication factor** — Number of copies of each partition maintained across brokers for durability.
- **Retention policy** — Rule determining how long records remain in a topic before deletion, by time or size.
- **Schema Registry** `[tool]` — Service storing and versioning message schemas and enforcing compatibility rules for producers and consumers.
- **Share group** — Kafka consumption model allowing multiple consumers to read one partition cooperatively with per-record acknowledgement.
- **Topic** — Named logical channel to which messages are published and from which consumers read.

### Partitioning and physical layout

- **Bucketing** — Distributing rows into a fixed number of files by hash of a column, enabling shuffle-free joins.
- **Data skew** — Uneven distribution of rows across keys or partitions, causing some tasks to dominate runtime.
- **Hidden partitioning** — Table-format feature deriving partition values from source columns internally, so queries need no partition predicates.
- **Hive-style partitioning** — Directory naming convention encoding partition column values as key=value path segments.
- **Partition key** — Column or derived expression whose value determines which partition a record belongs to.
- **Partition pruning** — Query planning step eliminating partitions that cannot satisfy the filter conditions.
- **Partitioning** — Dividing a dataset into disjoint physical subsets by key so queries and jobs touch only relevant parts.
- **Repartition and coalesce** — Operations changing a dataset's partition count, one with a full shuffle and one merging partitions locally.
- **Shuffle** — Redistribution of data across workers by key, required by joins, groupings and repartitioning.
- **Small files problem** — Degraded read performance and metadata overhead caused by many undersized files in a table.
- **Spill to disk** — Writing intermediate data from memory to local storage when a stage exceeds its memory budget.
- **Z-ordering** — Multidimensional data clustering that interleaves column bits so filters on several columns skip more files.

### Schema, contracts and data quality

- **Data contract** — Agreed, versioned specification of a dataset's schema, semantics and quality guarantees between producer and consumer.
- **Data drift** — Change over time in the statistical distribution of values, with the schema unchanged.
- **Data observability** — Practice of continuously monitoring dataset freshness, volume, schema and distribution to detect pipeline problems.
- **Data validation** — Checking records against declared rules for type, range, uniqueness and referential correctness before use.
- **Explode (unnest)** — Operation expanding each element of a nested array column into its own output row.
- **JSON Schema** — Vocabulary for declaring the permitted structure, types and constraints of JSON documents.
- **Nested data types** — Composite column types such as struct, list and map that hold structure inside a single field.
- **Schema** — Formal description of a dataset's fields, their types, nullability and structure.
- **Schema compatibility mode** — Registry rule constraining permitted schema changes as backward, forward, full or none.
- **Schema drift** — Unplanned change in a source's structure, such as added, removed or retyped fields, breaking downstream jobs.
- **Schema evolution** — Controlled changing of a dataset's schema over time while existing readers and writers keep functioning.
- **Schema-on-read** — Approach applying structure and types when data is queried rather than when it is written.
- **Schema-on-write** — Approach validating and enforcing structure and types at the moment data is written.
- **Semi-structured data** — Data carrying its own irregular structure through tags or keys rather than a fixed tabular schema.
- **Type widening** — Schema change promoting a column to a more permissive type that still accepts existing values.

### Distributed compute

- **Adaptive query execution** — Runtime re-planning that adjusts join strategies and partition counts using statistics observed mid-query.
- **Apache Hadoop** `[tool]` — Framework providing distributed storage and batch computation across commodity clusters.
- **Broadcast join** — Join strategy copying a small table to every worker so no shuffle of the large table is needed.
- **Data locality** — Scheduling principle placing computation on nodes that already hold the required data.
- **Driver and executor** — Split of a distributed job into a coordinating process holding the plan and worker processes running tasks.
- **HDFS** — Distributed file system storing large files as replicated blocks across cluster nodes.
- **MapReduce** — Programming model processing data through a parallel map phase, a shuffle and a reduce phase.  ⚠ *Largely superseded by Spark and modern query engines for new distributed batch workloads.*
- **Resilient distributed dataset (RDD)** — Spark's immutable partitioned collection whose lineage allows lost partitions to be recomputed.
- **Vectorised execution** — Query execution processing batches of column values per operator call instead of one row at a time.

## Databases, SQL, warehousing and data governance
*468 terms*

### Relational model

- **Alternate key** — Candidate key not chosen as primary key, normally enforced with a unique constraint.
- **Associative entity** — Table resolving a many-to-many relationship by holding foreign keys to both participating entities.
- **Attribute** — Named column of a relation whose values are drawn from one declared domain.
- **Candidate key** — Minimal column set capable of uniquely identifying rows; one candidate becomes the primary key.
- **Check constraint** — Rule restricting permitted column values by a boolean expression evaluated on write.
- **Codd's twelve rules** — Criteria published by E. F. Codd defining what qualifies a system as truly relational.
- **Composite key** — Key formed from two or more columns combined to achieve row uniqueness.
- **Conceptual data model** — Technology-independent model naming entities, their meanings and relationships without attributes or physical detail.
- **Crow's foot notation** — ERD notation using forked line ends and circles or bars to show cardinality and optionality.
- **Database schema** — Named container defining tables, columns, types, constraints and relationships inside a database.
- **Domain (relational)** — Set of permitted values an attribute may hold, defining its data type and allowed range.
- **Entity integrity** — Rule requiring primary key values to be unique and never null.
- **Entity-relationship diagram (ERD)** — Diagram showing entities, their attributes and the relationships connecting them.
- **Foreign key** — Column referencing a key in another table, declaring and enforcing a relationship between them.
- **Identity column** — Column whose values the database generates automatically in increasing sequence on insert.
- **Logical data model** — Model specifying entities, attributes, keys and relationships independent of any particular database product.
- **Materialized view** — View whose result is physically stored and refreshed, trading storage and staleness for query speed.
- **Natural key** — Key built from real business attributes that already identify the entity uniquely.
- **Not-null constraint** — Rule forbidding a column from holding null values.
- **NULL** — Marker meaning a value is missing, unknown or inapplicable, distinct from zero or empty string.
- **Optionality** — Whether participation in a relationship is mandatory or optional for rows on each side.
- **Physical data model** — Model specifying actual tables, column types, indexes, partitions and storage settings for a target engine.
- **Primary key** — Column or column set uniquely identifying every row in a table and never null.
- **Referential integrity** — Rule requiring every foreign key value to match an existing key in the referenced table.
- **Relation** — Set of tuples sharing the same named attributes; the formal mathematical basis of a relational table.
- **Relational algebra** — Formal procedural language of operators such as select, project, join and union over relations.
- **Relational calculus** — Formal declarative language describing the result set desired rather than operations to produce it.
- **Relationship cardinality** — Count of rows permitted on each side of a relationship, such as one-to-many or many-to-many.
- **Sequence object** — Standalone database object issuing successive numeric values on request, independent of any table.
- **Surrogate key** — System-generated meaningless identifier used as primary key in place of business attributes.
- **Temporary table** — Table whose contents and definition exist only for a session or transaction.
- **Three-valued logic** — SQL truth system with TRUE, FALSE and UNKNOWN, arising from comparisons involving nulls.
- **Tuple** — One ordered set of attribute values within a relation, corresponding to a single table row.
- **Unique constraint** — Rule forbidding duplicate values across a column or column combination.
- **View** — Named stored query that behaves like a table but computes its rows on access.

### SQL language

- **Aggregate function** — Function collapsing many rows into a single value, such as sum, count or average.
- **Anti join** — Operation returning left rows having no matching row on the right.
- **CASE expression** — Conditional expression returning different values depending on which condition evaluates true.
- **Collation** — Rule set governing character sorting order and comparison equality for text data.
- **Common table expression (CTE)** — Named temporary result set defined in a WITH clause and referenced within one statement.
- **Correlated subquery** — Subquery referencing columns of the outer query, conceptually re-evaluated per outer row.
- **Cross join** — Join producing the Cartesian product of two inputs with no join predicate.
- **CUBE** — Open-source semantic layer serving governed metrics over SQL, REST, GraphQL and MCP interfaces with caching.
- **Cursor** — Server-side pointer allowing a result set to be fetched and processed row by row.
- **Data control language (DCL)** — SQL subset that grants and revokes privileges on database objects.
- **Data definition language (DDL)** — SQL subset that creates, alters and drops schema objects such as tables and indexes.
- **Data manipulation language (DML)** — SQL subset that inserts, updates, deletes and merges rows in tables.
- **Dynamic SQL** — SQL text assembled at runtime and then compiled and executed.
- **Full outer join** — Join returning matched pairs plus unmatched rows from both inputs, padded with nulls.
- **GROUP BY** — Clause partitioning rows into groups so aggregate functions produce one row per group.
- **GROUPING SETS** — Clause computing several distinct groupings in one pass over the data.
- **HAVING** — Clause filtering grouped rows using conditions on aggregate results.
- **Implicit type conversion** — Automatic coercion of a value to another data type during comparison or assignment.
- **INFORMATION_SCHEMA** — Standard set of views exposing metadata about a database's tables, columns and constraints.
- **Inner join** — Join returning only row pairs from both inputs that satisfy the join predicate.
- **LAG and LEAD** — Window functions returning values from preceding or following rows in an ordered partition.
- **Lateral join** — Join whose right-hand subquery may reference columns from the preceding left-hand row.
- **Left outer join** — Join returning all left-hand rows, padding unmatched right-hand columns with nulls.
- **Logical query processing order** — Order in which SQL clauses are conceptually evaluated, beginning with FROM and ending with LIMIT.
- **MERGE statement** — Statement applying inserts, updates and deletes to a target table from a source in one pass.
- **Natural join** — Join that matches implicitly on all identically named columns in both inputs.
- **OVER clause** — Syntax defining a window function's partitioning, ordering and frame.
- **PIVOT and UNPIVOT** — Operators rotating rows into columns and columns back into rows.
- **Prepared statement** — Precompiled parameterised statement executed repeatedly with different bound values.
- **Ranking functions** — Window functions ROW_NUMBER, RANK, DENSE_RANK and NTILE assigning positions within a partition.
- **Recursive CTE** — Common table expression that references itself to traverse hierarchies or generate sequences.
- **Right outer join** — Join returning all right-hand rows, padding unmatched left-hand columns with nulls.
- **ROLLUP** — Grouping extension producing subtotals along a hierarchy plus a grand total.
- **Self join** — Join of a table to itself using different aliases, typically to walk hierarchies.
- **Semi join** — Operation returning left rows that have at least one match on the right, without duplication.
- **Semi-structured SQL extensions** — Type and function additions letting SQL query JSON, arrays, maps and variant columns.
- **Set operators** — SQL operators UNION, UNION ALL, INTERSECT and EXCEPT combining result sets of matching shape.
- **SQL dialect** — Vendor-specific variant of SQL extending or diverging from the published standard.
- **SQL injection** — Attack inserting hostile SQL into inputs concatenated into a query string.
- **SQL standard (ISO/IEC 9075)** — International specification defining SQL syntax and semantics, published in numbered parts and revisions.
- **Stored procedure** — Named routine of SQL and procedural statements stored in and executed by the database.
- **Structured Query Language (SQL)** — Declarative language for defining, querying and manipulating data in relational database systems.
- **Subquery** — Query nested inside another statement, supplying a scalar, row set or existence test.
- **Table-valued function** — Function returning a result set usable in the FROM clause like a table.
- **Temporal table** — Table that records the validity period of each row version, enabling as-of queries.
- **Transaction control language (TCL)** — SQL subset that commits, rolls back and sets savepoints within transactions.
- **Trigger** — Procedure the database runs automatically when a specified data or schema event occurs.
- **Upsert** — Write that inserts a row when absent and updates it when the key already exists.
- **User-defined function (UDF)** — Custom routine callable in SQL expressions, returning a scalar, table or aggregate value.
- **Window frame** — Specification of which rows around the current row a window function reads.
- **Window function** — Function computing a value across a row set related to the current row without collapsing rows.

### Transactions and concurrency

- **ACID** — Property set of atomicity, consistency, isolation and durability guaranteeing reliable transaction behaviour.
- **Atomicity** — Guarantee that a transaction's effects are applied completely or not at all.
- **BASE** — Consistency model of basically available, soft state and eventual consistency, contrasted with ACID.
- **CAP theorem** — Result stating a partitioned distributed store must trade consistency against availability.
- **Checkpoint** — Saved snapshot of parameters, optimiser state and step count allowing training to resume.
- **Consistency (ACID)** — Guarantee that a committed transaction moves the database from one valid constrained state to another.
- **Deadlock** — State where transactions each hold locks the others need, so none can progress.
- **Dirty read** — Anomaly where a transaction reads data another transaction has written but not committed.
- **Durability** — Guarantee that committed changes survive crashes and power loss.
- **Eventual consistency** — Guarantee that replicas converge to the same value once updates stop.
- **Isolation** — Guarantee about how far concurrent transactions can observe each other's uncommitted effects.
- **Linearizability** — Strong consistency guarantee that operations appear to take effect instantaneously in real-time order.
- **Lock escalation** — Automatic replacement of many fine-grained locks with one coarser lock to save memory.
- **Multiversion concurrency control (MVCC)** — Technique keeping multiple row versions so readers never block writers and writers never block readers.
- **Non-repeatable read** — Anomaly where re-reading the same row within a transaction returns different committed values.
- **Optimistic concurrency control** — Strategy allowing conflicting work to proceed and validating for conflicts at commit time.
- **PACELC** — Extension of CAP adding the latency-versus-consistency trade-off when no partition exists.
- **Pessimistic locking** — Strategy taking locks before access so conflicting transactions wait rather than fail later.
- **Phantom read** — Anomaly where a repeated range query returns newly inserted rows matching the predicate.
- **Read committed** — Isolation level allowing only committed data to be read, without repeat-read guarantees.
- **Read uncommitted** — Weakest isolation level, permitting reads of data written by uncommitted transactions.
- **Repeatable read** — Isolation level guaranteeing rows already read stay unchanged for the transaction's duration.
- **Saga pattern** — Distributed transaction pattern using a sequence of local commits with compensating actions on failure.
- **Serializable** — Strongest isolation level, producing results equivalent to some serial execution of the transactions.
- **Serializable snapshot isolation (SSI)** — Technique achieving serializability on top of snapshot isolation by detecting dangerous read-write conflicts.
- **Snapshot isolation** — Isolation level where each transaction reads a consistent database snapshot taken at its start.
- **Transaction** — Unit of work whose statements either all take effect or none do.
- **Two-phase commit (2PC)** — Protocol coordinating an atomic commit across multiple resource managers via prepare and commit phases.
- **Two-phase locking (2PL)** — Concurrency protocol acquiring all locks before releasing any, guaranteeing serializable schedules.
- **Write skew** — Anomaly where two transactions read overlapping data and write disjoint rows, breaking a joint constraint.

### Indexing and storage

- **B+ tree** — B-tree variant storing all keys in leaves linked sequentially for efficient range scans.
- **B-tree index** — Balanced tree index supporting equality and range lookups in logarithmic time.
- **Bitmap index** — Index storing one bit vector per distinct value, efficient for low-cardinality analytic filters.
- **Block Range Index (BRIN)** — Index storing value summaries per block range, small and effective on naturally ordered data.
- **Buffer pool** — In-memory cache of recently used data pages managed by the database engine.
- **Clustered index** — Index whose leaf level is the table itself, physically ordering rows by the key.
- **Clustering key** — Column set that determines physical row ordering within storage to improve pruning.
- **Column cardinality** — Number of distinct values in a column, driving index choice and plan estimates.
- **Composite index** — Index over several columns whose usefulness depends on the leading-column order.
- **Covering index** — Index containing every column a query needs, so the base table is never read.
- **Data skipping** — Technique using per-file value statistics to avoid reading files irrelevant to a predicate.
- **Expression index** — Index built on the result of an expression or function rather than a raw column.
- **Generalized Inverted Index (GIN)** — PostgreSQL index type for composite values such as arrays, JSON documents and full-text vectors.
- **Generalized Search Tree (GiST)** — PostgreSQL extensible index framework supporting geometric, range and nearest-neighbour searches.
- **Hash index** — Index using a hash of the key, supporting equality lookups but not ranges.
- **Heap table** — Table stored without any enforced physical row order.
- **Index bloat** — Accumulated dead or sparsely filled index pages that waste space and slow scans.
- **Index selectivity** — Fraction of rows a predicate keeps, determining how useful an index is for it.
- **Inverted index** — A data structure mapping each term to the list of documents containing it.
- **Liquid clustering** `[tool]` — Databricks layout technique maintaining clustering incrementally without fixed partition boundaries.
- **Log-structured merge tree (LSM tree)** — Write-optimised structure buffering writes in memory then merging sorted files on disk.
- **Non-clustered index** — Index stored separately from the table, holding keys plus pointers to rows.
- **Page** — Fixed-size block that is the unit of storage allocation and buffer caching.
- **Partial index** — Index built only over rows satisfying a predicate, reducing size and maintenance cost.
- **Run-length encoding** — Compression storing repeated consecutive values once with a repetition count.
- **Sharding** — Horizontal split of a dataset across independent database instances by a shard key.
- **Small file problem** — Degradation caused by many tiny data files inflating metadata and per-file read overhead.
- **Table partitioning** — Division of one logical table into physical partitions by range, list or hash of a key.
- **Vacuum** — Maintenance operation removing dead rows or expired data files and reclaiming space.
- **Zone map** — Stored minimum and maximum values per storage block used for skipping.

### Query processing

- **Adaptive query execution (AQE)** — Re-optimisation of a running plan using statistics observed from completed stages.
- **Cardinality estimation** — Prediction of how many rows each plan operator will produce.
- **Cost-based optimiser (CBO)** — Optimiser selecting plans by estimating resource cost from table and column statistics.
- **EXPLAIN** — Command printing the execution plan the optimiser chose, optionally with runtime measurements.
- **Full table scan** — Access path reading every row of a table rather than using an index.
- **Hash join** — Join algorithm building a hash table on one input and probing it with the other.
- **Histogram (statistics)** — Summary of a column's value distribution used to estimate predicate selectivity.
- **Index seek** — Access path navigating an index directly to the qualifying key range.
- **Join reordering** — Optimisation choosing the sequence in which tables are joined to minimise intermediate size.
- **Logical plan** — Algebraic representation of what a query computes, independent of execution strategy.
- **Massively parallel processing (MPP)** — Architecture splitting a query across many independent nodes each holding part of the data.
- **Materialized view rewrite** — Optimisation transparently answering a query from a matching materialized view.
- **Nested loop join** — Join algorithm scanning the inner input once per outer row, often via an index.
- **Physical plan** — Executable operator tree specifying algorithms, access paths and data movement for a query.
- **Query compilation** — Generation and just-in-time compilation of machine code specialised to a specific query plan.
- **Query federation** — Execution of a single query across multiple remote data sources through connectors.
- **Query optimiser** — Component choosing among equivalent execution plans for a query.
- **Query parser** — Component converting SQL text into an abstract syntax tree after checking grammar.
- **Result cache** — Store of previously computed query results reused when inputs are unchanged.
- **Rule-based optimiser** — Optimiser applying fixed transformation heuristics rather than cost estimates.
- **Separation of storage and compute** — Architecture where data lives in shared storage and elastic compute clusters attach on demand.
- **Sort-merge join** — Join algorithm sorting both inputs on the key then merging them in one pass.
- **Workload management** — Controls assigning queries to queues, priorities and resource limits on a shared system.

### Database types

- **Data virtualisation** — Layer presenting data from multiple sources as one queryable schema without physically moving it.
- **Distributed SQL database** — Database replicating and sharding relational data across nodes while preserving transactional SQL semantics.
- **Document database** — Database storing self-describing JSON-like documents queryable by their internal fields.
- **Embedded analytical database** — Query engine running in-process within an application rather than as a separate server.
- **Graph database** — Database storing nodes and edges as first-class objects with traversal query languages.
- **Hybrid transactional/analytical processing (HTAP)** — Architecture serving transactional and analytical workloads on one system without separate extraction.
- **In-memory database** — Database keeping the working dataset in RAM, using disk mainly for durability.
- **Key-value store** — Database retrieving opaque values by unique key with minimal query capability.
- **NewSQL** — Class of systems providing relational SQL and ACID transactions on a horizontally scalable architecture.
- **NoSQL database** — Non-relational store trading relational schemas and joins for scale-out or flexible data models.
- **Object storage** — Storage service holding immutable objects addressed by key in flat buckets over HTTP.
- **Relational database management system (RDBMS)** — Database system organising data as related tables and exposing SQL with ACID transactions.
- **Time-series database** — Database optimised for timestamped measurements, with retention, downsampling and time-window queries.
- **Vector database** — A datastore built around vector indexes, adding persistence, filtering, updates and horizontal scaling.
- **Wide-column store** — Database organising data by row key and column families, tuned for large sparse tables.

### OLTP and OLAP

- **Drill-down** — Navigation from summary values to finer levels of a dimension hierarchy.
- **Drill-through** — Navigation from an aggregate cell to the underlying detail rows behind it.
- **HOLAP** — OLAP implementation combining relational detail storage with multidimensional aggregate storage.
- **MOLAP** — OLAP implementation storing aggregates in a dedicated multidimensional engine.
- **Multidimensional Expressions (MDX)** — Query language for cube models, used by spreadsheet and BI clients against OLAP servers.
- **OLAP cube** — Multidimensional structure holding measures pre-aggregated across dimension hierarchies.
- **Online analytical processing (OLAP)** — Workload of complex aggregate queries scanning large historical datasets for analysis.
- **Online transaction processing (OLTP)** — Workload of many short concurrent read-write transactions on current operational records.
- **Pre-aggregation** — Computing and storing summary results ahead of query time to cut response latency.
- **ROLAP** — OLAP implementation translating multidimensional queries into SQL against relational tables.
- **Roll-up** — Navigation aggregating measures upward to coarser levels of a hierarchy.
- **Slice and dice** — Filtering one dimension and re-cutting the remaining dimensions to view a subset of a cube.

### Warehouse architecture

- **Anchor modelling** — Highly normalised, sixth-normal-form technique isolating each attribute so schemas evolve without change.
- **Data freshness** — Elapsed time between an event occurring and its appearance in the analytical dataset.
- **Data mart** — Subject or department-scoped analytical dataset, often derived from a warehouse.
- **Data Vault 2.0** — Modelling method separating business keys, relationships and descriptive history into hubs, links and satellites.
- **Enterprise data warehouse (EDW)** — Single organisation-wide warehouse consolidating data from all business systems.
- **Extract, load, transform (ELT)** — Pipeline pattern loading raw data into the warehouse first and transforming it there with SQL.
- **Extract, transform, load (ETL)** — Pipeline pattern transforming data in a separate engine before loading it into the target.
- **Full refresh** — Load rebuilding a target table entirely from source on every run.
- **Hub (Data Vault)** — Table holding unique business keys and their load metadata.
- **Inmon approach** — Warehouse design building a normalised enterprise repository first, with dependent marts derived from it.
- **Kimball bus architecture** — Warehouse design of dimensional marts integrated by shared conformed dimensions and facts.
- **Link (Data Vault)** — Table recording relationships and transactions between business keys held in hubs.
- **Operational data store (ODS)** — Integrated store of current operational records supporting near-real-time reporting.
- **Orchestration** — Scheduling, sequencing, retrying and monitoring of interdependent data pipeline tasks.
- **Point-in-time table** — Data Vault helper table indexing satellite versions to simplify as-of joins.
- **Satellite (Data Vault)** — Table storing time-stamped descriptive attributes and history for a hub or link.
- **Snapshot table** — Table capturing the full state of a source dataset as of each processing run.

### Lake and lakehouse

- **Bronze layer** — Medallion layer holding raw ingested data in source form with load metadata.
- **Data swamp** — Degenerated data lake whose contents lack catalogue, quality controls and ownership, making them unusable.
- **External table** — Table definition whose data files live outside the engine's managed storage.
- **Gold layer** — Medallion layer holding business-level aggregates and dimensional models serving consumers.
- **Managed table** — Table whose data files and lifecycle are owned and deleted by the platform.
- **Silver layer** — Medallion layer holding cleaned, conformed and de-duplicated entity tables.
- **Table branching** — Creation of an isolated named line of table snapshots for testing or staged writes.
- **Write-audit-publish** — Pattern writing to a hidden branch, validating it, then atomically publishing it to consumers.
- **Zero-copy clone** — Instant table copy sharing underlying files until either side is modified.

### Table formats

- **Copy-on-write** — Update strategy rewriting whole data files so readers need no merge at query time.
- **Delta Lake UniForm** `[tool]` — Delta feature generating Iceberg and Hudi metadata alongside Delta so other engines can read the table.
- **Manifest file** — Metadata file listing data files in a snapshot together with their partition and column statistics.
- **Manifest list** — Metadata file enumerating the manifests belonging to one snapshot.
- **Merge-on-read** — Update strategy writing delta or delete files that readers merge with base files at query time.
- **Partition evolution** — Ability to change a table's partitioning scheme while old data keeps its original layout.
- **Puffin file** — Iceberg auxiliary file holding statistics and indexes such as sketches for distinct counts.
- **Row lineage (Iceberg v3)** — Table-format feature assigning each row a stable identifier and last-updated sequence number.
- **Schema evolution (table format)** — Ability to add, drop, rename or reorder columns without rewriting existing data files.
- **Snapshot (table format)** — Immutable record of a table's complete file set at one commit.
- **Snapshot expiration** — Maintenance operation removing old snapshots and their unreferenced files to reclaim storage.
- **Variant type** — Column type storing semi-structured values whose shape may differ from row to row.

### Dimensional modelling

- **Accumulating snapshot fact table** — Fact table with one row per process instance, updated as pipeline milestones complete.
- **Additive measure** — Measure that can be summed meaningfully across every dimension.
- **Bridge table** — Table resolving many-to-many relationships between a fact and a dimension, often with weighting factors.
- **Conformed dimension** — Dimension with identical keys and meaning shared across multiple fact tables and marts.
- **Date dimension** — Prebuilt dimension enumerating calendar days with fiscal, holiday and period attributes.
- **Degenerate dimension** — Dimension attribute such as an order number kept in the fact table without its own dimension.
- **Denormalisation** — Deliberate introduction of redundancy to reduce joins and speed reads.
- **Dimension hierarchy** — Ordered levels within a dimension that support aggregation from detail to summary.
- **Dimension table** — Table holding descriptive attributes used to filter, group and label facts.
- **Dimensional model** — Analytic schema organising measurements into fact tables surrounded by descriptive dimension tables.
- **Fact constellation** — Schema in which several fact tables share conformed dimension tables.
- **Fact table** — Table storing numeric measurements at a declared grain with foreign keys to dimensions.
- **Factless fact table** — Fact table recording occurrences or coverage as key combinations with no numeric measures.
- **Grain** — Precise definition of what a single fact table row represents.
- **Junk dimension** — Dimension combining unrelated low-cardinality flags and indicators into one table.
- **Mini-dimension** — Split-off table holding rapidly changing dimension attributes to limit history growth.
- **Non-additive measure** — Measure that cannot be summed across any dimension, such as a ratio or percentage.
- **One big table (OBT)** — Wide denormalised table joining facts and dimension attributes into a single query-ready dataset.
- **Outrigger dimension** — Secondary dimension table joined to another dimension rather than directly to the fact.
- **Periodic snapshot fact table** — Fact table storing measures summarised over a regular repeating time interval.
- **Ragged hierarchy** — Hierarchy whose branches have differing depths or skipped levels.
- **Role-playing dimension** — Single dimension referenced several times in one fact table under different aliases.
- **Semi-additive measure** — Measure summable across some dimensions but not across time, such as an account balance.
- **Snowflake schema** — Dimensional layout whose dimensions are normalised into multiple related tables.
- **Star schema** — Dimensional layout with one central fact table joined to denormalised dimension tables.
- **Transaction fact table** — Fact table storing one row per discrete business event at the moment it occurs.

### Slowly changing dimensions

- **Current flag** — Indicator column marking which version of a dimension row is presently active.
- **Effective date range** — Valid-from and valid-to columns delimiting when a dimension row version applied.
- **Late-arriving dimension** — Dimension record that reaches the warehouse after facts referencing it have loaded.
- **Rapidly changing dimension** — Dimension whose attributes change so often that type-2 history would grow unmanageably.
- **SCD Type 0** — Strategy keeping the original attribute value permanently and ignoring later source changes.
- **SCD Type 1** — Strategy overwriting the attribute in place, retaining no history of prior values.
- **SCD Type 2** — Strategy inserting a new row version per change, tracked by effective dates and a current flag.
- **SCD Type 3** — Strategy adding a prior-value column so limited history is held alongside the current value.
- **SCD Type 4** — Strategy keeping current values in the main dimension and full history in a separate table.
- **SCD Type 5** — Strategy combining a mini-dimension with a type-1 outrigger pointing at its current profile.
- **SCD Type 6** — Strategy combining types one, two and three so rows carry both historical and current attributes.
- **SCD Type 7** — Strategy giving facts both a surrogate key for history and a durable key for current values.
- **Slowly changing dimension (SCD)** — Dimension whose descriptive attributes change occasionally, requiring a defined history-handling strategy.

### Normalisation

- **Boyce-Codd normal form (BCNF)** — Stricter 3NF requiring every determinant of a functional dependency to be a superkey.
- **Deletion anomaly** — Unintended loss of information when a row holding several independent facts is removed.
- **Domain-key normal form (DKNF)** — Form where every constraint follows from domain definitions and key constraints alone.
- **Fifth normal form (5NF)** — Form eliminating join dependencies not implied by candidate keys.
- **First normal form (1NF)** — Form requiring atomic column values and no repeating groups within a row.
- **Fourth normal form (4NF)** — Form in BCNF with no non-trivial multivalued dependencies apart from superkeys.
- **Functional dependency** — Constraint where one attribute set uniquely determines the value of another.
- **Insertion anomaly** — Inability to record a fact because unrelated required attributes are unknown.
- **Join dependency** — Constraint stating a relation equals the join of several of its projections.
- **Lossless join decomposition** — Split of a relation whose natural join reconstructs the original rows exactly.
- **Multivalued dependency** — Constraint where one attribute determines a set of values independently of other attributes.
- **Normalisation** — Process of decomposing tables to remove redundancy and update anomalies.
- **Partial dependency** — Dependency of a non-key attribute on only part of a composite primary key.
- **Second normal form (2NF)** — Form in 1NF with no non-key attribute partially dependent on a composite key.
- **Sixth normal form (6NF)** — Form decomposing relations to irreducible components, one attribute per table plus key.
- **Third normal form (3NF)** — Form in 2NF with no transitive dependencies of non-key attributes on the key.
- **Transitive dependency** — Dependency of a non-key attribute on another non-key attribute rather than directly on the key.
- **Update anomaly** — Inconsistency arising when redundant copies of a value are not all changed together.

### Semantic layer

- **Aggregate awareness** — Semantic layer capability routing a query to the smallest pre-aggregated table that can answer it.
- **AtScale** `[tool]` — Enterprise semantic layer exposing warehouse data to BI clients through MDX, DAX and SQL with autonomous aggregates.
- **Cumulative metric** — Metric accumulating a measure over a rolling or unbounded time window.
- **Databricks metric views** `[tool]` — Unity Catalog objects defining measures and dimensions over a Databricks dataset.
- **dbt metrics package** `[tool]` — Early dbt package for defining metrics in project YAML.  ⚠ *Deprecated; replaced by MetricFlow and the dbt Semantic Layer.*
- **dbt Semantic Layer** `[tool]` — dbt service defining metrics in project code and serving them through query APIs.
- **Derived metric** — Metric computed by an expression over other defined metrics.
- **Headless business intelligence** — Semantic layer exposed only through APIs, with no bundled visualisation front end.
- **LookML** `[tool]` — Looker's declarative language defining dimensions, measures and joins for a governed model.
- **Metric definition** — Declarative specification of a measure's aggregation, filters, grain and permitted dimensions.
- **MetricFlow** `[tool]` — Query-generation engine behind the dbt Semantic Layer that compiles metric requests into SQL.
- **Metrics layer** — Central definition store where each business measure has one calculation reused across tools.
- **Open Semantic Interchange (OSI)** — Vendor-neutral YAML specification for exchanging semantic metadata between analytics platforms.
- **Ratio metric** — Metric defined as a quotient whose randomisation unit differs from its denominator unit.
- **Semantic layer** — Governed abstraction mapping physical tables to business entities, dimensions and metrics for consumers.
- **Simple metric** — Metric applying one aggregation directly to a single measure column.
- **Snowflake semantic views** `[tool]` — Snowflake objects storing metric, dimension and relationship definitions inside the database.

### Data quality

- **Accuracy** — Quality dimension measuring how closely values match the real-world facts they represent.
- **Completeness** — Quality dimension measuring whether all required records and attribute values are present.
- **Consistency (data quality)** — Quality dimension measuring agreement of the same fact across systems and records.
- **Data cleansing** — Correction, standardisation or removal of erroneous and malformed records.
- **Data downtime** — Period during which data is missing, late, erroneous or otherwise unusable.
- **Data incident management** — Process of triaging, assigning, resolving and reviewing detected data quality failures.
- **Data profiling** — Statistical inspection of a dataset to reveal its structure, distributions and quality issues.
- **Data quality** — Degree to which data is fit for its intended operational and analytical uses.
- **Data test** — Executable assertion that a dataset satisfies a stated condition, failing the pipeline when violated.
- **Distribution check** — Test asserting a column's statistical profile stays within expected bounds.
- **Freshness check** — Test asserting the newest record in a dataset is younger than a threshold.
- **Fuzzy matching** — Comparison technique scoring approximate similarity between values rather than requiring exact equality.
- **Generic test** — Reusable parameterised data test applied to many columns or models by configuration.
- **Integrity (data quality)** — Quality dimension measuring whether relationships and references between datasets hold.
- **Pipeline circuit breaker** — Control halting a pipeline before publishing when quality checks fail.
- **Reconciliation** — Comparison of counts or totals between source and target to prove a load moved data faithfully.
- **Record linkage** — Matching of records across datasets that refer to the same entity without a shared key.
- **Singular test** — One-off data test written as a query that must return no rows to pass.
- **Timeliness** — Quality dimension measuring whether data is available within the window it is needed.
- **Uniqueness** — Quality dimension measuring absence of duplicate records for the same real-world entity.
- **Validity** — Quality dimension measuring conformance to declared formats, types, ranges and code lists.
- **Volume check** — Test asserting a run's row count falls within an expected or historical range.

### Data contracts

- **Backward compatibility** — Schema change allowing consumers on the old schema to read data written with the new one.
- **Bitol** `[tool]` — Linux Foundation AI and Data project stewarding open data contract and data product standards.
- **Breaking change** — Modification that invalidates existing consumers, requiring coordinated migration or a new version.
- **Data consumer** — Team or system that reads a dataset and depends on its contracted guarantees.
- **Data Contract Specification** — Open YAML specification for data contracts, with CLI tooling that tests datasets against them.
- **Data producer** — Team or system responsible for emitting a dataset and honouring its contract.
- **Data service-level agreement** — Committed targets for a dataset's freshness, availability, completeness and support response.
- **Forward compatibility** — Schema change allowing consumers on the new schema to read data written with the old one.
- **Open Data Contract Standard (ODCS)** — Linux Foundation YAML standard describing dataset structure, semantics, quality, roles and service levels.
- **Open Data Product Standard (ODPS)** — Bitol specification describing a data product's ports, contracts, service levels and ownership.
- **Shift-left data quality** — Practice of validating data at the point of production rather than after it lands downstream.

### Lineage and metadata

- **Active metadata** — Metadata continuously collected and pushed back into tools to drive automated actions.
- **Business glossary** — Curated set of agreed business term definitions linked to the data assets implementing them.
- **Business metadata** — Metadata describing meaning, ownership, terms and usage rules for data assets.
- **Column-level lineage** — Lineage recorded per field, showing which source columns contribute to each target column.
- **Data dictionary** — Reference listing each dataset's fields with definitions, types and permitted values.
- **Data provenance** — Documented origin and custody history of a dataset, including sources and processing agents.
- **Egeria** `[tool]` — Linux Foundation project providing open metadata exchange standards and integration services across governance tools.
- **Impact analysis** — Use of lineage to determine which downstream assets a proposed change would affect.
- **OpenLineage** `[tool]` — Open standard and client libraries for emitting lineage events from pipelines and engines.
- **Operational metadata** — Metadata about runs, freshness, volumes, durations and failures of data processes.
- **Root cause analysis** — Use of lineage to trace a downstream data defect back to its originating step.
- **Table-level lineage** — Lineage recorded at dataset granularity, showing which tables feed which.
- **Technical metadata** — Metadata describing physical structure such as schemas, types, partitions and file locations.

### Catalogues and discovery

- **Alation** `[tool]` — Commercial data catalogue emphasising search, query log analysis and stewardship curation.
- **Asset certification** — Formal marking of a dataset as reviewed and approved for general use.
- **Data catalogue** — Searchable inventory of data assets with their metadata, ownership, lineage and usage information.
- **Data discovery** — Practice of finding, understanding and assessing the fitness of existing datasets before use.
- **Dataplex Universal Catalog** `[tool]` — Google Cloud service unifying catalogue, metadata and governance across BigQuery and lake storage.
- **Iceberg REST Catalog specification** — Open HTTP API contract that any Iceberg catalogue implementation can expose to engines.
- **Lakekeeper** `[tool]` — Rust implementation of the Iceberg REST catalogue with policy-based authorisation and audit events.
- **Metadata tagging** — Attachment of classification labels to assets, columns or terms to drive policy and search.
- **Metastore** — Service storing table definitions, schemas and storage locations for query engines.
- **Microsoft Purview** `[tool]` — Microsoft governance service providing catalogue, classification, lineage and compliance controls across estates.

### Master data

- **Centralised MDM style** — Implementation where the hub is the system of entry and authoring for master data.
- **Coexistence MDM style** — Implementation mastering data in a hub and synchronising changes back to source systems.
- **Consolidation MDM style** — Implementation pulling source records into a hub to produce golden records for downstream reporting.
- **Customer 360** — Unified consolidated view of a customer assembled from all systems that hold their data.
- **Data domain** — Bounded subject area of data with its own owner, definitions and governance rules.
- **Entity resolution** — Determination of which records across datasets refer to the same real-world entity.
- **Golden record** — Single consolidated best version of an entity assembled from multiple source records.
- **Hierarchy management** — Maintenance of parent-child structures such as organisation or product hierarchies within master data.
- **Master data** — Core shared business entities such as customer, product, supplier and location used across systems.
- **Master data management (MDM)** — Discipline creating and maintaining one authoritative version of shared business entities.
- **Match and merge** — Process identifying records for the same entity and combining them into one master record.
- **Reference data** — Standardised code sets and classification lists used to categorise other data.
- **Registry MDM style** — Implementation storing only cross-references to source records and computing the golden view on request.
- **Survivorship rules** — Rules choosing which source value wins for each attribute when merging duplicate records.
- **System of record** — Application designated as the authoritative source for a given data element.

### Governance and policy

- **Audit log** — Immutable record of who accessed or changed data, when and through what action.
- **California Consumer Privacy Act (CCPA/CPRA)** — California law granting consumers rights over collection, sale and deletion of personal information.
- **DAMA-DMBOK** — DAMA International reference framework organising data management into knowledge areas around central governance.
- **Data archival** — Movement of infrequently accessed data to cheaper storage while preserving retrievability.
- **Data classification** — Assignment of sensitivity levels such as public, internal, confidential or restricted to data.
- **Data custodian** — Technical role operating storage, backup, security and availability for data on the owner's behalf.
- **Data governance** — Exercise of authority and control over data assets through policies, roles, standards and decision rights.
- **Data governance council** — Cross-functional body setting data policies, arbitrating definitions and approving standards.
- **Data governance framework** — Structured set of principles, roles, processes and controls guiding an organisation's data management.
- **Data literacy** — Ability of staff to read, interpret, question and communicate with data.
- **Data Management Capability Assessment Model (DCAM)** — EDM Council model for scoring an organisation's data management capability maturity.
- **Data maturity model** — Staged scale describing how advanced an organisation's data capabilities are.
- **Data minimisation** — Principle of collecting and retaining only the personal data necessary for a stated purpose.
- **Data owner** — Accountable business role deciding permitted uses, classification and access for a data domain.
- **Data residency** — Requirement that data be stored within a specified geographic or jurisdictional boundary.
- **Data retention policy** — Rule set defining how long each data category is kept before deletion or archiving.
- **Data sovereignty** — Principle that data is subject to the laws of the country in which it is held.
- **Data steward** — Role responsible day to day for a domain's definitions, quality and issue resolution.
- **Data stewardship** — Practice of caring for data assets on behalf of the organisation and its stakeholders.
- **Data subject access request (DSAR)** — Formal request by an individual for the personal data an organisation holds about them.
- **Digital Personal Data Protection Act (DPDP)** — Indian law regulating processing of digital personal data and duties of data fiduciaries.
- **General Data Protection Regulation (GDPR)** — European Union regulation governing processing of personal data and rights of data subjects.
- **HIPAA** — United States law setting privacy and security rules for protected health information.
- **Legal hold** — Directive suspending routine deletion of records relevant to litigation or investigation.
- **Personally identifiable information (PII)** — Data that identifies a natural person directly or in combination with other data.
- **Policy as code** — Expression of governance rules in machine-readable form so systems enforce them automatically.
- **Protected health information (PHI)** — Individually identifiable health data regulated under health privacy law.
- **Purpose limitation** — Principle restricting use of personal data to the purposes for which it was collected.
- **Records management** — Discipline controlling creation, classification, retention and disposal of business records.
- **Retention schedule** — Catalogue mapping record classes to required retention periods and disposal actions.
- **Right to erasure** — Legal right of an individual to have their personal data deleted under stated conditions.
- **Sarbanes-Oxley (SOX)** — United States law requiring internal controls and auditability over financial reporting data.

### Access control and privacy

- **Anonymisation** — Irreversible transformation removing the ability to identify individuals from a dataset.
- **Attribute-based access control (ABAC)** — Model deciding access from policies over user, resource, action and environment attributes.
- **Authentication** — Verification of the identity claimed by a user or service.
- **Authorisation** — Determination of which operations an authenticated identity may perform on which resources.
- **Column-level security** — Policy restricting which columns an identity may read within a table.
- **Customer-managed keys** — Arrangement where the customer controls the encryption keys the platform uses for their data.
- **Data clean room** — Controlled environment letting parties analyse combined datasets without exposing raw records to each other.
- **Delta Sharing** `[tool]` — Open protocol for sharing live tabular data across organisations without copying it.
- **Differential privacy** — Guarantee that query results are statistically insensitive to any single individual's presence in the data.
- **Discretionary access control (DAC)** — Model letting the owner of an object grant access to others at their discretion.
- **Dynamic data masking** — Policy obscuring sensitive column values at query time based on the requester's entitlements.
- **Encryption at rest** — Protection of stored data by encrypting files, volumes or columns on disk.
- **Encryption in transit** — Protection of data moving over networks using transport-layer cryptography.
- **GRANT and REVOKE** — SQL statements conferring and withdrawing privileges on database objects.
- **Just-in-time access** — Practice granting elevated privileges temporarily on approval and revoking them automatically.
- **k-anonymity** — Property where each record is indistinguishable from at least k-1 others on quasi-identifiers.
- **l-diversity** — Extension of k-anonymity requiring sufficient variety of sensitive values within each equivalence class.
- **Mandatory access control (MAC)** — Model where a central authority enforces access from security labels users cannot override.
- **Principle of least privilege** — Rule granting each identity only the minimum access required for its task.
- **Pseudonymisation** — Processing that prevents attribution to a person without separately held additional information.
- **Role-based access control (RBAC)** — Model granting privileges to roles and assigning roles to users.
- **Row-level security (RLS)** — Policy restricting which rows an identity may see within a shared table.
- **Secure view** — View that hides its underlying definition and restricts access to base objects.
- **Separation of duties** — Control splitting sensitive actions across people so no individual can complete them alone.
- **Static data masking** — Permanent replacement of sensitive values when copying data into non-production environments.
- **Synthetic data** — Artificially generated records preserving statistical properties of real data without real individuals.
- **t-closeness** — Extension requiring each group's sensitive value distribution to resemble the overall distribution.
- **Tokenisation** — Replacement of a sensitive value with a surrogate token resolvable only through a secure vault.

### Data architecture

- **Data fabric** — Architecture using integrated metadata and automation to connect and serve data across distributed sources.
- **Data marketplace** — Governed storefront where internal or external consumers browse, request and subscribe to datasets.
- **Data mesh** — Operating model decentralising data ownership to domains that publish data as products.
- **Data product** — Managed dataset with an owner, contract, documentation, quality guarantees and defined consumption interfaces.
- **Domain-oriented ownership** — Mesh principle assigning analytical data responsibility to the business domain that generates it.
- **Federated computational governance** — Mesh principle setting global policies centrally and enforcing them automatically inside the platform.
- **Modern data stack** — Assembly of cloud warehouse, managed ingestion, SQL transformation, orchestration and BI tools.
- **Self-serve data platform** — Shared infrastructure letting domain teams build and publish data products without central engineering.

### Database engines

- **Amazon DynamoDB** `[tool]` — Managed AWS key-value and document database with provisioned or on-demand capacity.
- **Apache Cassandra** `[tool]` — Wide-column distributed database with masterless replication and tunable consistency.
- **CockroachDB** `[tool]` — Distributed SQL database providing serializable transactions across geographically replicated nodes.
- **MariaDB** `[tool]` — Community-developed relational database forked from MySQL.
- **Microsoft SQL Server** `[tool]` — Microsoft's commercial relational database with integrated analytics, replication and security tooling.
- **MongoDB** `[tool]` — Document database storing BSON documents with flexible schemas and horizontal sharding.
- **MySQL** `[tool]` — Open-source relational database widely used behind web applications.
- **Oracle Database** `[tool]` — Commercial relational database used for large transactional and mixed workloads.
- **PostgreSQL** `[tool]` — Open-source object-relational database with extensive extension support and MVCC transactions.
- **Redis** `[tool]` — In-memory key-value data store used for caching, queues and ephemeral state.
- **SQLite** `[tool]` — Embedded serverless relational database stored in a single file.
- **TiDB** `[tool]` — Distributed SQL database offering MySQL compatibility and a columnar replica for analytics.
- **TimescaleDB** `[tool]` — PostgreSQL extension adding time-series partitioning, compression and continuous aggregates.
- **YugabyteDB** `[tool]` — Distributed SQL database with a PostgreSQL-compatible query layer over a sharded storage engine.

### Analytics engines

- **Amazon Athena** `[tool]` — Serverless AWS query service running SQL directly against data in object storage.
- **Apache Spark SQL** `[tool]` — Spark module executing SQL and DataFrame queries with a cost-based and adaptive optimiser.
- **Databricks SQL** `[tool]` — Databricks warehouse offering serving SQL analytics over lakehouse tables governed by Unity Catalog.
- **Presto** `[tool]` — Distributed SQL query engine originally built at Facebook for interactive lake queries.  ⚠ *The PrestoSQL line was renamed Trino in 2020; PrestoDB continues separately.*
- **Teradata Vantage** `[tool]` — Long-established MPP analytical database platform for large enterprise warehouses.

### Pipeline tooling

- **AWS Data Pipeline** `[tool]` — Legacy AWS service for scheduling data movement and transformation activities.  ⚠ *No longer available to new customers; AWS directs users to Glue and Step Functions.*
- **Google Dataform** `[tool]` — Managed service for defining and orchestrating SQL transformation workflows in BigQuery.

## Classical and tabular machine learning
*535 terms*

### Learning paradigms

- **Binary classification** — Supervised task assigning each instance to one of exactly two mutually exclusive classes.
- **Cost-sensitive learning** — Training that minimises an expected misclassification cost with unequal penalties per error type.
- **Density estimation** — Estimating the probability distribution that generated a sample, without target labels.
- **Discriminative model** — Model that estimates the conditional distribution of the target given the features.
- **Eager learning** — Paradigm that builds an explicit model at training time before any query arrives.
- **Generative model** — Model that estimates the joint distribution of features and target, allowing sampling of data.
- **Inductive learning** — Learning a general rule from training data that is then applied to unseen instances.
- **Instance-based learning (lazy learning)** — Paradigm that stores training data and defers computation until prediction time.
- **Learning to rank** — Supervised task producing an ordering of items rather than independent scores or labels.
- **Meta-learning** — Learning across many tasks to acquire a procedure that adapts quickly to a new task.
- **Metric learning** — Learning a distance or similarity function tailored to a task from supervision on pairs or triplets.
- **Multi-class classification** — Supervised task assigning each instance to exactly one of three or more classes.
- **Multi-label classification** — Supervised task where each instance may simultaneously carry several non-exclusive labels.
- **Multi-output regression** — Supervised task predicting several continuous targets jointly from one feature vector.
- **Multi-task learning** — Training one model jointly on several tasks with shared parameters and combined objectives.
- **Multiple instance learning (MIL)** — Supervised setting where labels attach to bags of instances rather than individual instances.
- **Non-parametric model** — Model whose effective number of parameters grows with the amount of training data.
- **Ordinal regression** — Supervised task predicting a discrete target whose categories have a meaningful order.
- **Parametric model** — Model with a fixed number of parameters independent of training set size.
- **Positive-unlabelled learning (PU learning)** — Binary learning where only some positives are labelled and remaining data is unlabelled, not negative.
- **Reinforcement learning** — Learning a policy by taking actions in an environment and optimising cumulative scalar reward.
- **Supervised learning** — Learning a mapping from inputs to known target labels using a dataset of labelled training pairs.
- **Survival analysis** — Modelling of time until an event occurs, handling censored observations where the event is unobserved.
- **Transductive learning** — Predicting labels only for a specific known set of unlabelled instances rather than inducing a general rule.
- **Transfer learning** — Reusing knowledge learned on a source task or dataset to improve a related target task.
- **Unsupervised learning** — Learning structure, groupings or density from unlabelled data without any target variable.

### Linear models

- **Automatic relevance determination (ARD)** — Bayesian linear model with per-coefficient prior variances that prune irrelevant features.
- **Bayesian ridge regression** — Linear regression with Gaussian priors on coefficients and noise, yielding posterior parameter distributions.
- **Elastic net** — Linear model penalised by a weighted combination of L1 and L2 terms.
- **Generalised additive model (GAM)** — Model summing smooth univariate functions of each feature instead of linear terms.
- **Generalised linear model (GLM)** — Framework linking a linear predictor to a response through a link function and exponential-family likelihood.
- **Huber regression** — Robust regression using a loss that is quadratic near zero and linear for large residuals.
- **Lasso regression** — Linear regression with an L1 penalty that drives some coefficients exactly to zero.
- **Least-angle regression (LARS)** — Forward stagewise algorithm that computes the entire lasso coefficient path efficiently.
- **Logistic regression** — Linear classifier modelling log-odds of a class as a linear function of features.
- **Multinomial logistic regression (softmax regression)** — Generalisation of logistic regression producing a normalised probability over more than two classes.
- **Multivariate adaptive regression splines (MARS)** — Regression built from piecewise-linear hinge basis functions selected by forward addition and backward pruning.
- **Ordinary least squares (OLS)** — Linear regression fitted by minimising the sum of squared residuals via the normal equations.
- **Orthogonal matching pursuit (OMP)** — Greedy sparse regression that adds the feature most correlated with the current residual each step.
- **Partial least squares regression (PLS)** — Method projecting predictors onto latent components chosen to maximise covariance with the response.
- **Passive-aggressive algorithms** — Online linear learners that leave weights unchanged on correct margins and correct aggressively on violations.  ⚠ *Deprecated in scikit-learn 1.8, scheduled for removal in 1.10; use SGDClassifier/SGDRegressor instead.*
- **Perceptron** — Linear classifier updated online by adding misclassified examples to the weight vector.
- **Poisson regression** — Generalised linear model for count targets using a log link and Poisson likelihood.
- **Polynomial regression** — Linear model fitted on polynomial expansions of the original features.
- **Principal component regression (PCR)** — Regression performed on principal components of the predictors rather than raw features.
- **Probit regression** — Binary regression using the standard normal cumulative distribution as the link function.
- **Quantile regression** — Regression estimating a chosen conditional quantile by minimising the pinball loss.
- **RANSAC** — Robust fitting that repeatedly estimates a model on random subsets and keeps the largest inlier consensus.
- **Regularisation path** — The trajectory of fitted coefficients as the regularisation strength varies over its range.
- **Ridge regression** — Linear regression with an L2 penalty on coefficients, shrinking them toward zero.
- **Stochastic gradient descent estimator (SGDClassifier/SGDRegressor)** — Linear model fitted by per-sample gradient updates on a configurable loss and penalty.
- **Theil-Sen estimator** — Robust regression taking the median of slopes over all sample pairs.
- **Tweedie regression** — Generalised linear model spanning Poisson, gamma and compound-Poisson responses via a power variance parameter.

### Discriminant & Bayes

- **Bernoulli naive Bayes** — Naive Bayes variant for binary indicator features modelling presence and absence explicitly.
- **Categorical naive Bayes** — Naive Bayes variant with categorical class-conditional distributions over discrete feature values.
- **Complement naive Bayes** — Naive Bayes variant estimating parameters from the complement of each class to reduce imbalance bias.
- **Gaussian naive Bayes** — Naive Bayes variant modelling each continuous feature per class with a Gaussian distribution.
- **Laplace smoothing (additive smoothing)** — Adding a pseudo-count to observed frequencies so unseen categories receive non-zero probability.
- **Linear discriminant analysis (LDA)** — Classifier assuming class-conditional Gaussians with shared covariance, producing linear decision boundaries.
- **Multinomial naive Bayes** — Naive Bayes variant for count features using a multinomial class-conditional likelihood.
- **Naive Bayes** — Probabilistic classifier applying Bayes' rule under the assumption that features are conditionally independent.
- **Quadratic discriminant analysis (QDA)** — Classifier assuming class-conditional Gaussians with separate covariances, producing quadratic boundaries.
- **Regularised discriminant analysis (RDA)** — Discriminant analysis shrinking class covariances toward a common or diagonal matrix.

### Instance-based methods

- **Approximate nearest neighbour search (ANN)** — Trading exactness for speed by examining only part of the dataset when answering nearest-neighbour queries.
- **Ball tree** — Hierarchical structure of nested hyperspheres used for neighbour search in higher dimensions.
- **Distance weighting** — Neighbour voting scheme where closer neighbours contribute more strongly than distant ones.
- **Gower distance** — Similarity measure combining per-feature distances so mixed numeric and categorical columns can be compared.
- **k-nearest neighbours (k-NN)** — Predictor that labels a query by the majority or mean of its k closest training points.
- **KD-tree** — A binary space-partitioning tree splitting on one coordinate per level, effective only in low dimensions.
- **Kernel density estimation (KDE)** — Non-parametric density estimate formed by summing smoothing kernels centred on each data point.
- **Nearest centroid classifier** — Classifier assigning each query to the class whose training mean vector is closest.
- **Radius neighbours** — Neighbour predictor using all training points within a fixed distance rather than a fixed count.

### Kernel methods

- **C-support vector classification (C-SVC)** — SVM formulation where a penalty constant C trades margin width against training-error slack.
- **Gaussian process regression** — Bayesian non-parametric regression placing a Gaussian prior over functions defined by a covariance kernel.
- **Hinge loss** — Margin-based classification loss penalising predictions that fall inside a fixed decision margin.
- **Kernel ridge regression** — Ridge regression performed in kernel feature space, giving a closed-form nonlinear regressor.
- **Kernel trick** — Computing inner products in a high-dimensional feature space implicitly through a kernel function.
- **Mercer's condition** — Requirement that a kernel function yield positive semi-definite Gram matrices for all inputs.
- **nu-support vector classification (nu-SVC)** — SVM formulation parameterised by an upper bound on margin errors and lower bound on support vectors.
- **Nystrom approximation** — Low-rank approximation of the kernel matrix from a sampled subset of columns.
- **One-class SVM** — Kernel method that learns a boundary enclosing most training data for novelty detection.
- **Polynomial kernel** — Kernel computing powers of the inner product, representing feature interactions up to a chosen degree.
- **Radial basis function kernel (RBF)** — Kernel whose value decays exponentially with squared distance, controlled by a gamma bandwidth.
- **Random Fourier features** — Randomised explicit feature map whose inner products approximate a shift-invariant kernel.
- **Representer theorem** — Result showing the optimal kernel solution is a weighted combination of kernels on training points.
- **Sequential minimal optimisation (SMO)** — SVM training algorithm solving the dual by optimising two Lagrange multipliers at a time.
- **Sigmoid kernel** — Kernel based on a hyperbolic tangent of the scaled inner product between inputs.
- **Soft margin** — Margin formulation permitting bounded constraint violations through slack variables.
- **Support vector machine (SVM)** — Classifier that finds the hyperplane maximising the margin between classes in kernel feature space.
- **Support vector regression (SVR)** — Kernel regression fitting a tube of width epsilon and penalising only points outside it.
- **Support vectors** — Training points lying on or violating the margin that alone determine the fitted decision boundary.

### Trees

- **C4.5** — Tree algorithm extending ID3 with continuous splits, missing-value handling and gain-ratio criterion.
- **C5.0** — Commercial successor to C4.5 with boosting, smaller trees and faster induction.
- **CART** — Binary recursive-partitioning algorithm producing classification or regression trees with cost-complexity pruning.
- **CHAID** — Tree method choosing multiway splits by chi-squared significance tests on categorical predictors.
- **Conditional inference tree** — Tree using statistical significance tests for split selection to avoid bias toward many-valued features.
- **Cost-complexity pruning** — Post-pruning that removes subtrees whose accuracy gain does not justify a per-leaf penalty.
- **Decision stump** — Depth-one decision tree making a single split, often used as a boosting base learner.
- **Decision tree** — Predictor that recursively partitions the feature space by threshold tests and predicts per leaf.
- **Friedman MSE** — Split criterion using an improvement score adapted for gradient-boosted regression trees.
- **Gain ratio** — Information gain normalised by split intrinsic information to penalise high-cardinality attributes.
- **Gini impurity** — Node impurity measure equal to the probability of misclassifying a randomly drawn labelled sample.
- **Histogram-based splitting** — Split search over discretised feature bins instead of all raw values, reducing training cost.
- **ID3** — Early tree induction algorithm splitting categorical attributes by information gain.  ⚠ *Superseded by C4.5 and C5.0; CART is the basis of modern implementations.*
- **Information gain** — Reduction in entropy achieved by a candidate split, used to rank splits.
- **Interaction constraint** — Restriction limiting which feature groups may appear together along a tree path.
- **Leaf-wise growth** — Tree growth strategy expanding the leaf with the largest loss reduction rather than whole levels.
- **Level-wise (depth-wise) growth** — Tree growth strategy expanding all nodes of a depth level before descending.
- **Mean decrease in impurity (MDI)** — Feature importance from total impurity reduction attributed to a feature across tree splits.
- **Model tree** — Tree with regression models rather than constants fitted in its leaves.
- **Monotonic constraint** — Restriction forcing predictions to be non-decreasing or non-increasing in a specified feature.
- **Oblique decision tree** — Tree whose splits are linear combinations of several features rather than single-feature thresholds.
- **Permutation importance** — Feature importance measured as performance drop when a feature's values are randomly shuffled.
- **Pre-pruning (early stopping of growth)** — Halting tree growth using depth, leaf-size or impurity-decrease thresholds during induction.
- **Rule induction** — Learning an ordered or unordered set of if-then rules directly from data.
- **Sparsity-aware split finding** — Split routine that learns a default branch for missing or zero entries.
- **Surrogate split** — Backup split mimicking the primary split, used to route samples with missing values.
- **Variance reduction** — Regression splitting criterion selecting the split that most decreases within-node target variance.

### Ensembles

- **AdaBoost** — Boosting algorithm reweighting misclassified samples and weighting learners by their accuracy.
- **Bagging (bootstrap aggregating)** — Ensemble training members on bootstrap resamples and averaging or voting their predictions.
- **Bayesian model averaging** — Combining models weighted by their posterior probability given the data.
- **Blending** — Stacking variant fitting the meta-model on a single holdout split rather than cross-validated folds.
- **Boosting** — Sequential ensembling where each new learner focuses on errors left by its predecessors.
- **Dynamic classifier selection** — Choosing at prediction time which ensemble member to trust based on local competence.
- **Ensemble diversity** — Degree to which members make uncorrelated errors, the source of ensemble gain.
- **Ensemble learning** — Combining multiple base models so their aggregate prediction outperforms any single member.
- **Error-correcting output codes (ECOC)** — Multi-class reduction encoding classes as binary codewords learned by separate binary classifiers.
- **Extremely randomised trees (Extra Trees)** — Forest whose split thresholds are drawn at random rather than optimised.
- **Gentle AdaBoost** — Boosting variant using bounded Newton steps for greater numerical stability on noisy data.
- **Greedy ensemble selection** — Building an ensemble by repeatedly adding the model that most improves validation score, with replacement.
- **LogitBoost** — Boosting that performs additive logistic regression by fitting weighted least-squares base learners.
- **Meta-learner (level-1 model)** — The second-stage model that combines base-model outputs in a stacked ensemble.
- **Mixture of experts** — Ensemble where a gating function assigns input-dependent weights to specialised expert models.
- **One-vs-one (OvO)** — Multi-class reduction training a binary classifier for every pair of classes.
- **One-vs-rest (OvR)** — Multi-class reduction training one binary classifier per class against all others.
- **Out-of-bag estimate (OOB)** — Validation score computed from samples excluded by each member's bootstrap draw.
- **Pasting** — Bagging variant drawing training subsets without replacement.
- **Random forest** — Bagged decision trees with random feature subsampling at each split.
- **Random patches** — Ensemble whose members are trained on random subsets of both rows and features.
- **Random subspace method** — Ensemble whose members are trained on random subsets of the features.
- **Real AdaBoost** — Boosting variant whose base learners output real-valued confidence scores instead of discrete labels.
- **SAMME** — Multi-class AdaBoost variant using discrete class votes with a class-count correction term.
- **Stacking (stacked generalisation)** — Ensemble training a meta-model on out-of-fold predictions of diverse base models.
- **Voting ensemble** — Ensemble combining members by majority label vote or by averaging predicted probabilities.

### Gradient boosting

- **Column subsampling** — Sampling a fraction of features per tree, level or split to decorrelate boosted trees.
- **Custom objective (gradient and Hessian)** — User-supplied loss providing first and second derivatives for a boosting library to optimise.
- **DART boosting** — Boosting variant dropping random existing trees when fitting each new tree.
- **Early stopping rounds** — Halting boosting when a validation metric fails to improve for a set number of iterations.
- **Exclusive feature bundling (EFB)** — LightGBM technique merging mutually exclusive sparse features into a single bundled feature.
- **Explainable boosting machine (EBM)** — Cyclic-boosted generalised additive model with optional pairwise interactions and directly readable shape functions.
- **Functional gradient descent** — View of boosting as gradient descent in function space rather than parameter space.
- **Gradient boosted decision trees (GBDT)** — Additive ensemble where each tree fits the negative gradient of the loss at current predictions.
- **Gradient-based one-side sampling (GOSS)** — LightGBM sampling that keeps large-gradient instances and randomly samples small-gradient ones.
- **Minimum child weight** — Boosting constraint requiring a minimum sum of instance Hessians in each child node.
- **Newton boosting** — Boosting that uses second-order loss derivatives to compute leaf values and split gains.
- **Oblivious (symmetric) tree** — Tree using the same split condition across every node of a level, enabling fast inference.
- **Ordered boosting** — CatBoost scheme computing residuals from models trained only on preceding samples to avoid target leakage.
- **Ordered target statistics** — CatBoost categorical encoding computed on a random permutation prefix to prevent target leakage.
- **Pinball loss** — Asymmetric loss evaluating quantile forecasts by penalising under- and over-prediction differently.
- **Quantile regression forest** — Forest that stores leaf response distributions to estimate conditional quantiles.
- **Shrinkage (learning rate)** — Scaling factor applied to each boosting round's contribution to slow fitting and improve generalisation.
- **Stochastic gradient boosting** — Boosting variant fitting each round on a random subsample of the training rows.

### Clustering

- **Affinity propagation** — Clustering that exchanges responsibility and availability messages to select exemplar points.
- **Agglomerative hierarchical clustering** — Bottom-up clustering merging the closest pair of clusters until one remains.
- **Bayesian Gaussian mixture** — Mixture model with Dirichlet-process or Dirichlet priors that infers the effective number of components.  ⚠ *Replaces the removed scikit-learn DPGMM and VBGMM classes.*
- **Biclustering** — Simultaneous clustering of rows and columns to find coherent submatrices.
- **BIRCH** — Scalable clustering that summarises data into a tree of clustering features in one pass.
- **Consensus clustering** — Combining many clustering runs into a single partition via a co-association matrix.
- **Constrained clustering** — Clustering guided by must-link and cannot-link pairwise supervision.
- **Cophenetic correlation** — Correlation between original distances and dendrogram merge heights, measuring hierarchy fidelity.
- **CURE** — Hierarchical clustering representing each cluster by multiple shrunk representative points.
- **DBSCAN** — Density clustering forming clusters from core points with enough neighbours within a radius, labelling rest noise.
- **Dendrogram** — Tree diagram displaying the merge order and distances of hierarchical clustering.
- **Density peaks clustering** — Clustering selecting centres that have high local density and large distance to denser points.
- **Divisive hierarchical clustering** — Top-down clustering repeatedly splitting clusters starting from one containing all points.
- **Expectation-maximisation (EM)** — Iterative algorithm alternating expected-responsibility computation and likelihood maximisation for latent-variable models.
- **Fuzzy c-means** — Soft clustering assigning each point graded membership across all clusters.
- **Gaussian mixture model (GMM)** — Probabilistic model representing data as a weighted sum of multivariate Gaussian components.
- **HDBSCAN** — Hierarchical density clustering that extracts stable clusters from a condensed tree without a fixed radius.
- **k-means** — Clustering that alternates assigning points to nearest centroids and recomputing centroids to minimise inertia.
- **k-means++** — Seeding scheme choosing initial centroids spread apart with probability proportional to squared distance.
- **k-medoids (PAM)** — Clustering that uses actual data points as cluster centres, supporting arbitrary distance measures.
- **k-modes** — Clustering for purely categorical data using matching dissimilarity and modal cluster centres.
- **k-prototypes** — Clustering for mixed numeric and categorical data combining k-means and k-modes cost terms.
- **Leiden algorithm** — Community detection refining Louvain to guarantee well-connected communities.
- **Linkage criterion** — Rule defining inter-cluster distance in hierarchical clustering, such as single, complete, average or Ward.
- **Louvain community detection** — Greedy modularity-optimisation algorithm partitioning a graph, applied to neighbour graphs of tabular data.
- **Mean shift** — Mode-seeking clustering that iteratively shifts points toward local density maxima within a bandwidth window.
- **Mini-batch k-means** — k-means variant updating centroids from small random batches for scalability.
- **Normalised cut** — Graph partitioning objective balancing edge weight cut against partition volume.
- **OPTICS** — Density clustering producing a reachability ordering that reveals clusters across varying densities.
- **Self-organising map (SOM)** — Neural grid that maps data onto a low-dimensional lattice preserving topological neighbourhood.
- **Spectral clustering** — Clustering that embeds points using eigenvectors of a graph Laplacian before applying k-means.
- **Subspace clustering** — Finding clusters that exist only within particular subsets of the feature dimensions.
- **Ward linkage** — Hierarchical criterion merging the pair that minimises the increase in total within-cluster variance.

### Cluster evaluation

- **Adjusted Rand index (ARI)** — External clustering agreement measure corrected for chance pairings.
- **Calinski-Harabasz index** — Internal index of between-cluster to within-cluster dispersion, scaled by degrees of freedom.
- **Davies-Bouldin index** — Internal index averaging worst-case ratios of cluster scatter to inter-cluster separation.
- **Dunn index** — Internal index dividing minimum inter-cluster distance by maximum cluster diameter.
- **Elbow method** — Heuristic choosing cluster count where added clusters stop sharply reducing the error curve.
- **Fowlkes-Mallows index** — External clustering measure equal to the geometric mean of pairwise precision and recall.
- **Gap statistic** — Method choosing cluster count by comparing observed dispersion against a uniform reference distribution.
- **Homogeneity, completeness and V-measure** — Entropy-based cluster quality triple measuring class purity, class coverage and their harmonic mean.
- **Inertia (within-cluster sum of squares)** — Total squared distance from points to their assigned cluster centroid.
- **Normalised mutual information (NMI)** — External measure of shared information between two partitions, scaled to a fixed range.
- **Silhouette coefficient** — Index comparing each point's cohesion within its cluster to separation from the nearest other cluster.

### Dimensionality reduction

- **Autoencoder (undercomplete)** — Neural network compressing input through a bottleneck and reconstructing it, yielding learned low-dimensional codes.
- **Barnes-Hut approximation** — Tree-based force approximation reducing t-SNE cost from quadratic to near-linear.
- **Canonical correlation analysis (CCA)** — Method finding paired linear combinations of two variable sets with maximal correlation.
- **densMAP** — UMAP extension that additionally preserves relative local density in the embedding.
- **Dictionary learning** — Learning an overcomplete basis in which each sample has a sparse coefficient representation.
- **Diffusion maps** — Embedding derived from eigenvectors of a Markov diffusion operator on the data graph.
- **Explained variance ratio** — Fraction of total data variance accounted for by each retained component.
- **Factor analysis** — Latent-variable model explaining observed correlations by fewer common factors plus unique variances.
- **Feature agglomeration** — Dimension reduction merging similar features by hierarchical clustering of columns.
- **Hessian LLE and modified LLE** — LLE variants using Hessian estimates or multiple weight vectors to improve stability.
- **Incremental PCA** — PCA computed in mini-batches so data need not fit in memory.
- **Independent component analysis (ICA)** — Decomposition separating a signal into statistically independent, maximally non-Gaussian components.
- **Intrinsic dimensionality estimation** — Estimating the minimal number of coordinates needed to describe the data manifold.
- **Isomap** — Manifold embedding applying classical scaling to geodesic distances on a neighbourhood graph.
- **Johnson-Lindenstrauss lemma** — Result bounding the dimension needed for a random projection to preserve pairwise distances.
- **Kernel PCA** — Nonlinear PCA computed on a kernel matrix instead of the raw covariance.
- **Laplacian eigenmaps (spectral embedding)** — Embedding from the lowest eigenvectors of a neighbourhood-graph Laplacian.
- **LargeVis** — Scalable neighbour-graph visualisation method using negative sampling for large datasets.
- **Local tangent space alignment (LTSA)** — Manifold method aligning locally estimated tangent spaces into a global embedding.
- **Locally linear embedding (LLE)** — Manifold method reconstructing each point from neighbours and preserving those weights in low dimensions.
- **Manifold hypothesis** — Assumption that high-dimensional data lies near a much lower-dimensional embedded surface.
- **Multidimensional scaling (MDS)** — Embedding that positions points so low-dimensional distances match given dissimilarities.
- **PaCMAP** — Embedding method balancing neighbour, mid-near and far pairs to preserve local and global structure.
- **Parametric UMAP** — UMAP variant learning a neural encoder so new points can be embedded directly.
- **Probabilistic PCA** — Latent-variable generative formulation of PCA with isotropic Gaussian noise.
- **Random projection** — Dimension reduction by multiplying data with a random matrix that approximately preserves distances.
- **Robust PCA** — Decomposition of a matrix into low-rank and sparse components resistant to gross outliers.
- **Scree plot** — Plot of component eigenvalues used to choose how many components to retain.
- **Sparse PCA** — PCA variant penalising loadings so components depend on few original features.
- **t-distributed stochastic neighbour embedding (t-SNE)** — Visualisation method matching neighbour probabilities using a heavy-tailed low-dimensional kernel.
- **TriMap** — Embedding method optimising relative distance triplets to retain global structure.
- **Truncated singular value decomposition (SVD)** — Low-rank matrix factorisation retaining top singular triplets, usable without mean-centring.
- **UMAP** — Manifold embedding built from fuzzy simplicial neighbourhood graphs optimised by cross-entropy.
- **Whitening** — A linear post-processing transform that centres embeddings and equalises variance across dimensions to reduce anisotropy.

### Anomaly detection

- **Angle-based outlier detection (ABOD)** — Detector scoring points by the variance of angles to pairs of other points.
- **Anomaly detection** — Identifying observations that deviate markedly from the dominant pattern of the data.
- **Autoencoder reconstruction error** — Anomaly score equal to how poorly a trained autoencoder reconstructs an input.
- **Cluster-based local outlier factor (CBLOF)** — Detector scoring points by cluster size and distance to the nearest large cluster.
- **Connectivity-based outlier factor (COF)** — LOF variant using chaining distance to handle low-density but connected regions.
- **Contamination rate** — Assumed proportion of anomalies in the data, used to set a detector's threshold.
- **COPOD** — Copula-based detector scoring anomalies from empirical tail probabilities of each dimension.
- **Deep SVDD** — Neural one-class method mapping normal data into a minimum-volume hypersphere in latent space.
- **DevNet** — Weakly supervised detector optimising anomaly scores directly against a prior score distribution using few labels.
- **ECOD** — Detector scoring anomalies using empirical cumulative distribution tail probabilities per feature.
- **Elliptic envelope (minimum covariance determinant)** — Detector fitting a robust Gaussian covariance and flagging points with large Mahalanobis distance.
- **Extended Isolation Forest** — Isolation forest variant using oblique random hyperplanes to remove axis-aligned bias.
- **Feature bagging for outlier detection** — Ensemble combining detectors trained on random feature subsets.
- **Generalised ESD test** — Sequential statistical test detecting up to a specified number of univariate outliers.
- **Grubbs' test** — Statistical test for a single outlier in approximately normally distributed univariate data.
- **Half-space trees** — Streaming detector using random-subspace mass profiles over a sliding window.
- **Histogram-based outlier score (HBOS)** — Fast detector scoring points by the product of per-feature histogram rarities.
- **Isolation Forest** — Detector scoring anomalies by how few random splits are needed to isolate a point.
- **k-NN distance outlier score** — Detector scoring points by distance to their kth nearest neighbour.
- **Local outlier factor (LOF)** — Detector scoring points by the ratio of their local density to that of neighbours.
- **Locally selective combination of detectors (LSCP)** — Ensemble selecting the most competent detectors within each test point's local region.
- **Novelty detection** — Detecting unseen patterns using a model fitted on clean, anomaly-free training data.
- **Outlier detection** — Detecting anomalies inside a training set that itself contains contamination.
- **Point, contextual and collective anomalies** — Taxonomy distinguishing single deviant records, context-dependent deviations and anomalous groups of records.
- **Robust random cut forest (RRCF)** — Streaming detector scoring anomalies by their effect on tree model complexity.
- **SUOD** — Acceleration framework running large heterogeneous outlier-detector ensembles via projection and model approximation.
- **Support vector data description (SVDD)** — One-class method enclosing normal data in a minimum-volume hypersphere in kernel space.
- **Tukey fences (IQR rule)** — Flagging values beyond a multiple of the interquartile range from the quartiles.
- **XGBOD** — Semi-supervised detector feeding unsupervised outlier scores as features into a supervised booster.
- **Z-score outlier rule** — Flagging observations whose standardised deviation from the mean exceeds a threshold.

### Feature engineering

- **Column transformer** — Component applying different preprocessing steps to different column subsets in parallel.
- **Cyclical encoding** — Representing periodic quantities as sine and cosine pairs so endpoints stay adjacent.
- **Data leakage** — Contamination where information unavailable at prediction time influences training, inflating measured performance.
- **Deep feature synthesis** — Automated generation of features by stacking aggregation and transform primitives across related tables.
- **Discretisation (binning)** — Converting a continuous feature into ordered discrete intervals.
- **Equal-width and equal-frequency binning** — Discretisation using bins of constant range or constant sample count respectively.
- **Feature engineering** — Constructing and transforming input variables to expose useful structure to a learning algorithm.
- **Feature extraction** — Deriving a new, usually smaller, set of variables from raw inputs.
- **Feature hashing (hashing trick)** — Mapping feature names into a fixed-size index space via a hash function.
- **Feature store** — System computing, storing and serving model features consistently for both training and inference.
- **Group-by aggregation features** — Derived columns summarising a target or numeric field within categorical groups.
- **Interaction feature** — Derived variable combining two or more features, typically by product or ratio.
- **Iterative imputation (MICE)** — Imputation modelling each incomplete column in turn as a function of the others, cycling to convergence.
- **k-NN imputation** — Filling missing entries with values aggregated from the most similar complete rows.
- **MCAR, MAR and MNAR** — Taxonomy of missingness mechanisms by whether absence depends on observed or unobserved values.
- **Missing indicator** — Extra binary column marking which entries were originally absent.
- **Missing-value imputation** — Replacing absent entries with estimated values so downstream models can consume the data.
- **Pipeline** — Composed sequence of transformers and a final estimator fitted as one leak-safe unit.
- **Polynomial features** — Expansion adding powers and cross-products of the original features.
- **Supervised discretisation (MDLP)** — Binning that chooses cut points by minimising class entropy under a description-length criterion.
- **Target leakage** — Features that encode the outcome, or are derived from it, entering the model.
- **Winsorisation** — Capping extreme values at chosen percentiles rather than removing them.

### Categorical encoding

- **Binary and BaseN encoding** — Encoding category indices in base-two or base-N digits across several columns.
- **Contrast coding schemes** — Regression encodings such as Helmert, sum, backward-difference and polynomial that compare levels systematically.
- **Count (frequency) encoding** — Replacing each category with how often it occurs in the data.
- **Dummy variable trap** — Perfect collinearity arising when all category indicators are kept alongside an intercept.
- **Entity embeddings** — Learned dense vectors representing category levels, trained jointly with a neural model.
- **Hashing encoder** — Categorical encoder mapping levels into a fixed number of columns via hashing, tolerating collisions.
- **High cardinality** — Property of a categorical feature having very many distinct levels.
- **Information value** — Aggregate measure of a categorical variable's predictive strength derived from weight-of-evidence terms.
- **James-Stein encoder** — Target encoder shrinking category means toward the overall mean by a variance-based factor.
- **Leave-one-out encoding** — Target encoding excluding the current row from its category's statistic.
- **M-estimate encoder** — Target encoder using an additive prior count to regularise small categories.
- **One-hot encoding** — Representing a categorical variable as one binary indicator column per level.
- **Ordinal encoding** — Mapping category levels to integers, appropriate when an inherent order exists.
- **Out-of-fold target encoding** — Target encoding computed from other folds so each row's own target is excluded.
- **Rare category grouping** — Merging infrequent levels into a single catch-all category before encoding.
- **Smoothing in target encoding** — Blending a category mean toward the global mean in proportion to category rarity.
- **Target (mean) encoding** — Replacing a category with a statistic of the target computed within that category.
- **Unknown category handling** — Policy for encoding levels seen at inference but absent from training data.
- **Weight of evidence encoding (WoE)** — Encoding categories by the log ratio of positive to negative class distributions.

### Scaling & transformation

- **Box-Cox transform** — Power transform for strictly positive data chosen to make the distribution more normal.
- **Feature scaling** — Adjusting numeric features to comparable magnitudes so scale-sensitive algorithms behave well.
- **Fit-on-train discipline** — Rule that transformer parameters are estimated on training folds only and merely applied elsewhere.
- **Log transform** — Applying a logarithm to compress right-skewed positive-valued features.
- **MaxAbs scaling** — Scaling by the maximum absolute value, preserving sparsity and sign.
- **Min-max normalisation** — Linear rescaling of a feature into a fixed range, usually zero to one.
- **Multicollinearity** — Condition where predictors are strongly linearly related, destabilising coefficient estimates.
- **Quantile transform** — Rank-based mapping of a feature onto a uniform or Gaussian target distribution.
- **Robust scaling** — Centring by the median and scaling by the interquartile range to resist outliers.
- **Standardisation (z-score scaling)** — Transform subtracting the mean and dividing by the standard deviation of each feature.
- **Target transformation** — Modelling a transformed response and inverting the transform when predicting.
- **Unit-norm normalisation** — Rescaling each sample vector to have unit L1 or L2 norm.
- **Variance inflation factor (VIF)** — Statistic quantifying how much a coefficient's variance is inflated by collinearity.
- **Yeo-Johnson transform** — Power transform extending Box-Cox to features containing zero or negative values.

### Feature selection

- **Boruta** — All-relevant selection comparing each feature's importance against randomised shadow copies.
- **Embedded feature selection** — Selection performed inherently by the learning algorithm during fitting.
- **Filter feature selection** — Selecting features by intrinsic statistical scores computed independently of any model.
- **Genetic algorithm feature selection** — Evolutionary search over feature subsets using selection, crossover and mutation operators.
- **L1-based selection** — Choosing features with non-zero coefficients from a lasso-penalised model.
- **Markov blanket selection** — Identifying the minimal variable set rendering the target conditionally independent of all others.
- **Minimum redundancy maximum relevance (mRMR)** — Selection maximising relevance to the target while penalising redundancy among chosen features.
- **Mutual information selection** — Ranking features by the information they share with the target, capturing nonlinear dependence.
- **Null importance selection** — Keeping features whose importance exceeds a distribution obtained under shuffled targets.
- **Recursive feature elimination (RFE)** — Wrapper repeatedly fitting a model and discarding the weakest features until a target count remains.
- **ReliefF** — Selection scoring features by how well they separate nearest hits from nearest misses.
- **Sequential feature selection** — Greedy forward addition or backward removal of features guided by cross-validated score.
- **Stability selection** — Selecting features chosen consistently across many subsampled regularised fits.
- **Univariate statistical selection** — Ranking features individually by tests such as ANOVA F, chi-squared or mutual information.
- **Variance threshold** — Filter removing features whose variance falls below a set value.
- **Wrapper feature selection** — Selecting features by repeatedly training a model and evaluating candidate subsets.

### Class imbalance

- **ADASYN** — Oversampling that allocates more synthetic points to minority samples that are harder to learn.
- **All-KNN** — Repeated ENN cleaning applied with increasing neighbourhood sizes.
- **BalanceCascade** — Sequential ensemble removing correctly classified majority samples before training the next member.
- **Balanced random forest** — Forest whose every tree is grown on a class-balanced bootstrap sample.
- **Borderline-SMOTE** — SMOTE variant generating synthetic points only near the decision boundary.
- **Class imbalance** — Condition where one or more target classes are far rarer than others.
- **Class weighting** — Assigning higher loss weight to rare classes instead of resampling the data.
- **Cluster centroids undersampling** — Replacing majority samples with centroids obtained by clustering that class.
- **Condensed nearest neighbour (CNN)** — Undersampling retaining a minimal subset that still classifies all training points correctly.
- **Decision threshold tuning** — Choosing the probability cutoff that optimises a chosen operating metric rather than defaulting to one-half.
- **EasyEnsemble** — Ensemble of learners each trained on a different balanced undersample of the majority class.
- **Edited nearest neighbours (ENN)** — Undersampling removing points whose class disagrees with the majority of their neighbours.
- **Focal loss** — Classification loss down-weighting easy examples to counter extreme foreground-background imbalance.
- **Generative tabular oversampling** — Rebalancing by synthesising minority rows from a learned generative model of the table.
- **Imbalance ratio** — Ratio of majority to minority class counts in a dataset.
- **Instance hardness threshold** — Undersampling dropping majority samples that a classifier consistently misclassifies.
- **KMeans-SMOTE** — SMOTE variant clustering first and oversampling within sparse minority clusters.
- **NearMiss** — Family of undersampling heuristics selecting majority points by their distances to minority points.
- **Neighbourhood cleaning rule** — Undersampling that removes noisy and borderline majority samples using neighbour agreement.
- **One-sided selection** — Undersampling combining condensed nearest neighbour with Tomek-link removal.
- **Random oversampling** — Duplicating minority-class rows at random to rebalance class frequencies.
- **Random undersampling** — Discarding majority-class rows at random to rebalance class frequencies.
- **RUSBoost** — Boosting that applies random undersampling within each boosting iteration.
- **SMOTE** — Oversampling that creates synthetic minority points by interpolating between minority neighbours.
- **SMOTE-Tomek and SMOTE-ENN** — Hybrid resamplers that oversample the minority then clean overlapping samples.
- **SMOTEN** — SMOTE variant for datasets whose features are all categorical.
- **SMOTENC** — SMOTE variant handling datasets with both continuous and categorical features.
- **SVM-SMOTE** — SMOTE variant using support vectors to locate the region for synthetic generation.
- **Tomek links** — Pairs of nearest neighbours from opposite classes, removed to clean class boundaries.

### Calibration & uncertainty

- **Aleatoric uncertainty** — Irreducible variability in outcomes caused by inherent noise in the data-generating process.
- **Beta calibration** — Parametric calibration using a beta-distribution-based link, more flexible than logistic mapping.
- **Brier score** — Mean squared difference between predicted probabilities and binary outcomes.
- **Brier score decomposition** — Split of the Brier score into reliability, resolution and uncertainty components.
- **Conformalized quantile regression (CQR)** — Interval method conformalising quantile-regression predictions to guarantee coverage.
- **Cross-validated calibration** — Fitting calibrators on out-of-fold scores so calibration data is not reused for training.
- **Epistemic uncertainty** — Reducible uncertainty arising from limited data or model knowledge.
- **Exchangeability assumption** — Requirement that calibration and test data be drawn from a joint distribution invariant to ordering.
- **Expected calibration error (ECE)** — Weighted average absolute gap between confidence and accuracy across probability bins.
- **Full (transductive) conformal prediction** — Conformal variant refitting the model for every candidate label of each test point.
- **Histogram binning calibration** — Calibration replacing each score bin with the observed positive rate in that bin.
- **Isotonic calibration** — Non-parametric calibration fitting a monotone step function from scores to probabilities.
- **Jackknife+ and CV+** — Conformal interval methods built from leave-one-out or cross-validated residuals.
- **Log loss** — Negative log-likelihood of observed labels under predicted class probabilities.
- **Marginal coverage** — Guarantee that prediction regions contain the truth at a target rate averaged over the distribution.
- **Maximum calibration error (MCE)** — Largest confidence-accuracy gap observed across probability bins.
- **Mondrian conformal prediction** — Conformal variant calibrating separately within groups such as classes to give conditional coverage.
- **Nonconformity score** — Function measuring how unusual a candidate label is relative to calibration data.
- **Overconfidence** — Miscalibration where predicted probabilities systematically exceed observed accuracy.
- **Platt scaling** — Post-hoc calibration fitting a logistic regression from model scores to probabilities.
- **Prediction interval** — Range expected to contain a future observation with stated probability.
- **Probability calibration** — Adjusting model scores so predicted probabilities match observed empirical frequencies.
- **Reliability diagram (calibration curve)** — Plot of observed event frequency against predicted probability, grouped into bins.
- **Split (inductive) conformal prediction** — Conformal variant calibrating nonconformity scores on a held-out set after a single model fit.
- **Temperature scaling** — Single-parameter calibration dividing logits by a learned scalar before the softmax.
- **Vector and matrix scaling** — Multi-parameter logit calibration applying learned linear maps before the softmax.
- **Venn-Abers predictor** — Calibration producing a probability interval from two isotonic fits under opposite label assumptions.

### Hyperparameter search

- **Acquisition function** — Criterion balancing exploration and exploitation when choosing the next configuration to evaluate.
- **Asynchronous successive halving (ASHA)** — Parallel successive halving that promotes configurations without waiting for a full round.
- **Automated machine learning (AutoML)** — Automating model choice, preprocessing and hyperparameter tuning within a fixed compute budget.
- **BOHB** — Search combining Hyperband budget allocation with Bayesian model-based configuration proposals.
- **CMA-ES** — Evolution strategy adapting a covariance matrix to search continuous parameter spaces.
- **Combined algorithm selection and hyperparameter optimisation (CASH)** — Formulation treating pipeline choice and its hyperparameters as one joint optimisation problem.
- **Conditional search space** — Search space where some hyperparameters exist only when others take particular values.
- **Expected improvement (EI)** — Acquisition function scoring configurations by expected gain over the current best value.
- **Grid search** — Exhaustive evaluation of every combination in a discretised hyperparameter grid.
- **Hyperband** — Bandit search running successive halving with several budget-versus-breadth brackets.
- **Hyperparameter** — Configuration value set before fitting that governs model structure or the learning procedure.
- **Multi-fidelity optimisation** — Search exploiting cheap approximate evaluations to guide expensive full evaluations.
- **Overfitting the validation set** — Degradation of validation reliability caused by selecting among many configurations on the same data.
- **Population-based training (PBT)** — Search evolving a population of runs by periodically copying and perturbing better configurations.
- **Random search** — Sampling hyperparameter configurations at random from specified distributions.
- **SMAC** — Bayesian optimisation using random-forest surrogates, suited to conditional and categorical search spaces.
- **Successive halving** — Multi-fidelity search allocating budget to configurations in rounds and discarding the worst each round.
- **Tree-structured Parzen estimator (TPE)** — Bayesian search modelling densities of good and bad configurations and maximising their ratio.
- **Trial pruning** — Terminating unpromising hyperparameter trials early based on intermediate results.
- **Upper confidence bound (UCB)** — Acquisition function selecting configurations by optimistic surrogate mean plus scaled uncertainty.
- **Warm-starting search** — Initialising a search from configurations that performed well on related datasets or prior runs.

### Cross-validation

- **Bootstrap resampling** — Estimating sampling variability by repeatedly resampling observations with replacement.
- **Group k-fold** — Cross-validation keeping all rows sharing a group identifier within a single fold.
- **Holdout validation** — Estimating performance on a single split of data reserved from training.
- **k-fold cross-validation** — Rotating evaluation across k disjoint partitions, each serving once as validation set.
- **Leave-one-out cross-validation (LOOCV)** — Cross-validation with as many folds as samples, each validating on one observation.
- **Nested cross-validation** — Inner loop tunes hyperparameters while an outer loop estimates unbiased generalisation performance.
- **Out-of-fold predictions** — Cross-validated predictions for each observation, used for stacking or unbiased threshold tuning.
- **Purged and embargoed cross-validation** — Scheme removing overlapping and adjacent observations near fold boundaries to prevent temporal leakage.
- **Repeated cross-validation** — Running k-fold several times with different partitions and averaging the results.
- **Stratified k-fold** — Cross-validation preserving class proportions within every fold.
- **Time series split** — Validation scheme where training always precedes validation in time order.

### Bias-variance & generalisation

- **Bias (statistical)** — Systematic error from a model too rigid to represent the true relationship.
- **Concept drift** — Change in the relationship between inputs and the target variable over time.
- **Covariate shift** — Shift where the feature distribution changes but the conditional target distribution does not.
- **Dataset shift** — Mismatch between the distributions generating training and deployment data.
- **Double descent** — Phenomenon where test error falls, rises near the interpolation threshold, then falls again with more capacity.
- **Empirical risk minimisation (ERM)** — Learning principle selecting the hypothesis with lowest average loss on the training sample.
- **Generalisation error** — Expected loss of a model on data drawn from the underlying distribution.
- **Inductive bias** — Assumptions embedded in an architecture that make some hypotheses easier to learn than others.
- **Irreducible error** — Component of prediction error from inherent noise that no model can remove.
- **Label (prior) shift** — Shift where class proportions change while class-conditional feature distributions remain fixed.
- **Learning curve** — Plot of performance against training set size, revealing bias-limited or data-limited regimes.
- **Model capacity** — Range of functions a model class can represent.
- **No free lunch theorem** — Result that no learner outperforms all others averaged over every possible problem.
- **Overfitting** — Fitting noise in training data so validation performance degrades relative to training.
- **PAC learning** — Framework requiring an algorithm to find a near-optimal hypothesis with high probability from finite samples.
- **Rademacher complexity** — Measure of a hypothesis class's ability to fit random sign noise.
- **Sample complexity** — Number of training examples needed to reach a target error with given confidence.
- **Structural risk minimisation** — Learning principle trading empirical risk against a measure of hypothesis-class complexity.
- **Underfitting** — Condition where a model is too constrained to capture structure present in the training data.
- **Validation curve** — Plot of training and validation error against a single hyperparameter value.
- **Variance (estimator)** — Sensitivity of a fitted model to fluctuations in the particular training sample.
- **VC dimension** — Largest number of points a hypothesis class can label in all possible ways.

### Regularisation

- **Adaptive lasso** — Lasso with per-coefficient weights that reduce shrinkage bias on strong predictors.
- **Early stopping as regularisation** — Limiting training iterations so the model stops before it begins fitting noise.
- **Fused lasso** — Penalty encouraging both sparsity and similarity between adjacent coefficients.
- **Group lasso** — Penalty selecting or discarding predefined groups of coefficients together.
- **L1 penalty** — Penalty on the sum of absolute coefficients, inducing exact sparsity.
- **L2 penalty** — Penalty on the sum of squared coefficients, shrinking them smoothly toward zero.
- **Noise injection** — Adding random perturbations to inputs or targets during training to smooth the learned function.
- **Priors as regularisation** — Bayesian view where penalty terms correspond to prior distributions over parameters.
- **Regularisation** — Any technique constraining a model or its training to reduce overfitting and improve generalisation.
- **Regularisation strength (alpha, lambda, C)** — Hyperparameter controlling how heavily the complexity penalty weighs against data fit.
- **SCAD and MCP penalties** — Non-convex penalties that shrink small coefficients while leaving large ones nearly unbiased.
- **Shrinkage estimator** — Estimator pulled toward a fixed target to trade small bias for lower variance.

### Semi-supervised & active

- **Active learning** — Learning loop where the model selects which unlabelled instances an annotator should label next.
- **Batch-mode active learning** — Selecting a diverse batch of queries per round rather than one instance at a time.
- **Cluster assumption** — Assumption that points in the same high-density cluster share a label.
- **Co-training** — Semi-supervised method where two models on distinct feature views label data for each other.
- **Cold-start problem in active learning** — Difficulty of choosing informative queries when the initial model is trained on almost no labels.
- **Confident learning** — Method estimating label-error joint distributions from out-of-fold probabilities to identify mislabelled rows.
- **Consistency regularisation** — Training objective requiring stable predictions under perturbations of unlabelled inputs.
- **Contrastive learning for tabular data** — Self-supervised objective pulling augmented views of a row together and other rows apart.
- **Core-set selection** — Choosing a small subset that covers the feature space so a model trained on it approximates the full fit.
- **Data programming** — Framework modelling the accuracies and correlations of labelling functions to denoise their votes.
- **Denoising autoencoder pretraining** — Representation learning by reconstructing clean records from corrupted versions.
- **Density-weighted sampling** — Query strategy combining informativeness with how representative an instance is of the pool.
- **Entropy minimisation** — Objective encouraging confident predictions on unlabelled data.
- **Expected error reduction** — Query strategy choosing instances expected to lower generalisation error the most once labelled.
- **Expected model change** — Query strategy choosing instances that would most alter the current model parameters.
- **Label propagation** — Graph method spreading known labels to neighbours through edge weights until convergence.
- **Label spreading** — Label propagation variant with normalised graph Laplacian and tolerance for noisy initial labels.
- **Labelling function** — Heuristic rule that votes a label or abstains, combined with others into probabilistic training labels.
- **Learning with noisy labels** — Training methods robust to a fraction of incorrect target annotations.
- **Manifold assumption** — Assumption that labels vary smoothly along the low-dimensional manifold containing the data.
- **Margin sampling** — Query strategy selecting instances with the smallest gap between top two class probabilities.
- **Masked feature modelling** — Self-supervised task predicting deliberately hidden feature values from the remaining columns.
- **Membership query synthesis** — Active learning generating artificial instances for the annotator to label.
- **Pool-based sampling** — Active learning selecting queries from a fixed pool of available unlabelled instances.
- **Pretext task** — Auxiliary objective whose labels are derived automatically to drive representation learning.
- **Query by committee** — Query strategy selecting instances on which an ensemble of models most disagrees.
- **Self-supervised learning** — Learning representations from unlabelled data by solving tasks constructed from the data itself.
- **Self-training (pseudo-labelling)** — Iteratively labelling confident unlabelled predictions and adding them to the training set.
- **Semi-supervised learning** — Learning from a small labelled set together with a large pool of unlabelled data.
- **Stream-based selective sampling** — Active learning deciding instance by instance whether to request a label as data arrives.
- **Transductive SVM (S3VM)** — Semi-supervised SVM placing the margin in low-density regions of unlabelled data.
- **Tri-training** — Semi-supervised method where three models label an instance when two of them agree.
- **Uncertainty sampling** — Query strategy choosing the instances whose predictions the model is least sure about.
- **Weak supervision** — Training on noisy, imprecise or programmatically generated labels instead of gold annotations.

### Online & incremental

- **Adaptive random forest** — Streaming forest with per-tree drift detectors and background replacement trees.
- **ADWIN** — Drift detector maintaining an adaptive window and cutting it when subwindow means differ significantly.
- **Catastrophic forgetting** — Loss of previously learned capability when fine-tuning shifts weights toward a narrow new distribution.
- **Contextual bandit** — Bandit setting where an observed feature vector informs each action choice.
- **Drift detection method (DDM)** — Detector signalling drift when online error rate and its standard deviation exceed warning thresholds.
- **Epsilon-greedy** — Bandit policy choosing a random action with small probability and the best known action otherwise.
- **Forgetting factor** — Decay weight that reduces the influence of older observations in an online model.
- **FTRL-Proximal** — Online convex optimisation algorithm producing sparse linear models under L1 regularisation.
- **Hoeffding adaptive tree** — Streaming tree that grows alternate subtrees and replaces branches when drift is detected.
- **Hoeffding tree (VFDT)** — Streaming decision tree splitting once a statistical bound confirms the best attribute.
- **Incremental learning** — Extending an existing model with new data without retraining from scratch.
- **KSWIN** — Drift detector comparing recent and reference windows with the Kolmogorov-Smirnov test.
- **Multi-armed bandit** — Sequential decision problem trading exploration of uncertain options against exploiting known-good ones.
- **No-regret algorithm** — Online learner whose average regret tends to zero as the sequence lengthens.
- **Online learning** — Learning that updates the model as each example or small batch arrives.
- **Out-of-core learning** — Training on data streamed from disk because it exceeds available memory.
- **Page-Hinkley test** — Sequential change detector tracking cumulative deviation of a monitored statistic from its mean.
- **Partial fit** — Estimator interface applying one incremental update from a batch of samples.
- **Prequential evaluation (test-then-train)** — Streaming evaluation scoring each arriving example before using it for the update.
- **Regret** — Cumulative excess loss of an online learner relative to the best fixed hypothesis in hindsight.
- **Reservoir sampling** — Algorithm maintaining a uniform random sample of fixed size from an unbounded stream.
- **Streaming k-means** — Clustering that maintains centroids incrementally over a data stream.
- **Thompson sampling** — Exploration by sampling parameters from a posterior and acting greedily with respect to the sample.

### Tabular tooling

- **ADBench** `[tool]` — Benchmark suite comparing anomaly detection algorithms across many labelled datasets.
- **Ax and BoTorch** `[tool]` — Adaptive experimentation platform and its PyTorch-based Bayesian optimisation engine.
- **crepes** `[tool]` — Python package for conformal classifiers, regressors and conformal predictive systems.
- **DeepOD** `[tool]` — Python library implementing deep learning based anomaly detection methods.
- **Featuretools** `[tool]` — Library performing automated feature synthesis across relational tables and time windows.
- **MAPIE** `[tool]` — scikit-learn-contrib library for conformal prediction intervals, prediction sets and risk control.
- **MLJAR AutoML** `[tool]` — Open-source AutoML package producing tuned tabular models with automated reports.
- **Nevergrad** `[tool]` — Gradient-free optimisation library offering evolutionary and population-based search algorithms.
- **scikit-activeml** `[tool]` — scikit-learn-compatible library implementing pool- and stream-based active learning query strategies.
- **scikit-learn-intelex** `[tool]` — Extension accelerating scikit-learn estimators on Intel hardware through oneAPI kernels.
- **skrub** `[tool]` — scikit-learn-contrib library for preparing messy tables, fuzzy joins and high-cardinality string encoding.  ⚠ *Renamed from dirty_cat; use skrub for new work.*
- **SMAC3** `[tool]` — Bayesian optimisation package using random-forest surrogates for algorithm configuration.
- **smote_variants** `[tool]` — Python package collecting many published minority oversampling algorithms under one interface.
- **TabArena** `[tool]` — Benchmark comparing tabular models, including foundation models, on standardised datasets.
- **Tabular foundation model** — Pretrained model that predicts on new tables in context, without dataset-specific gradient training.

## Evaluation, experimentation and causal inference
*394 terms*

### Classification metrics

- **Area under the ROC curve (AUC-ROC)** — Probability that a randomly chosen positive is scored above a randomly chosen negative.
- **Average precision (AP, AUC-PR)** — Area under the precision-recall curve, computed as recall-weighted mean precision.
- **Balanced accuracy** — Mean of per-class recall, correcting accuracy for class imbalance.
- **Class prevalence (base rate)** — Proportion of a class in the evaluation population, which shifts precision-type metrics.
- **Cohen's kappa** — Agreement between two raters or label sets corrected for agreement expected by chance.
- **Confusion matrix** — Table cross-tabulating predicted classes against actual classes, from which most classification metrics are derived.
- **Equal error rate (EER)** — Verification operating point at which false acceptance and false rejection rates coincide.
- **Exact match ratio (subset accuracy)** — Fraction of multilabel instances whose entire predicted label set is exactly correct.
- **F-beta score** — Weighted harmonic mean of precision and recall, with beta controlling recall emphasis.
- **F1 score** — Harmonic mean of precision and recall.
- **False negative rate (FNR, miss rate)** — Fraction of actual positives the model incorrectly labels negative.
- **False positive rate (FPR)** — Fraction of actual negatives the model incorrectly labels positive.
- **Fleiss' kappa** — Chance-corrected inter-rater agreement statistic for more than two raters.
- **Gini coefficient (Somers' D)** — Rescaled discrimination measure equal to twice AUC minus one.
- **Hamming loss** — Fraction of individual label predictions that are wrong in multilabel classification.
- **Kolmogorov-Smirnov statistic (KS)** — Maximum separation between cumulative score distributions of positives and negatives.
- **Krippendorff's alpha** — General reliability coefficient for rater agreement across arbitrary measurement scales and missing data.
- **Lift and cumulative gain charts** — Curves showing positives captured by score decile relative to random targeting.
- **Log loss (cross-entropy loss)** — Negative average log probability the model assigns to the true class.
- **Macro, micro and weighted averaging** — Schemes for aggregating per-class metrics across classes in multiclass or multilabel evaluation.
- **Matthews correlation coefficient (MCC)** — Correlation between predicted and true binary labels using all four confusion-matrix cells.
- **Negative predictive value (NPV)** — Fraction of predicted negatives that are actually negative.
- **Partial AUC** — Area under a restricted region of the ROC curve, typically low false-positive rates.
- **Precision (positive predictive value)** — Fraction of predicted positives that are actually positive.
- **Precision-recall curve** — Plot of precision against recall across all decision thresholds.
- **Receiver operating characteristic (ROC) curve** — Plot of true positive rate against false positive rate across all decision thresholds.
- **Specificity (true negative rate)** — Fraction of actual negatives the model correctly labels negative.
- **Top-k accuracy** — Fraction of cases where the true label appears among the k highest-scored predictions.
- **True positive rate (TPR, recall, sensitivity)** — Fraction of actual positives the model correctly labels positive.
- **Youden's J statistic** — Sensitivity plus specificity minus one, summarising a single operating point.

### Threshold and calibration

- **Adaptive calibration error (ACE)** — Calibration error computed over equal-count rather than equal-width probability bins.
- **Calibration** — Property whereby predicted probabilities match observed empirical event frequencies.
- **Calibration-refinement decomposition** — Splitting a proper score into calibration, resolution and intrinsic uncertainty components.
- **Cost matrix** — Specification of the cost attached to each confusion-matrix outcome for cost-sensitive decisions.
- **Decision curve analysis** — Evaluation plotting net benefit of a model against threshold probability.
- **Decision threshold** — Score cutoff converting a continuous model output into a discrete class decision.
- **Expected cost (Bayes risk)** — Average misclassification cost under a given cost matrix and class prevalence.
- **Histogram binning** — Calibration mapping each score bin to its empirical positive rate.
- **Isotonic regression calibration** — Non-parametric post-hoc calibration fitting a monotone step function to model scores.
- **Operating point** — Specific error-rate pair produced by a chosen decision threshold.
- **Precision at fixed recall** — Precision measured at the threshold that achieves a required recall level.
- **Sharpness** — Concentration of predictive distributions, independent of whether those predictions are calibrated.
- **Threshold tuning** — Selecting the decision cutoff that optimises a chosen objective on validation data.

### Uncertainty and abstention

- **Conformal risk control** — Extension of conformal prediction controlling expected loss rather than miscoverage.
- **Marginal versus conditional coverage** — Whether the coverage guarantee holds on average or within every subgroup.
- **Risk-coverage curve** — Plot of error rate against the fraction of inputs a selective predictor answers.
- **Selective prediction (reject option)** — Allowing a model to abstain when its confidence falls below a threshold.
- **Split conformal prediction** — Conformal variant calibrating nonconformity scores on a held-out calibration set.

### Regression metrics

- **Adjusted R-squared** — R-squared penalised for the number of predictors in the model.
- **Coefficient of determination (R-squared)** — Proportion of target variance explained by the model relative to the mean.
- **Concordance correlation coefficient (CCC)** — Agreement measure combining correlation with deviation from the identity line.
- **Kendall's tau and Spearman correlation** — Rank correlation coefficients measuring monotone association between predicted and actual orderings.
- **Mean absolute error (MAE)** — Regression loss averaging absolute differences between predictions and targets, less sensitive to outliers.
- **Mean absolute percentage error (MAPE)** — Average absolute error expressed as a percentage of the actual value.
- **Mean absolute scaled error (MASE)** — Error scaled by the in-sample mean absolute error of a naive benchmark.
- **Mean bias error** — Average signed difference between predictions and actuals, measuring systematic over- or under-prediction.
- **Mean squared error (MSE)** — Regression loss averaging squared differences between predictions and targets.
- **Quantile loss (pinball loss)** — Asymmetric loss scoring predictions of a specified conditional quantile.
- **Residual analysis** — Inspection of prediction errors for structure, heteroscedasticity or unmodelled signal.
- **Root mean squared error (RMSE)** — Square root of the mean squared forecast error, penalising large deviations heavily.
- **Root mean squared logarithmic error (RMSLE)** — RMSE computed on log-transformed targets, penalising underprediction of large values.
- **Symmetric MAPE (sMAPE)** — Percentage error variant dividing by the average of forecast and actual magnitudes.
- **Weighted absolute percentage error (WAPE)** — Total absolute error divided by total actual volume across the evaluation period.

### Probabilistic forecasting

- **Brier skill score** — Brier score expressed as improvement over a reference or climatological forecast.
- **Continuous ranked probability score (CRPS)** — Integrated squared difference between forecast and observation cumulative distribution functions.
- **Energy score** — Multivariate generalisation of CRPS for joint probabilistic forecasts.
- **Interval score (Winkler score)** — Proper score combining interval width with penalties for observations outside the interval.
- **Logarithmic score** — Negative log density or mass the forecast assigns to the realised outcome.
- **Prediction interval coverage probability (PICP)** — Empirical fraction of observations falling inside the stated prediction intervals.
- **Probability integral transform (PIT)** — Forecast CDF evaluated at the observation, uniform when the forecast is calibrated.
- **Proper scoring rule** — Scoring function minimised in expectation by reporting the true predictive distribution.
- **Rank histogram (Talagrand diagram)** — Histogram of observation ranks within ensemble members, diagnosing ensemble spread.
- **Variogram score** — Multivariate proper score sensitive to forecast dependence structure between components.

### Ranking and retrieval metrics

- **Approximate nearest neighbour recall** — Fraction of true nearest neighbours returned by an approximate vector index.
- **Catalogue coverage and intra-list diversity** — Recommender metrics for breadth of items surfaced and dissimilarity within a result list.
- **Discounted cumulative gain (DCG)** — A graded-relevance metric summing gains discounted logarithmically by rank position.
- **Expected reciprocal rank (ERR)** — Cascade-model ranking metric discounting by the probability the user continues scanning.
- **Hit rate (hits@k)** — Fraction of queries with at least one relevant item in the top k.
- **Mean average precision (MAP)** — The mean across queries of average precision, itself the mean of precision values at each relevant rank.
- **Mean reciprocal rank (MRR)** — The mean over queries of one divided by the rank of the first relevant result.
- **Normalised discounted cumulative gain (nDCG)** — Ranking metric discounting relevance gains by position and normalising by the ideal ordering.
- **Novelty, serendipity and popularity bias** — Recommender metrics for unfamiliarity, pleasant surprise, and over-recommendation of already-popular items.
- **Pooling** — Building judgment sets from the union of top results across multiple systems.
- **Precision@k and Recall@k** — Relevant-item fraction within the top k results, and top-k share of all relevant items.
- **R-precision** — Precision measured at rank equal to the number of relevant documents.
- **Rank-biased precision (RBP)** — Ranking metric weighting positions by a geometric user-persistence parameter.
- **Relevance judgments (qrels)** — Human-assigned relevance labels for query-document pairs used as retrieval ground truth.

### Clustering metrics

- **Elbow method and gap statistic** — Heuristics selecting cluster count from inertia curvature or comparison with a null reference.
- **Normalised and adjusted mutual information (NMI, AMI)** — Information-theoretic partition agreement measures, normalised or additionally corrected for chance.
- **Within-cluster sum of squares (inertia)** — Total squared distance from points to their assigned cluster centroids.

### Segmentation and detection metrics

- **Boundary IoU** — Segmentation metric computing overlap restricted to a band around mask boundaries.
- **COCO mean average precision (mAP@[.5:.95])** — Detection AP averaged over ten IoU thresholds from 0.50 to 0.95.
- **Dice similarity coefficient** — Twice the region overlap divided by the sum of region sizes.
- **Hausdorff distance** — Maximum distance from any point on one boundary to the nearest point on another.
- **Higher order tracking accuracy (HOTA)** — Tracking metric balancing detection and association accuracy in a single score.
- **Intersection over union (IoU, Jaccard index)** — Overlap between predicted and ground-truth regions divided by their union.
- **Mean IoU (mIoU)** — IoU averaged across all semantic classes in a segmentation task.
- **Multiple object tracking accuracy (MOTA)** — Tracking score combining misses, false positives and identity switches per ground-truth object.
- **Panoptic quality (PQ)** — Panoptic metric combining segmentation quality on matched segments with recognition quality.

### Text and speech metrics

- **BERTScore** — Similarity metric matching contextual token embeddings between candidate and reference text.
- **Bits per byte (BPB)** — Tokenizer-independent language-model compression measure of bits needed per byte of text.
- **BLEU** — Machine-translation metric based on clipped n-gram precision with a brevity penalty.
- **BLEURT** — Learned regression metric predicting human translation quality judgments from pretrained encoders.
- **Character error rate (CER)** — Recognition metric measuring character-level edit distance divided by reference length.
- **chrF and chrF++** — Character n-gram F-score metrics for translation, robust to morphology.
- **CIDEr** — Image-captioning metric using TF-IDF-weighted n-gram consensus across multiple references.
- **Diarization error rate (DER)** — Fraction of audio time with missed, false-alarm or wrongly attributed speaker labels.
- **Exact match and token-level F1** — Question-answering metrics scoring whole-string identity and bag-of-token overlap with the reference.
- **MAUVE** — Divergence measure comparing distributions of machine and human text in embedding space.
- **Mean opinion score (MOS)** — Subjective quality rating averaged over human listeners on a fixed scale.
- **METEOR** — Translation metric aligning hypothesis and reference using stems, synonyms and paraphrases.
- **pass@k** — Probability that at least one of k sampled generations passes the task's tests.
- **PESQ and STOI** — Objective speech-quality and intelligibility measures predicting listener perception of degraded audio.
- **ROUGE** — Summarisation metric family measuring n-gram, longest-common-subsequence or skip-bigram recall against references.
- **SacreBLEU** `[tool]` — Standardised BLEU implementation fixing tokenisation to make scores comparable across papers.
- **Scale-invariant signal-to-distortion ratio (SI-SDR)** — Source-separation metric measuring target energy versus distortion, invariant to output scaling.
- **Self-BLEU and distinct-n** — Diversity metrics measuring similarity among generations and the ratio of unique n-grams.
- **SPICE** — Captioning metric comparing scene-graph propositions parsed from candidate and reference captions.
- **Translation edit rate (TER)** — Number of edits needed to change a hypothesis into a reference, normalised by length.
- **Word error rate (WER)** — Transcription metric summing substitutions, deletions and insertions divided by reference word count.

### Generative media metrics

- **CLIPScore** — Metric scoring image-text alignment by cosine similarity of contrastive vision-language embeddings.
- **Density and coverage** — Manifold-estimation metrics improving robustness of generative precision and recall to outliers.
- **Fréchet Audio Distance (FAD)** — FID analogue over audio embeddings, scoring generated audio against a reference set.
- **Fréchet DINOv2 distance (FDD)** — FID computed on self-supervised DINOv2 features rather than ImageNet Inception features.
- **Fréchet Inception Distance (FID)** — Generative image metric comparing Gaussian statistics of real and generated feature distributions.
- **Fréchet Video Distance (FVD)** — FID analogue using spatiotemporal video features to score generated video realism.
- **Generative precision and recall** — Paired metrics separating sample fidelity from coverage of the real data manifold.
- **Human preference reward models** `[tool]` — Learned scorers such as PickScore, HPSv2 and ImageReward predicting human ranking of generated images.
- **Inception Score (IS)** — Image-generation score rewarding confident classification and class diversity under an ImageNet classifier.  ⚠ *Largely superseded by FID and embedding-distance metrics; retained mainly for historical comparison.*
- **Kernel Inception Distance (KID)** — Unbiased maximum-mean-discrepancy alternative to FID requiring fewer samples and no Gaussian assumption.
- **LPIPS, SSIM and PSNR** — Reference-based image similarity measures: learned perceptual, structural, and signal-to-noise respectively.

### LLM and RAG evaluation

- **Answer relevancy** — Metric scoring how directly the generated answer addresses the user's question.
- **Attack success rate (ASR)** — Fraction of adversarial prompts that succeed in eliciting the targeted disallowed behaviour.
- **Context precision** — The share of retrieved context passages that actually support the generated answer in a RAG evaluation.
- **Context recall** — The share of information needed for the reference answer that the retrieved context contains.
- **Elo rating and Bradley-Terry model** — Latent-strength models converting pairwise win records into a single comparable score per system.
- **Faithfulness** — Degree to which a response is entailed by the supplied context, independent of real-world truth.
- **G-Eval** — Judge framework prompting a model for chain-of-thought criteria then producing probability-weighted scores.
- **Groundedness and attribution** — Whether generated statements are traceable to, and entailed by, cited source passages.
- **Hallucination rate** — Proportion of generated outputs containing unsupported or fabricated factual claims.
- **Length-controlled win rate** — Preference score statistically adjusted to remove the advantage of longer responses.
- **LLM-as-a-judge** — Using a language model to score or compare outputs in place of human raters.
- **Needle-in-a-haystack test** — Probe inserting a specific fact into long context and testing whether the model recovers it.
- **Over-refusal rate** — Proportion of benign requests a model incorrectly declines to answer.
- **Pairwise preference evaluation (win rate)** — Scoring by how often one system's output is preferred over another's.
- **Position bias** — Distortion where a user's click probability depends on rank position rather than relevance.
- **Red teaming** — Adversarial probing of a model to elicit harmful or policy-violating behaviour before deployment.
- **Rubric-based grading** — Scoring outputs against an explicit written criteria checklist rather than holistic preference.
- **Self-preference bias** — Judge tendency to favour outputs generated by itself or its own model family.
- **Task success rate** — Fraction of end-to-end agent episodes reaching a verified goal state.
- **Trajectory evaluation** — Scoring an agent's intermediate steps and tool calls, not only its final answer.
- **Verbosity bias** — Judge tendency to prefer longer answers independent of their correctness.

### Validation and splitting

- **Adversarial validation** — Training a classifier to distinguish train from test data, detecting distribution shift.
- **Backtesting** — Evaluating a forecasting strategy by replaying it over historical data as if in production.
- **Combinatorial purged cross-validation (CPCV)** — Purged scheme testing many train-test path combinations to estimate backtest distribution.
- **Expanding versus sliding window** — Temporal validation using all past data versus a fixed-length recent window.
- **Group k-fold and leave-one-group-out** — Splits keeping all records of an entity together so groups never span folds.
- **Monte Carlo cross-validation (shuffle-split)** — Repeated random train-test partitions with independently drawn splits each iteration.
- **Out-of-time validation** — Evaluation on a held-out period after the training window to test temporal stability.
- **Purged cross-validation with embargo** — Financial split removing training samples whose label horizons overlap or immediately follow the test fold.
- **Repeated k-fold cross-validation** — Running k-fold multiple times with different partitions to reduce split variance.
- **Stratified group k-fold** — Split preserving both class balance and group integrity across folds.
- **Time series split (rolling origin)** — Validation always training on earlier periods and testing on strictly later periods.
- **Train-validation-test split** — Partitioning data into fitting, model-selection and final unbiased-estimation subsets.
- **Walk-forward validation** — Repeated retraining and one-step-ahead testing as the evaluation origin advances through time.

### Leakage and overfitting

- **Adaptive overfitting to the validation set** — Degradation of held-out validity caused by repeatedly reusing the same set for decisions.
- **Benchmark contamination** — Public evaluation items present in a model's pretraining corpus, invalidating reported scores.
- **Bias-variance tradeoff** — Decomposition of expected error into systematic bias, sensitivity to training samples, and noise.
- **Duplicate and near-duplicate contamination** — Repeated or paraphrased records spanning train and test, inflating apparent generalisation.
- **Early stopping** — Halting training once validation performance stops improving for a set number of evaluations.
- **Generalisation gap** — Difference between in-sample training performance and held-out test performance.
- **Group leakage** — Records from the same entity appearing in both training and evaluation splits.
- **Leaderboard overfitting** — Community-level tuning to a public test set, inflating scores relative to true capability.
- **Preprocessing leakage** — Fitting scalers, encoders or imputers on the full dataset before splitting.
- **Temporal leakage (look-ahead bias)** — Training on data recorded after the prediction timestamp being simulated.
- **Winner's curse (model selection bias)** — Upward bias in the reported performance of the best model chosen among many.

### Statistical inference

- **Bayesian A/B testing** — Inference reporting posterior probability of superiority and expected loss rather than p-values.
- **Chi-squared and Fisher's exact tests** — Contingency-table tests of association, the latter exact for small counts.
- **Clustered standard errors** — Variance estimates accounting for correlation among observations within randomisation clusters.
- **Cohen's d and Hedges' g** — Standardised mean differences between two groups, the latter corrected for small samples.
- **Credible interval and region of practical equivalence (ROPE)** — Bayesian posterior interval, and a null range treated as practically no effect.
- **Delta method** — Variance approximation for a nonlinear function of estimates, used for ratio metrics.
- **Equivalence testing (TOST)** — Two one-sided tests establishing that an effect lies within a predefined negligible range.
- **Friedman test with Nemenyi post-hoc** — Rank-based procedure comparing multiple algorithms across many datasets.
- **Mann-Whitney U and Wilcoxon signed-rank tests** — Non-parametric tests comparing distributions for independent and paired samples respectively.
- **McNemar's test** — Paired test comparing two classifiers on discordant predictions over the same items.
- **Minimum detectable effect (MDE)** — Smallest true effect a design can detect with specified power and significance level.
- **Non-inferiority test** — Test establishing a treatment is not worse than control by more than a margin.
- **Null hypothesis significance testing (NHST)** — Framework rejecting a no-effect hypothesis when observed data are sufficiently improbable under it.
- **Power analysis (sample size calculation)** — Determining the sample size needed for a target power at a specified effect size.
- **Randomisation inference** — Inference based on the physical randomisation scheme rather than a sampling model.
- **Two-proportion z-test** — Large-sample test comparing conversion rates between two independent groups.
- **Type I and Type II error** — Falsely rejecting a true null, and failing to reject a false null.
- **Welch's t-test** — Two-sample mean comparison that does not assume equal group variances.

### Multiple comparisons

- **Benjamini-Yekutieli procedure** — FDR control valid under arbitrary dependence between test statistics.
- **Holm-Bonferroni and Šidák procedures** — Stepwise and independence-based FWER corrections that are uniformly more powerful than Bonferroni.
- **p-hacking and the garden of forking paths** — Selectively choosing analyses or subgroups until a significant result appears.
- **Pre-registration** — Committing to hypotheses, metrics and analysis plan before data are collected.
- **Storey q-value** — Per-hypothesis FDR analogue of the p-value using an estimated null proportion.

### A/B testing

- **A/A test** — Experiment with identical variants, used to validate assignment and false-positive rates.
- **A/B test (online randomised controlled trial)** — Randomly assigning live traffic to variants to estimate causal effect on metrics.
- **Bucketing (hash-based assignment)** — Deterministically mapping unit identifiers to variants via a salted hash function.
- **Cluster randomisation** — Assigning whole groups rather than individuals to contain interference between units.
- **CUPAC** — Variance reduction using a machine-learned prediction of the metric as the control covariate.
- **CUPED (controlled experiments using pre-experiment data)** — Variance reduction regressing the metric on pre-period covariates before comparing variants.
- **Graph cluster randomisation** — Partitioning a social graph into clusters before randomising, reducing cross-variant contamination.
- **Long-term holdback** — Small population kept on control for months to measure durable treatment effects.
- **Network interference (spillover)** — Treatment of one unit affecting outcomes of other units, violating SUTVA.
- **Novelty and primacy effects** — Temporary behaviour changes from a variant's newness or from user habituation to the old experience.
- **Ramp-up (staged rollout)** — Gradually increasing the treatment traffic share while monitoring guardrails.
- **Randomisation unit** — Entity assigned to a variant, such as user, session, device or cluster.
- **Sample ratio mismatch (SRM)** — Observed traffic split differing significantly from the intended allocation, signalling an assignment bug.
- **Simpson's paradox** — Aggregate effect direction reversing when data are broken into subgroups.
- **Stable unit treatment value assumption (SUTVA)** — Assumption that a unit's outcome depends only on its own assigned treatment.
- **Stratification and post-stratification** — Balancing or reweighting by covariate strata to reduce estimator variance.
- **Switchback experiment** — Alternating an entire market or system between variants over time intervals.
- **Triggered analysis and trigger dilution** — Restricting analysis to units that reached the treated surface, avoiding effect dilution by untriggered users.
- **Twyman's law** — Principle that surprisingly good experiment results are usually measurement or instrumentation errors.
- **Winsorisation and outlier capping** — Bounding extreme metric values to limit variance from heavy-tailed user behaviour.

### Experiment metric design

- **Guardrail metric** — Metric monitored to ensure a change does not harm a critical dimension.
- **Metric degradation criteria** — Pre-agreed thresholds at which a guardrail regression blocks or reverses a launch.
- **Metric sensitivity** — A metric's ability to detect real treatment effects at realistic sample sizes.
- **North star and driver metrics** — Single top-level success measure and the intermediate metrics believed to move it.
- **Overall evaluation criterion (OEC)** — Single agreed metric, often composite, used to declare an experiment a win.
- **Surrogate (proxy) metric** — Short-term measurable quantity standing in for a slow or expensive long-term outcome.
- **Surrogate index** — Statistically validated combination of short-term metrics predicting the long-term outcome of interest.

### Sequential and adaptive testing

- **Alpha spending function** — Rule allocating the total error budget across planned interim looks.
- **Best-arm identification** — Pure-exploration setting minimising samples needed to identify the optimal arm confidently.
- **Confidence sequence** — Sequence of intervals covering the parameter simultaneously at all times with stated probability.
- **Cumulative regret** — Total reward lost relative to always playing the best arm.
- **e-value and e-process** — Non-negative evidence statistic with expectation at most one under the null, supporting optional stopping.
- **Futility stopping** — Terminating an experiment early when a meaningful effect has become implausible.
- **Group sequential design** — Pre-planned interim analyses with adjusted boundaries preserving overall Type I error.
- **Mixture sequential probability ratio test (mSPRT)** — Always-valid test averaging the likelihood ratio over a prior on effect size.
- **O'Brien-Fleming and Pocock boundaries** — Group-sequential stopping boundaries: conservative early, versus constant across all interim looks.
- **Peeking problem** — Inflated false positives from repeatedly testing accumulating data with fixed-horizon methods.
- **Sequential probability ratio test (SPRT)** — Wald's test accumulating a likelihood ratio until it crosses an acceptance or rejection boundary.
- **Test martingale** — Wealth process under the null used to build anytime-valid tests via betting.

### Offline-online evaluation

- **Canary release** — Exposing a change to a small traffic slice while monitoring health signals before full rollout.
- **Champion-challenger** — Arrangement where candidate models run against the incumbent and replace it on sustained metric wins.
- **Direct method** — Off-policy estimate obtained purely from a learned reward model over logged contexts.
- **Doubly robust off-policy estimator** — Combines a reward model with importance weighting, consistent if either component is correct.
- **Interleaving** — Online comparison mixing two rankers' results in one list and attributing clicks.
- **Inverse propensity scoring (IPS)** — Reweighting logged interactions by inverse exposure probability to obtain unbiased estimates.
- **Off-policy evaluation (OPE)** — Estimating a new policy's online value from data logged under a different policy.
- **Offline evaluation** — Scoring a model on held-out or curated datasets before any live traffic is exposed.
- **Offline-online gap** — Discrepancy between held-out metric improvements and the effects observed in live experiments.
- **Probabilistic interleaving and multileaving** — Interleaving variants sampling from ranker distributions and comparing more than two rankers simultaneously.
- **Replay evaluation** — Scoring a policy on logged uniformly-random exposures whose actions the policy would have chosen.
- **Self-normalised IPS (SNIPS)** — IPS variant dividing by the sum of weights to reduce variance at some bias cost.
- **Shadow deployment** — Running a candidate model on live traffic while logging its predictions and serving only the incumbent.
- **Team-draft and balanced interleaving** — Interleaving schemes assigning result slots by alternating drafts or by rank-position balancing.

### Causal foundations

- **Attrition bias** — Distortion arising when dropout from the study differs systematically across arms.
- **Average treatment effect (ATE)** — Mean difference in potential outcomes across the whole population.
- **Average treatment effect on the treated (ATT)** — Mean effect restricted to units that actually received treatment.
- **Complier average causal effect (CACE)** — Causal effect among units who comply with their assigned treatment.
- **Conditional average treatment effect (CATE)** — Expected treatment effect as a function of observed unit covariates.
- **Counterfactual** — Outcome that would have occurred under a treatment the unit did not receive.
- **Encouragement design** — Experiment randomising an inducement to take treatment rather than treatment itself.
- **Fundamental problem of causal inference** — Only one potential outcome per unit is ever observed, so effects must be inferred.
- **Individual treatment effect (ITE)** — Difference between a single unit's two potential outcomes.
- **Intention-to-treat (ITT)** — Effect of assignment to treatment regardless of whether it was actually taken.
- **Local average treatment effect (LATE)** — Treatment effect identified for compliers whose treatment status responds to an instrument.
- **Potential outcomes framework (Rubin causal model)** — Defining causal effects as contrasts between outcomes a unit would have under each treatment.

### Causal identification

- **Adjustment set** — Set of variables that, once conditioned on, yields an unbiased effect estimate.
- **Backdoor criterion** — Graphical condition identifying a covariate set that blocks all confounding paths.
- **Causal discovery** — Learning causal graph structure from observational or interventional data.
- **Coarsened exact matching (CEM)** — Matching on coarsened covariate bins to guarantee balance before estimation.
- **Collider and collider bias** — Common effect of two variables; conditioning on it induces spurious association between them.
- **Confounder** — Common cause of both treatment and outcome that biases naive comparisons.
- **Covariate balance and standardised mean difference** — Diagnostics checking whether adjustment equalised covariate distributions across treatment groups.
- **Cross-fitting** — Fitting nuisance models on separate folds from effect estimation to remove overfitting bias.
- **d-separation** — Graphical criterion determining which conditional independencies a DAG implies.
- **do-operator and do-calculus** — Notation for intervention, with rules for reducing interventional queries to observational quantities.
- **Double machine learning (DML)** — Orthogonalised estimation using ML nuisance models plus cross-fitting for valid effect inference.
- **Doubly robust estimation (AIPW)** — Combines outcome regression with propensity weighting; consistent if either model is correct.
- **E-value (sensitivity analysis)** — Minimum confounder-outcome and confounder-treatment association needed to explain away an observed effect.
- **Faithfulness assumption** — Assumption that all conditional independencies in the data arise from the graph structure.
- **Frontdoor criterion** — Identification strategy using a fully mediating variable when confounders are unobserved.
- **G-computation (standardisation)** — Predicting outcomes under each treatment for every unit and averaging the contrast.
- **Greedy equivalence search (GES)** — Score-based causal structure search over Markov equivalence classes of DAGs.
- **Inverse probability of treatment weighting (IPTW)** — Weighting units by the inverse propensity to construct a pseudo-randomised population.
- **LiNGAM** — Structure learning exploiting linear non-Gaussian noise to orient causal edges uniquely.
- **Marginal structural model** — Weighted model for the marginal causal effect of time-varying treatments.
- **Markov equivalence class (CPDAG)** — Set of DAGs implying identical conditional independencies, representable as a partially directed graph.
- **Mediator and mediation analysis** — Variable on the causal path, and decomposition of effects into direct and indirect parts.
- **Moderator** — Variable that changes the magnitude or sign of a treatment effect.
- **Negative control outcome** — Variable that cannot be caused by treatment, used to detect residual confounding.
- **NOTEARS** — Causal structure learning recast as continuous optimisation with a smooth acyclicity constraint.
- **PC and FCI algorithms** — Constraint-based structure learners; FCI additionally allows unobserved latent confounders.
- **Placebo and refutation tests** — Falsification checks re-running the analysis where no effect should be found.
- **Positivity (overlap)** — Assumption that every covariate profile has non-zero probability of each treatment.
- **Propensity score** — Probability of receiving treatment conditional on observed covariates.
- **Propensity score matching** — Pairing treated and control units with similar propensity scores before comparing outcomes.
- **Rosenbaum sensitivity bounds** — Analysis quantifying how strong hidden bias must be to overturn a conclusion.
- **Structural causal model (SCM)** — System of structural equations plus exogenous noise defining interventional and counterfactual distributions.
- **Targeted maximum likelihood estimation (TMLE)** — Semiparametric procedure updating an initial outcome estimate toward the target causal parameter.
- **Unconfoundedness (ignorability)** — Assumption that treatment is independent of potential outcomes given observed covariates.

### Quasi-experimental designs

- **Bayesian structural time series causal impact** — Counterfactual forecast from control series used to estimate a post-intervention effect.
- **Callaway-Sant'Anna estimator** — Group-time DiD estimator valid under staggered adoption and heterogeneous effects.
- **Difference-in-differences (DiD)** — Comparing pre-post changes in treated versus untreated groups to remove fixed differences.
- **Event study (dynamic DiD)** — Estimating treatment effects by period relative to adoption, testing pre-trends.
- **Exclusion restriction** — Assumption that the instrument has no direct effect on the outcome.
- **Geo experiment (geo lift test)** — Randomising treatment across geographic regions to measure incremental effect on aggregate outcomes.
- **Goodman-Bacon decomposition** — Breaking a TWFE estimate into weighted two-group comparisons to expose problematic contrasts.
- **Instrumental variable (IV)** — Variable affecting treatment but influencing the outcome only through it.
- **Interrupted time series** — Estimating an intervention effect from a level or slope change in one series.
- **Parallel trends assumption** — Assumption that treated and control outcomes would have moved identically absent treatment.
- **Regression discontinuity design (RDD)** — Exploiting a treatment assignment cutoff on a running variable to identify local effects.
- **Sharp versus fuzzy RDD** — Whether crossing the cutoff determines treatment exactly or only changes its probability.
- **Synthetic control method** — Constructing a weighted combination of untreated units to mimic the treated unit's counterfactual.
- **Synthetic difference-in-differences** — Estimator combining unit and time weighting from synthetic control with DiD differencing.
- **Two-stage least squares (2SLS)** — IV estimator regressing treatment on the instrument, then outcome on fitted treatment.
- **Two-way fixed effects (TWFE)** — Regression with unit and time fixed effects, biased under staggered heterogeneous treatment timing.
- **Weak instrument** — Instrument only mildly correlated with treatment, producing biased and imprecise IV estimates.

### Uplift and heterogeneous effects

- **Area under the uplift curve (AUUC)** — Scalar summary of how well predicted uplift ranks genuinely responsive units.
- **Causal forest** — Random-forest estimator splitting to maximise heterogeneity in estimated treatment effects.
- **DR-learner** — Meta-learner regressing doubly robust pseudo-outcomes on covariates to estimate CATE.
- **Generalized random forest (GRF)** — Forest framework producing locally weighted solutions to moment conditions, including causal effects.
- **Persuadables, sure things, lost causes and sleeping dogs** — Four response segments defined by outcomes with and without treatment.
- **Policy learning and policy value estimation** — Learning a treatment assignment rule and estimating the value it would achieve.
- **Qini curve and Qini coefficient** — Cumulative incremental gain from targeting by predicted uplift, and its normalised area.
- **R-learner** — Meta-learner estimating CATE by minimising a Robinson-residualised loss.
- **S-learner** — Meta-learner fitting one model with treatment as a feature and differencing predictions.
- **T-learner (two-model approach)** — Meta-learner fitting separate outcome models per treatment arm and subtracting them.
- **Uplift modelling (incrementality modelling)** — Predicting the change in outcome probability caused by treating an individual.
- **Uplift tree** — Decision tree splitting on divergence between treatment and control outcome distributions.
- **X-learner** — Meta-learner imputing individual effects per arm then combining them with propensity weights.

### Benchmarks and leaderboards

- **AgentBench** `[tool]` — Multi-environment benchmark evaluating LLM agents across operating system, database, game and web tasks.
- **AlpacaEval** `[tool]` — Automated instruction-following benchmark whose current version reports length-controlled win rates.
- **ARC-AGI and ARC-AGI-2** `[tool]` — Abstract visual reasoning benchmarks testing few-shot induction of novel grid transformation rules.
- **Arena-Hard** `[tool]` — Automatically curated hard prompt set derived from arena traffic for judge-based evaluation.
- **BBQ, StereoSet, CrowS-Pairs and WinoBias** `[tool]` — Benchmarks probing social bias and stereotype preference in language models.
- **BEIR** `[tool]` — A heterogeneous benchmark suite measuring zero-shot retrieval quality across many domains and task types.
- **Berkeley Function Calling Leaderboard (BFCL)** `[tool]` — Benchmark and leaderboard measuring function-calling correctness across single, parallel and multi-turn settings.
- **BIG-bench and BIG-Bench Hard** `[tool]` — Large collaborative task suite, with a subset of tasks where models trailed humans.
- **BigCodeBench** `[tool]` — Code benchmark requiring compositional use of many external libraries and function calls.
- **Chatbot Arena (LMArena)** `[tool]` — Crowdsourced blind pairwise comparison platform producing Elo-style rankings of chat models.
- **Dynabench** `[tool]` — Platform for dynamic adversarial benchmark creation with humans in the loop.
- **FrontierMath** `[tool]` — Benchmark of unpublished research-level mathematics problems with automatically verifiable answers.
- **GAIA** `[tool]` — General assistant benchmark of multi-step tasks requiring browsing, file handling and tool use.
- **GenEval and T2I-CompBench** `[tool]` — Text-to-image benchmarks scoring compositional prompt adherence such as counting and attribute binding.
- **GLUE** `[tool]` — Nine-task English natural language understanding benchmark with a public leaderboard.  ⚠ *Saturated; superseded by SuperGLUE and later by MMLU-family and reasoning benchmarks.*
- **GPQA (and GPQA Diamond)** `[tool]` — Graduate-level science questions written to resist web search, with a hardest curated subset.
- **GSM8K and MATH** `[tool]` — Grade-school word problem and competition mathematics benchmarks.  ⚠ *GSM8K is saturated at the frontier; AIME, HMMT and FrontierMath now serve as discriminating replacements.*
- **HarmBench and AgentHarm** `[tool]` — Standardised red-teaming benchmarks for refusal robustness in chat and agentic settings.
- **HealthBench, MedQA and LegalBench** `[tool]` — Domain-specific benchmarks for clinical conversation quality, medical licensing questions and legal reasoning.
- **HellaSwag, WinoGrande and PIQA** `[tool]` — Commonsense reasoning benchmarks for sentence completion, pronoun resolution and physical plausibility.
- **HELM** `[tool]` — Stanford framework evaluating models across many scenarios and metrics beyond accuracy.
- **HumanEval and MBPP** `[tool]` — Function-level Python code generation benchmarks scored by unit tests.  ⚠ *Saturated; SWE-bench Verified, LiveCodeBench and BigCodeBench are the current discriminating code benchmarks.*
- **Humanity's Last Exam (HLE)** `[tool]` — Expert-written multi-domain exam designed to remain unsaturated by frontier models.
- **ImageNet, COCO, ADE20K and Cityscapes** `[tool]` — Standard vision datasets for classification, detection and captioning, and semantic or urban scene segmentation.
- **LibriSpeech, Common Voice and FLEURS** `[tool]` — Speech recognition corpora for read English, crowdsourced multilingual speech, and many-language evaluation.
- **LiveCodeBench** `[tool]` — Contamination-resistant coding benchmark drawing continuously from newly published contest problems.
- **MathVista, ChartQA and DocVQA** `[tool]` — Multimodal benchmarks for visual mathematics, chart reasoning and document question answering.
- **METR task suite and time horizons** `[tool]` — Autonomy evaluations reporting the human task duration an agent can reliably complete.
- **MLE-bench** `[tool]` — Benchmark measuring agent performance on end-to-end machine learning engineering competitions.
- **MLPerf** `[tool]` — Industry benchmark suite measuring training and inference throughput and latency of ML systems.
- **MMBench and MMStar** `[tool]` — Multiple-choice vision-language benchmarks, the latter filtered against vision-independent shortcuts.
- **MMLU** `[tool]` — Multiple-choice benchmark spanning fifty-seven academic and professional subjects.  ⚠ *Largely saturated at the frontier; MMLU-Pro is the standard harder replacement.*
- **MMLU-Pro** `[tool]` — Harder MMLU revision with more answer options and reasoning-heavy, cleaned questions.
- **MMMU** `[tool]` — Multimodal benchmark of college-level questions requiring joint image and text reasoning.
- **MS MARCO and TREC Deep Learning Track** `[tool]` — Large-scale passage and document ranking datasets and their annual evaluation campaign.
- **MT-Bench** `[tool]` — Multi-turn question set graded by a strong model judge across eight categories.
- **MTEB and MMTEB** `[tool]` — Massive text embedding benchmarks covering many tasks, with a multilingual extension.
- **Natural Questions, TriviaQA and HotpotQA** `[tool]` — Open-domain question answering benchmarks for real queries, trivia, and multi-hop reasoning.
- **Open ASR Leaderboard** `[tool]` — Hugging Face leaderboard ranking speech recognition models by word error rate across datasets.
- **OSWorld** `[tool]` — Benchmark evaluating computer-use agents on open-ended desktop tasks in real operating systems.
- **Papers with Code leaderboards** `[tool]` — Community-maintained index linking papers to datasets and state-of-the-art result tables.  ⚠ *Shut down in 2025; content redirected to Hugging Face.*
- **RULER and LongBench** `[tool]` — Long-context benchmarks measuring effective context length and long-document task performance.
- **SQuAD and SQuAD 2.0** `[tool]` — Extractive reading-comprehension datasets, the second adding unanswerable questions.
- **SuperGLUE** `[tool]` — Harder successor to GLUE covering inference, coreference and question answering tasks.  ⚠ *Considered solved; superseded by MMLU-Pro, GPQA, ARC-AGI and similar frontier benchmarks.*
- **SWE-bench and SWE-bench Verified** `[tool]` — Real GitHub issue-resolution benchmark, with a human-validated solvable subset.
- **tau-bench** `[tool]` — Benchmark evaluating tool-using agents in simulated customer interactions under domain policies.
- **Terminal-Bench** `[tool]` — Benchmark evaluating agents on command-line tasks inside real terminal environments.
- **VBench** `[tool]` — Video generation benchmark decomposing quality into many automatically scored disentangled dimensions.
- **Video-MME and MVBench** `[tool]` — Benchmarks evaluating multimodal models on video understanding and temporal reasoning.
- **WebArena and VisualWebArena** `[tool]` — Self-hosted realistic websites for evaluating text-based and multimodal browser agents.
- **XTREME and FLORES-200** `[tool]` — Multilingual transfer benchmark and a 200-language machine translation evaluation set.

### Evaluation tooling

- **CausalImpact** `[tool]` — Google library estimating intervention effects using Bayesian structural time series counterfactuals.
- **CausalML** `[tool]` — Uber library implementing uplift modelling and meta-learner treatment effect estimators.
- **CausalPy** `[tool]` — PyMC-based library for Bayesian quasi-experimental analysis including synthetic control and regression discontinuity.
- **DoubleML** `[tool]` — Python and R package implementing double machine learning estimators with cross-fitting.
- **DoWhy** `[tool]` — PyWhy Python library structuring causal inference into modelling, identification, estimation and refutation.
- **EconML** `[tool]` — Microsoft library for heterogeneous treatment effect estimation using machine learning and econometrics.
- **Eppo** `[tool]` — Warehouse-native experimentation platform computing metrics directly on the customer's data warehouse.
- **grf (generalized random forests)** `[tool]` — R package implementing causal forests and other forest-based local moment estimators.
- **GrowthBook** `[tool]` — Open-source feature flagging and A/B testing platform with a built-in statistics engine.
- **LM Evaluation Harness** `[tool]` — EleutherAI framework running standardised few-shot benchmark suites against language models.
- **Optimizely** `[tool]` — Commercial web and feature experimentation platform with always-valid sequential statistics.
- **scikit-learn metrics module** `[tool]` — Reference Python implementations of classification, regression, clustering and ranking metrics.
- **Statsig** `[tool]` — Commercial experimentation and feature management platform with sequential and CUPED analysis.
- **Tetrad** `[tool]` — Long-running causal discovery toolkit implementing constraint-based and score-based structure search algorithms.
- **TorchMetrics** `[tool]` — PyTorch-native, distributed-aware metric implementations for training and evaluation loops.

## Deep learning fundamentals, training and systems
*316 terms*

### Network primitives

- **Artificial neuron** — Basic unit computing a weighted sum of inputs plus a bias, then applying a nonlinear activation.
- **Bias** — Learnable additive offset applied to a unit's weighted sum before its activation function.
- **Convolutional layer** — Layer applying learnable filters that slide across the input, sharing weights across spatial positions.
- **Fully connected layer** — Layer in which every output unit connects to every input unit through a learnable weight matrix.
- **Gated recurrent unit (GRU)** — Recurrent cell with update and reset gates, simpler than LSTM and using fewer parameters.
- **Layer** — Group of units applying one parameterised transformation to an input tensor inside a network.
- **Logits** — Unnormalised per-token scores over the vocabulary produced before softmax conversion into probabilities.
- **Long short-term memory (LSTM)** — Recurrent cell with an additive memory cell and multiplicative gates that mitigates vanishing gradients.
- **Multilayer perceptron (MLP)** — Feedforward network of stacked fully connected layers separated by nonlinear activation functions.
- **Pre-activation** — Linear output of a unit before the activation function is applied to it.
- **Recurrent layer** — Layer carrying a hidden state across sequence positions and reusing the same weights each step.
- **Residual connection** — Identity shortcut adding a block's input to its output so gradients flow through deep stacks.
- **Universal approximation theorem** — Result that sufficiently wide one-hidden-layer networks approximate any continuous function on a compact domain.
- **Weight** — Learnable scalar scaling an input connection, adjusted during training to reduce the loss.
- **Weight tying** — Sharing a single parameter matrix between two layers, typically input embedding and output projection.

### Activations

- **Activation function** — Elementwise nonlinearity applied to a layer's pre-activations, giving the network non-linear expressive power.
- **Bilinear GLU** — Gated linear unit with no nonlinearity on the gate, multiplying two linear projections directly.
- **Continuously differentiable ELU (CELU)** — ELU reparameterisation that remains continuously differentiable at the origin for all slope settings.
- **Entmax** — Parameterised family interpolating between softmax and sparsemax, controlling output sparsity by an exponent.
- **Exponential linear unit (ELU)** — Activation that is linear for positive inputs and a saturating exponential for negative inputs.
- **Gated linear unit (GLU)** — Layer multiplying one linear projection elementwise by a sigmoid-gated second projection of the same input.
- **Gaussian error linear unit (GELU)** — Activation weighting an input by the standard normal cumulative distribution evaluated at that input.
- **GEGLU** — Gated linear unit variant whose gating branch uses GELU instead of the sigmoid.
- **Gumbel-softmax** — Continuous relaxation of categorical sampling permitting gradients to flow through discrete choices.
- **Hard sigmoid** — Piecewise-linear approximation of the sigmoid, cheaper to evaluate on constrained hardware.
- **Hard swish** — Piecewise-linear approximation of SiLU using a hard sigmoid, designed for mobile inference.
- **Hyperbolic tangent (tanh)** — Zero-centred sigmoidal activation mapping real inputs into the interval between minus one and one.
- **Leaky ReLU** — ReLU variant with a small fixed positive slope for negative inputs instead of zero.
- **Log-softmax** — Numerically stable logarithm of softmax, used directly with negative log-likelihood objectives.
- **Maxout** — Activation returning the maximum over several parallel linear projections of the same input.
- **Mish** — Smooth self-gated activation multiplying the input by the tanh of its softplus.
- **Parametric ReLU (PReLU)** — Leaky ReLU whose negative-region slope is a learned parameter rather than a fixed constant.
- **Randomised leaky ReLU (RReLU)** — Leaky ReLU whose negative slope is sampled randomly during training and fixed at inference.
- **Rectified linear unit (ReLU)** — Activation returning the input when positive and zero otherwise.
- **ReGLU** — Gated linear unit variant whose gating branch uses ReLU.
- **ReLU6** — ReLU clipped at an upper bound of six, keeping activations in a fixed low-precision-friendly range.
- **Scaled exponential linear unit (SELU)** — Scaled ELU variant whose fixed constants drive activations toward zero mean and unit variance.
- **Sigmoid (logistic)** — Activation squashing any real input into the open interval between zero and one.
- **Sigmoid linear unit (SiLU / Swish)** — Activation multiplying the input by its own sigmoid, giving a smooth non-monotonic curve.
- **Snake** — Periodic activation adding a squared sine term to the identity, aiding extrapolation of periodic signals.
- **Softmax** — Function turning a logit vector into a probability distribution via normalised exponentials.
- **Softplus** — Smooth everywhere-positive approximation of ReLU given by the logarithm of one plus the exponential.
- **Softsign** — Sigmoidal activation dividing the input by one plus its absolute value, saturating polynomially.
- **Sparsemax** — Softmax alternative projecting logits onto the probability simplex, allowing exactly zero probabilities.
- **Squared ReLU** — Activation squaring the ReLU output, producing sparser and sharper responses in feedforward blocks.
- **SwiGLU** — Gated feed-forward activation combining a Swish-gated branch with a linear branch, standard in modern decoders.
- **xIELU** — Trainable piecewise activation obtained by integrating learned affine transformations applied to the ELU function.

### Initialisation

- **Fan-in and fan-out** — Counts of incoming and outgoing connections of a unit, used to set initialisation variance.
- **Fixup initialisation** — Depth-aware rescaling of residual branches that enables stable deep training without normalisation layers.
- **He (Kaiming) initialisation** — Variance scaling by fan-in with a factor of two, matched to rectifier activations.
- **LayerScale** — Per-channel learnable scaling initialised near zero on residual branch outputs, stabilising very deep transformers.
- **LeCun initialisation** — Variance scaling by fan-in alone, the basis for self-normalising SELU networks.
- **LSUV initialisation** — Data-dependent scheme rescaling orthogonally initialised layers so each layer's output has unit variance.
- **Maximal update parameterisation (muP)** — Width-dependent scaling of initialisation, learning rates and multipliers keeping feature updates stable as width grows.
- **muTransfer** — Practice of tuning hyperparameters on a small model and transferring them to a wider one under muP.
- **Orthogonal initialisation** — Initialising weight matrices as orthogonal matrices to preserve gradient norms through depth.
- **Residual branch scaling** — Dividing residual branch outputs by a function of depth so accumulated variance stays bounded.
- **ReZero** — Initialising a learnable scalar gate on each residual branch to zero, starting the network as identity.
- **Truncated normal initialisation** — Gaussian initialisation with samples beyond a cutoff resampled, avoiding extreme starting weights.
- **Variance scaling** — Initialisation principle setting weight variance inversely to layer width to preserve signal magnitude.
- **Weight initialisation** — Choice of starting parameter values, controlling signal and gradient scale at the first training steps.
- **Xavier (Glorot) initialisation** — Variance scaling using the average of fan-in and fan-out, suited to symmetric saturating activations.

### Normalisation

- **Adaptive instance normalisation (AdaIN)** — Instance normalisation whose affine scale and shift are predicted from a conditioning signal.
- **Batch normalisation** — Normalising each feature using mean and variance computed across the current mini-batch, then applying learned affine parameters.
- **DeepNorm** — Post-norm scheme scaling the residual path by a depth-dependent constant, enabling very deep transformers.
- **Dynamic Tanh (DyT)** — Normalisation replacement applying a scaled tanh with learned parameters instead of computing activation statistics.
- **Ghost batch normalisation** — Computing batch statistics over fixed-size virtual sub-batches independent of the actual batch size.
- **Group normalisation** — Normalising within fixed groups of channels per sample, independent of batch size.
- **Input standardisation** — Preprocessing that rescales input features to zero mean and unit variance before the first layer.
- **Instance normalisation** — Normalising each sample and each channel separately across spatial dimensions.
- **Internal covariate shift** — Proposed phenomenon where a layer's input distribution changes as preceding layers update during training.
- **Layer normalisation** — Normalising each sample across its feature dimension, independent of batch size or composition.
- **Local response normalisation (LRN)** — Normalising each activation by the summed squares of neighbouring channel activations.  ⚠ *Superseded by batch and layer normalisation; effectively unused in modern architectures.*
- **Normalisation layer** — Layer rescaling and recentring activations using computed statistics to stabilise optimisation.
- **Post-norm** — Residual block placing the normalisation layer after adding the sublayer output to the skip path.  ⚠ *Largely superseded by pre-norm for deep transformers, which trains stably without careful warmup.*
- **Pre-norm** — Residual block placing the normalisation layer before the sublayer, leaving the skip path unnormalised.
- **QK normalisation (QK-Norm)** — Normalising query and key vectors before attention scoring to prevent attention logits from growing unbounded.
- **RMSNorm** — Normalisation dividing activations by their root-mean-square without mean subtraction, cheaper than layer normalisation.
- **Running statistics** — Moving averages of batch mean and variance accumulated during training and used at inference.
- **Sandwich normalisation** — Applying normalisation both before and after a residual sublayer to bound its output magnitude.
- **ScaleNorm** — Normalising an activation vector to a single learned global scale rather than per-feature parameters.
- **Spectral normalisation** — Dividing a weight matrix by its largest singular value to bound the layer's Lipschitz constant.
- **Synchronised batch normalisation** — Batch normalisation computing statistics across all data-parallel devices rather than per-device batches.
- **Weight normalisation** — Reparameterising each weight vector into a learned direction and an independently learned magnitude.

### Loss functions

- **ArcFace loss** — Classification loss adding an angular margin between feature and class-weight directions on a hypersphere.
- **Binary cross-entropy** — Cross-entropy specialised to two-class or independent multi-label targets with sigmoid outputs.
- **Class-weighted loss** — Loss scaling each class's contribution inversely to its frequency to counter imbalance.
- **Connectionist temporal classification (CTC) loss** — Sequence loss summing over all alignments between an unsegmented input and a shorter target sequence.
- **Contrastive loss** — Objective pulling paired representations together and pushing unpaired representations apart in embedding space.
- **Cross-entropy loss** — Negative log-likelihood of the correct token under the predicted distribution, the standard pretraining loss.
- **Dice loss** — Segmentation loss derived from the Dice overlap coefficient between predicted and true masks.
- **Empirical risk minimisation** — Training principle of minimising average loss over the observed training sample.
- **Huber loss** — Regression loss that is quadratic near zero error and linear beyond a threshold.
- **InfoNCE** — Contrastive objective classifying the true positive against sampled negatives using a temperature-scaled similarity softmax.
- **Intersection-over-union (IoU) loss** — Segmentation or detection loss derived from the overlap ratio between predicted and true regions.
- **Kullback-Leibler divergence loss** — Loss measuring the information lost when one probability distribution approximates another.
- **Load-balancing auxiliary loss** — Penalty encouraging mixture-of-experts routers to distribute tokens evenly across experts.
- **Loss function** — Scalar function measuring disagreement between predictions and targets, minimised during training.
- **Negative log-likelihood (NLL)** — Loss equal to the negative log probability a model assigns to observed data.
- **Perceptual loss** — Objective comparing deep features of generated and target images rather than raw pixel values.
- **Quantile (pinball) loss** — Asymmetric regression loss whose minimiser is a specified conditional quantile of the target.
- **Triplet loss** — An objective requiring the anchor-positive distance to be smaller than anchor-negative distance by a fixed margin.
- **Wasserstein loss** — Objective based on optimal transport distance between distributions, used in generative adversarial training.
- **z-loss** — Auxiliary penalty on the softmax log-partition function that keeps output logits from drifting large.

### Backprop & autodiff

- **Backpropagation through time (BPTT)** — Applying backpropagation to a recurrent network unrolled across all sequence timesteps.
- **Define-by-run** — Execution model building the differentiation graph dynamically as the program runs.
- **Hessian** — Matrix of second partial derivatives of a scalar objective, describing local curvature.
- **Jacobian** — Matrix of first partial derivatives of a vector-valued function with respect to its vector input.
- **Stop-gradient** — Operation blocking gradient flow through a tensor while leaving its forward value unchanged.
- **Straight-through estimator (STE)** — Trick passing gradients unchanged through a non-differentiable operation during the backward pass.
- **Tape (Wengert list)** — Ordered record of executed operations and intermediates that reverse-mode AD replays backward.
- **Truncated BPTT** — Backpropagation through time limited to a fixed window of recent timesteps to bound cost.

### Optimisers

- **8-bit optimiser** — Optimiser storing moment states in eight-bit quantised form to cut optimiser memory.
- **AdaDelta** — AdaGrad variant using a decaying window of squared gradients and updates, removing the global learning rate.
- **AdaMax** — Adam variant replacing the second-moment norm with an infinity norm over past gradients.
- **AMSGrad** — Adam variant using a non-decreasing maximum of second-moment estimates to restore convergence guarantees.
- **Distributed Shampoo** — Implementation sharding Shampoo's preconditioner computation and state across data-parallel ranks.
- **LAMB** — Layer-wise trust-ratio scaling applied on top of Adam, enabling very large batch training.
- **LARS** — Layer-wise adaptive rate scaling setting per-layer step sizes from weight-to-gradient norm ratios.
- **Lookahead** — Wrapper periodically interpolating slow weights toward fast weights produced by an inner optimiser.
- **Nadam** — Adam incorporating Nesterov-style look-ahead in its first-moment term.
- **Nesterov accelerated gradient (NAG)** — Momentum variant evaluating the gradient at the anticipated look-ahead position.
- **Newton-Schulz orthogonalisation** — Iterative matrix procedure approximating the orthogonal polar factor without computing a singular value decomposition.
- **Optimiser** — Algorithm mapping gradients and internal state to parameter updates that reduce the loss.
- **RAdam** — Adam variant rectifying the adaptive term's variance early in training, reducing the need for warmup.
- **Schedule-free optimisation** — Optimiser using iterate averaging and interpolation so no explicit learning-rate decay schedule is required.
- **signSGD** — Optimiser updating parameters using only the elementwise sign of the gradient.
- **Stochastic weight averaging (SWA)** — Averaging parameters sampled along the training trajectory to find flatter, better-generalising solutions.
- **Weight exponential moving average (EMA)** — Maintaining a decayed running average of parameters, used for evaluation instead of raw weights.

### LR schedules

- **Cooldown phase** — Final decay segment of a schedule during which most of the loss improvement is realised.
- **Cosine annealing** — Schedule decaying the learning rate along a half cosine curve to a small final value.
- **Cyclical learning rate** — Schedule oscillating the learning rate between fixed lower and upper bounds throughout training.
- **Exponential decay** — Schedule multiplying the learning rate by a fixed factor at every step.
- **Inverse square-root decay** — Schedule scaling the learning rate by the reciprocal square root of the step count.
- **Layer-wise learning-rate decay (LLRD)** — Assigning progressively smaller learning rates to layers closer to the input during fine-tuning.
- **Learning-rate schedule** — Rule varying the learning rate over training steps according to a predetermined shape.
- **Linear scaling rule** — Heuristic scaling the learning rate proportionally with the global batch size.
- **Linear warmup** — Opening phase raising the learning rate from near zero to its peak over a fixed step count.
- **One-cycle policy** — Schedule raising the learning rate to a peak and then annealing far below the starting value.
- **Step decay** — Schedule multiplying the learning rate by a constant factor at fixed step milestones.
- **Warm restarts (SGDR)** — Cyclic schedule repeatedly resetting the learning rate to a high value and annealing it again.
- **Warmup-stable-decay (WSD)** — Three-phase schedule holding a constant peak learning rate between a warmup and a final decay.

### Gradient pathologies

- **Adaptive gradient clipping** — Clipping with a threshold derived from parameter or gradient-history statistics rather than a fixed constant.
- **Attention entropy collapse** — Instability where attention distributions become near one-hot, causing sharp gradients and training breakdown.
- **Divergence** — Training failure in which the loss grows without recovering, often ending in numerical overflow.
- **Dying ReLU** — Failure mode where a rectifier unit outputs zero for all inputs and stops receiving gradient.
- **Edge of stability** — Regime where curvature rises until it sits at the largest value the learning rate tolerates.
- **Exploding gradient** — Pathology where gradient magnitudes grow without bound through depth, producing destructive parameter updates.
- **Flat and sharp minima** — Distinction between low-curvature and high-curvature solutions, often linked to differing generalisation behaviour.
- **Gradient noise scale** — Statistic estimating the batch size beyond which gradient estimates stop becoming meaningfully less noisy.
- **Grokking** — Delayed generalisation where validation performance jumps long after training loss has already converged.
- **Logit soft-capping** — Bounding logits through a scaled tanh so they cannot grow into numerically unstable ranges.
- **Loss spike** — Abrupt large increase in training loss that can precede divergence during large-model pretraining.
- **Rank collapse** — Degeneracy where representations across tokens or depth converge toward a low-dimensional subspace.
- **Vanishing gradient** — Pathology where gradients shrink toward zero through depth, stalling learning in early layers.
- **ZClip** — Adaptive clipping method detecting gradient-norm anomalies by z-score against a running distribution.

### Regularisation

- **Attention dropout** — Dropout applied to attention probability weights before they multiply the value vectors.
- **CutMix** — Augmentation pasting a patch from one image into another and mixing labels by patch area.
- **Cutout** — Augmentation masking out a contiguous random region of the input during training.
- **Data augmentation** — Expanding training data by applying label-preserving transformations to existing examples.
- **Decoupled weight decay** — Applying weight decay directly to parameters rather than through the adaptive gradient preconditioner.
- **DropConnect** — Regulariser randomly zeroing individual weights rather than whole unit activations.
- **Dropout** — Randomly zeroing a fraction of units during training so the network cannot rely on any single one.
- **Inverted dropout** — Dropout implementation rescaling surviving activations during training so inference needs no adjustment.
- **L1 regularisation** — Penalty proportional to the sum of absolute parameter values, driving some weights exactly to zero.
- **L2 regularisation** — Penalty proportional to the sum of squared parameter values, shrinking all weights toward zero.
- **Label smoothing** — Replacing hard one-hot targets with slightly softened distributions to reduce overconfidence.
- **Max-norm constraint** — Projecting each weight vector back inside a fixed norm ball after every update.
- **Mixup** — Augmentation training on convex combinations of two inputs and their correspondingly mixed labels.
- **Monte Carlo dropout** — Keeping dropout active at inference and averaging samples to obtain predictive uncertainty estimates.
- **Stochastic depth (DropPath)** — Regulariser randomly dropping whole residual branches during training, shortening the effective network.
- **Weight decay** — Multiplicative shrinkage of parameters applied at each update step.

### Training loop

- **Batch size** — Number of examples whose gradients contribute to one parameter update.
- **Compute-optimal training** — Allocating a fixed training compute budget between model size and tokens to minimise final loss.
- **Data loader** — Component that batches, shuffles and prefetches training examples, feeding the accelerator without stalls.
- **Determinism and seeding** — Fixing random sources and kernel selection so a training run reproduces bitwise identical results.
- **Epoch** — One complete pass of the training procedure over the entire training dataset.
- **Global batch size** — Total examples contributing to one update across all devices and accumulation steps combined.
- **Gradient accumulation** — Summing gradients over several micro-batches before updating, simulating a larger batch within fixed memory.
- **Hyperparameter sweep** — Systematic search over hyperparameter configurations to identify the best-performing training setup.
- **Mini-batch** — Subset of training examples whose gradients are averaged into a single parameter update.
- **Scaling law** — Empirical power-law relation predicting loss from model size, dataset size and training compute.
- **Sequence packing** — Concatenating short examples into full-length training sequences to avoid wasting compute on padding.
- **Teacher forcing** — Training regime feeding ground-truth prefixes rather than model outputs when predicting the next token.
- **Train, validation and test split** — Partitioning data into sets used respectively for fitting, model selection and final unbiased evaluation.
- **Training step** — One iteration comprising forward pass, backward pass and a single optimiser parameter update.

### Transfer & curriculum

- **Continued pre-training** — Extending pre-training of an existing checkpoint on new domain or language data.
- **Curriculum learning** — Ordering training examples from easier to harder rather than presenting them uniformly at random.
- **Data annealing** — Late-training phase upweighting high-quality data while the learning rate decays.
- **Data mixture** — Chosen sampling proportions across corpora sources that shape a pretrained model's capability profile.
- **Domain adaptation** — Adjusting a model so it performs well on a target distribution differing from its training distribution.
- **Elastic weight consolidation (EWC)** — Continual-learning penalty anchoring parameters important to earlier tasks, weighted by Fisher information.
- **Fine-tuning** — Continuing training of a pre-trained model on task-specific data to adapt its parameters.
- **Frozen backbone** — Adaptation strategy holding pre-trained feature-extractor weights fixed while training only new output layers.
- **Gradual unfreezing** — Fine-tuning schedule progressively unfreezing layers from the output end toward the input.
- **Linear probing** — Evaluating frozen representations by fitting only a linear classifier on top of them.
- **Pre-training** — Initial large-scale training phase producing general-purpose representations before any task-specific adaptation.
- **Self-paced learning** — Curriculum whose difficulty ordering is derived from the model's own current loss on each example.

### Distillation

- **Data-free distillation** — Distillation using synthesised or teacher-inverted inputs when the original training data is unavailable.
- **Dataset distillation** — Compressing a dataset into a small synthetic set on which training approximates full-data results.
- **Distillation temperature** — Scaling factor applied to logits that controls how smooth the teacher's soft targets become.
- **Feature-based distillation** — Distillation matching intermediate hidden representations between teacher and student layers.
- **Knowledge distillation (KD)** — Training a smaller student model to reproduce the outputs or internal signals of a larger teacher.
- **On-policy distillation** — Distillation scoring the student's own sampled outputs with the teacher, avoiding train-inference mismatch.
- **Online distillation** — Distillation in which teacher and student are trained simultaneously rather than from a frozen teacher.
- **Relation-based distillation** — Distillation matching relationships among examples or layers rather than individual activation values.
- **Response-based distillation** — Student trained on teacher-generated text with the ordinary token loss, ignoring teacher probabilities.
- **Self-distillation** — Distillation where teacher and student share the same architecture, often the model's own earlier checkpoint.
- **Sequence-level distillation** — Distillation training the student on teacher-generated output sequences rather than per-token distributions.
- **Soft targets** — Full teacher probability distributions used as training targets instead of hard one-hot labels.
- **Student model** — Smaller model trained to match a teacher's behaviour under a distillation objective.
- **Teacher model** — Larger or better-performing model whose behaviour supplies training signal to a student.

### Pruning & sparsity

- **2:4 sparsity** — Semi-structured pattern keeping two nonzeros per four consecutive weights, accelerated by sparse tensor cores.
- **Attention head pruning** — Structured removal of individual attention heads found to contribute little to model output.
- **Channel pruning** — Structured removal of entire convolutional filters or feature channels from a layer.
- **Depth pruning** — Dropping whole transformer layers judged redundant, then healing the model with brief further training.
- **Dynamic sparse training** — Training at fixed sparsity while periodically dropping and regrowing connections during the run.
- **Iterative magnitude pruning** — Alternating pruning and retraining over several rounds to reach high sparsity with less accuracy loss.
- **Lottery ticket hypothesis** — Conjecture that dense networks contain sparse subnetworks trainable in isolation to comparable accuracy.
- **Low-rank factorisation** — Replacing a weight matrix with the product of two thinner matrices to cut parameters and compute.
- **Magnitude pruning** — Removing the weights with smallest absolute value as a saliency proxy.
- **Movement pruning** — Pruning by how weights move away from zero during fine-tuning rather than by final magnitude.
- **N:M semi-structured sparsity** — Pattern requiring exactly N nonzeros in every group of M consecutive weights.
- **Optimal Brain Surgeon** — Pruning criterion using inverse-Hessian information to remove weights and compensate remaining ones.
- **Prune-and-distill** — Compression pipeline structurally pruning a model then recovering accuracy through distillation from the original.
- **Pruning** — Removing parameters, channels or layers from a trained network to reduce size and computation.
- **Sparse tensor core** — Accelerator unit that skips zero operands in N:M sparse matrix multiplications for extra throughput.
- **SparseGPT** — One-shot layer-wise pruning method solving a local reconstruction problem with approximate second-order information.
- **Structured pruning** — Removing whole architectural units such as channels, heads or layers, shrinking dense tensor shapes.
- **Unstructured pruning** — Zeroing individual weights by importance criteria, needing sparse kernels to realise speedups.
- **Wanda** — One-shot pruning scoring weights by magnitude times input activation norm, requiring no weight updates.
- **Weight rewinding** — Resetting surviving weights to an early-training value before retraining a pruned subnetwork.

### Precision

- **Automatic mixed precision (AMP)** — Framework feature automatically choosing per-operation precision and inserting the required casts.
- **BF16** — Sixteen-bit format keeping FP32's eight exponent bits and truncating the mantissa, so loss scaling is unnecessary.
- **Block scaling** — Assigning a shared scale factor to a small contiguous group of tensor elements.
- **Delayed scaling** — FP8 recipe deriving the current scale factor from a history of past tensor amax values.
- **E4M3** — FP8 encoding with four exponent and three mantissa bits, favouring precision over range.
- **E5M2** — FP8 encoding with five exponent and two mantissa bits, favouring dynamic range over precision.
- **FP16** — Half-precision floating point with five exponent bits, offering high mantissa precision but narrow dynamic range.
- **FP32** — Single-precision floating point with eight exponent and twenty-three mantissa bits.
- **FP8** — Eight-bit floating point used for matrix multiplication inputs with higher-precision accumulation.
- **INT8** — Eight-bit signed integer representation used for quantised weights and activations.
- **MXFP4** — Microscaling FP4 format with thirty-two-element blocks sharing a power-of-two exponent scale.
- **MXFP8** — Microscaling FP8 recipe sharing one power-of-two scale across each block of thirty-two elements.
- **Numerical precision** — Bit width and encoding used to represent tensor values, trading accuracy against speed and memory.
- **NVFP4** — Four-bit float with sixteen-value blocks and two-level scaling, giving better accuracy than MXFP4 on supporting hardware.
- **Quantisation-aware training (QAT)** — Training with simulated quantisation in the forward pass so weights adapt to low-precision deployment.
- **Transformer Engine** `[tool]` — NVIDIA library implementing FP8 and FP4 transformer layers with automatic scaling management.

### Distributed training

- **1F1B schedule** — Pipeline schedule alternating one forward and one backward micro-batch to bound activation memory.
- **3D parallelism** — Combining data, tensor and pipeline parallelism simultaneously across a multi-dimensional device grid.
- **Activation checkpointing** — Discarding intermediate activations in the forward pass and recomputing them during backward to save memory.
- **Activation offloading** — Moving activations to host memory between forward and backward, streaming them back when needed.
- **All-gather** — Collective in which every rank receives the concatenation of all ranks' contributed shards.
- **All-reduce** — Collective combining values from all ranks and delivering the identical result to every rank.
- **All-to-all** — Collective where each rank sends a distinct block to every other rank, used for expert routing.
- **Communication-computation overlap** — Issuing collectives asynchronously so network transfers proceed while the accelerator continues computing.
- **Context parallelism** — Partitioning the sequence across devices for attention itself, enabling contexts exceeding one device's memory.
- **Data parallelism** — Replicating the model across devices, giving each a different data shard and averaging their gradients.
- **Device mesh** — Logical multi-dimensional arrangement of devices onto which parallelism strategies are mapped.
- **DiLoCo** — Low-communication distributed training using infrequent outer optimiser steps over locally trained replicas.
- **Distributed Data Parallel (DDP)** `[tool]` — Data-parallel implementation replicating full parameters per rank and all-reducing gradients during the backward pass.
- **Distributed training** — Splitting a training workload across multiple accelerators or hosts that coordinate through collective communication.
- **DTensor** `[tool]` — PyTorch distributed tensor abstraction carrying explicit sharding and replication placements over a device mesh.
- **Elastic training** — Running a job that continues correctly as workers join or leave the cluster.
- **Expert parallelism** — Distributing mixture-of-experts feed-forward experts across accelerators with all-to-all token routing.
- **FSDP2** `[tool]` — Per-parameter-sharded rewrite of FSDP built on DTensor, composing cleanly with tensor parallelism.
- **Fully Sharded Data Parallel (FSDP)** `[tool]` — Distributed training that shards parameters, gradients and optimiser state across devices, gathering them only when needed.
- **Gradient bucketing** — Grouping gradient tensors into fixed-size buffers so communication starts before the backward pass finishes.
- **Gradient compression** — Reducing gradient communication volume through quantisation, sparsification or low-rank approximation.
- **Hybrid Sharded Data Parallel (HSDP)** — Sharding parameters within device groups while replicating and all-reducing across groups.
- **Interleaved pipeline schedule** — Assigning each device several non-contiguous layer chunks to shrink the pipeline bubble.
- **Local SGD** — Method letting workers take several independent steps before averaging parameters, reducing communication frequency.
- **Optimiser state sharding** — Splitting optimiser moment tensors across ranks so no device holds the full state.
- **Pipeline bubble** — Idle accelerator time at pipeline fill and drain when no micro-batch is available to process.
- **Pipeline parallelism** — Assigning consecutive layer groups to different accelerators and streaming microbatches between stages.
- **Reduce-scatter** — Collective reducing values across ranks and giving each rank one distinct slice of the result.
- **Ring all-reduce** — Bandwidth-optimal all-reduce implemented as a reduce-scatter followed by an all-gather around a device ring.
- **Ring attention** — Distributed exact attention passing key-value blocks around a device ring, scaling sequence length with device count.
- **Selective activation checkpointing** — Recomputing only cheap operations while keeping expensive intermediates stored, tuning the memory-compute trade-off.
- **Sequence parallelism** — Sharding activations of non-tensor-parallel operations along the sequence dimension to cut activation memory.
- **Straggler** — Slow rank that delays a synchronous collective and stalls the entire training step.
- **Tensor parallelism** — Sharding individual layer weight matrices across accelerators that communicate every layer.
- **ZeRO** — Family of stages partitioning optimiser states, gradients and parameters across data-parallel ranks to remove replication.
- **ZeRO stage 3** — ZeRO level sharding parameters themselves, gathering each layer's weights only while it is in use.
- **Zero-bubble pipeline** — Schedule splitting backward into input and weight gradient stages to fill pipeline idle slots.
- **ZeRO-Offload** — Extension moving optimiser state and its update step to host CPU memory.

### Accelerators & memory

- **Activation memory** — Memory holding intermediate forward-pass tensors retained for use in the backward pass.
- **CUDA graphs** — Mechanism capturing a sequence of kernel launches and replaying it to remove per-launch CPU overhead.
- **Hardware accelerator** — Specialised processor built for the dense linear algebra that dominates neural network workloads.
- **High-bandwidth memory (HBM)** — Stacked off-chip DRAM providing an accelerator's main high-throughput working memory.
- **InfiniBand** — Low-latency high-throughput network fabric commonly used for inter-node accelerator communication.
- **Kernel** — Single accelerator program launched over many threads to perform one tensor operation.
- **Kernel fusion** — Combining several operations into one kernel so intermediates stay on chip instead of returning to memory.
- **Memory bandwidth** — Rate at which data moves between an accelerator's compute units and its main memory.
- **Memory wall** — Structural limit where memory bandwidth, not arithmetic throughput, bounds achievable performance.
- **NVLink** — High-bandwidth point-to-point interconnect linking accelerators within a node or scale-up domain.
- **Occupancy** — Ratio of active warps to the maximum a multiprocessor supports, limited by register and memory use.
- **Shared memory (SRAM)** — Small fast on-chip memory explicitly managed by kernels to stage reused tiles.
- **Streaming multiprocessor (SM)** — GPU compute cluster containing cores, registers, shared memory and schedulers that executes thread blocks.
- **Tensor core** — Accelerator unit executing small matrix multiply-accumulate operations at reduced precision.
- **Tiling** — Partitioning a computation into blocks sized to fit fast memory, maximising data reuse.
- **Triton** `[tool]` — Python-embedded language for writing tiled GPU kernels without direct low-level programming.
- **Warp** — Group of GPU threads scheduled and executed together in lockstep.

### Profiling & throughput

- **Arithmetic intensity** — Ratio of arithmetic operations performed to bytes moved between compute units and memory.
- **Compute-bound** — Regime where a kernel's runtime is limited by arithmetic throughput rather than data movement.
- **FLOP** — Single floating-point operation, the unit in which model compute cost is counted.
- **Goodput** — Fraction of elapsed cluster time spent on useful training progress rather than failures, restarts or stalls.
- **Hardware FLOPs utilisation (HFU)** — Ratio of all executed FLOPs, including recomputation, to theoretical peak throughput.
- **Memory-bound** — Regime where a kernel's runtime is limited by memory bandwidth rather than arithmetic throughput.
- **Model FLOPs utilisation (MFU)** — Ratio of useful model FLOPs achieved to the accelerator's theoretical peak, excluding recomputation.
- **Nsight Systems** `[tool]` — NVIDIA system-wide profiler visualising kernel, memory and communication activity over time.
- **PyTorch Profiler** `[tool]` — Built-in PyTorch tool recording operator timings, memory use and exportable execution traces.
- **Roofline model** — Performance model bounding a kernel by memory bandwidth or peak compute depending on its arithmetic intensity.
- **Step time** — Wall-clock duration of one complete training iteration, the primary throughput measurement.
- **Throughput** — Rate of training work completed per unit time, measured in tokens, samples or steps per second.
- **Trace timeline** — Time-ordered profiler record of kernels, collectives and host activity used to locate stalls.

## Neural network architectures
*303 terms*

### Feedforward & MLP

- **Bottleneck layer** — Narrow intermediate layer forcing information through a reduced-dimension representation.
- **Deep Sets** — Permutation-invariant architecture encoding each set element independently then aggregating with a symmetric pooling function.
- **Embedding layer** — Trainable lookup table mapping discrete tokens or categories to dense continuous vectors.
- **Feedforward neural network (FNN)** — Network whose connections form a directed acyclic graph, passing activations forward without recurrence.
- **Fully connected layer (dense layer)** — Layer in which every output unit is a learned weighted sum of all input units.
- **gMLP** — Attention-free block combining channel MLPs with a spatial gating unit that mixes across tokens.
- **Hypernetwork** — Network that generates the weights of a second target network from a conditioning input.
- **Kolmogorov-Arnold network (KAN)** — Network placing learnable univariate spline functions on edges instead of fixed activations on nodes.
- **MLP-Mixer** — Vision architecture alternating token-mixing and channel-mixing MLPs over image patches, using neither convolution nor attention.
- **Siamese network** — Two-branch architecture with tied weights that compares inputs through distances between their embeddings.

### Normalisation layers

- **Adaptive layer normalization (AdaLN)** — Conditioning mechanism predicting normalisation scale and shift from an external signal such as diffusion timestep.
- **Batch normalization (BatchNorm)** — Layer standardising activations using mini-batch statistics, then rescaling with learned affine parameters.
- **Group normalization (GroupNorm)** — Normalisation computing statistics over groups of channels, independent of batch size.
- **Layer normalization (LayerNorm)** — Layer standardising activations across the feature dimension of each individual example.
- **Pre-norm placement (Pre-LN)** — Residual block ordering that normalises inputs before each sublayer, stabilising deep transformer training.
- **QK normalization** — Normalising query and key vectors before attention to bound logit magnitude and prevent training divergence.

### Convolution primitives

- **Causal convolution** — Convolution masked so each output depends only on current and earlier positions.
- **Convolution layer** — Layer computing cross-correlations between an input tensor and a bank of learned local filters.
- **Convolutional block attention module (CBAM)** — Module applying sequential channel and spatial attention gates to a convolutional feature map.
- **Convolutional neural network (CNN)** — Network built from layers that apply learned filters slid across spatially or temporally structured input.
- **Deformable convolution** — Convolution whose sampling offsets are learned, adapting the kernel shape to object geometry.
- **Depthwise separable convolution** — Factorisation of convolution into a per-channel spatial filter followed by a pointwise channel mixer.
- **Dilated convolution (atrous convolution)** — Convolution with gaps between kernel taps, enlarging receptive field without extra parameters or downsampling.
- **Grouped convolution** — Convolution splitting input channels into groups filtered independently, reducing parameters and computation.
- **Inception module** — Multi-branch block concatenating outputs of parallel convolutions at several kernel sizes plus pooling.
- **Inverted residual block (MBConv)** — Block expanding channels, applying depthwise convolution, then projecting back, with a residual across the narrow ends.
- **Kernel (filter)** — Small learned weight tensor convolved across the input to produce one output channel.
- **Pointwise convolution (1x1 convolution)** — Convolution with unit spatial extent that mixes and reprojects channels at each position.
- **Squeeze-and-excitation block (SE)** — Module recalibrating channels by pooling global context and predicting per-channel multiplicative gates.
- **Stride** — Step size by which a convolution or pooling window advances, controlling output spatial resolution.
- **Translation equivariance** — Property whereby shifting the input shifts the feature map correspondingly, arising from weight-shared convolution.
- **Transposed convolution (deconvolution)** — Learned upsampling layer that maps each input element to a spatially larger output patch.
- **Weight sharing** — Reuse of the same parameters at many input positions or timesteps within a layer.

### Pooling & receptive field

- **Average pooling** — Pooling that outputs the mean activation within each window.
- **Effective receptive field** — Subregion of the theoretical receptive field that actually carries significant gradient influence, typically Gaussian-shaped.
- **Feature pyramid network (FPN)** — Architecture fusing multi-resolution backbone features top-down to produce a scale-aware feature hierarchy.
- **Global average pooling** — Pooling that collapses each entire feature map to its mean, producing one value per channel.
- **Max pooling** — Pooling that outputs the largest activation within each window.
- **Pooling layer** — Layer aggregating each local neighbourhood into a single value, reducing spatial resolution.
- **Receptive field** — Region of the input that can influence one unit's activation in a given layer.
- **RoI align** — Operation extracting fixed-size features from an arbitrary region proposal using bilinear interpolation.
- **Spatial pyramid pooling (SPP)** — Module pooling features at multiple grid resolutions and concatenating them into a fixed-length vector.
- **Sub-pixel convolution (pixel shuffle)** — Upsampling that rearranges channel values into a higher-resolution spatial grid.

### CNN families

- **AlexNet** — Deep convolutional network that won ImageNet 2012 using ReLU activations, dropout and GPU training.
- **ConvNeXt** — Convolutional network modernised with transformer-inspired choices: large depthwise kernels, LayerNorm, inverted bottlenecks, GELU.
- **DeepLab (ASPP)** — Segmentation architecture using atrous spatial pyramid pooling to capture multi-scale context at fixed resolution.
- **DenseNet** — Convolutional network where each layer receives the concatenated outputs of all preceding layers in its block.
- **EfficientNet** — Convolutional family scaling depth, width and input resolution jointly by a single compound coefficient.
- **Fully convolutional network (FCN)** — Network with no dense layers, producing dense spatial predictions at pixel resolution.
- **GoogLeNet (Inception)** — Convolutional network stacking inception modules with dimensionality-reducing 1x1 convolutions and auxiliary classifiers.
- **LeNet-5** — Early convolutional network for digit recognition alternating convolution, subsampling and fully connected layers.
- **Mask R-CNN** — Two-stage detector extending region-proposal detection with a parallel per-region segmentation-mask branch.
- **MobileNet** — Efficient convolutional family for mobile inference built on depthwise separable and inverted residual blocks.
- **PointNet** — Architecture consuming raw point clouds via shared per-point MLPs and a symmetric max-pooling aggregation.
- **RegNet** — Convolutional family whose layer widths and depths follow quantised linear rules found by design-space search.
- **ResNet** — Convolutional network stacking residual blocks with identity shortcuts, enabling very deep trainable models.
- **ResNeXt** — ResNet variant whose blocks aggregate many parallel grouped-convolution branches of identical topology.
- **ShuffleNet** — Efficient convolutional network using grouped pointwise convolutions with channel shuffling for cross-group information flow.
- **Temporal convolutional network (TCN)** — Sequence architecture of dilated causal convolutions with residual blocks, used instead of recurrence.
- **U-Net** — Encoder-decoder convolutional network with skip connections linking matching-resolution contracting and expanding paths.
- **VGGNet** — Deep convolutional network built uniformly from stacked 3x3 convolutions and max pooling.
- **WaveNet** — Autoregressive audio network stacking dilated causal convolutions with gated activations and residual connections.
- **Xception** — Convolutional network replacing inception modules entirely with depthwise separable convolutions.
- **YOLO** — Single-stage object detector predicting boxes and classes directly on a dense grid in one pass.

### Recurrent & sequence

- **Bidirectional RNN** — Architecture running separate forward and backward recurrences and combining both hidden states per position.
- **Cell state** — LSTM's additive memory channel that carries information across timesteps with minimal transformation.
- **Differentiable neural computer (DNC)** — Memory-augmented network extending the Neural Turing machine with dynamic memory allocation and temporal link tracking.
- **Echo state network** — Reservoir-computing model with a fixed random recurrent layer where only the readout is trained.
- **Elman network** — Simple recurrent network feeding the previous hidden layer back as additional input at each step.
- **Forget gate** — LSTM gate deciding what fraction of the previous cell state is retained.
- **Input gate** — LSTM gate controlling how much of the candidate update is written into the cell state.
- **mLSTM** — xLSTM block replacing scalar memory with a parallelisable matrix memory updated by outer products.
- **Neural Turing machine (NTM)** — Architecture pairing a controller network with an external memory matrix accessed by differentiable read and write heads.
- **Output gate** — LSTM gate controlling how much of the cell state is exposed as the hidden state.
- **Pointer network** — Sequence model whose output distribution is attention over input positions rather than a fixed vocabulary.
- **Quasi-recurrent neural network (QRNN)** — Sequence model interleaving parallel convolutions with a minimal elementwise recurrent pooling step.
- **Recurrent neural network (RNN)** — Network with cyclic connections that carries a hidden state across sequence positions.
- **Simple recurrent unit (SRU)** — Recurrent cell whose gate computations drop hidden-state dependence, allowing highly parallel training.
- **xLSTM** — Modernised LSTM family adding exponential gating and matrix memory, with sLSTM and mLSTM blocks.

### Encoder-decoder & attention

- **Additive attention (Bahdanau attention)** — Attention scoring queries and keys with a small feedforward network before softmax normalisation.
- **Attention head** — One independent attention computation over a low-dimensional projected subspace of the representation.
- **Causal masking** — Attention mask preventing each position from attending to later positions, enforcing autoregressive factorisation.
- **Cross-attention** — Attention where queries come from one sequence and keys and values from another.
- **Encoder-decoder architecture** — Two-part design where an encoder compresses the input and a decoder generates the output conditioned on it.
- **Hard attention** — Attention that selects discrete positions stochastically rather than forming a weighted average.
- **Multi-head attention (MHA)** — Attention computed in several parallel subspaces with separate projections, concatenated and mixed by an output projection.
- **Multiplicative attention (Luong attention)** — Attention scoring queries and keys by dot product, optionally with a learned bilinear matrix.
- **Query, key and value** — The three learned projections of a token that determine attention scoring and the retrieved content.
- **Scaled dot-product attention** — Attention computing softmax over query-key dot products divided by the square root of head dimension.
- **Self-attention** — Mechanism where each position forms queries, keys and values and aggregates values weighted by query-key similarity.
- **Sequence-to-sequence (seq2seq)** — Encoder-decoder framework mapping a variable-length input sequence to a variable-length output sequence.

### Transformer components

- **Attention sink** — Initial tokens that absorb disproportionate attention mass and must be retained for stable streaming generation.
- **CLS token** — Prepended learnable token whose final representation serves as an aggregate sequence embedding.
- **Decoder-only transformer** — Transformer using only stacked masked self-attention blocks, predicting each token from preceding tokens alone.
- **Encoder-decoder transformer** — Transformer pairing a bidirectional encoder with a causal decoder that cross-attends to encoder outputs.
- **Encoder-only transformer** — Transformer using bidirectional attention over the whole input to produce contextual representations.
- **KV cache** — Stored key and value tensors from previous positions, reused so autoregressive decoding avoids recomputation.
- **Parallel attention-FFN block** — Transformer block computing attention and feedforward branches simultaneously from the same normalised input, then summing.
- **Patch embedding** — Linear projection turning non-overlapping image patches into token vectors for a transformer.
- **Position-wise feedforward network** — Two-layer MLP applied independently and identically to every token representation in a transformer block.
- **Register token** — Extra learnable token added to vision transformers to absorb global computation and remove artefact activations.
- **Transformer** — Architecture built entirely from stacked self-attention and feedforward sublayers with residual connections and normalisation.
- **Transformer block** — Repeating unit containing an attention sublayer and a feedforward sublayer, each wrapped in residual normalisation.

### Transformer families

- **BART** — Encoder-decoder transformer pretrained as a denoising autoencoder over corrupted text.
- **BERT** — A bidirectional transformer encoder pretrained with masked token prediction, producing contextual representations for downstream tasks.
- **GPT** — Decoder-only transformer family pretrained by next-token prediction on large text corpora.
- **Perceiver IO** — Architecture cross-attending arbitrary-sized inputs into a fixed latent array processed by self-attention.
- **Swin Transformer** — Hierarchical vision transformer computing attention in local windows that shift between successive layers.
- **T5** — Encoder-decoder transformer casting every task as text-to-text generation, using relative position bias.
- **Transformer-XL** — Transformer adding segment-level recurrence and relative positions to extend context beyond one window.  ⚠ *Largely superseded by long-context decoder-only transformers with RoPE scaling.*
- **Vision Transformer (ViT)** — Transformer applied to sequences of image patch embeddings for visual recognition.

### Positional encoding

- **Contextual position encoding (CoPE)** — Encoding where position counters increment only on content-selected tokens, making positions context-dependent.
- **Learned absolute positional embedding** — Trainable vector per position index added to token embeddings.
- **NoPE (no positional encoding)** — Decoder trained without explicit position signals, relying on causal masking to induce order information.
- **NTK-aware RoPE scaling** — Context extension scaling rotary frequencies unevenly so high-frequency dimensions keep their resolution.
- **Position interpolation** — Context extension that rescales position indices so pretrained RoPE frequencies cover a longer window.
- **Positional encoding** — Mechanism injecting token order information into an otherwise permutation-equivariant attention architecture.
- **Relative positional encoding** — Scheme conditioning attention on the offset between query and key rather than absolute indices.
- **Rotary position embedding (RoPE)** — Encoding that rotates query and key vectors by position-dependent angles, making dot products relative.
- **Sinusoidal positional encoding** — Fixed absolute encoding adding sine and cosine functions of position at geometrically spaced frequencies.
- **T5 relative position bias** — Learned scalar added to attention logits per bucketed relative distance, shared across layers.
- **xPos** — Rotary encoding variant adding exponential decay per frequency to improve length extrapolation.
- **YaRN** — Rotary extension combining frequency-dependent interpolation with attention temperature adjustment, needing little continued training.

### Attention variants

- **Attention logit soft-capping** — Bounding attention or output logits with a scaled tanh to prevent numerical blow-up.
- **Cross-layer attention (CLA)** — Design reusing one layer's key-value tensors across several subsequent layers to shrink cache memory.
- **Differential attention** — Attention subtracting two softmax maps per head to cancel common-mode noise on irrelevant context.
- **Grouped-query attention (GQA)** — Attention where groups of query heads share key-value heads, interpolating between multi-head and multi-query.
- **Multi-head latent attention (MLA)** — Attention compressing keys and values into a low-rank latent vector cached instead of full per-head tensors.
- **Multi-query attention (MQA)** — Attention variant where all heads share one key and value projection, shrinking the key-value cache.  ⚠ *Mostly displaced by grouped-query attention, which retains more quality at similar cost.*

### Efficient attention

- **BigBird** — Sparse transformer mixing window, global and random attention patterns with theoretical universality guarantees.
- **DeltaNet** — Linear attention whose state update follows the delta rule, overwriting rather than only accumulating associations.
- **Gated DeltaNet** — Linear attention combining the delta update rule with a learned decay gate on the recurrent state.
- **Gated linear attention (GLA)** — Linear attention adding data-dependent gating to the recurrent state, with a hardware-efficient chunked form.
- **Infini-attention** — Attention augmenting local attention with a compressive associative memory carried across segments.
- **Linear attention** — Attention replacing softmax with a kernel feature map so computation becomes a running state update.
- **Linformer** — Attention projecting the key and value sequence length to a fixed low rank, giving linear cost.
- **Longformer** — Transformer combining sliding-window local attention with a few designated globally attending tokens.
- **Native sparse attention (NSA)** — Trainable sparse attention combining compressed coarse tokens, selected fine blocks and a local window.
- **Nystromformer** — Attention approximating the softmax matrix by Nystrom sampling of landmark tokens.
- **PagedAttention** `[tool]` — Serving technique storing the KV cache in non-contiguous fixed-size blocks to eliminate memory fragmentation.
- **Performer (FAVOR+)** — Attention approximating the softmax kernel with random features, enabling linear-time computation.
- **Reformer (LSH attention)** — Transformer grouping similar queries and keys by locality-sensitive hashing and attending only within buckets.  ⚠ *Largely superseded in practice by IO-aware exact attention such as FlashAttention.*
- **Sliding window attention (SWA)** — Attention limiting each token to a fixed-width local neighbourhood of preceding positions.
- **Sparse attention** — Attention restricting each query to a subset of keys, reducing quadratic cost to sub-quadratic.
- **Sparse Transformer** — Early sparse-attention model using fixed strided and block patterns over long sequences.

### Mixture of experts

- **Active parameters** — Subset of a sparse model's weights actually used for a given token, versus total parameter count.
- **Auxiliary-loss-free load balancing** — Balancing expert utilisation by adjusting per-expert routing biases rather than adding a balancing loss term.
- **DeepSeekMoE** — MoE design combining fine-grained routed experts with always-on shared experts.
- **Expert capacity factor** — Multiplier setting how many tokens each expert may accept per batch before overflow.
- **Expert-choice routing** — Inverted routing where each expert selects its top tokens, guaranteeing balanced expert load.
- **Fine-grained expert segmentation** — Splitting experts into many smaller ones so routing can compose more specialised combinations per token.
- **GShard** — Early sharded MoE transformer introducing top-2 routing, expert capacity limits and automatic model parallelism.
- **Mixture of depths (MoD)** — Architecture routing only a subset of tokens through each layer, making compute depth token-dependent.
- **Mixture of experts (MoE)** — Layer holding many parallel subnetworks where a router activates only a few per input.
- **Router (gating network)** — Small learned network scoring experts for each token and deciding which ones process it.
- **Shared expert** — Always-active expert in a mixture-of-experts layer capturing common computation the routed experts need not duplicate.
- **Soft MoE** — Fully differentiable MoE where each expert processes weighted mixtures of all tokens rather than discrete assignments.
- **Sparse MoE layer** — Transformer feedforward layer replaced by many experts of which only top-scoring ones compute.
- **Switch Transformer** — MoE transformer routing each token to exactly one expert to minimise routing and communication overhead.
- **Token dropping** — Discarding or passing through tokens routed to an expert that has exceeded its capacity.
- **Top-k routing** — Routing rule dispatching each token to the k highest-scoring experts, combining their outputs by gate weights.

### State space models

- **Diagonal state spaces (DSS)** — SSM variant showing diagonal state matrices suffice to match structured-kernel performance.
- **H3 (Hungry Hungry Hippos)** — Layer stacking shift and diagonal SSMs with multiplicative interactions to emulate associative recall.
- **HiPPO** — Framework deriving state matrices that optimally compress input history onto polynomial bases.
- **Hyena** — Attention-free operator interleaving implicit long convolutions with elementwise multiplicative gating.
- **Linear recurrent unit (LRU)** — Simplified deep linear recurrence with complex diagonal state and exponential parameterisation, matching SSM performance.
- **Mamba** — Sequence architecture built from selective SSM blocks with a hardware-aware parallel scan.
- **Mamba-2** — Mamba successor with a scalar-times-identity state structure, formulated through state space duality for faster training.
- **Parallel associative scan** — Primitive computing a linear recurrence in logarithmic depth by combining partial results associatively.
- **Retentive network (RetNet)** — Sequence architecture with a decay-weighted retention operator supporting parallel, recurrent and chunkwise computation modes.
- **RWKV** — Recurrent architecture with transformer-style training parallelism, alternating time-mixing and channel-mixing blocks.
- **RWKV-7 (Goose)** — RWKV generation using a generalised delta-rule state update with vector-valued decay and in-context learning rates.
- **S4 (structured state space sequence model)** — Deep SSM using a low-rank-corrected normal state matrix for stable, efficient long-range sequence modelling.
- **S4D** — S4 simplification restricting the state matrix to a diagonal parameterisation.
- **S5** — Simplified SSM using a single multi-input multi-output layer computed by parallel associative scan.
- **Selective state space model (S6)** — SSM whose state transition and input parameters are functions of the current token, enabling content-based forgetting.
- **State space duality (SSD)** — Theoretical equivalence linking structured SSM recurrences to masked-attention matrix multiplications.
- **State space model (SSM)** — Sequence model propagating a continuous-time linear latent state, computable as recurrence or convolution.
- **Test-time training layer (TTT)** — Sequence layer whose hidden state is a small model's weights updated by gradient steps during inference.
- **Time-mixing and channel-mixing** — RWKV's paired blocks that combine information across positions and across feature channels respectively.

### Graph neural networks

- **Equivariant graph neural network (EGNN)** — GNN whose outputs rotate and translate with the input coordinates, preserving Euclidean symmetry.
- **GATv2** — Graph attention variant reordering the scoring computation to make attention genuinely dynamic per query node.
- **Graph attention network (GAT)** — GNN weighting neighbour contributions by learned attention coefficients.
- **Graph convolutional network (GCN)** — GNN averaging neighbour features with symmetric degree normalisation, derived from a first-order spectral approximation.
- **Graph isomorphism network (GIN)** — GNN using sum aggregation and an MLP, maximally expressive among message-passing networks.
- **Graph neural network (GNN)** — Network computing node, edge or graph representations by iteratively exchanging information along graph edges.
- **Graph pooling (DiffPool)** — Learned hierarchical coarsening that assigns nodes to clusters, producing progressively smaller graphs.
- **Graph transformer** — Architecture applying global self-attention over nodes, using structural and positional encodings for graph topology.
- **GraphGPS** — Framework combining local message passing, global attention and positional or structural encodings in one layer.
- **GraphSAGE** — Inductive GNN sampling a fixed number of neighbours and aggregating them with learned functions.
- **Heterogeneous GNN** — GNN with type-specific parameters for graphs containing multiple node and edge types.
- **Laplacian eigenvector positional encoding** — Graph position feature built from eigenvectors of the graph Laplacian.
- **Message passing neural network (MPNN)** — General GNN formulation with per-edge message, per-node update and graph-level readout functions.
- **Neighbourhood aggregation** — Step combining a node's neighbours' features with a permutation-invariant operator such as sum or mean.
- **Over-smoothing** — Failure mode where repeated aggregation makes deep GNN node representations converge to indistinguishable values.
- **Over-squashing** — Failure mode where information from exponentially many distant nodes is compressed into fixed-size messages through bottleneck edges.
- **Readout function** — Permutation-invariant pooling that turns node representations into a single graph-level vector.
- **SE(3)-Transformer** — Attention-based graph network equivariant to 3D rotations and translations via spherical-harmonic filters.
- **Spectral GNN (ChebNet)** — GNN defining convolution through graph Laplacian eigenbasis, approximated by Chebyshev polynomial filters.
- **Weisfeiler-Lehman test** — Colour-refinement algorithm for graph isomorphism that upper-bounds the expressive power of message-passing GNNs.

### Autoencoders

- **Autoencoder** — Network trained to reconstruct its input through a lower-capacity intermediate representation.
- **Beta-VAE** — VAE weighting the KL term above one to encourage more disentangled latent factors.
- **Codebook** — Finite set of learned embedding vectors to which continuous representations are quantised.
- **Conditional VAE (CVAE)** — VAE whose encoder and decoder are additionally conditioned on observed labels or attributes.
- **Denoising autoencoder** — Autoencoder trained to reconstruct clean inputs from deliberately corrupted versions.
- **Finite scalar quantisation (FSQ)** — Codebook-free quantisation rounding each latent dimension to a small fixed set of scalar levels.
- **Latent space** — The compressed representation space in which an autoencoder or generative model's codes live.
- **Masked autoencoder (MAE)** — Self-supervised vision transformer reconstructing heavily masked image patches from the visible subset.
- **Posterior collapse** — Failure mode where the VAE's approximate posterior matches the prior and latents carry no information.
- **Residual vector quantisation (RVQ)** — Quantisation scheme applying successive codebooks to the residual of previous quantisation stages.
- **Sparse autoencoder** — Autoencoder with an overcomplete latent layer penalised toward few simultaneously active units.
- **Variational autoencoder (VAE)** — Latent-variable generative model pairing an inference encoder with a decoder, trained by variational inference.
- **VQ-VAE** — Autoencoder quantising encoder outputs to entries of a learned discrete codebook before decoding.
- **VQGAN** — Discrete autoencoder combining vector quantisation with adversarial and perceptual losses for sharp reconstructions.

### GANs

- **Adaptive instance normalization (AdaIN)** — Layer replacing feature statistics with scale and bias predicted from a style vector.
- **BigGAN** — Large-scale class-conditional GAN using orthogonal regularisation and the truncation trick for high-fidelity images.
- **Conditional GAN (cGAN)** — GAN whose generator and discriminator both receive an auxiliary conditioning input such as a class label.
- **CycleGAN** — Unpaired image translation framework with two generators constrained by cycle-consistency reconstruction losses.
- **DCGAN** — Convolutional GAN establishing architectural conventions: strided convolutions, batch normalisation and no fully connected layers.
- **Discriminator (critic)** — GAN network scoring whether a sample is real or generated, providing the generator's training signal.
- **Energy-based GAN (EBGAN)** — GAN whose discriminator is an autoencoder assigning low reconstruction energy to real samples.
- **Generative adversarial network (GAN)** — Generative framework training a generator against a discriminator in a two-player minimax game.  ⚠ *Largely superseded by diffusion and flow-based models for high-fidelity image generation.*
- **InfoGAN** — GAN maximising mutual information between a subset of latent codes and generated samples to induce interpretable factors.
- **LSGAN** — GAN replacing the log loss with least-squares objectives to stabilise gradients.
- **Mode collapse** — GAN failure where the generator produces limited sample variety, ignoring parts of the data distribution.
- **PatchGAN discriminator** — Fully convolutional discriminator classifying overlapping local patches rather than whole images.
- **Pix2Pix** — Conditional GAN for paired image-to-image translation with a U-Net generator and reconstruction loss.
- **Progressive growing GAN (ProGAN)** — Training scheme adding generator and discriminator layers incrementally to reach high resolutions.  ⚠ *Superseded by StyleGAN2's skip and residual design, which removed progressive growing.*
- **Spectral normalization** — Weight normalisation dividing by the largest singular value to bound a discriminator's Lipschitz constant.
- **StarGAN** — Single generator performing multi-domain image translation conditioned on a target domain label.
- **StyleGAN** — GAN generating from a mapped latent style vector injected through adaptive instance normalisation at each resolution.
- **StyleGAN2** — StyleGAN revision using weight demodulation, skip generators and path-length regularisation to remove droplet artefacts.
- **StyleGAN3** — StyleGAN revision redesigning signal processing to make generation translation and rotation equivariant, eliminating texture sticking.
- **Wasserstein GAN (WGAN)** — GAN minimising an approximated Earth-mover distance using a Lipschitz-constrained critic.
- **WGAN-GP** — Wasserstein GAN enforcing the Lipschitz constraint by penalising critic gradient norm instead of clipping weights.

### Normalising flows

- **Change-of-variables formula** — Identity relating transformed and base densities through the Jacobian determinant of the invertible map.
- **Continuous normalising flow (CNF)** — Flow defining the transformation as an ordinary differential equation integrated over continuous time.
- **Coupling layer** — Invertible layer transforming one half of the variables with parameters computed from the untouched half.
- **FFJORD** — Continuous flow using stochastic trace estimation to compute log-density changes without restricting the network.
- **Glow** — Flow adding invertible 1x1 convolutions and activation normalisation to affine coupling architectures.
- **Inverse autoregressive flow (IAF)** — Flow inverting the autoregressive direction to give fast sampling and slow density evaluation.
- **Invertible 1x1 convolution** — Learned channel permutation generalisation whose log-determinant is computed from an LU-factorised weight matrix.
- **Masked autoregressive flow (MAF)** — Flow stacking autoregressive transforms with fast density evaluation and sequential sampling.
- **Neural ordinary differential equation (Neural ODE)** — Model parameterising a hidden state's time derivative by a network and solving it with an ODE solver.
- **Neural spline flow** — Flow using monotonic rational-quadratic spline transforms for expressive, analytically invertible elementwise maps.
- **NICE** — First coupling-based flow, using purely additive couplings with unit Jacobian determinant.
- **Normalising flow** — Generative model transforming a simple base distribution through invertible maps with tractable exact likelihood.
- **RealNVP** — Flow extending NICE with affine couplings, multi-scale architecture and masked convolutions.
- **TarFlow** — Transformer-based autoregressive normalising flow demonstrating competitive likelihoods and sample quality at scale.

### Diffusion & flow matching

- **Classifier guidance** — Sampling method steering diffusion trajectories with gradients from a separately trained noisy-input classifier.
- **Classifier-free guidance (CFG)** — Sampling method extrapolating between conditional and unconditional model predictions to strengthen conditioning.
- **Conditional flow matching** — Tractable flow-matching objective regressing velocities of per-sample conditional paths instead of the intractable marginal field.
- **Consistency model** — Generative model trained so any point on a trajectory maps directly to its origin, enabling one-step sampling.
- **ControlNet** — Adapter cloning a diffusion backbone's encoder to inject spatial conditioning through zero-initialised connections.
- **DDIM** — Non-Markovian deterministic sampler letting a trained diffusion model generate in far fewer steps.
- **Denoising diffusion probabilistic model (DDPM)** — Discrete-time diffusion model trained to predict the noise added at each step.
- **Diffusion model** — Generative model that learns to reverse a gradual noising process, denoising samples step by step.
- **Diffusion transformer (DiT)** — Diffusion backbone replacing the U-Net with a transformer over latent patches, conditioned via adaptive normalisation.
- **Discrete (masked) diffusion** — Diffusion over categorical data whose forward process progressively masks or corrupts discrete tokens.
- **EDM formulation** — Unified diffusion design framework specifying preconditioning, noise distribution and sampler as separable choices.
- **Flow matching** — Simulation-free training that regresses a network onto the velocity field of a prescribed probability path.
- **Forward (noising) process** — Fixed Markov chain or SDE that progressively adds noise until data becomes approximately Gaussian.
- **Latent diffusion model (LDM)** — Diffusion model operating in a pretrained autoencoder's compressed latent space rather than pixel space.
- **MMDiT** — Multimodal diffusion transformer using separate weight streams for text and image tokens with joint attention.
- **Noise schedule** — Function setting how much noise is added at each diffusion timestep.
- **Probability flow ODE** — Deterministic ordinary differential equation sharing marginal distributions with a diffusion SDE, enabling exact likelihoods.
- **Rectified flow** — Generative model learning straight-line transport between noise and data by regressing constant velocity.
- **Reflow** — Procedure retraining a rectified flow on its own generated pairs to straighten trajectories further.
- **Score-based generative model** — Generative model learning the gradient of the log data density at each noise level.
- **Stochastic interpolants** — Framework defining generative transport by interpolating between two distributions, unifying diffusion and flow-based models.

### Energy-based models

- **Boltzmann machine** — Fully connected stochastic binary network whose distribution is defined by a quadratic energy.
- **Contrastive divergence** — Training approximation contrasting data statistics with those of short Markov chains started from data.
- **Deep belief network (DBN)** — Generative model of stacked RBMs trained greedily layer by layer.  ⚠ *Historical; superseded by end-to-end deep supervised and generative training.*
- **Energy function** — Scalar network output whose low values correspond to high-probability configurations.
- **Energy-based model (EBM)** — Model defining an unnormalised density through a learned scalar energy assigned to each configuration.
- **Hopfield network** — Recurrent associative memory storing patterns as energy minima recovered by iterative state updates.
- **Langevin dynamics sampling** — Sampling procedure following the energy gradient with added Gaussian noise at each step.
- **Modern Hopfield network** — Continuous associative memory with exponential storage capacity whose retrieval rule equals transformer attention.
- **Partition function** — Normalising constant summing or integrating the exponentiated negative energy over all configurations.
- **Restricted Boltzmann machine (RBM)** — Bipartite energy-based model with visible and hidden layers and no intra-layer connections.  ⚠ *Historical; superseded by backpropagation-trained deep networks and modern generative models.*

### Neural fields

- **3D Gaussian splatting (3DGS)** — Explicit scene representation of anisotropic 3D Gaussians rasterised differentiably for real-time novel-view synthesis.
- **Coordinate-based MLP** — Small fully connected network taking spatial or spatiotemporal coordinates as its only input.
- **DeepSDF** — Neural field regressing a signed distance function to represent shape surfaces as a zero level set.
- **Fourier feature mapping** — Encoding coordinates through sinusoids at multiple frequencies so networks can fit high-frequency detail.
- **Multiresolution hash encoding (Instant-NGP)** — Feature encoding indexing trainable vectors in multi-level hash tables, enabling very fast neural field training.
- **Neural field (implicit neural representation)** — Network representing a signal as a continuous function from coordinates to field values.
- **Neural radiance field (NeRF)** — Neural field mapping position and view direction to colour and density, rendered by differentiable volume integration.  ⚠ *Largely displaced for real-time novel-view synthesis by 3D Gaussian splatting.*
- **Occupancy network** — Implicit 3D representation predicting whether an arbitrary query point lies inside a shape.
- **SIREN** — Implicit representation network using periodic sine activations with principled weight initialisation.
- **Volume rendering** — Differentiable compositing of colour and density samples along camera rays to form a pixel.

### Residual & hybrid

- **Bottleneck residual block** — Residual block reducing channels with 1x1 convolution, filtering, then restoring width.
- **CoAtNet** — Vision architecture stacking depthwise convolution stages before relative-attention transformer stages.
- **Conformer** — Speech architecture inserting a convolution module inside each transformer block between two feedforward halves.
- **Griffin** — Hybrid architecture mixing gated linear recurrences with periodic local attention layers.
- **Hawk** — Purely recurrent architecture built from gated linear recurrent blocks without any attention layers.
- **Highway network** — Deep feedforward network with learned gates mixing transformed and carried-through signals.
- **Hybrid CNN-transformer** — Architecture combining convolutional stages for local features with attention stages for global context.
- **Hymba** — Small-model architecture running Mamba and attention heads in parallel within the same layer.
- **Jamba** — Hybrid language model interleaving Mamba and attention layers with mixture-of-experts feedforward blocks.
- **Pre-activation residual block** — Residual block applying normalisation and activation before the convolutions, giving a clean identity path.
- **Residual connection (skip connection)** — Additive shortcut adding a layer's input to its output, easing gradient flow through depth.
- **Samba** — Hybrid model alternating selective state space layers with sliding-window attention for efficient long-context recall.
- **Zamba** — Hybrid model using a Mamba backbone with a shared global attention module reused across depth.

## Vision, audio, multimodal, recommenders, time series and RL
*475 terms*

### Vision tasks

- **Amodal segmentation** — Predicting the full extent of an object including parts hidden by occlusion.
- **Anchor box** — Predefined reference box of fixed scale and aspect ratio against which detections are regressed.
- **Anchor-free detection** — Detection that predicts object centres, corners or keypoints directly without predefined reference boxes.
- **Bottom-up pose estimation** — Detecting all joints in an image first, then grouping them into individual people.
- **Content-based image retrieval** — Finding visually similar images by comparing learned embeddings rather than metadata.
- **Data association** — Matching current detections to existing tracks, typically by motion and appearance affinity.
- **Face detection** — Locating human faces in an image with bounding boxes.
- **Face recognition** — Matching a face image against an enrolled gallery to determine identity.
- **Face verification** — Deciding whether two face images depict the same identity.
- **Fine-grained classification** — Distinguishing visually similar subcategories within one broad class using subtle local cues.
- **Human pose estimation** — Predicting body joint locations and their skeletal connections from images or video.
- **Image classification** — Assigning one or more category labels to an entire image.
- **Image matting** — Estimating a continuous per-pixel opacity map separating foreground from background.
- **Instance segmentation** — Producing a separate pixel mask and class label for each distinct object instance.
- **Interactive segmentation** — Iteratively refining a mask from successive user clicks or scribbles.
- **Kalman filter tracking** — Recursive state estimator predicting object motion between frames to stabilise association.
- **Keypoint detection** — Locating semantically defined landmark points on an object or body.
- **Multi-object tracking (MOT)** — Maintaining consistent identities for multiple objects across the frames of a video.
- **Non-maximum suppression (NMS)** — Post-processing that removes overlapping duplicate detections, keeping the highest-scoring box per object.
- **Object detection** — Localising objects with bounding boxes and assigning each box a class label and confidence score.
- **One-stage detector** — Detector predicting classes and box coordinates directly from feature maps in a single pass.
- **Open-vocabulary detection (OVD)** — Detecting object categories unseen during training by matching regions to arbitrary text descriptions.
- **Open-vocabulary segmentation (OVS)** — Segmenting arbitrary text-named categories beyond the fixed label set used in training.
- **Optical flow** — Dense per-pixel motion field describing apparent displacement between consecutive frames.
- **Panoptic segmentation** — Unified labelling of every pixel with both a class and an instance identity where applicable.
- **Part segmentation** — Segmenting objects into their constituent semantic parts rather than whole-object regions.
- **Promptable segmentation** — Producing masks in response to point, box, mask or text prompts rather than fixed classes.
- **Re-identification (ReID)** — Matching the same object or person across non-overlapping cameras or time gaps using appearance embeddings.
- **Referring expression segmentation** — Producing the mask of the single object described by a natural-language phrase.
- **Region proposal network (RPN)** — Subnetwork generating class-agnostic candidate object regions for a downstream detection head.
- **Saliency detection** — Predicting which image regions attract visual attention.
- **Scene graph generation** — Extracting objects and their pairwise relationships as a structured graph from an image.
- **Semantic segmentation** — Assigning a class label to every pixel without distinguishing separate object instances.
- **Single object tracking (SOT)** — Following one target across a video given only its initial bounding box.
- **Soft-NMS** — Suppression variant that decays overlapping detection scores instead of deleting the boxes outright.
- **Temporal action localisation** — Identifying the start and end times of actions within an untrimmed video.
- **Things and stuff** — Distinction between countable object instances and amorphous background regions in panoptic labelling.
- **Top-down pose estimation** — Detecting people first, then estimating joints independently within each person crop.
- **Tracking-by-detection** — Tracking paradigm that runs a detector per frame and associates detections into tracks.
- **Two-stage detector** — Detector that first proposes candidate regions, then classifies and refines each proposal.
- **Video action recognition** — Classifying the activity occurring in a video clip.
- **Video object segmentation (VOS)** — Propagating object masks through a video sequence over time.
- **Visual anomaly detection** — Flagging images or pixels deviating from a learned distribution of normal appearance.
- **Visual grounding** — Localising the image region corresponding to a given natural-language expression.

### Vision architectures

- **Atrous spatial pyramid pooling (ASPP)** — Module aggregating context by parallel dilated convolutions at multiple rates.
- **Backbone, neck and head** — Standard detector decomposition into feature extractor, feature aggregator and task-specific prediction module.
- **Detectron2** `[tool]` — Open-source library implementing detection, segmentation and keypoint models on PyTorch.
- **DETR** `[tool]` — End-to-end detection transformer predicting a fixed set of objects via bipartite matching.
- **Dilated convolution** — Convolution with gaps between kernel taps, enlarging receptive field without extra parameters.
- **DINOv2** `[tool]` — Self-supervised vision backbone producing general-purpose dense and global image features.
- **Hungarian matching** — Bipartite assignment used to pair predicted objects with ground-truth objects during training.
- **Mask classification** — Segmentation formulation predicting a set of binary masks each paired with a class label.
- **MMDetection** `[tool]` — Modular open-source toolbox providing many detection and instance segmentation architectures.
- **Segment Anything Model (SAM)** `[tool]` — Promptable segmentation foundation model producing class-agnostic masks from points, boxes or masks.
- **Squeeze-and-excitation block** — Channel attention module rescaling feature maps by learned global channel importance.

### Image preprocessing & augmentation

- **Albumentations** `[tool]` — Python library providing fast image augmentation pipelines with annotation-aware transforms.
- **AugMix** — Augmentation mixing several augmentation chains and enforcing consistency across them.
- **AutoAugment** — Augmentation policy discovered by search over operation sequences and magnitudes.
- **Channel normalisation** — Scaling pixel values by dataset per-channel mean and standard deviation before model input.
- **CLAHE** — Contrast-limited adaptive histogram equalisation applied to local image tiles with clipping.
- **Colour jitter** — Augmentation randomly perturbing brightness, contrast, saturation and hue.
- **Copy-paste augmentation** — Augmentation pasting segmented object instances from one image onto another.
- **Elastic deformation** — Augmentation warping an image by a smooth random displacement field.
- **Histogram equalisation** — Contrast enhancement that redistributes pixel intensities toward a uniform histogram.
- **Letterboxing** — Resizing an image to a target shape by padding rather than distorting aspect ratio.
- **Mosaic augmentation** — Augmentation tiling four training images into one composite with adjusted annotations.
- **RandAugment** — Augmentation applying a fixed number of randomly chosen operations at a single shared magnitude.
- **Random erasing** — Augmentation replacing a random rectangle with random or mean pixel values.
- **Random resized crop** — Augmentation taking a random-scale, random-aspect crop and resizing it to the input size.
- **Scale jittering** — Augmentation randomly rescaling images across a wide range before cropping.
- **Test-time augmentation (TTA)** — Averaging predictions over several augmented copies of an input at inference.
- **TrivialAugment** — Parameter-free augmentation applying one random operation at a random magnitude per image.

### Vision metrics & losses

- **Chamfer distance** — Point cloud metric averaging nearest-neighbour distances in both directions between two sets.
- **COCO AP** — Detection metric averaging average precision across IoU thresholds from 0.5 to 0.95.
- **Dice coefficient** — Overlap metric equal to twice the intersection divided by the sum of region sizes.
- **End-point error (EPE)** — Optical flow metric averaging Euclidean distance between predicted and true motion vectors.
- **GIoU, DIoU and CIoU losses** — Box regression losses extending IoU with enclosing-box, centre-distance and aspect-ratio terms.
- **HOTA** — Tracking metric balancing detection accuracy and association accuracy in a single score.
- **IDF1** — Tracking metric measuring F1 of correctly identified detections under optimal identity mapping.
- **Intersection over union (IoU)** — Overlap ratio between predicted and ground-truth regions, computed as intersection area over union area.
- **LPIPS** — Perceptual similarity metric comparing deep network feature activations of two images.
- **Mean intersection over union (mIoU)** — Segmentation metric averaging per-class IoU across all classes.
- **MOTA** — Tracking metric aggregating false positives, missed targets and identity switches.
- **Object keypoint similarity (OKS)** — Pose metric scoring predicted keypoints by scale-normalised distance to ground truth.
- **Peak signal-to-noise ratio (PSNR)** — Reconstruction metric expressing pixel-wise error relative to maximum signal power, in decibels.
- **Percentage of correct keypoints (PCK)** — Pose metric counting keypoints within a distance threshold of ground truth.
- **Smooth L1 loss** — Box regression loss behaving quadratically near zero and linearly for large errors.
- **Structural similarity index (SSIM)** — Image quality metric comparing local luminance, contrast and structure.
- **Tversky loss** — Segmentation loss generalising Dice with tunable weights on false positives and negatives.

### 3D & geometric vision

- **6-DoF pose estimation** — Estimating an object's three-dimensional translation and rotation relative to the camera.
- **Bird's eye view (BEV) perception** — Fusing multi-sensor inputs into a top-down spatial grid for driving perception.
- **Camera calibration** — Estimating intrinsic lens parameters and extrinsic pose that map world points to pixels.
- **Epipolar geometry** — Geometric constraint relating corresponding points across two views of a scene.
- **LiDAR point cloud processing** — Detection and segmentation applied to sparse 3D returns from laser range sensors.
- **Metric depth** — Depth prediction expressed in real-world physical units such as metres.
- **Monocular depth estimation** — Predicting per-pixel distance from the camera using a single image.
- **Multi-view stereo (MVS)** — Dense 3D reconstruction from many calibrated images of the same scene.
- **Novel view synthesis** — Rendering a scene from camera viewpoints not present in the captured images.
- **Point cloud** — Unordered set of 3D coordinates, optionally with colour or intensity attributes.
- **Relative depth** — Depth prediction defined only up to unknown global scale and shift.
- **Signed distance function (SDF)** — Implicit surface representation storing signed distance from each point to the nearest surface.
- **Simultaneous localisation and mapping (SLAM)** — Building a map of an unknown environment while tracking the sensor's pose within it.
- **Stereo matching** — Computing pixel disparity between rectified image pairs to recover depth by triangulation.
- **Structure from motion (SfM)** — Recovering 3D scene structure and camera poses from an unordered image collection.
- **Visual odometry** — Estimating incremental camera motion from a sequence of images.
- **Voxel grid** — Regular 3D lattice discretising space into cubic cells holding occupancy or features.

### Document AI & OCR

- **Binarisation** — Converting a document image to black and white by thresholding.
- **Deskewing** — Rotating a scanned page to correct tilt before recognition.
- **Document layout analysis** — Segmenting a page into structural regions such as headings, paragraphs, tables and figures.
- **Handwritten text recognition (HTR)** — Transcribing cursive or printed handwriting into digital text.
- **Key information extraction (KIE)** — Extracting named field values from semi-structured documents using text, layout and visual cues.
- **Optical character recognition (OCR)** — Converting text depicted in images into machine-readable character sequences.
- **Scene text detection** — Localising text regions in natural images with boxes or polygons.
- **Scene text recognition** — Transcribing characters from a cropped text region of a natural image.
- **Table structure recognition** — Recovering rows, columns and cell spans from a table image.

### Visual generation

- **Image-to-image translation** — Mapping an image from one visual domain to another while preserving structure.
- **Inpainting** — Regenerating a masked image region so it blends with surrounding content.
- **Latent diffusion** — Diffusion generation performed in a compressed autoencoder latent space rather than pixel space.
- **Negative prompt** — Conditioning text specifying content the generated image should avoid.
- **Neural style transfer** — Recombining the content of one image with the visual style of another.
- **Outpainting** — Extending an image beyond its original borders with generated content.
- **Super-resolution** — Reconstructing a higher-resolution image from a lower-resolution input.
- **Text-to-image generation** — Synthesising an image conditioned on a natural-language description.
- **Text-to-video generation** — Synthesising a temporally coherent video clip from a text description.

### Audio signal & features

- **Acoustic and semantic tokens** — Discrete audio representations capturing waveform detail versus linguistic content respectively.
- **Beamforming** — Combining multiple microphone signals with directional weighting to enhance a target source.
- **Bit depth** — Number of bits used to quantise each audio sample amplitude.
- **Dereverberation** — Removing the reverberant tail introduced by room acoustics from recorded audio.
- **Fundamental frequency (F0)** — Lowest periodic frequency of a voiced sound, perceived as pitch.
- **librosa** `[tool]` — Python library for audio loading, feature extraction and time-frequency analysis.
- **Log-mel filterbank features** — Logarithmic energies of mel-spaced triangular filters, the standard input to neural speech models.
- **Mel spectrogram** — Spectrogram whose frequency axis is warped to the perceptual mel scale.
- **Mel-frequency cepstral coefficients (MFCC)** — Compact cepstral features derived by discrete cosine transform of log mel filterbank energies.
- **Neural audio codec** — Learned encoder-decoder compressing audio into discrete tokens and reconstructing the waveform.
- **Room impulse response augmentation** — Convolving clean audio with measured or simulated reverberation to simulate acoustic environments.
- **Sampling rate** — Number of amplitude measurements taken per second when digitising an audio signal.
- **Short-time Fourier transform (STFT)** — Transform computing frequency content over successive short overlapping windows of a signal.
- **Source separation** — Decomposing a mixed audio signal into its constituent sources.
- **SpecAugment** — Augmentation masking bands of time and frequency in a spectrogram during training.
- **Spectrogram** — Time-frequency image of signal energy produced from the magnitude of an STFT.
- **Speech enhancement** — Suppressing noise and distortion to improve the quality or intelligibility of speech.
- **torchaudio** `[tool]` — PyTorch library providing audio I/O, transforms and pretrained speech models.
- **Voice activity detection (VAD)** — Deciding which segments of an audio stream contain speech.
- **Windowing** — Multiplying signal frames by a tapered function to reduce spectral leakage.
- **Zero-crossing rate** — Rate at which a waveform changes sign, a simple noisiness descriptor.

### Speech recognition

- **Acoustic model** — Component mapping audio features to phonetic or subword unit likelihoods.
- **Attention-based encoder-decoder ASR** — Sequence-to-sequence recogniser generating text tokens while attending over encoded audio.
- **Automatic speech recognition (ASR)** — Transcribing spoken audio into text.
- **Concatenated minimum-permutation WER (cpWER)** — Multi-speaker metric computing WER under the best speaker-to-hypothesis assignment.
- **Connectionist temporal classification (CTC)** — Training objective aligning unsegmented audio to output labels by marginalising over blank-augmented alignments.
- **Endpointing** — Detecting when a speaker has finished an utterance so recognition can be finalised.
- **Forced alignment** — Aligning a known transcript to audio to obtain word or phoneme time boundaries.
- **HMM-GMM hybrid system** — Classical recogniser combining hidden Markov state sequences with Gaussian mixture acoustic likelihoods.  ⚠ *Superseded by end-to-end neural ASR for new systems.*
- **Inverse text normalisation (ITN)** — Converting spoken-form recogniser output into written conventions for numbers, dates and currency.
- **Kaldi** `[tool]` — C++ toolkit for hybrid speech recognition pipelines with finite-state transducer decoding.  ⚠ *Maintenance mode; k2/Icefall and end-to-end toolkits are used for new work.*
- **Keyword spotting** — Detecting occurrences of specific target words in continuous audio.
- **Mozilla DeepSpeech** `[tool]` — Open-source end-to-end speech recognition engine based on a recurrent CTC architecture.  ⚠ *Discontinued; successor Coqui STT also discontinued.*
- **Pronunciation lexicon** — Dictionary mapping words to phoneme sequences for hybrid recognition systems.
- **Real-time factor (RTF)** — Ratio of processing time to audio duration, measuring recognition speed.
- **RNN transducer (RNN-T)** — Streaming-capable ASR architecture jointly modelling audio encoding and output label history.
- **Shallow fusion** — Decoding technique interpolating an external language model score with the recogniser's score.
- **Streaming ASR** — Recognition producing partial transcripts incrementally with bounded latency as audio arrives.
- **Wake word detection** — Always-on low-power detection of a trigger phrase that activates a voice assistant.
- **wav2vec 2.0** `[tool]` — Self-supervised speech representation model pretrained by contrastive prediction over masked audio.
- **Whisper** `[tool]` — Open-weight multilingual speech recognition and translation model family trained on weakly supervised audio.

### Speech synthesis & voice

- **Comparative MOS (CMOS)** — Listening test scoring the preference margin between two synthesis systems on paired samples.
- **Concatenative synthesis** — Speech generation by splicing recorded units from a pre-recorded voice database.  ⚠ *Superseded by neural text-to-speech.*
- **Duration predictor** — Module estimating how many acoustic frames each input token should occupy.
- **FastSpeech** `[tool]` — Non-autoregressive TTS model using an explicit duration predictor for parallel spectrogram generation.
- **Grapheme-to-phoneme conversion (G2P)** — Mapping written text to its phonemic pronunciation for synthesis.
- **Griffin-Lim algorithm** — Iterative phase reconstruction converting magnitude spectrograms to waveforms without learning.  ⚠ *Legacy; neural vocoders produce substantially higher quality.*
- **HiFi-GAN** `[tool]` — Adversarially trained vocoder producing high-fidelity waveforms at fast inference speed.
- **MUSHRA** — Listening test methodology rating multiple stimuli against a hidden reference and anchors.
- **Neural vocoder** — Model converting acoustic features such as mel spectrograms into a waveform.
- **Prosody control** — Steering pitch, duration, energy and rhythm of synthesised speech.
- **Speech-to-speech translation** — Producing spoken output in a target language directly from spoken source audio.
- **Tacotron** `[tool]` — Attention-based sequence-to-sequence model predicting mel spectrograms from characters.  ⚠ *Superseded by non-autoregressive and fully end-to-end TTS architectures.*
- **Text-to-speech (TTS)** — Synthesising an intelligible speech waveform from input text.
- **VITS** `[tool]` — End-to-end TTS model combining variational inference, normalising flows and adversarial waveform training.
- **Voice conversion** — Transforming the speaker identity of an utterance while preserving its linguistic content.
- **Zero-shot voice cloning** — Synthesising speech in a target voice from a short reference sample without fine-tuning.

### Speaker & audio understanding

- **Acoustic scene classification** — Labelling a recording with the environment in which it was captured.
- **Anti-spoofing** — Detecting synthetic, replayed or converted speech presented as a genuine speaker.
- **Audio fingerprinting** — Compact robust hashing of audio enabling identification of a recording from a short excerpt.
- **Audio tagging** — Assigning clip-level sound category labels without temporal boundaries.
- **Diarisation error rate (DER)** — Metric summing missed speech, false alarm and speaker confusion time over total speech time.
- **ECAPA-TDNN** `[tool]` — Speaker embedding architecture with channel attention, propagation and aggregation over time-delay layers.
- **End-to-end neural diarisation (EEND)** — Diarisation formulated as direct multi-label per-speaker activity prediction from audio.
- **Music information retrieval (MIR)** — Extracting structured musical attributes such as tempo, key, chords and structure from audio.
- **Overlapped speech detection** — Identifying intervals where more than one speaker is talking simultaneously.
- **pyannote.audio** `[tool]` — Open-source toolkit for speaker diarisation, segmentation and voice activity detection.
- **Sound event detection (SED)** — Identifying acoustic events and their onset and offset times in a recording.
- **Speaker diarisation** — Partitioning audio into segments labelled by who is speaking when.
- **Speaker embedding** — Fixed-length vector encoding voice characteristics independent of spoken content.
- **Speaker identification** — Determining which enrolled speaker produced an utterance.
- **Speaker verification** — Deciding whether an utterance matches a claimed speaker identity.
- **Speech emotion recognition (SER)** — Classifying the affective state conveyed by a speaker's voice.
- **Spoken language identification (LID)** — Determining which language is being spoken in an audio segment.
- **Spoken language understanding (SLU)** — Extracting intents and slot values directly from speech.
- **x-vector** — Time-delay neural network speaker embedding produced by statistics pooling over frames.  ⚠ *Largely superseded by ECAPA-TDNN embeddings.*

### Multimodal fusion

- **Any-to-any model** — Model accepting and generating multiple modalities through a shared representation and decoder.
- **Cross-attention fusion** — Integration in which tokens of one modality attend over tokens of another.
- **Dual-stream architecture** — Multimodal model encoding each modality separately before a dedicated interaction stage.
- **Early fusion** — Combining raw or low-level features from multiple modalities before joint model processing.
- **Interleaved multimodal input** — Sequence mixing text with images or other modalities in arbitrary order.
- **Intermediate fusion** — Merging modality representations at one or more hidden layers inside the network.
- **Joint embedding space** — Shared vector space where semantically corresponding items from different modalities lie close together.
- **Late fusion** — Combining independent per-modality predictions or embeddings only at the final decision stage.
- **Modality** — A distinct channel of input or output such as text, image, audio or video.
- **Modality dropout** — Training technique randomly withholding modalities so the model tolerates missing inputs.
- **Modality gap** — Systematic separation between modality clusters within a jointly trained embedding space.
- **Perceiver resampler** — Module resampling a variable-length feature sequence into a fixed number of latent tokens.
- **Projection connector** — Small trainable network mapping encoder outputs of one modality into a language model's token space.
- **Q-Former** — Query transformer compressing encoder features into a small set of learned query tokens.
- **Single-stream architecture** — Multimodal model concatenating tokens from all modalities into one shared transformer.
- **Visual token compression** — Reducing the number of image tokens fed to a language model to cut compute.

### Multimodal models & tasks

- **Audio captioning** — Generating a natural-language description of the sounds in an audio clip.
- **Audio-language model** — Model jointly processing audio and text for understanding or generation.
- **Contrastive language-image pretraining (CLIP)** `[tool]` — Training paired image and text encoders to align matching pairs and separate mismatched ones.
- **Cross-modal retrieval** — Searching items of one modality using a query expressed in another modality.
- **Image captioning** — Generating a natural-language description of an image's content.
- **ImageBind** `[tool]` — Model aligning several modalities into a single embedding space using image-paired data.
- **InfoNCE loss** — Contrastive objective classifying the true pair against sampled negatives via a softmax over similarities.
- **Multimodal hallucination** — Model output asserting objects, attributes or relations absent from the provided input.
- **Multimodal large language model (MLLM)** — Language model extended with encoders enabling reasoning over non-text inputs.
- **Multimodal retrieval-augmented generation** — Generation conditioned on retrieved evidence spanning images, tables or audio as well as text.
- **OCR-free document understanding** — Answering questions over document images without a separate text extraction stage.
- **Speech-native language model** — Language model consuming and emitting speech tokens directly without intermediate transcription.
- **Temperature parameter** — Scalar scaling similarity logits in a contrastive loss, controlling sharpness of the distribution.
- **Text-to-audio generation** — Synthesising non-speech sound or music from a text description.
- **Video-language model** — Model reasoning jointly over video frames, temporal structure and text.
- **Vision-language model (VLM)** — Model that jointly processes images and text to produce language or grounded outputs.
- **Vision-language-action model (VLA)** — Embodied model mapping visual observations and language instructions to robot control actions.
- **Visual instruction tuning** — Fine-tuning a multimodal model on instruction-response pairs grounded in images.
- **Visual question answering (VQA)** — Answering natural-language questions about the content of an image.
- **Zero-shot image classification** — Classifying images by comparing their embeddings to text embeddings of candidate class names.

### Recommender foundations

- **Alternating least squares (ALS)** — Optimisation for matrix factorisation that solves user and item factors in alternating closed-form steps.
- **Bayesian personalised ranking (BPR)** — Pairwise ranking objective maximising the margin between interacted and non-interacted items.
- **Collaborative filtering** — Recommending items using patterns in interactions across many users rather than item content.
- **Content-based filtering** — Recommending items whose attributes resemble those a user previously engaged with.
- **Embedding table** — Learned lookup matrix mapping categorical identifiers to dense vectors.
- **Explicit feedback** — Deliberate user judgements such as ratings or thumbs signals.
- **Factorization machines (FM)** — Model capturing pairwise feature interactions through shared low-rank embeddings on sparse inputs.
- **Field-aware factorization machines (FFM)** — Factorization machine variant learning separate embeddings per interacting feature field.
- **Hard negative mining** — Retrieving high-scoring non-relevant items with the current or an auxiliary model to build training negatives.
- **Hashing trick for IDs** — Mapping high-cardinality identifiers into a fixed-size embedding table via hash functions.
- **Hybrid recommender** — System combining collaborative and content signals in one model or ensemble.
- **Implicit feedback** — Behavioural signals such as clicks, dwell time or purchases treated as preference evidence.
- **In-batch negatives** — Using other examples in the same training batch as negatives for contrastive retrieval training.
- **Matrix factorisation** — Decomposing the interaction matrix into low-dimensional user and item latent factor matrices.
- **Negative sampling** — Approximating a full softmax by contrasting each true pair against a few randomly drawn incorrect pairs.
- **Neighbourhood methods** — Collaborative filtering that scores items by similarity to a user's or item's nearest neighbours.
- **Recommender system** — System ranking items for a user by predicted relevance or engagement.
- **Sampled softmax** — Approximation of a full-catalogue softmax computed over a sampled subset of items.
- **User-item interaction matrix** — Sparse matrix whose entries record observed interactions between users and items.
- **Weighted implicit matrix factorisation** — Factorisation treating unobserved interactions as low-confidence negatives with tunable weights.

### Recommender architectures

- **Approximate nearest neighbour retrieval** — Sublinear vector search returning close embeddings without exhaustive comparison.
- **BERT4Rec** `[tool]` — Sequential recommender trained by predicting masked items using bidirectional self-attention.
- **Candidate generation** — Retrieval stage narrowing a large catalogue to a few hundred plausible items.
- **Deep and Cross Network (DCN)** `[tool]` — Architecture with explicit cross layers producing bounded-degree feature interactions alongside a deep tower.
- **DeepFM** `[tool]` — Model combining a factorization machine component with a deep network over shared embeddings.
- **Generative retrieval** — Ranking by having a sequence model directly generate document identifiers instead of scoring an index.
- **Graph-based recommendation** — Recommendation propagating signals over the bipartite user-item interaction graph.
- **GRU4Rec** `[tool]` — Recurrent session-based recommender modelling interaction sequences with gated recurrent units.
- **LightGCN** `[tool]` — Simplified graph convolution recommender using neighbourhood aggregation without feature transforms or nonlinearities.
- **LLM-based recommendation** — Using a large language model to rank, generate or explain item recommendations.
- **Multi-gate mixture-of-experts (MMoE)** — Multi-task architecture where task-specific gates weight shared expert subnetworks.
- **Multi-stage recommender** — Pipeline chaining retrieval, filtering, ranking and re-ranking under tightening latency budgets.
- **Neural collaborative filtering (NCF)** — Replacing the factorisation dot product with a learned neural interaction function.
- **Ranking stage** — Stage scoring retrieved candidates with a heavier model using rich features.
- **Re-ranking** — Final stage reordering ranked items for diversity, freshness, business rules or constraints.
- **RQ-VAE tokeniser** — Residual-quantised autoencoder producing hierarchical discrete codes used as semantic identifiers.
- **SASRec** `[tool]` — Self-attentive sequential recommender predicting the next item from an attended interaction history.
- **Semantic ID** — Item identifier expressed as a hierarchical sequence of discrete tokens derived from item content.
- **Sequential recommendation** — Predicting the next item from the ordered history of a user's interactions.
- **Session-based recommendation** — Recommending within an anonymous short interaction session without long-term user history.
- **Two-tower model** — Retrieval architecture with separate user and item encoders scored by embedding dot product.
- **Wide and Deep** — Architecture jointly training a memorising linear component and a generalising deep component.

### Recommender evaluation & dynamics

- **Catalogue coverage** — Share of the item catalogue that a system recommends across all users.
- **Cold start** — Delay incurred when a replica must be provisioned and model weights loaded before first response.
- **Contextual bandit recommendation** — Online recommendation balancing exploring uncertain items against exploiting known-good ones using context.
- **Counterfactual learning to rank** — Training ranking models on logged clicks while correcting for presentation biases.
- **Determinantal point process diversification** — Selection method sampling subsets whose diversity is encoded by a kernel determinant.
- **Exposure bias** — Distortion arising because training data only contains items the system previously showed.
- **Feedback loop** — Self-reinforcing cycle where a model's own recommendations shape the data used to retrain it.
- **Filter bubble** — Narrowing of a user's exposure caused by repeated reinforcement of inferred preferences.
- **Hit rate** — Proportion of sessions where at least one relevant item appears in the top-k list.
- **Interleaving experiment** — Online evaluation blending two rankers' results in one list to compare them with high sensitivity.
- **Intra-list diversity** — Dissimilarity among the items within a single recommendation list.
- **Maximal marginal relevance (MMR)** — A selection rule balancing relevance against redundancy with already-chosen results to diversify a ranking.
- **Novelty** — Degree to which recommended items are unfamiliar or unpopular relative to the user's history.
- **Off-policy evaluation** — Estimating the performance of a new ranking policy from data logged under a different policy.
- **Popularity bias** — Tendency of recommenders to over-recommend already popular items and under-serve the long tail.
- **Precision at k** — Fraction of the top-k recommended items that are relevant.
- **Recall at k** — Fraction of all relevant items that appear within the top-k recommendations.
- **Serendipity** — Degree to which recommendations are both unexpected and useful to the user.
- **Side information** — Auxiliary user or item attributes used to supplement sparse interaction signals.
- **Temporal split evaluation** — Offline evaluation splitting interactions by time so training precedes testing.

### Time series foundations

- **Additive and multiplicative decomposition** — Alternative assumptions about whether components sum or multiply to reconstruct the series.
- **Augmented Dickey-Fuller test (ADF)** — Hypothesis test for the presence of a unit root in a series.
- **Autocorrelation function (ACF)** — Correlation of a series with its own lagged values across lag lengths.
- **Cointegration** — Relationship where non-stationary series share a stationary linear combination.
- **Context window (lookback)** — Length of recent history a forecasting model conditions on.
- **Cyclical component** — Recurring fluctuation with variable, non-fixed period, typically longer than seasonal cycles.
- **Differencing** — Transformation replacing each value by its change from a previous value to induce stationarity.
- **Exogenous variable** — External driver used as an input to a forecast but not itself forecast by the model.
- **Forecast horizon** — Number of future time steps a model is asked to predict.
- **Forecast reconciliation** — Adjusting forecasts across a hierarchy so they sum consistently at every aggregation level.
- **Global versus local forecasting models** — Distinction between one model trained across many series and one model fitted per series.
- **Granger causality** — Statistical criterion holding that one series' past improves prediction of another's future.
- **Heteroscedasticity** — Condition where the variance of a series or its errors changes over time.
- **Hierarchical time series** — Collection of series linked by aggregation structure across levels of a hierarchy.
- **Intermittent demand** — Series with many zero periods interspersed with sporadic non-zero values.
- **KPSS test** — Hypothesis test whose null is that a series is stationary around a deterministic trend.
- **Lag feature** — Predictor constructed from a series' value at a fixed number of steps earlier.
- **Minimum trace reconciliation (MinT)** — Reconciliation method minimising the trace of the coherent forecast error covariance.
- **Partial autocorrelation function (PACF)** — Correlation at a given lag after removing the effects of shorter lags.
- **Random walk** — Process whose current value equals the previous value plus an independent random shock.
- **Rolling window statistic** — Feature computed over a sliding fixed-length window of recent observations.
- **Rolling-origin cross-validation** — Validation scheme repeatedly advancing the train-test split forward through time.
- **Seasonal-trend decomposition using LOESS (STL)** — Decomposition splitting a series into trend, seasonal and remainder using local regression smoothing.
- **Seasonality** — Pattern that repeats at a fixed known period within a series.
- **Stationarity** — Property that a series' statistical characteristics do not change over time.
- **Temporal leakage** — Error where features encode information unavailable at the time the forecast would be made.
- **Time series** — Sequence of observations indexed by time, usually at regular intervals.
- **Trend component** — Long-run direction of a series after short-run fluctuations are removed.
- **Unit root** — Characteristic of a stochastic process causing non-stationary random-walk behaviour.
- **Univariate and multivariate series** — Distinction between a single measured variable over time and several jointly recorded variables.
- **White noise** — Series of uncorrelated observations with constant mean and variance.

### Forecasting models

- **ARIMA** — Model combining autoregressive terms, differencing and moving-average error terms.
- **Autoformer** `[tool]` — Forecasting transformer replacing dot-product attention with series decomposition and auto-correlation.
- **Bayesian structural time series (BSTS)** — State space forecasting with explicit priors over trend, seasonality and regression components.
- **Chronos** `[tool]` — Time series foundation model family that tokenises scaled series values for probabilistic forecasting.
- **Croston's method** — Intermittent demand forecasting that separately smooths demand sizes and inter-arrival intervals.
- **DeepAR** `[tool]` — Autoregressive recurrent model producing probabilistic forecasts trained globally across many series.
- **DLinear** `[tool]` — Simple linear forecasting baseline over decomposed trend and seasonal components.
- **ETS model** — State space family parameterising error, trend and seasonal components in additive or multiplicative form.
- **GARCH** — Model of time-varying conditional variance driven by past shocks and past variances.
- **Holt-Winters method** — Exponential smoothing extended with separate level, trend and seasonal update equations.
- **Informer** `[tool]` — Long-sequence forecasting transformer using sparse attention to reduce quadratic cost.
- **Kalman filter** — Recursive algorithm estimating latent state of a linear Gaussian system from sequential observations.
- **Lag-Llama** `[tool]` — Decoder-only probabilistic forecasting foundation model conditioned on lagged values.
- **Moirai** `[tool]` — Universal time series foundation model handling any frequency, covariates and multiple variates.
- **N-BEATS** `[tool]` — Deep forecasting architecture of stacked fully connected blocks with backcast and forecast branches.
- **N-HiTS** `[tool]` — Hierarchical interpolation forecasting model using multi-rate sampling across frequency bands.
- **Nixtla statsforecast** `[tool]` — Python library implementing fast classical statistical forecasting models at scale.
- **PatchTST** `[tool]` — Forecasting transformer splitting each channel's series into patches treated as tokens.
- **SARIMA** — ARIMA extended with seasonal autoregressive, differencing and moving-average terms.
- **SARIMAX** — Seasonal ARIMA augmented with exogenous regressors.
- **Seasonal naive baseline** — Forecast that repeats the observation from the same point in the previous season.
- **Simple exponential smoothing** — Forecast method taking an exponentially weighted average of past observations.
- **State space model** — Formulation separating latent evolving states from noisy observations of them.
- **Tabular reduction forecasting** — Recasting forecasting as supervised regression on lag and calendar features for gradient boosting.
- **Temporal Fusion Transformer (TFT)** `[tool]` — Attention-based forecaster with variable selection, gating and interpretable temporal attention.
- **Theta method** — Decomposition-based forecasting method combining lines with modified local curvature.
- **Time series foundation model (TSFM)** — Model pretrained on large heterogeneous series corpora for zero-shot or few-shot forecasting.
- **TimeGPT** `[tool]` — Commercial pretrained forecasting model served through an API for zero-shot prediction.
- **TimesFM** `[tool]` — Decoder-only time series foundation model producing patch-based multi-horizon forecasts.
- **Vector autoregression (VAR)** — Multivariate model regressing each series on lagged values of all series in the system.

### Time series evaluation & anomalies

- **Change point detection** — Locating times at which a series' statistical properties shift.
- **Conformal prediction for forecasting** — Distribution-free method calibrating prediction intervals with guaranteed marginal coverage.
- **Dynamic time warping (DTW)** — Distance measure aligning two series by non-linearly stretching the time axis.
- **Forecast bias** — Systematic tendency of forecasts to run above or below actual values.
- **Matrix profile** — Data structure recording nearest-neighbour subsequence distances used for motif and discord discovery.
- **Prediction interval coverage** — Share of actual values falling inside forecast intervals at their nominal level.
- **Probabilistic forecasting** — Producing a distribution or quantiles over future values rather than a single point.
- **Reconstruction-based anomaly detection** — Flagging points whose reconstruction error under a learned normal model is large.
- **ROCKET** `[tool]` — Time series classification method using many random convolutional kernels with a linear classifier.
- **Shapelets** — Discriminative subsequences whose presence distinguishes series classes.
- **Time series anomaly detection** — Identifying observations, subsequences or shifts that deviate from learned normal temporal behaviour.
- **Time series classification** — Assigning a categorical label to an entire series or subsequence.

### RL foundations

- **Action space** — Set of actions available to an agent, either discrete or continuous.
- **Action value function** — Expected return from taking a specific action in a state and following the policy thereafter.
- **Advantage function** — Difference between an action's value and the state's value under the current policy.
- **Agent and environment** — Decomposition into the decision-making learner and the external system it acts upon.
- **Bellman equation** — Recursive identity relating a state's value to immediate reward plus discounted successor value.
- **Boltzmann exploration** — Action selection sampling from a softmax over action values with a temperature parameter.
- **Credit assignment** — Problem of attributing delayed outcomes to the specific earlier actions responsible.
- **Deadly triad** — Instability arising when function approximation, bootstrapping and off-policy learning are combined.
- **Discount factor** — Coefficient weighting future rewards less than immediate ones in the return.
- **Eligibility traces** — Decaying memory of recently visited states that spreads credit across multiple steps.
- **Entropy bonus** — Regularisation term rewarding policy stochasticity to prevent premature convergence.
- **Episode** — One complete interaction sequence from an initial state to a terminal state.
- **Epsilon-greedy exploration** — Strategy taking a random action with fixed probability and the greedy action otherwise.
- **Exploration-exploitation trade-off** — Tension between gathering information about unknown actions and maximising reward from known ones.
- **Generalised advantage estimation (GAE)** — Advantage estimator interpolating between low-variance bootstrapped and low-bias multi-step returns.
- **Intrinsic motivation** — Internally generated reward encouraging exploration independent of environment reward.
- **Markov decision process (MDP)** — Formalism defining states, actions, transition probabilities, rewards and a discount factor.
- **Monte Carlo methods** — Value estimation from complete episode returns without bootstrapping intermediate estimates.
- **Off-policy learning** — Learning about a target policy from data generated by a different behaviour policy.
- **On-policy learning** — Learning from data generated by the same policy currently being improved.
- **Partially observable MDP (POMDP)** — MDP variant where the agent receives incomplete observations rather than the true state.
- **Policy** — Mapping from states to actions or to a distribution over actions.
- **Policy iteration** — Dynamic programming loop alternating policy evaluation with greedy policy improvement.
- **Potential-based reward shaping** — Shaping formulation provably preserving the optimal policy of the original problem.
- **Prioritised experience replay** — Replay sampling that favours transitions with large temporal difference error.
- **Random network distillation (RND)** — Exploration bonus derived from prediction error against a fixed randomly initialised network.
- **Reinforcement learning (RL)** — Learning a behaviour policy through trial-and-error interaction that maximises cumulative reward.
- **Replay buffer** — Memory of past transitions resampled to decorrelate updates and improve sample efficiency.
- **Return** — Cumulative, usually discounted, reward accumulated from a time step onward.
- **Reward hacking** — Policy exploiting flaws in the reward signal to score highly without achieving the intended behaviour.
- **Reward shaping** — Adding auxiliary reward terms to guide learning toward the intended behaviour.
- **Reward signal** — Scalar feedback quantifying the immediate desirability of a transition.
- **Rollout** — Simulated or executed run of a policy used to gather experience or evaluate a plan.
- **Sparse reward** — Setting where informative reward is received only rarely, complicating learning.
- **State and observation** — Distinction between the environment's full configuration and the partial signal the agent receives.
- **State value function** — Expected return obtainable from a state under a given policy.
- **Target network** — Slowly updated copy of the value network used to stabilise bootstrapped targets.
- **Temporal difference learning** — Value updating from the difference between successive estimates rather than complete returns.
- **Trajectory** — Recorded sequence of states, actions and rewards generated by a policy.
- **Value iteration** — Dynamic programming that repeatedly applies the Bellman optimality backup to converge on optimal values.

### RL algorithms

- **A2C and A3C** — Synchronous and asynchronous advantage actor-critic algorithms using parallel environment workers.
- **Actor-critic** — Architecture pairing a policy actor with a learned value critic that reduces gradient variance.
- **Deep deterministic policy gradient (DDPG)** — Off-policy actor-critic algorithm for continuous control with a deterministic policy.
- **Deep Q-Network (DQN)** — Q-learning with a neural value approximator, replay buffer and target network.
- **Direct Preference Optimisation (DPO)** — Closed-form objective training directly on preference pairs, treating the policy itself as its implicit reward model.
- **Distributional RL** — Approach modelling the full distribution of returns rather than only its expectation.
- **Double DQN** — DQN variant decoupling action selection from value evaluation to reduce overestimation bias.
- **Dueling DQN** — Architecture splitting the value head into separate state value and advantage streams.
- **Group Relative Policy Optimisation (GRPO)** — Critic-free method sampling a group per prompt and normalising rewards within the group as advantages.
- **IMPALA** — Distributed actor-learner architecture correcting off-policy lag with V-trace importance weighting.
- **Policy gradient** — Family of methods optimising policy parameters directly by gradient ascent on expected return.
- **Proximal policy optimisation (PPO)** — Clipped policy-gradient algorithm, long the default reinforcement learning optimiser for language model alignment.
- **Q-learning** — Off-policy temporal difference algorithm learning optimal action values using a max backup.
- **Rainbow** — Agent combining several independent DQN improvements into one algorithm.
- **REINFORCE** — Monte Carlo policy gradient algorithm scaling log-probability gradients by observed returns.
- **Reinforcement learning from AI feedback (RLAIF)** — Alignment procedure substituting model-generated preference labels for human ones.
- **Reinforcement learning from human feedback (RLHF)** — Post-training pipeline fitting a reward model to human preferences then optimising the policy against it.
- **Reinforcement learning with verifiable rewards (RLVR)** — Reinforcement training where reward comes from programmatic checking of answers rather than a learned reward model.
- **SARSA** — On-policy temporal difference algorithm updating action values using the action actually taken next.
- **Soft actor-critic (SAC)** — Off-policy maximum-entropy actor-critic algorithm for continuous action spaces.
- **Trust region policy optimisation (TRPO)** — Policy gradient method constraining each update by a KL divergence trust region.
- **Twin delayed DDPG (TD3)** — DDPG variant using twin critics, delayed actor updates and target policy smoothing.

### RL advanced & tooling

- **AlphaZero** `[tool]` — Self-play agent combining a policy-value network with Monte Carlo tree search.
- **Arcade Learning Environment (ALE)** `[tool]` — Atari game emulator suite used as a discrete-action RL benchmark.
- **Behaviour cloning** — Supervised imitation that regresses demonstrated actions from observed states.
- **Behaviour regularisation** — Constraining a learned policy to stay close to the data-collecting policy.
- **Centralised training with decentralised execution (CTDE)** — Paradigm using global information during training while each agent acts on local observations.
- **CleanRL** `[tool]` — Single-file reference implementations of RL algorithms intended for readability and reproducibility.
- **Conservative Q-learning (CQL)** — Offline method penalising value estimates for out-of-distribution actions.
- **D4RL** `[tool]` — Benchmark suite of standardised datasets for offline reinforcement learning.  ⚠ *Largely superseded by Farama Minari as the maintained offline RL dataset standard.*
- **DAgger** — Iterative imitation algorithm querying the expert on states visited by the learner.
- **Decision Transformer** — Sequence model casting offline control as autoregressive prediction conditioned on desired return.
- **Distributional shift in offline RL** — Failure mode where the learned policy queries actions absent from the logged data.
- **Domain randomisation** — Varying simulator parameters during training so the policy generalises to real dynamics.
- **Dreamer** `[tool]` — Model-based agent learning behaviours by imagining rollouts in a learned latent world model.
- **Dyna architecture** — Framework interleaving real experience with planning updates from a learned model.
- **Goal-conditioned RL** — Learning a single policy that achieves any goal supplied as an additional input.
- **Gymnasium** `[tool]` — Maintained Python API and environment collection defining the standard RL interaction interface.
- **Hierarchical reinforcement learning** — Decomposing control into temporally extended subpolicies coordinated by a higher-level policy.
- **Hindsight experience replay (HER)** — Relabelling failed trajectories with achieved outcomes as goals to densify learning signal.
- **Imitation learning** — Learning a policy from demonstrations rather than from reward signals.
- **Implicit Q-learning (IQL)** — Offline method learning values by expectile regression without querying unseen actions.
- **Inverse reinforcement learning** — Inferring the reward function that best explains observed expert behaviour.
- **MADDPG** — Multi-agent actor-critic algorithm with centralised critics conditioned on all agents' actions.
- **MAPPO** — Multi-agent adaptation of proximal policy optimisation with a shared centralised critic.
- **Model-based reinforcement learning** — Learning a transition model of the environment and using it for planning or training.
- **Monte Carlo tree search (MCTS)** — Planning algorithm building a search tree by simulating and backing up sampled trajectories.
- **MuJoCo** `[tool]` — Physics engine widely used for continuous control and robotics simulation benchmarks.
- **Multi-agent reinforcement learning (MARL)** — Learning policies for several interacting agents in a shared environment.
- **MuZero** `[tool]` — Planning agent learning a latent dynamics model without access to environment rules.
- **Non-stationarity in MARL** — Instability caused by other agents' policies changing during a given agent's learning.
- **NVIDIA Isaac Gym** `[tool]` — GPU-accelerated physics simulator for massively parallel robot learning.  ⚠ *Deprecated preview release; replaced by NVIDIA Isaac Lab.*
- **Offline reinforcement learning** — Learning a policy solely from a fixed logged dataset without further environment interaction.
- **OpenAI Baselines** `[tool]` — Reference implementations of RL algorithms released alongside Gym.  ⚠ *Unmaintained; Stable-Baselines3 is the maintained successor.*
- **OpenAI Gym** `[tool]` — Original Python API standardising reinforcement learning environment interaction.  ⚠ *Deprecated; maintained as Gymnasium by the Farama Foundation.*
- **Options framework** — Formalism defining temporally extended actions with initiation sets, policies and termination conditions.
- **PettingZoo** `[tool]` — Standard API and environment suite for multi-agent reinforcement learning.
- **QMIX** — Cooperative MARL method mixing per-agent values through a monotonic learned mixing network.
- **Ray RLlib** `[tool]` — Distributed reinforcement learning library supporting scalable multi-agent and offline training.
- **Self-play** — Training regime where an agent improves by competing against copies of itself.
- **Sim-to-real transfer** — Deploying policies trained in simulation onto physical systems.
- **Stable-Baselines3** `[tool]` — PyTorch library of reliable reference implementations of common RL algorithms.
- **Value decomposition networks (VDN)** — Cooperative MARL method factoring the team value as a sum of per-agent values.
- **World model** — Learned generative model of environment dynamics used to imagine future trajectories.

## NLP, tokenisation, embeddings and vector search
*210 terms*

### Classical NLP

- **Conditional random field (CRF)** — A discriminative sequence model scoring whole label sequences jointly, long standard for tagging and span extraction.
- **Constituency parsing** — Producing a hierarchical phrase-structure tree that groups words into nested syntactic constituents.
- **Coreference resolution** — Grouping mentions across a text that refer to the same real-world entity.
- **Dependency parsing** — Producing a tree of directed head-dependent grammatical relations between the words of a sentence.
- **Distributional hypothesis** — The principle that words occurring in similar contexts carry similar meanings, underpinning all corpus-derived vector representations.
- **Entity linking** — Mapping a recognised entity mention to its unique record in a knowledge base or ontology.
- **Morpheme** — The smallest linguistic unit carrying meaning or grammatical function, either a root or an affix.
- **Morphology** — The study of internal word structure and the rules by which words are formed from smaller meaning-bearing units.
- **Named entity recognition (NER)** — Detecting text spans denoting entities and classifying them into types such as person, organisation or location.
- **Natural language inference (NLI)** — Classifying whether a hypothesis sentence is entailed by, contradicts, or is neutral toward a premise.
- **Natural Language Processing (NLP)** — The field concerned with computational methods for representing, analysing, generating and understanding human language.
- **Part-of-speech tagging (POS tagging)** — Assigning each token a grammatical category label such as noun, verb, adjective or determiner.
- **Relation extraction** — Identifying semantic relationships holding between pairs of entities mentioned in text.
- **Semantic role labelling (SRL)** — Labelling sentence arguments with their roles relative to a predicate, such as agent, patient or instrument.
- **Semantic textual similarity (STS)** — Scoring how close in meaning two texts are, usually on a graded numeric scale.
- **Semantics** — The study of literal meaning of words, phrases and sentences independent of speaker context.
- **Syntax** — The system of rules governing how words combine into phrases, clauses and grammatical sentences.
- **Topic modelling** — Unsupervised discovery of latent themes in a corpus as distributions over words and documents.
- **Word sense disambiguation (WSD)** — Selecting which dictionary sense of an ambiguous word is intended in a given context.

### Preprocessing

- **Case folding** — Mapping characters to a single case so that surface case differences do not create distinct tokens.
- **Fixed-size chunking with overlap** — Cutting text into equal-length windows that share a margin of tokens with their neighbours.
- **Lemmatisation** — Mapping inflected word forms to their dictionary headword using morphological analysis and part-of-speech information.
- **Near-duplicate deduplication** — Removing repeated or highly similar documents from a corpus, typically via hashing or shingle overlap.
- **Pre-tokenisation** — An initial split of text on whitespace, punctuation or regex patterns before a subword algorithm is applied.
- **Semantic chunking** — Choosing chunk boundaries where consecutive sentence embeddings diverge, rather than at fixed lengths.
- **Sentence segmentation** — Splitting continuous text into sentence units, handling abbreviations and ambiguous punctuation.
- **Stemming** — Heuristically truncating word forms to a common stem using suffix-stripping rules, without guaranteeing a real word.
- **Stop words** — High-frequency function words removed from sparse representations because they carry little discriminative signal.
- **Text normalisation** — Converting raw text into a canonical surface form before further processing.
- **Unicode normalisation** — Applying NFC, NFD, NFKC or NFKD forms so equivalent character sequences share one byte representation.

### Tokenisation

- **BPE-dropout** — Randomly skipping merge operations at training time to generate varied BPE segmentations of the same word.
- **ByT5** `[tool]` — A byte-level text-to-text transformer that operates on UTF-8 bytes without any subword vocabulary.
- **Byte fallback** — Encoding characters absent from a subword vocabulary as their constituent byte tokens instead of an unknown symbol.
- **Byte Latent Transformer (BLT)** — A byte-level architecture that groups bytes into dynamically sized patches by predicted entropy instead of fixed tokens.
- **Byte Pair Encoding (BPE)** — A tokenisation algorithm that repeatedly merges the most frequent adjacent symbol pair until a target vocabulary size.
- **Byte-level BPE** — BPE over raw bytes, giving a closed vocabulary that can encode any input without unknown tokens.
- **Byte-level tokenisation** — Treating raw UTF-8 bytes as base units, so any input is representable with a 256-symbol alphabet.
- **Character-level tokenisation** — Treating individual characters as vocabulary units, giving tiny vocabularies and very long sequences.
- **Greedy longest-match-first** — A segmentation strategy that repeatedly consumes the longest vocabulary entry matching the remaining input.
- **Merge table** — The ordered list of learned symbol-pair merges that defines how a BPE tokeniser segments text.
- **Special token** — A reserved vocabulary entry carrying structural meaning rather than text content, such as padding or sequence boundaries.
- **Subword regularisation** — Sampling alternative valid segmentations during training so the model becomes robust to tokenisation variation.
- **Subword tokenisation** — Segmenting text into units between characters and words so rare words decompose into known pieces.
- **SuperBPE** — A two-stage BPE variant that additionally learns tokens spanning whitespace, cutting sequence length substantially.
- **Token** — One discrete vocabulary unit produced by a tokeniser and mapped to a single integer identifier.
- **Tokeniser-free model** — An architecture consuming characters or bytes directly, with no learned discrete vocabulary between text and model.
- **Unigram language model tokenisation** — A subword method that prunes an oversized candidate vocabulary by expected likelihood loss under a unigram model.
- **Viterbi tokenisation** — Dynamic-programming search for the highest-probability segmentation under a unigram subword model.
- **Word-level tokenisation** — Treating whole whitespace-delimited words as vocabulary units, producing large vocabularies and frequent unknown tokens.
- **WordPiece** — A subword algorithm choosing merges that maximise training-corpus likelihood, and segmenting by greedy longest match.

### Vocabulary

- **Characters per token (CPT)** — Mean characters covered by each emitted token, a compression measure comparable across scripts.
- **Embedding matrix** — The learned lookup table mapping each vocabulary identifier to its dense input vector.
- **Fertility** — The average number of tokens a tokeniser produces per word, measuring segmentation efficiency for a language.
- **Out-of-vocabulary (OOV)** — Input text that cannot be represented by any vocabulary entry under the tokeniser's segmentation rules.
- **Undertrained token** — A vocabulary entry rarely produced by the tokeniser in practice, whose embedding stays near its initialisation.
- **Unknown token (UNK)** — A placeholder vocabulary entry substituted for input the tokeniser cannot otherwise represent.
- **Vocabulary** — The finite set of tokens a tokeniser can emit and a model can embed or predict.
- **Vocabulary expansion** — Adding new tokens to a trained model's vocabulary and embedding table to cover a domain or language.
- **Vocabulary size** — The number of entries in a tokeniser's vocabulary, trading sequence length against embedding and softmax cost.
- **Vocabulary transfer** — Initialising embeddings for a new tokeniser's entries from an existing model's embeddings, usually by weighted averaging.

### Sparse representations

- **Bag of words (BoW)** — A representation counting term occurrences in a document while discarding word order.
- **Character n-gram** — A contiguous sequence of n characters used as a feature, giving robustness to morphology and misspellings.
- **Document-term matrix** — A sparse matrix whose rows are documents, columns are vocabulary terms and entries are weights.
- **Inverse document frequency (IDF)** — A weight that grows as a term appears in fewer documents of the collection.
- **Latent semantic analysis (LSA)** — Truncated singular value decomposition of a document-term matrix yielding low-dimensional semantic axes.
- **N-gram** — A contiguous sequence of n tokens used as a single feature or language-model unit.
- **Okapi BM25** — A probabilistic lexical ranking function with saturating term frequency and document length normalisation.
- **Posting list** — The per-term entry of an inverted index, holding document identifiers with frequencies or positions.
- **Pseudo-relevance feedback** — Expanding a query with terms drawn from its own top-ranked initial results.
- **Term frequency (TF)** — The count or normalised rate at which a term occurs within a single document.
- **TF-IDF** — A term weighting scheme multiplying within-document frequency by inverse document frequency.
- **Vocabulary mismatch** — Failure of lexical retrieval when query and document express the same concept with different words.

### Static embeddings

- **Continuous bag-of-words (CBOW)** — The word2vec objective predicting a target word from the averaged vectors of its surrounding context.
- **fastText** `[tool]` — A static embedding method representing each word as the sum of its character n-gram vectors.
- **GloVe** `[tool]` — A static embedding method factorising the global word co-occurrence count matrix with a weighted least-squares objective.  ⚠ *superseded by contextual and sentence embedding models for downstream use*
- **Paragraph Vector (doc2vec)** — An extension of word2vec learning a fixed vector per document jointly with word vectors.  ⚠ *superseded by transformer sentence encoders*
- **Skip-gram with negative sampling (SGNS)** — The word2vec objective predicting context words from a target, trained against sampled non-context words.
- **Static embedding** — A word vector fixed after training, identical in every context the word appears in.
- **Word embedding** — A dense real-valued vector assigned to a word so geometric proximity reflects distributional similarity.
- **word2vec** `[tool]` — A shallow neural method learning word vectors by predicting words from contexts or contexts from words.  ⚠ *superseded for most tasks by contextual and sentence embedding models; still used where lookup speed dominates*

### Contextual embeddings

- **Contextual embedding** — A token vector computed from the whole surrounding sequence, so the same word varies by context.
- **DeBERTa** `[tool]` — A transformer encoder using disentangled content and position attention plus an enhanced mask decoder.
- **ELECTRA** — A pretraining scheme where a discriminator classifies which tokens a small generator replaced.
- **ELMo** `[tool]` — A deep bidirectional LSTM language model producing contextual word vectors from a weighted mix of its layers.  ⚠ *superseded by transformer encoders such as BERT and its descendants*
- **LLM2Vec** — A recipe converting a decoder-only language model into a text encoder via bidirectional attention and contrastive tuning.
- **Masked language modelling (MLM)** — A pretraining objective that hides a fraction of tokens and trains the model to recover them.
- **ModernBERT** `[tool]` — A modernised encoder with long context, rotary positions and efficient attention, intended as a BERT replacement.
- **Next sentence prediction (NSP)** — A BERT pretraining objective classifying whether two segments were adjacent in the source corpus.  ⚠ *dropped from RoBERTa onward as unhelpful; replaced by MLM-only or sentence-order objectives*
- **RoBERTa** `[tool]` — A BERT variant trained longer on more data with dynamic masking and no next-sentence objective.

### Sentence embeddings

- **CLS pooling** — Using the hidden state of a dedicated prefix token as the sequence representation.
- **Gemini Embedding** `[tool]` — Google's hosted embedding model family with multilingual coverage and truncatable Matryoshka output dimensions.
- **Instruction-tuned embedding** — An embedding model conditioned on a natural-language task instruction so one encoder serves many objectives.
- **Last-token pooling** — Using the final position's hidden state as the sequence representation, standard for decoder-based embedders.
- **Late chunking** — Encoding a whole document first, then mean-pooling token vectors per chunk so each chunk keeps document context.
- **Mean pooling** — Averaging token vectors, usually mask-weighted, to obtain one sequence-level embedding.
- **Sentence embedding** — A single fixed-length vector representing the meaning of a whole sentence or passage.
- **Sentence-BERT (SBERT)** `[tool]` — A siamese fine-tuning of BERT producing sentence vectors comparable by cosine similarity.
- **SimCSE** — A contrastive sentence-embedding method using dropout-perturbed copies of the same sentence as positive pairs.
- **Task prefix** — A short fixed string prepended to input telling an embedding model whether it encodes a query or document.
- **text-embedding-3** `[tool]` — OpenAI's hosted embedding models in small and large sizes, supporting dimension truncation.

### Multilingual embeddings

- **Bitext mining** — Finding translation-equivalent sentence pairs in unaligned corpora by nearest-neighbour search in a shared embedding space.
- **Cross-lingual embedding** — A representation where translations across languages land close together, enabling retrieval across language boundaries.
- **Cross-lingual information retrieval (CLIR)** — Retrieving documents written in a language different from the query's language.
- **LaBSE** `[tool]` — A dual-encoder sentence model trained on translation pairs across more than one hundred languages for cross-lingual retrieval.
- **LASER** `[tool]` — A language-agnostic sentence encoder trained through multilingual machine translation, widely used for bitext mining.
- **mBERT** `[tool]` — A single BERT encoder pretrained on Wikipedia in over one hundred languages with a shared vocabulary.
- **Multilingual embedding** — An embedding model covering many languages within one shared vector space and vocabulary.
- **multilingual-E5** `[tool]` — The multilingual variants of the E5 embedding family, trained on cross-lingual text pairs.
- **Translation language modelling (TLM)** — A pretraining objective masking tokens across concatenated parallel sentences so the model attends across languages.
- **XLM-RoBERTa (XLM-R)** `[tool]` — A large multilingual masked language model trained on filtered CommonCrawl across roughly one hundred languages.

### Embedding properties

- **Anisotropy** — The tendency of learned embeddings to occupy a narrow cone, inflating similarity between unrelated items.
- **Dense vector** — A fixed-length array of real numbers in which nearly every dimension carries value.
- **Embedding dimensionality** — The number of components in an embedding vector, setting storage cost and representational capacity.
- **Euclidean distance** — The straight-line L2 distance between two points in the embedding space.
- **Hubness** — A high-dimensional phenomenon where a few points appear in the neighbour lists of disproportionately many queries.
- **Inner product** — The sum of elementwise products of two vectors, a similarity that rewards both alignment and magnitude.
- **Isotropy** — The property of embeddings being spread evenly across directions, giving well-calibrated similarity scores.
- **L2 normalisation** — Rescaling a vector to unit Euclidean length so inner product equals cosine similarity.
- **Matryoshka Representation Learning (MRL)** — Training that packs coarse-to-fine information into leading dimensions so embeddings can be truncated with little loss.
- **Maximum inner product search (MIPS)** — The retrieval problem of finding vectors maximising inner product with a query, distinct from nearest-neighbour by distance.

### Embedding training

- **ANCE** — A training scheme refreshing hard negatives periodically from an approximate index of the evolving encoder.
- **Bi-encoder** — An architecture embedding query and document independently, allowing document vectors to be precomputed and indexed.
- **Contrastive learning** — Training that pulls matched pairs together and pushes mismatched pairs apart in the representation space.
- **Cross-encoder** — An architecture jointly encoding a query-document pair to produce one relevance score, accurate but not precomputable.
- **Dense Passage Retrieval (DPR)** — A dual-encoder retriever trained on question-passage pairs with in-batch and BM25-mined negatives.
- **False negative** — A mined negative that is in fact relevant, injecting label noise into contrastive training.
- **Hard negative** — A non-relevant item that scores highly under the current model, providing a sharp training signal.
- **Multiple negatives ranking loss** — A contrastive loss treating every other item in the batch as a negative for each query.
- **Temperature** — The scaling divisor on similarity logits controlling how sharply a contrastive loss penalises near-miss negatives.

### Vector search

- **Disk-resident index** — An index keeping the bulk of vectors on SSD with a compressed in-memory summary, for datasets exceeding RAM.
- **Flat index** — An index storing vectors uncompressed and scanning all of them, giving exact results at linear cost.
- **Index recall** — The fraction of true nearest neighbours an approximate index returns, the standard accuracy measure for ANN.
- **k-nearest neighbours (kNN)** — The operation returning the k stored vectors closest to a query vector.
- **Metadata filtering** — Restricting the retrieval candidate set using structured field predicates before or during vector search.
- **Multi-vector index** — An index storing several vectors per document and aggregating their scores at query time.
- **Post-filtering** — Running unrestricted vector search first and discarding results that fail the predicate afterwards.
- **Pre-filtering** — Applying the metadata predicate before or during traversal so only eligible vectors are scored.
- **Queries per second (QPS)** — Sustained query throughput of a vector index at a stated recall and hardware configuration.
- **Recall-latency trade-off** — The curve along which increasing search effort raises approximate-search accuracy at the cost of response time.
- **Vector search** — Retrieving items whose embeddings are closest to a query embedding under a chosen similarity measure.

### ANN algorithms

- **CAGRA** `[tool]` — NVIDIA's GPU-native proximity graph index for high-throughput approximate nearest neighbour search.
- **Coarse quantiser** — The clustering model, usually k-means, that assigns each vector to an IVF partition.
- **Filtered-DiskANN** — A DiskANN variant embedding attribute labels into graph construction so filtered queries keep high recall.
- **FreshDiskANN** — The DiskANN variant supporting streaming inserts and deletes without full index rebuilds.
- **Graph-based ANN** — Indexes representing vectors as nodes of a proximity graph and answering queries by greedy traversal.
- **Greedy graph traversal** — Best-first search over a proximity graph that keeps a bounded candidate list and stops when it stops improving.
- **Hierarchical Navigable Small World (HNSW)** — A multi-layer navigable small-world graph where upper sparse layers route the search into the dense base layer.
- **Inverted file index (IVF)** — A partitioning index that clusters vectors around centroids and scans only the clusters nearest the query.
- **IVF-Flat** — An IVF index storing full-precision vectors inside each cluster list.
- **IVF-PQ** — An IVF index storing product-quantised codes inside each cluster list for compressed, fast scanning.
- **Locality-sensitive hashing (LSH)** — A family of randomised hashes that collide more often for nearby vectors than for distant ones.
- **Navigable small world (NSW)** — A proximity graph combining short-range links with occasional long-range links to give logarithmic-scale routing.
- **Navigating Spreading-out Graph (NSG)** — A monotonic proximity graph built by pruning edges for directional diversity around an approximate medoid entry point.
- **NGT** `[tool]` — Yahoo Japan's neighbourhood graph and tree library for high-dimensional approximate nearest neighbour search.
- **Random projection forest** — An ensemble of trees that recursively split points by random hyperplanes, searched jointly for candidates.
- **RobustPrune** — An edge-selection rule keeping neighbours that are directionally diverse rather than merely closest.
- **SimHash** — An LSH scheme hashing a vector by the signs of its projections onto random hyperplanes, approximating angular distance.
- **SPANN** — A memory-disk hybrid index keeping cluster centroids in memory and posting lists of vectors on disk.
- **Vamana** — The graph construction algorithm behind DiskANN, refining a random graph with a diversity-aware pruning rule.

### Vector quantisation

- **Additive quantisation** — Encoding a vector as the sum of codewords drawn from several full-dimensional codebooks.
- **Anisotropic vector quantisation** — Quantisation whose loss penalises error along the query direction more than orthogonal error, optimising inner-product ranking.
- **Asymmetric distance computation (ADC)** — Comparing an uncompressed query against compressed database codes using precomputed lookup tables.
- **Binary quantisation** — Reducing each dimension to a single sign bit so distances become popcount operations on bitstrings.
- **int8 quantisation** — Scalar quantisation to eight-bit integers, cutting storage roughly fourfold with small recall loss.
- **Optimised product quantisation (OPQ)** — Learning a rotation before product quantisation so variance is balanced across subspaces.
- **Oversampling** — Retrieving more approximate candidates than requested so that rescoring can recover the true top results.
- **Product quantisation (PQ)** — Splitting a vector into subvectors and encoding each with its own small codebook index.
- **RaBitQ** — A randomised binary quantisation method giving unbiased distance estimates with a provable error bound.
- **Rescoring** — Recomputing exact distances on a shortlist retrieved with compressed codes, restoring accuracy lost to quantisation.
- **Residual quantisation** — Applying successive quantisation stages, each encoding the error left by the previous stage.
- **Scalar quantisation** — Compressing each dimension independently to a low-precision integer using a per-dimension range.
- **Vector quantisation** — Replacing vectors with short codes drawn from learned representative values to cut memory and distance cost.

### Index tuning

- **Bits per subquantiser** — The code width per subvector, fixing each subcodebook's size and the quantisation fidelity.
- **efConstruction** — The HNSW build-time candidate list size, controlling graph quality and index build cost.
- **efSearch** — The HNSW query-time candidate list size, the main dial trading latency against recall.
- **M (graph degree)** — The HNSW parameter fixing how many neighbour links each node keeps, trading memory for recall.
- **nlist** — The number of clusters an IVF index partitions the dataset into.
- **nprobe** — The number of IVF clusters scanned per query, trading latency against recall.
- **Pruning parameter alpha** — The Vamana slack factor governing how aggressively long diverse edges are retained during graph construction.
- **Refine ratio** — The multiple of k fetched from a compressed index before exact rescoring.
- **Search list size (L)** — The beam width retained during DiskANN or Vamana graph traversal, controlling accuracy and I/O.
- **Subquantiser count** — The number of subvectors a product quantiser splits each vector into, setting code length.

### Retrieval paradigms

- **ColBERTv2** `[tool]` — A ColBERT revision using distillation, denoised hard negatives and residual compression of token vectors.
- **Contextual retrieval** — Prepending a model-written summary of a chunk's place in its document before embedding and indexing it.
- **Dense retrieval** — Ranking by similarity between low-dimensional learned embeddings of query and document.
- **docTTTTTquery** — Document expansion that appends model-generated likely queries to each passage before lexical indexing.
- **Hybrid retrieval** — Retrieval combining lexical keyword scoring with dense vector similarity over the same corpus.
- **HyDE** — Retrieval that embeds a model-generated hypothetical answer instead of the raw query.
- **Late interaction** — Scoring that keeps per-token vectors on both sides and compares them only at query time.
- **Learned sparse retrieval** — Neural prediction of term weights over the vocabulary, keeping inverted-index serving while learning expansion.
- **MaxSim** — The late-interaction scoring operator summing, over query tokens, the maximum similarity against any document token.
- **Retrieval-augmented generation (RAG)** — Architecture that retrieves passages from an external corpus at query time and conditions generation on them.
- **Sparse retrieval** — Ranking with high-dimensional term-weight vectors served through an inverted index.
- **Two-stage retrieval** — A pipeline where a cheap recall-oriented retriever produces candidates that an expensive scorer reorders.
- **uniCOIL** — A learned sparse model assigning a single scalar impact weight to each term of query and document.

### Fusion and reranking

- **CombSUM** — Fusion adding each document's normalised scores across the lists that returned it.
- **Convex score combination** — Fusion taking a weighted average of normalised retriever scores with weights summing to one.
- **Cross-encoder reranker** — A reranker jointly encoding query and candidate in one pass to emit a relevance score.
- **Listwise LLM reranking** — Prompting a language model to output an ordering over a window of candidates rather than per-item scores.
- **monoBERT** — A pointwise BERT cross-encoder that classifies each query-passage pair as relevant or not.
- **Rank fusion** — Merging several ranked lists of the same candidates into one consensus ordering.
- **Reciprocal Rank Fusion (RRF)** — Fusion summing one over a constant plus rank across lists, needing no score normalisation.
- **Reranking** — Reordering a retrieved candidate set with a more expensive and accurate relevance model.
- **Score normalisation** — Rescaling incomparable retriever scores onto a common range before score-based fusion.

### Retrieval metrics

- **MS MARCO** `[tool]` — A large passage and document ranking dataset derived from web search queries, standard for retriever training.
- **MTEB** `[tool]` — The Massive Text Embedding Benchmark, evaluating embedding models across retrieval, clustering, classification and similarity tasks.
- **Normalised DCG (nDCG)** — Discounted cumulative gain divided by its value under the ideal ranking, giving a zero-to-one score.
- **Precision@k** — The fraction of the top k returned results that are relevant.
- **Recall@k** — Fraction of all relevant passages that appear within the top k retrieved results.
- **Relevance judgements (qrels)** — The human-assigned labels marking which documents are relevant to which queries in an evaluation set.

## Large language models — training, adaptation, generation
*333 terms*

### Decoder architecture

- **Active versus total parameters** — Distinction between parameters used per token and parameters stored, diverging sharply in sparse mixture-of-experts models.
- **Causal attention mask** — Triangular mask zeroing attention to future positions so training can be parallel yet remain autoregressive.
- **Causal language model** — Model factorising sequence probability left-to-right, assigning each token a distribution conditioned only on earlier tokens.
- **Feed-forward network block (FFN)** — Position-wise two-layer network after attention holding most transformer parameters and much factual capacity.
- **Hybrid attention–state-space architecture** — Model interleaving attention layers with recurrent state-space layers to cut long-sequence memory and compute.
- **Key-value cache (KV cache)** — Stored per-layer keys and values for past tokens, letting each new token be generated without recomputation.
- **Language modelling head** — Final linear projection mapping hidden states to vocabulary-sized logits before the softmax.
- **Multi-token prediction (MTP)** — Training objective adding heads that predict several future tokens, improving representations and enabling faster drafting.
- **Pre-normalisation** — Placing normalisation before each sublayer so residual paths stay unnormalised, improving deep-network training stability.
- **QK normalisation** — Normalising query and key vectors before attention scoring to prevent logit growth and training divergence.
- **Residual stream** — Additive channel carrying representations through layers, which each sublayer reads from and writes into.
- **Sliding-window attention** — Attention restricted to a fixed span of recent tokens, giving linear cost in sequence length.

### Pretraining

- **Benchmark decontamination** — Detecting and removing evaluation-set text from training corpora to keep benchmark scores meaningful.
- **C4 (Colossal Clean Crawled Corpus)** `[tool]` — Heuristically cleaned English Common Crawl subset released with T5 and widely reused.
- **Common Crawl** `[tool]` — Public repeated web crawl that underlies most large-scale language model pretraining corpora.
- **Continued pretraining** — Further next-token training of an existing base model on new domain or language data.
- **DCLM** `[tool]` — Benchmark and corpus for comparing pretraining data curation strategies under fixed compute.
- **Dolma** `[tool]` — Open three-trillion-token English corpus released with its full curation pipeline and toolkit.
- **Fill-in-the-middle (FIM)** — Pretraining transformation reordering documents into prefix, suffix, middle so the model learns infilling.
- **FineWeb / FineWeb-Edu** `[tool]` — Large filtered Common Crawl corpus and its educational-quality subset selected by classifier scoring.
- **Maximal update parametrisation (muP)** — Parametrisation letting optimal hyperparameters transfer from small proxy models to much larger ones.
- **Mid-training** — Stage between bulk pretraining and post-training that upweights high-quality, reasoning or long-context data.
- **Mixture-of-denoisers (UL2)** — Pretraining recipe combining several corruption regimes with mode tokens signalling which denoising task applies.
- **Nemotron-CC** `[tool]` — Common Crawl derivative combining classifier ensembling with synthetic rephrasing to enlarge high-quality token supply.
- **Next-token prediction objective** — Pretraining task of maximising the likelihood of each observed token given its predecessors.
- **Quality classifier filtering** — Scoring web documents with a trained classifier and keeping only high-scoring text for pretraining.
- **RedPajama / SlimPajama** `[tool]` — Open reproductions of the LLaMA pretraining mixture, the latter deduplicated and reduced.
- **RefinedWeb** `[tool]` — Web-only pretraining corpus built by aggressive filtering and deduplication of Common Crawl.
- **Span corruption** — Denoising objective masking contiguous token spans and training the model to regenerate them.
- **Synthetic pretraining data** — Model-generated or model-rephrased text added to corpora to raise quality or extend scarce domains.
- **The Pile** `[tool]` — Curated 800GB English corpus mixing academic, code, web and book sources for open pretraining.
- **Warmup-stable-decay schedule (WSD)** — Learning-rate schedule holding a constant plateau then decaying, allowing checkpoints without a fixed token budget.

### Scaling & emergence

- **Broken neural scaling law** — Scaling fit allowing smoothly joined power-law segments to capture inflections single power laws miss.
- **Chinchilla scaling law** — Finding that parameters and training tokens should scale roughly proportionally for a fixed compute budget.
- **Data wall** — Projected exhaustion of high-quality human text, forcing reliance on synthetic data or repeated epochs.
- **Distillation scaling law** — Relation predicting student performance from teacher quality, student size and distillation token budget.
- **Emergence-as-mirage critique** — Argument that apparent capability jumps are artefacts of discontinuous metrics rather than genuine phase transitions.
- **Emergent abilities** — Capabilities absent in smaller models that appear abruptly above some scale threshold.
- **Inference-optimal scaling** — Choosing model size and training length to minimise total cost including expected lifetime inference.
- **IsoFLOP analysis** — Sweeping model sizes at equal compute budgets and fitting the loss minimum to derive scaling exponents.
- **Kaplan scaling laws** — Early scaling study concluding that model size should grow much faster than dataset size.  ⚠ *Superseded for compute allocation by the Chinchilla scaling laws.*
- **Neural scaling law** — Empirical power-law relating model loss to parameters, data and compute across orders of magnitude.
- **Overtraining** — Training a smaller model far past compute-optimal token counts to lower serving cost per query.
- **Test-time scaling law** — Empirical relation between accuracy and inference compute spent on longer or repeated generation.
- **Tokens-per-parameter ratio** — Training tokens divided by parameters, the headline knob distinguishing compute-optimal from deliberately overtrained models.
- **Training compute (FLOPs)** — Total floating-point operations consumed by a training run, approximated as six times parameters times tokens.

### Long context

- **Blockwise attention** — Computing attention in tiles over query and key blocks to bound memory without changing results.
- **Chunked prefill** — Splitting long prompt processing into segments interleaved with decode steps of other requests.
- **Context rot** — Degradation of reliability as context fills, even well below the nominal window limit.
- **Context window** — Maximum number of tokens a model can attend over in one forward pass.
- **Effective context length** — Span over which a model actually retains accuracy, typically shorter than its advertised window.
- **KV cache eviction** — Dropping cache entries judged unimportant, by heavy-hitter or attention-score heuristics, to bound memory.
- **KV cache quantisation** — Storing cached keys and values at reduced precision to fit longer contexts in memory.
- **Long-context continued training** — Additional training on long documents after rescaling positions so the model uses the extended window.
- **LongBench** `[tool]` — Multi-task bilingual benchmark for realistic long-document understanding and summarisation.
- **LongRoPE** — Context extension searching non-uniform rotary rescaling factors, later versions reaching million-token windows cheaply.
- **Lost in the middle** — Tendency of models to use information at context edges better than information buried centrally.
- **Position interpolation (PI)** — Extending context by linearly compressing position indices into the range seen during pretraining.
- **Prefill versus decode** — The two inference phases: compute-bound parallel prompt processing, then memory-bound one-token-at-a-time generation.
- **Prefix caching** — Reusing already-computed key-value state for a shared prompt prefix across requests or turns.
- **RULER** `[tool]` — Synthetic long-context benchmark spanning retrieval, tracing, aggregation and question answering at configurable lengths.
- **StreamingLLM** — Inference scheme keeping a few sink tokens plus a recent window to generate indefinitely at fixed memory.

### Fine-tuning

- **Chat template** — Tokenisation convention with role markers and special tokens defining how conversations are serialised for a model.
- **Completion-only loss masking** — Computing training loss on assistant tokens only, excluding prompt tokens from the objective.
- **Domain-adaptive pretraining** — Continued unsupervised training on in-domain text before task fine-tuning to shift the model's distribution.
- **Evol-Instruct** — Iteratively rewriting seed instructions into harder or more constrained variants to build difficulty-graded training sets.
- **FLAN collection** `[tool]` — Large aggregated set of academic tasks reformatted as instructions for multitask instruction tuning.
- **Full fine-tuning** — Updating every model weight on new data, giving maximum plasticity at maximum memory cost.
- **Instruction tuning** — Fine-tuning on diverse instruction-following examples so a base model responds to natural-language directives.
- **Parameter-efficient fine-tuning (PEFT)** — Family of methods adapting a frozen model by training a small number of added or selected parameters.
- **Rejection sampling fine-tuning** — Sampling many candidates, keeping those a filter or verifier accepts, and fine-tuning on them.
- **Self-Instruct** — Bootstrapping instruction data by prompting a model to generate and filter its own tasks.
- **Superficial alignment hypothesis** — Claim that post-training mainly selects response style, so few high-quality examples can suffice.
- **Supervised fine-tuning (SFT)** — Training on curated prompt-response pairs with the standard token loss to shape output behaviour.

### PEFT & LoRA

- **(IA)³** — Adaptation learning element-wise rescaling vectors applied to keys, values and feed-forward activations.
- **AdaLoRA** — LoRA variant allocating rank budget adaptively across layers by pruning unimportant singular directions.
- **Adapter merging** — Folding trained low-rank matrices into base weights so inference carries no extra latency.
- **AdapterFusion** — Composition method learning attention over several trained task adapters to combine their knowledge.
- **BitFit** — Extreme parameter-efficient tuning updating only the model's bias terms.
- **Bottleneck adapter** — Small down-projection, nonlinearity and up-projection inserted inside frozen transformer blocks and trained alone.
- **DoRA** — Adaptation decomposing weights into magnitude and direction, applying low-rank updates only to direction.
- **GaLore** — Full-parameter training that projects gradients into a low-rank subspace to cut optimiser memory.
- **GLoRA** — Generalised adapter learning scaling and shifting of weights and activations alongside low-rank terms.
- **LoHa** — Adapter factorising the update as a Hadamard product of two low-rank pairs for higher effective rank.
- **LoKr** — Adapter expressing the weight update as a Kronecker product of small matrices.
- **LongLoRA** — Efficient context-extension fine-tuning combining shifted sparse attention with trainable embeddings and normalisation.
- **LoRA alpha** — Scaling constant dividing by rank that sets the effective magnitude of the low-rank update.
- **LoRA rank** — Inner dimension of the low-rank update, controlling adapter capacity and trainable parameter count.
- **LoRA+** — LoRA variant assigning a much higher learning rate to the up-projection than the down-projection.
- **LoRA-FA** — LoRA variant freezing the down-projection and training only the up-projection to cut activation memory.
- **Low-rank adaptation (LoRA)** — Freezing base weights and learning a low-rank product added to selected weight matrices.
- **LQ-LoRA** — Adaptation jointly optimising a low-rank residual and a quantised base component of each weight matrix.
- **MiLoRA** — LoRA initialisation using minor singular components so adaptation avoids disturbing dominant pretrained directions.
- **Mixture-of-LoRA** — Serving or training scheme routing tokens across several LoRA experts on one frozen base.
- **OLoRA** — LoRA initialisation using orthonormal factors derived from QR decomposition of the base weights.
- **P-tuning v2** — Deep prompt tuning inserting trainable prompts at every layer, matching full tuning across scales.
- **Parallel adapter** — Adapter placed alongside rather than after a sublayer, so its output adds to the sublayer's.
- **PiSSA** — LoRA initialisation from the principal singular components of the pretrained weight, speeding convergence.
- **Prefix tuning** — Prepending trainable key-value vectors to every attention layer while keeping all model weights frozen.
- **Prompt tuning** — Learning continuous soft prompt embeddings prepended to the input, with the model entirely frozen.
- **QA-LoRA** — Quantisation-aware LoRA whose adapters fold back into a quantised model without dequantisation.
- **QLoRA** — LoRA over a 4-bit quantised frozen base, with paged optimisers, enabling large-model tuning on one GPU.
- **ReLoRA** — Pretraining-scale method accumulating a full-rank update by repeatedly training and merging fresh low-rank adapters.
- **rsLoRA** — Rank-stabilised LoRA rescaling adapters by the square root of rank so high ranks train stably.
- **S-LoRA** `[tool]` — Serving system hosting thousands of LoRA adapters over a shared base with paged adapter memory.
- **Target modules** — Set of base weight matrices chosen to receive adapters, commonly attention projections and feed-forward layers.
- **Tied-LoRA** — Adapter sharing low-rank matrices across layers, reducing trainable parameters further than standard LoRA.
- **VeRA** — Adaptation freezing shared random projection matrices and training only small per-layer scaling vectors.

### Alignment & preference optimisation

- **Alignment tax** — Capability loss on general benchmarks incurred as a side effect of alignment post-training.
- **Constitutional AI** — Alignment method where a model critiques and revises its own outputs against written principles, then trains on them.
- **Constitutional classifiers** — Anthropic technique training input and output classifiers from a natural-language constitution of allowed content.
- **Contrastive preference optimisation (CPO)** — Reference-free preference objective combining a contrastive term with a supervised anchor on chosen responses.
- **DAPO** — GRPO refinement with decoupled clipping, dynamic sampling and token-level loss for stable long reasoning training.
- **Deliberative alignment** — Training a reasoning model to recall and reason over written safety policies before answering.
- **Dr. GRPO** — Corrected GRPO removing length and standard-deviation normalisation biases that inflate response length.
- **GSPO** — Group-relative method applying importance ratios and clipping at sequence level, stabilising mixture-of-experts reinforcement training.
- **Helpful, honest, harmless (HHH)** — Three-part behavioural target framing what alignment training aims for in assistant models.
- **Identity preference optimisation (IPO)** — DPO variant replacing the logistic link with a squared loss to curb overfitting to deterministic preferences.
- **Instruction hierarchy** — Trained precedence ordering where system instructions outrank user text, which outranks tool or document content.
- **Kahneman-Tversky optimisation (KTO)** — Alignment objective learning from unpaired binary desirable or undesirable labels using a prospect-theory value function.
- **KL penalty** — Divergence term keeping the trained policy near a frozen reference model during reinforcement learning.
- **Online / iterative DPO** — Repeatedly sampling from the current policy, relabelling preferences, and re-running direct preference optimisation.
- **ORPO** — Single-stage method adding an odds-ratio preference penalty to the supervised loss, removing the reference model.
- **Preference pair** — Two responses to one prompt labelled chosen and rejected, the base unit of preference training data.
- **RAFT** — Reward-ranked fine-tuning that samples candidates, keeps the top-scoring ones and trains on them iteratively.
- **Reference model** — Frozen copy of the pre-alignment policy used to anchor divergence penalties or implicit reward ratios.
- **REINFORCE leave-one-out (RLOO)** — Critic-free policy gradient using other sampled completions' rewards as each sample's baseline.
- **ReMax** — Critic-free reinforcement method using the greedy-decoded response's reward as the variance-reduction baseline.
- **RLAIF** — Alignment where preference labels come from an AI judge rather than human annotators.
- **Self-rewarding language model** — Training loop where the model judges its own generations to produce preference data for the next round.
- **SimPO** — Reference-free objective using length-normalised average log-probability as implicit reward with a target margin.
- **SLiC-HF** — Sequence-likelihood calibration using ranking and margin losses over human-feedback pairs instead of reinforcement learning.
- **Statistical rejection sampling optimisation (RSO)** — Preference method sourcing training pairs by rejection sampling from the estimated optimal policy.
- **Sycophancy** — Tendency to agree with a user's stated view rather than maintain an accurate answer.
- **Value model** — Learned critic estimating expected future reward from a partial generation, used for advantage estimation.
- **Verifiable reward** — Automatically checkable success signal such as unit tests passing or an exact-match final answer.

### Reward modelling

- **Bradley-Terry model** — Pairwise comparison model turning preference labels into a scalar reward via a logistic likelihood.
- **Generative reward model** — Judge model that produces a critique and verdict in text rather than emitting a scalar head output.
- **Outcome reward model (ORM)** — Reward model scoring only the final answer of a solution, ignoring intermediate steps.
- **Process reward model (PRM)** — Reward model scoring each intermediate reasoning step, enabling step-level search and credit assignment.
- **Reward model** — Model scoring candidate responses, trained to reproduce human or AI preference judgements.
- **Reward over-optimisation** — Degradation of true quality as policy optimisation pushes past the reward model's reliable range.

### Quantisation

- **Activation quantisation** — Reducing precision of intermediate tensors as well as weights, enabling low-precision matrix multiplication.
- **AQLM** — Additive quantisation method for extreme two- to three-bit compression of language model weights.
- **AWQ** — Activation-aware weight quantisation protecting the small fraction of channels most salient to activations.
- **BitNet b1.58** — Architecture training weights natively as ternary values, replacing most multiplications with additions.
- **Calibration dataset** — Small representative sample run through the model to collect activation statistics guiding quantisation.
- **Double quantisation** — Quantising the quantisation constants themselves to shave further bits per parameter.
- **EXL2** `[tool]` — ExLlamaV2 mixed-precision quantisation format allowing fractional average bits per weight.  ⚠ *ExLlamaV2 is archived; superseded by ExLlamaV3 and the EXL3 format.*
- **EXL3** `[tool]` — ExLlamaV3 quantisation format with rotation-based coding, tensor parallelism and integrated speculative decoding.
- **FP8 (E4M3 / E5M2)** — Eight-bit floating-point formats with hardware support, used for weights, activations and training.
- **GGML format** `[tool]` — Earlier llama.cpp model file format lacking extensible metadata.  ⚠ *Deprecated; replaced by GGUF.*
- **GPTQ** — Post-training weight quantisation method using approximate second-order error compensation, typically at four bits.
- **Group-wise scaling** — Assigning a separate scale factor to each small block of weights instead of whole tensors.
- **I-quants** — llama.cpp codebook-based low-bit quantisations giving better quality than K-quants at very small sizes.
- **Importance matrix (imatrix)** — Per-weight importance statistics gathered from calibration text to steer llama.cpp quantisation.
- **K-quants** — llama.cpp quantisation family mixing bit widths across tensor types with block-wise super-scales.
- **LLM.int8()** — Mixed-precision scheme keeping outlier channels in 16-bit while quantising the rest to 8-bit integers.
- **MLX quantisation** `[tool]` — Apple Silicon quantised weight format and runtime using unified memory on Mac hardware.
- **NF4 (NormalFloat-4)** — Four-bit data type with levels information-theoretically optimal for normally distributed weights.
- **OmniQuant** — Post-training quantisation learning clipping thresholds and equivalent transformations per layer by block-wise optimisation.
- **Outlier features** — Rare large-magnitude activation channels that dominate quantisation error in transformers.
- **Post-training quantisation (PTQ)** — Compressing a trained model's numerics without retraining, using at most a small calibration set.
- **Quantisation-aware distillation** — Recovering accuracy of a quantised student by distilling from the full-precision model.
- **QuaRot** — Rotation-based scheme applying Hadamard transforms to remove outliers, enabling end-to-end 4-bit inference.
- **QuIP#** — Quantisation with incoherence processing plus lattice codebooks, achieving high quality at two bits.
- **SmoothQuant** — Migrating activation outlier difficulty into weights by per-channel rescaling, enabling 8-bit weight-activation inference.
- **SpinQuant** — Quantisation learning rotation matrices on the Stiefel manifold to minimise low-bit accuracy loss.
- **SpQR** — Sparse-quantised representation isolating outlier weights at high precision inside a low-bit tensor.
- **SqueezeLLM** — Dense-and-sparse quantisation combining sensitivity-weighted non-uniform clustering with a sparse outlier matrix.
- **W4A16 / W8A8 notation** — Shorthand for the bit widths chosen independently for weights and activations.
- **Weight-only quantisation** — Storing weights at low precision while computing in higher precision after dequantisation.

### Distillation & compression

- **Context distillation** — Internalising a long prompt or scaffold by training the model to match its outputs without that context.
- **Generalised knowledge distillation (GKD)** — On-policy distillation framework mixing student-sampled data with flexible divergence choices between teacher and student.
- **Knowledge distillation** — Training a smaller student to reproduce a larger teacher's outputs or internal signals.
- **Logit distillation** — Matching the student's full output distribution to the teacher's soft probabilities per token.
- **MiniLLM** — Distillation minimising reverse Kullback-Leibler divergence so the student avoids overestimating low-probability teacher regions.
- **Prune-and-distil (Minitron)** — Compression recipe pruning a large model along several axes then distilling to recover accuracy cheaply.
- **Reasoning-trace distillation** — Fine-tuning a smaller model on a reasoning model's chains of thought to transfer problem-solving behaviour.
- **Sequence-level knowledge distillation** — Training the student on teacher-decoded sequences rather than per-token distributions.

### Decoding & sampling

- **Beam search** — Maintaining several partial sequences ranked by cumulative likelihood and expanding the best each step.
- **Best-of-N sampling** — Generating several completions and returning the one a scorer or verifier ranks highest.
- **Contrastive decoding** — Choosing tokens by the difference between a strong model's and a weak model's log-probabilities.
- **Contrastive search** — Decoding balancing model confidence against a degeneration penalty measuring similarity to previous representations.
- **DoLa** — Decoding by contrasting logits from later and earlier layers of the same model to improve factuality.
- **DRY repetition penalty** — Penalty suppressing tokens that would continue a repeated n-gram already present in the context.
- **End-of-sequence token** — Special token whose emission signals that the model considers the response complete.
- **Epsilon and eta sampling** — Truncation rules cutting tokens below an absolute or entropy-scaled probability floor.
- **Frequency penalty** — Logit reduction proportional to how often a token has already appeared.
- **Greedy decoding** — Selecting the highest-probability token at each step, giving deterministic but often repetitive output.
- **Inference nondeterminism** — Output variation at fixed seed and temperature caused by batching and non-associative floating-point reductions.
- **Logit bias** — Fixed per-token offsets added to logits to force or forbid specific vocabulary items.
- **Min-p sampling** — Keeping tokens whose probability exceeds a fraction of the top token's probability, adapting to confidence.
- **Minimum Bayes risk decoding** — Selecting the candidate most similar on average to all other sampled candidates under a utility metric.
- **Mirostat** — Feedback sampler adjusting truncation each step to hold generated text at a target perplexity.
- **No-repeat n-gram constraint** — Hard rule forbidding any n-gram from occurring twice in the generated text.
- **Presence penalty** — Flat logit reduction applied once a token has appeared at all, encouraging new topics.
- **Repetition penalty** — Multiplicative logit reduction for tokens already appearing in the context.
- **Sampler chain order** — Sequence in which penalties and truncations are applied, which materially changes the resulting distribution.
- **Stop sequences** — Strings that terminate generation when produced, bounding output beyond the end-of-sequence token.
- **Top-a sampling** — Truncation whose threshold scales with the square of the top token's probability.
- **Top-k sampling** — Restricting sampling to the k highest-probability tokens after renormalising their probabilities.
- **Top-n-sigma** — Truncation keeping tokens whose logits lie within a set number of standard deviations of the maximum.
- **Top-p (nucleus) sampling** — Sampling from the smallest token set whose cumulative probability exceeds a threshold.
- **Typical sampling** — Keeping tokens whose surprisal is closest to the distribution's entropy rather than simply most probable.
- **XTC (exclude top choices)** — Sampler probabilistically removing the most likely tokens when several are confident, increasing diversity.

### Speculative decoding

- **Acceptance rate** — Fraction of drafted tokens the target model verifies, the main determinant of speculative speedup.
- **Draft model** — Small fast model producing candidate continuations for a larger target model to accept or reject.
- **EAGLE** — Speculative family drafting in the target model's feature space; EAGLE-3 conditions on multiple hidden layers.
- **Lookahead decoding** — Draft-model-free acceleration generating and verifying n-gram continuations in parallel via Jacobi iteration.
- **Medusa** — Speculative method attaching multiple parallel prediction heads to the target model instead of a separate drafter.
- **Prompt lookup decoding** — Drafting by copying n-gram continuations found in the prompt, effective for summarisation and editing.
- **Self-speculative decoding** — Speculative decoding where the target model itself generates drafts using skipped layers or extra heads.
- **Speculative decoding** — Acceleration where a cheap drafter proposes tokens that the target model verifies in one parallel pass.

### Hallucination & grounding

- **Abstention** — Deliberate refusal to answer when retrieved evidence is insufficient or contradictory.
- **Attribution** — Linking specific generated statements to the exact supporting spans in source material.
- **Confabulation** — Fluent fabrication produced with high confidence and no signal of uncertainty.
- **Extrinsic hallucination** — Generated content unverifiable from the provided context, neither supported nor contradicted.
- **FActScore** — Metric decomposing long-form output into atomic facts and scoring each against a knowledge source.
- **Factuality** — Degree to which a response matches verified real-world facts, independent of the supplied context.
- **Grounding** — Conditioning generation on retrieved or supplied evidence so claims can be traced to sources.
- **Hallucination** — Generated content that is unsupported by the source context or false about the world.
- **Hallucination snowballing** — Compounding error where an early fabricated claim forces the model to justify it with further fabrications.
- **Intrinsic hallucination** — Output that directly contradicts information present in the provided source or context.
- **SelfCheckGPT** — Black-box hallucination detection comparing multiple stochastic samples for mutual consistency.
- **Semantic entropy** — Uncertainty measure clustering sampled answers by meaning and computing entropy over the meaning clusters.

### Reasoning

- **Algorithm of Thoughts** — Prompting that embeds an entire search procedure in one context, imitating exploration without repeated calls.
- **Auto-CoT** — Automatically constructing reasoning exemplars by clustering questions and generating traces for representative members.
- **Budget forcing** — Test-time control that suppresses the end-of-thinking token or appends continuation words to lengthen reasoning.
- **Chain of Draft** — Prompting style constraining each reasoning step to a few tokens, cutting cost while keeping accuracy.
- **Chain of thought (CoT)** — Generating intermediate reasoning steps in text before producing a final answer.
- **Few-shot chain of thought** — Prompting with exemplars that include their reasoning traces, not only their answers.
- **Graph of Thoughts (GoT)** — Reasoning framework letting thought nodes merge and be refined in a general graph rather than a tree.
- **Interleaved thinking** — Reasoning emitted between tool calls so the model can deliberate on each observed result.
- **Least-to-most prompting** — Decomposing a problem into ordered easier subproblems and solving them cumulatively.
- **Long chain of thought** — Extended reasoning traces exhibiting backtracking, verification and branching, typically induced by reinforcement training.
- **Monte Carlo tree search for reasoning** — Guiding step-level generation with simulation, value backup and exploration bonuses over reasoning trees.
- **Multi-agent debate** — Several model instances argue and critique across rounds before converging on a final answer.
- **Overthinking** — Failure mode where additional reasoning degrades accuracy or calibration on problems already solved.
- **Program of Thoughts (PoT)** — Separating reasoning into generated program steps and delegating all numeric computation to execution.
- **Program-aided language model (PAL)** — Reasoning expressed as executable code whose interpreter, not the model, computes the answer.
- **Quiet-STaR** — Training a model to generate internal rationales at every token to improve next-token prediction.
- **Reasoning effort setting** — API parameter selecting how much deliberation a reasoning model performs before answering.
- **Reasoning model** — Model post-trained to spend inference compute on extended deliberation before answering.
- **Reasoning tokens** — Tokens the model generates for internal deliberation, billed but usually hidden from the final answer.
- **Reflexion** — Agent pattern converting task failures into written self-reflections stored and reused on later attempts.
- **ReST / ReST-EM** — Iterative loop alternating sampling with reward-filtered fine-tuning, framed as expectation-maximisation.
- **Self-consistency** — Sampling many reasoning paths and returning the answer that appears most often.
- **Self-refine** — Loop where a model critiques its own output and rewrites it iteratively without extra training.
- **Self-verification** — Having a model check its own answer, often by reworking the problem backwards from the result.
- **Sequential versus parallel test-time scaling** — Spending inference compute by extending one trace versus sampling many traces and aggregating.
- **Skeleton-of-thought** — Producing an answer outline first, then expanding each point in parallel to reduce latency.
- **STaR (self-taught reasoner)** — Bootstrapping by fine-tuning on self-generated reasoning traces that reached the correct answer.
- **Test-time compute** — Compute spent during inference on longer, repeated or searched generation rather than during training.
- **Thinking budget** — Configurable cap on reasoning tokens allowed before the model must commit to an answer.
- **Tree of Thoughts (ToT)** — Search over a tree of partial reasoning states with explicit expansion, evaluation and backtracking.
- **Verifier-guided search** — Expanding and pruning candidate reasoning steps using a process reward model or checker as the scoring function.
- **Zero-shot chain of thought** — Eliciting step-by-step reasoning with a trigger instruction rather than worked examples.

### Prompting

- **Automatic Prompt Engineer (APE)** — Automatic instruction search generating candidate prompts and selecting by scored execution on held-out data.
- **Chain-of-verification (CoVe)** — Drafting an answer, generating verification questions, answering them independently, then revising.
- **Delimiters and structural tags** — Explicit markers separating instructions, data and examples so the model parses prompt sections reliably.
- **Exemplar selection** — Choosing which demonstrations to include, by similarity, diversity or difficulty, to maximise few-shot accuracy.
- **Few-shot prompting** — Including several input-output examples in the prompt to demonstrate the desired mapping.
- **Generated knowledge prompting** — Having the model produce relevant background facts first and conditioning the answer on them.
- **GEPA** — Prompt optimiser using reflective natural-language mutation with Pareto selection over evaluation traces.
- **Gist tokens** — Trained compact soft tokens that stand in for a long prompt's content during inference.
- **In-context learning** — Adapting behaviour from examples in the prompt alone, with no weight updates.
- **LLMLingua** `[tool]` — Prompt compression toolkit using a small model's perplexity to drop low-information tokens.
- **Meta-prompting** — Using a model to write, critique or improve prompts rather than to solve the task directly.
- **OPRO** — Optimisation method where a model proposes new prompts from a trajectory of previous prompts and scores.
- **Plan-and-solve prompting** — Instructing the model to devise an explicit plan first and then execute it step by step.
- **Prompt** — The full token sequence supplied to a model, including system, user and prior turns.
- **Prompt caching** — Provider-side feature billing and serving repeated prompt prefixes from cache at reduced cost and latency.
- **Prompt chaining** — Splitting work across several sequential model calls whose outputs feed the next prompt.
- **Prompt compression** — Shortening a prompt while preserving task-relevant information, by token pruning or learned summarisation.
- **Prompt injection** — Attack where text inside retrieved or user-supplied content is treated by the model as instructions.
- **Prompt template** — Parameterised prompt string with variable slots filled at runtime, enabling versioning and testing.
- **ReAct** — Prompting pattern interleaving explicit reasoning traces with tool actions and their observations.
- **Rephrase and respond** — Asking the model to restate and expand the question before answering it.
- **ReWOO** — Agent pattern planning all tool calls upfront, then executing and combining results, decoupling reasoning from observations.
- **Role prompting** — Assigning the model a persona or expertise framing to shape tone and assumed knowledge.
- **Self-ask** — Pattern where the model poses and answers explicit follow-up questions before the final answer.
- **Self-Discover** — Framework where the model composes task-specific reasoning structures from a bank of atomic reasoning modules.
- **Step-back prompting** — Asking for the governing principle or general question before addressing the specific instance.
- **System prompt** — Highest-precedence instruction block setting persona, rules and output conventions for a conversation.
- **Task decomposition** — Breaking a complex request into explicitly enumerated subtasks before any is attempted.
- **Zero-shot prompting** — Instructing a task with no worked examples, relying on instruction tuning to generalise.

### Structured output

- **Constrained decoding** — Masking the next-token distribution each step to only tokens keeping the output valid under a formal constraint.
- **Finite-state-machine decoding** — Compiling constraints into an automaton whose state determines the allowed token mask.
- **Grammar-constrained decoding** — Constraining generation with a context-free grammar, such as llama.cpp's GBNF format.
- **Guidance** `[tool]` — Library interleaving fixed template text with constrained generation and control flow in one program.
- **Instructor** `[tool]` — Client library binding model calls to typed objects with validation and automatic retry on failure.
- **JSON mode** — Setting forcing syntactically valid JSON output without enforcing any particular schema.
- **JSON Schema constrained generation** — Restricting decoding so output validates against a supplied JSON Schema, including types and required fields.
- **llguidance** `[tool]` — Rust Earley-parser constraint engine providing low-latency grammar-constrained decoding to multiple runtimes.
- **LM Format Enforcer** `[tool]` — Library enforcing JSON Schema or regex output by filtering allowed tokens during generation.
- **Outlines** `[tool]` — Structured generation library compiling regular expressions and schemas into precomputed automaton token masks.
- **Structured outputs** — Generation guaranteed to conform to a declared schema rather than merely requested to.
- **Token healing** — Backing up over a partially matched token boundary so constrained output keeps canonical tokenisation.
- **Token mask** — Boolean vector over the vocabulary applied to logits to forbid tokens violating the active constraint.
- **Tool-call schema** — Declared function name, description and parameter schema the model fills to request a tool invocation.
- **Validate-and-repair loop** — Post-generation pattern validating output and re-prompting with the error until it parses.
- **XGrammar** `[tool]` — Grammar engine with precomputed context-independent token masks, the default structured-output backend in major serving stacks.

### Context engineering

- **Context budget** — Explicit allocation of the window across system prompt, tools, history, retrieved data and output.
- **Context distraction** — Degraded focus when irrelevant material in a long context competes with the actual task.
- **Context engineering** — Discipline of deciding what occupies the context window across a task's whole token lifecycle.
- **Context poisoning** — Persistence of an erroneous or malicious statement in context that corrupts all subsequent reasoning.
- **External memory** — Persistent store outside the window that the model writes to and reads from across sessions.
- **Just-in-time retrieval** — Loading full content only when needed, holding lightweight identifiers such as paths in context meanwhile.
- **Rolling summarisation** — Maintaining a continually updated summary of earlier turns instead of retaining the raw transcript.
- **Scratchpad file** — Externalised working notes the model maintains so intermediate state survives context truncation.
- **Sub-agent context isolation** — Delegating subtasks to agents with their own windows so only their results enter the parent context.
- **Tool-result truncation** — Capping or summarising tool outputs before they enter context to prevent window exhaustion.

### Model merging

- **DARE** — Randomly dropping task-vector entries and rescaling survivors to reduce interference before merging.
- **DELLA** — Merging that drops task-vector entries with magnitude-proportional probability before electing and rescaling.
- **Evolutionary model merge** — Searching merge coefficients and layer arrangements with evolutionary algorithms against a target metric.
- **Fisher-weighted averaging** — Merging weighting each model's parameters by Fisher information as a curvature-aware importance estimate.
- **MergeKit** `[tool]` — Toolkit implementing the major merging algorithms with a declarative configuration format.
- **Model breadcrumbs** — Merging that masks both extreme and negligible task-vector entries to remove noise and outliers.
- **Model merging** — Combining several models' weights into one without additional training on their original data.
- **Model soup** — Averaging weights of multiple fine-tuning runs from one initialisation to improve robustness.
- **Passthrough merge** — Stacking layers from different checkpoints to build a deeper model with no shared width constraint.
- **RegMean** — Merging solving a closed-form least-squares problem per linear layer using input activation statistics.
- **SLERP** — Spherical interpolation between two checkpoints' weights, following an arc rather than a straight line.
- **Task arithmetic** — Adding or subtracting task vectors on a shared base to compose or remove capabilities.
- **Task vector** — Difference between a fine-tuned model's weights and its base, representing a learned capability directionally.
- **TIES-merging** — Merging that trims small task-vector entries, elects a dominant sign per parameter, then averages agreeing values.

### Tokenisation & cost

- **Byte-pair encoding (BPE)** — Tokeniser built by iteratively merging the most frequent adjacent symbol pair in a corpus.
- **Cached input tokens** — Prompt tokens served from a cached prefix, billed at a reduced rate.
- **Input versus output token pricing** — Separate per-token rates for prompt and generated tokens, output typically several times more expensive.
- **Special tokens** — Reserved vocabulary entries marking roles, boundaries, tool calls or thinking segments rather than text.
- **Token inflation** — Higher token counts, cost and latency for languages and scripts underrepresented in tokeniser training.

### Training & serving tooling

- **PEFT (library)** `[tool]` — Hugging Face library implementing LoRA and other adapter methods over pretrained transformers.

## RAG, agents, serving, and MLOps/LLMOps
*299 terms*

### RAG architecture

- **Cache-augmented generation (CAG)** — Preloading an entire small corpus into model context or KV cache instead of retrieving per query.
- **Context assembly** — Step that orders, deduplicates, compresses and formats retrieved passages into the final prompt.
- **Document parsing** — Converting source files into structured text that preserves headings, tables and reading order.
- **Incremental indexing** — Updating only changed or new documents in an index rather than rebuilding it wholesale.
- **Index freshness** — Lag between a change in the source system and its visibility in the retrieval index.
- **Indexing pipeline** — Offline stage that ingests, parses, chunks, embeds and stores documents so they become retrievable.
- **Ingestion connector** — Adapter that pulls documents and their access permissions from a source system into the index.
- **Knowledge base (corpus)** — Curated document collection a retrieval system is permitted to draw evidence from.
- **Layout-aware extraction** — Parsing that uses page geometry and visual structure to recover document hierarchy before chunking.
- **Multimodal RAG** — RAG whose index and retrieved evidence include images, tables, audio or video alongside text.
- **Permission-aware retrieval** — Filtering retrieval candidates so each user only receives passages their access rights allow.
- **Reranker** — Model that rescores retrieved candidates by joint query-passage relevance before generation.
- **Retrieval-augmented fine-tuning (RAFT)** — Fine-tuning a model on retrieved-context examples so it learns to exploit and ignore passages.
- **Retriever** — Component that returns candidate passages from an index for a given query representation.
- **Structured RAG** — RAG that retrieves from databases or knowledge graphs by generating queries rather than matching text.
- **Top-k retrieval** — Selecting the k highest-scoring passages from an index to pass to the generator.

### RAG variants

- **Adaptive RAG** — RAG that routes each query to no-retrieval, single-step or multi-step retrieval based on estimated difficulty.
- **Advanced RAG** — RAG adding pre-retrieval query optimisation and post-retrieval reranking or compression around the baseline loop.
- **Agentic RAG** — RAG where an agent plans, selects retrieval tools, iterates and self-checks instead of retrieving once.
- **Conversational RAG** — RAG that rewrites the current turn using dialogue history before retrieving from the corpus.
- **Corrective RAG (CRAG)** — RAG that grades retrieved documents and triggers fallback retrieval when evidence is judged insufficient.
- **FLARE (forward-looking active retrieval)** — Method that retrieves mid-generation whenever the next predicted sentence carries low token confidence.
- **Graph RAG** — RAG retrieving over a knowledge graph of extracted entities and relations rather than isolated passages.
- **HippoRAG** — Graph retrieval method applying personalised PageRank over an entity graph to gather multi-hop evidence in one pass.
- **Iterative retrieval** — Loop that alternates generation and retrieval until the answer is sufficiently supported.
- **LazyGraphRAG** — Graph RAG variant deferring graph and summary construction to query time to cut indexing cost.
- **Microsoft GraphRAG** `[tool]` — Open-source library building entity graphs and community summaries for global and local corpus questions.
- **Modular RAG** — RAG decomposed into interchangeable modules for routing, retrieval, fusion, memory and generation.
- **Multi-hop RAG** — RAG that chains successive retrievals, each conditioned on facts recovered by the previous one.
- **Naive RAG** — Baseline retrieve-then-read design with single-shot retrieval, no query rewriting and no reranking.
- **RAPTOR** — Hierarchical indexing that recursively clusters and summarises chunks into a tree retrieved at multiple abstraction levels.
- **Self-RAG** — RAG in which the model emits reflection tokens deciding when to retrieve and whether evidence supports output.
- **Speculative RAG** — RAG where a small drafter produces multiple candidate answers from retrieved subsets and a larger model verifies.

### Chunking & indexing

- **Agentic chunking** — Using a model to decide chunk boundaries and groupings per document instead of fixed rules.
- **Chunk enrichment** — Adding model-generated titles, keywords or hypothetical questions to a chunk to improve matching.
- **Chunk metadata** — Structured fields attached to a chunk describing source, section, timestamp, owner and access class.
- **Chunk overlap** — Repeated span shared between adjacent chunks to avoid severing meaning at boundaries.
- **Document summary index** — Index whose retrieval units are generated document summaries pointing back to full source text.
- **Fixed-size chunking** — Splitting text into uniform character or token spans regardless of content boundaries.
- **Hierarchical chunking** — Producing nested chunks at several granularities linked parent-to-child within one index.
- **Multi-vector indexing** — Storing several embeddings per document, such as summary, questions and raw text vectors.
- **Parent-document retrieval** — Matching on small child chunks but returning the enclosing parent chunk to the generator.
- **Proposition chunking** — Decomposing text into standalone atomic factual statements used as retrieval units.
- **Provenance identifier** — Stable reference stored with a chunk that resolves back to its exact source location.
- **Recursive character chunking** — Splitting on an ordered list of separators, falling back to finer ones until chunks fit the size limit.
- **Sentence-based chunking** — Grouping whole sentences into chunks so no unit is cut mid-sentence.
- **Sentence-window retrieval** — Indexing single sentences and returning a fixed window of neighbouring sentences with each hit.
- **Small-to-big retrieval** — Retrieving with fine-grained units and expanding to the larger surrounding passage before generation.
- **Structure-aware chunking** — Splitting along the document's own markup hierarchy of sections, headings, lists and tables.

### Query & retrieval strategy

- **Contextual compression** — Trimming retrieved passages to only the sentences relevant to the query before prompting.
- **Hypothetical document embeddings (HyDE)** — Generating a plausible answer document and embedding that text as the retrieval query.
- **Multi-query retrieval** — Generating several query variants, retrieving for each, and merging the result sets.
- **Query decomposition** — Splitting a compound question into sub-questions retrieved and answered separately before synthesis.
- **Query expansion** — Adding related terms or paraphrases to a query to widen lexical and semantic coverage.
- **Query rewriting** — Reformulating the user's question into a form better matched to indexed text.
- **Query routing** — Directing a query to the appropriate index, tool or retrieval strategy based on its type.
- **RAG-Fusion** — Multi-query retrieval whose per-query result lists are combined by reciprocal rank fusion.
- **Retrieval budget** — Cap on the number of retrieval calls or tokens a single query may consume.
- **Retrieve-or-not decision** — Classifier or model judgement determining whether a query needs retrieval at all.
- **Self-query retrieval** — Having the model extract structured metadata filters from natural language before searching.

### Grounding & citation

- **Citation schema** — Structured output format specifying how source identifiers and offsets accompany generated claims.
- **Entailment check** — Verification pass testing whether retrieved evidence logically supports a generated claim.
- **Groundedness** — Degree to which each claim in an answer is entailed by the retrieved context.
- **Improper citation** — Attaching a source that does not support the claim it is attached to.
- **Inline citation** — Reference marker emitted within the answer text pointing at a retrieved source.
- **Over-refusal** — Failure mode where a system abstains despite adequate supporting evidence being present.
- **Overcitation** — Attaching more sources to a claim than actually support it, diluting attribution meaning.
- **Quote verification** — Post-generation check confirming quoted text appears verbatim in the cited source.
- **Refusal calibration** — Tuning the evidence threshold at which a system chooses abstention over answering.
- **Span-level attribution** — Attribution that maps individual answer spans to exact character ranges in source documents.
- **Unanswerable query handling** — Behaviour for questions the corpus cannot support, returning a stated inability rather than a guess.

### RAG evaluation

- **Component-wise evaluation** — Scoring retrieval, reranking and generation separately to localise the source of failure.
- **Context relevance** — Metric scoring topical fit between retrieved passages and the query independent of the answer.
- **Counterfactual robustness** — Ability to detect and resist known-false statements present in the retrieved context.
- **Golden dataset** — Curated question set with reference answers and reference passages used as the evaluation baseline.
- **Information integration** — Ability to combine evidence spread across multiple retrieved passages into one answer.
- **Negative rejection** — Ability to decline answering when the retrieved context contains no usable evidence.
- **Noise robustness** — Ability to answer correctly when irrelevant passages are mixed into the retrieved context.
- **Nugget evaluation** — Scoring answers by how many atomic required facts they contain, judged against a nugget list.
- **RAG triad** — Evaluation framing that jointly scores context relevance, groundedness and answer relevance.
- **Retrieval hit rate** — Fraction of queries for which at least one relevant passage appears in the retrieved set.
- **Synthetic test set generation** — Automatically deriving evaluation questions and answers from the indexed corpus itself.

### Agent fundamentals

- **Agent harness** — Runtime scaffolding around the model providing tool dispatch, state, retries and control flow.
- **Agent loop** — Repeating cycle of model reasoning, action selection, tool execution and observation ingestion.
- **Agent skill** — Packaged instructions and resources an agent loads on demand to perform a class of task.
- **AI agent** — System where a model plans, calls tools and observes results in a loop to pursue a goal.
- **Browser agent** — Agent that navigates and acts on web pages through a controlled browser session.
- **Code-as-action** — Agent design where the model emits executable code as its action instead of discrete tool calls.
- **Computer-use agent** — Agent that operates a graphical desktop by reading screenshots and issuing mouse and keyboard actions.
- **Deep research agent** — Agent that runs long multi-source search and synthesis loops to produce a cited report.
- **Durable execution** — Persisting agent state so a run survives crashes and resumes from its last completed step.
- **Function calling** — Model API feature emitting structured arguments matching a declared function signature.
- **Interrupt and resume** — Pausing an agent run pending external input and continuing from the saved state afterwards.
- **Observation** — Tool execution result returned into the agent's context for the next reasoning step.
- **Parallel tool calling** — Issuing several independent tool invocations in one turn and awaiting all results.
- **Plan-and-execute** — Topology where a planner drafts the full step list once and an executor carries out each step.
- **Planning** — Producing an ordered set of intended steps before or during execution of a task.
- **Reflection** — Step in which the agent critiques its own intermediate output before continuing.
- **Replanning** — Revising the remaining plan after an observation invalidates earlier assumptions.
- **Step budget** — Hard cap on iterations, tool calls or tokens an agent run may consume.
- **Structured output** — Constraining model responses to a declared schema so downstream code can parse them reliably.
- **Subagent** — Child agent invoked with a scoped task and its own context, returning only a result.
- **Termination condition** — Rule determining when an agent stops looping and returns its final answer.
- **Tool retrieval** — Selecting a relevant subset of tools to expose when the full catalogue exceeds context limits.
- **Tool schema** — Machine-readable declaration of a tool's name, description, parameters and types shown to the model.
- **Tool use** — Model invoking external functions or services to act on or read from the world.

### Agent memory & context

- **CoALA framework** — Reference architecture organising language agents into working, episodic, semantic and procedural memory with action spaces.
- **Context compaction** — Replacing accumulated conversation history with a compressed summary to free context space.
- **Episodic memory** — Store of specific past interactions and task runs retrievable as records of what happened.
- **Long-term memory store** — External persistent store an agent writes to and reads from across sessions.
- **Memory consolidation** — Policy deciding what from a session is worth writing into long-term memory.
- **Memory decay** — Policy that ages out or downweights stored memories so stale entries stop being recalled.
- **Procedural memory** — Encoded ability to perform a class of task, held in weights, prompts or stored routines.
- **Scratchpad** — External file or buffer where an agent writes intermediate notes outside the context window.
- **Semantic memory** — Store of general facts and knowledge held independently of when they were learned.
- **Working memory** — Everything currently inside the model's context window during a run.

### Multi-agent systems

- **Agent registry** — Directory of available agents, their capabilities and endpoints, used for discovery and routing.
- **Blackboard pattern** — Coordination through a shared workspace agents read and write rather than direct messaging.
- **Context isolation** — Giving each agent its own context so upstream noise does not propagate across the system.
- **Critic pattern** — Pairing a producer agent with a reviewer agent that grades and returns work for revision.
- **Debate pattern** — Topology where agents argue opposing positions and a judge selects or synthesises an answer.
- **Fan-out / scatter-gather** — Topology dispatching subtasks to agents in parallel and aggregating their returns.
- **Handoff** — Primitive transferring control and a structured payload from one agent to another.
- **Handoff information loss** — Degradation of task fidelity when context is summarised or dropped at an agent boundary.
- **Hierarchical topology** — Multi-agent structure stacking supervisors so coordinators themselves report to a higher coordinator.
- **Microsoft Agent Framework (MAF)** `[tool]` — Microsoft's unified agent SDK combining AutoGen orchestration ideas with Semantic Kernel production infrastructure.
- **Multi-agent system** — System where several specialised agents divide a task and coordinate through defined interfaces.
- **Orchestration engine** — Runtime that schedules agent steps, manages state and enforces control flow across the system.
- **Role specialisation** — Assigning each agent a narrow remit, toolset and instruction set within the system.
- **Sequential pipeline** — Topology where each agent's output becomes the next agent's input in a fixed order.
- **Supervisor pattern** — Topology where one coordinating agent routes work to workers and integrates their results.
- **Swarm topology** — Peer topology where agents transfer control directly to one another without a central coordinator.

### Agent protocols

- **A2A task lifecycle** — Defined state progression a delegated A2A task moves through from submission to completion.
- **AG-UI** — Protocol standardising streamed event exchange between backend agents and front-end user interfaces.
- **Agent Card** — Machine-readable A2A document advertising an agent's identity, skills, endpoint and authentication requirements.
- **Agent Communication Protocol (ACP)** — IBM-originated REST protocol for message exchange between agents in a shared runtime.  ⚠ *merged into A2A in August 2025 and its repository archived*
- **Agent identity** — Verifiable credential distinguishing one agent from another for authorisation and audit.
- **Agent Network Protocol (ANP)** — Decentralised-identity protocol for open-network agent discovery and communication.
- **Agent2Agent protocol (A2A)** — Open protocol letting independently built agents discover each other and delegate tasks across frameworks.
- **Capability declaration** — Machine-readable statement of what an agent or server can do, used for discovery and negotiation.
- **Delegated authorisation** — Granting an agent scoped, revocable access to act on a principal's behalf.
- **MCP client** — Host-side component that connects to MCP servers and surfaces their capabilities to the model.
- **MCP elicitation** — Server-initiated request asking the client to collect additional structured input from the user.
- **MCP prompt** — Reusable templated instruction an MCP server publishes for clients to invoke.
- **MCP resource** — Read-only data item an MCP server exposes for a client to fetch into context.
- **MCP sampling** — Server-initiated request asking the client's model to generate a completion on its behalf.
- **MCP server** — Process exposing tools, resources and prompts to MCP clients over a defined transport.
- **MCP transport** — Channel carrying MCP messages, either local standard input/output or streamable HTTP.
- **Model Context Protocol (MCP)** — Open protocol standardising how applications expose tools, data and prompts to language models.
- **Open Agent Schema Framework (OASF)** — AGNTCY schema standard describing agent identity, capabilities and metadata for discovery.

### Agent safety & control

- **Action audit log** — Immutable record of every tool call, argument and result an agent produced.
- **Approval gate** — Checkpoint blocking a specific irreversible action until a person confirms it.
- **Blast radius** — Extent of damage a compromised or malfunctioning agent could cause given its permissions.
- **Capability boundary** — Explicit limit on which tools, data and actions an agent may reach.
- **Circuit breaker** — Automatic halt triggered when an agent exceeds error, cost or repetition thresholds.
- **Confused deputy** — Failure where an agent uses its own elevated privileges to fulfil an untrusted party's request.
- **Direct prompt injection** — Attack where the user's own input overrides the system's intended instructions.
- **Dry-run mode** — Execution mode where actions are simulated and logged rather than applied.
- **Egress control** — Restricting which network destinations an agent's environment may contact, limiting data exfiltration.
- **Human-in-the-loop (HITL)** — Design requiring explicit human approval at defined points before an agent proceeds.
- **Human-on-the-loop** — Design where humans monitor autonomous execution and intervene only when needed.
- **Indirect prompt injection** — Attack where instructions hidden in retrieved or browsed content hijack the agent.
- **Least-privilege tooling** — Granting each tool and agent the narrowest permissions sufficient for its function.
- **Lethal trifecta** — Risk pattern combining private data access, untrusted content exposure and external communication capability.
- **Rug pull** — Attack where a previously approved server silently changes its tool definitions after trust is granted.
- **Sandboxing** — Executing agent actions inside an isolated environment with restricted filesystem, network and system access.
- **Spend cap** — Hard monetary or token limit enforced per agent run, user or time window.
- **Tool poisoning** — Attack embedding malicious instructions in a tool's description or output to steer the model.

### Agent evaluation

- **Cost per completed task** — Total token, tool and compute spend divided by successfully finished tasks.
- **Loop detection** — Identifying runs where the agent repeats states or actions without progressing.
- **pass^k** — Fraction of scenarios solved on all k independent trials, measuring behavioural reliability.
- **Rubric grading** — Scoring outputs against written criteria applied consistently by a judge model or human.
- **Simulated user** — Model-driven counterpart that plays the human side of a multi-turn evaluation scenario.
- **Step efficiency** — Number of actions taken relative to the minimum needed to complete the task.
- **SWE-bench** `[tool]` — Benchmark measuring whether agents can resolve real GitHub issues so repository tests pass.
- **Task completion rate** — Share of scenarios where the agent reached the required end state.
- **Tool selection accuracy** — Share of steps where the agent chose the appropriate tool among available options.
- **Tool-call accuracy** — Share of tool invocations that used the correct tool with correct arguments.
- **Trace-based evaluation** — Attaching evaluator scores to individual spans of a recorded execution trace.
- **WebArena** `[tool]` — Self-hosted web environment benchmark for evaluating agents on realistic browser tasks.
- **τ-bench** `[tool]` — Benchmark of tool-agent-user interaction in policy-constrained domains, scored with pass^k.

### Inference & serving

- **Admission control** — Rejecting or deferring requests when accepting them would breach latency objectives.
- **Autoscaling policy** — Rule mapping observed load or queue signals to the number of serving replicas.
- **Batch inference API** — Asynchronous offline interface processing large request sets at reduced price and relaxed latency.
- **Continuous batching** — Recomposing the running batch after each decoding step so finished requests are replaced immediately.
- **Data parallel replicas** — Running independent full copies of a model behind a load balancer to scale request volume.
- **Decode** — Phase generating output tokens one at a time, each attending to the cached prior state.
- **Disaggregated prefill-decode serving** — Running prefill and decode on separate accelerator pools and transferring the KV cache between them.
- **Dynamic batching** — Forming batches at request arrival within a short waiting window before execution.
- **FP8 serving** — Running inference with eight-bit floating-point weights and activations on hardware with native support.
- **Inference server** — Service that loads models and answers generation requests over an API with scheduling and batching.
- **KV cache offloading** — Moving cached key-value blocks to host memory or storage to free accelerator memory.
- **KV cache quantization** — Storing cached keys and values at reduced precision to fit more concurrent sequences.
- **KV-aware routing** — Load balancing that sends a request to the replica already holding its cached prefix.
- **LLM gateway** — Proxy layer unifying provider APIs while adding routing, caching, keys, quotas and logging.
- **Model cascade** — Trying a small model first and escalating to a larger one only when confidence is low.
- **Model routing** — Directing each request to the cheapest model expected to meet the quality requirement.
- **Multi-LoRA serving** — Serving many low-rank adapters over one shared base model with per-request adapter selection.
- **Preemption** — Suspending an in-flight request and freeing its cache when higher-priority work arrives.
- **Prefill** — Phase computing attention over all input tokens to populate the cache before generation begins.
- **Request scheduler** — Serving component deciding which queued requests enter the running batch and in what order.
- **Scale-to-zero** — Autoscaling policy removing all replicas when idle, accepting cold starts to eliminate idle cost.
- **Semantic caching** — Returning a stored response when a new request is semantically equivalent to a previous one.
- **Serverless inference** — Managed serving where capacity is provisioned per request and billed by usage.
- **Static batching** — Grouping a fixed set of requests and running them to completion together.
- **Tree verification** — Verifying a branching tree of speculative token candidates in a single forward pass.
- **Triton Inference Server** `[tool]` — NVIDIA multi-framework model server for general inference workloads.  ⚠ *renamed Dynamo-Triton; NVIDIA Dynamo is the successor for distributed generative serving*
- **Warm pool** — Pre-loaded standby replicas kept ready to absorb traffic spikes without cold-start delay.
- **Weight-only quantization** — Storing weights at reduced precision while computing activations at higher precision during serving.

### Serving performance & cost

- **Concurrency** — Number of requests being served simultaneously by a replica or deployment.
- **Cost per million tokens** — Serving cost normalised by generated token volume, used to compare deployments and providers.
- **Cost per request** — Average infrastructure and provider spend attributable to a single served request.
- **End-to-end latency** — Total time from request submission to the final token of the complete response.
- **Inter-token latency (ITL)** — Gap between two consecutive streamed tokens, determining perceived smoothness of output.
- **Latency-throughput tradeoff** — Relationship where larger batches raise throughput while lengthening individual request latency.
- **Memory-bound decoding** — Regime where decode speed is limited by weight and cache memory bandwidth rather than compute.
- **Queueing delay** — Time a request waits before the scheduler admits it into a running batch.
- **Right-sizing** — Matching hardware class, replica count and precision to measured load and quality requirements.
- **Service level objective (SLO)** — Committed target for a measurable service property such as latency or availability.
- **Tail latency** — Latency at high percentiles of the distribution, describing the slowest requests users experience.
- **Time per output token (TPOT)** — Average time to produce each subsequent token during steady-state decoding.
- **Time to first token (TTFT)** — Elapsed time from request submission to the first generated token reaching the client.
- **Utilisation-based cost model** — Costing that divides fixed accelerator rental by the traffic actually served on it.

### MLOps foundations

- **CI/CD for machine learning** — Automated pipelines that test, build and release models and their serving code on change.
- **Continuous training (CT)** — Automated retraining pipeline triggered by schedule, data volume or degradation signals.
- **Data versioning** — Tracking immutable snapshots of datasets so training runs can be reproduced exactly.
- **DVC** `[tool]` — Git-based version control for datasets, models and reproducible pipeline stages.
- **Experiment tracking** — Recording parameters, code version, data version, metrics and artefacts for every training run.
- **Lineage** — Recorded chain linking a deployed model to the data, code and runs that produced it.
- **LLMOps** — MLOps specialised for language-model applications, covering prompts, retrieval, evaluation, tracing and token cost.
- **MLOps** — Practice of building, deploying and operating machine learning systems reliably and repeatably in production.
- **Model card** — Structured document describing a model's intended use, training data, evaluation results and limitations.
- **Model lifecycle** — Stages a model passes through from development and validation to production, monitoring and retirement.
- **Model registry** — Versioned catalogue of trained models with stage, metadata and promotion history.
- **Model versioning** — Assigning immutable identifiers to model artefacts so deployments and results remain traceable.
- **Offline store** — Historical feature repository used to build training datasets.
- **Online store** — Low-latency feature repository serving current feature values at inference time.
- **Pipeline orchestration** — Scheduling and dependency management for the sequence of data and model jobs.
- **Point-in-time correctness** — Constructing training rows using only feature values available at the original event timestamp.
- **Reproducibility** — Ability to regenerate a result from pinned code, data, environment and random seeds.
- **Retraining trigger** — Condition that launches retraining, such as drift breach, accuracy drop or dataset refresh.
- **Run** — Single tracked execution of a training or evaluation job with its logged inputs and outputs.
- **Training-serving skew** — Discrepancy between feature computation at training time and at inference time, degrading live accuracy.
- **Weights & Biases** `[tool]` — Hosted platform for experiment tracking, artefact versioning, sweeps and model management.

### Deployment & release

- **Blue-green deployment** — Maintaining two full environments and switching traffic between them in one cutover.
- **Canary deployment** — Routing a small traffic slice to a new version and expanding it as metrics hold.
- **Feature flag** — Runtime switch enabling or disabling a code path or model variant without redeploying.
- **Model promotion** — Advancing a registered model version through staging gates into production status.
- **Online A/B test** — Randomised assignment of live traffic to variants to measure causal effect on business metrics.
- **Online evaluation** — Scoring model behaviour on live production traffic, typically on a sampled subset.
- **Progressive rollout** — Stepwise traffic increase to a new version with automatic halt on metric regression.
- **Rollback** — Reverting serving traffic to a previously known-good model or prompt version.

### Monitoring & drift

- **Alert threshold** — Configured metric boundary whose breach triggers notification or automated response.
- **Delayed ground truth** — Situation where true labels arrive long after prediction, postponing accuracy measurement.
- **Gradual drift** — Slow distribution change accumulating over an extended period.
- **Label drift** — Change in the distribution of the target variable itself, independent of the inputs.
- **Model decay** — Progressive loss of predictive accuracy after deployment as the environment changes.
- **Population stability index (PSI)** — Statistic quantifying how much a binned distribution has shifted from a reference period.
- **Prediction drift** — Change in the distribution of model outputs, often the first observable drift signal.
- **Proxy metric** — Observable signal used to approximate quality when true labels are unavailable or delayed.
- **Recurring drift** — Distribution change that returns periodically with seasonal or cyclical patterns.
- **Sudden drift** — Abrupt distribution change occurring at a single point in time.

### LLMOps & observability

- **Annotation queue** — Workflow routing selected production traces to human reviewers for labelling.
- **Cost governance** — Controls attributing, budgeting and capping model spend across teams and applications.
- **Evaluation dataset** — Fixed set of inputs with expectations against which application versions are scored repeatably.
- **Evaluation in CI** — Running the evaluation suite on every change and blocking merges that regress scores.
- **Failure mode clustering** — Grouping recorded errors into recurring categories to prioritise fixes.
- **Generation span** — Span representing a single model call, recording prompt, completion, model name and token counts.
- **Judge calibration** — Aligning an automated judge's scores with human labels on a reference sample.
- **LLM-as-judge** — Using a language model to score or compare outputs against a rubric or reference.
- **Online scoring** — Applying evaluators to sampled production traces continuously rather than only offline.
- **OpenTelemetry GenAI semantic conventions** — Standard attribute and span definitions describing model calls, tokens, tools and agents in traces.
- **Pairwise judging** — Judge protocol choosing the better of two candidate outputs rather than assigning absolute scores.
- **Prompt registry** — Central store serving named prompt versions to applications at runtime.
- **Prompt versioning** — Tracking prompts as versioned artefacts so changes can be compared, deployed and rolled back.
- **Quality gate** — Threshold on evaluation scores that a build must clear before release.
- **Regression suite** — Accumulated set of previously failing cases rerun to confirm fixes stay fixed.
- **Retrieval span** — Span recording a retrieval call with its query, returned documents and scores.
- **Scorer** — Named function producing a numeric or categorical score for a trace, span or output.
- **Session** — Grouping of related traces belonging to one user conversation or agent run.
- **Span** — Timed unit of work within a trace, carrying inputs, outputs, attributes and status.
- **Token accounting** — Recording input, output and cached token counts per call to attribute cost and usage.
- **Tool span** — Span recording a tool invocation with its arguments, result and duration.
- **Trace replay** — Re-running recorded production inputs against a new version to compare behaviour.

### Guardrails & governance

- **Compliance logging** — Retention of prompts, outputs and decisions in a form suitable for regulatory audit.
- **Content moderation filter** — Classifier blocking output categories such as harassment, self-harm or illicit instruction.
- **Fallback response** — Predefined safe reply returned when a guardrail blocks or a generation fails.
- **Guardrail** — Runtime check that validates or blocks model inputs and outputs against defined policy.
- **Guardrail latency cost** — Additional response delay introduced by running validation models alongside generation.
- **Incident postmortem** — Structured review after a production AI failure identifying causes and corrective actions.
- **Input guardrail** — Pre-generation check screening user or retrieved content before it reaches the model.
- **Jailbreak detection** — Classifier identifying inputs crafted to bypass a model's safety instructions.
- **Model access control** — Policy governing which users and services may invoke which models and tools.
- **NeMo Guardrails** `[tool]` — NVIDIA toolkit defining conversational rails and policy flows around LLM applications.
- **Output guardrail** — Post-generation check validating a response before it is returned or acted on.
- **PII detection and redaction** — Identifying personal identifiers in text and masking them before storage or transmission.
- **Production red teaming** — Ongoing adversarial probing of a deployed system to discover new failure and abuse paths.
- **Schema validation** — Rejecting or repairing model output that does not conform to the required structure.
- **Topic restriction** — Policy confining an application's responses to an approved subject scope.

## Tools — data engineering, databases, ML libraries
*264 terms*

### Ingestion & integration

- **Airbyte** `[tool]` — Open-source data integration platform with a large connector catalogue and connector development kit.
- **Apache NiFi** `[tool]` — Flow-based data routing system with a visual designer, provenance tracking and back-pressure control.
- **Apache Sqoop** `[tool]` — Batch transfer tool moving bulk data between relational databases and Hadoop storage.  ⚠ *Moved to the Apache Attic; superseded by Kafka Connect, Spark JDBC reads and managed ELT services.*
- **AWS Database Migration Service (DMS)** `[tool]` — AWS service for one-off migration and ongoing change-data-capture replication between database engines.
- **AWS Glue** `[tool]` — Serverless AWS service for cataloguing, extracting and transforming data using managed Spark jobs.
- **Azure Data Factory** `[tool]` — Microsoft cloud service for building, scheduling and monitoring data movement and transformation pipelines.
- **Debezium** `[tool]` — Open-source change-data-capture engine that reads database transaction logs and emits row-level change events.
- **dlt (data load tool)** `[tool]` — Python library that declares extract-and-load pipelines as code, handling schema inference and evolution.
- **Estuary Flow** `[tool]` — Managed platform unifying change-data-capture, streaming and batch ingestion into a single pipeline model.
- **Fivetran** `[tool]` — Managed ELT service replicating SaaS applications and databases into warehouses through vendor-maintained connectors.
- **Hevo Data** `[tool]` — Managed no-code pipeline platform for replicating sources into warehouses with in-flight transformations.
- **Informatica Intelligent Data Management Cloud (IDMC)** `[tool]` — Enterprise cloud suite covering integration, quality, governance and master data management.
- **ingestr** `[tool]` — Command-line tool that copies data between any supported source and destination with one invocation.
- **Kafka Connect** `[tool]` — Framework running reusable source and sink connectors that move data between Kafka and external systems.
- **Matillion** `[tool]` — Cloud-native ETL/ELT platform with a visual pipeline builder that pushes processing into the warehouse.
- **Meltano** `[tool]` — Open-source, command-line ELT platform that composes pipelines from Singer taps and targets.
- **Singer** — Open specification defining taps and targets that exchange extracted records as JSON over standard output.
- **Sling** `[tool]` — Lightweight open-source CLI and library for moving data between databases, files and object storage.
- **Stitch** `[tool]` — Hosted, low-configuration ELT service for batch replication into cloud warehouses.
- **Talend** `[tool]` — Enterprise data integration suite with graphical job design and code generation.  ⚠ *Now sold as Qlik Talend Cloud following Qlik's acquisition; standalone branding retired.*

### Orchestration

- **Apache Airflow** `[tool]` — Python-based workflow scheduler running directed acyclic graphs of tasks with retries, backfills and a web UI.
- **Apache DolphinScheduler** `[tool]` — Distributed visual workflow scheduler for big-data tasks with drag-and-drop DAG definition.
- **Apache Oozie** `[tool]` — XML-configured workflow scheduler for Hadoop MapReduce, Pig and Hive jobs.  ⚠ *Legacy Hadoop-era project, effectively superseded by Airflow in current stacks.*
- **Argo Workflows** `[tool]` — Kubernetes-native container workflow engine used to run machine learning and data pipelines.
- **Astronomer Astro** `[tool]` — Commercial managed Airflow platform adding deployment tooling, observability and support.
- **AWS Step Functions** `[tool]` — AWS managed state machine service coordinating distributed steps with retries and error handling.
- **Dagster** `[tool]` — Python orchestrator organising pipelines around declared data assets, with typing, lineage and testing built in.
- **Flyte** `[tool]` — Kubernetes-native orchestrator for strongly typed, versioned and reproducible machine learning and data workflows.
- **Kestra** `[tool]` — Event-driven orchestrator whose workflows are declared in YAML and run tasks in any language.
- **Kubeflow Pipelines** `[tool]` — Kubeflow component for defining, running and tracking containerised machine learning pipelines on Kubernetes.
- **Luigi** `[tool]` — Spotify's Python library for building batch job pipelines with dependency resolution and visualisation.  ⚠ *Effectively in maintenance mode; superseded by Airflow, Dagster and Prefect for new pipelines.*
- **Mage AI** `[tool]` — Open-source pipeline tool combining notebook-style authoring with scheduled orchestration.
- **Prefect** `[tool]` — Python orchestration framework turning ordinary functions into observable, retried flows, with a hosted control plane.
- **Temporal** `[tool]` — Durable execution platform that runs long-lived workflows as code with automatic state persistence and recovery.

### Transformation

- **Alteryx** `[tool]` — Desktop and server analytics platform for visual data preparation, blending and reporting workflows.
- **Coalesce** `[tool]` — Commercial column-aware transformation platform combining a visual interface with generated, version-controlled SQL.
- **Dataform** `[tool]` — Google Cloud service for managing SQL-based BigQuery transformation workflows as version-controlled repositories.
- **dbt Cloud** `[tool]` — Hosted dbt service adding scheduling, IDE, environments, semantic layer and governance.
- **dbt Core** `[tool]` — Open-source framework compiling modular SQL models into warehouse transformations with tests, docs and lineage.
- **dbt Fusion** `[tool]` — Rust-based dbt execution engine providing local SQL comprehension, faster parsing and static analysis.
- **Lakeflow Declarative Pipelines** `[tool]` — Databricks framework declaring streaming and batch transformation pipelines with managed dependency resolution and data expectations.  ⚠ *Formerly Delta Live Tables; renamed in 2025 under the Lakeflow umbrella.*
- **SDF** `[tool]` — Rust SQL compiler and transformation toolchain performing static analysis of warehouse SQL.  ⚠ *Acquired by dbt Labs and folded into the dbt Fusion engine; discontinued standalone.*
- **SQLGlot** `[tool]` — Python SQL parser, transpiler and optimiser translating queries between database dialects.
- **SQLMesh** `[tool]` — Open-source transformation framework with column-level lineage, virtual data environments and automatic change classification.

### Streaming

- **Amazon Kinesis Data Streams** `[tool]` — AWS managed service for ingesting and processing sharded real-time record streams.
- **Amazon Managed Streaming for Apache Kafka (MSK)** `[tool]` — AWS service running and operating Kafka clusters on the customer's behalf.
- **Apache Beam** `[tool]` — Unified programming model and SDK expressing batch and streaming pipelines portable across multiple execution runners.
- **Apache Flink** `[tool]` — Distributed stream-processing engine with event-time semantics, exactly-once state and SQL, batch and streaming APIs.
- **Apache Kafka** `[tool]` — Distributed append-only log platform for publishing, storing and consuming partitioned record streams.
- **Apache Pulsar** `[tool]` — Distributed messaging and streaming system separating serving brokers from BookKeeper storage, with native multi-tenancy.
- **Arroyo** `[tool]` — Rust-based distributed stream-processing engine executing SQL queries over event streams.
- **AutoMQ** `[tool]` — Open-source Kafka-compatible broker that offloads storage to cloud object storage for elasticity.
- **Bytewax** `[tool]` — Python stream-processing framework with a Rust dataflow core for stateful event pipelines.
- **Confluent Platform** `[tool]` — Commercial Kafka distribution and cloud service adding schema registry, connectors, governance and managed Flink.
- **Google Cloud Pub/Sub** `[tool]` — Google Cloud global publish-subscribe messaging service with at-least-once delivery and autoscaling.
- **Kafka Streams** `[tool]` — Java library embedding stateful stream processing directly inside applications reading and writing Kafka topics.
- **ksqlDB** `[tool]` — Confluent streaming SQL engine defining continuous queries and materialised views over Kafka topics.
- **Materialize** `[tool]` — Streaming database computing incrementally maintained SQL views using differential dataflow.
- **Redpanda** `[tool]` — C++ Kafka-API-compatible streaming platform with no JVM or ZooKeeper dependency.
- **Redpanda Connect** `[tool]` — Declarative stream-processing and connector runtime for routing, enriching and transforming messages.  ⚠ *Renamed from Benthos after Redpanda took over the project.*
- **RisingWave** `[tool]` — PostgreSQL-compatible streaming database maintaining incrementally updated materialised views over event streams.
- **Spark Structured Streaming** `[tool]` — Spark API treating unbounded streams as incrementally executed tables using micro-batch or continuous processing.
- **WarpStream** `[tool]` — Kafka-compatible, diskless broker writing directly to object storage to remove inter-zone and disk costs.

### Data quality & observability

- **Anomalo** `[tool]` — Commercial platform applying machine learning to detect unexpected changes in warehouse tables without hand-written rules.
- **Apache Griffin** `[tool]` — Data quality service defining measurement rules and metrics over batch and streaming Hadoop data.  ⚠ *Retired to the Apache Attic; superseded by Great Expectations, Soda and Deequ.*
- **Cleanlab** `[tool]` — Library and platform detecting mislabelled, duplicated and outlier examples in training datasets.
- **Datafold** `[tool]` — Data reliability tool performing data diffs and regression testing between pipeline versions.
- **Deequ** `[tool]` — Open-source Spark library from AWS defining and verifying data quality constraints on large datasets.
- **Elementary** `[tool]` — dbt-native package and cloud service monitoring test results, freshness and anomalies inside dbt projects.
- **Evidently** `[tool]` — Open-source Python library and dashboard for evaluating, testing and monitoring machine learning and LLM systems.
- **Great Expectations (GX)** `[tool]` — Python framework declaring data validations as expectations and producing validation results and documentation.
- **Monte Carlo** `[tool]` — Commercial data observability platform detecting freshness, volume, schema and distribution incidents across the stack.
- **Pandera** `[tool]` — Python library for declaring and enforcing statistical schemas on dataframes at runtime.
- **Soda Core** `[tool]` — Open-source engine running declarative SQL-based data quality checks written in a check language.
- **whylogs** `[tool]` — Open-source library generating compact statistical profiles of datasets for drift and data quality monitoring.

### Catalogue & lineage

- **Amundsen** `[tool]` — Open-source data discovery and metadata search application originating at Lyft.  ⚠ *Dormant; new deployments use DataHub or OpenMetadata instead.*
- **Apache Atlas** `[tool]` — Metadata and governance framework for Hadoop ecosystems providing classification, lineage and policy tagging.  ⚠ *Largely superseded outside Hadoop estates by DataHub and OpenMetadata.*
- **Apache Gravitino** `[tool]` — Federated metadata catalogue unifying Iceberg, Hive, relational, streaming and file metadata behind one API.
- **Apache Polaris** `[tool]` — Open-source Iceberg REST catalogue implementation providing cross-engine table governance and credential vending.
- **Atlan** `[tool]` — Commercial active metadata platform for discovery, governance and collaboration across the data stack.
- **AWS Glue Data Catalog** `[tool]` — AWS-managed metastore holding table definitions used by Athena, EMR, Redshift Spectrum and Glue.
- **Collibra** `[tool]` — Enterprise data governance platform covering catalogue, policies, stewardship workflows and data quality.
- **DataHub** `[tool]` — Open-source metadata platform providing search, lineage, governance and quality context for data assets.
- **Hive Metastore** `[tool]` — Long-standing relational metadata store mapping table names, schemas and partitions to storage locations.  ⚠ *Legacy for new lakehouses; being replaced by Iceberg REST catalogues and Unity Catalog.*
- **Marquez** `[tool]` — Open-source metadata service that collects and serves OpenLineage events as job and dataset lineage.
- **OpenMetadata** `[tool]` — Open-source metadata platform bundling catalogue, lineage, quality and collaboration in one service.
- **Project Nessie** `[tool]` — Open-source transactional catalogue adding Git-like branches and tags to Iceberg table metadata.
- **Unity Catalog** `[tool]` — Databricks governance layer, now open-sourced, unifying permissions and metadata for tables, files, models and functions.

### Table & file formats

- **Apache Arrow** `[tool]` — In-memory columnar data standard and library set enabling zero-copy exchange between processes and languages.
- **Apache Hudi** `[tool]` — Open table format specialising in upserts, incremental pulls and merge-on-read ingestion pipelines.
- **Apache Iceberg** `[tool]` — Open table format bringing ACID transactions, schema evolution, partition evolution and snapshots to large datasets.
- **Apache Paimon** `[tool]` — Streaming-first lake table format built around LSM storage for low-latency writes and point lookups.
- **Apache XTable** `[tool]` — Translation layer converting metadata between Iceberg, Delta Lake and Hudi without rewriting data files.  ⚠ *Renamed from OneTable when donated to the Apache Incubator.*
- **Delta Lake** `[tool]` — Open table format using a JSON transaction log to give object-store files ACID transactions and time travel.
- **Delta UniForm** `[tool]` — Delta Lake capability publishing Iceberg-compatible metadata alongside Delta tables for cross-engine reads.
- **DuckLake** `[tool]` — Lakehouse format storing Parquet data files while keeping all catalogue metadata in a SQL database.
- **Lance** `[tool]` — Columnar format optimised for machine learning data, random access and vector search over versioned datasets.

### Query engines

- **Apache DataFusion** `[tool]` — Rust query engine and library providing an extensible Arrow-native SQL and DataFrame execution core.
- **Apache Hive** `[tool]` — SQL layer over Hadoop-era storage translating queries into distributed execution plans.  ⚠ *Legacy; lakehouse deployments use Spark, Trino or cloud warehouses instead.*
- **Apache Impala** `[tool]` — Massively parallel C++ SQL engine giving low-latency queries over Hadoop and lakehouse storage.
- **Apache Spark** `[tool]` — Distributed data processing engine with SQL, dataframe, streaming and machine learning interfaces on a cluster.
- **Dremio** `[tool]` — Lakehouse query platform with a Trino-lineage engine, semantic layer and Iceberg-native management.
- **DuckDB** `[tool]` — Embedded columnar analytical database running in-process and querying Parquet and lake tables directly.
- **Ibis** `[tool]` — Python dataframe API that compiles expressions to SQL or native plans across many execution backends.
- **Photon** `[tool]` — Databricks native vectorised C++ execution engine accelerating SQL and DataFrame workloads.
- **PrestoDB** `[tool]` — Original Facebook-authored distributed SQL engine, now governed by the Presto Foundation.
- **Starburst** `[tool]` — Commercial Trino distribution and managed service adding connectors, caching, governance and support.
- **Trino** `[tool]` — Distributed SQL query engine federating queries across object storage, warehouses and operational databases.
- **Velox** `[tool]` — C++ vectorised execution library reused as the evaluation layer inside multiple query engines.

### Warehouses & lakehouses

- **Amazon Redshift** `[tool]` — AWS columnar cloud warehouse with provisioned and serverless compute and lake-query integration.
- **Azure Synapse Analytics** `[tool]` — Microsoft analytics service combining dedicated SQL pools, Spark pools and pipelines.  ⚠ *Superseded for new deployments by Microsoft Fabric.*
- **Databricks Data Intelligence Platform** `[tool]` — Spark-based lakehouse platform combining warehousing, engineering, governance and machine learning on Delta and Iceberg tables.
- **Firebolt** `[tool]` — Cloud data warehouse focused on low-latency, high-concurrency analytics over decoupled storage.
- **Google BigQuery** `[tool]` — Serverless cloud warehouse charging by scanned data or reserved slots, with separated storage and compute.
- **Greenplum** `[tool]` — PostgreSQL-derived massively parallel analytics database for large batch analytics.  ⚠ *Broadcom closed the upstream open-source repository; community development continues as Apache Cloudberry.*
- **Microsoft Fabric** `[tool]` — Unified Microsoft SaaS analytics platform combining lakehouse, warehouse, pipelines and Power BI on OneLake.
- **MotherDuck** `[tool]` — Managed cloud service running DuckDB with hybrid local-and-cloud query execution.
- **Snowflake** `[tool]` — Cloud data platform separating elastic compute warehouses from centralised storage, with sharing and native applications.
- **Teradata VantageCloud** `[tool]` — Cloud version of Teradata's massively parallel analytics database for large enterprise workloads.
- **Vertica** `[tool]` — Columnar MPP analytics database deployable on-premises, in cloud or in separated storage-compute mode.

### OLAP & analytics databases

- **Apache Doris** `[tool]` — MPP analytical database offering real-time ingestion, high concurrency and a MySQL-compatible interface.
- **Apache Druid** `[tool]` — Real-time analytics database serving low-latency aggregate queries over streaming and batch data.
- **Apache Pinot** `[tool]` — Real-time distributed OLAP datastore designed for user-facing analytical queries at high concurrency.
- **ClickHouse** `[tool]` — Open-source columnar OLAP database delivering very fast aggregation over large append-heavy tables.
- **Elasticsearch** `[tool]` — Distributed search and analytics engine built on Lucene, with hybrid text and vector retrieval.
- **InfluxDB** `[tool]` — Purpose-built time-series database for metrics and event data, with columnar storage in version three.
- **kdb+** `[tool]` — Commercial columnar time-series database queried with the vector language q, common in finance.
- **QuestDB** `[tool]` — Open-source time-series database with SQL extensions for high-throughput ingestion and time-ordered queries.
- **Rockset** `[tool]` — Real-time indexing database serving low-latency queries over semi-structured event data.  ⚠ *Discontinued as a public service after OpenAI acquired the company.*
- **SingleStore** `[tool]` — Distributed SQL database combining rowstore and columnstore for mixed transactional and analytical workloads.
- **StarRocks** `[tool]` — MySQL-protocol columnar analytics database with vectorised execution and strong multi-table join performance.
- **TigerData** `[tool]` — PostgreSQL extension and cloud service adding hypertables, compression and continuous aggregates for time-series data.  ⚠ *Renamed from TimescaleDB; the extension name persists in code.*
- **Tinybird** `[tool]` — Managed ClickHouse-based platform turning streaming data and SQL into published low-latency APIs.

### Dataframe & array libraries

- **cuDF** `[tool]` — RAPIDS GPU DataFrame library exposing a pandas-like API backed by CUDA kernels.
- **CuPy** `[tool]` — GPU array library mirroring the NumPy and SciPy APIs on CUDA and ROCm.
- **Daft** `[tool]` — Rust-backed distributed DataFrame engine handling tabular and multimodal columns such as images and tensors.
- **Dask** `[tool]` — Open-source Python library for parallel and distributed computation over arrays, dataframes and custom task graphs.
- **Modin** `[tool]` — Drop-in pandas replacement that distributes DataFrame operations over Ray or Dask.
- **Narwhals** `[tool]` — Lightweight compatibility layer letting a library accept multiple dataframe implementations through one Polars-style API.
- **NumPy** `[tool]` — Foundational Python library providing n-dimensional homogeneous arrays and compiled numerical operations over them.
- **pandas** `[tool]` — Python library providing labelled tabular DataFrame and Series structures with alignment, grouping and reshaping.
- **pandas API on Spark** `[tool]` — Spark module exposing a pandas-compatible interface that executes distributed Spark plans underneath.  ⚠ *Absorbed the former Koalas project, which is no longer developed separately.*
- **Polars** `[tool]` — Rust-backed DataFrame library with multithreaded execution, Arrow memory and a lazy query optimiser.
- **PyArrow** `[tool]` — Python bindings to Arrow's columnar libraries, covering arrays, Parquet, datasets, compute and Flight.
- **PySpark** `[tool]` — Python API for Apache Spark, exposing dataframes, SQL and user-defined functions to Python code.
- **Ray** `[tool]` — Open-source distributed computing framework with libraries for training, tuning, serving and data processing at scale.
- **SciPy** `[tool]` — Scientific computing library providing optimisation, linear algebra, statistics, signal processing and sparse matrices.
- **Vaex** `[tool]` — Python library using memory mapping and lazy evaluation to browse out-of-core tabular datasets.
- **xarray** `[tool]` — Python library adding named dimensions, coordinates and metadata to multidimensional arrays.

### Classical ML libraries

- **category_encoders** `[tool]` — Library of scikit-learn-compatible categorical encoders including target, WoE and contrast schemes.
- **cuML** `[tool]` — RAPIDS library providing GPU implementations of classical machine learning algorithms with scikit-learn-like APIs.
- **Darts** `[tool]` — Python forecasting library exposing classical, machine learning and deep models under one API.
- **feature-engine** `[tool]` — Library of scikit-learn-compatible transformers for imputation, discretisation, outlier handling and feature creation.
- **GluonTS** `[tool]` — Amazon library for probabilistic time-series modelling with PyTorch-based deep forecasting models.
- **H2O-3** `[tool]` — Open-source distributed machine learning platform with Java-based algorithms and R, Python and web interfaces.
- **imbalanced-learn** `[tool]` — scikit-learn companion providing resampling techniques and estimators for skewed class distributions.
- **implicit** `[tool]` — Python library implementing fast matrix-factorisation recommenders for implicit-feedback interaction data.
- **MLForecast** `[tool]` — Nixtla library that applies machine learning regressors to forecasting through automated feature and lag construction.
- **MLxtend** `[tool]` — Extension library adding stacking, frequent-pattern mining, plotting and evaluation utilities to scikit-learn workflows.
- **NetworkX** `[tool]` — Python library for constructing, analysing and measuring graphs and networks.
- **NeuralForecast** `[tool]` — Nixtla library implementing neural forecasting architectures behind a consistent training and prediction interface.
- **NumPyro** `[tool]` — Probabilistic programming library built on JAX for fast, compiled Bayesian inference.
- **Prophet** `[tool]` — Meta-authored additive forecasting model fitting trend, seasonality and holiday components to business time series.  ⚠ *Reported to be in maintenance mode with no major feature development.*
- **PyMC** `[tool]` — Python probabilistic programming library for Bayesian modelling with gradient-based and sampling inference.
- **PyOD** `[tool]` — Python library of outlier detection algorithms across tabular and other modalities with a unified API.
- **River** `[tool]` — Python library for online machine learning, updating models incrementally one observation at a time.  ⚠ *Formed by merging creme and scikit-multiflow, both of which it replaces.*
- **scikit-learn** `[tool]` — Python library of classical supervised and unsupervised algorithms with a uniform estimator and pipeline API.
- **scikit-survival** `[tool]` — scikit-learn-compatible library implementing survival analysis models for censored time-to-event data.
- **sktime** `[tool]` — Unified Python framework for time-series forecasting, classification, regression and transformation with scikit-learn-style composition.
- **Spark MLlib** `[tool]` — Apache Spark's distributed machine learning library with pipeline abstractions over cluster data.
- **Stan** `[tool]` — Probabilistic programming language and inference engine with Hamiltonian Monte Carlo and variational methods.
- **StatsForecast** `[tool]` — Nixtla library providing fast, scalable implementations of classical statistical forecasting models.
- **statsmodels** `[tool]` — Python library for statistical modelling, hypothesis testing and econometric estimation with detailed result summaries.
- **TensorFlow Probability** `[tool]` — TensorFlow library of distributions, bijectors and inference methods for probabilistic modelling.
- **UMAP-learn** `[tool]` — Implementation of uniform manifold approximation and projection for nonlinear dimensionality reduction.
- **Vowpal Wabbit** `[tool]` — Fast online learning system with hashing, reductions, contextual bandits and interactive learning.

### Gradient boosting

- **CatBoost** `[tool]` — Yandex gradient boosting library with ordered boosting and native handling of categorical features.
- **InterpretML** `[tool]` — Microsoft library providing the glassbox Explainable Boosting Machine alongside post-hoc explanation methods.
- **LightGBM** `[tool]` — Gradient boosting library using histogram binning, leaf-wise growth, GOSS and exclusive feature bundling.
- **NGBoost** `[tool]` — Boosting that predicts full parametric distributions by natural-gradient updates of distributional parameters.
- **TabICL** `[tool]` — Open-source tabular foundation model doing in-context classification and regression on small to medium tables.
- **TabPFN** `[tool]` — Pretrained transformer performing tabular prediction by in-context learning without per-dataset training.
- **XGBoost** `[tool]` — Gradient boosted decision tree library with second-order optimisation, regularisation and distributed and GPU training.

### AutoML & tuning

- **Amazon SageMaker Autopilot** `[tool]` — AWS service automatically exploring candidate models and pipelines for a supplied tabular dataset.
- **auto-sklearn** `[tool]` — AutoML system combining Bayesian optimisation, meta-learning and ensembling over scikit-learn pipelines.  ⚠ *Effectively in maintenance mode with no release since 2023; AutoGluon or FLAML preferred for new work.*
- **AutoGluon** `[tool]` — Amazon AutoML library that ensembles and stacks models for tabular, text, image and time-series tasks.
- **AutoKeras** `[tool]` — Keras-based AutoML library performing neural architecture search for standard task types.
- **BoTorch** `[tool]` — PyTorch library for Bayesian optimisation built on Gaussian process models and acquisition functions.
- **DataRobot** `[tool]` — Enterprise AI platform providing automated machine learning, deployment, monitoring and generative AI governance.
- **FLAML** `[tool]` — Microsoft library performing cost-frugal automated model selection and hyperparameter tuning.
- **H2O AutoML** `[tool]` — H2O module that automatically trains, tunes and stacks a leaderboard of candidate models.
- **Hyperopt** `[tool]` — Python library performing hyperparameter search with random and tree-structured Parzen estimator strategies.  ⚠ *Unmaintained; Databricks dropped it after Runtime 16.4 LTS ML, recommending Optuna or Ray Tune.*
- **Ludwig** `[tool]` — Declarative deep learning framework configuring models through YAML rather than code.
- **Optuna** `[tool]` — Open-source hyperparameter optimisation framework using define-by-run search spaces, pruning and parallel trials.
- **PyCaret** `[tool]` — Low-code Python wrapper automating comparison, tuning and deployment of classical machine learning models.
- **Ray Tune** `[tool]` — Ray library running distributed hyperparameter search with schedulers such as ASHA and population-based training.
- **scikit-optimize** `[tool]` — Sequential model-based optimisation library offering Bayesian search over scikit-learn estimators.  ⚠ *Effectively unmaintained; Optuna and BoTorch are the current alternatives.*
- **TPOT** `[tool]` — AutoML tool that searches machine learning pipelines using genetic programming.  ⚠ *Original tree-based TPOT superseded by the graph-based TPOT2 rewrite.*
- **Vertex AI AutoML** `[tool]` — Google Cloud service training models on tabular, image, text and video data without hand-written code.

### Deep learning frameworks

- **Apache MXNet** `[tool]` — Deep learning framework with hybrid imperative and symbolic execution and the Gluon API.  ⚠ *Retired to the Apache Attic; users moved to PyTorch.*
- **Burn** `[tool]` — Rust deep learning framework with pluggable compute backends and compile-time tensor typing.
- **Candle** `[tool]` — Hugging Face's minimalist Rust tensor and inference framework for serverless and embedded deployment.
- **Deep Graph Library (DGL)** `[tool]` — Framework-agnostic library for building and scaling graph neural networks over large graphs.
- **DeepSpeed** `[tool]` — Microsoft library providing ZeRO sharding, offloading and pipeline parallelism for very large model training.
- **Equinox** `[tool]` — JAX library representing neural networks as ordinary registered pytrees for functional model code.
- **fastai** `[tool]` — High-level PyTorch library supplying opinionated defaults and layered APIs for common deep learning tasks.
- **Flax** `[tool]` — Neural network library for JAX providing module abstractions used in large-model research code.
- **Haiku** `[tool]` — DeepMind neural network library providing object-oriented module definitions for JAX.  ⚠ *Maintenance mode; DeepMind directs new work to Flax NNX.*
- **Horovod** `[tool]` — Ring-allreduce distributed training library originally built for TensorFlow and PyTorch data parallelism.  ⚠ *In maintenance mode; new work generally uses native FSDP, DeepSpeed or Megatron-Core instead.*
- **JAX** `[tool]` — Numerical library composing automatic differentiation, just-in-time compilation, vectorisation and parallel sharding transformations.
- **Keras 3** `[tool]` — High-level neural network API running interchangeably on TensorFlow, JAX or PyTorch backends.
- **Megatron-LM** `[tool]` — NVIDIA's reference framework for tensor, pipeline and sequence parallel training of very large transformers.
- **MindSpore** `[tool]` — Huawei deep learning framework designed for Ascend accelerators with automatic parallelism.
- **MLX** `[tool]` — Apple array and neural network framework exploiting unified memory on Apple silicon.
- **Optax** `[tool]` — JAX library of composable gradient transformations and optimisers.
- **PaddlePaddle** `[tool]` — Baidu open-source deep learning platform with training, compression and deployment toolkits.
- **PyTensor** `[tool]` — Library for defining, optimising and compiling symbolic mathematical expressions, powering PyMC.  ⚠ *Continues the discontinued Theano and Aesara lineages.*
- **PyTorch** `[tool]` — Python-first deep learning framework with eager execution, autograd and a graph compiler for accelerated training.
- **PyTorch Geometric (PyG)** `[tool]` — PyTorch library implementing graph neural network layers, sampling and benchmark graph datasets.
- **PyTorch Lightning** `[tool]` — Structured wrapper over PyTorch that standardises training loops, distribution and checkpointing.
- **TensorFlow** `[tool]` — Google deep learning framework with graph execution, distribution strategies and a broad deployment ecosystem.
- **tinygrad** `[tool]` — Minimalist deep learning framework with a very small codebase and lazily fused operations.

### Interchange & runtimes

- **Apache TVM** `[tool]` — Compiler stack that optimises and generates deployment code for models across diverse hardware targets.
- **BentoML** `[tool]` — Python framework packaging models and inference code into deployable services with autoscaling and adaptive batching.
- **Core ML Tools** `[tool]` — Apple Python package converting trained models into the Core ML format for on-device inference.
- **Dynamo-Triton** `[tool]` — NVIDIA multi-framework inference server handling model loading, batching and concurrent execution.  ⚠ *Renamed from Triton Inference Server; NVIDIA Dynamo is the next-generation successor.*
- **ExecuTorch** `[tool]` — PyTorch's on-device runtime exporting models to a compact portable format for mobile and embedded targets.
- **IREE** `[tool]` — MLIR-based compiler and runtime lowering models to portable executables for many hardware targets.
- **KServe** `[tool]` — Kubernetes-native model inference platform providing standard prediction protocols, autoscaling and canary rollouts.  ⚠ *formerly KFServing; renamed when it moved out of the Kubeflow project*
- **LiteRT** `[tool]` — Google on-device runtime executing quantised models on mobile and embedded hardware accelerators.  ⚠ *Renamed from TensorFlow Lite; new features ship only under LiteRT.*
- **MLIR** `[tool]` — Reusable compiler infrastructure defining multiple dialects and progressive lowering for machine learning compilers.
- **NVIDIA Dynamo** `[tool]` — Datacentre-scale inference framework orchestrating disaggregated prefill and decode across GPU fleets with KV-aware routing.
- **ONNX Runtime** `[tool]` — Microsoft cross-platform inference engine executing ONNX graphs through pluggable hardware execution providers.
- **OpenVINO** `[tool]` — Intel toolkit optimising and running inference on Intel CPUs, integrated GPUs and NPUs.
- **OpenXLA** `[tool]` — Open compiler ecosystem, including the XLA compiler and StableHLO, targeting accelerators from multiple frameworks.
- **Predictive Model Markup Language (PMML)** — XML standard describing trained statistical and machine learning models for exchange between systems.
- **TensorFlow Serving** `[tool]` — High-performance C++ serving system for TensorFlow SavedModels with versioning and batching.  ⚠ *Maintenance only; new work targets Dynamo-Triton, KServe or framework-native servers.*
- **TensorRT** `[tool]` — NVIDIA compiler and runtime optimising neural networks for low-latency GPU inference through fusion and quantisation.
- **torch.export** `[tool]` — PyTorch API capturing a model as a full graph intermediate representation for compilation and deployment.
- **TorchScript** `[tool]` — Legacy PyTorch mechanism serialising models into a standalone, Python-free intermediate representation.  ⚠ *In maintenance mode; superseded by torch.compile and torch.export for graph capture and deployment.*
- **TorchServe** `[tool]` — Open-source serving framework for PyTorch models with model archives, batching and management APIs.  ⚠ *No longer actively maintained; teams migrate to KServe, BentoML or vLLM-class servers.*
- **Triton (kernel language)** `[tool]` — Python-embedded language and compiler for writing tiled GPU kernels without direct CUDA programming.

### Notebooks & ML IDEs

- **Apache Zeppelin** `[tool]` — Web notebook supporting multiple interpreters, historically used with Spark and Hadoop clusters.
- **conda** `[tool]` — Cross-language package and environment manager widely used for scientific Python installations.
- **Databricks Notebooks** `[tool]` — Multi-language notebook interface attached to Databricks clusters, with versioning and job scheduling.
- **Deepnote** `[tool]` — Collaborative cloud notebook workspace with real-time editing, scheduling and integrations.
- **Google Colab** `[tool]` — Hosted notebook service offering free and paid GPU and TPU runtimes with integrated AI assistance.
- **Gradio** `[tool]` — Python library generating shareable web interfaces and demos around model inference functions.
- **Hex** `[tool]` — Commercial collaborative workspace combining SQL and Python cells with reactive execution and published apps.
- **IPython** `[tool]` — Interactive Python shell and kernel providing the execution layer underneath Jupyter interfaces.
- **Jupyter Notebook** `[tool]` — Document format and execution environment interleaving code cells, their outputs and narrative text.
- **JupyterHub** `[tool]` — Multi-user server provisioning isolated Jupyter environments for teams, classrooms or clusters.
- **JupyterLab** `[tool]` — Extensible web interface for notebooks, terminals, editors and data files in one workspace.
- **Jupytext** `[tool]` — Extension pairing notebooks with plain-text scripts or Markdown for readable version control.
- **Kaggle Notebooks** `[tool]` — Hosted notebook environment on Kaggle with attached competition datasets and accelerator quotas.
- **marimo** `[tool]` — Reactive Python notebook stored as a script, re-running dependent cells automatically and deployable as an app.
- **nbdev** `[tool]` — Framework for developing tested, documented Python packages directly from notebooks.
- **Papermill** `[tool]` — Tool parameterising and executing notebooks programmatically, writing results to new output notebooks.
- **Positron** `[tool]` — Free open-source data science IDE from Posit supporting Python and R in one workflow.
- **Quarto** `[tool]` — Open-source publishing system rendering notebooks and Markdown to documents, sites, slides and books.
- **RStudio** `[tool]` — Integrated development environment for R and Python centred on console, editor, plots and environment panes.
- **Streamlit** `[tool]` — Python framework turning scripts into interactive data and model web applications.
- **uv** `[tool]` — Rust-based Python package and project manager handling dependency resolution, virtual environments, lockfiles and interpreter installation.
- **Vertex AI Workbench** `[tool]` — Google Cloud managed JupyterLab instances integrated with BigQuery, storage and training services.

## Tools — LLM serving, runtimes, training, model hubs
*336 terms*

### Closed model providers

- **AI21 Jurassic** `[tool]` — AI21 Labs' first-generation proprietary autoregressive language model series.  ⚠ *Discontinued; replaced by the AI21 Jamba hybrid family.*
- **Amazon Nova** `[tool]` — Amazon's first-party foundation model family for text, image and video, exposed through Amazon Bedrock.
- **Anthropic Claude (Opus, Sonnet, Haiku)** `[tool]` — Anthropic's proprietary assistant and coding model family published in three capability and cost tiers.
- **ByteDance Doubao (Seed)** `[tool]` — ByteDance's proprietary Chinese-market model family served through the Volcano Engine platform.
- **Cohere Command** `[tool]` — Cohere's enterprise generative model line tuned for retrieval-augmented generation and tool use.
- **Google Gemini** `[tool]` — Google DeepMind's proprietary natively multimodal model family served via the Gemini API and Vertex AI.
- **Mistral Large** `[tool]` — Mistral AI's flagship closed-weight commercial model tier, sold via API and on-premises licences.
- **OpenAI GPT series** `[tool]` — OpenAI's proprietary general-purpose and reasoning language model line served through the OpenAI API and Azure.
- **OpenAI o-series** `[tool]` — OpenAI's separately branded reasoning models trained to spend inference compute on chain-of-thought before answering.  ⚠ *Retired as a distinct API line; reasoning capability folded into the GPT-5 generation.*
- **Perplexity Sonar** `[tool]` — Perplexity's search-grounded proprietary model family offered through its developer API.
- **Reka Core** `[tool]` — Reka AI's proprietary multimodal frontier model handling text, image, audio and video input.
- **Writer Palmyra** `[tool]` — Writer's enterprise LLM family with domain-specialised finance, medical and creative variants.
- **xAI Grok** `[tool]` — xAI's proprietary multimodal model family served through the xAI API and the X platform.

### Open-weight model families

- **01.AI Yi** `[tool]` — 01.AI's open-weight bilingual Chinese-English model family.
- **Ai2 Molmo** `[tool]` — Allen Institute's fully open multimodal models trained on human-annotated dense image descriptions.
- **Ai2 OLMo** `[tool]` — Allen Institute's fully open language models publishing weights, data, code and intermediate checkpoints.
- **Ai2 Tülu** `[tool]` — Allen Institute's open post-training recipe and model line demonstrating instruction tuning and preference optimisation.
- **AI21 Jamba** `[tool]` — AI21's open-weight hybrid architecture combining Mamba state-space layers with transformer attention and mixture-of-experts.
- **Alibaba Qwen** `[tool]` — Alibaba's open-weight multilingual model family covering dense and mixture-of-experts sizes under Apache licensing.
- **Alpaca** `[tool]` — Stanford's instruction-tuned LLaMA fine-tune trained on self-instruct generated data.  ⚠ *Archived research artefact; superseded by modern instruction-tuning datasets and recipes.*
- **Apertus** `[tool]` — Swiss fully open language model released with weights, data and training documentation.
- **Apple OpenELM** `[tool]` — Apple's open small language models with layer-wise parameter scaling and a published training pipeline.
- **Baidu ERNIE** `[tool]` — Baidu's model family whose recent multimodal mixture-of-experts generation was published as open weights.
- **BigScience BLOOM** `[tool]` — Multilingual 176-billion-parameter open model produced by the BigScience research collaboration.  ⚠ *Historical research artefact; not maintained or updated.*
- **Codestral** `[tool]` — Mistral's code-specialised model line for completion, fill-in-the-middle and multi-language program synthesis.
- **Cohere Aya** `[tool]` — Cohere For AI's open multilingual model and dataset initiative covering more than one hundred languages.
- **Cohere Command R / Command A** `[tool]` — Cohere's open-weight releases optimised for retrieval-augmented generation, tool use and enterprise deployment.
- **Databricks DBRX** `[tool]` — Databricks' open-weight fine-grained mixture-of-experts model released for enterprise self-hosting.
- **DeepSeek-Coder** `[tool]` — DeepSeek's code-pretrained open-weight model line for completion, infilling and repository-level tasks.  ⚠ *Standalone line discontinued; coding capability merged into the DeepSeek-V mainline models.*
- **DeepSeek-R series** `[tool]` — DeepSeek's open-weight reasoning models trained with large-scale reinforcement learning over verifiable tasks.
- **DeepSeek-V series** `[tool]` — DeepSeek's open-weight general mixture-of-experts models using multi-head latent attention for cheap long-context inference.
- **Devstral** `[tool]` — Mistral's open-weight agentic coding models tuned for software engineering benchmarks and tool-driven repair.
- **EleutherAI GPT-J** `[tool]` — Six-billion-parameter open-weight autoregressive model implemented in JAX, widely used before Llama.  ⚠ *Historical; superseded by Llama-era open models.*
- **EleutherAI GPT-NeoX-20B** `[tool]` — Early open-weight twenty-billion-parameter autoregressive model trained on the Pile corpus.  ⚠ *Historical; superseded by Pythia and later open families.*
- **EleutherAI Pythia** `[tool]` — Suite of open models trained on identical data at multiple scales for interpretability research.
- **EuroLLM** `[tool]` — EU-funded open model family covering all official European Union languages.
- **Google Gemma** `[tool]` — Google's open-weight model family derived from Gemini research, released in small and mid sizes.
- **Grok-1 open weights** `[tool]` — xAI's Apache-licensed release of the Grok-1 mixture-of-experts base model checkpoint.
- **Hugging Face SmolLM** `[tool]` — Hugging Face's fully open small language models with published data curation and training recipes.
- **Hugging Face SmolVLM** `[tool]` — Compact open vision-language models from Hugging Face sized for consumer hardware and browsers.
- **IBM Granite** `[tool]` — IBM's Apache-licensed model family spanning language, code, time-series, embedding and guardrail models.
- **InternLM** `[tool]` — Shanghai AI Laboratory's open-weight language and multimodal model family, paired with the InternVL vision line.
- **Jais** `[tool]` — Open-weight Arabic-English bilingual model family developed by Inception and partners.
- **Liquid AI LFM** `[tool]` — Liquid Foundation Models, an open-weight non-transformer architecture family targeting edge deployment.
- **Llama Guard** `[tool]` — Meta's open-weight safety classifier models that label prompts and responses against a hazard taxonomy.
- **Magistral** `[tool]` — Mistral's open-weight reasoning model line producing explicit multilingual chains of thought.
- **MedGemma** `[tool]` — Google's Gemma variant adapted for medical text and imaging comprehension tasks.
- **Meta Code Llama** `[tool]` — Code-specialised fine-tunes of Llama 2 for program synthesis, infilling and instruction following.  ⚠ *No longer updated; coding ability now carried by the general Llama 3 and 4 releases.*
- **Meta Llama** `[tool]` — Meta's open-weight transformer model family released under a community licence, spanning dense and mixture-of-experts variants.
- **Microsoft Phi** `[tool]` — Microsoft's small open-weight models trained on curated synthetic and textbook-quality data.
- **MiniMax** `[tool]` — MiniMax's open-weight model line using hybrid linear and softmax attention for very long context.
- **Ministral** `[tool]` — Mistral's small edge-oriented models sized for phones, laptops and constrained on-premises hardware.
- **Mistral open models** `[tool]` — Mistral AI's Apache-licensed dense model line, including the Mistral 7B and Mistral Small releases.
- **Mixtral** `[tool]` — Mistral's open-weight sparse mixture-of-experts models routing each token to a subset of experts.
- **Moonshot Kimi** `[tool]` — Moonshot AI's open-weight large mixture-of-experts models emphasising long context and agentic tool use.
- **MosaicML MPT** `[tool]` — MosaicML's early Apache-licensed decoder models with commercially permissive training data.  ⚠ *Discontinued after the Databricks acquisition; succeeded by Databricks DBRX.*
- **Nous Hermes** `[tool]` — Nous Research's open instruction and reasoning fine-tunes built on Llama, Mistral and Qwen bases.
- **NVIDIA Nemotron** `[tool]` — NVIDIA's open-weight model family with published training data and recipes, tuned for agentic and enterprise use.
- **OpenAI gpt-oss** `[tool]` — OpenAI's Apache-licensed open-weight mixture-of-experts reasoning models designed for local and third-party hosting.
- **PaliGemma** `[tool]` — Google's open vision-language Gemma variant pairing a SigLIP image encoder with a Gemma decoder.
- **Pixtral** `[tool]` — Mistral's vision-language model line accepting interleaved images and text at native resolution.
- **Qwen Coder** `[tool]` — Code-specialised branch of the Qwen family targeting repository-scale completion and agentic software tasks.
- **Qwen-VL** `[tool]` — Vision-language branch of the Qwen family accepting images, documents and video alongside text.
- **Sarvam AI models** `[tool]` — Indian open-weight language models tuned for Indic languages and sovereign deployment.
- **Snowflake Arctic** `[tool]` — Snowflake's open-weight dense-plus-mixture-of-experts model targeted at enterprise SQL and coding workloads.
- **Stability AI StableLM** `[tool]` — Stability AI's open-weight text model line released alongside its image generation work.  ⚠ *No longer developed; Stability's open releases now focus on image, audio and video models.*
- **StarCoder** `[tool]` — BigCode's open-weight code model family trained on permissively licensed repositories from The Stack.
- **Tencent Hunyuan** `[tool]` — Tencent's model family with open-weight language, video and 3D generation releases.
- **TII Falcon** `[tool]` — Technology Innovation Institute's open-weight model family, including dense, mixture-of-experts and state-space variants.
- **Vicuna** `[tool]` — Early Llama fine-tune trained on shared conversation logs, used as an open chat baseline.  ⚠ *Archived research artefact; superseded by vendor instruct models.*
- **Zephyr** `[tool]` — Hugging Face's distilled direct-preference-optimised chat fine-tunes of Mistral base models.  ⚠ *Historical demonstration line; superseded by SmolLM and vendor-native instruct models.*
- **Zhipu GLM** `[tool]` — Zhipu AI's open-weight bilingual model family, successor to the earlier ChatGLM releases.

### Serving engines

- **Aphrodite Engine** `[tool]` — Community fork of vLLM adding extra samplers, quantisation formats and multi-user API features.
- **DeepSpeed-MII** `[tool]` — Microsoft's low-latency inference layer built on DeepSpeed-Inference kernels and dynamic splitfuse batching.
- **ExLlamaV2** `[tool]` — Memory-efficient GPU inference library for quantised Llama-architecture models using the EXL2 format.
- **ExLlamaV3** `[tool]` — Successor inference library to ExLlamaV2 with a revised quantisation scheme and broader architecture support.
- **Friendli Engine** `[tool]` — FriendliAI's commercial inference engine using iteration batching to raise GPU throughput for generative models.
- **LightLLM** `[tool]` — Lightweight pure-Python LLM serving framework with token-level memory management and multi-process scheduling.
- **LMDeploy** `[tool]` — InternLM project's compression and serving toolkit with the TurboMind inference backend.
- **MLC LLM** `[tool]` — Compiler-driven deployment stack that compiles models to native code for GPUs, phones and browsers.
- **Modular MAX** `[tool]` — Modular's inference platform and graph compiler serving GenAI models across CPU and GPU vendors.
- **NVIDIA Dynamo-Triton** `[tool]` — Multi-framework model server executing TensorRT, PyTorch, ONNX, OpenVINO and Python backends behind one API.  ⚠ *Renamed from NVIDIA Triton Inference Server; LLM-specific work now lives in NVIDIA Dynamo.*
- **OpenLLM** `[tool]` — BentoML project for running and serving open-weight language models behind an OpenAI-compatible API.
- **OpenVINO Model Server** `[tool]` — Intel's inference server exposing OpenVINO-optimised models over gRPC and REST on CPUs, GPUs and NPUs.
- **Ray Serve** `[tool]` — Scalable model-serving library on Ray for composing multi-model inference graphs across a cluster.
- **Seldon Core** `[tool]` — Kubernetes model deployment platform with inference graphs, canaries and explainers, now source-available under BSL.
- **SGLang** `[tool]` — Serving engine with radix-tree prefix cache sharing and a structured generation language for constrained decoding.
- **TensorRT-LLM** `[tool]` — Compiler and runtime producing optimised inference engines for NVIDIA hardware, including low-precision formats.
- **Text Generation Inference (TGI)** `[tool]` — Hugging Face's Rust and Python LLM serving stack with continuous batching and tensor parallelism.  ⚠ *Entered maintenance mode in December 2025 and was archived in March 2026; migrate to vLLM or SGLang.*
- **vLLM** `[tool]` — Open-source LLM serving engine using paged KV-cache memory and continuous batching for high-throughput inference.

### Serving infrastructure

- **AIBrix** `[tool]` — ByteDance's open control plane for vLLM clusters, handling adapter management, autoscaling and distributed KV cache.
- **Envoy AI Gateway** `[tool]` — Open-source Envoy-based project routing generative AI traffic with provider credentials, policy and token rate limiting.
- **Gateway API Inference Extension** — Kubernetes specification extending Gateway API with model-aware routing and inference pool semantics.
- **KAITO** `[tool]` — Azure Kubernetes AI Toolchain Operator automating model deployment and fine-tuning on AKS clusters.
- **KubeRay** `[tool]` — Kubernetes operator that provisions and manages Ray clusters for training and serving workloads.
- **LiteLLM** `[tool]` — Open-source SDK and proxy exposing one OpenAI-compatible API across many providers, with keys, budgets and fallbacks.
- **llm-d** `[tool]` — Kubernetes-native distributed inference stack built on vLLM with disaggregated serving and cache-aware routing.
- **LMCache** `[tool]` — KV-cache engine that persists and reuses prefill results across requests and tiers of CPU, disk and remote storage.
- **Mooncake** `[tool]` — KV-cache-centric disaggregated serving platform separating prefill and decode pools over pooled DRAM and SSD.
- **NVIDIA KAI Scheduler** `[tool]` — Open-source Kubernetes scheduler from Run:ai providing GPU sharing, gang scheduling and fair-share quotas.
- **NVIDIA NIXL** `[tool]` — Transfer library moving KV-cache tensors between accelerators and storage over RDMA and NVMe for disaggregated inference.
- **OpenAI-compatible API** — De facto HTTP interface convention that serving engines expose so clients can swap providers unchanged.
- **SkyPilot** `[tool]` — Open-source framework running training and inference jobs across clouds with automatic cheapest-region provisioning.
- **vLLM Production Stack** `[tool]` — Reference Kubernetes deployment of vLLM adding routing, observability and shared KV caching.

### Inference platforms

- **Amazon Bedrock** `[tool]` — AWS managed service exposing first-party and partner foundation models through a common API.
- **Amazon SageMaker AI** `[tool]` — AWS end-to-end managed service for building, training, tuning, deploying and governing machine learning models.
- **Azure AI Foundry** `[tool]` — Microsoft's platform for building, evaluating, deploying and governing generative AI applications and agents.
- **Baseten** `[tool]` — Model deployment platform running custom models on managed GPU infrastructure with autoscaling.
- **Cerebras Inference** `[tool]` — Inference service running open models on Cerebras wafer-scale engines for high token throughput.
- **Cloudflare Workers AI** `[tool]` — Serverless inference running open models on Cloudflare's edge GPU network.
- **CoreWeave** `[tool]` — GPU cloud provider offering bare-metal and Kubernetes-based accelerated compute for AI workloads.
- **Databricks Mosaic AI Model Serving** `[tool]` — Databricks service hosting foundation and custom models with governance through Unity Catalog.
- **DeepInfra** `[tool]` — Low-cost hosted inference API for open-weight text, embedding and image models.
- **Fal** `[tool]` — Hosted inference platform specialising in image, video, audio and 3D generative models.
- **Fireworks AI** `[tool]` — Hosted inference platform for open models offering tuned serving, adapters and structured output.
- **Google Vertex AI** `[tool]` — Google Cloud's unified platform for training, tuning, deploying, evaluating and monitoring models and agents.
- **GroqCloud** `[tool]` — Inference service running open models on Groq's deterministic language processing units for low latency.
- **Hugging Face Inference Endpoints** `[tool]` — Managed service deploying Hub models to dedicated autoscaling infrastructure behind a private endpoint.
- **Hugging Face Inference Providers** `[tool]` — Hub feature routing serverless inference calls to partner providers under one token and API.
- **Hyperbolic** `[tool]` — Decentralised GPU marketplace with a hosted inference API for open models.
- **IBM watsonx.ai** `[tool]` — IBM's enterprise studio for tuning and serving Granite and third-party foundation models.
- **Lambda** `[tool]` — GPU cloud and inference API provider supplying on-demand clusters for training and serving.
- **Modal** `[tool]` — Serverless cloud platform running Python functions, training jobs and model endpoints on managed GPUs.
- **Nebius AI Studio** `[tool]` — Managed inference service for open-weight models running on Nebius GPU infrastructure.
- **Novita AI** `[tool]` — GPU cloud and hosted inference API for open-weight language and media models.
- **NVIDIA NIM** `[tool]` — Containerised inference microservices packaging optimised models with an OpenAI-compatible endpoint.
- **OpenRouter** `[tool]` — Hosted unified API aggregating hundreds of models from many providers with routing, fallbacks and shared billing.
- **Oracle OCI Generative AI** `[tool]` — Oracle Cloud service offering hosted and dedicated foundation model inference and fine-tuning.
- **Replicate** `[tool]` — Hosted platform running open-source and custom models as API endpoints billed by compute time.
- **RunPod** `[tool]` — GPU cloud offering on-demand pods and serverless endpoints for model training and inference.
- **SambaNova Cloud** `[tool]` — Inference service running open models on SambaNova reconfigurable dataflow accelerators.
- **Together AI** `[tool]` — Hosted inference and fine-tuning platform serving a broad catalogue of open-weight models.
- **Vercel AI Gateway** `[tool]` — Managed routing layer giving applications one endpoint, key and budget across multiple model providers.

### Local runtimes

- **Foundry Local** `[tool]` — Microsoft runtime running ONNX-optimised models locally on Windows and macOS hardware.
- **GPT4All** `[tool]` — Desktop application and Python bindings for running quantised local models with document chat.
- **Jan** `[tool]` — Open-source desktop assistant running local models offline with an OpenAI-compatible local server.
- **KoboldCpp** `[tool]` — Single-binary llama.cpp distribution with a story and roleplay-oriented web interface.
- **llama.cpp** `[tool]` — C++ inference engine running quantized models efficiently on CPUs and consumer accelerators.
- **llamafile** `[tool]` — Mozilla project packaging model weights and llama.cpp into one cross-platform executable file.
- **LM Studio** `[tool]` — Desktop application for discovering, running and serving local models with a graphical interface.
- **LocalAI** `[tool]` — Self-hosted OpenAI-compatible API server supporting text, image, audio and embedding backends.
- **mistral.rs** `[tool]` — Rust LLM inference engine supporting quantisation, adapters and multimodal models.
- **Nexa SDK** `[tool]` — On-device inference SDK running language, vision and audio models across CPU, GPU and NPU.
- **Ollama** `[tool]` — Local runtime packaging quantised models with a pull-and-run interface and an HTTP API.
- **Open WebUI** `[tool]` — Self-hosted web interface for local and remote models, including document retrieval and tools.
- **text-generation-webui** `[tool]` — Gradio web interface for running local models across multiple loader backends.
- **Transformers.js** `[tool]` — JavaScript library running Hugging Face models in browsers and Node via ONNX Runtime Web.
- **WebLLM** `[tool]` — Browser inference engine running LLMs entirely client-side through WebGPU.

### On-device runtimes

- **Apple Foundation Models framework** `[tool]` — Apple API giving apps access to the on-device system language model with guided generation.
- **Arm KleidiAI** `[tool]` — Arm's micro-kernel library accelerating matrix operations for AI workloads on Arm CPUs.
- **Core ML** `[tool]` — Apple's on-device model runtime integrating with CPU, GPU and Neural Engine.
- **DirectML** `[tool]` — Microsoft's hardware-accelerated DirectX machine learning API for Windows GPUs and NPUs.
- **LiteRT-LM** `[tool]` — Google's on-device LLM execution layer built over LiteRT, powering the MediaPipe LLM Inference API.
- **MediaPipe LLM Inference API** `[tool]` — Google API embedding small language models in Android, iOS and web applications.
- **MLX-LM** `[tool]` — MLX package for running, quantising and LoRA fine-tuning language models on Apple Silicon.
- **ONNX Runtime GenAI** `[tool]` — ONNX Runtime extension providing generation loops, KV caching and sampling for language models.
- **Qualcomm AI Engine Direct (QNN)** `[tool]` — Low-level Qualcomm SDK targeting the Hexagon NPU and other Snapdragon accelerators directly.
- **Qualcomm AI Hub** `[tool]` — Qualcomm service compiling and profiling models for Snapdragon CPU, GPU and NPU targets.
- **Windows ML** `[tool]` — Windows inference stack layering ONNX Runtime over vendor execution providers for CPU, GPU and NPU.

### Quantisation toolchains

- **AMD Quark** `[tool]` — AMD's quantisation toolkit producing compressed checkpoints for ROCm and Ryzen AI deployment.
- **AutoAWQ** `[tool]` — Reference community implementation packaging AWQ quantisation for transformer checkpoints.  ⚠ *Archived; AWQ support is now maintained inside vLLM and llm-compressor.*
- **AutoGPTQ** `[tool]` — Original community library applying GPTQ quantisation to Hugging Face transformer models.  ⚠ *Deprecated and unmaintained; superseded by GPTQModel and llm-compressor.*
- **AutoRound** `[tool]` — Intel's sign-gradient-descent weight rounding method and library for low-bit post-training quantisation.
- **bitsandbytes** `[tool]` — CUDA library providing eight- and four-bit quantised linear layers and optimisers, underpinning QLoRA training.
- **EETQ** `[tool]` — Easy and efficient int8 weight-only quantisation library for transformer inference.
- **GPTQModel** `[tool]` — Maintained successor library for GPTQ-style quantisation with newer kernels and model coverage.
- **HQQ** `[tool]` — Half-quadratic quantisation that is calibration-free and fast, optimising a robust weight-reconstruction objective.
- **Intel Neural Compressor** `[tool]` — Intel library automating quantisation, pruning and distillation across PyTorch, TensorFlow and ONNX.
- **llm-compressor** `[tool]` — Library producing quantised and sparse checkpoints in the compressed-tensors format for vLLM deployment.
- **Marlin kernels** `[tool]` — Mixed-precision GEMM kernels delivering near-ideal speedups for four-bit weight-only quantised inference.
- **Optimum** `[tool]` — Hugging Face toolkit adapting Transformers models to hardware-specific runtimes and quantisation backends.
- **Optimum-Quanto** `[tool]` — Hugging Face PyTorch quantisation backend supporting varied weight and activation precisions.
- **TensorRT Model Optimizer** `[tool]` — NVIDIA library applying quantisation, sparsity, pruning and distillation before TensorRT or vLLM deployment.
- **torchao** `[tool]` — PyTorch-native library for quantisation, sparsity and low-precision training and inference.

### Weight and model formats

- **compressed-tensors** — Checkpoint format describing quantised and sparse weights with their compression configuration.
- **Core ML package (.mlpackage)** — Apple's on-device model bundle containing the compiled program and its weights.
- **ExecuTorch PTE** — Portable executable file format holding an exported PyTorch program for on-device runtimes.
- **GGML** — Earlier tensor file format used by llama.cpp before metadata extensibility was added.  ⚠ *Superseded by GGUF; the ggml name now refers only to the underlying tensor library.*
- **Ollama Modelfile** — Declarative file defining a model's base weights, parameters, template and system prompt.
- **OpenVINO IR** — Intel's intermediate representation pairing an XML graph description with a binary weights file.
- **PyTorch checkpoint (.pt/.bin)** — Pickle-based PyTorch state-dictionary serialisation that can execute arbitrary code on load.
- **TensorRT engine plan** — Hardware- and version-specific compiled artefact produced by TensorRT for a fixed deployment configuration.

### Fine-tuning frameworks

- **Axolotl** `[tool]` — YAML-configured fine-tuning wrapper composing Transformers, PEFT, TRL, Accelerate and DeepSpeed parallelism.
- **H2O LLM Studio** `[tool]` — H2O.ai's graphical no-code tool for fine-tuning and evaluating open language models.
- **Hugging Face Accelerate** `[tool]` — Library abstracting device placement, mixed precision and distributed launch for PyTorch training loops.
- **Hugging Face PEFT** `[tool]` — Library implementing parameter-efficient adaptation methods such as LoRA, DoRA and prompt tuning.
- **Hugging Face Transformers** `[tool]` — Reference Python library defining model architectures, loading checkpoints and providing training and generation APIs.
- **LitGPT** `[tool]` — Lightning AI's hackable from-scratch implementations and recipes for pretraining and fine-tuning open models.
- **LLaMA-Factory** `[tool]` — Unified toolkit exposing many fine-tuning and alignment methods through configuration and a web interface.
- **LoRAX** `[tool]` — Multi-adapter inference server loading and swapping many LoRA adapters against one base model.
- **MS-SWIFT** `[tool]` — ModelScope's unified framework for fine-tuning, aligning and deploying language and multimodal models.
- **NVIDIA NeMo Framework** `[tool]` — NVIDIA's end-to-end toolkit for pretraining, customising and exporting speech and language models.
- **Predibase** `[tool]` — Commercial platform for fine-tuning and serving many LoRA adapters over shared base models.
- **Tinker** `[tool]` — Managed fine-tuning API exposing low-level training primitives while the provider runs the distributed cluster.
- **torchtune** `[tool]` — PyTorch-native library of readable fine-tuning recipes for language models.
- **TRL** `[tool]` — Hugging Face library implementing supervised fine-tuning, reward modelling and preference or reinforcement post-training.
- **Unsloth** `[tool]` — Fine-tuning library replacing model layers with hand-written Triton kernels for lower memory and faster steps.

### Distributed training

- **Colossal-AI** `[tool]` — Training system offering combined data, tensor, pipeline and sequence parallelism with heterogeneous memory management.
- **Fairseq** `[tool]` — Meta's sequence modelling toolkit used for early translation and language model training.  ⚠ *No longer actively developed; superseded by fairseq2 and Hugging Face Transformers.*
- **GPT-NeoX** `[tool]` — EleutherAI's Megatron- and DeepSpeed-based codebase for training large autoregressive models on GPU clusters.
- **InternEvo** `[tool]` — Shanghai AI Laboratory's lightweight training framework used for the InternLM model family.
- **Kubeflow Training Operator** `[tool]` — Kubernetes controller scheduling distributed PyTorch, JAX and MPI training jobs.
- **Levanter** `[tool]` — JAX training framework emphasising bitwise reproducibility and named tensor axes.
- **LLM Foundry** `[tool]` — Databricks codebase of recipes for pretraining, fine-tuning and evaluating large language models.
- **MaxText** `[tool]` — Google's high-performance JAX LLM training codebase for TPU and GPU pods.
- **Megatron-Core** `[tool]` — NVIDIA library of composable tensor, pipeline, sequence and expert parallel transformer building blocks.
- **Mesh TensorFlow** `[tool]` — Early TensorFlow library expressing model parallelism over named mesh dimensions.  ⚠ *Deprecated; superseded by JAX sharding, MaxText and PyTorch parallelism APIs.*
- **Metaseq** `[tool]` — Meta codebase released to reproduce OPT-scale language model training.  ⚠ *Archived; superseded by Llama-era internal and open training stacks.*
- **Mosaic Composer** `[tool]` — Databricks training library adding speedup methods and callbacks to PyTorch training loops.
- **Nanotron** `[tool]` — Hugging Face's minimal 3D-parallel pretraining library for large language models.
- **Oumi** `[tool]` — Open end-to-end platform covering data curation, pretraining, fine-tuning and evaluation of foundation models.
- **Paxml** `[tool]` — Google's JAX framework for configuring and running large-scale model training experiments.
- **Prime Intellect prime** `[tool]` — Framework for fault-tolerant decentralised training of large models over unreliable, globally distributed compute.
- **PyTorch FSDP2** `[tool]` — PyTorch's per-parameter fully sharded data parallel implementation for memory-efficient large-model training.
- **Ray Train** `[tool]` — Ray library orchestrating distributed training jobs with fault tolerance and elastic scaling.
- **T5X** `[tool]` — JAX rewrite of the T5 training codebase for encoder-decoder models on TPUs.  ⚠ *No longer actively developed; superseded by MaxText and Paxml.*
- **TorchTitan** `[tool]` — PyTorch-native reference codebase demonstrating composable multi-dimensional parallelism for large model pretraining.
- **veScale** `[tool]` — ByteDance's PyTorch-native framework for automatic parallelism in large model training.

### RL post-training

- **AReaL** `[tool]` — Fully asynchronous reinforcement learning system decoupling generation from policy updates for reasoning models.
- **Atropos** `[tool]` — Nous Research framework hosting reinforcement learning environments for language model training.
- **DeepSpeed-Chat** `[tool]` — DeepSpeed pipeline implementing the three-stage InstructGPT-style RLHF training recipe.  ⚠ *Largely unmaintained; superseded by TRL, OpenRLHF and verl.*
- **NeMo-Aligner** `[tool]` — NVIDIA's earlier alignment toolkit implementing RLHF, DPO and SteerLM on the NeMo stack.  ⚠ *Superseded by the re-architected NVIDIA NeMo-RL library.*
- **NVIDIA NeMo-RL** `[tool]` — NVIDIA's scalable post-training library for reinforcement learning and preference optimisation of large models.
- **OpenEnv** `[tool]` — Open specification and hub of containerised reinforcement learning environments for agent training.
- **OpenPipe ART** `[tool]` — Agent reinforcement trainer library applying GRPO to multi-step agent trajectories.
- **OpenRLHF** `[tool]` — Open framework implementing RLHF-style pipelines including PPO and group-relative methods at scale.
- **PRIME-RL** `[tool]` — Asynchronous decentralised reinforcement learning framework for language model post-training.
- **ROLL** `[tool]` — Alibaba's reinforcement learning optimisation library for large-scale language model post-training.
- **SkyRL** `[tool]` — Berkeley Sky Computing Lab's modular RL library for training long-horizon agentic language models.
- **slime** `[tool]` — RL scaling framework connecting Megatron training with SGLang rollout generation.
- **TorchForge** `[tool]` — PyTorch-native reinforcement learning and post-training library built on Monarch distributed actors.
- **trlX** `[tool]` — CarperAI's distributed RLHF framework supporting PPO and ILQL fine-tuning.  ⚠ *Archived and unmaintained; superseded by TRL, OpenRLHF and verl.*
- **verifiers** `[tool]` — Library for building verifiable-reward environments and rubrics used in RL fine-tuning.
- **verl** `[tool]` — ByteDance's HybridFlow reinforcement learning post-training framework separating controller and worker dataflow.

### Model hubs and registries

- **Amazon SageMaker JumpStart** `[tool]` — AWS catalogue of pretrained models and solution templates deployable into SageMaker endpoints.
- **Azure AI Foundry model catalog** `[tool]` — Microsoft's curated catalogue of first-party, partner and open models deployable on Azure.
- **Civitai** `[tool]` — Community hub distributing open image generation checkpoints and LoRA adapters.
- **Databricks Unity Catalog models** `[tool]` — Governed registry storing model versions alongside data assets with unified permissions.
- **Docker Model Runner** `[tool]` — Docker feature pulling models packaged as OCI artefacts and serving them locally.
- **Hugging Face Hub** `[tool]` — Central repository hosting model, dataset and demo repositories with versioning, cards and access control.
- **Kaggle Models** `[tool]` — Kaggle's catalogue of pretrained models, including the former TensorFlow Hub collection.
- **KitOps** `[tool]` — Open-source CNCF project packaging models, datasets and code as signed OCI artifacts called ModelKits.
- **MLflow Model Registry** `[tool]` — MLflow component storing model versions with stage transitions, aliases, lineage and approval metadata.
- **ModelScope** `[tool]` — Alibaba-operated model and dataset hub widely used as a China-accessible alternative to Hugging Face.
- **NVIDIA NGC catalog** `[tool]` — NVIDIA's catalogue of GPU-optimised containers, pretrained models and Helm charts.
- **Ollama model library** `[tool]` — Registry of pre-packaged quantised models pullable by name into the Ollama runtime.
- **ONNX Model Zoo** `[tool]` — Community collection of pretrained models published in the ONNX interchange format.
- **PyTorch Hub** `[tool]` — Lightweight mechanism for loading published PyTorch models directly from GitHub repositories.  ⚠ *Effectively superseded by the Hugging Face Hub for model distribution.*
- **TensorFlow Hub** `[tool]` — Google's repository of reusable TensorFlow model modules and embeddings.  ⚠ *Deprecated; its models were migrated to Kaggle Models.*
- **Vertex AI Model Garden** `[tool]` — Google Cloud's catalogue of Google, partner and open models with one-click deployment.
- **Weights & Biases Registry** `[tool]` — W&B service versioning and promoting models and datasets across teams with lineage links.

### Packaging and interchange

- **ModelPack** — CNCF specification for packaging model weights, config and metadata as OCI container artefacts.
- **OCI artifact** — Registry-native container artefact type used to distribute non-image payloads such as model weights.
- **SBOM for models** — Bill of materials enumerating a model's weights, datasets, dependencies and licences for supply-chain audit.
- **StableHLO** — Portable operation set and versioned interchange dialect between ML frameworks and compilers.

### Embedding models

- **Amazon Titan Embeddings** `[tool]` — AWS first-party text and multimodal embedding models offered through Amazon Bedrock.
- **BGE** `[tool]` — BAAI's general embedding family of open retrieval encoders spanning several sizes and languages.
- **BGE-M3** `[tool]` — A multilingual encoder emitting dense, learned-sparse and multi-vector representations from one model.
- **CLIP** `[tool]` — Contrastive image-text model producing a shared embedding space for images and captions.
- **Cohere Embed** `[tool]` — Cohere's multilingual embedding family supporting text and document image inputs with compressed output types.
- **ColBERT** `[tool]` — A late-interaction retriever storing one contextual vector per document token and scoring by summed maximum similarities.
- **ColPali** `[tool]` — A late-interaction retriever embedding rendered document page images directly, bypassing text extraction.
- **E5** `[tool]` — A family of contrastively pretrained text embedding models using explicit query and passage prefixes.
- **Google Gemini Embedding** `[tool]` — Google's embedding model served through the Gemini API and Vertex AI for retrieval and classification.
- **GTE** `[tool]` — Alibaba's general text embedding family trained by multi-stage contrastive learning over diverse text pairs.
- **IBM Granite Embedding** `[tool]` — IBM's Apache-licensed multilingual embedding models within the Granite family.
- **Jina Embeddings** `[tool]` — A commercial open-weight embedding family with long context, multilingual coverage and late-chunking support.
- **Mistral Embed** `[tool]` — Mistral AI's hosted text embedding model for retrieval and semantic similarity.
- **Model2Vec** `[tool]` — Library distilling sentence transformers into small static embedding models for fast retrieval.
- **Nomic Embed** `[tool]` — An open long-context text embedding model released with reproducible training data and code.
- **NV-Embed** `[tool]` — NVIDIA's decoder-based open embedding models tuned for retrieval benchmarks.
- **OpenAI text-embedding-3** `[tool]` — OpenAI's embedding model pair supporting dimensionality reduction through Matryoshka-style truncation.
- **OpenCLIP** `[tool]` — Open reproduction and training codebase for CLIP-style models across many datasets and scales.
- **Qwen3-Embedding** `[tool]` — Alibaba's open embedding family built on Qwen3 backbones, strong on multilingual retrieval benchmarks.
- **Sentence-Transformers** `[tool]` — Python framework for training and running sentence, image and cross-encoder embedding models.
- **SigLIP** `[tool]` — Google's image-text encoder using a sigmoid pairwise loss instead of softmax contrastive training.
- **Snowflake Arctic Embed** `[tool]` — Snowflake's open embedding family optimised for enterprise retrieval at small sizes.
- **SPLADE** `[tool]` — A learned sparse retriever projecting text onto the vocabulary with regularisation enforcing sparse expanded term weights.
- **Stella** `[tool]` — Open distilled embedding model family competitive on retrieval benchmarks at small parameter counts.
- **Universal Sentence Encoder** `[tool]` — Google's early general-purpose sentence embedding models distributed through TensorFlow Hub.  ⚠ *Legacy; superseded by Sentence-Transformers and modern embedding APIs.*
- **Voyage AI embeddings** `[tool]` — Voyage's retrieval embedding family including general, code, finance and legal domain variants.

### Reranker models

- **BGE Reranker** `[tool]` — BAAI's open cross-encoder and multi-vector reranking models, including multilingual variants.
- **Cohere Rerank** `[tool]` — Hosted cross-encoder reranking service scoring query-document relevance after first-stage retrieval.
- **FlashRank** `[tool]` — Lightweight Python reranking library running small cross-encoder models on CPU.
- **Jina Reranker** `[tool]` — Jina AI cross-encoder models and API for reordering retrieved passages, including multilingual variants.
- **MiniLM cross-encoders** `[tool]` — Compact MS MARCO-trained cross-encoders widely used as baseline rerankers.
- **monoT5** `[tool]` — A sequence-to-sequence reranker scoring relevance by the probability of generating a target word.
- **mxbai-rerank** `[tool]` — Mixedbread's open cross-encoder reranking model family.
- **NVIDIA NeMo Retriever** `[tool]` — Collection of NVIDIA microservices for extraction, embedding and reranking in enterprise retrieval pipelines.
- **Qwen3-Reranker** `[tool]` — Alibaba's open instruction-aware reranking models paired with the Qwen3 embedding line.
- **RankZephyr** `[tool]` — Open listwise reranker that reorders candidate passages in a single generative pass.
- **Voyage rerank** `[tool]` — Voyage AI's hosted reranking models for reordering candidate documents by relevance.

### Tokenizers

- **Hugging Face Tokenizers** `[tool]` — A Rust-backed library implementing BPE, WordPiece and Unigram with normalisation, pre-tokenisation and alignment pipelines.
- **Kitoken** `[tool]` — Rust tokenizer library compatible with SentencePiece, Hugging Face, tiktoken and Tekken vocabularies.
- **mistral-common** `[tool]` — Mistral's reference library for tokenisation, prompt templating and request validation.
- **OpenVINO Tokenizers** `[tool]` — Intel extension compiling tokenisation and detokenisation into OpenVINO graphs for end-to-end inference.
- **SentencePiece** `[tool]` — A library training BPE or Unigram directly on raw text without language-specific pre-tokenisation, treating whitespace as a symbol.
- **subword-nmt** `[tool]` — Original reference implementation of byte-pair encoding for neural machine translation.  ⚠ *Legacy research tool; superseded by SentencePiece and Hugging Face Tokenizers.*
- **Tekken** `[tool]` — Mistral's tiktoken-based tokenizer used across its recent model releases.
- **tiktoken** `[tool]` — OpenAI's fast Rust-backed byte-pair encoding library exposing the vocabularies used by its models.
- **YouTokenToMe** `[tool]` — Fast C++ BPE tokenizer library with Python bindings.  ⚠ *Unmaintained; superseded by Hugging Face Tokenizers and tiktoken.*

### Hardware vendor stacks

- **AMD ROCm** `[tool]` — AMD's open GPU compute platform providing the driver, runtime and libraries for Instinct and Radeon accelerators.
- **Apple Metal Performance Shaders** `[tool]` — Apple's GPU compute framework providing the PyTorch MPS backend on Apple Silicon.
- **AWS Neuron SDK** `[tool]` — Amazon's compiler and runtime targeting Trainium and Inferentia accelerators from PyTorch and JAX.
- **Cerebras SDK** `[tool]` — Cerebras' toolchain for compiling and running workloads on wafer-scale engine hardware.
- **Composable Kernel** `[tool]` — AMD library of templated GPU kernels for GEMM, attention and fused operations on ROCm.
- **cuDNN** `[tool]` — NVIDIA's GPU-accelerated primitive library for deep neural network operations.
- **FuriosaAI SDK** `[tool]` — Software stack compiling and serving models on Furiosa RNGD inference accelerators.
- **Graphcore Poplar** `[tool]` — Graphcore's graph compiler and runtime for IPU accelerators.
- **HIP** `[tool]` — AMD's C++ runtime and kernel language allowing CUDA-style code to be portable across GPU vendors.
- **Huawei CANN** `[tool]` — Huawei's compute architecture and operator library for Ascend AI accelerators.
- **Intel Extension for PyTorch** `[tool]` — Intel plugin adding optimised operators and precision support to PyTorch on Intel hardware.
- **Intel Gaudi software suite** `[tool]` — Software stack, formerly SynapseAI, compiling and running models on Gaudi training and inference accelerators.  ⚠ *Renamed from Habana SynapseAI after the Intel acquisition.*
- **Intel oneAPI** `[tool]` — Intel's cross-architecture programming stack including oneDNN and oneCCL for AI workloads.
- **Intel OpenVINO** `[tool]` — Intel toolkit optimising and deploying models across Intel CPUs, integrated GPUs and NPUs.
- **NCCL** `[tool]` — NVIDIA library implementing topology-aware collective communication primitives for multi-GPU and multi-node jobs.
- **NVIDIA CUDA** `[tool]` — NVIDIA's parallel computing platform and programming model underpinning most GPU deep learning software.
- **NVIDIA TensorRT** `[tool]` — NVIDIA's inference optimiser and runtime compiling networks into hardware-specific engine plans.
- **PyTorch/XLA** `[tool]` — Bridge compiling PyTorch programs through XLA to run on TPUs and other accelerators.
- **RCCL** `[tool]` — AMD's ROCm collective communication library, the counterpart to NCCL.
- **SambaFlow** `[tool]` — SambaNova's compiler and runtime mapping dataflow graphs onto reconfigurable dataflow units.
- **Tenstorrent TT-Metalium** `[tool]` — Tenstorrent's low-level programming stack for its Tensix-core AI accelerators.
- **XLA** `[tool]` — Google's domain-specific compiler optimising and lowering tensor graphs for CPUs, GPUs and TPUs.

### Kernels and compilers

- **CUTLASS** `[tool]` — NVIDIA's template library of high-performance matrix multiplication and convolution kernel primitives.
- **DeepEP** `[tool]` — DeepSeek's expert-parallel communication library for mixture-of-experts training and inference.
- **DeepGEMM** `[tool]` — DeepSeek's FP8 general matrix multiplication kernel library for Hopper-class GPUs.
- **FlashAttention** `[tool]` — IO-aware exact attention kernel that tiles computation in on-chip memory and avoids materialising the attention matrix.  ⚠ *Version 1 is superseded by FlashAttention-2 and the Hopper-optimised FlashAttention-3.*
- **FlashInfer** `[tool]` — Kernel library for LLM serving providing paged and batched attention primitives used by inference engines.
- **Helion** `[tool]` — Higher-level PyTorch kernel authoring language that compiles down to Triton.
- **Liger Kernel** `[tool]` — Collection of fused Triton kernels reducing memory and increasing throughput in LLM training.
- **Mojo** `[tool]` — Modular's systems programming language for writing portable high-performance AI kernels.
- **ThunderKittens** `[tool]` — Embedded DSL of tile primitives for writing fast attention and GEMM kernels on modern GPUs.
- **torch.compile** `[tool]` — PyTorch's graph capture and compilation entry point, lowering models through TorchInductor to fused kernels.
- **TorchInductor** `[tool]` — PyTorch's default compiler backend generating Triton and C++ kernels from captured graphs.
- **Triton (OpenAI)** `[tool]` — Python-embedded language and compiler for writing tiled GPU kernels without direct CUDA programming.
- **xFormers** `[tool]` — Meta's library of memory-efficient transformer building blocks and attention kernels.  ⚠ *Largely superseded by PyTorch scaled dot-product attention and FlashAttention upstreaming.*

## Tools — vector databases, retrieval, agents
*347 terms*

### Vector databases

- **Amazon S3 Vectors** `[tool]` — AWS bucket type exposing native vector indexes and similarity queries directly over object storage.
- **ApertureDB** `[tool]` — Database unifying vector search, a metadata knowledge graph and multimodal media management.
- **Chroma** `[tool]` — Open-source embedding database aimed at local prototyping and small to medium retrieval workloads.
- **Cloudflare Vectorize** `[tool]` — Vector database running on Cloudflare's edge network, integrated with Workers and Workers AI.
- **Databricks Mosaic AI Vector Search** `[tool]` — Managed vector index on the Databricks lakehouse, synchronized from Delta tables.
- **Deep Lake** `[tool]` — Activeloop's open-source database format storing versioned multimodal datasets with streaming access for training.
- **Epsilla** `[tool]` — Open-source vector database written in C++, focused on low query latency and small footprint.
- **Infinity** `[tool]` — Open-source AI-native database from the RAGFlow team combining dense, sparse, tensor and full-text indexes.
- **KDB.AI** `[tool]` — Vector database from KX supporting temporal, multimodal and hybrid similarity search.
- **LanceDB** `[tool]` — Embedded, serverless vector database built on the Lance columnar file format for multimodal data.
- **Marqo** `[tool]` — Open-source search engine that generates embeddings internally, removing the separate embedding pipeline.  ⚠ *Company repositioned toward product discovery; Marqo Cloud no longer receiving updates as of 2026.*
- **Milvus** `[tool]` — Open-source distributed vector database for billion-scale similarity search, with multiple pluggable index types and tiered storage.
- **MyScaleDB** `[tool]` — ClickHouse-derived SQL database adding vector indexes so structured filters and vector search run in one query.
- **Pinecone** `[tool]` — Managed serverless vector database with built-in embedding, reranking, hybrid full-text search and namespace isolation.
- **Qdrant** `[tool]` — Open-source vector database written in Rust, with rich payload filtering, quantization and on-disk indexes.
- **turbopuffer** `[tool]` — Serverless vector and full-text search engine storing indexes on object storage with SSD and memory caching.
- **Upstash Vector** `[tool]` — Serverless, per-request billed vector database with optional built-in embedding models.
- **Vald** `[tool]` — Open-source distributed vector search engine running on Kubernetes, using NGT as its index.
- **Vearch** `[tool]` — Open-source distributed system for storing and searching embedding vectors at scale.
- **Vertex AI Vector Search** `[tool]` — Google Cloud's managed approximate nearest neighbour service, built on ScaNN.  ⚠ *Renamed from Vertex AI Matching Engine.*
- **Vespa** `[tool]` — Open-source serving engine combining vector, tensor, structured and text search with learned ranking at scale.
- **Weaviate** `[tool]` — Open-source vector database with hybrid dense-sparse search, GraphQL and REST APIs, and pluggable vectorizer modules.
- **Zilliz Cloud** `[tool]` — Fully managed cloud service running Milvus, operated by the team that created Milvus.

### Vector search libraries

- **Annoy** `[tool]` — Spotify's random projection forest library for memory-mapped approximate nearest neighbour lookup.  ⚠ *maintenance mode; graph-based libraries such as HNSW implementations are the usual replacement*
- **DiskANN** `[tool]` — Microsoft library implementing graph indexes that serve billion-scale vector search largely from SSD.
- **FAISS** `[tool]` — Meta's library of CPU and GPU vector index implementations covering flat, IVF, PQ and graph structures.
- **hnswlib** `[tool]` — Header-only C++ library implementing the HNSW graph index with Python bindings.
- **Knowhere** `[tool]` — Vector execution engine underlying Milvus, wrapping FAISS, HNSW and GPU index implementations.
- **NMSLIB** `[tool]` — Non-Metric Space Library providing generic similarity search across many index and distance types.  ⚠ *Maintenance mode; hnswlib carries its HNSW implementation forward.*
- **NVIDIA cuVS** `[tool]` — GPU-accelerated library of vector search and clustering algorithms for building ANN indexes.  ⚠ *Absorbs and replaces the ANN components formerly in RAPIDS RAFT.*
- **PyNNDescent** `[tool]` — Python implementation of the NN-Descent algorithm for approximate nearest neighbour graph construction.
- **ScaNN** `[tool]` — Google library implementing anisotropic quantization for high-recall approximate nearest neighbour search.
- **SPTAG** `[tool]` — Microsoft library combining space partitioning trees with neighbourhood graphs for vector search.
- **USearch** `[tool]` — Compact single-header vector search engine supporting many quantization types and language bindings.
- **Voyager** `[tool]` — Spotify's HNSW-based nearest neighbour library with Python and Java bindings.

### Vector in existing databases

- **Aerospike Vector Search** `[tool]` — Aerospike service adding HNSW vector indexing on top of its key-value store.
- **AlloyDB ScaNN index** `[tool]` — Google AlloyDB for PostgreSQL index type applying ScaNN quantization to vector columns.
- **Azure Cosmos DB vector search** `[tool]` — Native vector indexing in Cosmos DB, including a DiskANN-based index for NoSQL containers.
- **BigQuery vector search** `[tool]` — BigQuery SQL functions and indexes performing nearest neighbour search over embedding columns.
- **Cassandra Storage Attached Indexing (SAI)** `[tool]` — Apache Cassandra indexing subsystem that added native vector columns and similarity search.
- **ClickHouse vector similarity index** `[tool]` — ClickHouse index type accelerating distance-ordered queries over array columns of embeddings.
- **Couchbase Vector Search** `[tool]` — Couchbase feature adding vector indexes to its search service for hybrid document retrieval.
- **CrateDB** `[tool]` — Distributed SQL database with vector columns and full-text search over semi-structured data.
- **DataStax Astra DB** `[tool]` — Managed Cassandra service exposing vector search and retrieval APIs for AI applications.
- **DuckDB VSS extension** `[tool]` — DuckDB extension adding HNSW indexes over array columns for in-process vector search.
- **Elasticsearch dense_vector** `[tool]` — Elasticsearch field type and kNN query providing HNSW vector search alongside BM25.
- **Lantern** `[tool]` — PostgreSQL extension providing vector indexes and in-database embedding generation.
- **MariaDB Vector** `[tool]` — MariaDB Server feature adding vector columns and similarity indexes to relational tables.
- **MongoDB Atlas Vector Search** `[tool]` — Atlas index type performing approximate nearest neighbour search over embedding fields in documents.
- **MySQL HeatWave GenAI** `[tool]` — Oracle MySQL feature providing an in-database vector store and embedding generation.
- **Neo4j vector index** `[tool]` — Neo4j index type storing embeddings on nodes so graph traversal and similarity search combine.
- **OpenSearch k-NN plugin** `[tool]` — OpenSearch plugin providing vector fields and approximate nearest neighbour search with several engines.
- **Oracle AI Vector Search** `[tool]` — Oracle Database feature adding a VECTOR data type and similarity search inside SQL.
- **pgvecto.rs** `[tool]` — Rust-based PostgreSQL vector extension with filtered search and multiple index backends.  ⚠ *Superseded by VectorChord from the same team.*
- **pgvector** `[tool]` — PostgreSQL extension adding vector column types with exact search plus HNSW and IVFFlat indexes.
- **pgvectorscale** `[tool]` — Timescale extension adding StreamingDiskANN indexing and statistical binary quantization on top of pgvector.
- **Redis vector search** `[tool]` — Redis query engine capability indexing vector fields for nearest neighbour and hybrid queries.
- **Snowflake Cortex Search** `[tool]` — Snowflake managed hybrid retrieval service combining vector and keyword search over tables.
- **SQL Server vector support** `[tool]` — Microsoft SQL Server 2025 feature adding a vector type and approximate nearest neighbour functions.
- **sqlite-vec** `[tool]` — Single-file SQLite extension storing and querying vectors in ordinary SQLite databases.
- **sqlite-vss** `[tool]` — Earlier SQLite vector extension wrapping FAISS indexes.  ⚠ *Deprecated by its author in favour of sqlite-vec.*
- **Supabase Vector** `[tool]` — Supabase's managed pgvector offering with client libraries for embedding storage and search.
- **TiDB Vector Search** `[tool]` — Vector column and index support inside the distributed MySQL-compatible TiDB database.
- **VectorChord** `[tool]` — PostgreSQL extension from TensorChord providing disk-friendly, high-throughput vector indexing.

### Search engines

- **Algolia** `[tool]` — Hosted search API for site and product search, with AI-driven ranking and vector search.
- **Amazon Kendra** `[tool]` — AWS managed enterprise search service with connectors and natural language question answering.
- **Apache Lucene** `[tool]` — Java library providing the inverted index, BM25 scoring and HNSW vectors behind many search engines.
- **Apache Solr** `[tool]` — Lucene-based enterprise search server with faceting, distributed indexing and dense vector queries.
- **Azure AI Search** `[tool]` — Microsoft managed retrieval service with integrated vectorization, hybrid search and semantic ranking.  ⚠ *Renamed from Azure Cognitive Search.*
- **Bleve** `[tool]` — Go library providing full-text indexing and search embedded in applications.
- **Coveo** `[tool]` — Commercial enterprise search and relevance platform with machine-learned ranking and generative answering.
- **Glean** `[tool]` — Enterprise work assistant indexing SaaS applications to provide permission-aware search and agents.
- **Manticore Search** `[tool]` — Open-source search engine derived from Sphinx, offering full-text, columnar and vector search.
- **Meilisearch** `[tool]` — Open-source Rust search engine focused on instant, typo-tolerant search with hybrid vector support.
- **OpenSearch** `[tool]` — Apache-2.0 licensed search engine forked from Elasticsearch, governed by the Linux Foundation.
- **Orama** `[tool]` — Open-source JavaScript search engine running full-text, vector and hybrid search in any runtime.
- **ParadeDB** `[tool]` — PostgreSQL extension suite adding Tantivy-backed BM25 full-text search for hybrid retrieval.
- **Quickwit** `[tool]` — Rust search engine for append-only logs and traces, indexing directly on object storage.
- **Sonic** `[tool]` — Lightweight Rust search backend providing identifier-based text indexing with minimal memory use.
- **Sphinx Search** `[tool]` — Early open-source full-text search server with SQL-like query syntax.  ⚠ *Largely superseded by its fork Manticore Search.*
- **Tantivy** `[tool]` — Rust full-text search library modelled on Lucene, used inside Quickwit and ParadeDB.
- **Typesense** `[tool]` — Open-source typo-tolerant search engine with in-memory indexes and built-in vector search.
- **Vertex AI Search** `[tool]` — Google Cloud managed search and grounding service over enterprise data and websites.  ⚠ *Formerly Enterprise Search on Generative AI App Builder.*
- **Xapian** `[tool]` — Mature C++ probabilistic information retrieval library with bindings for many languages.
- **ZincSearch** `[tool]` — Lightweight Go search engine offering an Elasticsearch-compatible API.

### Retrieval models & rerankers

- **ELSER** `[tool]` — Elastic's proprietary learned sparse encoder for semantic search without fine-tuning.
- **mixedbread rerankers** `[tool]` — Open-weight and hosted reranking models from mixedbread for relevance reordering.
- **PLAID** `[tool]` — The optimised serving engine for ColBERTv2, pruning centroids and candidates to cut late-interaction latency.
- **RAGatouille** `[tool]` — Python library packaging ColBERT training, indexing and retrieval for application developers.
- **rerankers** `[tool]` — Answer.AI Python library exposing many reranking models behind one interface.
- **Sentence Transformers** `[tool]` — Python framework for training and using embedding and cross-encoder models for semantic search.
- **Voyage AI rerankers** `[tool]` — Hosted reranking models from Voyage AI, with domain-tuned variants for code and legal text.

### Graph retrieval

- **Amazon Neptune** `[tool]` — AWS managed graph database supporting property graph and RDF, with an analytics engine.
- **Apache AGE** `[tool]` — PostgreSQL extension adding property graph storage and openCypher queries.
- **Apache HugeGraph** `[tool]` — Open-source distributed graph database with Gremlin support and an analytics toolchain.
- **Apache TinkerPop** `[tool]` — Graph computing framework defining the Gremlin traversal machine and driver ecosystem.
- **ArangoDB** `[tool]` — Multi-model database combining documents, graphs and vector search under one query language.
- **Blazegraph** `[tool]` — RDF triplestore that powered several public SPARQL endpoints.  ⚠ *Discontinued; Amazon Neptune is the commercial successor line.*
- **Cypher** — Declarative property graph query language, standardized in open form as openCypher.
- **Dgraph** `[tool]` — Distributed graph database with a GraphQL-style query language, now maintained by Hypermode.
- **FalkorDB** `[tool]` — Sparse-matrix graph database, forked from RedisGraph, targeting knowledge graphs for retrieval.
- **GQL** — ISO standard query language for property graph databases, published in 2024.
- **Graphiti** `[tool]` — Zep's library building temporally aware knowledge graphs from conversation and event streams.
- **GraphRAG** `[tool]` — Microsoft library building entity and community graphs from documents to answer global summarization queries.
- **JanusGraph** `[tool]` — Distributed open-source graph database built on pluggable storage backends and TinkerPop.
- **Kùzu** `[tool]` — Embedded property graph database optimized for analytical Cypher queries.  ⚠ *Repository archived in October 2025; community forks such as bighorn continue it.*
- **LightRAG** `[tool]` — Graph RAG variant using dual-level entity and relation retrieval without expensive community summarisation.
- **Memgraph** `[tool]` — In-memory property graph database with Cypher support and streaming ingestion.
- **nano-graphrag** `[tool]` — Minimal, readable reimplementation of GraphRAG intended for customization.
- **NebulaGraph** `[tool]` — Distributed open-source graph database designed for very large property graphs.
- **Neo4j** `[tool]` — Property graph database with Cypher queries, native vector indexes and graph data science library.
- **Neo4j GraphRAG package** `[tool]` — Official Neo4j Python library for graph-backed retrieval pipelines and knowledge graph construction.
- **Ontotext GraphDB** `[tool]` — RDF triplestore with reasoning, SPARQL and text and vector search connectors.
- **Oxigraph** `[tool]` — Rust RDF triplestore implementing SPARQL, usable embedded or as a server.
- **PuppyGraph** `[tool]` — Query engine presenting existing relational and lakehouse tables as a queryable graph.
- **RDF** — W3C data model representing information as subject-predicate-object triples.
- **SPARQL** — W3C standard query language and protocol for RDF graph data.
- **Stardog** `[tool]` — Enterprise knowledge graph platform with RDF storage, reasoning and virtual data federation.
- **TigerGraph** `[tool]` — Distributed native parallel graph database with GSQL for deep multi-hop analytics.
- **Virtuoso** `[tool]` — Hybrid relational and RDF database serving SPARQL endpoints at large scale.

### Document parsing & OCR

- **ABBYY Vantage** `[tool]` — Enterprise intelligent document processing platform with pretrained skills for business documents.
- **Amazon Textract** `[tool]` — AWS service extracting text, forms, tables and signatures with confidence scores and bounding boxes.
- **Apache Tika** `[tool]` — Java toolkit detecting file types and extracting text and metadata from a thousand formats.
- **Azure AI Document Intelligence** `[tool]` — Microsoft service extracting layout, key-value pairs and table structure from documents.  ⚠ *Renamed from Azure Form Recognizer.*
- **Camelot** `[tool]` — Python library extracting tables from text-based PDFs using stream and lattice strategies.
- **Chunkr** `[tool]` — Open-source and hosted service segmenting documents into typed, bounded chunks for RAG.
- **DeepSeek-OCR** `[tool]` — Open-weight model from DeepSeek compressing document pages into vision tokens for text recovery.
- **Docling** `[tool]` — Open-source document converter producing structured, layout-aware representations of PDFs and office files.
- **docTR** `[tool]` — Open-source document text recognition library built on TensorFlow and PyTorch.
- **dots.ocr** `[tool]` — Open-weight multilingual model performing layout detection and text recognition in a single pass.
- **EasyOCR** `[tool]` — Python OCR library wrapping detection and recognition models for many scripts.
- **Extractous** `[tool]` — Rust text and metadata extraction library offering a faster alternative to Tika-based pipelines.
- **Google Document AI** `[tool]` — Google Cloud platform of general and specialized document processors for extraction and classification.
- **GOT-OCR 2.0** `[tool]` — Open-weight general OCR model handling text, formulas, tables, charts and sheet music.
- **Granite-Docling** `[tool]` — Compact open-weight vision-language model from IBM that converts a document page in one pass.
- **LandingAI Agentic Document Extraction** `[tool]` — Hosted parser returning grounded structured data with bounding boxes from visually complex documents.
- **LlamaParse** `[tool]` — LlamaIndex hosted document parsing service using vision models for tables, forms and complex layouts.
- **Marker** `[tool]` — Datalab open-source pipeline converting PDFs and other documents into markdown, JSON or HTML.
- **MarkItDown** `[tool]` — Microsoft utility converting Office files, PDFs, images and audio into markdown for LLM input.
- **MegaParse** `[tool]` — Open-source parser from the Quivr team handling PDFs, Office files and web content losslessly.
- **MinerU** `[tool]` — Open-source pipeline from OpenDataLab extracting text, formulas and tables from PDFs.
- **Mistral OCR** `[tool]` — Mistral's hosted document understanding API converting pages into structured markdown with layout preserved.
- **Nanonets** `[tool]` — Commercial document extraction platform with trainable models for invoices, receipts and forms.
- **Nougat** `[tool]` — Meta research vision transformer transcribing scientific PDFs into markup.  ⚠ *Research project no longer developed; general VLM parsers such as olmOCR and Docling replaced it.*
- **olmOCR** `[tool]` — Allen Institute open-weight OCR pipeline and model for linearizing PDFs into training-ready text.
- **PaddleOCR** `[tool]` — Baidu open-source OCR toolkit with detection, recognition and the PP-Structure document analysis pipeline.
- **pdfminer.six** `[tool]` — Pure Python PDF parser exposing text, layout and font information.
- **pdfplumber** `[tool]` — Python library extracting text, words, lines and tables with coordinates from PDFs.
- **PyMuPDF4LLM** `[tool]` — PyMuPDF helper converting PDF pages into markdown chunks suited to retrieval pipelines.
- **Reducto** `[tool]` — Commercial document ingestion API extracting structured content, tables and citations from complex files.
- **Surya** `[tool]` — Datalab open-source OCR, layout analysis and reading order toolkit supporting many languages.
- **Tabula** `[tool]` — Java tool and library extracting tables from PDFs into CSV or dataframes.
- **Tensorlake Document AI** `[tool]` — Hosted document ingestion and structured extraction service, evolved from the Indexify project.
- **Tesseract** `[tool]` — Long-standing open-source OCR engine supporting over one hundred languages.
- **Unstructured** `[tool]` — Library and platform partitioning many document formats into normalized, chunkable elements for retrieval.
- **Upstage Document Parse** `[tool]` — Hosted parser returning HTML-structured document elements with layout and reading order.
- **Zerox** `[tool]` — Open-source utility converting document pages to images and transcribing them with vision models.

### Web extraction

- **Apify** `[tool]` — Platform hosting reusable web scraping and automation actors with proxy and scheduling infrastructure.
- **Brave Search API** `[tool]` — Independent web index exposed as a search and summarization API.
- **Bright Data** `[tool]` — Commercial proxy and web data platform providing collection infrastructure and prebuilt datasets.
- **Crawl4AI** `[tool]` — Open-source asynchronous crawler producing LLM-ready markdown with extraction strategies.
- **Exa** `[tool]` — Neural web search API returning full page contents and embeddings for AI applications.
- **Firecrawl** `[tool]` — Service crawling and scraping websites into clean markdown or structured JSON for LLM ingestion.
- **Jina Reader** `[tool]` — Jina AI endpoint converting any URL into clean, model-readable text.
- **Mozilla Readability** `[tool]` — JavaScript library isolating the readable article content of a web page.
- **ScrapeGraphAI** `[tool]` — Python library that builds scraping pipelines from natural language descriptions using LLMs.
- **Scrapy** `[tool]` — Python framework for writing large-scale web crawlers and extraction pipelines.
- **SearXNG** `[tool]` — Self-hosted metasearch engine aggregating many providers behind one privacy-preserving API.
- **Serper** `[tool]` — API returning Google search engine results as structured JSON for agent grounding.
- **Tavily** `[tool]` — Search API built for agents, returning ranked answers and source snippets.
- **Trafilatura** `[tool]` — Python library extracting main article text, metadata and comments from web pages.
- **Zyte** `[tool]` — Web scraping platform providing an automatic extraction API and managed proxy network.

### Chunking & ingestion

- **Chonkie** `[tool]` — Python chunking library offering token, sentence, recursive, semantic, late and neural chunkers.
- **CocoIndex** `[tool]` — Rust-based incremental indexing engine keeping derived embeddings synchronized with changing source data.
- **dlt** `[tool]` — Python library declaring extract-and-load pipelines as code, handling schema inference, evolution and state.
- **Embedchain** `[tool]` — Framework for building retrieval pipelines from arbitrary data sources with few lines of code.  ⚠ *Merged into Mem0; development continues under the Mem0 project.*
- **LangChain text splitters** `[tool]` — LangChain package of recursive, structural and semantic splitters producing retrieval chunks.
- **LlamaHub** `[tool]` — Registry of LlamaIndex data loaders, tools and packs for connecting external sources.
- **LlamaIndex node parsers** `[tool]` — LlamaIndex components converting documents into nodes using sentence window, hierarchical or semantic strategies.
- **Pathway** `[tool]` — Python framework for streaming data pipelines with incrementally updated indexes for live RAG.
- **PyAirbyte** `[tool]` — Python library running Airbyte connectors in-process for programmatic data extraction.
- **semantic-chunkers** `[tool]` — Aurelio Labs library splitting text at semantic boundaries detected from embedding similarity.
- **Sycamore** `[tool]` — Aryn open-source engine for document ingestion, enrichment and transformation into search indexes.

### RAG frameworks

- **AnythingLLM** `[tool]` — Self-hostable desktop and server application providing document workspaces, retrieval and agents.
- **Cognita** `[tool]` — TrueFoundry open-source framework organizing RAG components into modular, deployable services.
- **DSPy** `[tool]` — Framework declaring LLM pipelines as typed modules and optimizing their prompts and weights automatically.
- **FlashRAG** `[tool]` — Research toolkit implementing and benchmarking many published RAG methods under one interface.
- **Haystack** `[tool]` — deepset framework building modular, production-oriented retrieval and generation pipelines with evaluation tooling.
- **Kotaemon** `[tool]` — Open-source RAG interface and framework with citation display and configurable pipelines.
- **LangChain** `[tool]` — Python and JavaScript framework of composable components for building retrieval and LLM application pipelines.
- **LlamaIndex** `[tool]` — Framework for data ingestion, indexing and query engines over private documents for LLM applications.
- **LLMWare** `[tool]` — Open-source framework for retrieval and agent workflows using small, specialized models.
- **Morphik** `[tool]` — Open-source multimodal retrieval engine indexing documents visually rather than as extracted text.
- **Onyx** `[tool]` — Open-source enterprise search and chat platform with connectors and permission-aware retrieval.  ⚠ *Renamed from Danswer.*
- **PaperQA2** `[tool]` — FutureHouse agentic retrieval system answering scientific questions from literature with citations.
- **PrivateGPT** `[tool]` — Self-hosted project for querying local documents with local models and no external calls.
- **Quivr** `[tool]` — Open-source assistant framework for building retrieval-backed chat over personal and company files.
- **R2R** `[tool]` — Open-source retrieval-to-response system with ingestion, hybrid search, graphs and a REST API.
- **RAGFlow** `[tool]` — Open-source RAG engine centred on deep document understanding, visual pipeline editing and citations.
- **txtai** `[tool]` — All-in-one embeddings database combining semantic search, workflows and language model pipelines.
- **Verba** `[tool]` — Weaviate's open-source RAG application providing ingestion, retrieval and a chat interface.

### Managed retrieval services

- **Amazon Bedrock Knowledge Bases** `[tool]` — AWS managed service ingesting sources into a vector store and serving grounded retrieval.
- **Contextual AI** `[tool]` — Commercial platform providing end-to-end retrieval-augmented generation with specialized extraction, reranking and grounded generation models.
- **Gemini File Search** `[tool]` — Managed retrieval tool in the Gemini API handling storage, chunking, embedding and citations.
- **Nuclia** `[tool]` — Managed retrieval service indexing unstructured files, audio and video for question answering.
- **OpenAI File Search** `[tool]` — Hosted vector store and retrieval tool in the OpenAI API for grounding model responses.
- **Ragie** `[tool]` — Managed RAG-as-a-service API handling connectors, ingestion, indexing and retrieval.
- **Vectara** `[tool]` — Managed retrieval-augmented generation platform providing ingestion, hybrid search, reranking and grounded answers.
- **Vertex AI RAG Engine** `[tool]` — Google Cloud managed pipeline for ingestion, retrieval and grounding within Vertex AI.

### Agent frameworks

- **Agno** `[tool]` — Python framework for building multi-agent systems with memory, knowledge and reasoning built in.  ⚠ *Renamed from Phidata.*
- **Atomic Agents** `[tool]` — Lightweight Python framework composing agents from small, schema-typed, swappable building blocks.
- **AutoGen** `[tool]` — Microsoft Research framework orchestrating conversations among multiple cooperating agents.  ⚠ *maintenance mode; orchestration concepts merged into Microsoft Agent Framework*
- **AutoGPT** `[tool]` — Early autonomous agent project that popularized goal-driven LLM loops, now a workflow platform.
- **BabyAGI** `[tool]` — Minimal task-planning agent loop that spawns and prioritizes its own subtasks.
- **BeeAI Framework** `[tool]` — IBM-originated open-source framework for production agents, now hosted by the Linux Foundation.
- **CAMEL** `[tool]` — Google DeepMind design pattern extracting a control flow that confines untrusted data via capability tracking.
- **ChatDev** `[tool]` — Research framework simulating a virtual software company of role-playing agents.
- **Claude Agent SDK** `[tool]` — Anthropic SDK exposing the Claude Code agent loop, tools, subagents and permissions to developers.  ⚠ *Renamed from the Claude Code SDK.*
- **CrewAI** `[tool]` — Framework for assembling role-based agent teams with declarative tasks and processes.
- **DeepAgents** `[tool]` — LangChain library packaging planning, sub-agents, file system and long-horizon context management.
- **Genkit** `[tool]` — Google open-source framework for building AI features and agent flows in JavaScript, Go and Python.
- **Google Agent Development Kit (ADK)** `[tool]` — Google open-source framework composing hierarchical agents with tools, sessions and evaluation.
- **Griptape** `[tool]` — Python framework structuring agents, pipelines and workflows with off-prompt data handling.
- **LangChain4j** `[tool]` — Java library providing LLM abstractions, retrieval and agent patterns for JVM applications.
- **LangGraph** `[tool]` — Library modelling agents as stateful graphs of nodes and edges with checkpointing and human-in-the-loop.
- **LlamaIndex Workflows** `[tool]` — Event-driven abstraction in LlamaIndex chaining steps and agents into asynchronous applications.
- **Mastra** `[tool]` — TypeScript agent framework with workflows, memory, tools, evaluation and a local development playground.
- **MetaGPT** `[tool]` — Multi-agent framework assigning software company roles to agents that produce specifications and code.
- **Microsoft Agent Framework** `[tool]` — Microsoft's unified .NET and Python SDK for single and multi-agent systems with enterprise telemetry.
- **OpenAI Agents SDK** `[tool]` — OpenAI's production framework providing agents, tools, guardrails, handoffs and run tracing.  ⚠ *Successor to the experimental Swarm library.*
- **OpenAI Swarm** `[tool]` — Experimental OpenAI library demonstrating routines and handoffs between lightweight agents.  ⚠ *experimental only; superseded by the OpenAI Agents SDK*
- **OpenHands** `[tool]` — Open-source platform running software development agents that edit code, run commands and browse.  ⚠ *Renamed from OpenDevin.*
- **Pydantic AI** `[tool]` — Type-safe Python agent framework using Pydantic models for structured tool arguments and outputs.
- **Semantic Kernel** `[tool]` — Microsoft SDK adding plugins, planners and memory to applications across .NET, Python and Java.  ⚠ *now the foundation layer inside Microsoft Agent Framework rather than a standalone direction*
- **Semantic Router** `[tool]` — Open-source library from Aurelio Labs making routing decisions from embedding similarity rather than model calls.
- **smolagents** `[tool]` — Hugging Face minimal agent library favouring agents that act by writing Python code.
- **Spring AI** `[tool]` — Spring project bringing model calls, retrieval, tools and agents into Java applications.
- **Strands Agents** `[tool]` — AWS open-source, model-driven SDK building agents from a prompt, tools and a loop.
- **SuperAGI** `[tool]` — Open-source framework and dashboard for provisioning, running and monitoring autonomous agents.
- **SWE-agent** `[tool]` — Princeton research agent framework giving language models a structured interface to repositories.
- **Vercel AI SDK** `[tool]` — TypeScript toolkit for streaming model calls, tool use, agents and generative user interfaces.
- **VoltAgent** `[tool]` — TypeScript agent framework with built-in observability and multi-agent supervision.

### Agent platforms

- **Amazon Bedrock AgentCore** `[tool]` — AWS managed runtime providing session isolation, memory, identity, gateway and observability for any agent framework.
- **Amazon Bedrock Agents** `[tool]` — AWS managed service defining agents with action groups, knowledge bases and orchestration templates.
- **Azure AI Foundry Agent Service** `[tool]` — Microsoft hosted service running agents with tools, threads, connected knowledge and enterprise governance.
- **Cloudflare Agents** `[tool]` — Cloudflare SDK running stateful agents on Durable Objects with hibernation and websocket sessions.
- **Databricks Agent Bricks** `[tool]` — Databricks service that automatically builds and optimizes domain agents from enterprise data.
- **Gemini Enterprise** `[tool]` — Google's enterprise agent workspace and governance layer, evolved from Google Agentspace.
- **LangGraph Platform** `[tool]` — Managed runtime for deploying stateful LangGraph agents with persistence, debugging and trace inspection.  ⚠ *Renamed from LangGraph Cloud.*
- **Microsoft Agent 365** `[tool]` — Microsoft control plane for registering, governing and monitoring agents across an organization.
- **OpenAI AgentKit** `[tool]` — OpenAI toolset for visually composing, evaluating and deploying agents built on the Agents SDK.
- **Snowflake Cortex Agents** `[tool]` — Snowflake service orchestrating retrieval and analytics tools over governed warehouse data.
- **Vertex AI Agent Engine** `[tool]` — Google Cloud managed runtime deploying agents with sessions, memory bank and example stores.

### Agent protocols

- **Agent Payments Protocol (AP2)** — Google-led extension for authorizing and settling payments initiated by agents on a user's behalf.
- **Agent2Agent (A2A)** — Open protocol letting independently built agents discover each other and delegate tasks.
- **Agentic AI Foundation** `[tool]` — Linux Foundation body hosting neutral governance for MCP, A2A and related agent projects.
- **Agentic Commerce Protocol** — OpenAI and Stripe specification letting agents complete purchases against merchant catalogues and checkout.
- **AGENTS.md** — Convention placing repository instructions for coding agents in a root markdown file.
- **AGNTCY** `[tool]` — Open-source collective, initiated by Cisco, building discovery, identity and messaging components for agent networks.
- **llms.txt** — Proposed site-root markdown file listing content a language model should read.
- **NLWeb** `[tool]` — Microsoft open project turning websites into conversational endpoints exposed as MCP servers.
- **Open Agentic Schema Framework (OASF)** — AGNTCY schema standard describing agent identity, capabilities and records for discovery.
- **x402** — Open payment protocol using the HTTP 402 status code for machine-to-machine settlement.

### Tool integration

- **Arcade.dev** `[tool]` — Platform handling user-level OAuth and authorization so agents can act inside third-party accounts.
- **Composio** `[tool]` — Integration platform exposing hundreds of authenticated SaaS tools to agents through one interface.
- **Docker MCP Toolkit** `[tool]` — Docker feature running catalogued MCP servers in isolated containers with credential management.
- **FastMCP** `[tool]` — Python framework for building and deploying MCP servers and clients with decorators.
- **MCP Inspector** `[tool]` — Official developer tool for interactively testing and debugging MCP servers.
- **MCP Registry** `[tool]` — Official open catalogue of publicly available MCP servers and their metadata.
- **OpenAI Apps SDK** `[tool]` — OpenAI framework, built on MCP, for building interactive applications inside ChatGPT.
- **Smithery** `[tool]` — Third-party registry and hosting platform for discovering and deploying MCP servers.
- **Zapier MCP** `[tool]` — Zapier endpoint exposing its application integrations to agents as MCP tools.

### Browser & computer use

- **Anchor Browser** `[tool]` — Cloud browser service for agents with authenticated session persistence and profiles.
- **Anthropic computer use** `[tool]` — Claude capability taking screenshots and issuing mouse and keyboard actions on a computer.
- **Browser Use** `[tool]` — Open-source Python framework letting agents perceive and act on web pages via the DOM.
- **Browserbase** `[tool]` — Managed cloud Chromium infrastructure for agents, with session recording, stealth and proxies.
- **Browserless** `[tool]` — Hosted and self-hostable service running headless Chrome behind an API.
- **ChatGPT Atlas** `[tool]` — OpenAI's web browser with ChatGPT integrated and an agent mode that acts on sites.
- **Chrome DevTools MCP** `[tool]` — Google MCP server giving agents access to Chrome debugging, tracing and performance data.
- **Claude for Chrome** `[tool]` — Anthropic browser extension letting Claude view and act within the user's Chrome tabs.
- **Comet** `[tool]` — Neural translation-quality metric trained on human judgments, with reference-free COMETKiwi variant.
- **Hyperbrowser** `[tool]` — Cloud browser platform emphasizing stealth, fingerprint randomization and scalable agent sessions.
- **Notte** `[tool]` — Open-source browser agent stack providing a structured perception layer over web pages.
- **OpenAI Operator** `[tool]` — OpenAI browsing agent driven by the computer-using agent model.  ⚠ *Folded into ChatGPT agent mode as a standalone product.*
- **Opera Neon** `[tool]` — Opera's agentic browser that executes multi-step web tasks on the user's behalf.
- **Playwright** `[tool]` — Cross-browser automation library driving Chromium, Firefox and WebKit through a single API.
- **Playwright MCP** `[tool]` — Microsoft MCP server exposing Playwright browser control to agents via accessibility snapshots.
- **Project Mariner** `[tool]` — Google DeepMind research prototype for a Gemini-powered agent that operates the web browser.
- **Puppeteer** `[tool]` — Node library controlling Chrome and Firefox over the DevTools protocol.
- **Scrapybara** `[tool]` — Hosted virtual desktops and browsers giving agents full computer-use environments.
- **Selenium** `[tool]` — Long-standing browser automation project driving browsers through the WebDriver standard.
- **Skyvern** `[tool]` — Open-source browser automation using vision models to complete form-heavy workflows.
- **Stagehand** `[tool]` — Browserbase TypeScript framework mixing deterministic Playwright code with natural language browser actions.
- **Steel.dev** `[tool]` — Open-source browser API and hosted infrastructure for running agent browser sessions.
- **WebDriver BiDi** — W3C bidirectional protocol standard for controlling and observing browsers.

### Code sandboxes

- **Anthropic code execution tool** `[tool]` — Anthropic API tool running Python in a sandbox so Claude can compute and analyse files.
- **Blaxel** `[tool]` — Cloud platform providing fast-booting sandboxes and hosting for agent workloads.
- **Cloudflare Sandbox SDK** `[tool]` — Cloudflare library running agent code inside Containers with a Workers-native API.
- **CodeSandbox SDK** `[tool]` — API creating and forking snapshot-backed development environments programmatically.
- **Daytona** `[tool]` — Platform provisioning persistent development sandboxes for agents with filesystem and process APIs.
- **E2B** `[tool]` — Open-source infrastructure running agent-generated code in Firecracker microVM sandboxes via SDKs.
- **Firecracker** `[tool]` — AWS open-source virtual machine monitor creating lightweight microVMs with fast boot times.
- **Fly.io Machines** `[tool]` — API for launching fast-booting, hardware-isolated virtual machines on demand.
- **gVisor** `[tool]` — Google user-space kernel intercepting system calls to isolate containers from the host.
- **Judge0** `[tool]` — Open-source code execution service supporting many languages behind a REST API.
- **Kata Containers** `[tool]` — Open-source runtime backing container workloads with lightweight virtual machines.
- **Modal Sandboxes** `[tool]` — Modal primitive launching isolated gVisor containers, including GPU-backed ones, for untrusted code.
- **OpenAI Code Interpreter** `[tool]` — OpenAI hosted tool running Python in a sandboxed container with file input and output.
- **Pyodide** `[tool]` — CPython compiled to WebAssembly, allowing Python execution inside a browser or Wasm sandbox.
- **Riza** `[tool]` — Hosted code interpreter API executing model-generated code in isolated WebAssembly environments.
- **Runloop** `[tool]` — Managed devbox and sandbox platform aimed at coding agents and their evaluation.
- **Vercel Sandbox** `[tool]` — Vercel service running untrusted code in ephemeral microVMs from serverless functions.

### Agent memory

- **Bedrock AgentCore Memory** `[tool]` — AWS managed short-term and long-term memory store for agents running on AgentCore.
- **Cognee** `[tool]` — Open-source memory layer turning documents and events into a queryable graph plus embeddings.
- **Honcho** `[tool]` — Open-source personalization and user-modelling layer building theory-of-mind representations for agents.
- **LangMem** `[tool]` — LangChain SDK for extracting, storing and retrieving semantic, episodic and procedural agent memories.
- **Letta** `[tool]` — Stateful agent runtime exposing editable memory blocks and self-managed context.  ⚠ *Renamed from MemGPT, which is now the underlying research technique.*
- **Mem0** `[tool]` — Memory layer extracting facts from interactions into combined vector, graph and key-value stores.
- **Memobase** `[tool]` — User-profile based memory backend maintaining structured, evolving profiles for long-running assistants.
- **Supermemory** `[tool]` — Hosted memory API storing and retrieving user context across applications and agents.
- **Zep** `[tool]` — Memory service building temporal knowledge graphs from conversations for long-term recall.

### Workflow orchestration

- **Azure Durable Functions** `[tool]` — Azure extension writing stateful, checkpointed orchestrations as serverless functions.
- **Burr** `[tool]` — Python library expressing applications and agents as explicit state machines with persistence.
- **Cloudflare Workflows** `[tool]` — Cloudflare durable multi-step execution engine built on Workers and Durable Objects.
- **ControlFlow** `[tool]` — Prefect library structuring agentic work as discrete tasks inside orchestrated flows.
- **Dapr Agents** `[tool]` — Dapr framework running agents as durable, message-driven actors on Kubernetes.
- **Dapr Workflow** `[tool]` — Dapr building block providing durable, code-first workflows for distributed applications.
- **DBOS** `[tool]` — Durable execution library using PostgreSQL as the source of truth for workflow state.
- **Google Cloud Workflows** `[tool]` — Google managed service running YAML-defined sequences of API and service calls.
- **Hamilton** `[tool]` — Open-source micro-framework describing dataflows as Python functions, producing lineage and executable directed acyclic graphs.
- **Hatchet** `[tool]` — PostgreSQL-backed distributed task queue and durable workflow engine.
- **Inngest** `[tool]` — Event-driven durable functions platform with steps, queues, flow control and observability.
- **Inngest AgentKit** `[tool]` — Inngest TypeScript library composing networks of agents on top of durable functions.
- **Metaflow** `[tool]` — Python framework from Netflix for building, scaling and versioning data science workflows from laptop to cloud.
- **Restate** `[tool]` — Durable execution runtime adding journaling, state and reliable calls to ordinary service handlers.
- **Trigger.dev** `[tool]` — Open-source platform running long-running background tasks and AI jobs with checkpointing.
- **Windmill** `[tool]` — Open-source platform turning scripts into workflows, APIs and internal applications.

### Visual agent builders

- **Botpress** `[tool]` — Platform for building, deploying and monitoring conversational agents across messaging channels.
- **Dify** `[tool]` — Open-source platform with a visual canvas for building RAG applications and agent workflows.
- **Flowise** `[tool]` — Open-source drag-and-drop builder assembling LLM chains and agents from nodes.
- **Langflow** `[tool]` — Visual low-code builder for LLM and agent flows, exportable as APIs.
- **Microsoft Copilot Studio** `[tool]` — Low-code environment building and governing copilots and agents across Microsoft 365.
- **n8n** `[tool]` — Open-source workflow automation platform with native AI agent and tool nodes.
- **Relevance AI** `[tool]` — No-code platform assembling teams of agents with tools and scheduled runs.
- **Rivet** `[tool]` — Open-source visual graph editor and runtime for designing and debugging LLM chains.
- **Salesforce Agentforce** `[tool]` — Salesforce platform building and deploying autonomous agents grounded in CRM data.
- **Voiceflow** `[tool]` — Collaborative platform designing and deploying conversational and voice agents.

## Tools — evaluation, observability, gateways, MLOps
*273 terms*

### Eval frameworks

- **ARES** `[tool]` — Automated retrieval-augmented generation evaluation system using synthetic training data and lightweight judge classifiers.
- **AutoEvals** `[tool]` — Open-source scorer library from Braintrust providing model-graded and heuristic evaluation functions.
- **ChainForge** `[tool]` — Open-source visual environment for prompt experimentation and side-by-side comparative evaluation across multiple models.
- **Continuous Eval** `[tool]` — Open-source modular evaluation framework from Relari scoring retrieval, generation and agent pipeline components separately.
- **Deepchecks** `[tool]` — Open-source Python package validating data integrity, model performance and LLM output quality through test suites.
- **DeepEval** `[tool]` — Open-source pytest-style Python framework that unit-tests LLM outputs against configurable metrics inside CI pipelines.
- **DeepTeam** `[tool]` — Open-source LLM red-teaming framework from Confident AI with configurable attack strategies and vulnerability checks.
- **garak** `[tool]` — Open-source LLM vulnerability scanner probing models for prompt injection, data leakage and jailbreak weaknesses.
- **Giskard** `[tool]` — Open-source testing library that scans machine learning and LLM systems for quality, bias and robustness failures.
- **Inspect AI** `[tool]` — Open-source evaluation framework from the UK AI Security Institute for building model and agent evaluations.
- **LangCheck** `[tool]` — Open-source Python library of simple building-block metrics for evaluating and testing LLM text output.
- **MLflow LLM Evaluate** `[tool]` — MLflow's built-in evaluation API scoring generative model outputs against datasets, metrics and LLM judges.
- **OpenAI Evals** `[tool]` — Open-source registry and framework for authoring and running task-based evaluations against OpenAI-compatible models.
- **promptfoo** `[tool]` — Open-source CLI and library running declarative LLM evaluations, model comparisons and adversarial red-team scans.
- **PyRIT** `[tool]` — Microsoft open-source Python risk identification toolkit orchestrating multi-turn and multimodal automated attacks.
- **Ragas** `[tool]` — Open-source Python library of metrics for evaluating retrieval-augmented generation and agent pipelines without reference answers.
- **RAGChecker** `[tool]` — Open-source diagnostic framework that attributes retrieval-augmented generation errors separately to retriever and generator.
- **Scenario** `[tool]` — Open-source agent simulation and testing library from LangWatch that runs scripted multi-turn agent trials.
- **Tonic Validate** `[tool]` — Open-source retrieval-augmented generation evaluation library with a hosted metrics dashboard from Tonic.ai.
- **TruLens** `[tool]` — Open-source library that instruments LLM applications and scores them using programmable feedback functions.
- **UpTrain** `[tool]` — Open-source Python framework scoring LLM responses against prebuilt quality, safety and retrieval metrics.

### Benchmark harnesses

- **Artificial Analysis** `[tool]` — Independent benchmarking service publishing comparative quality, latency, throughput and price metrics for models and providers.
- **BigCode Evaluation Harness** `[tool]` — Open-source harness benchmarking code-generation models on execution-based programming tasks and datasets.
- **Evalchemy** `[tool]` — Open-source unified harness bundling many post-training LLM benchmarks on top of lm-evaluation-harness.
- **EvalPlus** `[tool]` — Open-source harness augmenting code benchmarks with extra generated tests to reduce false-positive pass rates.
- **HELM (Holistic Evaluation of Language Models)** `[tool]` — Stanford CRFM framework and public leaderboard evaluating models across many scenarios, metrics and scenario-metric combinations.
- **LightEval** `[tool]` — Hugging Face's lightweight open-source harness for running LLM benchmarks across multiple inference backends.
- **lm-evaluation-harness** `[tool]` — EleutherAI's open-source harness running language models across hundreds of standardised academic benchmark tasks reproducibly.
- **LMArena** `[tool]` — Public platform ranking models by crowdsourced pairwise human preference votes and Elo-style scores.  ⚠ *Renamed from Chatbot Arena / LMSYS Arena.*
- **Open LLM Leaderboard** `[tool]` — Hugging Face leaderboard that ranked open-weight models using lm-evaluation-harness on a fixed benchmark set.  ⚠ *Archived by Hugging Face in 2025; live comparison moved to arena-style and task-specific leaderboards.*
- **OpenCompass** `[tool]` — Open-source LLM evaluation platform from Shanghai AI Laboratory covering large multilingual and multimodal benchmark suites.
- **SEAL Leaderboards** `[tool]` — Scale AI's private-benchmark leaderboards ranking frontier models on expert-built, unpublished evaluation sets.
- **simple-evals** `[tool]` — OpenAI's open-source lightweight harness for reproducing headline reasoning, knowledge and coding benchmark scores.

### Observability platforms

- **Arize AX** `[tool]` — Arize AI's enterprise observability platform for tracing, online evaluation, drift analysis and experiment tracking.
- **Arize Phoenix** `[tool]` — Open-source OpenTelemetry-based observability tool for tracing, evaluating and exploring LLM and agent applications.
- **Helicone** `[tool]` — Open-source observability proxy logging LLM requests, sessions, costs and latency through a one-line integration.  ⚠ *In maintenance mode since Mintlify acquired it in March 2026; security and model updates only.*
- **Laminar** `[tool]` — Open-source platform for tracing, evaluating and monitoring LLM and agent applications.
- **Langfuse** `[tool]` — Open-source LLM engineering platform combining tracing, prompt management, datasets, evaluations and cost analytics.
- **LangSmith** `[tool]` — LangChain's hosted platform for tracing, debugging, dataset curation, annotation queues and evaluation of LLM applications.
- **Langtrace** `[tool]` — Open-source OpenTelemetry-based SDK and platform collecting LLM traces, token usage and evaluation signals.
- **Literal AI** `[tool]` — Hosted LLM observability and evaluation platform from the Chainlit team.  ⚠ *Discontinued 31 October 2025; users migrated to Langfuse, LangSmith and similar platforms.*
- **Lunary** `[tool]` — Open-source toolkit for LLM observability, prompt management, user feedback capture and analytics.
- **OpenLIT** `[tool]` — Open-source OpenTelemetry-native platform auto-instrumenting LLMs, agents, vector databases and GPUs.
- **Opik** `[tool]` — Comet's open-source LLM tracing and evaluation platform with datasets, experiments and prompt management.
- **PostHog LLM Analytics** `[tool]` — Open-core product-analytics platform capturing LLM generations, traces, costs and downstream user behaviour.
- **Pydantic Logfire** `[tool]` — Open-core observability platform from the Pydantic team with dedicated panels for LLM conversations and tool calls.
- **Traceloop** `[tool]` — Managed LLM observability platform built on its own OpenTelemetry instrumentation libraries and dashboards.
- **Weights & Biases Weave** `[tool]` — Open-core tracing and evaluation toolkit for LLM applications with managed scorers and prompt iteration.

### Eval platforms

- **Amazon Bedrock Evaluations** `[tool]` — AWS managed service running automatic and human evaluation jobs on Bedrock models and RAG knowledge bases.
- **Athina AI** `[tool]` — Hosted platform for LLM evaluation, prompt experimentation, datasets and production monitoring.
- **Azure AI Foundry Evaluation** `[tool]` — Microsoft's managed evaluation service and SDK scoring generative applications on quality, safety and groundedness metrics.
- **Braintrust** `[tool]` — AI engineering platform where evaluation scores, experiments, datasets and production traces share one workspace.
- **Confident AI** `[tool]` — Hosted quality platform built around DeepEval for shared evaluation datasets, regression reports and team review.
- **Distributional** `[tool]` — Enterprise AI testing platform detecting statistically significant behavioural shifts in non-deterministic AI systems.
- **Freeplay** `[tool]` — AI product development platform combining prompt management, testing, evaluation and human review of production data.
- **Galileo** `[tool]` — Enterprise LLM evaluation and observability platform with proprietary guardrail metrics and trace analysis.  ⚠ *Acquired by Cisco in 2026 and folded into Splunk Observability.*
- **HoneyHive** `[tool]` — Observability and evaluation platform providing tracing, datasets, experiments, online evaluators and human feedback workflows.
- **Humanloop** `[tool]` — Prompt management, evaluation and observability platform for LLM applications.  ⚠ *Shut down 8 September 2025 after Anthropic hired the team; replaced by PromptLayer, Langfuse and similar.*
- **Kolena** `[tool]` — Machine learning and AI testing platform for granular, slice-level model quality analysis and regression tracking.
- **LangWatch** `[tool]` — Apache-licensed agent observability and testing platform with OpenTelemetry tracing, online evaluation and scenario simulation.
- **Maxim AI** `[tool]` — End-to-end platform spanning prompt experimentation, agent simulation, evaluation and production observability.
- **Mosaic AI Agent Evaluation** `[tool]` — Databricks managed service scoring agent and RAG applications with built-in judges and human review apps.
- **Okareo** `[tool]` — Evaluation platform generating synthetic test scenarios and behavioural checks for LLM applications and agents.
- **Openlayer** `[tool]` — AI governance, testing and observability platform aimed at regulated enterprises, with alerts and version comparison.
- **Parea AI** `[tool]` — Open-core LLM engineering platform with SDKs for tracing, experiments, evaluations and human review.
- **Patronus AI** `[tool]` — Evaluation platform built on purpose-trained judge models, including Lynx for hallucination detection.
- **RagaAI Catalyst** `[tool]` — Open-core platform for agent testing, trace management, dataset curation and automated evaluation.
- **Snowflake AI Observability** `[tool]` — Snowflake Cortex feature for tracing and evaluating generative AI applications inside the data platform.
- **Vellum** `[tool]` — Commercial prompt engineering, workflow building and evaluation platform for production LLM features.
- **Vertex AI Gen AI Evaluation Service** `[tool]` — Google Cloud managed service running pointwise and pairwise evaluations of generative models and agents.

### Agent observability

- **AgentNeo** `[tool]` — Open-source SDK and dashboard tracing agent executions, LLM calls, tool invocations and costs.
- **AgentOps** `[tool]` — Open-source SDK and dashboard recording agent sessions, tool calls, costs and execution timelines for replay.
- **Amazon Bedrock AgentCore Observability** `[tool]` — AWS OpenTelemetry-compatible observability for hosted agents, emitting spans, metrics and session traces.
- **Azure AI Foundry Agent Tracing** `[tool]` — Microsoft Foundry capability capturing agent inputs, outputs, tool calls, retries and evaluation results.
- **CrewAI AMP** `[tool]` — Managed platform for deploying and monitoring CrewAI crews with decision logs and performance analytics.
- **Google Cloud Agent Observability** `[tool]` — Google Cloud service collecting agent traces and metrics using OpenTelemetry GenAI semantic conventions.
- **OpenAI Agents SDK Tracing** `[tool]` — Built-in tracing in OpenAI's Agents SDK recording agent runs, generations, handoffs and tool calls.

### Tracing standards

- **OpenInference** — Apache-licensed specification of semantic conventions for LLM, retrieval and agent spans, maintained by Arize.
- **OpenLLMetry** `[tool]` — Traceloop's collection of OpenTelemetry instrumentation libraries auto-tracing LLM providers, frameworks and vector stores.
- **OpenTelemetry (OTel)** `[tool]` — Vendor-neutral CNCF observability framework providing APIs, SDKs and collectors for traces, metrics and logs.
- **OpenTelemetry Collector** `[tool]` — Standalone service that receives, processes, batches and exports telemetry to one or more backends.
- **OpenTelemetry MCP semantic conventions** — Draft attribute definitions describing Model Context Protocol client, server and tool operations in traces.
- **OpenTelemetry Protocol (OTLP)** — Wire protocol defining how telemetry data is encoded and transmitted between instrumentation and backends.
- **W3C Trace Context** — Web standard defining HTTP headers that propagate trace and span identifiers across service boundaries.

### APM & telemetry backends

- **Amazon CloudWatch GenAI Observability** `[tool]` — AWS capability surfacing traces, metrics and logs for Bedrock and agent workloads inside CloudWatch.
- **Coralogix AI Center** `[tool]` — Coralogix module ingesting OpenTelemetry AI traces with session exploration, evaluation and guardrails.
- **Datadog LLM Observability** `[tool]` — Datadog module tracing LLM and agent workflows with token, cost, latency and output-quality monitoring.
- **Dynatrace AI Observability** `[tool]` — Dynatrace capability correlating model, application and infrastructure telemetry for generative AI workloads.
- **Elastic AI Observability** `[tool]` — Elastic capability using APM and OpenTelemetry data to monitor LLM and agentic applications.
- **Grafana Cloud AI Observability** `[tool]` — Grafana Cloud service ingesting OpenTelemetry GenAI signals to monitor conversations, agents and token spend.
- **Grafana Tempo** `[tool]` — Open-source high-scale distributed tracing backend storing traces in object storage.
- **Honeycomb** `[tool]` — Observability platform for high-cardinality event data, rendering GenAI spans as agent timelines.
- **IBM Instana** `[tool]` — Application performance monitoring platform with agent and LLM observability correlating workflows, models and tools.
- **Jaeger** `[tool]` — CNCF open-source distributed tracing backend that stores, queries and visualises OpenTelemetry traces.
- **New Relic AI Monitoring** `[tool]` — New Relic APM capability providing model traces, token views and OpenTelemetry-based GenAI instrumentation.
- **OpenObserve** `[tool]` — Open-source observability backend for logs, metrics and traces with low-cost object-storage retention.
- **Sentry AI Agent Monitoring** `[tool]` — Sentry capability capturing agent runs, tool calls and LLM errors alongside application error tracking.
- **SigNoz** `[tool]` — Open-source OpenTelemetry-native observability backend for traces, metrics, logs and LLM token dashboards.
- **Splunk Observability Cloud** `[tool]` — Cisco-owned observability suite for traces, metrics and logs, now carrying Galileo's AI evaluation capabilities.

### Prompt management

- **Agenta** `[tool]` — Open-source LLMOps platform for prompt versioning, playground comparison, evaluation and observability.
- **BAML** `[tool]` — Domain-specific language from BoundaryML defining typed LLM functions with versioned prompts and generated client code.
- **LangChain Hub** `[tool]` — Public and private registry for storing, versioning and sharing prompts, accessed through LangSmith.
- **Latitude** `[tool]` — Open-source prompt engineering and agent platform with collaborative prompt versioning, evaluation and deployment.
- **Microsoft Prompt Flow** `[tool]` — Open-source development toolchain for authoring, testing and deploying prompt-based flows, integrated into Azure AI Foundry.
- **Pezzo** `[tool]` — Open-source prompt management and delivery platform with versioning, environments and usage tracking.
- **Priompt** `[tool]` — Open-source JSX-based library for composing and priority-budgeting prompt content within a context window.
- **PromptHub** `[tool]` — Commercial prompt management service offering version control, testing and team collaboration on prompts.
- **PromptLayer** `[tool]` — Prompt management platform with a visual registry, version history and deployment of prompts without code changes.

### Gateways & routers

- **aisuite** `[tool]` — Open-source Python library exposing a single OpenAI-style interface across multiple model provider SDKs.
- **Apache APISIX AI Gateway** `[tool]` — AI plugins for the Apache APISIX gateway providing model proxying, routing, caching and token limits.
- **Arch** `[tool]` — Katanemo's open-source AI-native proxy handling prompt routing, guardrails and tool-call resolution at the edge.
- **Azure API Management AI Gateway** `[tool]` — Azure APIM policies adding token limits, semantic caching, load balancing and observability for model endpoints.
- **Bifrost** `[tool]` — Open-source Go LLM gateway from Maxim AI offering a unified API, routing, caching and metrics.
- **Cloudflare AI Gateway** `[tool]` — Managed edge proxy for AI traffic providing caching, rate limiting, logging, analytics and dynamic routing.
- **Eden AI** `[tool]` — Aggregator API providing one interface to many AI providers across language, vision and speech tasks.
- **F5 AI Gateway** `[tool]` — F5's enterprise gateway inspecting and routing AI traffic with policy enforcement and traffic steering.
- **Gloo AI Gateway** `[tool]` — Solo.io's Envoy-based gateway adding model routing, prompt guards, credential management and rate limits.
- **GPTCache** `[tool]` — Open-source semantic cache storing LLM responses and serving them for embedding-similar repeat queries.
- **Higress AI Gateway** `[tool]` — Open-source Envoy-based cloud-native gateway from Alibaba with AI proxying, token rate limiting and caching.
- **Keywords AI** `[tool]` — Managed LLM gateway and observability service with routing, caching, rate limits and evaluation.
- **Kong AI Gateway** `[tool]` — AI extensions to the Kong API gateway adding model routing, authentication, rate limiting and prompt policies.
- **LangDB** `[tool]` — AI gateway providing unified provider access, routing, tracing, cost control and guardrails.
- **Martian** `[tool]` — Commercial model router that predicts the cheapest model able to answer a given request adequately.
- **Mosaic AI Gateway** `[tool]` — Databricks governance layer for model endpoints providing rate limits, permissions, payload logging and provider routing.
- **Not Diamond** `[tool]` — Model router that selects a model per query using a trained routing model over benchmark performance.
- **Portkey** `[tool]` — AI gateway and control plane providing routing, caching, budgets, guardrails and observability across model providers.
- **Requesty** `[tool]` — Managed LLM routing platform selecting models per request on cost, latency and quality signals.
- **RouteLLM** `[tool]` — Open-source framework from LMSYS training routers that send easy queries to cheaper models.
- **TensorZero** `[tool]` — Open-source LLMOps stack combining an LLM gateway with observability, evaluation, optimisation and experimentation.  ⚠ *Repository archived 12 June 2026; teams moved to LiteLLM, Portkey and similar gateways.*
- **Traefik AI Gateway** `[tool]` — Traefik Hub capability adding model routing, governance and API management for AI service traffic.
- **TrueFoundry AI Gateway** `[tool]` — Enterprise gateway providing multi-provider routing, budgets, guardrails, audit logs and self-hosted deployment.
- **Unify** `[tool]` — Routing service that dispatches each prompt to the endpoint scoring best on quality, cost and speed.

### Experiment tracking

- **Aim** `[tool]` — Open-source self-hosted experiment tracker with a fast comparison UI for large numbers of runs.
- **ClearML** `[tool]` — Open-source MLOps suite combining experiment tracking, orchestration, data management and model serving.
- **Comet ML** `[tool]` — Commercial experiment tracking and model management platform with real-time comparison, artifacts and registry.
- **DagsHub** `[tool]` — Hosted platform combining Git, DVC data versioning, experiment tracking, annotation and model registry.
- **Determined AI** `[tool]` — Open-source deep learning training platform with distributed training, experiment tracking and hyperparameter search.
- **DVCLive** `[tool]` — Open-source Python logging library that records experiment metrics and plots as Git-tracked DVC artifacts.
- **MLflow** `[tool]` — Open-source platform for experiment tracking, model packaging, registry, evaluation and GenAI tracing.
- **Neptune** `[tool]` — Hosted experiment tracker for monitoring large-scale training runs, metrics and model metadata.  ⚠ *Shut down 5 March 2026 after OpenAI's acquisition; users migrated to MLflow, Comet or Weights & Biases.*
- **Polyaxon** `[tool]` — Open-core platform for orchestrating, tracking and scaling machine learning experiments on Kubernetes.
- **Sacred** `[tool]` — Open-source Python library for configuring, organising and logging reproducible research experiments.  ⚠ *Largely unmaintained; superseded by MLflow, Aim and Weights & Biases.*
- **TensorBoard** `[tool]` — TensorFlow's open-source visualisation toolkit for training metrics, graphs, embeddings and profiling.
- **Weights & Biases (W&B)** `[tool]` — Commercial platform for experiment tracking, artifact versioning, hyperparameter sweeps, reports and model registry.

### Hyperparameter optimisation

- **Katib** `[tool]` — Kubeflow's Kubernetes-native component for hyperparameter tuning, early stopping and neural architecture search.

### Model registries

- **Azure Machine Learning Model Registry** `[tool]` — Azure catalogue registering model versions with lineage, tags and environment metadata for deployment.
- **BentoCloud** `[tool]` — BentoML's managed platform storing packaged models and Bento services and deploying them as scalable endpoints.
- **JFrog ML** `[tool]` — Enterprise MLOps platform for model registry, deployment and monitoring integrated with JFrog Artifactory.  ⚠ *Renamed from Qwak after JFrog's acquisition.*
- **Kubeflow Model Registry** `[tool]` — Kubeflow component storing model metadata, versions and artifact locations for Kubernetes-based deployment.
- **SageMaker Model Registry** `[tool]` — AWS catalogue of model package groups with versioning, approval status and deployment lineage.
- **Unity Catalog models** `[tool]` — Databricks governance layer registering models as catalog objects with permissions, lineage and cross-workspace sharing.
- **Vertex AI Model Registry** `[tool]` — Google Cloud catalogue of model versions with aliases, evaluation records and deployment tracking.

### Feature stores

- **Chronon** `[tool]` — Open-source feature platform from Airbnb computing batch and streaming features with backfill correctness guarantees.
- **Databricks Feature Store** `[tool]` — Databricks feature engineering layer registering feature tables in Unity Catalog with training-serving lineage.
- **Feast** `[tool]` — Open-source feature store defining, materialising and serving features consistently for training and inference.
- **Fennel** `[tool]` — Feature engineering platform defining Python feature pipelines with real-time computation and built-in data quality checks.
- **Hopsworks** `[tool]` — Open-core feature store and ML platform with online and offline stores, lineage and governance.
- **SageMaker Feature Store** `[tool]` — AWS managed store providing online and offline feature groups with time-travel retrieval.
- **Snowflake Feature Store** `[tool]` — Snowflake ML component defining and versioning feature views over governed warehouse tables.
- **Tecton** `[tool]` — Managed feature platform with declarative pipelines, streaming transformations and low-latency online feature serving.
- **Vertex AI Feature Store** `[tool]` — Google Cloud managed feature serving layer built on BigQuery with online serving and monitoring.

### Pipeline orchestration

- **Databricks Lakeflow** `[tool]` — Databricks unified framework for ingestion, declarative pipelines and job orchestration on the lakehouse.
- **dbt** `[tool]` — Transformation framework compiling templated SQL models into dependency-ordered warehouse builds with tests and documentation.
- **Kedro** `[tool]` — Open-source Python framework imposing reproducible project structure, data catalogues and modular pipelines on data science code.
- **Mage** `[tool]` — Open-source pipeline tool for building, running and monitoring data and machine learning workflows with a notebook-style UI.
- **SageMaker Pipelines** `[tool]` — AWS managed CI/CD orchestration service for machine learning workflow steps and artifact lineage.
- **TensorFlow Extended (TFX)** `[tool]` — Google's end-to-end library of production machine learning pipeline components for TensorFlow models.
- **Union** `[tool]` — Managed Flyte platform adding hosted execution, artifact management and cost controls.
- **Vertex AI Pipelines** `[tool]` — Google Cloud serverless runner for Kubeflow Pipelines and TFX workflow definitions.
- **ZenML** `[tool]` — Open-source MLOps framework defining portable pipelines that run on Airflow, Kubeflow, Vertex and other backends.

### Model serving

- **Cog** `[tool]` — Replicate's open-source tool packaging machine learning models into reproducible, deployable containers.
- **Knative** `[tool]` — Kubernetes-based serverless layer providing request-driven autoscaling and scale-to-zero used by model servers.
- **MLServer** `[tool]` — Open-source Python inference server from Seldon implementing the V2 inference protocol for multiple frameworks.
- **NVIDIA Triton Inference Server** `[tool]` — Open-source high-performance inference server running models from many frameworks on GPUs and CPUs.
- **Truss** `[tool]` — Baseten's open-source format and CLI for packaging models with their environment and serving code.

### MLOps platforms

- **Algorithmia** `[tool]` — Model deployment and MLOps platform for hosting inference endpoints and governing model versions.  ⚠ *Discontinued after DataRobot's acquisition; capabilities folded into the DataRobot platform.*
- **Anyscale** `[tool]` — Managed Ray platform for distributed training, batch inference and model serving.
- **Azure Machine Learning** `[tool]` — Microsoft's managed service for the machine learning lifecycle including compute, pipelines, registries and endpoints.
- **Databricks Mosaic AI** `[tool]` — Databricks product suite for training, fine-tuning, serving, evaluating and governing AI models on the lakehouse.
- **Dataiku** `[tool]` — End-to-end data science and AI platform combining visual pipelines, coding notebooks, deployment and governance.
- **Domino Data Lab** `[tool]` — Enterprise data science platform providing reproducible environments, compute orchestration, model deployment and governance.
- **H2O AI Cloud** `[tool]` — H2O.ai platform bundling automated machine learning, model operations, monitoring and generative AI tooling.
- **Iguazio** `[tool]` — Enterprise MLOps platform built around MLRun for pipeline automation, serving and monitoring.  ⚠ *Acquired by McKinsey's QuantumBlack; open-source MLRun continues as the successor.*
- **Kubeflow** `[tool]` — Open-source Kubernetes toolkit bundling components for training, pipelines, tuning, registry and serving.
- **Lightning AI** `[tool]` — Platform for developing, training and deploying models with PyTorch Lightning and cloud-hosted studios.
- **MLRun** `[tool]` — Open-source MLOps orchestration framework covering feature stores, pipelines, serving graphs and model monitoring.
- **Outerbounds** `[tool]` — Managed Metaflow platform providing hosted infrastructure for machine learning and agent workflows.
- **Red Hat OpenShift AI** `[tool]` — Kubernetes-based platform bundling notebooks, pipelines, model serving and monitoring for regulated on-premises deployments.
- **TrueFoundry** `[tool]` — Kubernetes-based platform for deploying, scaling and governing models, AI gateways and agent workloads.
- **Valohai** `[tool]` — Managed MLOps platform automating training pipelines, versioning and deployment across cloud and on-premises compute.

### Monitoring & drift

- **Alibi Detect** `[tool]` — Open-source Python library for outlier, adversarial and drift detection across tabular, text and image data.
- **Aporia** `[tool]` — Model observability platform for drift detection, custom monitors and LLM guardrails.  ⚠ *Acquired by Coralogix; capabilities folded into Coralogix AI Center.*
- **Arthur AI** `[tool]` — Enterprise platform monitoring model performance, drift, bias and generative output quality in production.
- **Bigeye** `[tool]` — Data observability platform providing automated data quality monitors, lineage and anomaly alerting.
- **Fiddler AI** `[tool]` — Enterprise AI observability platform monitoring performance, drift, explainability and LLM safety signals.
- **Metaplane** `[tool]` — Data observability tool monitoring warehouse tables for anomalies, schema changes and lineage impact.  ⚠ *Acquired by Datadog in 2025; folded into Datadog's data observability product.*
- **NannyML** `[tool]` — Open-core Python library estimating post-deployment model performance without labels and detecting drift.
- **Robust Intelligence** `[tool]` — AI validation platform running automated stress tests and runtime firewalls against model failures.  ⚠ *Acquired by Cisco in 2024; superseded by Cisco AI Defense.*
- **Superwise** `[tool]` — Model observability platform providing automated monitoring policies, drift detection and incident alerting.
- **TruEra** `[tool]` — Model intelligence platform for testing, debugging and monitoring model quality and drift.  ⚠ *Acquired by Snowflake in 2024; folded into Snowflake AI Observability and TruLens.*
- **WhyLabs** `[tool]` — AI observability platform built on whylogs profiles for drift, data quality and anomaly monitoring.  ⚠ *Hosted SaaS wound down in 2025; continues as open-sourced self-hosted platform and whylogs.*

### Data quality & validation

- **Cleanlab TLM** `[tool]` — Trustworthy Language Model API attaching confidence scores that flag potentially unreliable LLM responses.
- **Great Expectations** `[tool]` — Python framework declaring, running and documenting data quality expectations against datasets.

### Explainability & fairness

- **AI Fairness 360 (AIF360)** `[tool]` — IBM open-source toolkit providing fairness metrics and pre-, in- and post-processing bias mitigation algorithms.
- **Alibi** `[tool]` — Position method adding a linear distance-proportional penalty to attention scores instead of positional embeddings.
- **Captum** `[tool]` — PyTorch library implementing gradient and perturbation-based attribution methods for neural network interpretability.
- **Fairlearn** `[tool]` — Microsoft-originated Python package assessing fairness-related harms and applying mitigation algorithms.
- **LIME** `[tool]` — Open-source library explaining individual predictions by fitting interpretable models to local perturbations.
- **SHAP** `[tool]` — Python library computing Shapley-value feature attributions for individual and aggregate model predictions.
- **What-If Tool** `[tool]` — Google open-source visual interface for probing model behaviour, counterfactuals and fairness across data slices.

### Annotation & labelling

- **Amazon Mechanical Turk** `[tool]` — Crowdsourcing marketplace distributing small human intelligence tasks such as labelling and validation.
- **Appen** `[tool]` — Data annotation and collection company supplying human-labelled training data across languages and modalities.
- **Argilla** `[tool]` — Open-source data annotation and curation platform for LLM datasets, now part of Hugging Face.
- **CVAT** `[tool]` — Open-source computer vision annotation tool for image and video bounding boxes, polygons and tracking.
- **Dataloop** `[tool]` — Data management and annotation platform with pipeline automation for unstructured data.
- **doccano** `[tool]` — Open-source text annotation tool for classification, sequence labelling and sequence-to-sequence tasks.
- **Encord** `[tool]` — Data labelling and curation platform specialising in video, medical imaging and multimodal annotation workflows.
- **FiftyOne** `[tool]` — Voxel51's open-source tool for visualising, curating and evaluating image, video and 3D datasets.
- **Kili Technology** `[tool]` — Data labelling and quality platform for text, image and document annotation with review workflows.
- **Label Studio** `[tool]` — Open-source multi-type data labelling platform from HumanSignal supporting text, image, audio and video tasks.
- **Labelbox** `[tool]` — Enterprise data labelling and curation platform with model-assisted labelling, review workflows and human workforce.
- **LabelMe** `[tool]` — Open-source polygon-based image annotation tool originating from MIT CSAIL.
- **Lightly** `[tool]` — Platform and open-source library selecting the most informative samples from large unlabelled datasets.
- **Make Sense** `[tool]` — Free browser-based image annotation tool requiring no installation or account.
- **Mercor** `[tool]` — Marketplace supplying domain experts for AI training data, preference labelling and model evaluation.
- **MONAI Label** `[tool]` — Open-source AI-assisted medical image annotation server integrating with clinical viewers.
- **Prodigy** `[tool]` — Scriptable annotation tool from Explosion for active-learning-driven labelling of text and other data.
- **Prolific** `[tool]` — Participant recruitment platform sourcing vetted humans for research studies and model evaluation tasks.
- **Roboflow** `[tool]` — Computer vision platform combining dataset annotation, augmentation, versioning, training and deployment.
- **Sama** `[tool]` — Managed data annotation service provider delivering labelled training data with quality guarantees.
- **Scale AI** `[tool]` — Data annotation and evaluation company providing managed human labelling, RLHF data and expert evaluation services.
- **Segments.ai** `[tool]` — Annotation platform specialising in multi-sensor 2D image and 3D point cloud labelling.
- **Snorkel Flow** `[tool]` — Data-centric AI platform using programmatic labelling functions and weak supervision to create training data.
- **SuperAnnotate** `[tool]` — Annotation and data management platform with automation, quality control and managed labelling teams.
- **Supervisely** `[tool]` — Computer vision platform combining annotation, dataset management and model training in one environment.
- **Surge AI** `[tool]` — Human data platform supplying annotation, preference data and evaluation from vetted specialist workers.
- **Toloka** `[tool]` — Crowdsourcing platform for data labelling, model evaluation and expert data collection.
- **V7** `[tool]` — Annotation and document AI platform for image, video and document labelling with automated workflows.

### Synthetic data

- **Bespoke Curator** `[tool]` — Open-source library from Bespoke Labs for generating and curating synthetic post-training datasets.
- **Betterdata** `[tool]` — Synthetic data platform generating privacy-compliant structured data for regulated industries.
- **DataDreamer** `[tool]` — Open-source Python library for reproducible synthetic data generation and LLM workflow experiments.
- **distilabel** `[tool]` — Open-source Argilla framework building synthetic data and AI feedback pipelines for LLM training.
- **Faker** `[tool]` — Open-source library generating fake names, addresses and other placeholder values for tests and demos.
- **Gretel** `[tool]` — Synthetic data platform generating privacy-preserving tabular and text data with differential privacy options.  ⚠ *Acquired by NVIDIA in 2025; superseded by the open-source NeMo Data Designer.*
- **K2view** `[tool]` — Data product platform providing entity-based test data management and synthetic data generation.
- **MOSTLY AI** `[tool]` — Platform generating privacy-safe synthetic tabular and behavioural data through a no-code interface.
- **NVIDIA NeMo Curator** `[tool]` — Open-source GPU-accelerated library for cleaning, deduplicating, filtering and curating large training corpora.
- **NVIDIA NeMo Data Designer** `[tool]` — Open-source toolkit generating synthetic datasets for model training and evaluation using configurable pipelines.
- **NVIDIA Omniverse Replicator** `[tool]` — Framework generating physically accurate synthetic images and annotations from 3D scenes for vision training.
- **Parallel Domain** `[tool]` — Platform generating photorealistic synthetic image and sensor data for autonomous driving and robotics perception.
- **Synthea** `[tool]` — Open-source synthetic patient generator producing realistic longitudinal health records from population statistics.
- **Synthetic Data Vault (SDV)** `[tool]` — Open-source Python ecosystem generating synthetic tabular, relational and time-series data with quality metrics.
- **Syntho** `[tool]` — Synthetic data platform producing privacy-preserving replicas of relational databases for testing and analytics.
- **Tonic.ai** `[tool]` — Test and training data platform producing de-identified, synthetic structured and unstructured datasets.
- **YData Fabric** `[tool]` — Data-centric platform combining automated profiling with synthetic tabular, relational and time-series generation.

### Dataset versioning

- **DataChain** `[tool]` — Open-source Python library from Iterative for versioning and transforming unstructured datasets at scale.
- **Dolt** `[tool]` — Open-source SQL database with Git-style branching, diffing and merging of table data.
- **DVC (Data Version Control)** `[tool]` — Open-source tool versioning datasets and models alongside Git using content-addressed remote storage.
- **Git LFS** `[tool]` — Git extension replacing large files with pointers, storing the contents on a separate server.
- **lakeFS** `[tool]` — Open-source system adding Git-like branching, commits and rollback to object-storage data lakes.
- **Oxen.ai** `[tool]` — Open-source data version control tool optimised for large machine learning datasets with Git-like commands.
- **Pachyderm** `[tool]` — Kubernetes-based platform providing data versioning, lineage and automated containerised data pipelines.
- **Quilt** `[tool]` — Open-source platform packaging and versioning datasets in object storage with searchable catalogues.
- **XetHub** `[tool]` — Content-defined chunking storage system for versioning very large files in Git-like repositories.  ⚠ *Acquired by Hugging Face in 2024; superseded by Xet storage on the Hugging Face Hub.*

### Cost & performance

- **Grafana** `[tool]` — Open-source visualisation and dashboarding tool for metrics, logs and traces from multiple data sources.
- **GuideLLM** `[tool]` — Open-source benchmarking tool evaluating LLM serving latency, throughput and capacity under varying load.
- **Kubecost** `[tool]` — Cost monitoring product built on OpenCost providing Kubernetes spend allocation, forecasting and optimisation.
- **LLMPerf** `[tool]` — Open-source load-testing tool from the Ray project measuring LLM API latency and throughput.
- **NVIDIA DCGM Exporter** `[tool]` — Exporter publishing GPU utilisation, memory and health metrics in Prometheus format.
- **NVIDIA GenAI-Perf** `[tool]` — Benchmarking tool measuring time-to-first-token, inter-token latency and throughput for generative model endpoints.
- **OpenCost** `[tool]` — CNCF project and specification measuring and allocating Kubernetes infrastructure costs by workload.
- **Prometheus** `[tool]` — Open-source metrics collection and alerting system scraping time-series data from model servers and infrastructure.
- **tokencost** `[tool]` — Open-source Python library counting tokens and estimating request costs across model providers.

## Tools — safety, security, privacy and governance
*351 terms*

### Guardrails and moderation

- **Amazon Bedrock Guardrails** `[tool]` — AWS managed policy layer filtering content, topics, PII and hallucinations across foundation models.
- **Arthur Engine** `[tool]` — Arthur open-source guardrail and evaluation engine for validating LLM inputs and outputs.
- **Automated Reasoning checks** `[tool]` — Bedrock Guardrails feature verifying model output against formally encoded policy rules.
- **Azure AI Content Safety** `[tool]` — Microsoft managed service detecting harmful text and image content across severity-graded categories.
- **Cloudflare Firewall for AI** `[tool]` — Edge service inspecting LLM prompts for injection, PII and abuse before reaching model endpoints.
- **Code Shield** `[tool]` — Meta filter that blocks insecure code suggestions and unsafe command execution from LLM output.
- **Colang** `[tool]` — Domain-specific language used by NeMo Guardrails to script conversational flows and rail conditions.
- **Detoxify** `[tool]` — Open-source Python library scoring text toxicity using models trained on Jigsaw datasets.
- **Google Cloud Model Armor** `[tool]` — Managed service screening prompts and responses for injection, harmful content, sensitive data and malicious URLs.
- **Groundedness detection** `[tool]` — Azure AI Content Safety feature flagging model claims unsupported by supplied source material.
- **Guardrails AI** `[tool]` — Open-source Python framework for composing input and output validators around LLM calls.
- **Guardrails Hub** `[tool]` — Community registry of reusable validators installable into the Guardrails AI framework.
- **IBM Granite Guardian** `[tool]` — Open-weight IBM models detecting harm, jailbreaks, groundedness failures and agentic risks.
- **Lakera Guard** `[tool]` — Runtime API detecting prompt injection, data leakage and policy violations in LLM traffic.  ⚠ *Lakera acquired by Check Point; sold within the Check Point AI security platform.*
- **LlamaFirewall** `[tool]` — Meta open-source guardrail framework combining Prompt Guard, alignment checking and Code Shield for agents.
- **LLM Guard** `[tool]` — Open-source middleware chaining scanners that sanitise LLM prompts and responses.
- **NVIDIA NeMo Guardrails** `[tool]` — Open-source toolkit adding programmable input, output, dialog and tool-use rails to LLM applications.
- **NVIDIA Nemotron Safety Guard** `[tool]` — NVIDIA open-weight content-safety classifier trained on the Aegis harm taxonomy.
- **OpenAI Moderation API** `[tool]` — Hosted endpoint classifying text and images against OpenAI content-policy harm categories.
- **Perspective API** `[tool]` — Jigsaw hosted service scoring text for toxicity, insult, threat and related attributes.
- **Prompt Guard** `[tool]` — Meta open-weight classifier detecting prompt injection and jailbreak attempts in model inputs.
- **Prompt Shields** `[tool]` — Azure AI Content Safety feature detecting direct and indirect prompt-injection attacks.
- **Purple Llama** `[tool]` — Meta umbrella project bundling open trust-and-safety models, benchmarks and filters for generative AI.
- **ShieldGemma** `[tool]` — Google open-weight safety classifier family for text and image content moderation.
- **Snowflake Cortex Guard** `[tool]` — Snowflake managed filter screening Cortex LLM output for harmful content.
- **Vertex AI safety filters** `[tool]` — Configurable harm-category thresholds applied to Google Vertex AI model requests and responses.
- **WildGuard** `[tool]` — Allen Institute open moderation model classifying prompt harm, response harm and refusal.

### Prompt-injection defence

- **Dual LLM pattern** — Architecture pairing a privileged planning model with a quarantined model that alone touches untrusted content.
- **Gandalf** `[tool]` — Lakera browser game teaching prompt injection through progressively harder secret-extraction levels.
- **HeimdaLLM** `[tool]` — Open-source framework constraining LLM-generated SQL to a validated grammar and permission allowlist.
- **Known-answer detection** — Injection test embedding a canary instruction whose expected answer reveals whether input hijacked the model.
- **LangKit** `[tool]` — WhyLabs open-source library extracting safety and quality telemetry signals from prompts and responses.
- **Open-Prompt-Injection** `[tool]` — Research codebase benchmarking prompt-injection attacks and defences under a common formalisation.
- **PINT Benchmark** `[tool]` — Lakera benchmark measuring prompt-injection detector accuracy on a held-out labelled dataset.
- **promptmap** `[tool]` — Open-source scanner that automatically tests custom LLM applications for prompt-injection weaknesses.
- **Rebuff** `[tool]` — Open-source multi-layer prompt-injection detector combining heuristics, a classifier, vector similarity and canary tokens.
- **SecAlign** — Preference-optimisation defence training models to prefer responses ignoring injected instructions.
- **spikee** `[tool]` — WithSecure open-source toolkit generating and running prompt-injection test datasets against applications.
- **Spotlighting** — Defence marking untrusted input with delimiters, encoding or datamarking so models distinguish data from instructions.
- **StruQ** — Defence fine-tuning models on structured queries that separate instruction and data channels.
- **Vigil** `[tool]` — Open-source scanner assessing prompts for injection, jailbreak and related risks using modular detectors.

### Red teaming and adversarial testing

- **Agentic Security** `[tool]` — Open-source vulnerability scanner and fuzzer targeting LLM agents and their tool interfaces.
- **AI Red Teaming Agent** `[tool]` — Azure AI Foundry service that automatically probes deployed models and applications using PyRIT attacks.
- **AI Verify** `[tool]` — Singapore IMDA open-source testing framework and toolkit validating AI systems against governance principles.
- **Counterfit** `[tool]` — Microsoft command-line tool for automating adversarial attacks against machine learning models.  ⚠ *Maintenance mode; Microsoft directs generative-AI red teaming to PyRIT.*
- **EasyJailbreak** `[tool]` — Unified open-source framework implementing and comparing many published jailbreak attack methods.
- **FuzzyAI** `[tool]` — CyberArk open-source fuzzer applying jailbreak and obfuscation strategies to LLM endpoints.
- **GPTFuzzer** `[tool]` — Research tool mutating seed jailbreak templates to automatically discover new working prompts.
- **Gray Swan AI** `[tool]` — Company providing adversarial testing arenas, jailbreak evaluations and robustness-hardened models.
- **LLAMATOR** `[tool]` — Open-source red-teaming framework running configurable attack suites against chatbots and RAG systems.
- **llm-attacks (GCG)** `[tool]` — Reference implementation of greedy coordinate gradient search producing transferable adversarial suffixes.
- **Lynx** `[tool]` — Patronus AI open-weight model detecting hallucinations by checking answers against retrieved context.
- **Mindgard** `[tool]` — Commercial automated AI red-teaming platform testing deployed models and applications continuously.
- **nanoGCG** `[tool]` — Lightweight optimised reimplementation of the greedy coordinate gradient jailbreak attack.
- **Project Moonshot** `[tool]` — AI Verify Foundation open-source toolkit combining benchmarking and red teaming for LLM applications.
- **PromptBench** `[tool]` — Microsoft open-source library benchmarking LLM robustness to adversarial prompt perturbations.
- **SplxAI** `[tool]` — Commercial platform performing automated red teaming and runtime testing of AI agents.
- **Virtue AI** `[tool]` — Commercial platform combining automated red teaming with runtime guardrails for generative systems.

### Adversarial robustness libraries

- **Adversarial Robustness Toolbox (ART)** `[tool]` — Linux Foundation Python library implementing evasion, poisoning, extraction and inference attacks plus defences.
- **CleverHans** `[tool]` — Early library of adversarial example attacks and benchmarks for neural networks.  ⚠ *No longer actively developed; ART and Foolbox are the maintained alternatives.*
- **Foolbox** `[tool]` — Python library generating adversarial examples against PyTorch, TensorFlow and JAX models.
- **ML Privacy Meter** `[tool]` — Open-source tool auditing trained models for privacy leakage using membership inference attacks.
- **OpenAttack** `[tool]` — Open-source textual adversarial attack toolkit supporting multiple attack models and evaluation metrics.
- **PrivacyRaven** `[tool]` — Trail of Bits toolkit testing models for membership inference, extraction and inversion vulnerabilities.
- **RobustBench** `[tool]` — Standardised leaderboard and model zoo tracking adversarial and common-corruption robustness.
- **TextAttack** `[tool]` — Python framework for adversarial attacks, data augmentation and adversarial training on NLP models.
- **TorchAttacks** `[tool]` — PyTorch library providing standard adversarial attack implementations with a uniform interface.

### Safety benchmarks and datasets

- **AgentHarm** `[tool]` — Benchmark measuring whether LLM agents comply with explicitly harmful multi-step tasks.
- **BBQ (Bias Benchmark for QA)** `[tool]` — Question-answering dataset measuring social bias in model answers under ambiguous and disambiguated contexts.
- **CrowS-Pairs** `[tool]` — Paired-sentence dataset measuring model preference for stereotyping over anti-stereotyping statements.
- **CyberSecEval** `[tool]` — Meta benchmark suite measuring cybersecurity risks of models, including insecure code and offensive capability.
- **Do-Not-Answer** `[tool]` — Open dataset of prompts responsible models should decline, used to evaluate refusal behaviour.
- **HarmBench** `[tool]` — Standardised evaluation framework comparing automated red-teaming methods and refusal robustness.
- **HELM Safety** `[tool]` — Stanford CRFM holistic evaluation suite scoring language models on safety-oriented scenarios.
- **Inspect** `[tool]` — UK AI Security Institute open-source framework for writing and running large language model evaluations.
- **JailbreakBench** `[tool]` — Open benchmark with adversarial prompt artifacts and a leaderboard for jailbreak attacks and defences.
- **MLCommons AILuminate** `[tool]` — Benchmark suite grading generative systems across hazard categories, jailbreak resistance and agentic reliability.
- **RealToxicityPrompts** `[tool]` — Dataset of naturally occurring prompts used to measure toxic degeneration in language models.
- **StereoSet** `[tool]` — Dataset measuring stereotypical bias in language models across gender, profession, race and religion.
- **StrongREJECT** `[tool]` — Benchmark and grader measuring whether jailbreaks actually elicit useful harmful responses.
- **ToxiGen** `[tool]` — Machine-generated dataset of implicit hate statements for training and evaluating toxicity detectors.
- **TruthfulQA** `[tool]` — Benchmark of questions designed so imitation of common human misconceptions produces false answers.
- **WinoBias** `[tool]` — Coreference dataset measuring gender bias in pronoun resolution across occupations.
- **XSTest** `[tool]` — Test suite measuring exaggerated safety behaviour where models refuse benign prompts.

### Model and supply-chain security

- **AI Bill of Materials (AI BOM)** — Structured inventory listing a system's models, datasets, dependencies and provenance metadata.
- **Cosign** `[tool]` — Sigstore command-line tool signing and verifying container images and other artifacts.
- **CycloneDX ML-BOM** — OWASP CycloneDX extension expressing machine learning models and datasets inside a bill of materials.
- **Fickling** `[tool]` — Trail of Bits pickle decompiler and static analyser using allowlists to detect malicious payloads.
- **GuardDog** `[tool]` — Datadog open-source scanner identifying malicious PyPI and npm packages using metadata and code heuristics.
- **Hugging Face Hub malware scanning** `[tool]` — Platform pipeline scanning uploaded repositories for unsafe pickles, secrets and malware.
- **in-toto** — Framework and specification for cryptographically attesting each step of a software supply chain.
- **ModelAudit** `[tool]` — Promptfoo open-source model file scanner covering a broad range of serialisation formats.
- **ModelScan** `[tool]` — Open-source scanner detecting unsafe code embedded in serialised model files across multiple formats.
- **OpenSSF Model Signing** `[tool]` — Specification and library for signing machine learning model artifacts and verifying their provenance.
- **picklescan** `[tool]` — Open-source tool performing bytecode analysis of pickle files to flag dangerous imports.
- **Protect AI Guardian** `[tool]` — Commercial model scanning gateway enforcing policy on models entering an organisation.  ⚠ *Protect AI acquired by Palo Alto Networks; capability delivered within Prisma AIRS.*
- **Sigstore** `[tool]` — Open-source keyless signing and transparency-log infrastructure for software and model artifacts.
- **SLSA** — OpenSSF specification defining graded levels of supply-chain integrity for build provenance.
- **SPDX 3.0 AI and Dataset profiles** — SPDX specification sections describing AI models and datasets within software bills of materials.
- **Vulnhuntr** `[tool]` — Open-source tool using LLMs to trace data flows and find exploitable vulnerabilities in codebases.

### AI security platforms

- **CalypsoAI** `[tool]` — Commercial inference-defence and red-teaming platform for enterprise model deployments.  ⚠ *Acquired by F5 and integrated with the F5 AI Gateway.*
- **Cisco AI Defense** `[tool]` — Cisco platform providing AI asset discovery, model validation and runtime guardrails for enterprise AI.
- **Enkrypt AI** `[tool]` — Commercial platform pairing automated model red teaming with deployable guardrails.
- **HiddenLayer AISec Platform** `[tool]` — Commercial platform combining model scanning, runtime detection and response for machine learning assets.
- **Noma Security** `[tool]` — Commercial platform securing the AI and agent lifecycle from data pipelines through runtime.
- **Pillar Security** `[tool]` — Commercial platform for AI application discovery, threat detection and runtime protection.
- **Prisma AIRS** `[tool]` — Palo Alto Networks platform providing model scanning, posture management, red teaming and runtime AI security.
- **Prompt Security** `[tool]` — Runtime AI security product inspecting employee and application LLM traffic.  ⚠ *Acquired by SentinelOne and sold within its AI security offering.*
- **TrojAI** `[tool]` — Commercial products pairing pre-deployment model testing with runtime inference firewalling.
- **WitnessAI** `[tool]` — Commercial platform enforcing visibility, policy and data controls over enterprise generative AI usage.
- **Wiz AI-SPM** `[tool]` — AI security posture management module discovering AI services, models and data exposure in cloud accounts.
- **Zenity** `[tool]` — Commercial platform governing and securing low-code and AI agents such as copilots.

### Agent and MCP security

- **AgentDojo** `[tool]` — Dynamic benchmark evaluating prompt-injection attacks and defences against tool-calling agents.
- **agentgateway** `[tool]` — Open-source data-plane proxy governing agent-to-tool and agent-to-agent traffic with policy and observability.
- **agentic-radar** `[tool]` — Open-source scanner mapping agentic workflows and reporting their tools, prompts and vulnerabilities.
- **MCP Guardian** `[tool]` — Open-source proxy adding logging, approval workflows and policy enforcement to MCP tool calls.
- **mcp-context-protector** `[tool]` — Open-source wrapper interposing between clients and MCP servers to block tool poisoning and context manipulation.
- **mcp-scan** `[tool]` — Invariant Labs scanner inspecting Model Context Protocol servers for tool poisoning and unsafe descriptions.
- **MCP-Scanner** `[tool]` — Cisco open-source scanner evaluating Model Context Protocol servers and tools for security risks.
- **Ramparts** `[tool]` — Open-source security scanner analysing MCP servers for vulnerabilities before agents connect.
- **ToolHive** `[tool]` — Open-source runtime deploying MCP servers in isolated containers with secrets and permission controls.

### PII detection and redaction

- **Amazon Comprehend PII detection** `[tool]` — AWS NLP feature identifying and redacting personally identifiable entities in text.
- **Amazon Macie** `[tool]` — AWS service discovering and classifying sensitive data stored in S3 buckets.
- **Azure AI Language PII detection** `[tool]` — Microsoft managed API identifying and redacting personal information in text and conversation transcripts.
- **Google Cloud Sensitive Data Protection** `[tool]` — Managed service discovering, classifying and de-identifying sensitive data across many built-in information types.  ⚠ *Renamed from Cloud Data Loss Prevention (Cloud DLP).*
- **Microsoft Presidio** `[tool]` — Open-source SDK detecting and anonymising PII in text, images and structured data using configurable recognisers.
- **Nightfall AI** `[tool]` — Commercial data loss prevention platform classifying sensitive data across SaaS applications and AI traffic.
- **Piiranha** `[tool]` — Open-weight transformer model for token-level detection of personal information in text.
- **Private AI** `[tool]` — Commercial API detecting, redacting and replacing personal data across text, documents, audio and images.
- **scrubadub** `[tool]` — Lightweight Python library removing personal information from free text using rule-based cleaners.
- **Skyflow** `[tool]` — Commercial data privacy vault isolating and tokenising sensitive fields away from application databases.
- **Tonic Textual** `[tool]` — Commercial tool detecting and redacting sensitive entities in unstructured text for AI pipelines.

### Synthetic data and anonymisation

- **Anonymeter** `[tool]` — Open-source library measuring singling-out, linkability and inference risk in synthetic datasets.
- **ARX Data Anonymization Tool** `[tool]` — Open-source desktop tool applying k-anonymity, l-diversity and related models to tabular data.

### Differential privacy

- **diffprivlib** `[tool]` — IBM general-purpose Python library of differentially private mechanisms and machine learning models.
- **DP-Transformers** `[tool]` — Microsoft library adapting Hugging Face Transformers for differentially private fine-tuning.
- **Google differential-privacy** `[tool]` — Google open-source implementations of core differential privacy mechanisms in C++, Go and Java.
- **JAX Privacy** `[tool]` — Google DeepMind library for differentially private training and accounting in JAX.
- **Opacus** `[tool]` — PyTorch library training models with differentially private stochastic gradient descent and privacy accounting.
- **OpenDP** `[tool]` — Rust core library with Python bindings providing verified differentially private statistical measurements.
- **PipelineDP** `[tool]` — Python framework applying differentially private aggregations to large datasets on Beam and Spark.
- **PipelineDP4j** `[tool]` — JVM implementation of PipelineDP for differentially private aggregation in Java, Kotlin and Scala.
- **SmartNoise** `[tool]` — OpenDP toolkit providing differentially private SQL queries and synthetic data generators.
- **TensorFlow Privacy** `[tool]` — Google library implementing differentially private optimisers and privacy accounting for TensorFlow models.
- **Tumult Analytics** `[tool]` — Python framework for building differentially private aggregate queries over large Spark datasets.

### Federated learning

- **FATE** `[tool]` — Production-oriented federated learning platform supporting horizontal, vertical and transfer learning modes.
- **FedML** `[tool]` — Federated and distributed training library with an accompanying managed platform.  ⚠ *Rebranded as TensorOpera; the FedML library remains the open-source component.*
- **Flower** `[tool]` — Framework-agnostic open-source federated learning system for building distributed training across clients.
- **NVIDIA FLARE** `[tool]` — Enterprise federated learning framework with secure aggregation, admin tooling and audit trails.
- **OpenFL** `[tool]` — Linux Foundation federated learning framework originating at Intel, widely used in healthcare collaborations.
- **PySyft** `[tool]` — OpenMined library for remote data science, federated learning and privacy-preserving computation.
- **Substra** `[tool]` — Linux Foundation federated learning software for traceable multi-partner training on sensitive data.
- **TensorFlow Federated** `[tool]` — Google framework for expressing and simulating federated computations on decentralised data.

### Encrypted and confidential computation

- **AMD SEV-SNP** `[tool]` — AMD processor feature encrypting and integrity-protecting virtual machine memory from the hypervisor.
- **Apple Private Cloud Compute** `[tool]` — Apple architecture running server-side AI requests on attested, verifiable hardware with no retained user data.
- **AWS Nitro Enclaves** `[tool]` — Isolated compute environments on EC2 with cryptographic attestation and no persistent storage.
- **Azure Confidential Computing** `[tool]` — Microsoft services running workloads in hardware-based trusted execution environments with attestation.
- **Concrete** `[tool]` — Zama compiler framework turning Python numeric programs into fully homomorphic encryption circuits.
- **Concrete ML** `[tool]` — Zama library converting scikit-learn and neural network models into homomorphically encrypted inference.
- **Confidential Computing Consortium** — Linux Foundation body coordinating open standards and projects for trusted execution environments.
- **CrypTen** `[tool]` — Meta PyTorch-based framework for privacy-preserving machine learning using secure multiparty computation.
- **Google Confidential Space** `[tool]` — Google Cloud environment allowing mutually distrusting parties to jointly process data under attestation.
- **Gramine** `[tool]` — Open-source library OS running unmodified Linux applications inside Intel SGX enclaves.
- **HElib** `[tool]` — IBM C++ library implementing the BGV and CKKS homomorphic encryption schemes.
- **Intel SGX** `[tool]` — CPU extension creating encrypted enclaves that isolate code and data from the host system.
- **Lattigo** `[tool]` — Go library implementing lattice-based homomorphic encryption and multiparty protocols.
- **Microsoft SEAL** `[tool]` — C++ homomorphic encryption library implementing the BFV and CKKS schemes.
- **MP-SPDZ** `[tool]` — Benchmarking framework implementing many secure multiparty computation protocols under one interface.
- **NVIDIA Confidential Computing** `[tool]` — GPU capability running accelerated workloads inside hardware-protected memory with attestation.
- **OpenFHE** `[tool]` — Open-source library implementing major fully homomorphic encryption schemes with bootstrapping support.
- **PALISADE** `[tool]` — Lattice cryptography library providing homomorphic encryption primitives.  ⚠ *Superseded by OpenFHE, which continues its development.*
- **TenSEAL** `[tool]` — OpenMined Python library performing homomorphic encryption operations on tensors atop Microsoft SEAL.
- **TFHE-rs** `[tool]` — Zama Rust library implementing the TFHE scheme for boolean and integer homomorphic operations.

### Explainability and interpretability

- **AI Explainability 360 (AIX360)** `[tool]` — IBM open-source toolkit collecting explanation algorithms and metrics across data and model types.
- **DALEX** `[tool]` — R and Python package providing model-agnostic explanatory analysis and fairness diagnostics.
- **ELI5** `[tool]` — Python library inspecting and debugging classifiers with weight and prediction explanations.
- **Facets** `[tool]` — Google PAIR visualisation tool for exploring dataset distributions and individual examples.
- **iNNvestigate** `[tool]` — Library implementing layer-wise relevance propagation and related attribution methods for neural networks.
- **Inseq** `[tool]` — Python library for feature attribution and interpretability of sequence generation models.
- **Interpreto** `[tool]` — Open-source explainability library for transformer models covering attribution and concept-based methods.
- **Learning Interpretability Tool (LIT)** `[tool]` — Google browser-based platform for interactively probing and comparing NLP and multimodal model behaviour.  ⚠ *Renamed from Language Interpretability Tool as scope widened beyond NLP.*
- **OmniXAI** `[tool]` — Salesforce open-source library unifying explanation methods across tabular, vision, text and time-series models.
- **pytorch-grad-cam** `[tool]` — Library producing class activation map visualisations for convolutional and transformer vision models.
- **Quantus** `[tool]` — Python toolkit quantitatively evaluating the faithfulness and robustness of explanation methods.
- **Shapash** `[tool]` — Python library building interactive dashboards that present model explanations in business language.
- **Vertex Explainable AI** `[tool]` — Google Cloud managed feature attribution and example-based explanation service for deployed models.

### Mechanistic interpretability

- **BertViz** `[tool]` — Tool visualising attention heads and layers in transformer language models.
- **circuit-tracer** `[tool]` — Anthropic open-source library generating attribution graphs that trace computation through a model.
- **CircuitsVis** `[tool]` — Library rendering interactive attention and activation visualisations inside notebooks and web pages.
- **Ecco** `[tool]` — Python library visualising token saliency and hidden state evolution in language models.
- **Goodfire Ember** `[tool]` — Commercial API exposing interpretable model features for inspection and steering.
- **Neuronpedia** `[tool]` — Open platform hosting and visualising sparse autoencoder features and neuron explanations.
- **NNsight** `[tool]` — Library from the National Deep Inference Fabric for remote access and intervention on model internals.
- **Penzai** `[tool]` — Google JAX library for building, visualising and patching neural network internals as pytrees.
- **pyvene** `[tool]` — Stanford library defining and executing causal interventions on neural network representations.
- **SAELens** `[tool]` — Library for training, loading and analysing sparse autoencoders over language model activations.
- **Sparsify** `[tool]` — EleutherAI library for training sparse autoencoders and transcoders on model activations.
- **TransformerLens** `[tool]` — Python library exposing and intervening on internal activations of transformer language models.
- **ViT-Prisma** `[tool]` — Open-source mechanistic interpretability library for vision and multimodal transformer models.

### Fairness and bias

- **Aequitas** `[tool]` — Open-source bias audit toolkit reporting disparity metrics across protected groups for classifiers.
- **Amazon SageMaker Clarify** `[tool]` — AWS service detecting dataset and model bias and producing feature attribution explanations.
- **fairlib** `[tool]` — Unified open-source framework for assessing and improving classification fairness across debiasing methods.
- **Fairness Indicators** `[tool]` — TensorFlow library computing and visualising sliced fairness metrics at scale.
- **holisticai** `[tool]` — Open-source library measuring and mitigating bias, robustness, explainability and security risks.
- **LangTest** `[tool]` — John Snow Labs library generating and running robustness, bias and fairness tests for NLP models.
- **OxonFair** `[tool]` — Open-source fairness toolkit optimising thresholds against custom fairness and performance objectives.
- **Responsible AI dashboard** `[tool]` — Azure Machine Learning interface assembling Responsible AI Toolbox components for a registered model.
- **Responsible AI Toolbox** `[tool]` — Microsoft open-source suite combining error analysis, interpretability, fairness and causal inference components.
- **Responsibly** `[tool]` — Python toolkit for auditing and mitigating bias in classifiers and word embeddings.
- **Themis-ML** `[tool]` — Python library implementing fairness-aware machine learning algorithms on scikit-learn interfaces.

### Model documentation and transparency

- **AI FactSheets 360** — IBM methodology producing supplier declarations of conformity describing an AI service's properties.
- **Amazon SageMaker Model Cards** `[tool]` — AWS feature storing model documentation, intended use and risk ratings alongside registered models.
- **AWS AI Service Cards** — Amazon documents describing intended use, limitations and responsible design choices for AI services.
- **Croissant** — MLCommons metadata format describing machine learning datasets for discovery and loading.
- **Croissant-RAI** — Responsible AI extension of Croissant adding provenance, consent and risk metadata fields.
- **Data Cards Playbook** — Google framework and templates for producing structured transparency documentation about datasets.
- **Dataset Nutrition Label** — Standardised summary presenting dataset provenance, composition and known risks in a labelled format.
- **Datasheets for Datasets** — Documentation template recording a dataset's motivation, composition, collection process and recommended uses.
- **GPAI training-data summary template** — EU AI Office template requiring general-purpose model providers to publish a summary of training content.
- **Hugging Face model cards** `[tool]` — Repository-level README metadata standard describing models, licences, evaluation and intended use on the Hub.
- **Microsoft Transparency Notes** — Published documents describing capabilities, limitations and responsible use of Microsoft AI services.
- **Model Card Toolkit** `[tool]` — Google library generating structured model card documents from evaluation metadata.
- **Model cards** — Standardised short document reporting a model's intended use, performance across groups, and limitations.
- **Model Openness Framework** — Linux Foundation classification rating how completely a model's components and artifacts are released.
- **System cards** — Document describing a deployed AI system's evaluations, safeguards and residual risks beyond the model alone.

### Content provenance and watermarking

- **AudioSeal** `[tool]` — Meta open-source method for localised watermarking and detection of AI-generated speech.
- **C2PA** — Open technical specification for cryptographically binding provenance metadata to media assets.
- **Content Authenticity Initiative** — Adobe-led coalition promoting adoption of provenance metadata standards for digital media.
- **Content Credentials** — User-facing implementation of C2PA provenance manifests displayed on images, video and audio.
- **MarkLLM** `[tool]` — Open-source toolkit implementing and evaluating text watermarking algorithms for language models.
- **Reality Defender** `[tool]` — Commercial platform detecting synthetic and manipulated audio, image and video content.
- **Sensity AI** `[tool]` — Commercial deepfake detection and visual threat intelligence platform.
- **Stable Signature** `[tool]` — Meta method embedding a watermark directly into latent diffusion model weights.
- **SynthID** `[tool]` — Google DeepMind watermarking technology embedding imperceptible signals in generated images, audio, video and text.
- **SynthID Detector** `[tool]` — Google portal identifying whether supplied media contains a SynthID watermark.
- **SynthID-Text** `[tool]` — Open-sourced implementation of Google's sampling-based watermarking scheme for language model text.
- **Truepic** `[tool]` — Commercial provider of C2PA-based capture and verification for authenticated media.
- **VideoSeal** `[tool]` — Meta open-source neural watermarking framework for AI-generated video.

### Cloud platform safety services

- **Azure AI Foundry risk and safety evaluations** `[tool]` — Microsoft managed evaluators scoring generated content for harm categories, groundedness and jailbreak susceptibility.
- **Databricks Mosaic AI Gateway** `[tool]` — Managed gateway centralising model access with rate limits, PII controls and request logging.
- **Google Cloud AI Protection** `[tool]` — Security Command Center capability inventorying AI assets, assessing posture and detecting AI-specific threats.
- **Microsoft Defender for Cloud AI security posture management** `[tool]` — Capability discovering AI resources, misconfigurations and attack paths across cloud AI deployments.
- **Microsoft Purview DSPM for AI** `[tool]` — Data security posture management capability monitoring sensitive data flowing into generative AI applications.
- **Responsible Generative AI Toolkit** `[tool]` — Google collection of guidance, safety classifiers and debugging tools for building with open models.

### AI governance platforms

- **Credo AI** `[tool]` — Commercial AI governance platform managing registries, policy packs, assessments and compliance evidence.
- **Holistic AI** `[tool]` — Commercial AI governance and audit platform covering inventory, risk scoring and regulatory mapping.
- **IBM watsonx.governance** `[tool]` — Commercial toolkit for AI inventory, risk assessment, monitoring and regulatory reporting.
- **ModelOp** `[tool]` — Commercial AI governance and model operations platform for enterprise inventory and lifecycle controls.
- **Monitaur** `[tool]` — Commercial governance platform documenting model risk, controls and assurance evidence.
- **NIST Dioptra** `[tool]` — NIST open-source testbed for running reproducible experiments assessing machine learning system trustworthiness.
- **OneTrust AI Governance** `[tool]` — Module extending privacy management software to AI system inventory, risk assessment and approvals.
- **Securiti AI** `[tool]` — Commercial platform combining data command centre capabilities with AI system governance and controls.
- **Trustible** `[tool]` — Commercial AI governance platform mapping systems to regulatory obligations and required controls.

### Regulations and laws

- **AI Liability Directive** — Proposed EU directive easing the burden of proof for damage caused by AI systems.  ⚠ *Withdrawn by the European Commission in 2025; no replacement proposed.*
- **Algorithmic Recommendation Provisions** — Chinese regulation governing recommendation algorithms, requiring filing, user controls and transparency.
- **America's AI Action Plan** — US federal policy plan issued in 2025 setting priorities for AI innovation, infrastructure and security.
- **Brazil PL 2338/2023** — Brazilian AI bill establishing risk-based obligations, approved by the Senate and pending in the Chamber of Deputies.
- **California AB 2013** — State law requiring generative AI developers to publish documentation about training datasets.
- **California AI Transparency Act (SB 942)** — State law requiring large generative AI providers to offer content provenance disclosures and detection tools.
- **California SB 1047** — Proposed frontier model safety bill passed by the legislature in 2024.  ⚠ *Vetoed; the narrower SB 53 was enacted in its place.*
- **California SB 53 (TFAIA)** — Transparency in Frontier Artificial Intelligence Act requiring frontier developers to publish safety frameworks and report incidents.
- **Canada AIDA** — Artificial Intelligence and Data Act proposed within Bill C-27.  ⚠ *Died when Parliament was prorogued in 2025; no successor bill enacted.*
- **CCPA ADMT regulations** — California Privacy Protection Agency rules governing automated decision-making technology, risk assessments and cybersecurity audits.
- **Chinese AI content labelling measures** — Rules effective September 2025 mandating explicit and implicit labels on AI-generated content.
- **Colorado AI Act (SB 24-205)** — State law imposing duties on developers and deployers of high-risk AI to prevent algorithmic discrimination.
- **Council of Europe Framework Convention on AI** — First binding international treaty aligning AI with human rights, democracy and the rule of law.
- **Deep Synthesis Provisions** — Chinese regulation governing synthetically generated media, requiring labelling and provider registration.
- **Digital Services Act (DSA)** — EU regulation imposing content moderation, systemic risk assessment and transparency duties on online platforms.
- **EU AI Act** — Regulation (EU) 2024/1689 setting risk-tiered obligations for AI systems and general-purpose models across the Union.
- **EU AI Act GPAI obligations** — Transparency, copyright and systemic-risk duties for general-purpose model providers, applicable since August 2025.
- **EU AI Act high-risk obligations** — Requirements for Annex III systems applying from August 2026, with Article 6(1) product-embedded systems from August 2027.
- **EU AI Act prohibitions** — Bans on unacceptable-risk practices such as social scoring and untargeted facial scraping, applicable since February 2025.
- **EU Cyber Resilience Act** — Regulation setting cybersecurity requirements for products with digital elements placed on the EU market.
- **EU Data Act** — Regulation on fair access to and use of data generated by connected products and related services.
- **EU Digital Omnibus** — European Commission package proposed in late 2025 to simplify digital rules and postpone parts of the AI Act.
- **Executive Order 14110** — US order on safe, secure and trustworthy AI issued in 2023.  ⚠ *Revoked in January 2025 and replaced by Executive Order 14179.*
- **Executive Order 14179** — US order removing perceived barriers to AI leadership and directing a national AI action plan.
- **FDA predetermined change control plan (PCCP)** — US regulatory mechanism authorising planned modifications to AI-enabled medical devices without new submissions.
- **GDPR** — EU regulation governing lawful processing, data subject rights and automated decision-making over personal data.
- **GPAI Code of Practice** — Voluntary EU code published July 2025 detailing transparency, copyright and safety commitments for general-purpose model providers.
- **Illinois BIPA** — Biometric Information Privacy Act requiring consent before collecting biometric identifiers such as face templates.
- **Illinois HB 3773** — Amendment to the Illinois Human Rights Act restricting discriminatory AI use in employment decisions.
- **India AI Governance Guidelines** — Non-binding national framework issued in 2025 setting principles and institutional arrangements for AI oversight.
- **India DPDP Act 2023** — Indian statute governing processing of digital personal data, with implementing rules notified in 2025.
- **Interim Measures for Generative AI Services** — Chinese regulation governing public-facing generative AI services, including filing, content and training data requirements.
- **Japan AI Promotion Act** — Japanese law establishing a light-touch national framework promoting AI research, development and utilisation.
- **Korea AI Framework Act** — South Korean statute establishing AI governance duties and high-impact system obligations, effective January 2026.
- **NYC Local Law 144** — New York City law requiring bias audits and notices for automated employment decision tools.
- **OMB M-25-21 and M-25-22** — US memoranda directing federal agencies on accelerating AI use and on AI acquisition practices.
- **SR 11-7** — US Federal Reserve and OCC supervisory guidance on model risk management for financial institutions.
- **Texas TRAIGA (HB 149)** — Texas Responsible Artificial Intelligence Governance Act prohibiting specified intentional harmful AI uses and creating a regulatory sandbox.
- **Utah AI Policy Act** — State law requiring disclosure when consumers interact with generative AI in regulated occupations.

### Standards and management systems

- **CEN-CENELEC JTC 21** — European technical committee drafting harmonised standards supporting conformity with the EU AI Act.
- **IEEE 7000 series** — Family of standards on ethical system design, transparency, algorithmic bias and data privacy processes.
- **IEEE CertifAIEd** — IEEE certification programme assessing AI systems against ethics criteria such as transparency and accountability.
- **ISO/IEC 22989:2022** — Standard establishing artificial intelligence concepts and terminology.
- **ISO/IEC 23053:2022** — Standard defining a framework for AI systems using machine learning.
- **ISO/IEC 23894:2023** — Guidance standard applying risk management principles to artificial intelligence development and use.
- **ISO/IEC 27001** — Standard specifying requirements for an information security management system.
- **ISO/IEC 42001:2023** — Standard specifying requirements for an artificial intelligence management system, certifiable by accredited bodies.
- **ISO/IEC 42005:2025** — Standard giving guidance on conducting AI system impact assessments.
- **ISO/IEC 42006:2025** — Standard setting requirements for bodies auditing and certifying AI management systems.
- **ISO/IEC 5259 series** — Multi-part standard on data quality for analytics and machine learning.
- **ISO/IEC TR 24027:2021** — Technical report addressing bias in AI systems and AI-aided decision making.
- **ISO/IEC TR 24028:2020** — Technical report surveying approaches to establishing trustworthiness in artificial intelligence.
- **ISO/IEC TR 24029 series** — Technical reports on assessing the robustness of neural networks.

### Risk and security frameworks

- **Arsenal** `[tool]` — MITRE plugin adding ATLAS adversarial machine learning techniques to the Caldera emulation platform.
- **ATLAS Navigator** `[tool]` — Interactive matrix tool for exploring and annotating MITRE ATLAS tactics and techniques.
- **CSA AI Controls Matrix (AICM)** — Cloud Security Alliance control framework specifying security objectives for AI systems and services.
- **Google Secure AI Framework (SAIF)** — Google conceptual framework and risk self-assessment for securing AI systems across the lifecycle.
- **MAESTRO** — Cloud Security Alliance layered threat modelling methodology for agentic AI architectures.
- **Microsoft Responsible AI Standard** — Internal Microsoft standard defining required goals and practices for responsible AI product development.
- **MITRE ATLAS** — Knowledge base of adversary tactics and techniques against AI systems, modelled on ATT&CK.
- **NCSC Guidelines for Secure AI System Development** — Joint international guidance covering secure design, development, deployment and maintenance of AI systems.
- **NIST AI 100-2** — NIST taxonomy and terminology of adversarial machine learning attacks and mitigations.
- **NIST AI 600-1** — Generative AI Profile of the AI RMF identifying generative-specific risks and suggested mitigating actions.
- **NIST AI Risk Management Framework (AI RMF 1.0)** — Voluntary US framework organising AI risk management into govern, map, measure and manage functions.
- **NIST AI RMF Playbook** — Companion resource suggesting concrete actions, references and documentation for each AI RMF subcategory.
- **NIST ARIA** — NIST programme assessing risks and impacts of AI through scenario-based societal evaluation.
- **NIST Cybersecurity Framework 2.0** — Voluntary framework organising cybersecurity outcomes across govern, identify, protect, detect, respond and recover.
- **NIST SP 800-218A** — Secure software development practices supplement addressing generative AI and dual-use foundation models.
- **OWASP Agentic Security Initiative** — OWASP workstream cataloguing threats and mitigations for autonomous and tool-using AI agents.
- **OWASP AI Exchange** — Open community resource consolidating AI security threats, controls and mappings to standards.
- **OWASP Machine Learning Security Top 10** — Ranked list of common security risks specific to machine learning systems and pipelines.
- **OWASP Top 10 for LLM Applications** — Ranked list of the most critical security risks in large language model applications.

### Oversight bodies and international initiatives

- **EU AI Office** — European Commission body overseeing general-purpose AI rules, codes of practice and AI Act implementation.
- **Frontier AI Safety Commitments** — Voluntary pledges made at the Seoul summit for developers to publish safety frameworks and risk thresholds.
- **Frontier Model Forum** — Industry body coordinating frontier AI safety research, best practices and information sharing.
- **Hiroshima AI Process Reporting Framework** — G7-backed voluntary transparency reporting mechanism for organisations developing advanced AI systems.
- **International AI Safety Report** — Expert-led synthesis of evidence on advanced AI capabilities and risks, produced for international summits.
- **International Network of AI Safety Institutes** — Cooperation forum linking national AI safety and security institutes on joint testing and research.
- **OECD AI Principles** — Intergovernmental principles for trustworthy AI covering transparency, robustness, accountability and human-centred values.
- **OECD Framework for the Classification of AI Systems** — Structured method for characterising AI systems by people, economic context, data, model and task.
- **Partnership on AI** — Multistakeholder nonprofit publishing guidance including safe foundation model deployment practices.
- **UK AI Security Institute** — UK government research body evaluating advanced AI capabilities and risks.  ⚠ *Renamed from AI Safety Institute in 2025 with a sharpened security remit.*
- **UNESCO Recommendation on the Ethics of AI** — Global standard-setting instrument on AI ethics adopted by UNESCO member states.
- **US Center for AI Standards and Innovation (CAISI)** — US Commerce Department body evaluating AI systems and developing measurement standards.  ⚠ *Renamed from the US AI Safety Institute in 2025.*

### Frontier safety policies

- **Anthropic Responsible Scaling Policy** — Company framework defining AI Safety Level capability thresholds and the safeguards required at each.
- **Google DeepMind Frontier Safety Framework** — Company framework defining critical capability levels and mitigations for frontier model risks.
- **Meta Frontier AI Framework** — Company framework classifying frontier model outcomes and deciding release based on catastrophic risk thresholds.
- **OpenAI Preparedness Framework** — Company framework tracking tracked risk categories and gating deployment on capability thresholds.

### Incident and vulnerability databases

- **0din** `[tool]` — Mozilla 0-Day Investigative Network bug bounty programme for generative AI vulnerabilities.
- **AI Incident Database (AIID)** `[tool]` — Public repository documenting real-world harms caused by deployed AI systems, run by the Responsible AI Collaborative.
- **AI Vulnerability Database (AVID)** `[tool]` — Open knowledge base of general-purpose AI failure modes with reproducible evaluation evidence.
- **AIAAIC Repository** `[tool]` — Independent open register of incidents and controversies involving AI, algorithms and automation.
- **CVE Program** — Programme assigning unique identifiers to publicly disclosed software vulnerabilities, including AI framework flaws.
- **CWE** — Community catalogue of software and hardware weakness types, extended with AI-specific entries.
- **huntr** `[tool]` — Bug bounty platform dedicated to vulnerabilities in open-source AI and machine learning software.
- **MIT AI Risk Repository** `[tool]` — Living database consolidating AI risks from published frameworks into causal and domain taxonomies.
- **MITRE AI Incident Sharing** `[tool]` — Trusted community initiative collecting and distributing anonymised AI security incident reports.
- **OECD AI Incidents and Hazards Monitor (AIM)** `[tool]` — OECD tool tracking reported AI incidents and hazards from global news sources.

---

## Unverified

Flagged during research and deliberately not asserted.

- **[Mathematics, statistics and optimisation]** Whether Muon, SOAP and Shampoo have moved from research use into default production LLM training optimisers by 2026, or whether AdamW remains the standard; I did not verify adoption, only that all are actively studied.
- **[Mathematics, statistics and optimisation]** Whether the MXFP4 (32-value blocks, power-of-two scale) and NVFP4 (16-value blocks, E4M3 scale) specifications hold beyond the Blackwell hardware generation; I list the generic 'Microscaling (MX) formats' term rather than asserting vendor-specific block sizes as stable.
- **[Mathematics, statistics and optimisation]** HiFloat8 (HiF8) appeared in search results as an 8-bit format with tapered mantissa, but I could not confirm it is a standardised or widely implemented format, so it is excluded.
- **[Mathematics, statistics and optimisation]** Whether 'always-valid inference' or 'anytime-valid inference' is the settled canonical name for the e-value/sequential-testing family; both are in current use.
- **[Mathematics, statistics and optimisation]** Whether 'e-process' should be listed as a separate term from 'e-value'; the distinction is real in the literature but I could not confirm it is standard curriculum vocabulary.
- **[Python and data engineering]** Current maintenance status of Vaex — it is a real out-of-core Python dataframe library, but I could not verify whether it is still actively developed in 2026, so I left it out of the term list.
- **[Python and data engineering]** Petastorm (Parquet-to-tensor dataset library) — appears to be archived/unmaintained, but I could not confirm its status, so it is excluded.
- **[Python and data engineering]** Apache Flume — I could not confirm whether it has formally moved to the Apache Attic, only that Kafka Connect and modern ingestion tools have displaced it. Excluded rather than annotated incorrectly.
- **[Python and data engineering]** The pandas/dataframe interchange protocol (__dataframe__) — I could not verify whether it is now formally deprecated in favour of the Arrow PyCapsule interface, so it is excluded.
- **[Python and data engineering]** Kafka diskless topics (KIP-1150) — I found no confirmation that this has shipped in a stable Kafka release, so it is excluded.
- **[Python and data engineering]** Exact GA status of Kafka share groups (queues, KIP-932): reported as early access in 4.0, preview in 4.1, with production-ready targeted for 4.2. I have included the term but not its release status.
- **[Python and data engineering]** Prefect's announced acquisition of Dagster Labs was reported as not yet closed, with both products continuing independently. I therefore added no deprecation note to either Prefect or Dagster.
- **[Python and data engineering]** Astral's 'ty' type checker and the 'nab' Python locking project are referenced in 2026 sources but appear pre-1.0; I excluded both rather than assert stable tooling.
- **[Python and data engineering]** Whether pip-tools should now carry a superseded note — it is still published, but uv's pip compile/sync is the recommended path for new projects. I excluded the term rather than annotate ambiguously.
- **[Databases, SQL, warehousing and data governance]** DAMA-DMBOK 3.0 is described in 2026 vendor sources as in active development; I could not verify a published release date from DAMA International itself.
- **[Databases, SQL, warehousing and data governance]** DuckLake's current version and production readiness: sources report v0.3 as of late 2025 with ecosystem support largely limited to DuckDB and MotherDuck; I did not verify a 2026 version number.
- **[Databases, SQL, warehousing and data governance]** Whether the Data Contract Specification (datacontract.com) and ODCS have formally converged; ODCS was at v3.1.0 under Bitol at the time of checking, but I could not confirm the very latest version.
- **[Databases, SQL, warehousing and data governance]** The Singer tap/target specification's current maintenance status; I omitted it rather than assert it is active or dormant.
- **[Databases, SQL, warehousing and data governance]** Datafold's current commercial status could not be verified, so it is not listed as a tool.
- **[Databases, SQL, warehousing and data governance]** re_data (open-source dbt data reliability package) appears low-activity; I could not confirm whether it is maintained in 2026.
- **[Databases, SQL, warehousing and data governance]** Apache Atlas is still an Apache project; my note that it is 'largely superseded' reflects analyst commentary about non-Hadoop stacks, not an official deprecation.
- **[Databases, SQL, warehousing and data governance]** Hive Metastore and Apache Hive are not formally deprecated; the notes reflect their legacy status in new lakehouse deployments rather than an end-of-life announcement.
- **[Databases, SQL, warehousing and data governance]** Exact scope of Iceberg v3 adoption per engine varies; some v3 features (deletion vectors, row lineage, variant) reached general availability on different platforms at different dates during 2025-2026.
- **[Databases, SQL, warehousing and data governance]** Whether Apache Gravitino and Lakekeeper have reached Apache top-level or 1.0 stability respectively was not verified; Apache Polaris graduation to top-level was confirmed for early 2026.
- **[Classical and tabular machine learning]** scikit-optimize (skopt) — could not confirm whether it is still actively maintained in 2026; omitted rather than listed with a currency note.
- **[Classical and tabular machine learning]** modAL — last release appears to be 2023, but no explicit deprecation statement was found, so no maintenance note was attached.
- **[Classical and tabular machine learning]** An open PyOD issue argues COPOD is mathematically equivalent to ECOD and should be deprecated; this is a community claim, not an official deprecation, so both are listed without notes.
- **[Classical and tabular machine learning]** TabPFN generation naming (v2 / 2.5 / a reported TabPFN-3 technical report) and TabICLv2 — the family is clearly current but exact current release naming could not be pinned down, so only the model families are listed.
- **[Classical and tabular machine learning]** Exact current library versions (scikit-learn 1.8/1.9, XGBoost 3.x, LightGBM 4.x, CatBoost 1.2.x) were seen in search results but are not asserted in definitions since they move quickly.
- **[Classical and tabular machine learning]** BalanceCascade — implemented historically in imbalanced-learn but may have been removed from recent releases; listed as a concept rather than as a current API.
- **[Classical and tabular machine learning]** Whether scikit-learn's standalone hdbscan dependency is now fully replaced by the built-in sklearn.cluster.HDBSCAN for all use cases.
- **[Classical and tabular machine learning]** Boundaries with adjacent modules: interpretability tooling (SHAP, LIME, InterpretML) and evaluation metrics (ROC AUC, F1, PR curves) were largely excluded on the assumption they belong to other glossary modules.
- **[Evaluation, experimentation and causal inference]** Reported 2026 rebrand of LMArena to simply "Arena" (arena.ai) appeared only in low-quality SEO sources; I could not confirm it against the project's own site, so I listed the entry as "Chatbot Arena (LMArena)" without a rename note.
- **[Evaluation, experimentation and causal inference]** Exact current version numbers and release status of several fast-moving agentic benchmarks (SWE-bench Pro, tau-2-bench, BFCL v4, ARC-AGI-2 vs a possible ARC-AGI-3) — the families are real, but I did not verify which version is canonical in August 2026, so I named the families rather than pinned versions.
- **[Evaluation, experimentation and causal inference]** Maintenance status of CausalNex (QuantumBlack): I have seen reports it is no longer actively developed, but could not confirm, so it is omitted rather than listed with a deprecation note.
- **[Evaluation, experimentation and causal inference]** Whether the Hugging Face Open LLM Leaderboard archival was March 2025 specifically; the archival itself is well attested but I stated only "2025".
- **[Evaluation, experimentation and causal inference]** Papers with Code shutdown: widely reported as mid-2025 with redirection to Hugging Face; exact date and the completeness of the redirect are unverified.
- **[Evaluation, experimentation and causal inference]** Current canonical name/version of the OpenAI Evals framework and of TruLens — both exist but their present maintenance posture in 2026 was not verified, so OpenAI Evals and TruLens are omitted from the tooling list.
- **[Evaluation, experimentation and causal inference]** Whether FLD+ , TopP&R and other recent generative-evaluation metrics have achieved enough adoption to count as standard curriculum terms; they appear in the literature but were excluded as not yet canonical.
- **[Evaluation, experimentation and causal inference]** Named commercial experimentation platforms (Statsig, Eppo, Optimizely, GrowthBook) are real, but the specific statistical features I attributed to each were not re-verified against current documentation.
- **[Deep learning fundamentals, training and systems]** Derf, described in one late-2025 source as a Dynamic Tanh successor using a scaled error function: could not verify the name, paper or any adoption, so excluded.
- **[Deep learning fundamentals, training and systems]** Whether Horovod is formally archived or only in maintenance under LF AI as of 2026 — the note says maintenance mode, but the precise governance status is unverified.
- **[Deep learning fundamentals, training and systems]** PSGD / Kron preconditioned-gradient optimisers: the research line is real, but I could not confirm the canonical 2026 naming or adoption level, so they were excluded from the optimiser family.
- **[Deep learning fundamentals, training and systems]** HBM4 shipping status in production training accelerators during 2026 — I listed only the generic HBM term rather than a specific generation.
- **[Deep learning fundamentals, training and systems]** Exact deprecation timeline for FSDP1 versus FSDP2: sources say FSDP2 is the PyTorch 2.6+ default with FSDP1 kept for compatibility and receiving no new features, but no formal removal date was confirmed, so no deprecation note was attached.
- **[Deep learning fundamentals, training and systems]** '5D parallelism' appears informally in some 2026 writing; I could not confirm it as a canonical term and used '3D parallelism' plus the individual axes instead.
- **[Deep learning fundamentals, training and systems]** Whether 'sandwich normalisation' or 'peri-layer normalisation' is now the preferred canonical name for pre-and-post residual normalisation.
- **[Deep learning fundamentals, training and systems]** AdaGC (adaptive per-tensor gradient clipping) is real and published, but I could not verify production adoption, so only the generic 'adaptive gradient clipping' entry and ZClip were included.
- **[Neural network architectures]** Lightning attention (MiniMax-01) and DeepSeek sparse attention (DSA) appear in secondary 2025-2026 sources; I could not verify their canonical definitions or continued use, so they are omitted from terms.
- **[Neural network architectures]** Liquid-S4 and Mega-S4 appear in SSM survey listings; their independent status versus being survey-only groupings is unverified.
- **[Neural network architectures]** KERPLE and other kernelised relative-position biases are real published methods, but current adoption in 2026 models is unverified.
- **[Neural network architectures]** DeltaProduct (Householder-product state updates in linear RNNs) is published but I could not confirm whether it is established enough for a core glossary.
- **[Neural network architectures]** Bayesian flow networks and cold diffusion are real published variants; whether they remain distinct categories in the current diffusion taxonomy, rather than being folded into discrete diffusion and generalised corruption, is unverified.
- **[Neural network architectures]** Production hybrid Mamba-Transformer model lines such as Nemotron-H and Falcon-H1 are referenced in 2025-2026 material; exact naming and current status not verified.
- **[Neural network architectures]** Whether Reformer, Linformer and Performer should carry deprecation notes is a judgement call: they are still cited academically but rarely used in production, where FlashAttention plus GQA dominate.
- **[Neural network architectures]** Exact 2026 status of FlashAttention-3 beyond Hopper-generation GPUs (for example Blackwell support) was not verified.
- **[Vision, audio, multimodal, recommenders, time series and RL]** Prophet's maintenance-mode status is widely reported but I could not re-verify an official 2026 statement from Meta; treat the currency note as provisional.
- **[Vision, audio, multimodal, recommenders, time series and RL]** Whether Farama Minari has fully superseded D4RL in practice, or the two coexist, is not settled — the note reflects the maintained-successor framing, not universal adoption.
- **[Vision, audio, multimodal, recommenders, time series and RL]** Version-level currency of time series foundation models (Chronos-2, TimesFM 2.5, Moirai 2.0, Chronos-Bolt) was seen in search results but not verified model by model; definitions are kept at family level deliberately.
- **[Vision, audio, multimodal, recommenders, time series and RL]** UTMOS and other automatic MOS predictors were omitted because I could not confirm which predicted-MOS metric is standard in 2026.
- **[Vision, audio, multimodal, recommenders, time series and RL]** Production adoption breadth of semantic-ID generative recommenders (reported at Snapchat, YouTube, Pinterest, Meituan) comes from secondary sources, not primary engineering disclosures.
- **[Vision, audio, multimodal, recommenders, time series and RL]** I omitted specific multimodal benchmark names (MMMU, MMBench, and similar) as they belong more properly to an evaluation module and their 2026 standing was not checked.
- **[Vision, audio, multimodal, recommenders, time series and RL]** NeRF being 'largely superseded' by 3D Gaussian Splatting is true for real-time novel view synthesis but NeRF variants remain active in research; the note is scoped to that use.
- **[Vision, audio, multimodal, recommenders, time series and RL]** cpWER and semantic WER are described in 2026 industry sources as increasingly standard for multi-speaker ASR, but I did not confirm a formal standardisation body definition.
- **[NLP, tokenisation, embeddings and vector search]** Exact 2026 MTEB leaderboard ordering: sources variously place Qwen3-Embedding, Gemini Embedding and a model named QZhou-Embedding at the top. I included the model families but no ranking claims, and did not include QZhou-Embedding as a term because I could not verify it independently.
- **[NLP, tokenisation, embeddings and vector search]** Gemini Embedding version history: one blog claims a 'Gemini Embedding 2' all-modality release in March 2026 with 3072 dimensions. I defined the family generically rather than asserting that version.
- **[NLP, tokenisation, embeddings and vector search]** Very recent tokeniser research surfaced in searches but not yet established: LiteToken (BPE merge-residue removal, Feb 2026), MinGram (minimalist unigram tokeniser, Jun 2026), and STRR as an alternative to fertility for multilingual tokeniser evaluation. Excluded as unproven preprint work.
- **[NLP, tokenisation, embeddings and vector search]** Maintenance status of Microsoft SPTAG and Yahoo Japan NGT: both appear to be low-activity, but I could not confirm deprecation, so SPTAG was omitted and NGT carries no currency note.
- **[NLP, tokenisation, embeddings and vector search]** RaBitQ variants: the multi-bit 'Extended RaBitQ' and GPU/IVF-RaBitQ implementations appear in 2025-2026 papers. I listed only base RaBitQ, as the naming of the extensions is not yet stable.
- **[NLP, tokenisation, embeddings and vector search]** Annoy's successor: Spotify appears to have shifted to an HNSW-based library, but I could not confirm the replacement's status, so the note says only that graph-based libraries are the usual replacement.
- **[NLP, tokenisation, embeddings and vector search]** Whether ColBERTv1, monoBERT and doc2query should carry deprecation notes. They are largely superseded in practice by ColBERTv2/PLAID, LLM rerankers and docTTTTTquery respectively, but they are still cited as live baselines, so I left notes off.
- **[NLP, tokenisation, embeddings and vector search]** Alpha (Vamana pruning parameter) and search list size L are named as I have seen them in the DiskANN literature and implementations; parameter names differ across vector database vendors.
- **[Large language models — training, adaptation, generation]** torchtune (PyTorch fine-tuning library): I could not verify its 2026 maintenance status, so I left it out rather than list it as current or mark it deprecated.
- **[Large language models — training, adaptation, generation]** Jsonformer: a real early structured-output library, but I could not confirm it is still maintained in 2026, so it is omitted.
- **[Large language models — training, adaptation, generation]** 'Sleep-time compute' (pre-computing reasoning about context before a query arrives): appears to be genuine 2025 research but I could not confirm it is established enough to be a curriculum term.
- **[Large language models — training, adaptation, generation]** Entropy-based / adaptive samplers of the 'entropix' community lineage and the 2025 'p-less sampling' proposal: real proposals, but I could not verify adoption in mainstream runtimes.
- **[Large language models — training, adaptation, generation]** Classifier-free guidance applied to text LLMs: published research, but I could not confirm current practical use, so it is not listed.
- **[Large language models — training, adaptation, generation]** 'LoRAFactory' appeared in one 2026 secondary source as a modular LoRA-variant codebase; I could not verify it exists, so it is excluded.
- **[Large language models — training, adaptation, generation]** V-STaR, Delta-LoRA, MoRA, HydraLoRA, SBoRA and MiSS are named in the LoRA/reasoning literature, but I could not verify enough about each to define them safely.
- **[Large language models — training, adaptation, generation]** BCO (binary classifier optimisation) and several other 2025-2026 DPO derivatives exist in TRL-adjacent literature; I could not verify their canonical definitions, so they are omitted.
- **[Large language models — training, adaptation, generation]** Relative standing of MXFP4 versus NVFP4 as the 2026 default 4-bit inference format is contested across sources; I stated only what each format is.
- **[Large language models — training, adaptation, generation]** The claim that XGrammar is 'the default' structured-output backend across vLLM, SGLang and TensorRT-LLM comes from one secondary source; the definition I give avoids asserting default status.
- **[RAG, agents, serving, and MLOps/LLMOps]** UCP appeared in one 2026 agent-protocol ecosystem map alongside MCP, A2A and ACP; I could not verify what it stands for or whether it is an adopted standard, so it is excluded.
- **[RAG, agents, serving, and MLOps/LLMOps]** Humanloop's current status is unclear to me — I recall an acquisition and product sunset around late 2025 but could not confirm it in this session, so it is excluded rather than listed with a deprecation note.
- **[RAG, agents, serving, and MLOps/LLMOps]** Rebuff (prompt-injection detection library) may be unmaintained as of 2026; I could not confirm, so it is excluded.
- **[RAG, agents, serving, and MLOps/LLMOps]** TensorFlow Extended (TFX) may be in maintenance mode as of 2026; I could not confirm a successor, so it is excluded.
- **[RAG, agents, serving, and MLOps/LLMOps]** Hugging Face Text Generation Inference (TGI) is listed without a currency note; I did not verify whether Hugging Face has shifted its recommended serving path elsewhere.
- **[RAG, agents, serving, and MLOps/LLMOps]** Vector databases, embedding models, sparse/dense retrieval internals and late-interaction retrieval (ColBERT) were left out as belonging to the retrieval and embeddings module; if that module does not exist, RAG coverage here has a gap.
- **[RAG, agents, serving, and MLOps/LLMOps]** Quantization method internals (AWQ, GPTQ) are included only as serving-time formats; the broader quantization family likely belongs to an efficiency/compression module.
- **[RAG, agents, serving, and MLOps/LLMOps]** AG-UI is included as an agent-to-frontend protocol based on prior knowledge rather than a source verified in this session.
- **[RAG, agents, serving, and MLOps/LLMOps]** Framework production-readiness rankings and version numbers cited in search results (LangGraph 1.0, MAF 1.0 GA April 2026, CrewAI 1.14) come from vendor-adjacent blog posts and were not cross-checked against primary release notes; no version numbers were put into definitions.
- **[Tools — data engineering, databases, ML libraries]** ksqlDB's formal status: Confluent now steers streaming SQL users towards managed Flink, but I could not confirm an official deprecation, so no currency note was added.
- **[Tools — data engineering, databases, ML libraries]** Vaex maintenance status in 2026 — release activity appears low but I found no deprecation statement; listed without a note.
- **[Tools — data engineering, databases, ML libraries]** Amundsen's 2026 activity level — 2026 comparisons still list it, but development pace relative to DataHub and OpenMetadata is unclear.
- **[Tools — data engineering, databases, ML libraries]** Microsoft NNI (Neural Network Intelligence) — believed archived or dormant, not confirmed, so omitted from the list rather than guessed.
- **[Tools — data engineering, databases, ML libraries]** Apache Drill, Apache Samza, Apache Storm and Apache Mahout — all still nominally ASF projects but with unclear 2026 activity; Drill, Samza and Mahout were omitted rather than described with possibly wrong currency notes.
- **[Tools — data engineering, databases, ML libraries]** SigOpt — believed shut down after Intel's acquisition; omitted because I could not verify.
- **[Tools — data engineering, databases, ML libraries]** Faust (Robinhood streaming library) — believed unmaintained with a faust-streaming community fork; omitted for lack of verification.
- **[Tools — data engineering, databases, ML libraries]** TPOT versus TPOT2 naming: sources say TPOT is active again after a rewrite, but which package name is canonical in 2026 is unclear.
- **[Tools — data engineering, databases, ML libraries]** Whether Apache Cloudberry (the Greenplum community fork) has graduated from ASF incubation as of 2026.
- **[Tools — data engineering, databases, ML libraries]** Rockset's exact end-of-service date after the OpenAI acquisition was not confirmed; the note states only that the public service was discontinued.
- **[Tools — data engineering, databases, ML libraries]** Reverse-ETL vendors (Hightouch, Census) and log shippers (Fluentd, Fluent Bit, Logstash) were trimmed to keep within the term budget rather than because they are out of scope.
- **[Tools — data engineering, databases, ML libraries]** Some interpretability, vector-search and LLM-serving libraries (SHAP, LIME, Faiss, vLLM, Hugging Face Transformers) were excluded on the assumption they belong to other glossary modules.
- **[Tools — LLM serving, runtimes, training, model hubs]** torchtune's maintenance status could not be verified; there are indications it moved to maintenance with users pointed at TorchTitan and TorchForge, but I could not confirm before the web search budget ran out, so no deprecation note was attached.
- **[Tools — LLM serving, runtimes, training, model hubs]** GPT4All's current activity level is unverified; Nomic's development pace appears to have slowed but I found no confirmation of archival.
- **[Tools — LLM serving, runtimes, training, model hubs]** llamafile's current maintenance status under Mozilla is unverified.
- **[Tools — LLM serving, runtimes, training, model hubs]** Graphcore Poplar / IPU roadmap status after the SoftBank acquisition is unverified; it may be in maintenance, so no note was attached.
- **[Tools — LLM serving, runtimes, training, model hubs]** Determined AI's open-source status under HPE is unverified, so it was omitted.
- **[Tools — LLM serving, runtimes, training, model hubs]** Ludwig (Predibase) maintenance status is unverified, so it was omitted.
- **[Tools — LLM serving, runtimes, training, model hubs]** Specific 2026 model version numbers surfaced by search (e.g. 'GPT-5.6', 'Gemini 3.6 Flash', 'Claude Fable 5', 'Grok 4.5', 'DeepSeek V4 Pro', 'Gemma 4', 'Qwen 3.5', 'Meta Muse Spark') come from low-quality aggregator blogs and were not used; entries name families rather than versions.
- **[Tools — LLM serving, runtimes, training, model hubs]** 'Microsoft Harrier-OSS-v1' embedding model, 'Gemini Embedding 2', 'Voyage 4' and 'Jina v5' appeared only in a single search summary and could not be corroborated; the corresponding entries name the families without version numbers.
- **[Tools — LLM serving, runtimes, training, model hubs]** ZeRank (ZeroEntropy) reranker was omitted as I could not verify it independently.
- **[Tools — LLM serving, runtimes, training, model hubs]** Reported 2026 corporate events (NVIDIA acquiring or licensing Groq, AMD/Cerebras partnership, Cerebras IPO) came from unreliable sources and are not reflected in any definition.
- **[Tools — LLM serving, runtimes, training, model hubs]** vllm-project/vime appeared in one search result as a vLLM-based post-training framework; it was omitted as unverified.
- **[Tools — LLM serving, runtimes, training, model hubs]** JigsawRL appeared only as an arXiv preprint and was omitted as it is not an established project.
- **[Tools — LLM serving, runtimes, training, model hubs]** AutoAWQ and AutoGPTQ deprecation notes are based on prior knowledge rather than a verified 2026 source, though both are widely reported as superseded.
- **[Tools — vector databases, retrieval, agents]** Universal Commerce Protocol (UCP) and A2UI appeared in 2026 protocol round-ups but I could not confirm their sponsors, specification status or whether they are distinct from AP2 and AG-UI.
- **[Tools — vector databases, retrieval, agents]** MCP Apps (the interactive-UI extension to MCP) — I believe a specification enhancement proposal exists, but I could not confirm whether it is ratified and shipped as of 2026.
- **[Tools — vector databases, retrieval, agents]** Web Bot Auth — an IETF draft for cryptographically signed agent traffic; standardization status unverified.
- **[Tools — vector databases, retrieval, agents]** Whether IBM's Agent Communication Protocol (ACP) is still independently maintained or has been formally merged into A2A under the Linux Foundation.
- **[Tools — vector databases, retrieval, agents]** Hindsight and Memvid appeared in 2026 agent-memory comparisons; I could not verify that they are actively maintained projects rather than blog-listed experiments.
- **[Tools — vector databases, retrieval, agents]** Korvus and PostgresML — I could not confirm whether the company and the Korvus retrieval library are still actively maintained in 2026.
- **[Tools — vector databases, retrieval, agents]** Pinecone Canopy — I believe the open-source RAG reference framework has been archived, but could not confirm.
- **[Tools — vector databases, retrieval, agents]** Kernel (onkernel.com) as a cloud browser provider for agents — real-sounding but unverified.
- **[Tools — vector databases, retrieval, agents]** vectorize.io (the RAG-pipeline SaaS, distinct from Cloudflare Vectorize) — current status unverified.
- **[Tools — vector databases, retrieval, agents]** Salesforce Agent Fabric — mentioned in a 2026 market round-up; product scope and general availability unverified.
- **[Tools — vector databases, retrieval, agents]** Whether Marqo Cloud is fully discontinued or merely frozen, and whether the open-source Marqo project is still receiving releases.
- **[Tools — vector databases, retrieval, agents]** Nougat's exact maintenance status — the repository still exists but I could not confirm an official deprecation notice.
- **[Tools — vector databases, retrieval, agents]** PrivateGPT's current activity level; it may be effectively dormant rather than actively developed.
- **[Tools — vector databases, retrieval, agents]** Kreuzberg, Aryn DocParse and Rossum were considered for the document-parsing group; I omitted Kreuzberg and Rossum because I could not verify their 2026 currency.
- **[Tools — vector databases, retrieval, agents]** Whether Google's Project Mariner still exists as a named product or has been entirely absorbed into Gemini agent mode.
- **[Tools — evaluation, observability, gateways, MLOps]** Pezzo's maintenance status: one 2026 vendor comparison claims development has slowed markedly, but I could not confirm this from the project itself, so no maintenance note is attached.
- **[Tools — evaluation, observability, gateways, MLOps]** Featureform's current status: it is absent from all 2026 feature store comparisons I found, which may indicate abandonment, but no discontinuation was confirmed, so it is omitted from the term list.
- **[Tools — evaluation, observability, gateways, MLOps]** Feathr (LinkedIn's open-source feature store) appears to have very low activity; I could not confirm whether it is maintained in 2026, so it is omitted.
- **[Tools — evaluation, observability, gateways, MLOps]** TensorFlow Extended (TFX) is widely described as low-activity, with Google steering users to Vertex AI Pipelines and KFP; I could not confirm a formal maintenance or deprecation announcement, so no note is attached.
- **[Tools — evaluation, observability, gateways, MLOps]** SigOpt (hyperparameter optimisation, acquired by Intel) is omitted because I could not verify whether the product is still offered in 2026.
- **[Tools — evaluation, observability, gateways, MLOps]** Verta (model registry and catalogue) is omitted; I could not verify its status following reports of a Cloudera acquisition.
- **[Tools — evaluation, observability, gateways, MLOps]** cnvrg.io and Paperspace Gradient are omitted because I could not verify whether either platform is still commercially available in 2026.
- **[Tools — evaluation, observability, gateways, MLOps]** Polyaxon and Determined AI are listed but I could not verify their 2026 release cadence or commercial availability.
- **[Tools — evaluation, observability, gateways, MLOps]** The WhyLabs note (hosted SaaS wound down in 2025, open-sourced platform continues) rests on two secondary sources rather than a vendor announcement I could read directly.
- **[Tools — evaluation, observability, gateways, MLOps]** Traccia and Agentuity appeared in a third-party catalogue of observability tools; I could not independently verify Traccia, so it is omitted, and Agentuity is also omitted for the same reason.
- **[Tools — evaluation, observability, gateways, MLOps]** Epoch AI Benchmarking Hub is included based on prior knowledge rather than a source retrieved in this session.
- **[Tools — evaluation, observability, gateways, MLOps]** Mosaic Eval Gauntlet (Databricks llm-foundry evaluation suite) is omitted because I could not confirm whether it is still maintained separately from Mosaic AI Agent Evaluation.
- **[Tools — evaluation, observability, gateways, MLOps]** Several 2026 acquisitions are recorded in the definitions or notes only where a product's availability changed; acquisitions with no product-status change (ClickHouse/Langfuse, CoreWeave/Weights & Biases, OpenAI/promptfoo, Anaconda/Outerbounds, Prefect/Dagster Labs, HPE/Pachyderm, lakeFS/DVC) are deliberately not flagged as currency notes.
- **[Tools — evaluation, observability, gateways, MLOps]** My web search budget was exhausted before I could independently verify the WhyLabs and a few smaller status claims; TensorZero's archival was verified directly on its repository.
- **[Tools — safety, security, privacy and governance]** A vendor comparison page claimed OpenAI acquired promptfoo in 2025. I could not confirm this from a primary source, so promptfoo is listed without an ownership note.
- **[Tools — safety, security, privacy and governance]** EU Digital Omnibus: I confirmed the package exists as a Commission proposal touching the AI Act, but could not verify the specific proposed new dates for high-risk obligations (reportedly late 2027 / mid 2028) or its current legislative stage in August 2026. The artificialintelligenceact.eu implementation timeline still shows the unamended 2 August 2026 and 2 August 2027 dates.
- **[Tools — safety, security, privacy and governance]** New York RAISE Act: I believe a frontier-model safety bill was signed in New York in late 2025 with 2026 effect, but could not verify its final text or effective date, so it is omitted from the term list.
- **[Tools — safety, security, privacy and governance]** California SB 942 (AI Transparency Act): reportedly amended by AB 853, which may have shifted its effective date from January 2026 to August 2026. The definition given deliberately omits a date.
- **[Tools — safety, security, privacy and governance]** C2PA standardisation: C2PA specification versions have reportedly been submitted to ISO (ISO 22144). I could not confirm publication status, so no ISO number is given.
- **[Tools — safety, security, privacy and governance]** Model Card Toolkit: I could not verify whether the Google repository is still maintained in 2026; no deprecation note is attached.
- **[Tools — safety, security, privacy and governance]** Tumult Analytics: governance may have changed after the Tumult Labs team moved to another organisation. Listed without a note.
- **[Tools — safety, security, privacy and governance]** CrypTen: appears to have low recent activity and may be effectively unmaintained; no maintenance note attached because I could not confirm.
- **[Tools — safety, security, privacy and governance]** SplxAI: reportedly subject to an acquisition (Zscaler) in 2025. Unconfirmed, so listed with no ownership note.
- **[Tools — safety, security, privacy and governance]** Aim Security (reported Cato Networks acquisition) and Invariant Labs (reported Snyk acquisition) were omitted or listed without notes because the acquisitions could not be verified here; mcp-scan is attributed to Invariant Labs, which is correct regardless.
- **[Tools — safety, security, privacy and governance]** NIST AI RMF: NIST states AI RMF 1.0 is under revision as of 2026, but no version 2.0 has been published; a Critical Infrastructure Profile concept note was released April 2026.
- **[Tools — safety, security, privacy and governance]** MLCommons AILuminate version numbering in 2026 (safety benchmark v1.0, jailbreak benchmark v0.5 were the versions visible); a newer release may exist.
- **[Tools — safety, security, privacy and governance]** Protect AI product line: I am confident Palo Alto Networks acquired Protect AI and that Prisma AIRS is the successor platform, but the exact current status of the open-source projects (ModelScan, LLM Guard, Rebuff, huntr) under that ownership is unverified. They are listed as active without deprecation notes.
- **[Tools — safety, security, privacy and governance]** Several obscure open-source projects appearing in an aggregated awesome-list (e.g. NNterp, Overcomplete) were seen only in secondary sources; NNterp was omitted, Overcomplete was omitted, and only projects I could independently place were retained.
- **[Tools — safety, security, privacy and governance]** Whether Microsoft Counterfit is formally archived versus merely inactive could not be confirmed; the note states maintenance mode.
