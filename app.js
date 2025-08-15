// (removed stray brace)
// AI Pricing Calculator Enhanced JavaScript (with Reverted Pricing Strategy and ROI)

// Enhanced data from provided JSON with the new structure
let pricingData = {
    // Project types for the development planner
    projectTypes: [
        {
            key: 'ai_chatbot',
            name: 'AI Chatbot / Virtual Assistant',
            description: 'Conversational AI for customer support, automation, or virtual assistance.',
            relevantPhases: [
                'Problem Definition & Requirements Analysis',
                'Data Collection & Acquisition',
                'Data Processing & Preparation',
                'LLM/SLM Selection & Integration',
                'Prompt Engineering & Optimization',
                'Evaluation & Alignment',
                'Guardrails & Safety Implementation',
                'Application Development & Integration',
                'Deployment & Production Launch',
                'Monitoring & Maintenance'
            ]
        },
        {
            key: 'computer_vision',
            name: 'Computer Vision Application',
            description: 'Image/video analysis, object detection, classification, or recognition.',
            relevantPhases: [
                'Problem Definition & Requirements Analysis',
                'Data Collection & Acquisition',
                'Data Processing & Preparation',
                'Model Development & Training',
                'Model Validation & Testing',
                'Infrastructure & Platform Setup',
                'Application Development & Integration',
                'Deployment & Production Launch',
                'Monitoring & Maintenance'
            ]
        },
        {
            key: 'predictive_analytics',
            name: 'Predictive Analytics / Forecasting',
            description: 'Business forecasting, demand prediction, or risk modeling.',
            relevantPhases: [
                'Problem Definition & Requirements Analysis',
                'Data Strategy & Architecture',
                'Data Collection & Acquisition',
                'Data Processing & Preparation',
                'Model Development & Training',
                'Model Validation & Testing',
                'Application Development & Integration',
                'Deployment & Production Launch',
                'Monitoring & Maintenance'
            ]
        },
        {
            key: 'recommendation_system',
            name: 'Recommendation System',
            description: 'Personalized product/content recommendations for users.',
            relevantPhases: [
                'Problem Definition & Requirements Analysis',
                'Data Collection & Acquisition',
                'Data Processing & Preparation',
                'Model Development & Training',
                'Model Validation & Testing',
                'Application Development & Integration',
                'Deployment & Production Launch',
                'Monitoring & Maintenance'
            ]
        },
        {
            key: 'nlp_text_analytics',
            name: 'NLP / Text Analytics',
            description: 'Text mining, sentiment analysis, summarization, or classification.',
            relevantPhases: [
                'Problem Definition & Requirements Analysis',
                'Data Collection & Acquisition',
                'Data Processing & Preparation',
                'Model Development & Training',
                'Model Validation & Testing',
                'Application Development & Integration',
                'Deployment & Production Launch',
                'Monitoring & Maintenance'
            ]
        },
        {
            key: 'rpa',
            name: 'Robotic Process Automation (RPA)',
            description: 'Automate repetitive business processes using bots.',
            relevantPhases: [
                'Problem Definition & Requirements Analysis',
                'Data Strategy & Architecture',
                'Application Development & Integration',
                'Deployment & Production Launch',
                'Monitoring & Maintenance'
            ]
        },
        /*{
            key: 'iot_analytics',
            name: 'IoT Analytics Platform',
            description: 'Analytics and insights from IoT device/sensor data.',
            relevantPhases: [
                'Problem Definition & Requirements Analysis',
                'Data Strategy & Architecture',
                'Data Collection & Acquisition',
                'Data Processing & Preparation',
                'Model Development & Training',
                'Model Validation & Testing',
                'Infrastructure & Platform Setup',
                'Application Development & Integration',
                'Deployment & Production Launch',
                'Monitoring & Maintenance'
            ]
        },*/
        // --- New Project Types ---
        {
            key: 'genai_llm_app',
            name: 'GenAI / LLM-based Application',
            description: 'Applications leveraging large language models for content generation, summarization, Q&A, code generation, etc.',
            relevantPhases: [
                'Problem Definition & Requirements Analysis',
                'Data Collection & Acquisition',
                'Data Processing & Preparation',
                'LLM/SLM Selection & Integration',
                'Prompt Engineering & Optimization',
                'Evaluation & Alignment',
                'Guardrails & Safety Implementation',
                'Infrastructure & Platform Setup',
                'Application Development & Integration',
                'Deployment & Production Launch',
                'Monitoring & Maintenance'
            ]
        },
        {
            key: 'agentic_ai',
            name: 'Agentic AI System',
            description: 'Autonomous or semi-autonomous AI agents capable of planning, reasoning, and acting in complex environments.',
            relevantPhases: [
                'Problem Definition & Requirements Analysis',
                'Data Strategy & Architecture',
                'Data Collection & Acquisition',
                'Data Processing & Preparation',
                'LLM/SLM Selection & Integration',
                'Prompt Engineering & Optimization',
                'Evaluation & Alignment',
                'Guardrails & Safety Implementation',
                'Infrastructure & Platform Setup',
                'Application Development & Integration',
                'Deployment & Production Launch',
                'Monitoring & Maintenance'
            ]
        },
        {
            key: 'mcp',
            name: 'Model Context Protocol (MCP) Integration',
            description: 'Projects focused on integrating or building with the Model Context Protocol for interoperable AI systems.',
            relevantPhases: [
                'Problem Definition & Requirements Analysis',
                'Data Strategy & Architecture',
                'Infrastructure & Platform Setup',
                'Application Development & Integration',
                'Deployment & Production Launch',
                'Monitoring & Maintenance'
            ]
        }
    ],
    cloudLLMProviders: [
        {
            provider: "OpenAI GPT-5 Turbo",
            model_name: "gpt-5-turbo",
            input_tokens_per_1k: 0.0013,
            output_tokens_per_1k: 0.01,
            context_window: 200000,
            max_output_tokens: 32000,
            model_tier: "Premium",
            rate_limits: { rpm: 10000, tpm: 2000000, rps: 167 },
            features: ["multimodal", "reasoning", "function_calling"]
        },
        {
            provider: "OpenAI GPT-4.1 Turbo",
            model_name: "gpt-4.1-turbo",
            input_tokens_per_1k: 0.002,
            output_tokens_per_1k: 0.008,
            context_window: 200000,
            max_output_tokens: 16000,
            model_tier: "Premium",
            rate_limits: { rpm: 10000, tpm: 2000000, rps: 167 },
            features: ["multimodal", "function_calling"]
        },
        {
            provider: "Amazon Nova Premier",
            model_name: "amazon-nova-premier",
            input_tokens_per_1k: 0.0025,
            output_tokens_per_1k: 0.0125,
            context_window: 128000,
            max_output_tokens: 16000,
            model_tier: "Standard",
            rate_limits: { rpm: 10000, tpm: 2000000, rps: 167 },
            features: ["multimodal", "function_calling"]
        },
        {
            provider: "Anthropic Claude Opus 4",
            model_name: "claude-opus-4",
            input_tokens_per_1k: 0.015,
            output_tokens_per_1k: 0.075,
            context_window: 200000,
            max_output_tokens: 8000,
            model_tier: "Premium",
            rate_limits: { rpm: 1000, tpm: 40000, rps: 17 },
            features: ["multimodal", "reasoning", "function_calling"]
        },
        {
            provider: "Anthropic Claude Sonnet 4",
            model_name: "claude-sonnet-4",
            input_tokens_per_1k: 0.003,
            output_tokens_per_1k: 0.015,
            context_window: 200000,
            max_output_tokens: 8000,
            model_tier: "Premium",
            rate_limits: { rpm: 1000, tpm: 40000, rps: 17 },
            features: ["multimodal", "function_calling"]
        },
                {
            provider: "Anthropic Claude Sonnet 3.7",
            model_name: "claude-sonnet-3-7",
            input_tokens_per_1k: 0.003,
            output_tokens_per_1k: 0.015,
            context_window: 200000,
            max_output_tokens: 8000,
            model_tier: "Premium",
            rate_limits: { rpm: 1000, tpm: 40000, rps: 17 },
            features: ["multimodal", "function_calling"]
        },
                {
            provider: "Anthropic Claude Haiku 3.5",
            model_name: "claude-haiku-3-5",
            input_tokens_per_1k: 0.0008,
            output_tokens_per_1k: 0.004,
            context_window: 200000,
            max_output_tokens: 8000,
            model_tier: "Standard",
            rate_limits: { rpm: 1000, tpm: 40000, rps: 17 },
            features: ["multimodal", "function_calling"]
        },
        {
            provider: "Google Gemini 2.5 Pro",
            model_name: "gemini-2.5-pro",
            input_tokens_per_1k: 0.00125,
            output_tokens_per_1k: 0.10,
            context_window: 2000000,
            max_output_tokens: 65000,
            model_tier: "Premium",
            rate_limits: { rpm: 2000, tpm: 32000, rps: 33 },
            features: ["multimodal", "reasoning", "function_calling"]
        },
        {
            provider: "Google Gemini 2.5 Flash",
            model_name: "gemini-2.5-flash",
            input_tokens_per_1k: 0.0003,
            output_tokens_per_1k: 0.001,
            context_window: 1000000,
            max_output_tokens: 8000,
            model_tier: "Budget",
            rate_limits: { rpm: 15000, tpm: 1000000, rps: 250 },
            features: ["multimodal", "function_calling"]
        },
        {
            provider: "OpenAI OSS 20B",
            model_name: "gpt-oss-20b",
            input_tokens_per_1k: 0.00007,
            output_tokens_per_1k: 0.0003,
            context_window: 128000,
            max_output_tokens: 8000,
            model_tier: "Open Source",
            rate_limits: { rpm: 60, tpm: 200000, rps: 1 },
            features: ["reasoning", "function_calling"]
        },
                {
            provider: "OpenAI OSS 120B",
            model_name: "gpt-oss-120b",
            input_tokens_per_1k: 0.00015,
            output_tokens_per_1k: 0.0006,
            context_window: 128000,
            max_output_tokens: 8000,
            model_tier: "Open Source",
            rate_limits: { rpm: 60, tpm: 200000, rps: 1 },
            features: ["reasoning", "function_calling"]
        },
        {
            provider: "Meta Llama 70B (via API)",
            model_name: "llama-3.3-70b",
            input_tokens_per_1k: 0.00072,
            output_tokens_per_1k: 0.00072,
            context_window: 200000,
            max_output_tokens: 8000,
            model_tier: "Open Source",
            rate_limits: { rpm: 30, tpm: 120000, rps: 0.5 },
            features: ["function_calling"]
        }
    ],
    detailedDevelopmentPhases: [
        {
            phase: "LLM/SLM Selection & Integration",
            category: "AI Model Selection",
            base_cost_min: 10000,
            base_cost_max: 80000,
            complexity_multipliers: { simple: 1.0, medium: 1.7, complex: 2.8 },
            duration_weeks: { simple: 2, medium: 4, complex: 8 },
            activities: [
                { name: "Model Evaluation & Benchmarking", cost_min: 3000, cost_max: 20000 },
                { name: "API Integration", cost_min: 4000, cost_max: 20000 },
                { name: "Fine-tuning/Customization", cost_min: 5000, cost_max: 30000 },
                { name: "Model Hosting Setup", cost_min: 3000, cost_max: 10000 }
            ],
            team_roles: ["AI Engineer", "ML Engineer", "DevOps Engineer"],
            deliverables: ["Integrated Model", "Evaluation Report", "API Documentation"]
        },
        {
            phase: "Prompt Engineering & Optimization",
            category: "AI Application Design",
            base_cost_min: 7000,
            base_cost_max: 40000,
            complexity_multipliers: { simple: 1.0, medium: 1.5, complex: 2.2 },
            duration_weeks: { simple: 1, medium: 2, complex: 4 },
            activities: [
                { name: "Prompt Design", cost_min: 2000, cost_max: 10000 },
                { name: "Prompt Testing & Iteration", cost_min: 2000, cost_max: 12000 },
                { name: "Prompt Optimization", cost_min: 3000, cost_max: 18000 }
            ],
            team_roles: ["Prompt Engineer", "AI Engineer", "Product Manager"],
            deliverables: ["Prompt Library", "Prompt Test Results"]
        },
        {
            phase: "Guardrails & Safety Implementation",
            category: "AI Safety",
            base_cost_min: 8000,
            base_cost_max: 50000,
            complexity_multipliers: { simple: 1.0, medium: 1.6, complex: 2.5 },
            duration_weeks: { simple: 1, medium: 3, complex: 6 },
            activities: [
                { name: "Content Filtering", cost_min: 2000, cost_max: 12000 },
                { name: "Toxicity/Abuse Detection", cost_min: 3000, cost_max: 15000 },
                { name: "Policy Enforcement", cost_min: 2000, cost_max: 10000 },
                { name: "Red Teaming & Adversarial Testing", cost_min: 3000, cost_max: 13000 }
            ],
            team_roles: ["AI Safety Engineer", "QA Engineer", "Compliance Officer"],
            deliverables: ["Safety Report", "Guardrail Modules"]
        },
        {
            phase: "Evaluation & Alignment",
            category: "AI Evaluation",
            base_cost_min: 9000,
            base_cost_max: 60000,
            complexity_multipliers: { simple: 1.0, medium: 1.7, complex: 2.7 },
            duration_weeks: { simple: 2, medium: 4, complex: 8 },
            activities: [
                { name: "Human-in-the-Loop Evaluation", cost_min: 3000, cost_max: 20000 },
                { name: "Alignment Testing", cost_min: 4000, cost_max: 18000 },
                { name: "Bias & Fairness Audits", cost_min: 2000, cost_max: 12000 }
            ],
            team_roles: ["AI Researcher", "Ethics Specialist", "QA Engineer"],
            deliverables: ["Evaluation Results", "Alignment Report"]
        },
        {
            phase: "Problem Definition & Requirements Analysis",
            category: "Planning",
            base_cost_min: 5000,
            base_cost_max: 25000,
            complexity_multipliers: { simple: 1.0, medium: 1.5, complex: 2.5 },
            duration_weeks: { simple: 1, medium: 2, complex: 4 },
            activities: [
                { name: "Business Case Development", cost_min: 2000, cost_max: 8000 },
                { name: "Stakeholder Analysis", cost_min: 1500, cost_max: 5000 },
                { name: "Requirements Gathering", cost_min: 3000, cost_max: 10000 },
                { name: "Feasibility Study", cost_min: 2000, cost_max: 7000 },
                { name: "Success Metrics Definition", cost_min: 1000, cost_max: 3000 }
            ],
            team_roles: ["Business Analyst", "Project Manager", "AI Consultant"],
            deliverables: ["Requirements Document", "Business Case", "Project Charter"]
        },
        {
            phase: "Data Strategy & Architecture",
            category: "Data Management",
            base_cost_min: 15000,
            base_cost_max: 75000,
            complexity_multipliers: { simple: 1.0, medium: 2.0, complex: 3.5 },
            duration_weeks: { simple: 2, medium: 4, complex: 8 },
            activities: [
                { name: "Data Audit & Assessment", cost_min: 3000, cost_max: 15000 },
                { name: "Data Architecture Design", cost_min: 5000, cost_max: 20000 },
                { name: "Data Governance Framework", cost_min: 4000, cost_max: 18000 },
                { name: "Privacy & Compliance Setup", cost_min: 5000, cost_max: 25000 },
                { name: "Data Pipeline Design", cost_min: 8000, cost_max: 30000 }
            ],
            team_roles: ["Data Architect", "Data Engineer", "Compliance Officer"],
            deliverables: ["Data Architecture Document", "Governance Framework", "Compliance Report"]
        },
        {
            phase: "Data Collection & Acquisition",
            category: "Data Management",
            base_cost_min: 10000,
            base_cost_max: 150000,
            complexity_multipliers: { simple: 1.0, medium: 2.5, complex: 5.0 },
            duration_weeks: { simple: 3, medium: 6, complex: 12 },
            activities: [
                { name: "Internal Data Extraction", cost_min: 2000, cost_max: 20000 },
                { name: "External Data Procurement", cost_min: 5000, cost_max: 80000 },
                { name: "Web Scraping & APIs", cost_min: 3000, cost_max: 25000 },
                { name: "Synthetic Data Generation", cost_min: 4000, cost_max: 30000 },
                { name: "Data Quality Assessment", cost_min: 2000, cost_max: 15000 }
            ],
            team_roles: ["Data Engineer", "Data Scientist", "External Data Vendors"],
            deliverables: ["Raw Dataset", "Data Quality Report", "Data Documentation"]
        },
        {
            phase: "Data Processing & Preparation",
            category: "Data Management",
            base_cost_min: 20000,
            base_cost_max: 200000,
            complexity_multipliers: { simple: 1.0, medium: 2.0, complex: 4.0 },
            duration_weeks: { simple: 4, medium: 8, complex: 16 },
            activities: [
                { name: "Data Cleaning & Validation", cost_min: 5000, cost_max: 40000 },
                { name: "Data Transformation", cost_min: 4000, cost_max: 35000 },
                { name: "Feature Engineering", cost_min: 8000, cost_max: 60000 },
                { name: "Data Labeling", cost_min: 10000, cost_max: 100000 },
                { name: "Data Augmentation", cost_min: 3000, cost_max: 25000 }
            ],
            team_roles: ["Data Engineer", "Data Scientist", "ML Engineer", "Annotation Team"],
            deliverables: ["Processed Dataset", "Feature Dictionary", "Data Pipeline"]
        },
        {
            phase: "Model Development & Training",
            category: "Model Development",
            base_cost_min: 30000,
            base_cost_max: 300000,
            complexity_multipliers: { simple: 1.0, medium: 2.5, complex: 5.0 },
            duration_weeks: { simple: 4, medium: 10, complex: 20 },
            activities: [
                { name: "Algorithm Selection", cost_min: 3000, cost_max: 20000 },
                { name: "Model Architecture Design", cost_min: 8000, cost_max: 60000 },
                { name: "Hyperparameter Tuning", cost_min: 5000, cost_max: 40000 },
                { name: "Model Training", cost_min: 10000, cost_max: 120000 },
                { name: "Experimentation & Iteration", cost_min: 8000, cost_max: 80000 }
            ],
            team_roles: ["ML Engineer", "Data Scientist", "AI Researcher"],
            deliverables: ["Trained Models", "Experiment Logs", "Model Documentation"]
        },
        {
            phase: "Model Validation & Testing",
            category: "Quality Assurance",
            base_cost_min: 15000,
            base_cost_max: 120000,
            complexity_multipliers: { simple: 1.0, medium: 2.0, complex: 3.0 },
            duration_weeks: { simple: 3, medium: 6, complex: 10 },
            activities: [
                { name: "Performance Evaluation", cost_min: 3000, cost_max: 25000 },
                { name: "Bias & Fairness Testing", cost_min: 4000, cost_max: 30000 },
                { name: "Robustness Testing", cost_min: 3000, cost_max: 20000 },
                { name: "A/B Testing Setup", cost_min: 5000, cost_max: 35000 },
                { name: "Regulatory Compliance Testing", cost_min: 4000, cost_max: 25000 }
            ],
            team_roles: ["ML Engineer", "QA Engineer", "Data Scientist"],
            deliverables: ["Validation Report", "Test Results", "Compliance Certificate"]
        },
        {
            phase: "Infrastructure & Platform Setup",
            category: "Infrastructure",
            base_cost_min: 25000,
            base_cost_max: 200000,
            complexity_multipliers: { simple: 1.0, medium: 2.0, complex: 4.0 },
            duration_weeks: { simple: 3, medium: 6, complex: 12 },
            activities: [
                { name: "Cloud Infrastructure Setup", cost_min: 8000, cost_max: 50000 },
                { name: "MLOps Pipeline Development", cost_min: 10000, cost_max: 80000 },
                { name: "Monitoring & Logging Setup", cost_min: 5000, cost_max: 30000 },
                { name: "Security Implementation", cost_min: 7000, cost_max: 45000 },
                { name: "Scalability Architecture", cost_min: 8000, cost_max: 40000 }
            ],
            team_roles: ["DevOps Engineer", "Cloud Architect", "Security Engineer"],
            deliverables: ["Infrastructure Documentation", "MLOps Pipeline", "Security Framework"]
        },
        {
            phase: "Application Development & Integration",
            category: "Development",
            base_cost_min: 35000,
            base_cost_max: 250000,
            complexity_multipliers: { simple: 1.0, medium: 2.0, complex: 3.5 },
            duration_weeks: { simple: 6, medium: 12, complex: 20 },
            activities: [
                { name: "API Development", cost_min: 8000, cost_max: 50000 },
                { name: "User Interface Development", cost_min: 10000, cost_max: 80000 },
                { name: "System Integration", cost_min: 12000, cost_max: 70000 },
                { name: "Database Integration", cost_min: 5000, cost_max: 30000 },
                { name: "Third-party Integrations", cost_min: 8000, cost_max: 45000 }
            ],
            team_roles: ["Full-stack Developer", "Backend Developer", "Frontend Developer", "Integration Specialist"],
            deliverables: ["Application Code", "API Documentation", "Integration Guides"]
        },
        {
            phase: "Deployment & Production Launch",
            category: "Deployment",
            base_cost_min: 20000,
            base_cost_max: 100000,
            complexity_multipliers: { simple: 1.0, medium: 1.5, complex: 2.5 },
            duration_weeks: { simple: 2, medium: 4, complex: 8 },
            activities: [
                { name: "Production Environment Setup", cost_min: 5000, cost_max: 25000 },
                { name: "Deployment Automation", cost_min: 4000, cost_max: 20000 },
                { name: "Load Testing", cost_min: 3000, cost_max: 15000 },
                { name: "User Training", cost_min: 5000, cost_max: 25000 },
                { name: "Go-Live Support", cost_min: 3000, cost_max: 15000 }
            ],
            team_roles: ["DevOps Engineer", "Support Team", "Training Specialist"],
            deliverables: ["Production System", "Deployment Guide", "User Documentation"]
        },
        {
            phase: "Monitoring & Maintenance",
            category: "Operations",
            base_cost_min: 15000,
            base_cost_max: 80000,
            complexity_multipliers: { simple: 1.0, medium: 1.8, complex: 3.0 },
            duration_weeks: { ongoing: "continuous" },
            activities: [
                { name: "Performance Monitoring", cost_min: 3000, cost_max: 20000 },
                { name: "Model Drift Detection", cost_min: 4000, cost_max: 25000 },
                { name: "Regular Updates", cost_min: 5000, cost_max: 30000 },
                { name: "Bug Fixes & Support", cost_min: 3000, cost_max: 15000 },
                { name: "Continuous Improvement", cost_min: 4000, cost_max: 20000 }
            ],
            team_roles: ["Support Engineer", "ML Engineer", "Data Scientist"],
            deliverables: ["Monitoring Dashboard", "Maintenance Reports", "Update Logs"]
        }
    ],
    usageCalculationTypes: [
        {
            type: "tokens_per_request",
            name: "Tokens per Request",
            description: "Calculate based on average tokens consumed per API request",
            fields: ["avg_input_tokens", "avg_output_tokens", "requests_per_day"]
        },
        {
            type: "requests_per_minute",
            name: "Requests per Minute (RPM)",
            description: "Calculate based on requests per minute with token estimates",
            fields: ["rpm", "avg_input_tokens", "avg_output_tokens"]
        },
        {
            type: "requests_per_second", 
            name: "Requests per Second (RPS)",
            description: "Calculate based on requests per second with token estimates",
            fields: ["rps", "avg_input_tokens", "avg_output_tokens"]
        },
        {
            type: "tokens_per_day",
            name: "Total Tokens per Day",
            description: "Calculate based on total daily token consumption",
            fields: ["input_tokens_per_day", "output_tokens_per_day"]
        },
        {
            type: "business_metrics",
            name: "Business Metrics",
            description: "Calculate based on business-specific metrics",
            fields: ["users_per_day", "interactions_per_user", "avg_input_tokens", "avg_output_tokens"]
        }
    ],
    gpuCloudCosts: [
        { provider: "AWS", gpuType: "H100 80GB", costPerHour: 98.32, gpuCount: 8, costPerGpuHour: 12.29 },
        { provider: "GCP", gpuType: "H100 80GB", costPerHour: 88.49, gpuCount: 8, costPerGpuHour: 11.06 },
        { provider: "Azure", gpuType: "H100 80GB", costPerHour: 13.96, gpuCount: 2, costPerGpuHour: 6.98 },
        { provider: "Lambda GPU", gpuType: "A100 40GB", costPerHour: 1.29, gpuCount: 1, costPerGpuHour: 1.29 },
        { provider: "Paperspace", gpuType: "H100 80GB", costPerHour: 5.95, gpuCount: 1, costPerGpuHour: 5.95 }
    ],
    // Simple pricing models for reverted pricing strategy
    simplePricingModels: [
        {
            model: "Usage-Based (Token)",
            description: "Pay per API call or token consumed",
            useCase: "Variable workloads",
            costPredictability: "Low",
            pros: ["Scales with usage", "No upfront costs", "Fair pricing"],
            cons: ["Unpredictable costs", "Can get expensive at scale"]
        },
        {
            model: "Subscription",
            description: "Fixed monthly/annual fee",
            useCase: "Steady usage patterns", 
            costPredictability: "High",
            pros: ["Predictable costs", "Budget-friendly", "Encourages adoption"],
            cons: ["May overpay for low usage", "Less flexibility"]
        },
        {
            model: "Value-Based",
            description: "Price based on business outcome",
            useCase: "High-value applications",
            costPredictability: "Medium",
            pros: ["Aligns with customer value", "Higher margins possible"],
            cons: ["Complex to measure", "Harder to justify"]
        },
        {
            model: "Hybrid",
            description: "Base fee + usage charges",
            useCase: "Scalable applications",
            costPredictability: "Medium",
            pros: ["Balances predictability and flexibility", "Revenue stability"],
            cons: ["More complex pricing", "Harder to understand"]
        },
        {
            model: "Credit-Based",
            description: "Prepaid credits for features",
            useCase: "Flexible consumption",
            costPredictability: "Medium-High",
            pros: ["Cash flow advantages", "Usage flexibility", "Customer commitment"],
            cons: ["Credit management complexity", "Potential waste"]
        },
        {
            model: "Freemium",
            description: "Free tier + paid upgrades",
            useCase: "User acquisition",
            costPredictability: "Variable",
            pros: ["Low barrier to entry", "Viral growth potential"],
            cons: ["High infrastructure costs", "Low conversion rates"]
        }
    ]
};

