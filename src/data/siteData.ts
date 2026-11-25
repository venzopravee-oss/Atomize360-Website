export interface NavLink {
  label: string;
  targetId: string;
}

export interface StatItem {
  value: string;
  label: string;
  accent: 'blue' | 'cyan' | 'green' | 'orange';
}

export interface PartnerLogo {
  id: string;
  name: string;
  shortName?: string;
  logoSrc: string;
}

export interface CertificationItem {
  code: string;
  description: string;
  dotColor: string;
}

export interface PillarItem {
  title: string;
  description: string;
  icon: 'target' | 'award' | 'shield' | 'leaf';
  accent: 'blue' | 'cyan' | 'green' | 'orange';
}

export interface ServiceItem {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  deliverables: string[];
  icon:
    | 'calculator'
    | 'file-text'
    | 'code-xml'
    | 'hard-hat'
    | 'clipboard-list'
    | 'heart-pulse'
    | 'brain-circuit'
    | 'leaf';
  accent: 'blue' | 'cyan' | 'green' | 'orange' | 'purple';
  image: string;
}

export interface SolutionItem {
  id: string;
  category: string;
  title: string;
  summary: string;
  details: string[];
  icon: 'gauge' | 'zap' | 'sun' | 'container' | 'factory' | 'cpu';
  accent: 'blue' | 'cyan' | 'green' | 'orange' | 'purple';
  image: string;
}

export interface TradingCategory {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: 'cpu' | 'radio' | 'thermometer';
  accent: 'blue' | 'cyan' | 'green' | 'orange' | 'purple';
  image: string;
}

export const CONTACT_INFO = {
  salesEmail: 'Sales@atomize360.com',
  careersEmail: 'iconnect@atomize360.com',
  location: 'United Arab Emirates',
  locationSub: 'UAE-based · Global project reach',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'About', targetId: 'about' },
  { label: 'Services', targetId: 'services' },
  { label: 'Solutions', targetId: 'solutions' },
  { label: 'Partners', targetId: 'partners' },
  { label: 'Trading', targetId: 'trading' },
  { label: 'Contact', targetId: 'contact' },
];

export const HERO_DATA = {
  badge: 'UAE-Based Engineering & Automation',
  headlineLines: [
    'Engineering the',
    'Future of Smart',
    'Cities &',
    'Industries',
  ],
  subtitle:
    'SCADA architecture, MV/LV power management, Industry 4.0, IoT, AI/ML — delivered by ISO-certified engineers across ABB, Siemens, Schneider, Rockwell, Honeywell and more.',
  pills: [
    'SCADA & Automation',
    'Industry 4.0 · IoT',
    'AI/ML Engineering',
    'ISO Certified',
  ],
  primaryCta: 'Explore Services',
  secondaryCta: 'About Us',
  stats: [
    { value: '30+', label: 'Years Experience', accent: 'blue' },
    { value: 'ISO', label: '9001 · 14001 · OHSAS', accent: 'cyan' },
    { value: '8+', label: 'Engineering Disciplines', accent: 'green' },
    { value: 'UAE', label: 'Based · Global Reach', accent: 'orange' },
  ] as StatItem[],
};

export const PARTNERS_DATA = {
  eyebrow: 'TRUSTED OEM PARTNERS',
  title: "Engineering with the World's Best",
  subtitle:
    "30+ years of collective expertise across the industry's leading OEM automation and electrical platforms.",
  logos: [
    { id: 'abb', name: 'ABB', logoSrc: '/assets/logos/partner_abb.jpg' },
    { id: 'siemens', name: 'Siemens', logoSrc: '/assets/logos/partner_siemens.jpg' },
    {
      id: 'schneider',
      name: 'Schneider Electric',
      logoSrc: '/assets/logos/partner_schneider.jpg',
    },
    { id: 'emerson', name: 'Emerson', logoSrc: '/assets/logos/partner_emerson.png' },
    { id: 'honeywell', name: 'Honeywell', logoSrc: '/assets/logos/partner_honeywell.jpg' },
    {
      id: 'rockwell',
      name: 'Rockwell Automation',
      shortName: 'Rockwell',
      logoSrc: '/assets/logos/partner_rockwell.jpg',
    },
    { id: 'yokogawa', name: 'Yokogawa', logoSrc: '/assets/logos/partner_yokogawa.jpg' },
  ] as PartnerLogo[],
  certifications: [
    {
      code: 'ISO 9001:2008',
      description: 'Quality Management',
      dotColor: '#2E5BFF',
    },
    {
      code: 'ISO 14001:2015',
      description: 'Environmental Management',
      dotColor: '#34A853',
    },
    {
      code: 'OHSAS 18001:2007',
      description: 'Occupational Health & Safety',
      dotColor: '#F36C21',
    },
  ] as CertificationItem[],
};

