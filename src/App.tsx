import { useState, useEffect } from 'react';
import svgPaths from "./imports/svg-6sovak61ez";
import imgAdobeExpressFile31 from "figma:asset/7ba16f5335969b66c314f7955ee4897ab548acd6.png";

function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About me' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Awards' },
    { id: 'contacts', label: 'Contacts' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1f1f1f]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-['Poppins:Regular',_sans-serif] text-[18px] transition-colors duration-200 ${
                  activeSection === item.id ? 'text-[#f8f7f9]' : 'text-[#f8f7f9]/70 hover:text-[#f8f7f9]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-6">
            <div className="h-11 w-px bg-[#f8f7f9]" />
            <div className="flex gap-6">
              <SocialIcon type="linkedin" href="https://linkedin.com/in/anand-b-patil" />
              <SocialIcon type="github" href="https://github.com/Anand-b-patil" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function SocialIcon({ type, href }: { type: 'linkedin' | 'github'; href: string }) {
  const getPath = () => {
    if (type === 'linkedin') {
      return (
        <path
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"
          fill="currentColor"
        />
      );
    } else {
      return (
        <path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          fill="none"
        />
      );
    }
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-[#f8f7f9] hover:text-[#f8f7f9]/80 transition-colors duration-200"
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
        {getPath()}
      </svg>
    </a>
  );
}

function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[905px] h-[897px]">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1417 1409">
              <defs>
                <filter id="blur" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feGaussianBlur stdDeviation="128" />
                </filter>
              </defs>
              <ellipse
                cx="708.5"
                cy="704.5"
                rx="452.5"
                ry="448.5"
                fill="#f8f7f9"
                filter="url(#blur)"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9]">
              HI, I'M ANAND
            </h2>
            <h1 className="font-['Poppins:Bold',_sans-serif] text-[64px] lg:text-[96px] leading-[0.9] text-[#f8f7f9]">
              AI/ML<br />ENGINEER
            </h1>
          </div>
          
          <button 
            onClick={scrollToProjects}
            className="group border-2 border-[#f8f7f9] px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-[#f8f7f9] hover:text-[#1f1f1f]"
          >
            <span className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] group-hover:text-[#1f1f1f] transition-colors duration-300">
              VIEW MY PROJECTS
            </span>
          </button>
        </div>

        {/* Right content - Profile image */}
        <div className="relative">
          <div
            className="w-full h-[600px] lg:h-[800px] bg-cover bg-center bg-no-repeat rounded-lg"
            style={{ backgroundImage: `url('${imgAdobeExpressFile31}')` }}
          />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Poppins:Bold',_sans-serif] text-[96px] text-[#f8f7f9] mb-12">
          About me
        </h2>
        
        <div className="max-w-4xl">
          <p className="font-['Poppins:Regular',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5] mb-8">
            I'm a final-year CSE student from Belagavi, Karnataka, skilled in Machine Learning, Deep Learning, and Python. I have hands-on experience in building end-to-end AI solutions using TensorFlow, PyTorch, scikit-learn, and FastAPI.
          </p>
          <p className="font-['Poppins:Regular',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
            I'm passionate about leveraging AI and full-stack technologies to develop efficient real-world applications that improve operational efficiency and user experience. My work spans across computer vision, natural language processing, and intelligent systems development.
          </p>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] mb-8">
            EDUCATION
          </h3>
          <div className="max-w-4xl">
            <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-2">
              Angadi Institute of Technology and Management, BE in Computer Science
            </h4>
            <p className="font-['Poppins:ExtraLight',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-3">
              Dec 2022 — May 2026
            </p>
            <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5] mb-4">
              GPA: 8.56/10
            </p>
            <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
              Coursework: Data Structures and Algorithms, Database Management Systems, Operating Systems, Object-Oriented Programming (OOP), Computer Networks, Software Engineering, Machine Learning
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] mb-8">
            SKILLS
          </h3>
          <div className="max-w-4xl space-y-6">
            <div>
              <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-2">
                Programming Languages
              </h4>
              <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
                Python, C++, C, Java (Basic), SQL
              </p>
            </div>
            <div>
              <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-2">
                Machine Learning & Deep Learning
              </h4>
              <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
                TensorFlow, PyTorch, scikit-learn, Keras, OpenCV, NLP
              </p>
            </div>
            <div>
              <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-2">
                Deployment & Databases
              </h4>
              <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
                FastAPI, Flask, REST APIs, MongoDB, MySQL
              </p>
            </div>
            <div>
              <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-2">
                Tools & Platforms
              </h4>
              <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
                Git, GitHub, Jupyter Notebook, Google Colab, VS Code, Kaggle, Docker, Linux
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Hybrid CNN-LSTM Framework for Solar Irradiance Forecasting",
      github: "GitHub",
      description: "Proposed a novel framework for short-term solar irradiance forecasting using enhanced infrared (IR) sky images and a hybrid deep learning architecture. Reduced forecasting RMSE from 47.24 W/m² → 33.51 W/m² using IR sky image enhancement and a hybrid CNN-LSTM architecture. Optimized preprocessing with bicubic interpolation and OpenCV colormaps, improving prediction accuracy.",
      tech: "PyTorch, TensorFlow, OpenCV, Flask, CNN, LSTM"
    },
    {
      title: "Multilingual Speech Emotion Recognition",
      github: "GitHub",
      description: "Developed a speech emotion recognition system that detects emotions across multiple languages using MFCC, Chroma, and Mel Spectrogram features. Implemented deep learning models (CNN, LSTM) for real-time inference. Built a web-based demo using Flask + HTML/CSS/JS.",
      tech: "Librosa, TensorFlow, Keras, scikit-learn, Flask, Web Technologies"
    },
    {
      title: "Smart Fertilizer Recommendation System",
      github: "GitHub",
      description: "Built a Smart Fertilizer Recommendation System combining rule-based agricultural logic with a Random Forest ML model, achieving 96%+ accuracy in fertilizer predictions. Engineered novel features like Soil Health Index and nutrient stress indicators. Designed an interactive Streamlit web app for farmers.",
      tech: "scikit-learn, Pandas, NumPy, Streamlit, HTML, CSS"
    },
    {
      title: "LeadBoost – AI-Powered Lead Generation Platform",
      github: "GitHub",
      description: "Developed an AI-driven CRM tool that automates lead scoring, enrichment, and personalized outreach generation. Integrated Google Gemini API for intelligent lead scoring and message generation, with fallback deterministic scoring. Built a modular React + Flask architecture supporting CSV import, lead filtering, and insight visualization.",
      tech: "React, Vite, Flask, Python, Google Gemini API, HTML, CSS, JavaScript"
    },
    {
      title: "Laptop Price Predictor – Machine Learning Based Price Estimator",
      github: "https://github.com/Anand-b-patil/Laptop-Price-Predictor",
      description: "Built an intelligent machine learning model to predict laptop prices based on key specifications such as brand, processor type, RAM, storage, GPU, and display features. Implemented end-to-end pipeline including data preprocessing, feature engineering, model training, and deployment through a web interface for real-time predictions.",
      tech: "Python, Scikit-learn, Pandas, NumPy, Matplotlib, Flask, HTML, CSS"
    },
    {
  title: "Air Quality Prediction & Forecasting – Machine Learning Application",
  github: "https://github.com/Anand-b-patil/Air-Quality-Prediction-and-Forecasting-using-Machine-Learning",
  description: "Developed a dual-model system to (1) predict current Air Quality Index (AQI) based on pollutant levels and (2) forecast AQI up to 7 days ahead using historic time-series data. Built an interactive web interface via FastAPI for real-time input/predictions and dynamic visualization of forecasting results.",
  tech: "Python, FastAPI, XGBoost, Optuna, Pandas, Scikit-learn, Tailwind CSS, Chart.js"
  }


  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Poppins:Bold',_sans-serif] text-[96px] text-[#f8f7f9] mb-12">
          Projects
        </h2>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              github={project.github}
              description={project.description}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectItem({ title, github, description, tech }: { title: string; github: string; description: string; tech: string }) {
  return (
    <div className="max-w-4xl relative">
      <div className="pl-8 relative">
        <div className="absolute left-[-9px] top-[12px] w-[15px] h-[15px] bg-white/80 rounded-full backdrop-blur-sm" 
             style={{ filter: 'blur(0.5px)' }} />
        <h3 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-1">
          {title} <span className="font-['Poppins:Medium',_sans-serif]">{github}</span>
        </h3>
        <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5] mb-3">
          {description}
        </p>
        <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
          <span className="font-['Poppins:ExtraBold',_sans-serif]">Tech Stack:</span> {tech}
        </p>
      </div>
    </div>
  );
}