// Global state
let currentTab = 'overview';
let selectedPricingModel = null;
let currentCalculationMethod = 'tokens_per_request';
let editingProvider = -1;

// Tab Management
function switchTab(tabName) {
    console.log(`Switching to tab: ${tabName}`);
    
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    const activeButton = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeButton) activeButton.classList.add('active');
    
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    
    const activeContent = document.getElementById(tabName);
    if (activeContent) activeContent.classList.add('active');
    
    currentTab = tabName;
    
    // Initialize tab-specific functionality when switching
    setTimeout(() => {
        if (tabName === 'llm-config') {
            populateProvidersList();
        } else if (tabName === 'usage-calculator') {
            populateUsageProviders();
            setupUsageCalculator();
        } else if (tabName === 'development-planner') {
            setupDevelopmentPlanner();
        } else if (tabName === 'infrastructure') {
            populateGPUProviders();
            setupInfrastructure();
        } else if (tabName === 'pricing-strategy') {
            setupPricingStrategy();
        } else if (tabName === 'roi-calculator') {
            setupROICalculator();
        }
    }, 100);
}

// LLM Configuration Functions (keeping all enhanced functionality)
/* function populateProvidersList() {
    const container = document.getElementById('provider-list-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    pricingData.cloudLLMProviders.forEach((provider, index) => {
        const card = document.createElement('div');
        card.className = 'provider-card';
        card.innerHTML = `
            <div class="provider-header" style="position: relative; min-height: 36px;">
                <div style="position: absolute; top: 0; right: 0; display: flex; gap: 8px;">
                    <button class="btn btn-edit" title="Edit Provider" style="padding: 2px 10px; font-size: 0.95em;" onclick="editProvider(${index})">Edit</button>
                    <button class="btn btn-delete" title="Delete Provider" style="padding: 2px 10px; font-size: 0.95em;" onclick="deleteProvider(${index})">Delete</button>
                </div>
                <h4 style="margin: 0 0 2px 0; font-size: 1.15em;">${provider.provider}</h4>
                <div class="model-name" style="font-size: 0.97em; color: #6c757d; margin-bottom: 8px;">${provider.model_name}</div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; row-gap: 4px; column-gap: 24px; margin-bottom: 0;">
                    <div>
                        <span class="detail-label">Input Price:</span>
                        <span class="detail-value">$${provider.input_tokens_per_1k}/1K</span>
                    </div>
                    <div>
                        <span class="detail-label">Output Price:</span>
                        <span class="detail-value">$${provider.output_tokens_per_1k}/1K</span>
                    </div>
                    <div>
                        <span class="detail-label">Context Window:</span>
                        <span class="detail-value">${provider.context_window.toLocaleString()}</span>
                    </div>
                    <div>
                        <span class="detail-label">Model Tier:</span>
                        <span class="detail-value">${provider.model_tier}</span>
                    </div>
                    <div>
                        <span class="detail-label">RPM Limit:</span>
                        <span class="detail-value">${provider.rate_limits.rpm.toLocaleString()}</span>
                    </div>
                    <div>
                        <span class="detail-label">TPM Limit:</span>
                        <span class="detail-value">${provider.rate_limits.tpm.toLocaleString()}</span>
                    </div>
                </div>
            </div>
            <div class="provider-features" style="margin-top: 14px;">
                <div class="features-list" style="display: flex; flex-wrap: wrap; gap: 6px;">
                    ${provider.features.map(feature => `<span class="feature-tag">${feature.replace('_', ' ')}</span>`).join('')}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
} */