export const ABOUT_DATA = {
  eyebrow: 'WHO WE ARE',
  title: 'Deep engineering for a smarter, sustainable future',
  lead: 'Atomize360 is a UAE-based engineering and automation specialist delivering SCADA architecture, MV/LV power management, Industry 4.0, IoT, AI/ML, and field instrumentation solutions across multiple industrial domains.',
  image: '/assets/images/about-control-room.jpg',
  imageAlt: 'Engineering control room',
  badgeValue: '30+',
  badgeLabel: 'Years Collective Expertise',
  missionTitle: 'Our Mission',
  missionBody:
    "Building the foundation of tomorrow's smart cities and smart factories — where machines, systems, and people work in harmony.",
  missionBullets: [
    'Higher operational efficiency',
    'Greater flexibility and scalability',
    'Improved responsiveness and decision-making',
    'Sustainable, environmentally responsible growth',
  ],
  pillars: [
    {
      title: 'Customer-Centric Design',
      description:
        'Every solution shaped around your specific operational reality — from greenfield to complex modernization.',
      icon: 'target',
      accent: 'blue',
    },
    {
      title: 'Technical Excellence',
      description:
        '30+ years of expertise across ABB, Siemens, Schneider, Rockwell, Honeywell, Emerson and Yokogawa.',
      icon: 'award',
      accent: 'cyan',
    },
    {
      title: 'Integrity in Every Deliverable',
      description:
        'Transparent execution and measurable value — certified to international quality and safety standards.',
      icon: 'shield',
      accent: 'green',
    },
    {
      title: 'Sustainable Growth',
      description:
        'Environmentally responsible engineering supporting decarbonization goals and global ESG frameworks.',
      icon: 'leaf',
      accent: 'orange',
    },
  ] as PillarItem[],
  certBarNote: 'Zero harm. Positive impact on society.',
};