function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Poppins:Bold',_sans-serif] text-[96px] text-[#f8f7f9] mb-12">
          Awards & Achievements
        </h2>
        
        <div className="space-y-8">
          <div className="max-w-4xl relative">
            <div className="pl-8 relative">
              <div className="absolute left-[-9px] top-[12px] w-[15px] h-[15px] bg-white/80 rounded-full backdrop-blur-sm" 
                   style={{ filter: 'blur(0.5px)' }} />
              <h3 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-1">
                Ingenious 2k25 – Innovation Challenge
              </h3>
              <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
                Secured award for developing a cutting-edge Multilingual Speech Emotion Recognition System, leveraging LSTM networks with MFCC and Mel-Spectrogram features to achieve high accuracy in real-time emotion detection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactsSection() {
  return (
    <section id="contacts" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Poppins:Bold',_sans-serif] text-[96px] text-[#f8f7f9] mb-12">
          Contacts
        </h2>
        
        <div className="space-y-4 max-w-4xl">
          <div>
            <span className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              Email - 
            </span>
            <span className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              ap6272440@gmail.com
            </span>
          </div>
          <div>
            <span className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              Phone - 
            </span>
            <span className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              +91 7026487702
            </span>
          </div>
          <div>
            <span className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              LinkedIn - 
            </span>
            <a 
              href="https://linkedin.com/in/anand-b-patil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] hover:text-[#f8f7f9] transition-colors duration-200"
            >
              anand-b-patil
            </a>
          </div>
          <div>
            <span className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              GitHub - 
            </span>
            <a 
              href="https://github.com/Anand-b-patil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] hover:text-[#f8f7f9] transition-colors duration-200"
            >
              Anand-b-patil
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="bg-[#1f1f1f] min-h-screen text-white">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactsSection />
      </main>
    </div>
  );
}