function populateProvidersList() {
    const container = document.getElementById('provider-list-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    pricingData.cloudLLMProviders.forEach((provider, index) => {
        const card = document.createElement('div');
        card.className = 'provider-card';
        card.innerHTML = `
            <div class="provider-header">
                <div class="provider-info">
                    <h4>${provider.provider}</h4>
                    <div class="model-name">${provider.model_name}</div>
                </div>
                <div class="provider-actions">
                    <button class="btn btn--sm btn--secondary" onclick="editProvider(${index})">Edit</button>
                    <button class="btn btn--sm btn--outline" onclick="deleteProvider(${index})">Delete</button>
                </div>
            </div>
            <div class="provider-details">
                <div class="detail-item">
                    <span class="detail-label">Input Price:</span>
                    <span class="detail-value">$${provider.input_tokens_per_1k}/1K</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Output Price:</span>
                    <span class="detail-value">$${provider.output_tokens_per_1k}/1K</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Context Window:</span>
                    <span class="detail-value">${provider.context_window.toLocaleString()}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Model Tier:</span>
                    <span class="detail-value">${provider.model_tier}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">RPM Limit:</span>
                    <span class="detail-value">${provider.rate_limits.rpm.toLocaleString()}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">TPM Limit:</span>
                    <span class="detail-value">${provider.rate_limits.tpm.toLocaleString()}</span>
                </div>
            </div>
            <div class="provider-features">
                <div class="features-list">
                    ${provider.features.map(feature => `<span class="feature-tag">${feature.replace('_', ' ')}</span>`).join('')}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}
function addNewProvider() {
    editingProvider = -1;
    const modalTitle = document.getElementById('modal-title');
    if (modalTitle) modalTitle.textContent = 'Add New LLM Provider';
    resetProviderForm();
    const modal = document.getElementById('provider-modal');
    if (modal) modal.classList.remove('hidden');
}

function editProvider(index) {
    editingProvider = index;
    const provider = pricingData.cloudLLMProviders[index];
    
    const modalTitle = document.getElementById('modal-title');
    if (modalTitle) modalTitle.textContent = 'Edit LLM Provider';
    
    // Populate form fields
    const fields = [
        ['provider-name', provider.provider],
        ['model-name', provider.model_name],
        ['input-price', provider.input_tokens_per_1k],
        ['output-price', provider.output_tokens_per_1k],
        ['context-window', provider.context_window],
        ['max-output', provider.max_output_tokens],
        ['model-tier', provider.model_tier],
        ['rpm-limit', provider.rate_limits.rpm],
        ['tpm-limit', provider.rate_limits.tpm],
        ['rps-limit', provider.rate_limits.rps]
    ];
    
    fields.forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) element.value = value;
    });
    
    // Set feature checkboxes
    const featureCheckboxes = document.querySelectorAll('.feature-checkboxes input');
    featureCheckboxes.forEach(cb => {
        cb.checked = provider.features.includes(cb.value);
    });
    
    const modal = document.getElementById('provider-modal');
    if (modal) modal.classList.remove('hidden');
}

function deleteProvider(index) {
    if (confirm('Are you sure you want to delete this provider?')) {
        pricingData.cloudLLMProviders.splice(index, 1);
        populateProvidersList();
        populateUsageProviders();
    }
}

function closeProviderModal() {
    const modal = document.getElementById('provider-modal');
    if (modal) modal.classList.add('hidden');
    resetProviderForm();
}

function resetProviderForm() {
    const form = document.getElementById('provider-form');
    if (form) form.reset();
    const checkboxes = document.querySelectorAll('.feature-checkboxes input');
    checkboxes.forEach(cb => cb.checked = false);
}

function saveProvider(event) {
    event.preventDefault();
    
    const features = [];
    document.querySelectorAll('.feature-checkboxes input:checked').forEach(cb => {
        features.push(cb.value);
    });
    
    const getValue = (id) => {
        const element = document.getElementById(id);
        return element ? element.value : '';
    };
    
    const providerData = {
        provider: getValue('provider-name'),
        model_name: getValue('model-name'),
        input_tokens_per_1k: parseFloat(getValue('input-price')) || 0,
        output_tokens_per_1k: parseFloat(getValue('output-price')) || 0,
        context_window: parseInt(getValue('context-window')) || 0,
        max_output_tokens: parseInt(getValue('max-output')) || 0,
        model_tier: getValue('model-tier'),
        rate_limits: {
            rpm: parseInt(getValue('rpm-limit')) || 0,
            tpm: parseInt(getValue('tpm-limit')) || 0,
            rps: parseFloat(getValue('rps-limit')) || 0
        },
        features: features
    };
    
    if (editingProvider >= 0) {
        pricingData.cloudLLMProviders[editingProvider] = providerData;
    } else {
        pricingData.cloudLLMProviders.push(providerData);
    }
    populateProvidersList();
    populateUsageProviders();
    closeProviderModal();
}

function importConfig() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const config = JSON.parse(e.target.result);
                    if (config.cloudLLMProviders) {
                        pricingData.cloudLLMProviders = config.cloudLLMProviders;
                        populateProvidersList();
                        populateUsageProviders();
                        alert('Configuration imported successfully!');
                    } else {
                        alert('Invalid configuration file format.');
                    }
                } catch (error) {
                    alert('Error parsing configuration file: ' + error.message);
                }
            };
            reader.readAsText(file);
        }
    };
    input.click();
}


function exportConfig() {
    const config = {
        exportDate: new Date().toISOString(),
        cloudLLMProviders: pricingData.cloudLLMProviders
    };
    
    const dataStr = JSON.stringify(config, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(dataBlob);
    downloadLink.download = `llm-config-${new Date().toISOString().split('T')[0]}.json`;
    downloadLink.click();
}

// Usage Calculator Functions (keeping all enhanced functionality)
function populateUsageProviders() {
    const select = document.getElementById('usage-provider');
    if (!select) return;
    
    select.innerHTML = '';
    pricingData.cloudLLMProviders.forEach((provider, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${provider.provider} - $${provider.input_tokens_per_1k}/$${provider.output_tokens_per_1k}`;
        select.appendChild(option);
    });
    
    // Add event listener
    select.addEventListener('change', calculateUsageCosts);
}