export const SERVICES_DATA = {
  eyebrow: 'WHAT WE DO',
  title: 'Engineering Services',
  subtitle:
    '30+ years of collective expertise — available in-house or on-site across OEM platforms. Select any service below to explore our capabilities.',
  deliverablesHeading: 'WHAT WE DELIVER',
  services: [
    {
      id: 'estimation',
      title: 'Estimation Engineering',
      eyebrow: 'PRECISE PRE-TENDER & TENDER STAGE ENGINEERING',
      description:
        'Technically robust support for automation, instrumentation, and electrical projects — helping clients build competitive proposals backed by accurate engineering insights.',
      deliverables: [
        'Preliminary Engineering & System Design (PLC, BMS, DCS, RTU, SCADA, SIL3 ESD/F&G)',
        'Accurate cost estimation & BOM generation for multi-vendor solutions',
        'Technical documentation: datasheets, specs, wiring diagrams, network topologies',
        'OEM-aligned equipment selections: Siemens, Schneider, ABB, Honeywell, Emerson, Yokogawa, Rockwell',
      ],
      icon: 'calculator',
      accent: 'blue',
      image: '/assets/images/service-estimation.jpg',
    },
    {
      id: 'design',
      title: 'Design & Documentation',
      eyebrow: 'COMPLETE OPTIMIZED DESIGN FOR SCADA, ELECTRICAL & INSTRUMENTATION',
      description:
        'Fully aligned design solutions using EPLAN / AutoCAD-based tools, covering SCADA automation, MV/LV electrical systems, and field instrumentation.',
      deliverables: [
        'SCADA/BMS/PLC/DCS/RTU system topology, control philosophy, communication networks',
        'MV/LV: SLDs, load lists, panel schedules, protection & metering coordination',
        'Panel GA & wiring diagrams, cable schedules, termination details',
        'FDS, instrument hook-up drawings, I/O lists, P&IDs, O&M documentation',
      ],
      icon: 'file-text',
      accent: 'cyan',
      image: '/assets/images/service-design.jpg',
    },
    {
      id: 'programming',
      title: 'Control System Programming & HMI/SCADA',
      eyebrow: 'HIGH-QUALITY CONTROL LOGIC AND OPERATOR INTERFACES',
      description:
        'Control system programming and SCADA development across major OEM platforms — seamless integration, reliable performance, intuitive interfaces.',
      deliverables: [
        'PLC / RTU / DCS / BMS control logic development and optimization',
        'HMI/SCADA: operator screens, alarm management, trending, historian integration',
        'Protocol integration: Modbus, OPC, Profibus, Ethernet/IP and others',
        'VFD, soft starter & IED programming, configuration & integration',
      ],
      icon: 'code-xml',
      accent: 'green',
      image: '/assets/images/service-programming.jpg',
    },
    {
      id: 'site',
      title: 'Site Engineering',
      eyebrow: 'ON-SITE COMMISSIONING, SAFETY & SYSTEM HANDOVER',
      description:
        'Comprehensive start-up, commissioning, safety compliance, and final handover support for automation, electrical, and instrumentation systems.',
      deliverables: [
        'Start-up & commissioning supervision: loop checks, functional testing, I/O verification',
        'Instrument calibration, configuration, validation, and calibration reports',
        'MV/LV: cable testing, panel inspection, protection coordination checks',
        'Site safety engineering: HSE compliance, risk assessments, method statement reviews',
      ],
      icon: 'hard-hat',
      accent: 'orange',
      image: '/assets/images/service-site.jpg',
    },
    {
      id: 'pm',
      title: 'Project Management',
      eyebrow: 'PMP-CERTIFIED LEADERSHIP FROM CONCEPT TO HANDOVER',
      description:
        'Structured, disciplined leadership for electrical, automation, and instrumentation projects — every phase executed with precision.',
      deliverables: [
        'Project planning, scheduling, resource strategies, scope & risk management',
        'Multidisciplinary engineering coordination and design review',
        'Procurement, vendor management, and OEM coordination',
        'FAT/SAT coordination, as-built documentation, O&M manuals',
      ],
      icon: 'clipboard-list',
      accent: 'purple',
      image: '/assets/images/service-pm.jpg',
    },
    {
      id: 'care',
      title: 'Care Engineering',
      eyebrow: 'RESPONSIVE ONSITE & REMOTE MAINTENANCE SUPPORT',
      description:
        'Reliable maintenance for electrical, automation, SCADA, CCTV, access control, and cybersecurity systems — keeping operations stable.',
      deliverables: [
        'LV electrical: preventive/corrective maintenance, load monitoring, thermal inspections',
        'Automation: BMS/RTU/DCS/PLC health checks, logic updates, fault diagnostics',
        'SCADA: server/client performance, alarm/trend/historian upkeep',
        'Cybersecurity: network hardening, patch management, vulnerability assessments',
      ],
      icon: 'heart-pulse',
      accent: 'blue',
      image: '/assets/images/service-care.jpg',
    },
    {
      id: 'aiml',
      title: 'AI/ML & Embedded Engineering',
      eyebrow: 'DATA-DRIVEN INTELLIGENCE IN INDUSTRIAL AUTOMATION',
      description:
        'AI/ML models and custom embedded hardware that enhance automation performance and enable intelligent decision-making.',
      deliverables: [
        'AI-driven KPI implementation, predictive maintenance models for motors & drives',
        'Process optimization using ML integrated into SCADA, DCS, PLC environments',
        'Custom embedded hardware: ARM/STM32/ESP PCB design, firmware engineering',
        'IIoT sensor networks, edge computing devices, secure real-time data platforms',
      ],
      icon: 'brain-circuit',
      accent: 'cyan',
      image: '/assets/images/service-aiml.jpg',
    },
    {
      id: 'sustainability',
      title: 'Sustainability Engineering',
      eyebrow: 'PRACTICAL ENERGY EFFICIENCY & ESG-ALIGNED SOLUTIONS',
      description:
        'Help clients reduce energy consumption, optimize performance, and align with global sustainability standards.',
      deliverables: [
        'Comprehensive energy usage evaluation with benchmarking and recommendations',
        'LV systems, HVAC/BMS, automation load profiling and power quality studies',
        'Mitigation roadmaps: automation upgrades, retrofits, digitalization strategies',
        'Support for corporate ESG targets and local/international sustainability standards',
      ],
      icon: 'leaf',
      accent: 'green',
      image: '/assets/images/service-sustainability.jpg',
    },
  ] as ServiceItem[],
  engagementBanner: {
    title: 'Flexible Engagement Models',
    subtitle: 'Optimize costs while maintaining excellence',
    models: [
      { label: 'Remote Engineering', icon: 'globe' as const },
      { label: 'Onsite Deployment', icon: 'users' as const },
      { label: 'Hybrid Support', icon: 'trending-up' as const },
    ],
  },
};

