// Translations object
const translations = {
  en: {
    // Navigation
    "nav-home": "Home",
    "nav-services": "Services",
    "nav-work": "Work",
    "nav-pricing": "Pricing",
    "nav-team": "Team",
    "nav-contact": "Contact",
    "language-label": "Language:",

    // Logo
    logo: "DevTeam",

    // Hero Section
    "hero-title-1": "Your Vision, Our Code:",
    "hero-title-2": "Building Exceptional Web & App Experiences",
    "hero-description":
      "We're a passionate team of three developers who transform innovative ideas into powerful, scalable web applications and mobile solutions that drive business growth.",
    "cta-view-work": "View Our Work",
    "cta-get-quote": "Get a Quote",

    // Services Section
    "services-title": "Our Services",
    "services-subtitle": "Comprehensive web and mobile development solutions tailored to your business needs",
    "service-web-title": "Custom Web Development",
    "service-web-desc":
      "Full-stack web applications built with modern frameworks like React, Next.js, and Node.js for optimal performance and scalability.",
    "service-mobile-title": "Mobile App Development",
    "service-mobile-desc":
      "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.",
    "service-design-title": "UI/UX Design",
    "service-design-desc":
      "User-centered design solutions that combine aesthetic appeal with intuitive functionality to maximize user engagement.",
    "service-support-title": "Maintenance & Support",
    "service-support-desc":
      "Ongoing technical support, updates, and optimization to ensure your applications remain secure and performant.",

    // Pricing Model Section
    "pricing-model-title": "Our Pricing Model",
    "pricing-model-subtitle":
      "Transparent, flexible pricing tailored to your project's unique requirements. We believe in providing clear value propositions and custom quotes based on project scope, complexity, and timeline.",
    "pricing-intro-text":
      "Every project is unique, and so is our approach to pricing. We offer competitive rates across different service categories, ensuring you get the best value for your investment. Our pricing is based on project complexity, timeline, and specific requirements, allowing us to deliver exceptional results within your budget.",

    // Pricing Categories
    "pricing-web-category": "Website Development",
    "pricing-app-category": "Web Application Development",
    "pricing-design-category": "UI/UX Design Packages",
    "pricing-support-category": "Maintenance & Support",

    // Website Development
    "pricing-web-basic-title": "Basic Marketing Website",
    "pricing-web-basic-desc":
      "Professional business websites with responsive design, SEO optimization, and content management system.",
    "pricing-web-basic-feature-1": "5-8 pages responsive design",
    "pricing-web-basic-feature-2": "Content management system",
    "pricing-web-basic-feature-3": "SEO optimization",
    "pricing-web-basic-feature-4": "Contact forms integration",
    "pricing-web-basic-feature-5": "Mobile-friendly design",

    "pricing-web-ecommerce-title": "E-commerce Solution",
    "pricing-web-ecommerce-desc":
      "Complete online store with payment processing, inventory management, and customer portal.",
    "pricing-web-ecommerce-feature-1": "Product catalog management",
    "pricing-web-ecommerce-feature-2": "Payment gateway integration",
    "pricing-web-ecommerce-feature-3": "Order management system",
    "pricing-web-ecommerce-feature-4": "Customer accounts",
    "pricing-web-ecommerce-feature-5": "Analytics dashboard",

    "pricing-web-custom-title": "Custom Web Platform",
    "pricing-web-custom-desc":
      "Tailored web solutions with advanced functionality, integrations, and scalable architecture.",
    "pricing-web-custom-feature-1": "Custom functionality development",
    "pricing-web-custom-feature-2": "Third-party integrations",
    "pricing-web-custom-feature-3": "Advanced user management",
    "pricing-web-custom-feature-4": "Performance optimization",
    "pricing-web-custom-feature-5": "Scalable architecture",

    // Web Application Development
    "pricing-app-mvp-title": "MVP Web App",
    "pricing-app-mvp-desc": "Minimum viable product development to validate your concept and enter the market quickly.",
    "pricing-app-mvp-feature-1": "Core feature development",
    "pricing-app-mvp-feature-2": "User authentication",
    "pricing-app-mvp-feature-3": "Basic dashboard",
    "pricing-app-mvp-feature-4": "Database design",
    "pricing-app-mvp-feature-5": "Deployment setup",

    "pricing-app-enterprise-title": "Complex Enterprise Solution",
    "pricing-app-enterprise-desc":
      "Full-scale enterprise applications with advanced features, security, and integration capabilities.",
    "pricing-app-enterprise-feature-1": "Advanced feature set",
    "pricing-app-enterprise-feature-2": "Enterprise security",
    "pricing-app-enterprise-feature-3": "System integrations",
    "pricing-app-enterprise-feature-4": "Performance optimization",
    "pricing-app-enterprise-feature-5": "Comprehensive testing",

    "pricing-app-api-title": "API Development",
    "pricing-app-api-desc":
      "RESTful APIs and microservices development for seamless data exchange and system integration.",
    "pricing-app-api-feature-1": "RESTful API design",
    "pricing-app-api-feature-2": "Documentation",
    "pricing-app-api-feature-3": "Authentication & security",
    "pricing-app-api-feature-4": "Rate limiting",
    "pricing-app-api-feature-5": "Testing suite",

    // UI/UX Design
    "pricing-design-discovery-title": "Discovery & Wireframing",
    "pricing-design-discovery-desc":
      "User research, information architecture, and wireframe development to establish project foundation.",
    "pricing-design-discovery-feature-1": "User research & personas",
    "pricing-design-discovery-feature-2": "Information architecture",
    "pricing-design-discovery-feature-3": "Wireframe creation",
    "pricing-design-discovery-feature-4": "User flow mapping",
    "pricing-design-discovery-feature-5": "Usability recommendations",

    "pricing-design-system-title": "Full Design System",
    "pricing-design-system-desc":
      "Complete visual design system with components, style guides, and interactive prototypes.",
    "pricing-design-system-feature-1": "Visual design system",
    "pricing-design-system-feature-2": "Component library",
    "pricing-design-system-feature-3": "Interactive prototypes",
    "pricing-design-system-feature-4": "Style guide documentation",
    "pricing-design-system-feature-5": "Design handoff assets",

    // Maintenance & Support
    "pricing-support-retainer-title": "Monthly Retainer",
    "pricing-support-retainer-desc":
      "Ongoing maintenance, updates, and support to keep your application running smoothly.",
    "pricing-support-retainer-feature-1": "Regular updates & patches",
    "pricing-support-retainer-feature-2": "Performance monitoring",
    "pricing-support-retainer-feature-3": "Security maintenance",
    "pricing-support-retainer-feature-4": "Content updates",
    "pricing-support-retainer-feature-5": "Priority support",

    "pricing-support-demand-title": "On-Demand Support",
    "pricing-support-demand-desc":
      "Flexible support hours for troubleshooting, updates, and feature enhancements as needed.",
    "pricing-support-demand-feature-1": "Hourly support rate",
    "pricing-support-demand-feature-2": "Bug fixes & troubleshooting",
    "pricing-support-demand-feature-3": "Feature enhancements",
    "pricing-support-demand-feature-4": "Performance optimization",
    "pricing-support-demand-feature-5": "Consultation services",

    // Pricing Labels
    "pricing-starting-from": "Starting from",
    "pricing-custom-quote": "Custom Quote Available",
    "pricing-hourly-rate": "Hourly Rate",

    // Pricing CTA
    "pricing-cta-title": "Ready to Start Your Project?",
    "pricing-cta-desc":
      "Every project is unique. Let's discuss your specific requirements and provide you with a detailed, transparent quote.",
    "pricing-cta-quote": "Request a Free Quote",
    "pricing-cta-discuss": "Discuss Your Project",

    // Pricing Plans Section
    "pricing-plans-title": "Our Pricing Plans",
    "pricing-plans-subtitle": "Transparent and flexible pricing options to suit your project needs",
    "pricing-period": "project",
    "pricing-popular": "Most Popular",
    "pricing-get-started": "Get Started",

    // Basic Plan
    "pricing-basic-title": "Basic",
    "pricing-basic-desc": "Perfect for small businesses just getting started",
    "pricing-basic-feature-1": "5-page responsive website",
    "pricing-basic-feature-2": "Basic SEO optimization",
    "pricing-basic-feature-3": "Contact form integration",
    "pricing-basic-feature-4": "Mobile-friendly design",
    "pricing-basic-feature-5": "1 month of support",
    "pricing-basic-feature-6": "Custom functionality",
    "pricing-basic-feature-7": "E-commerce features",
    "pricing-basic-feature-8": "Performance optimization",

    // Professional Plan
    "pricing-professional-title": "Professional",
    "pricing-professional-desc": "Ideal for growing businesses with specific needs",
    "pricing-professional-feature-1": "10-page responsive website",
    "pricing-professional-feature-2": "Advanced SEO optimization",
    "pricing-professional-feature-3": "Contact form integration",
    "pricing-professional-feature-4": "Mobile-friendly design",
    "pricing-professional-feature-5": "3 months of support",
    "pricing-professional-feature-6": "Custom functionality",
    "pricing-professional-feature-7": "Basic e-commerce features",
    "pricing-professional-feature-8": "Performance optimization",

    // Enterprise Plan
    "pricing-enterprise-title": "Enterprise",
    "pricing-enterprise-desc": "Complete solution for large businesses and complex projects",
    "pricing-enterprise-feature-1": "Unlimited pages",
    "pricing-enterprise-feature-2": "Premium SEO optimization",
    "pricing-enterprise-feature-3": "Advanced form integration",
    "pricing-enterprise-feature-4": "Mobile-friendly design",
    "pricing-enterprise-feature-5": "12 months of support",
    "pricing-enterprise-feature-6": "Custom functionality",
    "pricing-enterprise-feature-7": "Full e-commerce solution",
    "pricing-enterprise-feature-8": "Performance optimization",

    // Custom Pricing
    "pricing-custom-title": "Need a custom solution?",
    "pricing-custom-desc": "We offer tailored packages for unique project requirements",
    "contact-us": "Contact Us",

    // Work Section
    "work-title": "Our Work",
    "work-subtitle": "Showcasing our best projects that demonstrate our expertise and deliver measurable results",
    "view-case-study": "View Case Study",

    // Projects
    "project-1-title": "E-Commerce Platform",
    "project-1-desc": "Modern e-commerce solution with advanced inventory management and payment processing.",
    "project-1-result": "300% increase in conversion rate",

    "project-2-title": "Healthcare Management System",
    "project-2-desc": "Comprehensive patient management platform with real-time scheduling and telemedicine features.",
    "project-2-result": "50% reduction in administrative overhead",

    "project-3-title": "Financial Dashboard",
    "project-3-desc": "Real-time analytics dashboard for investment portfolio management and market analysis.",
    "project-3-result": "40% faster decision-making process",

    "project-4-title": "Social Learning Platform",
    "project-4-desc": "Interactive educational platform with video streaming and collaborative learning tools.",
    "project-4-result": "85% user engagement increase",

    "project-5-title": "Restaurant Management App",
    "project-5-desc": "Complete restaurant operations system with POS integration and delivery tracking.",
    "project-5-result": "60% improvement in order accuracy",

    "project-6-title": "IoT Monitoring Dashboard",
    "project-6-desc": "Real-time monitoring system for industrial IoT devices with predictive analytics.",
    "project-6-result": "35% reduction in downtime",

    // Team Section
    "team-title": "Meet Our Team",
    "team-intro-1":
      "We're a passionate trio of developers who came together with a shared vision: to create exceptional digital experiences that make a real difference for our clients.",
    "team-intro-2":
      "Our diverse backgrounds in front-end development, full-stack engineering, and UI/UX design allow us to approach every project with a comprehensive perspective, ensuring both technical excellence and outstanding user experience.",

    "team-member-1-name": "John Doe",
    "team-member-1-role": "Lead Front-End Developer",
    "team-member-1-bio":
      "Passionate front-end architect with 8+ years of experience crafting exceptional user interfaces. Specializes in React ecosystem and modern CSS frameworks.",

    "team-member-2-name": "Jane Smith",
    "team-member-2-role": "Full-Stack Engineer",
    "team-member-2-bio":
      "Versatile full-stack developer with expertise in both front-end and back-end technologies. Loves solving complex problems with elegant solutions.",

    "team-member-3-name": "Alex Chen",
    "team-member-3-role": "UI/UX Designer & Developer",
    "team-member-3-bio":
      "Creative designer-developer hybrid who bridges the gap between beautiful design and functional code. Advocates for accessibility and inclusive design.",

    // Tech Section
    "tech-title": "Technical Expertise",
    "tech-subtitle": "Our comprehensive technology stack enables us to build robust, scalable solutions",
    "tech-languages": "Programming Languages",
    "tech-frontend": "Frontend Frameworks",
    "tech-backend": "Backend Technologies",
    "tech-databases": "Databases",
    "tech-cloud": "Cloud Platforms",
    "tech-tools": "Tools & Software",

    // Testimonials Section
    "testimonials-title": "Client Testimonials",
    "testimonials-subtitle": "Don't just take our word for it - hear what our clients have to say",

    "testimonial-1-quote":
      "The team delivered an exceptional e-commerce platform that exceeded our expectations. Our sales increased by 300% within the first quarter.",
    "testimonial-1-name": "Sarah Johnson",
    "testimonial-1-title": "TechStyle Boutique, CEO",

    "testimonial-2-quote":
      "Professional, responsive, and incredibly skilled. They transformed our complex requirements into an intuitive healthcare management system.",
    "testimonial-2-name": "Dr. Michael Rodriguez",
    "testimonial-2-title": "MedCare Clinic, Director",

    "testimonial-3-quote":
      "Outstanding work on our financial dashboard. The real-time analytics have revolutionized how we make investment decisions.",
    "testimonial-3-name": "David Kim",
    "testimonial-3-title": "InvestPro Capital, CTO",

    // Contact Section
    "contact-title": "Let's Build Something Amazing Together",
    "contact-subtitle": "Ready to transform your ideas into reality? Get in touch and let's discuss your project.",
    "contact-form-title": "Send us a message",
    "contact-form-subtitle": "Fill out the form below and we'll get back to you within 24 hours.",

    // Form Fields
    "form-first-name": "First Name",
    "form-first-name-placeholder": "John",
    "form-last-name": "Last Name",
    "form-last-name-placeholder": "Doe",
    "form-email": "Email",
    "form-email-placeholder": "john@example.com",
    "form-company": "Company (Optional)",
    "form-company-placeholder": "Your Company",
    "form-message": "Project Details",
    "form-message-placeholder": "Tell us about your project, timeline, and budget...",
    "form-submit": "Send Message",

    // Contact Info
    "contact-info-title": "Get in Touch",
    "contact-email-label": "Email",
    "contact-phone-label": "Phone",
    "contact-location-label": "Location",
    "contact-location-value": "San Francisco, CA",
    "contact-follow-label": "Follow Us",
    "contact-hours-label": "Office Hours",
    "contact-hours-weekdays": "Monday - Friday: 9:00 AM - 6:00 PM PST",
    "contact-hours-saturday": "Saturday: 10:00 AM - 2:00 PM PST",
    "contact-hours-sunday": "Sunday: Closed",

    // Footer
    "footer-description":
      "Transforming innovative ideas into powerful, scalable web applications and mobile solutions that drive business growth.",
    "footer-services-title": "Services",
    "footer-service-1": "Web Development",
    "footer-service-2": "Mobile Apps",
    "footer-service-3": "UI/UX Design",
    "footer-service-4": "Maintenance",
    "footer-company-title": "Company",
    "footer-company-1": "About Us",
    "footer-company-2": "Our Work",
    "footer-company-3": "Contact",
    "footer-company-4": "Blog",
    "footer-copyright": "© 2024 DevTeam. All rights reserved.",
  },

  fr: {
    // Navigation
    "nav-home": "Accueil",
    "nav-services": "Services",
    "nav-work": "Travaux",
    "nav-pricing": "Tarifs",
    "nav-team": "Équipe",
    "nav-contact": "Contact",
    "language-label": "Langue:",

    // Logo
    logo: "DevTeam",

    // Hero Section
    "hero-title-1": "Votre Vision, Notre Code:",
    "hero-title-2": "Créer des Expériences Web et App Exceptionnelles",
    "hero-description":
      "Nous sommes une équipe passionnée de trois développeurs qui transforment des idées innovantes en applications web puissantes et évolutives et en solutions mobiles qui stimulent la croissance des entreprises.",
    "cta-view-work": "Voir Nos Travaux",
    "cta-get-quote": "Obtenir un Devis",

    // Services Section
    "services-title": "Nos Services",
    "services-subtitle": "Solutions complètes de développement web et mobile adaptées aux besoins de votre entreprise",
    "service-web-title": "Développement Web Personnalisé",
    "service-web-desc":
      "Applications web full-stack construites avec des frameworks modernes comme React, Next.js et Node.js pour des performances et une évolutivité optimales.",
    "service-mobile-title": "Développement d'Applications Mobiles",
    "service-mobile-desc":
      "Applications mobiles natives et multiplateformes qui offrent des expériences utilisateur exceptionnelles sur iOS et Android.",
    "service-design-title": "Design UI/UX",
    "service-design-desc":
      "Solutions de design centrées sur l'utilisateur qui combinent attrait esthétique et fonctionnalité intuitive pour maximiser l'engagement utilisateur.",
    "service-support-title": "Maintenance et Support",
    "service-support-desc":
      "Support technique continu, mises à jour et optimisation pour garantir que vos applications restent sécurisées et performantes.",

    // Pricing Model Section
    "pricing-model-title": "Notre Modèle de Tarification",
    "pricing-model-subtitle":
      "Tarification transparente et flexible adaptée aux exigences uniques de votre projet. Nous croyons en la fourniture de propositions de valeur claires et de devis personnalisés basés sur la portée, la complexité et le calendrier du projet.",
    "pricing-intro-text":
      "Chaque projet est unique, et notre approche de la tarification l'est aussi. Nous offrons des tarifs compétitifs dans différentes catégories de services, garantissant que vous obtenez la meilleure valeur pour votre investissement. Notre tarification est basée sur la complexité du projet, le calendrier et les exigences spécifiques, nous permettant de livrer des résultats exceptionnels dans votre budget.",

    // Pricing Categories
    "pricing-web-category": "Développement de Sites Web",
    "pricing-app-category": "Développement d'Applications Web",
    "pricing-design-category": "Packages de Design UI/UX",
    "pricing-support-category": "Maintenance et Support",

    // Website Development
    "pricing-web-basic-title": "Site Web Marketing de Base",
    "pricing-web-basic-desc":
      "Sites web d'entreprise professionnels avec design responsive, optimisation SEO et système de gestion de contenu.",
    "pricing-web-basic-feature-1": "Design responsive 5-8 pages",
    "pricing-web-basic-feature-2": "Système de gestion de contenu",
    "pricing-web-basic-feature-3": "Optimisation SEO",
    "pricing-web-basic-feature-4": "Intégration de formulaires de contact",
    "pricing-web-basic-feature-5": "Design adapté aux mobiles",

    "pricing-web-ecommerce-title": "Solution E-commerce",
    "pricing-web-ecommerce-desc":
      "Boutique en ligne complète avec traitement des paiements, gestion des stocks et portail client.",
    "pricing-web-ecommerce-feature-1": "Gestion du catalogue produits",
    "pricing-web-ecommerce-feature-2": "Intégration de passerelle de paiement",
    "pricing-web-ecommerce-feature-3": "Système de gestion des commandes",
    "pricing-web-ecommerce-feature-4": "Comptes clients",
    "pricing-web-ecommerce-feature-5": "Tableau de bord analytique",

    "pricing-web-custom-title": "Plateforme Web Personnalisée",
    "pricing-web-custom-desc":
      "Solutions web sur mesure avec fonctionnalités avancées, intégrations et architecture évolutive.",
    "pricing-web-custom-feature-1": "Développement de fonctionnalités personnalisées",
    "pricing-web-custom-feature-2": "Intégrations tierces",
    "pricing-web-custom-feature-3": "Gestion avancée des utilisateurs",
    "pricing-web-custom-feature-4": "Optimisation des performances",
    "pricing-web-custom-feature-5": "Architecture évolutive",

    // Web Application Development
    "pricing-app-mvp-title": "Application Web MVP",
    "pricing-app-mvp-desc":
      "Développement de produit minimum viable pour valider votre concept et entrer rapidement sur le marché.",
    "pricing-app-mvp-feature-1": "Développement des fonctionnalités principales",
    "pricing-app-mvp-feature-2": "Authentification utilisateur",
    "pricing-app-mvp-feature-3": "Tableau de bord de base",
    "pricing-app-mvp-feature-4": "Conception de base de données",
    "pricing-app-mvp-feature-5": "Configuration de déploiement",

    "pricing-app-enterprise-title": "Solution Entreprise Complexe",
    "pricing-app-enterprise-desc":
      "Applications d'entreprise à grande échelle avec fonctionnalités avancées, sécurité et capacités d'intégration.",
    "pricing-app-enterprise-feature-1": "Ensemble de fonctionnalités avancées",
    "pricing-app-enterprise-feature-2": "Sécurité d'entreprise",
    "pricing-app-enterprise-feature-3": "Intégrations système",
    "pricing-app-enterprise-feature-4": "Optimisation des performances",
    "pricing-app-enterprise-feature-5": "Tests complets",

    "pricing-app-api-title": "Développement d'API",
    "pricing-app-api-desc":
      "Développement d'APIs RESTful et de microservices pour un échange de données transparent et une intégration système.",
    "pricing-app-api-feature-1": "Conception d'API RESTful",
    "pricing-app-api-feature-2": "Documentation",
    "pricing-app-api-feature-3": "Authentification et sécurité",
    "pricing-app-api-feature-4": "Limitation de débit",
    "pricing-app-api-feature-5": "Suite de tests",

    // UI/UX Design
    "pricing-design-discovery-title": "Découverte et Wireframing",
    "pricing-design-discovery-desc":
      "Recherche utilisateur, architecture de l'information et développement de wireframes pour établir les fondations du projet.",
    "pricing-design-discovery-feature-1": "Recherche utilisateur et personas",
    "pricing-design-discovery-feature-2": "Architecture de l'information",
    "pricing-design-discovery-feature-3": "Création de wireframes",
    "pricing-design-discovery-feature-4": "Cartographie des flux utilisateur",
    "pricing-design-discovery-feature-5": "Recommandations d'utilisabilité",

    "pricing-design-system-title": "Système de Design Complet",
    "pricing-design-system-desc":
      "Système de design visuel complet avec composants, guides de style et prototypes interactifs.",
    "pricing-design-system-feature-1": "Système de design visuel",
    "pricing-design-system-feature-2": "Bibliothèque de composants",
    "pricing-design-system-feature-3": "Prototypes interactifs",
    "pricing-design-system-feature-4": "Documentation du guide de style",
    "pricing-design-system-feature-5": "Assets de transfert de design",

    // Maintenance & Support
    "pricing-support-retainer-title": "Retenue Mensuelle",
    "pricing-support-retainer-desc":
      "Maintenance continue, mises à jour et support pour maintenir votre application en bon fonctionnement.",
    "pricing-support-retainer-feature-1": "Mises à jour et correctifs réguliers",
    "pricing-support-retainer-feature-2": "Surveillance des performances",
    "pricing-support-retainer-feature-3": "Maintenance de sécurité",
    "pricing-support-retainer-feature-4": "Mises à jour de contenu",
    "pricing-support-retainer-feature-5": "Support prioritaire",

    "pricing-support-demand-title": "Support à la Demande",
    "pricing-support-demand-desc":
      "Heures de support flexibles pour le dépannage, les mises à jour et les améliorations de fonctionnalités selon les besoins.",
    "pricing-support-demand-feature-1": "Tarif horaire de support",
    "pricing-support-demand-feature-2": "Corrections de bugs et dépannage",
    "pricing-support-demand-feature-3": "Améliorations de fonctionnalités",
    "pricing-support-demand-feature-4": "Optimisation des performances",
    "pricing-support-demand-feature-5": "Services de consultation",

    // Pricing Labels
    "pricing-starting-from": "À partir de",
    "pricing-custom-quote": "Devis Personnalisé Disponible",
    "pricing-hourly-rate": "Tarif Horaire",

    // Pricing CTA
    "pricing-cta-title": "Prêt à Commencer Votre Projet?",
    "pricing-cta-desc":
      "Chaque projet est unique. Discutons de vos exigences spécifiques et fournissons-vous un devis détaillé et transparent.",
    "pricing-cta-quote": "Demander un Devis Gratuit",
    "pricing-cta-discuss": "Discuter de Votre Projet",

    // Pricing Plans Section
    "pricing-plans-title": "Nos Plans Tarifaires",
    "pricing-plans-subtitle":
      "Options de tarification transparentes et flexibles pour répondre aux besoins de votre projet",
    "pricing-period": "projet",
    "pricing-popular": "Le Plus Populaire",
    "pricing-get-started": "Commencer",

    // Basic Plan
    "pricing-basic-title": "Basique",
    "pricing-basic-desc": "Parfait pour les petites entreprises qui débutent",
    "pricing-basic-feature-1": "Site web responsive 5 pages",
    "pricing-basic-feature-2": "Optimisation SEO de base",
    "pricing-basic-feature-3": "Intégration de formulaire de contact",
    "pricing-basic-feature-4": "Design adapté aux mobiles",
    "pricing-basic-feature-5": "1 mois de support",
    "pricing-basic-feature-6": "Fonctionnalité personnalisée",
    "pricing-basic-feature-7": "Fonctionnalités e-commerce",
    "pricing-basic-feature-8": "Optimisation des performances",

    // Professional Plan
    "pricing-professional-title": "Professionnel",
    "pricing-professional-desc": "Idéal pour les entreprises en croissance avec des besoins spécifiques",
    "pricing-professional-feature-1": "Site web responsive 10 pages",
    "pricing-professional-feature-2": "Optimisation SEO avancée",
    "pricing-professional-feature-3": "Intégration de formulaire de contact",
    "pricing-professional-feature-4": "Design adapté aux mobiles",
    "pricing-professional-feature-5": "3 mois de support",
    "pricing-professional-feature-6": "Fonctionnalité personnalisée",
    "pricing-professional-feature-7": "Fonctionnalités e-commerce de base",
    "pricing-professional-feature-8": "Optimisation des performances",

    // Enterprise Plan
    "pricing-enterprise-title": "Entreprise",
    "pricing-enterprise-desc": "Solution complète pour les grandes entreprises et projets complexes",
    "pricing-enterprise-feature-1": "Pages illimitées",
    "pricing-enterprise-feature-2": "Optimisation SEO premium",
    "pricing-enterprise-feature-3": "Intégration de formulaire avancée",
    "pricing-enterprise-feature-4": "Design adapté aux mobiles",
    "pricing-enterprise-feature-5": "12 mois de support",
    "pricing-enterprise-feature-6": "Fonctionnalité personnalisée",
    "pricing-enterprise-feature-7": "Solution e-commerce complète",
    "pricing-enterprise-feature-8": "Optimisation des performances",

    // Custom Pricing
    "pricing-custom-title": "Besoin d'une solution personnalisée?",
    "pricing-custom-desc": "Nous offrons des packages sur mesure pour des exigences de projet uniques",
    "contact-us": "Nous Contacter",

    // Work Section
    "work-title": "Nos Travaux",
    "work-subtitle":
      "Présentation de nos meilleurs projets qui démontrent notre expertise et livrent des résultats mesurables",
    "view-case-study": "Voir l'Étude de Cas",

    // Projects
    "project-1-title": "Plateforme E-Commerce",
    "project-1-desc": "Solution e-commerce moderne avec gestion avancée des stocks et traitement des paiements.",
    "project-1-result": "300% d'augmentation du taux de conversion",

    "project-2-title": "Système de Gestion de Santé",
    "project-2-desc":
      "Plateforme complète de gestion des patients avec planification en temps réel et fonctionnalités de télémédecine.",
    "project-2-result": "50% de réduction des frais administratifs",

    "project-3-title": "Tableau de Bord Financier",
    "project-3-desc":
      "Tableau de bord analytique en temps réel pour la gestion de portefeuille d'investissement et l'analyse de marché.",
    "project-3-result": "40% de processus de prise de décision plus rapide",

    "project-4-title": "Plateforme d'Apprentissage Social",
    "project-4-desc": "Plateforme éducative interactive avec streaming vidéo et outils d'apprentissage collaboratif.",
    "project-4-result": "85% d'augmentation de l'engagement utilisateur",

    "project-5-title": "App de Gestion de Restaurant",
    "project-5-desc": "Système complet d'opérations de restaurant avec intégration POS et suivi de livraison.",
    "project-5-result": "60% d'amélioration de la précision des commandes",

    "project-6-title": "Tableau de Bord de Surveillance IoT",
    "project-6-desc":
      "Système de surveillance en temps réel pour appareils IoT industriels avec analytique prédictive.",
    "project-6-result": "35% de réduction du temps d'arrêt",

    // Team Section
    "team-title": "Rencontrez Notre Équipe",
    "team-intro-1":
      "Nous sommes un trio passionné de développeurs qui se sont réunis avec une vision partagée: créer des expériences numériques exceptionnelles qui font une vraie différence pour nos clients.",
    "team-intro-2":
      "Nos backgrounds diversifiés en développement front-end, ingénierie full-stack et design UI/UX nous permettent d'aborder chaque projet avec une perspective complète, garantissant à la fois l'excellence technique et une expérience utilisateur exceptionnelle.",

    "team-member-1-name": "John Doe",
    "team-member-1-role": "Développeur Front-End Principal",
    "team-member-1-bio":
      "Architecte front-end passionné avec plus de 8 ans d'expérience dans la création d'interfaces utilisateur exceptionnelles. Spécialisé dans l'écosystème React et les frameworks CSS modernes.",

    "team-member-2-name": "Jane Smith",
    "team-member-2-role": "Ingénieur Full-Stack",
    "team-member-2-bio":
      "Développeur full-stack polyvalent avec expertise en technologies front-end et back-end. Aime résoudre des problèmes complexes avec des solutions élégantes.",

    "team-member-3-name": "Alex Chen",
    "team-member-3-role": "Designer et Développeur UI/UX",
    "team-member-3-bio":
      "Hybride créatif designer-développeur qui fait le pont entre beau design et code fonctionnel. Défenseur de l'accessibilité et du design inclusif.",

    // Tech Section
    "tech-title": "Expertise Technique",
    "tech-subtitle": "Notre stack technologique complet nous permet de construire des solutions robustes et évolutives",
    "tech-languages": "Langages de Programmation",
    "tech-frontend": "Frameworks Frontend",
    "tech-backend": "Technologies Backend",
    "tech-databases": "Bases de Données",
    "tech-cloud": "Plateformes Cloud",
    "tech-tools": "Outils et Logiciels",

    // Testimonials Section
    "testimonials-title": "Témoignages Clients",
    "testimonials-subtitle": "Ne nous croyez pas sur parole - écoutez ce que nos clients ont à dire",

    "testimonial-1-quote":
      "L'équipe a livré une plateforme e-commerce exceptionnelle qui a dépassé nos attentes. Nos ventes ont augmenté de 300% au cours du premier trimestre.",
    "testimonial-1-name": "Sarah Johnson",
    "testimonial-1-title": "TechStyle Boutique, PDG",

    "testimonial-2-quote":
      "Professionnel, réactif et incroyablement compétent. Ils ont transformé nos exigences complexes en un système de gestion de santé intuitif.",
    "testimonial-2-name": "Dr. Michael Rodriguez",
    "testimonial-2-title": "Clinique MedCare, Directeur",

    "testimonial-3-quote":
      "Travail exceptionnel sur notre tableau de bord financier. L'analytique en temps réel a révolutionné notre façon de prendre des décisions d'investissement.",
    "testimonial-3-name": "David Kim",
    "testimonial-3-title": "InvestPro Capital, CTO",

    // Contact Section
    "contact-title": "Construisons Quelque Chose d'Incroyable Ensemble",
    "contact-subtitle": "Prêt à transformer vos idées en réalité? Contactez-nous et discutons de votre projet.",
    "contact-form-title": "Envoyez-nous un message",
    "contact-form-subtitle": "Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures.",

    // Form Fields
    "form-first-name": "Prénom",
    "form-first-name-placeholder": "Jean",
    "form-last-name": "Nom",
    "form-last-name-placeholder": "Dupont",
    "form-email": "Email",
    "form-email-placeholder": "jean@exemple.com",
    "form-company": "Entreprise (Optionnel)",
    "form-company-placeholder": "Votre Entreprise",
    "form-message": "Détails du Projet",
    "form-message-placeholder": "Parlez-nous de votre projet, calendrier et budget...",
    "form-submit": "Envoyer le Message",

    // Contact Info
    "contact-info-title": "Entrer en Contact",
    "contact-email-label": "Email",
    "contact-phone-label": "Téléphone",
    "contact-location-label": "Localisation",
    "contact-location-value": "San Francisco, CA",
    "contact-follow-label": "Suivez-Nous",
    "contact-hours-label": "Heures de Bureau",
    "contact-hours-weekdays": "Lundi - Vendredi: 9h00 - 18h00 PST",
    "contact-hours-saturday": "Samedi: 10h00 - 14h00 PST",
    "contact-hours-sunday": "Dimanche: Fermé",

    // Footer
    "footer-description":
      "Transformer des idées innovantes en applications web puissantes et évolutives et en solutions mobiles qui stimulent la croissance des entreprises.",
    "footer-services-title": "Services",
    "footer-service-1": "Développement Web",
    "footer-service-2": "Applications Mobiles",
    "footer-service-3": "Design UI/UX",
    "footer-service-4": "Maintenance",
    "footer-company-title": "Entreprise",
    "footer-company-1": "À Propos",
    "footer-company-2": "Nos Travaux",
    "footer-company-3": "Contact",
    "footer-company-4": "Blog",
    "footer-copyright": "© 2024 DevTeam. Tous droits réservés.",
  },

  ar: {
    // Navigation
    "nav-home": "الرئيسية",
    "nav-services": "الخدمات",
    "nav-work": "أعمالنا",
    "nav-pricing": "الأسعار",
    "nav-team": "الفريق",
    "nav-contact": "اتصل بنا",
    "language-label": "اللغة:",

    // Logo
    logo: "DevTeam",

    // Hero Section
    "hero-title-1": "رؤيتك، كودنا:",
    "hero-title-2": "بناء تجارب ويب وتطبيقات استثنائية",
    "hero-description":
      "نحن فريق شغوف من ثلاثة مطورين يحولون الأفكار المبتكرة إلى تطبيقات ويب قوية وقابلة للتطوير وحلول محمولة تدفع نمو الأعمال.",
    "cta-view-work": "عرض أعمالنا",
    "cta-get-quote": "احصل على عرض سعر",

    // Services Section
    "services-title": "خدماتنا",
    "services-subtitle": "حلول شاملة لتطوير الويب والهاتف المحمول مصممة خصيصاً لاحتياجات عملك",
    "service-web-title": "تطوير الويب المخصص",
    "service-web-desc":
      "تطبيقات ويب متكاملة مبنية بأطر عمل حديثة مثل React و Next.js و Node.js للحصول على أداء وقابلية توسع مثلى.",
    "service-mobile-title": "تطوير تطبيقات الهاتف المحمول",
    "service-mobile-desc": "تطبيقات محمولة أصلية ومتعددة المنصات تقدم تجارب مستخدم استثنائية عبر أجهزة iOS و Android.",
    "service-design-title": "تصميم واجهة المستخدم/تجربة المستخدم",
    "service-design-desc":
      "حلول تصميم محورها المستخدم تجمع بين الجاذبية الجمالية والوظائف البديهية لتعظيم مشاركة المستخدم.",
    "service-support-title": "الصيانة والدعم",
    "service-support-desc": "دعم فني مستمر وتحديثات وتحسين لضمان بقاء تطبيقاتك آمنة وعالية الأداء.",

    // Pricing Model Section
    "pricing-model-title": "نموذج التسعير الخاص بنا",
    "pricing-model-subtitle":
      "تسعير شفاف ومرن مصمم خصيصاً لمتطلبات مشروعك الفريدة. نؤمن بتقديم عروض قيمة واضحة وعروض أسعار مخصصة بناءً على نطاق المشروع وتعقيده والجدول الزمني.",
    "pricing-intro-text":
      "كل مشروع فريد، وكذلك نهجنا في التسعير. نقدم أسعاراً تنافسية عبر فئات خدمات مختلفة، مما يضمن حصولك على أفضل قيمة لاستثمارك. تسعيرنا يعتمد على تعقيد المشروع والجدول الزمني والمتطلبات المحددة، مما يتيح لنا تقديم نتائج استثنائية ضمن ميزانيتك.",

    // Pricing Categories
    "pricing-web-category": "تطوير المواقع الإلكترونية",
    "pricing-app-category": "تطوير تطبيقات الويب",
    "pricing-design-category": "حزم تصميم واجهة المستخدم/تجربة المستخدم",
    "pricing-support-category": "الصيانة والدعم",

    // Website Development
    "pricing-web-basic-title": "موقع تسويقي أساسي",
    "pricing-web-basic-desc": "مواقع أعمال احترافية بتصميم متجاوب وتحسين SEO ونظام إدارة محتوى.",
    "pricing-web-basic-feature-1": "تصميم متجاوب 5-8 صفحات",
    "pricing-web-basic-feature-2": "نظام إدارة المحتوى",
    "pricing-web-basic-feature-3": "تحسين SEO",
    "pricing-web-basic-feature-4": "تكامل نماذج الاتصال",
    "pricing-web-basic-feature-5": "تصميم متوافق مع الهاتف المحمول",

    "pricing-web-ecommerce-title": "حل التجارة الإلكترونية",
    "pricing-web-ecommerce-desc": "متجر إلكتروني كامل مع معالجة المدفوعات وإدارة المخزون وبوابة العملاء.",
    "pricing-web-ecommerce-feature-1": "إدارة كتالوج المنتجات",
    "pricing-web-ecommerce-feature-2": "تكامل بوابة الدفع",
    "pricing-web-ecommerce-feature-3": "نظام إدارة الطلبات",
    "pricing-web-ecommerce-feature-4": "حسابات العملاء",
    "pricing-web-ecommerce-feature-5": "لوحة تحكم التحليلات",

    "pricing-web-custom-title": "منصة ويب مخصصة",
    "pricing-web-custom-desc": "حلول ويب مصممة خصيصاً مع وظائف متقدمة وتكاملات وهندسة قابلة للتطوير.",
    "pricing-web-custom-feature-1": "تطوير وظائف مخصصة",
    "pricing-web-custom-feature-2": "تكاملات طرف ثالث",
    "pricing-web-custom-feature-3": "إدارة متقدمة للمستخدمين",
    "pricing-web-custom-feature-4": "تحسين الأداء",
    "pricing-web-custom-feature-5": "هندسة قابلة للتطوير",

    // Web Application Development
    "pricing-app-mvp-title": "تطبيق ويب MVP",
    "pricing-app-mvp-desc": "تطوير منتج أدنى قابل للتطبيق للتحقق من مفهومك ودخول السوق بسرعة.",
    "pricing-app-mvp-feature-1": "تطوير الميزات الأساسية",
    "pricing-app-mvp-feature-2": "مصادقة المستخدم",
    "pricing-app-mvp-feature-3": "لوحة تحكم أساسية",
    "pricing-app-mvp-feature-4": "تصميم قاعدة البيانات",
    "pricing-app-mvp-feature-5": "إعداد النشر",

    "pricing-app-enterprise-title": "حل مؤسسي معقد",
    "pricing-app-enterprise-desc": "تطبيقات مؤسسية واسعة النطاق مع ميزات متقدمة وأمان وقدرات تكامل.",
    "pricing-app-enterprise-feature-1": "مجموعة ميزات متقدمة",
    "pricing-app-enterprise-feature-2": "أمان مؤسسي",
    "pricing-app-enterprise-feature-3": "تكاملات النظام",
    "pricing-app-enterprise-feature-4": "تحسين الأداء",
    "pricing-app-enterprise-feature-5": "اختبار شامل",

    "pricing-app-api-title": "تطوير API",
    "pricing-app-api-desc": "تطوير APIs RESTful والخدمات المصغرة لتبادل البيانات السلس وتكامل النظام.",
    "pricing-app-api-feature-1": "تصميم API RESTful",
    "pricing-app-api-feature-2": "التوثيق",
    "pricing-app-api-feature-3": "المصادقة والأمان",
    "pricing-app-api-feature-4": "تحديد المعدل",
    "pricing-app-api-feature-5": "مجموعة الاختبار",

    // UI/UX Design
    "pricing-design-discovery-title": "الاكتشاف والإطار السلكي",
    "pricing-design-discovery-desc": "بحث المستخدم وهندسة المعلومات وتطوير الإطار السلكي لإنشاء أساس المشروع.",
    "pricing-design-discovery-feature-1": "بحث المستخدم والشخصيات",
    "pricing-design-discovery-feature-2": "هندسة المعلومات",
    "pricing-design-discovery-feature-3": "إنشاء الإطار السلكي",
    "pricing-design-discovery-feature-4": "رسم خرائط تدفق المستخدم",
    "pricing-design-discovery-feature-5": "توصيات قابلية الاستخدام",

    "pricing-design-system-title": "نظام تصميم كامل",
    "pricing-design-system-desc": "نظام تصميم بصري كامل مع مكونات ودلائل أسلوب ونماذج أولية تفاعلية.",
    "pricing-design-system-feature-1": "نظام التصميم البصري",
    "pricing-design-system-feature-2": "مكتبة المكونات",
    "pricing-design-system-feature-3": "نماذج أولية تفاعلية",
    "pricing-design-system-feature-4": "توثيق دليل الأسلوب",
    "pricing-design-system-feature-5": "أصول تسليم التصميم",

    // Maintenance & Support
    "pricing-support-retainer-title": "احتجاز شهري",
    "pricing-support-retainer-desc": "صيانة مستمرة وتحديثات ودعم للحفاظ على تطبيقك يعمل بسلاسة.",
    "pricing-support-retainer-feature-1": "تحديثات وإصلاحات منتظمة",
    "pricing-support-retainer-feature-2": "مراقبة الأداء",
    "pricing-support-retainer-feature-3": "صيانة الأمان",
    "pricing-support-retainer-feature-4": "تحديثات المحتوى",
    "pricing-support-retainer-feature-5": "دعم أولوية",

    "pricing-support-demand-title": "دعم عند الطلب",
    "pricing-support-demand-desc": "ساعات دعم مرنة لاستكشاف الأخطاء والتحديثات وتحسينات الميزات حسب الحاجة.",
    "pricing-support-demand-feature-1": "معدل دعم بالساعة",
    "pricing-support-demand-feature-2": "إصلاح الأخطاء واستكشاف الأخطاء",
    "pricing-support-demand-feature-3": "تحسينات الميزات",
    "pricing-support-demand-feature-4": "تحسين الأداء",
    "pricing-support-demand-feature-5": "خدمات الاستشارة",

    // Pricing Labels
    "pricing-starting-from": "ابتداءً من",
    "pricing-custom-quote": "عرض سعر مخصص متاح",
    "pricing-hourly-rate": "المعدل بالساعة",

    // Pricing CTA
    "pricing-cta-title": "مستعد لبدء مشروعك؟",
    "pricing-cta-desc": "كل مشروع فريد. دعنا نناقش متطلباتك المحددة ونقدم لك عرض سعر مفصل وشفاف.",
    "pricing-cta-quote": "طلب عرض سعر مجاني",
    "pricing-cta-discuss": "ناقش مشروعك",

    // Pricing Plans Section
    "pricing-plans-title": "خطط الأسعار الخاصة بنا",
    "pricing-plans-subtitle": "خيارات تسعير شفافة ومرنة لتناسب احتياجات مشروعك",
    "pricing-period": "مشروع",
    "pricing-popular": "الأكثر شعبية",
    "pricing-get-started": "ابدأ",

    // Basic Plan
    "pricing-basic-title": "أساسي",
    "pricing-basic-desc": "مثالي للشركات الصغيرة التي تبدأ للتو",
    "pricing-basic-feature-1": "موقع متجاوب 5 صفحات",
    "pricing-basic-feature-2": "تحسين SEO أساسي",
    "pricing-basic-feature-3": "تكامل نموذج الاتصال",
    "pricing-basic-feature-4": "تصميم متوافق مع الهاتف المحمول",
    "pricing-basic-feature-5": "شهر واحد من الدعم",
    "pricing-basic-feature-6": "وظائف مخصصة",
    "pricing-basic-feature-7": "ميزات التجارة الإلكترونية",
    "pricing-basic-feature-8": "تحسين الأداء",

    // Professional Plan
    "pricing-professional-title": "احترافي",
    "pricing-professional-desc": "مثالي للشركات النامية ذات الاحتياجات المحددة",
    "pricing-professional-feature-1": "موقع متجاوب 10 صفحات",
    "pricing-professional-feature-2": "تحسين SEO متقدم",
    "pricing-professional-feature-3": "تكامل نموذج الاتصال",
    "pricing-professional-feature-4": "تصميم متوافق مع الهاتف المحمول",
    "pricing-professional-feature-5": "3 أشهر من الدعم",
    "pricing-professional-feature-6": "وظائف مخصصة",
    "pricing-professional-feature-7": "ميزات التجارة الإلكترونية الأساسية",
    "pricing-professional-feature-8": "تحسين الأداء",

    // Enterprise Plan
    "pricing-enterprise-title": "مؤسسي",
    "pricing-enterprise-desc": "حل كامل للشركات الكبيرة والمشاريع المعقدة",
    "pricing-enterprise-feature-1": "صفحات غير محدودة",
    "pricing-enterprise-feature-2": "تحسين SEO متميز",
    "pricing-enterprise-feature-3": "تكامل نموذج متقدم",
    "pricing-enterprise-feature-4": "تصميم متوافق مع الهاتف المحمول",
    "pricing-enterprise-feature-5": "12 شهراً من الدعم",
    "pricing-enterprise-feature-6": "وظائف مخصصة",
    "pricing-enterprise-feature-7": "حل التجارة الإلكترونية الكامل",
    "pricing-enterprise-feature-8": "تحسين الأداء",

    // Custom Pricing
    "pricing-custom-title": "تحتاج حلاً مخصصاً؟",
    "pricing-custom-desc": "نقدم حزماً مصممة خصيصاً لمتطلبات المشروع الفريدة",
    "contact-us": "اتصل بنا",

    // Work Section
    "work-title": "أعمالنا",
    "work-subtitle": "عرض أفضل مشاريعنا التي تظهر خبرتنا وتحقق نتائج قابلة للقياس",
    "view-case-study": "عرض دراسة الحالة",

    // Projects
    "project-1-title": "منصة التجارة الإلكترونية",
    "project-1-desc": "حل تجارة إلكترونية حديث مع إدارة متقدمة للمخزون ومعالجة المدفوعات.",
    "project-1-result": "زيادة 300% في معدل التحويل",

    "project-2-title": "نظام إدارة الرعاية الصحية",
    "project-2-desc": "منصة شاملة لإدارة المرضى مع جدولة في الوقت الفعلي وميزات الطب عن بُعد.",
    "project-2-result": "تقليل 50% في النفقات الإدارية",

    "project-3-title": "لوحة تحكم مالية",
    "project-3-desc": "لوحة تحكم تحليلية في الوقت الفعلي لإدارة محفظة الاستثمار وتحليل السوق.",
    "project-3-result": "عملية اتخاذ قرارات أسرع بنسبة 40%",

    "project-4-title": "منصة التعلم الاجتماعي",
    "project-4-desc": "منصة تعليمية تفاعلية مع بث الفيديو وأدوات التعلم التعاوني.",
    "project-4-result": "زيادة 85% في مشاركة المستخدم",

    "project-5-title": "تطبيق إدارة المطعم",
    "project-5-desc": "نظام عمليات مطعم كامل مع تكامل نقاط البيع وتتبع التوصيل.",
    "project-5-result": "تحسن 60% في دقة الطلبات",

    "project-6-title": "لوحة تحكم مراقبة إنترنت الأشياء",
    "project-6-desc": "نظام مراقبة في الوقت الفعلي لأجهزة إنترنت الأشياء الصناعية مع التحليلات التنبؤية.",
    "project-6-result": "تقليل 35% في وقت التوقف",

    // Team Section
    "team-title": "تعرف على فريقنا",
    "team-intro-1":
      "نحن ثلاثي شغوف من المطورين اجتمعوا برؤية مشتركة: إنشاء تجارب رقمية استثنائية تحدث فرقاً حقيقياً لعملائنا.",
    "team-intro-2":
      "خلفياتنا المتنوعة في تطوير الواجهة الأمامية والهندسة المتكاملة وتصميم واجهة المستخدم/تجربة المستخدم تتيح لنا التعامل مع كل مشروع بمنظور شامل، مما يضمن التميز التقني وتجربة مستخدم متميزة.",

    "team-member-1-name": "جون دو",
    "team-member-1-role": "مطور الواجهة الأمامية الرئيسي",
    "team-member-1-bio":
      "مهندس واجهة أمامية شغوف مع أكثر من 8 سنوات من الخبرة في صياغة واجهات مستخدم استثنائية. متخصص في نظام React البيئي وأطر CSS الحديثة.",

    "team-member-2-name": "جين سميث",
    "team-member-2-role": "مهندس متكامل",
    "team-member-2-bio":
      "مطور متكامل متعدد الاستخدامات مع خبرة في تقنيات الواجهة الأمامية والخلفية. يحب حل المشاكل المعقدة بحلول أنيقة.",

    "team-member-3-name": "أليكس تشين",
    "team-member-3-role": "مصمم ومطور واجهة المستخدم/تجربة المستخدم",
    "team-member-3-bio":
      "هجين إبداعي مصمم-مطور يربط بين التصميم الجميل والكود الوظيفي. مدافع عن إمكانية الوصول والتصميم الشامل.",

    // Tech Section
    "tech-title": "الخبرة التقنية",
    "tech-subtitle": "مجموعة التقنيات الشاملة لدينا تمكننا من بناء حلول قوية وقابلة للتطوير",
    "tech-languages": "لغات البرمجة",
    "tech-frontend": "أطر الواجهة الأمامية",
    "tech-backend": "تقنيات الواجهة الخلفية",
    "tech-databases": "قواعد البيانات",
    "tech-cloud": "منصات السحابة",
    "tech-tools": "الأدوات والبرمجيات",

    // Testimonials Section
    "testimonials-title": "شهادات العملاء",
    "testimonials-subtitle": "لا تأخذ كلامنا فقط - اسمع ما يقوله عملاؤنا",

    "testimonial-1-quote":
      "قدم الفريق منصة تجارة إلكترونية استثنائية فاقت توقعاتنا. زادت مبيعاتنا بنسبة 300% خلال الربع الأول.",
    "testimonial-1-name": "سارة جونسون",
    "testimonial-1-title": "TechStyle Boutique، الرئيس التنفيذي",

    "testimonial-2-quote": "محترف ومتجاوب وماهر بشكل لا يصدق. حولوا متطلباتنا المعقدة إلى نظام إدارة رعاية صحية بديهي.",
    "testimonial-2-name": "د. مايكل رودريغيز",
    "testimonial-2-title": "عيادة MedCare، المدير",

    "testimonial-3-quote":
      "عمل متميز على لوحة التحكم المالية الخاصة بنا. التحليلات في الوقت الفعلي ثورت طريقة اتخاذ قرارات الاستثمار.",
    "testimonial-3-name": "ديفيد كيم",
    "testimonial-3-title": "InvestPro Capital، كبير مسؤولي التكنولوجيا",

    // Contact Section
    "contact-title": "لنبني شيئاً مذهلاً معاً",
    "contact-subtitle": "مستعد لتحويل أفكارك إلى واقع؟ تواصل معنا ولنناقش مشروعك.",
    "contact-form-title": "أرسل لنا رسالة",
    "contact-form-subtitle": "املأ النموذج أدناه وسنعاود الاتصال بك خلال 24 ساعة.",

    // Form Fields
    "form-first-name": "الاسم الأول",
    "form-first-name-placeholder": "أحمد",
    "form-last-name": "اسم العائلة",
    "form-last-name-placeholder": "محمد",
    "form-email": "البريد الإلكتروني",
    "form-email-placeholder": "ahmed@example.com",
    "form-company": "الشركة (اختياري)",
    "form-company-placeholder": "شركتك",
    "form-message": "تفاصيل المشروع",
    "form-message-placeholder": "أخبرنا عن مشروعك والجدول الزمني والميزانية...",
    "form-submit": "إرسال الرسالة",

    // Contact Info
    "contact-info-title": "تواصل معنا",
    "contact-email-label": "البريد الإلكتروني",
    "contact-phone-label": "الهاتف",
    "contact-location-label": "الموقع",
    "contact-location-value": "سان فرانسيسكو، كاليفورنيا",
    "contact-follow-label": "تابعنا",
    "contact-hours-label": "ساعات العمل",
    "contact-hours-weekdays": "الاثنين - الجمعة: 9:00 صباحاً - 6:00 مساءً PST",
    "contact-hours-saturday": "السبت: 10:00 صباحاً - 2:00 مساءً PST",
    "contact-hours-sunday": "الأحد: مغلق",

    // Footer
    "footer-description": "تحويل الأفكار المبتكرة إلى تطبيقات ويب قوية وقابلة للتطوير وحلول محمولة تدفع نمو الأعمال.",
    "footer-services-title": "الخدمات",
    "footer-service-1": "تطوير الويب",
    "footer-service-2": "تطبيقات الهاتف المحمول",
    "footer-service-3": "تصميم واجهة المستخدم/تجربة المستخدم",
    "footer-service-4": "الصيانة",
    "footer-company-title": "الشركة",
    "footer-company-1": "من نحن",
    "footer-company-2": "أعمالنا",
    "footer-company-3": "اتصل بنا",
    "footer-company-4": "المدونة",
    "footer-copyright": "© 2024 DevTeam. جميع الحقوق محفوظة.",
  },
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize theme and language
  initializeTheme()
  initializeLanguage()

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const mobileMenu = document.querySelector(".mobile-menu")

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show")

    // Toggle icon between bars and X
    const icon = mobileMenuBtn.querySelector("i")
    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars")
      icon.classList.add("fa-times")
    } else {
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const sectionId = this.getAttribute("data-section")
      const section = document.getElementById(sectionId)

      if (section) {
        const offsetTop = section.offsetTop
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })

        // Close mobile menu if open
        if (mobileMenu.classList.contains("show")) {
          mobileMenu.classList.remove("show")
          const icon = mobileMenuBtn.querySelector("i")
          icon.classList.remove("fa-times")
          icon.classList.add("fa-bars")
        }

        // Update active link
        navLinks.forEach((link) => link.classList.remove("active"))
        this.classList.add("active")
      }
    })
  })

  // CTA buttons smooth scrolling
  const ctaButtons = document.querySelectorAll(".btn[data-section]")

  ctaButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const sectionId = this.getAttribute("data-section")
      const section = document.getElementById(sectionId)

      if (section) {
        const offsetTop = section.offsetTop
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Active navigation based on scroll position
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + 100

    const sections = ["home", "services", "pricing-model", "work", "team", "contact"]

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId)
      if (section) {
        const offsetTop = section.offsetTop
        const offsetHeight = section.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          navLinks.forEach((link) => {
            if (link.getAttribute("data-section") === sectionId) {
              link.classList.add("active")
            } else {
              link.classList.remove("active")
            }
          })
          break
        }
      }
    }
  })

  // Form submission handling
  const contactForm = document.querySelector(".contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const firstName = document.getElementById("firstName").value
      const lastName = document.getElementById("lastName").value
      const email = document.getElementById("email").value
      const company = document.getElementById("company").value
      const message = document.getElementById("message").value

      // Basic validation
      if (!firstName || !lastName || !email || !message) {
        alert("Please fill in all required fields.")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.")
        return
      }

      // Here you would typically send the form data to your server
      // For this example, we'll just show a success message
      alert("Thank you for your message! We will get back to you soon.")
      contactForm.reset()
    })
  }

  // Project card hover effects
  const projectCards = document.querySelectorAll(".project-card")

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("hover")
    })

    card.addEventListener("mouseleave", () => {
      card.classList.remove("hover")
    })
  })

  // Dark mode toggle functionality
  const darkModeToggle = document.getElementById("darkModeToggle")

  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      toggleTheme()
    })
  }

  // Language switcher functionality
  const languageBtn = document.getElementById("languageBtn")
  const languageDropdown = document.getElementById("languageDropdown")
  const languageOptions = document.querySelectorAll(".language-option")
  const mobileLanguageOptions = document.querySelectorAll(".mobile-language-option")

  if (languageBtn && languageDropdown) {
    languageBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      languageDropdown.classList.toggle("show")
    })

    // Close dropdown when clicking outside
    document.addEventListener("click", () => {
      languageDropdown.classList.remove("show")
    })

    languageDropdown.addEventListener("click", (e) => {
      e.stopPropagation()
    })
  }
  // Language option handlers
  ;[...languageOptions, ...mobileLanguageOptions].forEach((option) => {
    option.addEventListener("click", () => {
      const lang = option.getAttribute("data-lang")
      setLanguage(lang)
      if (languageDropdown) {
        languageDropdown.classList.remove("show")
      }
    })
  })
})