function setupUsageCalculator() {
    // Setup method buttons
    const methodButtons = document.querySelectorAll('.method-btn');
    methodButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            methodButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCalculationMethod = btn.dataset.method;
            setupCalculationInputs();
        });
    });
    
    setupCalculationInputs();
    calculateUsageCosts();
}

function setupCalculationInputs() {
    const container = document.getElementById('calculation-inputs');
    if (!container) return;
    
    const method = pricingData.usageCalculationTypes.find(m => m.type === currentCalculationMethod);
    if (!method) return;
    
    let inputsHTML = `<div class="form-group" style="grid-column: 1 / -1;">
        <h4>${method.name}</h4>
        <p style="color: var(--color-text-secondary);">${method.description}</p>
    </div>`;
    
    method.fields.forEach(field => {
        const fieldName = field.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        let placeholder = '';
        let defaultValue = '';
        
        // Set sensible defaults based on field type
        if (field.includes('tokens')) {
            placeholder = field.includes('input') ? '100' : '200';
            defaultValue = field.includes('input') ? '100' : '200';
        } else if (field === 'requests_per_day') {
            placeholder = '1000';
            defaultValue = '1000';
        } else if (field === 'rpm') {
            placeholder = '60';
            defaultValue = '60';
        } else if (field === 'rps') {
            placeholder = '1';
            defaultValue = '1';
        } else if (field === 'users_per_day') {
            placeholder = '100';
            defaultValue = '100';
        } else if (field === 'interactions_per_user') {
            placeholder = '5';
            defaultValue = '5';
        }
        
        inputsHTML += `
            <div class="form-group">
                <label class="form-label">${fieldName}</label>
                <input type="number" id="${field}" class="form-control" min="0" step="any" placeholder="${placeholder}" value="${defaultValue}">
            </div>
        `;
    });
    
    container.innerHTML = inputsHTML;
    
    // Add event listeners
    method.fields.forEach(field => {
        const input = document.getElementById(field);
        if (input) {
            input.addEventListener('input', calculateUsageCosts);
        }
    });
}