export const SOLUTIONS_DATA = {
  eyebrow: 'OUR SOLUTIONS',
  title: 'Engineered Products & Turnkey Systems',
  subtitle:
    'Every solution developed with precision, quality, and deep understanding of customer-specific requirements — from specialized skids to full Industry 4.0 ecosystems.',
  items: [
    {
      id: 'motor-skids',
      category: 'Energy Optimization',
      title: 'Energy Efficient Motor & Condition Monitoring Skids',
      summary:
        'IE3/IE4/IE5/IE6 motors with VFDs and IIoT sensors — reducing downtime, energy costs, and supporting decarbonization for pumps, fans, and compressors.',
      details: [
        'High-efficiency motors integrated with VFDs for speed control matching process demands',
        'Vibration, temperature (RTD), and MCSA sensors for predictive maintenance',
        'Edge controller with MQTT/OPC-UA connectivity for real-time cloud dashboards',
        'Applications: industrial pumps, conveyors, compressors, fans, blowers',
      ],
      icon: 'gauge',
      accent: 'blue',
      image: '/assets/images/solution-motor.jpg',
    },
    {
      id: 'ev-charging',
      category: 'Electric Mobility',
      title: 'EV Charging Infrastructure Solutions',
      summary:
        'End-to-end EV charging with AC wallboxes and DC fast chargers — remote monitoring for proactive maintenance across residential, commercial, and public sites.',
      details: [
        'AC wallbox and DC fast charger system design and integration',
        'Multi-story residential and commercial building deployments',
        'Remote monitoring for proactive maintenance and global service',
        'Private and public infrastructure — scalable from single unit to fleet',
      ],
      icon: 'zap',
      accent: 'cyan',
      image: '/assets/images/solution-ev.jpg',
    },
    {
      id: 'renewable-energy',
      category: 'Sustainability',
      title: 'Renewable Energy Solutions (R³)',
      summary:
        'Reliable, renewable & reserve energy: hydrogen fuel cells, biogas, solar microgrids, and customized battery storage — meeting requirements without compromise.',
      details: [
        'Hydrogen Fuel Cell Plants: blending, refueling, H₂ transition support',
        'Bio Gas to Power Plants: thermal power generation from biogas',
        'Solar Micro Power Grids: PV-based microgrids for remote/island properties',
        'UPS & Battery Banks: customized storage for industrial, commercial, data centers',
      ],
      icon: 'sun',
      accent: 'green',
      image: '/assets/images/solution-renewable.jpg',
    },
    {
      id: 'eco-rooms',
      category: 'Modular Spaces',
      title: 'Eco-Friendly Container Control Rooms & Living Space',
      summary:
        'Modular eco-pods built with sustainable materials — functioning as control rooms, offices, or accommodations with high-performance insulation and optional solar.',
      details: [
        'FSC-certified timber, reclaimed wood, recycled metal, Bio-SIP™ panels',
        'High-performance insulation, double glazing, optional solar integration',
        'Versatile: control rooms, office spaces, accommodations with kitchens & bathrooms',
        'Purpose-built and fully customizable for industrial or residential applications',
      ],
      icon: 'container',
      accent: 'orange',
      image: '/assets/images/solution-container.jpg',
    },
    {
      id: 'custom-automation',
      category: 'Custom Automation',
      title: 'Purpose-Built Smart Engineered Solutions',
      summary:
        'Custom smart solutions — robotic systems, application-specific skids — integrating automation, IoT, and AI/ML to solve industry-specific challenges with precision.',
      details: [
        'Custom skid design integrating automation, IoT, and AI/ML technologies',
        'Robotic systems and specialized embedded control applications',
        'Industry-specific engineering aligned to unique operational challenges',
        'Scalable from proof-of-concept to full-scale deployment',
      ],
      icon: 'cpu',
      accent: 'purple',
      image: '/assets/images/solution-smart.jpg',
    },
    {
      id: 'industry-40',
      category: 'Digital Transformation',
      title: 'Embedded & Industry 4.0 System Development',
      summary:
        'From concept to field: custom embedded systems, IIoT architectures, and digital twin frameworks — enabling smarter operations and real-time industrial insights.',
      details: [
        'Custom embedded hardware: ARM/STM32/PIC/ESP/AVR PCB design & firmware',
        'IIoT platforms: sensor networks, gateways, cloud integration, edge computing',
        'Digital Twin & smart factory: SCADA/MES/ERP integration and simulation',
        'HIL/SIL proofing, performance benchmarking, field pilot trials',
      ],
      icon: 'factory',
      accent: 'blue',
      image: '/assets/images/solution-industry40.jpg',
    },
  ] as SolutionItem[],
};