// Theme management functions
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "light"
  document.documentElement.setAttribute("data-theme", savedTheme)
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
}

// Language management functions
function initializeLanguage() {
  const savedLang = localStorage.getItem("language") || "en"
  setLanguage(savedLang)
}

function setLanguage(lang) {
  // Update HTML attributes
  document.documentElement.setAttribute("lang", lang)
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr")

  // Update current language display
  const currentLangSpan = document.querySelector(".current-lang")
  if (currentLangSpan) {
    const langMap = { en: "EN", fr: "FR", ar: "AR" }
    currentLangSpan.textContent = langMap[lang]
  }

  // Update active language options
  document.querySelectorAll(".language-option, .mobile-language-option").forEach((option) => {
    option.classList.toggle("active", option.getAttribute("data-lang") === lang)
  })

  // Translate all elements
  translatePage(lang)

  // Save language preference
  localStorage.setItem("language", lang)
}

function translatePage(lang) {
  const elements = document.querySelectorAll("[data-translate]")

  elements.forEach((element) => {
    const key = element.getAttribute("data-translate")
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key]
    }
  })

  // Handle placeholder translations
  const placeholderElements = document.querySelectorAll("[data-translate-placeholder]")
  placeholderElements.forEach((element) => {
    const key = element.getAttribute("data-translate-placeholder")
    if (translations[lang] && translations[lang][key]) {
      element.setAttribute("placeholder", translations[lang][key])
    }
  })
}