function calculateUsageCosts() {
    const providerSelect = document.getElementById('usage-provider');
    if (!providerSelect) return;
    
    const providerIndex = parseInt(providerSelect.value) || 0;
    const provider = pricingData.cloudLLMProviders[providerIndex];
    if (!provider) return;
    
    let dailyCost = 0;
    let validationMessages = [];
    
    const method = pricingData.usageCalculationTypes.find(m => m.type === currentCalculationMethod);
    if (!method) return;
    
    // Calculate based on method type
    switch (currentCalculationMethod) {
        case 'tokens_per_request':
            const avgInputTokens = parseFloat(document.getElementById('avg_input_tokens')?.value) || 0;
            const avgOutputTokens = parseFloat(document.getElementById('avg_output_tokens')?.value) || 0;
            const requestsPerDay = parseFloat(document.getElementById('requests_per_day')?.value) || 0;
            
            dailyCost = (avgInputTokens * provider.input_tokens_per_1k + avgOutputTokens * provider.output_tokens_per_1k) * requestsPerDay / 1000;
            
            // Validate against RPM limits
            const requestsPerMinute = requestsPerDay / (24 * 60);
            if (requestsPerMinute > provider.rate_limits.rpm) {
                validationMessages.push({
                    type: 'error',
                    message: `Request rate (${requestsPerMinute.toFixed(1)} RPM) exceeds provider limit (${provider.rate_limits.rpm} RPM)`
                });
            }
            
            break;
            
        case 'requests_per_minute':
            const rpm = parseFloat(document.getElementById('rpm')?.value) || 0;
            const rpmInputTokens = parseFloat(document.getElementById('avg_input_tokens')?.value) || 0;
            const rpmOutputTokens = parseFloat(document.getElementById('avg_output_tokens')?.value) || 0;
            
            dailyCost = rpm * 60 * 24 * (rpmInputTokens * provider.input_tokens_per_1k + rpmOutputTokens * provider.output_tokens_per_1k) / 1000;
            
            if (rpm > provider.rate_limits.rpm) {
                validationMessages.push({
                    type: 'error',
                    message: `RPM (${rpm}) exceeds provider limit (${provider.rate_limits.rpm})`
                });
            }
            
            break;
            
        case 'requests_per_second':
            const rps = parseFloat(document.getElementById('rps')?.value) || 0;
            const rpsInputTokens = parseFloat(document.getElementById('avg_input_tokens')?.value) || 0;
            const rpsOutputTokens = parseFloat(document.getElementById('avg_output_tokens')?.value) || 0;
            
            dailyCost = rps * 86400 * (rpsInputTokens * provider.input_tokens_per_1k + rpsOutputTokens * provider.output_tokens_per_1k) / 1000;
            
            if (rps > provider.rate_limits.rps) {
                validationMessages.push({
                    type: 'error',
                    message: `RPS (${rps}) exceeds provider limit (${provider.rate_limits.rps})`
                });
            }
            
            break;
            
        case 'tokens_per_day':
            const inputTokensPerDay = parseFloat(document.getElementById('input_tokens_per_day')?.value) || 0;
            const outputTokensPerDay = parseFloat(document.getElementById('output_tokens_per_day')?.value) || 0;
            
            dailyCost = (inputTokensPerDay * provider.input_tokens_per_1k + outputTokensPerDay * provider.output_tokens_per_1k) / 1000;
            
            const totalTokensPerMinute = (inputTokensPerDay + outputTokensPerDay) / (24 * 60);
            if (totalTokensPerMinute > provider.rate_limits.tpm) {
                validationMessages.push({
                    type: 'warning',
                    message: `Token rate may approach TPM limits during peak usage`
                });
            }
            
            break;
            
        case 'business_metrics':
            const usersPerDay = parseFloat(document.getElementById('users_per_day')?.value) || 0;
            const interactionsPerUser = parseFloat(document.getElementById('interactions_per_user')?.value) || 0;
            const bizInputTokens = parseFloat(document.getElementById('avg_input_tokens')?.value) || 0;
            const bizOutputTokens = parseFloat(document.getElementById('avg_output_tokens')?.value) || 0;
            
            dailyCost = usersPerDay * interactionsPerUser * (bizInputTokens * provider.input_tokens_per_1k + bizOutputTokens * provider.output_tokens_per_1k) / 1000;
            
            const totalRequests = usersPerDay * interactionsPerUser;
            const businessRPM = totalRequests / (24 * 60);
            if (businessRPM > provider.rate_limits.rpm) {
                validationMessages.push({
                    type: 'error',
                    message: `Business metrics would generate ${businessRPM.toFixed(1)} RPM, exceeding provider limit`
                });
            }
            
            break;
    }
    
    // Add cost optimization recommendations
    if (dailyCost > 100) {
        validationMessages.push({
            type: 'warning',
            message: `High daily cost detected ($${dailyCost.toFixed(2)}). Consider optimizing token usage or exploring cheaper alternatives.`
        });
    }
    
    // Display results
    displayUsageResults(provider, dailyCost, validationMessages);
    updateUsageChart(provider, dailyCost);
}

function displayUsageResults(provider, dailyCost, validationMessages) {
    const costBreakdown = document.getElementById('cost-breakdown');
    const validationContainer = document.getElementById('validation-messages');
    
    if (costBreakdown) {
        const monthlyCost = dailyCost * 30;
        const yearlyCost = dailyCost * 365;
        
        costBreakdown.innerHTML = `
            <div class="cost-item">
                <span class="cost-label">Selected Provider:</span>
                <span class="cost-value">${provider.provider}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">Daily Cost:</span>
                <span class="cost-value">$${dailyCost.toFixed(2)}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">Monthly Cost:</span>
                <span class="cost-value">$${monthlyCost.toFixed(2)}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">Annual Cost:</span>
                <span class="cost-value">$${yearlyCost.toFixed(2)}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">Model Tier:</span>
                <span class="cost-value">${provider.model_tier}</span>
            </div>
        `;
    }
    
    if (validationContainer) {
        validationContainer.innerHTML = validationMessages.map(msg => 
            `<div class="alert alert--${msg.type}">${msg.message}</div>`
        ).join('');
        
        if (validationMessages.length === 0) {
            validationContainer.innerHTML = '<div class="alert alert--success">All validations passed. Configuration looks good!</div>';
        }
    }
}

function updateUsageChart(provider, dailyCost) {
    const canvas = document.getElementById('usage-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Destroy existing chart
    if (window.usageChart) {
        window.usageChart.destroy();
    }
    
    // Cost projection over 12 months
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthlyCosts = months.map(() => dailyCost * 30);
    
    window.usageChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Monthly Cost ($)',
                data: monthlyCosts,
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value;
                        }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: `Cost Projection - ${provider.provider}`
                }
            }
        }
    });
}

// Development Planner Functions (keeping all enhanced functionality)
function setupDevelopmentPlanner() {
    populateProjectTypeSelector();
    populateDevelopmentPhases();
    setupProjectInputs();

    // Set default project type if not set
    if (!window.selectedProjectTypeKey) {
        window.selectedProjectTypeKey = pricingData.projectTypes[0].key;
    }
}