export const TRADING_DATA = {
  eyebrow: 'TRADING DIVISION',
  title: 'Products & Components',
  subtitle:
    'Curated electrical, automation, and instrumentation products — sourced from industry-leading OEMs and backed by our engineering expertise.',
  categories: [
    {
      id: 'electrical',
      title: 'Electrical Components',
      description:
        'Premium electrical components from leading global manufacturers — selected for reliability, efficiency, and compatibility.',
      items: [
        'Variable Frequency Drives (VFDs)',
        'Soft Starters',
        'LV MCCBs & MCBs',
        'Energy Meters & Monitoring Systems',
      ],
      icon: 'cpu',
      accent: 'blue',
      image: '/assets/images/trading-electrical.jpg',
    },
    {
      id: 'automation',
      title: 'Automation Products',
      description:
        'Complete automation ecosystems from globally recognized OEMs — enabling intelligent control and real-time monitoring.',
      items: [
        'Building Management Systems (BMS)',
        'PLCs, DDC, RTUs',
        'Network Communication Devices',
        'SCADA Software Platforms',
        'AI & ML Software Solutions',
      ],
      icon: 'radio',
      accent: 'green',
      image: '/assets/images/trading-automation.jpg',
    },
    {
      id: 'instrumentation',
      title: 'Instrumentation Products',
      description:
        'Precision instrumentation for process industries, HVAC, and building automation — accurate measurement, reliable control.',
      items: [
        'Industrial Process Instruments (pressure, flow, level, temp)',
        'Analyzers and Transmitters',
        'BMS / HVAC Instruments',
        'Control Valves & Actuators',
      ],
      icon: 'thermometer',
      accent: 'orange',
      image: '/assets/images/trading-instrumentation.jpg',
    },
  ] as TradingCategory[],
  oemSupply: {
    title: 'OEM Partners We Supply',
    subtitle:
      'Products sourced from globally recognized brands with expert guidance on OEM selection, compatibility, and integration.',
    extraTextPartner: 'Endress+Hauser',
  },
  quoteCard: {
    title: 'Request a Product Quote',
    description:
      'Reach out with your requirements for competitive pricing and expert product recommendations tailored to your project.',
    ctaEmail: CONTACT_INFO.salesEmail,
  },
};

