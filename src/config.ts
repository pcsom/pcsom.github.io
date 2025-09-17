export const siteConfig = {
  name: "Pranav Somu",
  title: "Machine Learning Research Assistant",
  description: "Portfolio",
  accentColor: "#520808",
  social: {
    email: "psomu3@gatech.edu",
    linkedin: "https://linkedin.com/in/pranav-somu",
    twitter: "https://x.com/PranavSomu",
    github: "https://github.com/pcsom",
  },
  aboutMe:
    "I'm pursuing my BS/MS degree in Computer Science at Georgia Tech, with a passion for AI/ML theory and systems. I'm interested in Neural Architecture Search and meta-algorithms that improve Machine Learning processes. I'm currently researching LLM- & surrogate-guided Evolutionary Algorithms to optimize computer vision models at the Georgia Tech Research Institute and Automated Algorithm Design team. I've also had the opportunity to build Gen-AI applications and optimize infrastructure at Amazon Web Services. I'm always eager to explore new approaches and applications in AI and Machine Learning algorithms. Let's connect! The best way to reach me is via LinkedIn or email.",
  skills: ["Python", "C++", "Java", "SQL", "AWS"],
  projects: [
    {
      name: "PhysioFix - GenAI Physiotherapy Trainer",
      description:
        "Developed a GenAI physiotherapy trainer as a Swift app, automating personalized treatment planning using a LangChain RAG pipeline with GPT-4o. A deployed text-to-motion model converts these plans into animated GIFs, offering accessible and clear visual guidance for exercises.",
      link: "https://devpost.com/software/physioflix-interactive-genai-physiotherapy-movement-trainer",
      skills: ["LangChain", "Python", "Flask", "Swift"],
    },
    {
      name: "Agricultural Productivity Forecasting - Project Lead @ Big Data Big Impact",
      description:
        "Directed a team of 18 in creating a service to support data-driven agricultural policy by forecasting crop type and yield using satellite data. Led the optimization of LSTM and UNet models to achieve 91%+ prediction accuracy.",
      link: "",
      skills: ["Python", "AWS", "Pandas"],
    },
    {
      name: "North Alabama Foster Closet",
      description:
        "Led the development of a full-stack supply distribution system for a non-profit, enabling the efficient completion of over 800 yearly requests for 300 foster families. Improved system performance and data query speeds by 220x by refining the Python backend, Django REST APIs, and PostgreSQL database.",
      link: "https://github.com/pcsom/foster-db-system",
      skills: ["Python", "Django", "PostgreSQL", "JavaScript"],
    },
    {
      name: "American Sign Language (ASL) Education Tool - Big Data Big Impact",
      description:
        "Engineered deep learning algorithms for accessible ASL education through a real-time, ASL-to-English translation system. The solution uses a 95% accurate SSD ResNet50 hand sign classifier and a transformer architecture that surpassed prior research accuracy by 2%.",
      link: "https://github.com/pcsom/fingerspelling-zipformer-hybrid",
      skills: ["Python", "PyTorch", "Pandas", "TensorFlow"],
    },
    {
      name: "NLP Restaurant Search",
      description:
        "Developed an intelligent restaurant search and recommender engine featuring simple filtering and demand analytics for businesses. Fine-tuned a BERT model to classify attributes like cuisine from plaintext searches, achieving 93% accuracy in understanding user intent.",
      link: "https://devpost.com/software/dishfish",
      skills: ["Python", "Next.js", "Node.js", "MongoDB"],
    },
  ],
  experience: [
    {
      company: "Georgia Tech Research Institute",
      title: "Student Assistant",
      dateRange: "Aug. 2025 – Present",
      bullets: [ ],
    },
    {
      company: "Amazon Web Services",
      title: "Software Development Engineer Intern",
      dateRange: "May 2025 – July 2025",
      bullets: [
        "Built an agentic Gen-AI application for emergency ticket analysis that reduced weekly manual resolution effort by 8 hours. Used Amazon Bedrock to implement retrieval-augmented generation with an Anthropic Claude LLM and developed custom Java diagnostic tools to automate issue deduction and provide solutions.",
      ],
    },
    {
      company: "Georgia Tech Research Institute",
      title: "Student Assistant",
      dateRange: "Jan. 2025 – April 2025",
      bullets: [
        "Improved an LLM-guided evolutionary algorithm to enhance YOLO object detection models through neural architecture search. Cut runtime for model refinement and training by 22% by running LLM inference through a central server with a ZeroMQ message queue.",
      ],
    },
    {
      company: "Georgia Tech Automated Algorithm Design Team",
      title: "Undergraduate Researcher",
      dateRange: "Oct. 2024 – Present",
      bullets: [
        "Leading the development of a novel evolutionary algorithm for generating computer vision models. Built a deep-learning surrogate for predicting model performance, and integrated the predictor to decrease overall algorithm runtime by 27%.",
      ],
    },
    {
      company: "Amazon Web Services",
      title: "Software Development Engineer Intern",
      dateRange: "May 2024 – Aug. 2024",
      bullets: [
        "Optimized Java infrastructure for AWS Identity's information storage systems for a total runtime latency reduction of over 400 hours per month. Developed a search request handler using AWS Lambda and TypeScript to replace middleman services and built a customer-facing API, ultimately serving over 200M+ users.",
      ],
    },
    {
      company: "Leonardo DRS",
      title: "Software Engineering Intern",
      dateRange: "May 2024 – Aug. 2024",
      bullets: [
        "Refined image segmentation algorithms to improve edge detection resolution by 3x using Python OpenCV. Built program for compiling metrics to compare NVIDIA Deepstream models.",
      ],
    },
  ],
  education: [
    {
      school: "Georgia Institute of Technology",
      degree: "B.S. + M.S. in Computer Science",
      dateRange: "Graduating Dec. 2026",
      achievements: [
        "Faculty Honors (4.0/4.0 GPA)",
      ],
    },
  ],
};