// Populate the project type selector dropdown
function populateProjectTypeSelector() {
    let selector = document.getElementById('project-type');
    if (!selector) return;
    selector.innerHTML = '';
    pricingData.projectTypes.forEach(pt => {
        const option = document.createElement('option');
        option.value = pt.key;
        option.textContent = pt.name;
        selector.appendChild(option);
    });
    // Set event listener
    selector.addEventListener('change', function() {
        window.selectedProjectTypeKey = selector.value;
        populateDevelopmentPhases();
        updateProjectCosts();
    });
    // Set default
    selector.value = window.selectedProjectTypeKey || pricingData.projectTypes[0].key;
}

function populateDevelopmentPhases() {
    const container = document.getElementById('phases-container');
    if (!container) return;
    container.innerHTML = '';

    // Filter phases based on selected project type
    const selectedTypeKey = window.selectedProjectTypeKey || (pricingData.projectTypes && pricingData.projectTypes[0].key);
    let relevantPhaseNames = null;
    if (selectedTypeKey) {
        const typeObj = pricingData.projectTypes.find(pt => pt.key === selectedTypeKey);
        if (typeObj) relevantPhaseNames = typeObj.relevantPhases;
    }

    // Only show relevant phases if project type is selected
    let filteredPhases = pricingData.detailedDevelopmentPhases;
    if (relevantPhaseNames && Array.isArray(relevantPhaseNames)) {
        // Order phases according to relevantPhaseNames
        filteredPhases = relevantPhaseNames
            .map(phaseName => pricingData.detailedDevelopmentPhases.find(phase => phase.phase === phaseName))
            .filter(Boolean);
    }

    filteredPhases.forEach((phase, index) => {
        const phaseCard = document.createElement('div');
        phaseCard.className = 'phase-card';
        phaseCard.innerHTML = `
            <div class="phase-header" onclick="togglePhase(${index})">
                <input type="checkbox" id="phase-${index}" checked onchange="updateProjectCosts()" onclick="event.stopPropagation()">
                <div class="phase-title">${phase.phase}</div>
                <div class="phase-cost">$${phase.base_cost_min.toLocaleString()}-$${phase.base_cost_max.toLocaleString()}</div>
                <div class="phase-duration">${typeof phase.duration_weeks.medium === 'number' ? `${phase.duration_weeks.medium}w` : (phase.duration_weeks.ongoing || 'Continuous')}</div>
                <div class="expand-icon">▼</div>
            </div>
            <div class="phase-details">
                <div class="phase-description">
                    <strong>Category:</strong> ${phase.category}<br>
                    <strong>Team Roles:</strong> ${phase.team_roles.join(', ')}
                </div>
                <div class="activities-list">
                    ${phase.activities.map((activity, actIndex) => `
                        <div class="activity-item">
                            <input type="checkbox" id="activity-${index}-${actIndex}" checked onchange="updateProjectCosts()">
                            <span>${activity.name}</span>
                            <small>($${activity.cost_min.toLocaleString()}-$${activity.cost_max.toLocaleString()})</small>
                        </div>
                    `).join('')}
                </div>
                <div class="team-roles">
                    <h5>Team Roles:</h5>
                    <div class="roles-list">
                        ${phase.team_roles.map(role => `<span class="role-tag">${role}</span>`).join('')}
                    </div>
                </div>
                <div class="deliverables">
                    <h5>Deliverables:</h5>
                    <div class="deliverables-list">
                        ${phase.deliverables.map(deliverable => `<span class="deliverable-tag">${deliverable}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        container.appendChild(phaseCard);
    });
}

function togglePhase(index) {
    const phaseCard = document.querySelectorAll('.phase-card')[index];
    if (phaseCard) {
        phaseCard.classList.toggle('expanded');
    }
}

function setupProjectInputs() {
    const projectType = document.getElementById('project-type');
    const complexity = document.getElementById('project-complexity');
    const teamType = document.getElementById('team-type');
    
    [projectType, complexity, teamType].forEach(input => {
        if (input) {
            input.addEventListener('change', updateProjectCosts);
        }
    });
    
    setTimeout(updateProjectCosts, 200);
}

function updateProjectCosts() {
    const complexity = document.getElementById('project-complexity')?.value || 'medium';
    const teamType = document.getElementById('team-type')?.value || 'in-house';
    
    let totalMinCost = 0;
    let totalMaxCost = 0;
    let totalDurationWeeks = 0;
    let teamRoles = new Set();
    let selectedPhases = 0;
    
    const teamMultiplier = teamType === 'outsourced' ? 0.7 : teamType === 'mixed' ? 0.85 : 1.0;
    
    pricingData.detailedDevelopmentPhases.forEach((phase, index) => {
        const phaseCheckbox = document.getElementById(`phase-${index}`);
        if (phaseCheckbox?.checked) {
            selectedPhases++;
            const multiplier = phase.complexity_multipliers[complexity];
            const adjustedMin = phase.base_cost_min * multiplier * teamMultiplier;
            const adjustedMax = phase.base_cost_max * multiplier * teamMultiplier;

            totalMinCost += adjustedMin;
            totalMaxCost += adjustedMax;

            // Only add to totalDurationWeeks if the duration is a valid number
            const phaseDuration = phase.duration_weeks[complexity];
            if (typeof phaseDuration === 'number' && !isNaN(phaseDuration)) {
                totalDurationWeeks += phaseDuration;
            }

            phase.team_roles.forEach(role => teamRoles.add(role));

            // Add activity costs
            phase.activities.forEach((activity, actIndex) => {
                const activityCheckbox = document.getElementById(`activity-${index}-${actIndex}`);
                if (activityCheckbox?.checked) {
                    totalMinCost += activity.cost_min * multiplier * teamMultiplier;
                    totalMaxCost += activity.cost_max * multiplier * teamMultiplier;
                }
            });
        }
    });
    
    updateProjectSummary(totalMinCost, totalMaxCost, totalDurationWeeks, Array.from(teamRoles), selectedPhases);
    updateProjectChart(totalMinCost, totalMaxCost, selectedPhases);
}

function updateProjectSummary(minCost, maxCost, durationWeeks, teamRoles, selectedPhases) {
    const projectCosts = document.getElementById('project-costs');
    const projectTimeline = document.getElementById('project-timeline');
    const teamRequirements = document.getElementById('team-requirements');
    
    if (projectCosts) {
        projectCosts.innerHTML = `
            <div class="cost-item">
                <span class="cost-label">Minimum Cost:</span>
                <span class="cost-value">$${minCost.toLocaleString()}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">Maximum Cost:</span>
                <span class="cost-value">$${maxCost.toLocaleString()}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">Expected Cost:</span>
                <span class="cost-value">$${((minCost + maxCost) / 2).toLocaleString()}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">Selected Phases:</span>
                <span class="cost-value">${selectedPhases} of ${pricingData.detailedDevelopmentPhases.length}</span>
            </div>
        `;
    }
    
    if (projectTimeline) {
        const months = Math.ceil(durationWeeks / 4);
        projectTimeline.innerHTML = `
            <div class="cost-item">
                <span class="cost-label">Duration (Weeks):</span>
                <span class="cost-value">${durationWeeks}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">Duration (Months):</span>
                <span class="cost-value">${months}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">Time to Market:</span>
                <span class="cost-value">${months + 1} months</span>
            </div>
        `;
    }
    
    if (teamRequirements) {
        teamRequirements.innerHTML = `
            <div class="cost-item">
                <span class="cost-label">Required Roles:</span>
                <span class="cost-value">${teamRoles.length}</span>
            </div>
            <div style="margin-top: 12px;">
                ${teamRoles.map(role => `<span class="role-tag">${role}</span>`).join('')}
            </div>
        `;
    }
}

