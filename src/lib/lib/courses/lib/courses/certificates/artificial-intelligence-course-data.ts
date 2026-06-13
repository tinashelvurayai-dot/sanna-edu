export const aiEngineeringDiplomaData = {
  id: "ai-engineering-diploma",
  title: "AI Engineering (Diploma)",
  description: "This advanced diploma course builds upon AI fundamentals to develop professional engineering expertise in designing, implementing, and deploying production-ready AI systems. Designed for software engineers, data scientists, and technical professionals seeking to master AI system architecture, this comprehensive program covers deep learning architectures, natural language processing, computer vision, reinforcement learning, MLOps, and scalable AI deployment. Participants will master advanced neural networks, distributed training techniques, model optimization, and enterprise AI system design for real-world applications.",
  duration: "12 weeks",
  students: 2200,
  rating: 4.9,
  prerequisite: "Artificial Intelligence Basics (Certificate) or equivalent experience",
  modules: [
    {
      id: 1,
      title: "Advanced Deep Learning Architectures",
      content: `This module covers sophisticated neural network architectures and advanced deep learning techniques.

**1. Deep Neural Network Optimization**
- **Advanced Optimization Algorithms**: AdamW, Nadam, Lookahead, LAMB optimizer
- **Weight Initialization**: Xavier/Glorot, He initialization, LeCun initialization
- **Batch Normalization**: Layer normalization, instance normalization, group normalization
- **Advanced Regularization**: DropBlock, stochastic depth, Shake-Shake regularization

**2. Convolutional Neural Network Architectures**
- **Residual Networks**: ResNet variants (ResNet-50, ResNet-101), skip connections, identity mapping
- **Inception Networks**: Inception v1-v4, efficient grid size reduction, factorization ideas
- **DenseNet**: Feature reuse, concatenation connections, parameter efficiency
- **EfficientNet**: Compound scaling, mobile-optimized architectures, NAS-designed networks

**3. Recurrent and Attention-Based Architectures**
- **LSTM Variants**: Peephole LSTM, GRU, bidirectional architectures
- **Attention Mechanisms**: Bahdanau attention, Luong attention, self-attention
- **Transformers**: Multi-head attention, positional encoding, encoder-decoder architecture
- **Vision Transformers**: Image patch processing, hybrid architectures, DeiT models

**4. Generative Models**
- **Variational Autoencoders**: Latent space regularization, KL divergence, reparameterization trick
- **Generative Adversarial Networks**: DCGAN, WGAN, StyleGAN, CycleGAN
- **Normalizing Flows**: RealNVP, Glow, invertible transformations
- **Diffusion Models**: Denoising diffusion, score-based models, latent diffusion`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the typical depth of modern ResNet architectures?",
          options: [
            "18-34 layers",
            "50-152 layers",
            "200-1000 layers",
            "1000+ layers"
          ],
          correctAnswer: 1,
          explanation: "ResNet-50 (50 layers), ResNet-101 (101 layers), and ResNet-152 (152 layers) are standard production architectures."
        },
        {
          id: 2,
          question: "What percentage accuracy improvement did ResNet provide over previous architectures?",
          options: [
            "3-5%",
            "7-10%",
            "15-20%",
            "25-30%"
          ],
          correctAnswer: 1,
          explanation: "ResNet improved ImageNet accuracy by approximately 7-10% while enabling much deeper networks."
        },
        {
          id: 3,
          question: "How many attention heads are typically used in Transformer models?",
          options: [
            "4-8 heads",
            "8-16 heads",
            "16-32 heads",
            "32-64 heads"
          ],
          correctAnswer: 1,
          explanation: "Standard Transformer models use 8-16 attention heads, with BERT using 12-16 heads depending on model size."
        },
        {
          id: 4,
          question: "What is the training stability improvement with WGAN over original GAN?",
          options: [
            "25% more stable",
            "50% more stable",
            "100% more stable",
            "300% more stable"
          ],
          correctAnswer: 3,
          explanation: "WGAN (Wasserstein GAN) provides 3-4x better training stability through Earth Mover distance and gradient penalty."
        },
        {
          id: 5,
          question: "What percentage of compute is saved by EfficientNet over comparable models?",
          options: [
            "10-20%",
            "30-50%",
            "60-80%",
            "90%+"
          ],
          correctAnswer: 2,
          explanation: "EfficientNet achieves same accuracy with 60-80% fewer parameters and FLOPs through compound scaling."
        }
      ]
    },
    {
      id: 2,
      title: "Natural Language Processing Engineering",
      content: `This module covers advanced NLP techniques and production-ready language models.

**1. Transformer-Based Language Models**
- **BERT Architecture**: Bidirectional encoder, masked language modeling, next sentence prediction
- **GPT Series**: Autoregressive models, causal attention, scaling laws
- **T5 Model**: Text-to-text framework, unified approach to NLP tasks
- **RoBERTa**: Optimized BERT pretraining, dynamic masking, larger batches

**2. Advanced NLP Techniques**
- **Named Entity Recognition**: BIO tagging, span-based approaches, nested entities
- **Question Answering**: Extractive QA, generative QA, machine reading comprehension
- **Text Summarization**: Extractive methods, abstractive methods, pointer-generator networks
- **Machine Translation**: Sequence-to-sequence models, attention mechanisms, multilingual models

**3. Efficient NLP Deployment**
- **Model Distillation**: Knowledge distillation, teacher-student training, TinyBERT
- **Quantization**: Post-training quantization, quantization-aware training, integer-only inference
- **Pruning**: Magnitude pruning, lottery ticket hypothesis, structured pruning
- **ONNX Runtime**: Cross-platform optimization, hardware acceleration, model conversion

**4. Multimodal and Domain-Specific NLP**
- **Vision-Language Models**: CLIP, ALIGN, image captioning, visual question answering
- **Domain Adaptation**: Biomedical NLP, legal NLP, financial NLP, scientific literature
- **Low-Resource Languages**: Transfer learning, multilingual models, few-shot learning
- **Ethical NLP**: Bias mitigation, fairness evaluation, toxic content detection`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "How many parameters does GPT-3 have?",
          options: [
            "1.5 billion",
            "13 billion",
            "175 billion",
            "530 billion"
          ],
          correctAnswer: 2,
          explanation: "GPT-3 has 175 billion parameters, making it one of the largest language models when released in 2020."
        },
        {
          id: 2,
          question: "What percentage accuracy improvement did BERT provide on GLUE benchmark?",
          options: [
            "5-10%",
            "10-15%",
            "15-20%",
            "20-25%"
          ],
          correctAnswer: 2,
          explanation: "BERT improved GLUE benchmark by 17-20% over previous state-of-the-art models."
        },
        {
          id: 3,
          question: "How much faster is distilled BERT (DistilBERT) compared to original?",
          options: [
            "2x faster",
            "3x faster",
            "5x faster",
            "10x faster"
          ],
          correctAnswer: 0,
          explanation: "DistilBERT is approximately 2x faster while retaining 97% of BERT's performance with 40% fewer parameters."
        },
        {
          id: 4,
          question: "What compression ratio is typically achieved with 8-bit quantization?",
          options: [
            "2x compression",
            "4x compression",
            "8x compression",
            "16x compression"
          ],
          correctAnswer: 1,
          explanation: "8-bit quantization achieves approximately 4x compression (32-bit to 8-bit) with minimal accuracy loss."
        },
        {
          id: 5,
          question: "What percentage of internet content is in English?",
          options: [
            "25%",
            "45%",
            "65%",
            "85%"
          ],
          correctAnswer: 0,
          explanation: "Only about 25% of internet content is in English, highlighting need for multilingual NLP systems."
        }
      ]
    },
    {
      id: 3,
      title: "Computer Vision Engineering",
      content: `This module covers advanced computer vision techniques and production deployment.

**1. Advanced Object Detection**
- **Two-Stage Detectors**: R-CNN, Fast R-CNN, Faster R-CNN, Mask R-CNN
- **One-Stage Detectors**: YOLO series, SSD, RetinaNet, EfficientDet
- **Anchor-Free Methods**: FCOS, CenterNet, CornerNet, DETR
- **Real-Time Detection**: Optimization techniques, edge deployment, mobile optimization

**2. Image Segmentation Architectures**
- **Semantic Segmentation**: FCN, U-Net, DeepLab, PSPNet
- **Instance Segmentation**: Mask R-CNN, SOLO, PolarMask, CondInst
- **Panoptic Segmentation**: Unified task, UPSNet, Panoptic FPN, DETR
- **Medical Imaging**: 3D segmentation, nnU-Net, MONAI framework

**3. Video Understanding**
- **Action Recognition**: 3D CNNs, Two-stream networks, I3D, SlowFast
- **Video Object Detection**: Tubelets, temporal consistency, Seq-NMS
- **Video Segmentation**: Propagation methods, optical flow integration, VOS benchmarks
- **Temporal Action Localization**: Boundary detection, action proposals, complete pipelines

**4. Vision Transformers and Efficient CV**
- **Vision Transformer**: Patch embedding, positional encoding, hybrid approaches
- **Data-Efficient ViTs**: DeiT, data augmentation strategies, distillation
- **Mobile Vision Models**: MobileNetV3, EfficientNet-Lite, ShuffleNetV2
- **Neural Architecture Search**: AutoML for CV, NASNet, MNasNet, ProxylessNAS`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is YOLOv5's inference speed on COCO dataset?",
          options: [
            "10-20 FPS",
            "30-50 FPS",
            "60-100 FPS",
            "140-200 FPS"
          ],
          correctAnswer: 3,
          explanation: "YOLOv5 achieves 140-200 FPS on Tesla V100 while maintaining 50%+ AP on COCO, making it production-ready."
        },
        {
          id: 2,
          question: "What mAP did Mask R-CNN achieve on COCO instance segmentation?",
          options: [
            "25-30%",
            "35-40%",
            "45-50%",
            "55-60%"
          ],
          correctAnswer: 1,
          explanation: "Mask R-CNN achieved 37% mask AP on COCO, setting new state-of-the-art for instance segmentation."
        },
        {
          id: 3,
          question: "How much faster is MobileNetV3 compared to V2?",
          options: [
            "10-15% faster",
            "25-35% faster",
            "40-50% faster",
            "60-70% faster"
          ],
          correctAnswer: 1,
          explanation: "MobileNetV3 is 25-35% faster than V2 with similar accuracy through architectural improvements and NAS."
        },
        {
          id: 4,
          question: "What percentage of Vision Transformer parameters are in attention layers?",
          options: [
            "15-25%",
            "30-40%",
            "45-55%",
            "60-70%"
          ],
          correctAnswer: 3,
          explanation: "Approximately 60-70% of ViT parameters are in attention layers, with rest in MLP and embedding layers."
        },
        {
          id: 5,
          question: "How many images are in the ImageNet dataset?",
          options: [
            "1.2 million",
            "14 million",
            "50 million",
            "100 million+"
          ],
          correctAnswer: 0,
          explanation: "ImageNet has 1.2 million training images across 1000 classes, standard benchmark for image classification."
        }
      ]
    },
    {
      id: 4,
      title: "Reinforcement Learning Engineering",
      content: `This module covers advanced reinforcement learning algorithms and applications.

**1. Deep Reinforcement Learning Algorithms**
- **Value-Based Methods**: DQN, Double DQN, Dueling DQN, Rainbow
- **Policy Gradient Methods**: REINFORCE, Actor-Critic, A3C, PPO, TRPO
- **Model-Based RL**: Dyna, MBVE, MBPO, World Models
- **Multi-Agent RL**: Independent learners, centralized training, communication protocols

**2. Advanced RL Techniques**
- **Hierarchical RL**: Options framework, feudal networks, skill discovery
- **Inverse Reinforcement Learning**: Apprenticeship learning, maximum entropy IRL
- **Imitation Learning**: Behavioral cloning, DAgger, generative adversarial imitation
- **Meta-Reinforcement Learning**: Learning to learn, context-based adaptation

**3. RL Applications and Challenges**
- **Game Playing**: AlphaGo, AlphaZero, OpenAI Five, Dota 2 bot
- **Robotics**: Manipulation tasks, locomotion, sim-to-real transfer
- **Autonomous Systems**: Self-driving cars, drone navigation, industrial control
- **Finance**: Algorithmic trading, portfolio optimization, market making

**4. Production RL Systems**
- **RL Engineering Challenges**: Sample efficiency, exploration strategies, reward design
- **Simulation Environments**: OpenAI Gym, Unity ML-Agents, Isaac Gym
- **Scalable Training**: Distributed RL, IMPALA, Ape-X, R2D2
- **Safety and Ethics**: Safe exploration, constraint satisfaction, interpretable policies`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "How many self-play games did AlphaZero train on?",
          options: [
            "1,000 games",
            "10,000 games",
            "100,000 games",
            "4.9 million games"
          ],
          correctAnswer: 3,
          explanation: "AlphaZero trained on 4.9 million games of self-play over 9 hours using 5,000 TPUs."
        },
        {
          id: 2,
          question: "What win rate did AlphaGo achieve against Lee Sedol?",
          options: [
            "3-2",
            "4-1",
            "5-0",
            "Did not win"
          ],
          correctAnswer: 1,
          explanation: "AlphaGo defeated world champion Lee Sedol 4-1 in March 2016, landmark achievement in AI."
        },
        {
          id: 3,
          question: "What percentage of RL papers focus on sample efficiency?",
          options: [
            "15%",
            "35%",
            "55%",
            "75%"
          ],
          correctAnswer: 1,
          explanation: "Approximately 35% of recent RL research focuses on sample efficiency, major challenge for real-world applications."
        },
        {
          id: 4,
          question: "How many parameters does GPT-based RL (Decision Transformer) typically use?",
          options: [
            "1-10 million",
            "10-100 million",
            "100-500 million",
            "500 million+"
          ],
          correctAnswer: 1,
          explanation: "Decision Transformer typically uses 10-100M parameters, treating RL as sequence modeling problem."
        },
        {
          id: 5,
          question: "What success rate did robotic manipulation RL achieve on complex tasks?",
          options: [
            "25-40%",
            "45-60%",
            "65-80%",
            "85-95%"
          ],
          correctAnswer: 2,
          explanation: "State-of-the-art RL achieves 65-80% success on complex robotic manipulation tasks like pick-and-place."
        }
      ]
    },
    {
      id: 5,
      title: "MLOps and Production AI Systems",
      content: `This module covers MLOps practices, model deployment, and production system design.

**1. MLOps Principles and Practices**
- **MLOps Maturity Levels**: 0 (Manual) to 5 (Fully Automated CI/CD)
- **Model Lifecycle Management**: Experiment tracking, model registry, version control
- **Continuous Integration**: Automated testing, code quality, dependency management
- **Continuous Delivery**: Automated deployment, canary releases, rollback strategies

**2. Model Serving Infrastructure**
- **Serving Patterns**: Real-time serving, batch serving, streaming inference
- **Serving Frameworks**: TensorFlow Serving, TorchServe, Triton Inference Server
- **Edge Serving**: ONNX Runtime, TensorFlow Lite, Core ML, Nvidia TensorRT
- **Serverless Inference**: AWS Lambda, Google Cloud Functions, Azure Functions

**3. Monitoring and Maintenance**
- **Model Monitoring**: Prediction distribution drift, feature drift, concept drift
- **Performance Metrics**: Latency, throughput, error rates, business metrics
- **A/B Testing**: Experiment design, statistical significance, multi-armed bandits
- **Model Retraining**: Automatic retraining, data pipeline integration, human-in-the-loop

**4. Scalable Data Pipelines**
- **Feature Stores**: Offline/online features, point-in-time correctness, consistency
- **Data Versioning**: DVC, Delta Lake, data lineage tracking
- **Workflow Orchestration**: Airflow, Prefect, Kubeflow Pipelines, Metaflow
- **Distributed Processing**: Spark, Dask, Ray, Horovod for distributed training`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of companies have dedicated MLOps teams?",
          options: [
            "15%",
            "35%",
            "55%",
            "75%"
          ],
          correctAnswer: 1,
          explanation: "Approximately 35% of enterprises have dedicated MLOps teams, growing from 15% two years ago."
        },
        {
          id: 2,
          question: "What is typical inference latency for production models?",
          options: [
            "< 10ms",
            "10-100ms",
            "100-500ms",
            "500ms-2s"
          ],
          correctAnswer: 1,
          explanation: "Production models typically target 10-100ms inference latency, depending on application requirements."
        },
        {
          id: 3,
          question: "What percentage of models require retraining within 3 months?",
          options: [
            "25%",
            "45%",
            "65%",
            "85%"
          ],
          correctAnswer: 3,
          explanation: "85% of models require retraining within 3 months due to data drift, concept drift, or performance degradation."
        },
        {
          id: 4,
          question: "How much does model serving infrastructure typically cost?",
          options: [
            "10-20% of AI budget",
            "30-50% of AI budget",
            "60-80% of AI budget",
            "90%+ of AI budget"
          ],
          correctAnswer: 1,
          explanation: "Serving infrastructure typically costs 30-50% of total AI budget, including compute, storage, and monitoring."
        },
        {
          id: 5,
          question: "What percentage of AI projects use feature stores?",
          options: [
            "15%",
            "35%",
            "55%",
            "75%"
          ],
          correctAnswer: 1,
          explanation: "35% of production AI projects use feature stores, critical for consistency between training and serving."
        }
      ]
    },
    {
      id: 6,
      title: "Distributed Training and Scalability",
      content: `This module covers techniques for training large models at scale.

**1. Distributed Training Strategies**
- **Data Parallelism**: Synchronous SGD, asynchronous SGD, gradient accumulation
- **Model Parallelism**: Pipeline parallelism, tensor parallelism, expert parallelism
- **Hybrid Parallelism**: 3D parallelism, combining data/model/pipeline parallelism
- **ZeRO Optimization**: Zero Redundancy Optimizer, memory optimization techniques

**2. Large Model Training Infrastructure**
- **GPU Clusters**: Multi-node setups, InfiniBand networking, NVLink connectivity
- **TPU Pods**: Google TPU architecture, systolic arrays, model parallelism
- **Cloud Training**: AWS SageMaker, Google AI Platform, Azure ML, distributed training frameworks
- **Training Orchestration**: Kubernetes operators, Slurm, AWS Batch, job scheduling

**3. Training Optimization Techniques**
- **Mixed Precision Training**: FP16, BF16, automatic mixed precision, loss scaling
- **Gradient Checkpointing**: Memory-recomputation tradeoff, activation checkpointing
- **Efficient Optimizers**: Adafactor, 8-bit Adam, LAMB, Sophia optimizer
- **Curriculum Learning**: Difficulty scheduling, self-paced learning, transfer learning

**4. Billion-Parameter Models**
- **Megatron-LM**: Model parallelism for transformers, tensor slicing
- **DeepSpeed**: ZeRO stages, offloading, 3D parallelism
- **FairScale**: PyTorch native scaling, sharded data parallelism
- **JAX/Flax**: Functional programming approach, automatic parallelism`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "How many GPUs were used to train GPT-3?",
          options: [
            "256 GPUs",
            "1024 GPUs",
            "4096 GPUs",
            "10,000+ GPUs"
          ],
          correctAnswer: 3,
          explanation: "GPT-3 was trained on 10,000+ V100 GPUs for several weeks using sophisticated model parallelism."
        },
        {
          id: 2,
          question: "What memory reduction does ZeRO-Offload provide?",
          options: [
            "2x reduction",
            "5x reduction",
            "10x reduction",
            "50x+ reduction"
          ],
          correctAnswer: 3,
          explanation: "ZeRO-Offload enables training models 10x larger by offloading optimizer states to CPU, 50x+ memory reduction possible."
        },
        {
          id: 3,
          question: "What speedup does mixed precision training typically provide?",
          options: [
            "1.5-2x",
            "2-3x",
            "3-5x",
            "5-10x"
          ],
          correctAnswer: 1,
          explanation: "Mixed precision training typically provides 2-3x speedup on modern GPUs with tensor cores."
        },
        {
          id: 4,
          question: "How many parameters can be trained on a single V100 GPU with ZeRO?",
          options: [
            "1-2 billion",
            "5-10 billion",
            "15-20 billion",
            "50+ billion"
          ],
          correctAnswer: 2,
          explanation: "With ZeRO optimization, single V100 GPU can train 15-20B parameter models using CPU offloading."
        },
        {
          id: 5,
          question: "What percentage of training time is spent on communication in distributed training?",
          options: [
            "5-15%",
            "20-40%",
            "45-65%",
            "70-90%"
          ],
          correctAnswer: 1,
          explanation: "Communication typically consumes 20-40% of training time, depending on network bandwidth and model size."
        }
      ]
    },
    {
      id: 7,
      title: "AI System Architecture and Design",
      content: `This module covers architectural patterns for enterprise AI systems.

**1. AI System Design Patterns**
- **Microservices Architecture**: Model-as-service, feature store service, monitoring service
- **Event-Driven Architecture**: Real-time inference, streaming feature computation, online learning
- **Lambda Architecture**: Batch and streaming processing, serving layer integration
- **Kappa Architecture**: Unified processing, stream processing only, simplified maintenance

**2. Scalability and Reliability**
- **Horizontal Scaling**: Load balancing, auto-scaling, container orchestration
- **High Availability**: Multi-region deployment, failover strategies, disaster recovery
- **Performance Optimization**: Caching strategies, query optimization, hardware acceleration
- **Cost Optimization**: Spot instances, autoscaling policies, reserved instances

**3. Security and Compliance**
- **Model Security**: Adversarial attacks, model stealing, membership inference
- **Data Security**: Encryption at rest/transit, access controls, data masking
- **Compliance Requirements**: GDPR, HIPAA, PCI-DSS, industry-specific regulations
- **Audit and Governance**: Model cards, datasheets, audit trails, compliance reporting

**4. Integration Patterns**
- **API Design**: REST, gRPC, GraphQL, WebSocket for real-time
- **Database Integration**: Vector databases, time-series databases, graph databases
- **Legacy System Integration**: Batch interfaces, real-time APIs, data migration
- **Third-Party Services**: Cloud AI services, specialized APIs, data marketplaces`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of AI systems use microservices architecture?",
          options: [
            "25%",
            "45%",
            "65%",
            "85%"
          ],
          correctAnswer: 2,
          explanation: "Approximately 65% of production AI systems use microservices architecture for flexibility and scalability."
        },
        {
          id: 2,
          question: "What is typical availability target for enterprise AI systems?",
          options: [
            "95% (18 days downtime/year)",
            "99% (3.65 days downtime/year)",
            "99.9% (8.76 hours downtime/year)",
            "99.99% (52 minutes downtime/year)"
          ],
          correctAnswer: 2,
          explanation: "Enterprise AI systems typically target 99.9% availability (8.76 hours downtime/year)."
        },
        {
          id: 3,
          question: "What percentage increase in inference requests can modern systems handle?",
          options: [
            "2-5x increase",
            "5-10x increase",
            "10-100x increase",
            "100-1000x increase"
          ],
          correctAnswer: 2,
          explanation: "Well-architected AI systems can handle 10-100x traffic spikes through auto-scaling and caching."
        },
        {
          id: 4,
          question: "How many microservices typically comprise an AI platform?",
          options: [
            "3-5 services",
            "5-10 services",
            "10-20 services",
            "20-50+ services"
          ],
          correctAnswer: 2,
          explanation: "Enterprise AI platforms typically consist of 10-20 microservices (training, serving, monitoring, etc.)."
        },
        {
          id: 5,
          question: "What percentage of AI project budget is spent on integration?",
          options: [
            "15%",
            "35%",
            "55%",
            "75%"
          ],
          correctAnswer: 1,
          explanation: "Approximately 35% of AI project budget is spent on integration with existing systems and workflows."
        }
      ]
    },
    {
      id: 8,
      title: "Model Optimization and Hardware Acceleration",
      content: `This module covers techniques for optimizing models for production deployment.

**1. Model Compression Techniques**
- **Pruning Methods**: Unstructured pruning, structured pruning, lottery ticket hypothesis
- **Quantization**: Post-training quantization, quantization-aware training, integer arithmetic
- **Knowledge Distillation**: Response-based, feature-based, relation-based distillation
- **Architecture Search**: Neural Architecture Search, hardware-aware NAS, once-for-all networks

**2. Hardware-Specific Optimization**
- **GPU Optimization**: Tensor cores, CUDA kernels, memory hierarchy optimization
- **TPU Optimization**: XLA compiler, model partitioning, systolic array utilization
- **CPU Optimization**: SIMD instructions, cache optimization, multi-threading
- **Edge Devices**: Mobile GPUs, NPUs, DSPs, microcontroller optimization

**3. Inference Optimization**
- **Kernel Fusion**: Combining operations, reducing memory transfers
- **Operator Optimization**: Custom CUDA kernels, vectorization, parallelization
- **Graph Optimization**: Constant folding, dead code elimination, operator fusion
- **Compiler Optimization**: TVM, Glow, XLA, MLIR frameworks

**4. Performance Benchmarking**
- **Latency Measurement**: End-to-end latency, model-only latency, p99 latency
- **Throughput Testing**: Requests per second, batch processing throughput
- **Resource Utilization**: GPU/CPU utilization, memory usage, power consumption
- **Comparative Analysis**: Framework comparison, hardware comparison, optimization impact`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What speedup does TensorRT provide over standard TensorFlow?",
          options: [
            "2-5x",
            "5-10x",
            "10-20x",
            "20-50x"
          ],
          correctAnswer: 1,
          explanation: "TensorRT typically provides 5-10x inference speedup through kernel fusion and precision optimization."
        },
        {
          id: 2,
          question: "What percentage of weights can be pruned without accuracy loss?",
          options: [
            "25-40%",
            "50-70%",
            "75-90%",
            "95%+"
          ],
          correctAnswer: 2,
          explanation: "Modern pruning techniques can remove 75-90% of weights with minimal accuracy loss (<1%)."
        },
        {
          id: 3,
          question: "How much memory reduction does 8-bit quantization provide?",
          options: [
            "2x reduction",
            "4x reduction",
            "8x reduction",
            "16x reduction"
          ],
          correctAnswer: 1,
          explanation: "8-bit quantization reduces memory by 4x (32-bit float to 8-bit integer) and often speeds inference 2-3x."
        },
        {
          id: 4,
          question: "What latency improvement does kernel fusion provide?",
          options: [
            "10-20%",
            "30-50%",
            "60-80%",
            "90%+"
          ],
          correctAnswer: 1,
          explanation: "Kernel fusion typically improves latency by 30-50% by reducing memory transfers between operations."
        },
        {
          id: 5,
          question: "What percentage of inference time is spent on data loading?",
          options: [
            "5-15%",
            "20-40%",
            "45-65%",
            "70-90%"
          ],
          correctAnswer: 1,
          explanation: "Data loading and preprocessing typically consume 20-40% of total inference time in production systems."
        }
      ]
    },
    {
      id: 9,
      title: "AI Ethics and Safety Engineering",
      content: `This module covers engineering practices for ethical and safe AI systems.

**1. Fairness Engineering**
- **Bias Detection**: Disparate impact analysis, subgroup performance analysis
- **Fairness Metrics**: Equal opportunity, demographic parity, predictive equality
- **Bias Mitigation**: Pre-processing, in-processing, post-processing techniques
- **Fairness Auditing**: Automated testing, human evaluation, continuous monitoring

**2. Explainability Engineering**
- **Model Interpretability**: SHAP, LIME, Integrated Gradients, attention visualization
- **Example-Based Explanations**: Counterfactuals, prototypes, influential instances
- **Rule Extraction**: Decision tree approximation, rule lists, symbolic representations
- **Human-AI Interaction**: Explanation interfaces, trust calibration, user studies

**3. Safety Engineering**
- **Robustness Testing**: Adversarial examples, distribution shifts, edge cases
- **Uncertainty Quantification**: Bayesian methods, ensemble methods, calibration
- **Fail-Safe Mechanisms**: Fallback strategies, confidence thresholds, human oversight
- **Specification Engineering**: Formal verification, constraint satisfaction, reward modeling

**4. Privacy-Preserving AI**
- **Differential Privacy**: Epsilon-delta privacy, privacy budget, composition theorems
- **Federated Learning**: Horizontal/vertical federated learning, secure aggregation
- **Homomorphic Encryption**: Computation on encrypted data, performance tradeoffs
- **Synthetic Data Generation**: GAN-based generation, privacy guarantees, utility preservation`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of companies perform regular bias audits?",
          options: [
            "15%",
            "35%",
            "55%",
            "75%"
          ],
          correctAnswer: 1,
          explanation: "Only 35% of companies perform regular bias audits, though 65% plan to implement them within a year."
        },
        {
          id: 2,
          question: "What epsilon value is typically used for differential privacy?",
          options: [
            "0.1-1.0",
            "1.0-10.0",
            "10.0-100.0",
            "100.0+"
          ],
          correctAnswer: 0,
          explanation: "Epsilon values of 0.1-1.0 provide strong privacy guarantees, while higher values offer less privacy."
        },
        {
          id: 3,
          question: "How many adversarial examples can bypass most ML models?",
          options: [
            "10-25%",
            "30-50%",
            "55-75%",
            "80-95%"
          ],
          correctAnswer: 3,
          explanation: "Studies show 80-95% of adversarial examples can bypass undefended models with small perturbations."
        },
        {
          id: 4,
          question: "What percentage of users trust AI explanations?",
          options: [
            "25%",
            "45%",
            "65%",
            "85%"
          ],
          correctAnswer: 1,
          explanation: "Only 45% of users report trusting AI explanations, highlighting need for better explainability engineering."
        },
        {
          id: 5,
          question: "How much slower is federated learning compared to centralized?",
          options: [
            "2-5x slower",
            "5-10x slower",
            "10-50x slower",
            "100x+ slower"
          ],
          correctAnswer: 1,
          explanation: "Federated learning is typically 5-10x slower due to communication overhead and heterogeneous devices."
        }
      ]
    },
    {
      id: 10,
      title: "Capstone Project: End-to-End AI System",
      content: `This capstone module integrates all engineering concepts through comprehensive system design.

**1. Real-World Problem Definition**
- **Business Problem**: Identifying valuable AI application, success metrics, ROI calculation
- **Data Strategy**: Data collection, labeling, privacy considerations, regulatory compliance
- **System Requirements**: Latency, throughput, availability, scalability, cost constraints
- **Ethical Considerations**: Bias assessment, fairness requirements, transparency needs

**2. System Architecture Design**
- **Technical Architecture**: Microservices design, data flow, model serving strategy
- **Infrastructure Design**: Cloud vs on-premise, hardware selection, networking design
- **ML Pipeline Design**: Training pipeline, deployment pipeline, monitoring pipeline
- **Integration Design**: API design, database integration, user interface integration

**3. Implementation and Testing**
- **Model Development**: Architecture selection, training strategy, optimization techniques
- **Infrastructure Implementation**: Containerization, orchestration, CI/CD pipelines
- **Testing Strategy**: Unit testing, integration testing, load testing, security testing
- **Performance Benchmarking**: Latency, throughput, resource utilization, cost analysis

**4. Deployment and Documentation**
- **Production Deployment**: Gradual rollout, canary testing, rollback procedures
- **Monitoring Implementation**: Performance monitoring, drift detection, alerting systems
- **Documentation**: System architecture, API documentation, operational procedures
- **Maintenance Plan**: Model retraining, system updates, scaling procedures, cost optimization`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of AI projects fail in production due to scalability issues?",
          options: [
            "15%",
            "35%",
            "55%",
            "75%"
          ],
          correctAnswer: 1,
          explanation: "Approximately 35% of AI projects fail in production due to scalability and performance issues."
        },
        {
          id: 2,
          question: "How many models does a typical production AI system include?",
          options: [
            "1 model",
            "2-5 models",
            "5-10 models",
            "10-20+ models"
          ],
          correctAnswer: 2,
          explanation: "Production AI systems typically include 5-10 models working together (ensemble, different tasks, A/B tests)."
        },
        {
          id: 3,
          question: "What percentage of AI system code is infrastructure vs modeling?",
          options: [
            "25% modeling, 75% infrastructure",
            "50% modeling, 50% infrastructure",
            "75% modeling, 25% infrastructure",
            "90% modeling, 10% infrastructure"
          ],
          correctAnswer: 0,
          explanation: "Only 25% of production AI code is modeling; 75% is infrastructure (data pipelines, serving, monitoring)."
        },
        {
          id: 4,
          question: "What is typical time from prototype to production for AI systems?",
          options: [
            "1-3 months",
            "3-6 months",
            "6-12 months",
            "12-24 months"
          ],
          correctAnswer: 1,
          explanation: "Typical AI projects take 3-6 months from prototype to production, though complex systems can take longer."
        },
        {
          id: 5,
          question: "What ROI do successful AI projects typically achieve?",
          options: [
            "50-100% ROI",
            "100-300% ROI",
            "300-500% ROI",
            "500%+ ROI"
          ],
          correctAnswer: 1,
          explanation: "Successful AI projects typically achieve 100-300% ROI through efficiency gains, revenue increase, or cost reduction."
        }
      ]
    }
  ],
  finalExam: [
    {
      id: 1,
      question: "Modern ResNet depth?",
      options: [
        "18-34 layers",
        "50-152 layers",
        "200-1000 layers",
        "1000+ layers"
      ],
      correctAnswer: 1,
      explanation: "50-152 layers standard."
    },
    {
      id: 2,
      question: "ResNet accuracy improvement?",
      options: [
        "3-5%",
        "7-10%",
        "15-20%",
        "25-30%"
      ],
      correctAnswer: 1,
      explanation: "7-10% improvement."
    },
    {
      id: 3,
      question: "Transformer attention heads?",
      options: [
        "4-8",
        "8-16",
        "16-32",
        "32-64"
      ],
      correctAnswer: 1,
      explanation: "8-16 heads typical."
    },
    {
      id: 4,
      question: "WGAN stability improvement?",
      options: [
        "25%",
        "50%",
        "100%",
        "300%"
      ],
      correctAnswer: 3,
      explanation: "3-4x more stable."
    },
    {
      id: 5,
      question: "EfficientNet compute saving?",
      options: [
        "10-20%",
        "30-50%",
        "60-80%",
        "90%+"
      ],
      correctAnswer: 2,
      explanation: "60-80% less compute."
    },
    {
      id: 6,
      question: "GPT-3 parameters?",
      options: [
        "1.5B",
        "13B",
        "175B",
        "530B"
      ],
      correctAnswer: 2,
      explanation: "175 billion."
    },
    {
      id: 7,
      question: "BERT GLUE improvement?",
      options: [
        "5-10%",
        "10-15%",
        "15-20%",
        "20-25%"
      ],
      correctAnswer: 2,
      explanation: "17-20% improvement."
    },
    {
      id: 8,
      question: "DistilBERT speedup?",
      options: [
        "2x",
        "3x",
        "5x",
        "10x"
      ],
      correctAnswer: 0,
      explanation: "2x faster."
    },
    {
      id: 9,
      question: "8-bit quantization compression?",
      options: [
        "2x",
        "4x",
        "8x",
        "16x"
      ],
      correctAnswer: 1,
      explanation: "4x compression."
    },
    {
      id: 10,
      question: "Internet content in English?",
      options: [
        "25%",
        "45%",
        "65%",
        "85%"
      ],
      correctAnswer: 0,
      explanation: "Only 25%."
    },
    {
      id: 11,
      question: "YOLOv5 inference speed?",
      options: [
        "10-20 FPS",
        "30-50 FPS",
        "60-100 FPS",
        "140-200 FPS"
      ],
      correctAnswer: 3,
      explanation: "140-200 FPS."
    },
    {
      id: 12,
      question: "Mask R-CNN COCO mAP?",
      options: [
        "25-30%",
        "35-40%",
        "45-50%",
        "55-60%"
      ],
      correctAnswer: 1,
      explanation: "37% mask AP."
    },
    {
      id: 13,
      question: "MobileNetV3 speedup?",
      options: [
        "10-15%",
        "25-35%",
        "40-50%",
        "60-70%"
      ],
      correctAnswer: 1,
      explanation: "25-35% faster."
    },
    {
      id: 14,
      question: "ViT attention parameters?",
      options: [
        "15-25%",
        "30-40%",
        "45-55%",
        "60-70%"
      ],
      correctAnswer: 3,
      explanation: "60-70% in attention."
    },
    {
      id: 15,
      question: "AlphaZero self-play games?",
      options: [
        "1,000",
        "10,000",
        "100,000",
        "4.9M"
      ],
      correctAnswer: 3,
      explanation: "4.9 million games."
    },
    {
      id: 16,
      question: "AlphaGo win rate?",
      options: [
        "3-2",
        "4-1",
        "5-0",
        "Lost"
      ],
      correctAnswer: 1,
      explanation: "4-1 against Lee Sedol."
    },
    {
      id: 17,
      question: "RL sample efficiency focus?",
      options: [
        "15%",
        "35%",
        "55%",
        "75%"
      ],
      correctAnswer: 1,
      explanation: "35% of RL research."
    },
    {
      id: 18,
      question: "MLOps team adoption?",
      options: [
        "15%",
        "35%",
        "55%",
        "75%"
      ],
      correctAnswer: 1,
      explanation: "35% have MLOps teams."
    },
    {
      id: 19,
      question: "Production inference latency?",
      options: [
        "<10ms",
        "10-100ms",
        "100-500ms",
        "500ms-2s"
      ],
      correctAnswer: 1,
      explanation: "10-100ms target."
    },
    {
      id: 20,
      question: "Models needing retraining in 3 months?",
      options: [
        "25%",
        "45%",
        "65%",
        "85%"
      ],
      correctAnswer: 3,
      explanation: "85% need retraining."
    },
    {
      id: 21,
      question: "GPT-3 training GPUs?",
      options: [
        "256",
        "1024",
        "4096",
        "10,000+"
      ],
      correctAnswer: 3,
      explanation: "10,000+ GPUs."
    },
    {
      id: 22,
      question: "ZeRO-Offload memory reduction?",
      options: [
        "2x",
        "5x",
        "10x",
        "50x+"
      ],
      correctAnswer: 3,
      explanation: "50x+ reduction."
    },
    {
      id: 23,
      question: "Mixed precision speedup?",
      options: [
        "1.5-2x",
        "2-3x",
        "3-5x",
        "5-10x"
      ],
      correctAnswer: 1,
      explanation: "2-3x speedup."
    },
    {
      id: 24,
      question: "AI system microservices usage?",
      options: [
        "25%",
        "45%",
        "65%",
        "85%"
      ],
      correctAnswer: 2,
      explanation: "65% use microservices."
    },
    {
      id: 25,
      question: "Enterprise availability target?",
      options: [
        "95%",
        "99%",
        "99.9%",
        "99.99%"
      ],
      correctAnswer: 2,
      explanation: "99.9% (8.76 hours)."
    },
    {
      id: 26,
      question: "TensorRT speedup?",
      options: [
        "2-5x",
        "5-10x",
        "10-20x",
        "20-50x"
      ],
      correctAnswer: 1,
      explanation: "5-10x faster."
    },
    {
      id: 27,
      question: "Pruning without accuracy loss?",
      options: [
        "25-40%",
        "50-70%",
        "75-90%",
        "95%+"
      ],
      correctAnswer: 2,
      explanation: "75-90% removable."
    },
    {
      id: 28,
      question: "Companies with bias audits?",
      options: [
        "15%",
        "35%",
        "55%",
        "75%"
      ],
      correctAnswer: 1,
      explanation: "35% perform audits."
    },
    {
      id: 29,
      question: "Differential privacy epsilon?",
      options: [
        "0.1-1.0",
        "1.0-10.0",
        "10.0-100.0",
        "100.0+"
      ],
      correctAnswer: 0,
      explanation: "0.1-1.0 typical."
    },
    {
      id: 30,
      question: "AI projects failing from scalability?",
      options: [
        "15%",
        "35%",
        "55%",
        "75%"
      ],
      correctAnswer: 1,
      explanation: "35% fail from scalability."
    },
    {
      id: 31,
      question: "Attention mechanism purpose?",
      options: [
        "Focus on relevant parts",
        "Increase parameters",
        "Reduce compute",
        "Regularization"
      ],
      correctAnswer: 0,
      explanation: "Focus on relevant input parts."
    },
    {
      id: 32,
      question: "Knowledge distillation goal?",
      options: [
        "Smaller, faster model",
        "Larger model",
        "More parameters",
        "Different architecture"
      ],
      correctAnswer: 0,
      explanation: "Smaller, faster student model."
    },
    {
      id: 33,
      question: "Model parallelism use case?",
      options: [
        "Model too large for GPU",
        "Small dataset",
        "Low latency",
        "Simple models"
      ],
      correctAnswer: 0,
      explanation: "When model doesn't fit single GPU."
    },
    {
      id: 34,
      question: "Feature store benefit?",
      options: [
        "Consistent features",
        "Faster training",
        "Smaller models",
        "Less data needed"
      ],
      correctAnswer: 0,
      explanation: "Consistency between training/serving."
    },
    {
      id: 35,
      question: "Canary deployment purpose?",
      options: [
        "Risk reduction",
        "Speed deployment",
        "Cost reduction",
        "Simplify testing"
      ],
      correctAnswer: 0,
      explanation: "Reduce risk with gradual rollout."
    },
    {
      id: 36,
      question: "SHAP values explain?",
      options: [
        "Feature importance",
        "Model accuracy",
        "Training time",
        "Memory usage"
      ],
      correctAnswer: 0,
      explanation: "Feature contribution to prediction."
    },
    {
      id: 37,
      question: "Differential privacy protects?",
      options: [
        "Individual privacy",
        "Model accuracy",
        "Training speed",
        "Deployment cost"
      ],
      correctAnswer: 0,
      explanation: "Individual data privacy."
    },
    {
      id: 38,
      question: "ONNX format benefit?",
      options: [
        "Framework interoperability",
        "Faster training",
        "Smaller models",
        "Better accuracy"
      ],
      correctAnswer: 0,
      explanation: "Cross-framework model sharing."
    },
    {
      id: 39,
      question: "CI/CD in MLOps?",
      options: [
        "Automate model updates",
        "Increase model size",
        "Reduce accuracy",
        "Manual deployment"
      ],
      correctAnswer: 0,
      explanation: "Automate model integration/deployment."
    },
    {
      id: 40,
      question: "Model registry purpose?",
      options: [
        "Version control models",
        "Store training data",
        "Increase inference speed",
        "Reduce costs"
      ],
      correctAnswer: 0,
      explanation: "Track model versions and metadata."
    }
  ]
};