export const CONTACT_DATA = {
  eyebrow: "LET'S CONNECT",
  title: 'Contact & Careers',
  getInTouch: {
    title: 'Get in Touch',
    items: [
      {
        label: 'Sales Inquiries',
        value: CONTACT_INFO.salesEmail,
        href: `mailto:${CONTACT_INFO.salesEmail}`,
        sub: 'Project bids, quotes & partnerships',
        icon: 'mail' as const,
        accent: 'blue' as const,
      },
      {
        label: 'Careers',
        value: CONTACT_INFO.careersEmail,
        href: `mailto:${CONTACT_INFO.careersEmail}`,
        sub: 'Remote, onsite & freelance engineering roles',
        icon: 'mail' as const,
        accent: 'cyan' as const,
      },
      {
        label: 'Headquarters',
        value: CONTACT_INFO.location,
        href: undefined,
        sub: CONTACT_INFO.locationSub,
        icon: 'map-pin' as const,
        accent: 'green' as const,
      },
    ],
  },
  careers: {
    title: 'Join Our Team',
    body: 'Curated job matches, remote and onsite work, and entrepreneurial freelance opportunities — through a lean, efficient corporate model designed for growth.',
    bullets: [
      'Remote engineering positions',
      'Onsite project deployment roles',
      'Freelance & entrepreneurial opportunities',
    ],
    ctaLabel: 'Apply Now',
    ctaHref: `mailto:${CONTACT_INFO.careersEmail}`,
  },
  form: {
    title: 'Send Us a Message',
    submitLabel: 'Send Message',
  },
};

export const FOOTER_DATA = {
  ctaTitle: 'Ready to start your project?',
  ctaSubtitle:
    'From concept to commissioning — our certified engineers are ready to deliver.',
  ctaPrimary: 'Get in Touch',
  ctaSecondary: 'Email Sales',
  bio: 'Deep engineering for a smarter, sustainable future. UAE-based automation specialists delivering SCADA, MV/LV, IoT, AI/ML, and sustainability solutions.',
  columns: [
    {
      heading: 'COMPANY',
      links: [
        { label: 'About Us', targetId: 'about' },
        { label: 'Our Mission', targetId: 'about' },
        { label: 'Certifications', targetId: 'partners' },
        { label: 'Careers', targetId: 'contact' },
      ],
    },
    {
      heading: 'SERVICES',
      links: [
        { label: 'Estimation Engineering', targetId: 'services', serviceId: 'estimation' },
        { label: 'Design & Documentation', targetId: 'services', serviceId: 'design' },
        {
          label: 'Control System Programming',
          targetId: 'services',
          serviceId: 'programming',
        },
        { label: 'Site Engineering', targetId: 'services', serviceId: 'site' },
        { label: 'Project Management', targetId: 'services', serviceId: 'pm' },
        { label: 'AI/ML & Embedded', targetId: 'services', serviceId: 'aiml' },
      ],
    },
    {
      heading: 'SOLUTIONS',
      links: [
        { label: 'Motor Condition Monitoring', targetId: 'solutions' },
        { label: 'EV Charging', targetId: 'solutions' },
        { label: 'Renewable Energy', targetId: 'solutions' },
        { label: 'Eco Container Rooms', targetId: 'solutions' },
        { label: 'Industry 4.0', targetId: 'solutions' },
      ],
    },
  ],
  copyright: '© 2025 Atomize360. All rights reserved. | United Arab Emirates',
  badges: ['ISO 9001', 'ISO 14001', 'OHSAS 18001'],
};