function updateProjectChart(minCost, maxCost, selectedPhases) {
    const canvas = document.getElementById('project-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    if (window.projectChart) {
        window.projectChart.destroy();
    }
    
    // Old logic (commented out):
    // const checkedPhases = pricingData.detailedDevelopmentPhases.filter((_, idx) => {
    //     const phaseCheckbox = document.getElementById(`phase-${idx}`);
    //     return phaseCheckbox && phaseCheckbox.checked;
    // });
    // const phaseNames = checkedPhases.map(p => p.phase);
    // const phaseCosts = checkedPhases.map(p => (p.base_cost_min + p.base_cost_max) / 2);

    // New logic: Use relevant phases for selected project type, in correct order, and only those checked
    const selectedTypeKey = window.selectedProjectTypeKey || (pricingData.projectTypes && pricingData.projectTypes[0].key);
    let relevantPhaseNames = null;
    if (selectedTypeKey) {
        const typeObj = pricingData.projectTypes.find(pt => pt.key === selectedTypeKey);
        if (typeObj) relevantPhaseNames = typeObj.relevantPhases;
    }
    let filteredPhases = pricingData.detailedDevelopmentPhases;
    if (relevantPhaseNames && Array.isArray(relevantPhaseNames)) {
        filteredPhases = relevantPhaseNames
            .map(phaseName => pricingData.detailedDevelopmentPhases.find(phase => phase.phase === phaseName))
            .filter(Boolean);
    }
    /*
    // Only include checked phases
    const checkedPhases = filteredPhases.filter((phase, idx) => {
        // Find the index in detailedDevelopmentPhases to match the checkbox id
        const phaseIndex = pricingData.detailedDevelopmentPhases.findIndex(p => p.phase === phase.phase);
        const phaseCheckbox = document.getElementById(`phase-${phaseIndex}`);
        return phaseCheckbox && phaseCheckbox.checked;
    });*/
    // Only include checked phases (use index from filteredPhases, not detailedDevelopmentPhases)
    const checkedPhases = filteredPhases.filter((phase, idx) => {
    const phaseCheckbox = document.getElementById(`phase-${idx}`);
    return phaseCheckbox && phaseCheckbox.checked;
    });
    const phaseNames = checkedPhases.map(p => p.phase);
    const phaseCosts = checkedPhases.map(p => (p.base_cost_min + p.base_cost_max) / 2);

    // Use a more distinct color palette for each phase
    const distinctColors = [
        '#1FB8CD', // cyan
        '#FF6F61', // red-orange
        '#6B5B95', // purple
        '#88B04B', // green
        '#F7CAC9', // pink
        '#92A8D1', // blue
        '#955251', // brown
        '#B565A7', // violet
        '#009B77', // teal
        '#DD4124', // orange-red
        '#D65076', // magenta
        '#45B8AC', // turquoise
        '#EFC050', // yellow
        '#5B5EA6', // indigo
        '#9B2335', // deep red
        '#DFCFBE', // beige
        '#55B4B0', // aqua
        '#E15D44', // orange
        '#7FCDCD', // light teal
        '#BC243C'  // crimson
    ];
    window.projectChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: phaseNames,
            datasets: [{
                data: phaseCosts,
                backgroundColor: phaseNames.map((_, i) => distinctColors[i % distinctColors.length])
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Cost Distribution by Phase'
                },
                legend: {
                    display: true,
                    labels: {
                        boxWidth: 20,
                        font: { size: 12 },
                        padding: 16,
                    }
                }
            }
        }
    });
}

// Infrastructure Functions (keeping all enhanced functionality)
function setupInfrastructure() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            toggleInfrastructureMode(btn.dataset.mode);
        });
    });
    
    const gpuProvider = document.getElementById('gpu-provider');
    const gpuHours = document.getElementById('gpu-hours');
    const selfHostingGpu = document.getElementById('self-hosting-gpu');
    const gpuQuantity = document.getElementById('gpu-quantity');
    
    if (gpuProvider) gpuProvider.addEventListener('change', updateCloudCosts);
    if (gpuHours) gpuHours.addEventListener('input', updateCloudCosts);
    if (selfHostingGpu) selfHostingGpu.addEventListener('change', updateSelfHostingCosts);
    if (gpuQuantity) gpuQuantity.addEventListener('input', updateSelfHostingCosts);
    
    updateCloudCosts();
    updateSelfHostingCosts();
}

function populateGPUProviders() {
    const select = document.getElementById('gpu-provider');
    if (!select) return;
    
    select.innerHTML = '';
    pricingData.gpuCloudCosts.forEach((provider, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${provider.provider} - ${provider.gpuType} ($${provider.costPerHour}/hour)`;
        select.appendChild(option);
    });
}

function toggleInfrastructureMode(mode) {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(btn => btn.classList.remove('active'));
    
    const activeButton = document.querySelector(`[data-mode="${mode}"]`);
    if (activeButton) activeButton.classList.add('active');
    
    const cloudSection = document.getElementById('cloud-section');
    const selfHostingSection = document.getElementById('self-hosting-section');
    
    if (mode === 'cloud') {
        if (cloudSection) cloudSection.classList.remove('hidden');
        if (selfHostingSection) selfHostingSection.classList.add('hidden');
    } else {
        if (cloudSection) cloudSection.classList.add('hidden');
        if (selfHostingSection) selfHostingSection.classList.remove('hidden');
    }
}

function updateCloudCosts() {
    const providerSelect = document.getElementById('gpu-provider');
    const hoursInput = document.getElementById('gpu-hours');
    
    if (!providerSelect || !hoursInput) return;
    
    const providerIndex = parseInt(providerSelect.value) || 0;
    const hours = parseInt(hoursInput.value) || 720;
    const provider = pricingData.gpuCloudCosts[providerIndex];
    
    const monthlyCost = provider.costPerHour * hours;
    const annualCost = monthlyCost * 12;
    
    const summaryDiv = document.getElementById('cloud-cost-summary');
    if (summaryDiv) {
        summaryDiv.innerHTML = `
            <div class="cost-item">
                <span class="cost-label">Provider:</span>
                <span class="cost-value">${provider.provider}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">GPU Configuration:</span>
                <span class="cost-value">${provider.gpuType}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">Monthly Cost:</span>
                <span class="cost-value">$${monthlyCost.toFixed(2)}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">Annual Cost:</span>
                <span class="cost-value">$${annualCost.toFixed(2)}</span>
            </div>
        `;
    }
}

function updateSelfHostingCosts() {
    const gpuSelect = document.getElementById('self-hosting-gpu');
    const quantityInput = document.getElementById('gpu-quantity');
    
    if (!gpuSelect || !quantityInput) return;
    
    const gpuType = gpuSelect.value;
    const quantity = parseInt(quantityInput.value) || 1;
    
    const gpuPrices = {
        'h100': 25000,
        'a100': 12000
    };
    
    const gpuCost = gpuPrices[gpuType] * quantity;
    const infrastructureCost = gpuCost * 0.3; // 30% for server, networking, etc.
    const maintenanceCostPerYear = gpuCost * 0.1; // 10% per year
    const powerCostPerYear = quantity * 700 * 24 * 365 / 1000 * 0.12; // ~$0.12/kWh
    
    const totalInitialCost = gpuCost + infrastructureCost;
    const totalAnnualCost = maintenanceCostPerYear + powerCostPerYear;
    const threeYearTCO = totalInitialCost + (totalAnnualCost * 3);
    
    const tcoDiv = document.getElementById('tco-breakdown');
    if (tcoDiv) {
        tcoDiv.innerHTML = `
            <div class="cost-item">
                <span class="cost-label">Initial Hardware Cost:</span>
                <span class="cost-value">$${totalInitialCost.toLocaleString()}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">Annual Operating Cost:</span>
                <span class="cost-value">$${totalAnnualCost.toFixed(0).toLocaleString()}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">3-Year TCO:</span>
                <span class="cost-value">$${threeYearTCO.toFixed(0).toLocaleString()}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">Monthly Equivalent:</span>
                <span class="cost-value">$${(threeYearTCO / 36).toFixed(0).toLocaleString()}</span>
            </div>
        `;
    }
}

// Simple Pricing Strategy Functions (REVERTED TO SIMPLE)
function setupPricingStrategy() {
    const modelSelect = document.getElementById('pricing-model-select');
    if (modelSelect) {
        modelSelect.addEventListener('change', handlePricingModelSelection);
    }
    
    // Add event listeners to revenue calculator inputs
    const revenueInputs = ['expected-customers', 'price-per-customer', 'usage-units', 'price-per-unit'];
    revenueInputs.forEach(id => {
        const element = document.getElementById(id);
       

        if (element) {
            element.addEventListener('input', calculateSimpleRevenue);
        }
    });
    
    calculateSimpleRevenue();
}

function handlePricingModelSelection() {
    const modelSelect = document.getElementById('pricing-model-select');
    const detailsDiv = document.getElementById('model-details');
    
    if (!modelSelect || !detailsDiv) return;
    
    const selectedIndex = parseInt(modelSelect.value);
    if (isNaN(selectedIndex) || selectedIndex < 0) {
        detailsDiv.innerHTML = '<p>Select a pricing model above to see details and calculate revenue projections.</p>';
        return;
    }
    
    const model = pricingData.simplePricingModels[selectedIndex];
    detailsDiv.innerHTML = `
        <h4>${model.model}</h4>
        <p><strong>Description:</strong> ${model.description}</p>
        <p><strong>Best for:</strong> ${model.useCase}</p>
        <p><strong>Cost Predictability:</strong> ${model.costPredictability}</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px;"></div>
    `;
}
function calculateSimpleRevenue() {
    const customers = parseFloat(document.getElementById('expected-customers')?.value) || 0;
    const pricePerCustomer = parseFloat(document.getElementById('price-per-customer')?.value) || 0;
    const usageUnits = parseFloat(document.getElementById('usage-units')?.value) || 0;
    const pricePerUnit = parseFloat(document.getElementById('price-per-unit')?.value) || 0;

    const baseRevenue = customers * pricePerCustomer;
    const usageRevenue = customers * usageUnits * pricePerUnit;
    const totalMonthlyRevenue = baseRevenue + usageRevenue;
    const annualRevenue = totalMonthlyRevenue * 12;
    const revenuePerCustomer = customers > 0 ? totalMonthlyRevenue / customers : 0;

    // Update display
    const monthlyEl = document.getElementById('monthly-revenue');
    const annualEl = document.getElementById('annual-revenue');
    const perCustomerEl = document.getElementById('revenue-per-customer');
    let stepsEl = document.getElementById('revenue-calculation-steps');

    if (monthlyEl) { monthlyEl.textContent = `$${totalMonthlyRevenue.toFixed(2)}`; }
    if (annualEl) { annualEl.textContent = `$${annualRevenue.toFixed(2)}`; }
    if (perCustomerEl) { perCustomerEl.textContent = `$${revenuePerCustomer.toFixed(2)}`; }

    // Ensure the steps container exists in the DOM
    if (!stepsEl) {
        // Try to insert after annual revenue or monthly revenue
        const annualParent = annualEl?.parentElement;
        if (annualParent) {
            stepsEl = document.createElement('div');
            stepsEl.id = 'revenue-calculation-steps';
            stepsEl.style.marginTop = '16px';
            annualParent.parentElement?.appendChild(stepsEl);
        }
    }

    // Add expandable calculation steps
    if (stepsEl) {
        stepsEl.innerHTML = `
            <button id="toggle-steps-btn" class="btn btn-secondary" style="margin-bottom:8px;">Show Calculation Steps ▼</button>
            <div id="steps-content" style="display:none; border:1px solid #e0e0e0; border-radius:6px; padding:12px; background:#fafbfc; margin-bottom:8px;">
                <strong>Step 1:</strong> Base Revenue = Customers × Price per Customer<br>
                <span style="margin-left:16px;">${customers} × $${pricePerCustomer} = <b>$${baseRevenue.toFixed(2)}</b></span><br><br>
                <strong>Step 2:</strong> Usage Revenue = Customers × Usage Units per Customer × Price per Unit<br>
                <span style="margin-left:16px;">${customers} × ${usageUnits} × $${pricePerUnit} = <b>$${usageRevenue.toFixed(2)}</b></span><br><br>
                <strong>Step 3:</strong> Total Monthly Revenue = Base Revenue + Usage Revenue<br>
                <span style="margin-left:16px;">$${baseRevenue.toFixed(2)} + $${usageRevenue.toFixed(2)} = <b>$${totalMonthlyRevenue.toFixed(2)}</b></span><br><br>
                <strong>Step 4:</strong> Annual Revenue = Total Monthly Revenue × 12<br>
                <span style="margin-left:16px;">$${totalMonthlyRevenue.toFixed(2)} × 12 = <b>$${annualRevenue.toFixed(2)}</b></span><br><br>
                <strong>Step 5:</strong> Revenue per Customer = Total Monthly Revenue ÷ Customers<br>
                <span style="margin-left:16px;">$${totalMonthlyRevenue.toFixed(2)} ÷ ${customers} = <b>$${revenuePerCustomer.toFixed(2)}</b></span>
            </div>
        `;
        // Add toggle logic
        const btn = document.getElementById('toggle-steps-btn');
        const content = document.getElementById('steps-content');
        if (btn && content) {
            btn.onclick = function() {
                if (content.style.display === 'none') {
                    content.style.display = 'block';
                    btn.textContent = 'Hide Calculation Steps ▲';
                } else {
                    content.style.display = 'none';
                    btn.textContent = 'Show Calculation Steps ▼';
                }
            };
        }
    }
}

// Simple ROI Calculator Functions (REVERTED TO SIMPLE)
function setupROICalculator() {
    const roiInputs = ['development-costs', 'monthly-revenue-roi', 'monthly-operating-costs', 'risk-level', 'efficiency-gain', 'market-advantage'];
    roiInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', calculateSimpleROI);
            element.addEventListener('change', calculateSimpleROI);
        }
    });
    
    calculateSimpleROI();
}

function calculateSimpleROI() {
    const developmentCosts = parseFloat(document.getElementById('development-costs')?.value) || 0;
    const monthlyRevenue = parseFloat(document.getElementById('monthly-revenue-roi')?.value) || 0;
    const monthlyOperatingCosts = parseFloat(document.getElementById('monthly-operating-costs')?.value) || 0;
    const riskLevel = document.getElementById('risk-level')?.value || 'medium';
    const efficiencyGain = parseInt(document.getElementById('efficiency-gain')?.value) || 50;
    const marketAdvantage = document.getElementById('market-advantage')?.value || 'medium';
    
    const monthlyProfit = monthlyRevenue - monthlyOperatingCosts;
    const breakEvenMonths = monthlyProfit > 0 ? Math.ceil(developmentCosts / monthlyProfit) : 0;
    const threeYearProfit = (monthlyProfit * 36) - developmentCosts;
    const threeYearROI = developmentCosts > 0 ? (threeYearProfit / developmentCosts) * 100 : 0;
    
    // Update display
    const breakEvenEl = document.getElementById('break-even-months');
    const roiEl = document.getElementById('three-year-roi');
    const profitEl = document.getElementById('monthly-profit');
    
    if (breakEvenEl) {
        if (breakEvenMonths > 0 && breakEvenMonths < 1000) {
            breakEvenEl.textContent = `${breakEvenMonths}`;
        } else {
            breakEvenEl.textContent = monthlyProfit <= 0 ? '∞' : '0';
        }
    }
    if (profitEl) { profitEl.textContent = `$${monthlyProfit.toFixed(0)}`; }
    if (roiEl) { roiEl.textContent = `${threeYearROI.toFixed(1)}%`; }
    
    // Calculate business impact
    updateBusinessImpactAnalysis(efficiencyGain, marketAdvantage, riskLevel, monthlyProfit);
}

function updateBusinessImpactAnalysis(efficiencyGain, marketAdvantage, riskLevel, monthlyProfit) {
    const impactResultsDiv = document.getElementById('impact-results');
    if (!impactResultsDiv) return;
    
    // Calculate impact score
    let impactScore = efficiencyGain;
    if (marketAdvantage === 'high') impactScore *= 1.3;
    else if (marketAdvantage === 'low') impactScore *= 0.8;
    
    // Adjust for risk
    let riskAdjustment = 1.0;
    if (riskLevel === 'high') riskAdjustment = 0.7;
    else if (riskLevel === 'low') riskAdjustment = 1.1;
    
    const adjustedImpact = impactScore * riskAdjustment;
    const confidenceLevel = riskLevel === 'low' ? 'High' : riskLevel === 'medium' ? 'Medium' : 'Low';
    const recommendationText = adjustedImpact > 60 ? 'Highly Recommended' : 
                             adjustedImpact > 40 ? 'Recommended' : 
                             adjustedImpact > 25 ? 'Consider with Caution' : 'Not Recommended';
    
    impactResultsDiv.innerHTML = `
        <div class='cost-item'>
            <span class='cost-label'>Business Impact Score:</span>
            <span class='cost-value'>${adjustedImpact.toFixed(0)}/100</span>
        </div>
        <div class='cost-item'>
            <span class='cost-label'>Confidence Level:</span>
            <span class='cost-value'>${confidenceLevel}</span>
        </div>
        <div class='cost-item'>
            <span class='cost-label'>Recommendation:</span>
            <span class='cost-value'>${recommendationText}</span>
        </div>
        <div class='cost-item'>
            <span class='cost-label'>Expected Efficiency Gain:</span>
            <span class='cost-value'>${efficiencyGain}%</span>
        </div>
    `;
}

// Export Functions
function exportResults() {
    const results = {
        exportDate: new Date().toISOString(),
        configuration: {
            selectedProviders: pricingData.cloudLLMProviders,
            currentCalculationMethod: currentCalculationMethod,
            projectConfiguration: {
                complexity: document.getElementById('project-complexity')?.value,
                teamType: document.getElementById('team-type')?.value
            }
        },
        analysis: "Comprehensive AI Pricing Analysis Results"
    };
    
    const dataStr = JSON.stringify(results, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(dataBlob);
    downloadLink.download = `ai-pricing-analysis-${new Date().toISOString().split('T')[0]}.json`;
    downloadLink.click();
}

function shareConfiguration() {
    const config = {
        providers: pricingData.cloudLLMProviders,
        timestamp: new Date().toISOString()
    };
    
    const configStr = btoa(JSON.stringify(config));
    const shareUrl = `${window.location.origin}${window.location.pathname}?config=${configStr}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'AI Pricing Calculator Configuration',
            url: shareUrl
        });
    } else {
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert('Configuration URL copied to clipboard!');
        });
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Enhanced AI Pricing Calculator with Reverted Pricing & ROI...');
    
    // Make functions globally available
    window.switchTab = switchTab;
    window.addNewProvider = addNewProvider;
    window.editProvider = editProvider;
    window.deleteProvider = deleteProvider;
    window.closeProviderModal = closeProviderModal;
    // window.importConfig = importConfig; // Removed: function not defined
    window.exportConfig = exportConfig;
    window.exportResults = exportResults;
    window.shareConfiguration = shareConfiguration;
    window.togglePhase = togglePhase;
    window.updateProjectCosts = updateProjectCosts;
    window.calculateUsageCosts = calculateUsageCosts;
    
    // Initialize tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            switchTab(button.dataset.tab);
        });
    });
    
    // Setup provider form
    const providerForm = document.getElementById('provider-form');
    if (providerForm) {
        providerForm.addEventListener('submit', saveProvider);
    }
    
    // Initialize first tab content
    populateProvidersList();
    
    console.log('Enhanced AI Pricing Calculator with Simple Pricing & ROI initialized successfully');
});
