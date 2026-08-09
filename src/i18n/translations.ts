export type Language = 'ar' | 'en'

export type ServiceKey =
  | 'webDev'
  | 'mobileApps'
  | 'customSystems'
  | 'cybersecurity'
  | 'cloud'
  | 'consulting'
  | 'support'
  | 'hardware'

export interface Service {
  title: string
  description: string
}

export type ProductKey = 'mpms'

export interface Product {
  title: string
  subtitle: string
  description: string
  features: string[]
  tech: string[]
  status: string
  link?: string
}

export type ProjectKey = 'yard' | 'agf' | 'aacl' | 'latech' | 'appointment'

export interface Project {
  title: string
  subtitle: string
  description: string
  features: string[]
  tech: string[]
  status: string
}

export interface Translation {
  nav: {
    home: string
    about: string
    products: string
    projects: string
    services: string
    contact: string
    langToggle: string
  }
  hero: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
  }
  aboutPreview: {
    label: string
    title: string
    description: string
    points: string[]
    cta: string
  }
  servicesPreview: {
    label: string
    title: string
    subtitle: string
    viewAll: string
  }
  services: Record<ServiceKey, Service>
  techStack: {
    label: string
    title: string
    subtitle: string
  }
  whyChooseUs: {
    label: string
    title: string
    items: { title: string; description: string }[]
  }
  statistics: {
    projects: string
    clients: string
    years: string
    experts: string
  }
  cta: {
    title: string
    subtitle: string
    button: string
  }
  aboutPage: {
    heroTitle: string
    heroSubtitle: string
    mission: { label: string; title: string; description: string }
    vision: { label: string; title: string; description: string }
    values: { label: string; title: string; items: string[] }
  }
  servicesPage: {
    heroTitle: string
    heroSubtitle: string
  }
  productsPage: {
    heroTitle: string
    heroSubtitle: string
    features: string
    techStack: string
    viewProject: string
    products: Record<ProductKey, Product>
  }
  projectsPage: {
    heroTitle: string
    heroSubtitle: string
    features: string
    techStack: string
    projects: Record<ProjectKey, Project>
  }
  contactPage: {
    heroTitle: string
    heroSubtitle: string
    form: {
      name: string
      email: string
      phone: string
      subject: string
      message: string
      submit: string
      sending: string
      success: string
      error: string
      comingSoon: string
    }
    info: {
      title: string
      address: string
      email: string
      phone: string
      phone2?: string
      hours: string
    }
  }
  footer: {
    description: string
    quickLinks: string
    services: string
    contact: string
    rights: string
  }
  loading: {
    tagline: string
  }
}

export const translations: Record<Language, Translation> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      products: 'منتجاتنا',
      projects: 'مشاريعنا',
      services: 'خدماتنا',
      contact: 'تواصل معنا',
      langToggle: 'EN',
    },
    hero: {
      badge: 'شريكك التقني الموثوق',
      title: 'نبني المستقبل الرقمي',
      titleHighlight: 'بحلول مبتكرة',
      subtitle:
        'سيليكون كوف منشأة تقنية متخصصة في تطوير البرمجيات والحلول الرقمية المتكاملة للقطاعين الحكومي والخاص والأفراد.',
      ctaPrimary: 'ابدأ مشروعك',
      ctaSecondary: 'استكشف خدماتنا',
    },
    aboutPreview: {
      label: 'من نحن',
      title: 'رواد في الحلول التقنية المتكاملة',
      description:
        'نقدم خدمات تطوير المواقع والتطبيقات وأنظمة الإدارة والأنظمة التجارية المخصصة، مع دعم فني متخصص وحلول أمن سيبراني واستشارات تقنية وسحابية.',
      points: [
        'خبرة واسعة في المشاريع الحكومية والخاصة',
        'فريق متخصص في أحدث التقنيات',
        'التزام بأعلى معايير الجودة والأمان',
      ],
      cta: 'اعرف المزيد عنا',
    },
    servicesPreview: {
      label: 'خدماتنا',
      title: 'حلول رقمية شاملة',
      subtitle: 'نغطي كامل دورة حياة المشروع التقني من الفكرة إلى التشغيل والدعم.',
      viewAll: 'عرض جميع الخدمات',
    },
    services: {
      webDev: {
        title: 'تطوير المواقع',
        description: 'مواقع احترافية سريعة ومتجاوبة بتجربة مستخدم متميزة.',
      },
      mobileApps: {
        title: 'تطبيقات الجوال',
        description: 'تطبيقات iOS و Android عالية الأداء بواجهات عصرية.',
      },
      customSystems: {
        title: 'أنظمة مخصصة',
        description: 'أنظمة إدارة وتجارية مصممة حسب احتياجات عملك.',
      },
      cybersecurity: {
        title: 'الأمن السيبراني',
        description: 'حماية شاملة لبياناتك وبنيتك التحتية الرقمية.',
      },
      cloud: {
        title: 'الحلول السحابية',
        description: 'بنية تحتية سحابية مرنة وقابلة للتوسع.',
      },
      consulting: {
        title: 'استشارات تقنية',
        description: 'توجيه استراتيجي لتحقيق أهدافك الرقمية.',
      },
      support: {
        title: 'الدعم الفني',
        description: 'دعم مستمر على مدار الساعة لضمان استمرارية عملك.',
      },
      hardware: {
        title: 'توريد الأجهزة',
        description: 'توفير أجهزة ومعدات تقنية موثوقة.',
      },
    },
    techStack: {
      label: 'تقنياتنا',
      title: 'نبني بأحدث التقنيات',
      subtitle: 'نستخدم أدوات وإطارات عمل حديثة لضمان الأداء والقابلية للتوسع.',
    },
    whyChooseUs: {
      label: 'لماذا نحن',
      title: 'لماذا تختار سيليكون كوف؟',
      items: [
        {
          title: 'خبرة مثبتة',
          description: 'سجل حافل في تنفيذ مشاريع معقدة للجهات الحكومية والشركات.',
        },
        {
          title: 'حلول مخصصة',
          description: 'كل مشروع يُصمم وفق متطلباتك الفريدة وليس قوالب جاهزة.',
        },
        {
          title: 'أمان متقدم',
          description: 'معايير أمنية صارمة تحمي بياناتك وخصوصية عملائك.',
        },
        {
          title: 'دعم مستمر',
          description: 'شراكة طويلة الأمد مع دعم فني وتحديثات مستمرة.',
        },
      ],
    },
    statistics: {
      projects: 'مشروع منجز',
      clients: 'عميل راضٍ',
      years: 'سنوات خبرة',
      experts: 'خبير تقني',
    },
    cta: {
      title: 'جاهز لتحويل فكرتك إلى واقع؟',
      subtitle: 'تواصل معنا اليوم ودعنا نبني حلولك الرقمية معاً.',
      button: 'تواصل معنا الآن',
    },
    aboutPage: {
      heroTitle: 'من نحن',
      heroSubtitle: 'شريكك في رحلة التحول الرقمي',
      mission: {
        label: 'رسالتنا',
        title: 'تمكين التحول الرقمي',
        description:
          'نسعى لتمكين المؤسسات والأفراد من تحقيق أهدافهم الرقمية من خلال حلول برمجية مبتكرة وموثوقة.',
      },
      vision: {
        label: 'رؤيتنا',
        title: 'ريادة الحلول التقنية',
        description:
          'أن نكون الشريك التقني الأول في المنطقة، معروفين بالجودة والابتكار والالتزام.',
      },
      values: {
        label: 'قيمنا',
        title: 'ما يميزنا',
        items: ['الجودة', 'الشفافية', 'الابتكار', 'الالتزام'],
      },
    },
    servicesPage: {
      heroTitle: 'خدماتنا',
      heroSubtitle: 'حلول تقنية متكاملة لكل احتياجاتك',
    },
    productsPage: {
      heroTitle: 'منتجاتنا',
      heroSubtitle: 'منتجات وأنظمة نقدمها لعملائنا وشركائنا',
      features: 'أبرز المزايا',
      techStack: 'التقنيات المستخدمة',
      viewProject: 'عرض المشروع',
      products: {
        mpms: {
          title: 'منارة',
          subtitle: 'نظام إدارة العمليات والخدمات اللوجستية لميناء المكلا',
          description:
            'نظام مؤسسي متكامل قائم على الأدوار لإدارة عمليات الميناء والخدمات اللوجستية، صُمم لميناء المكلا في اليمن. يجمع النظام واجهة React 18 / Vite / TypeScript حديثة مع واجهة برمجية عالية الأداء Laravel 12، مع تحديثات فورية ودعم كامل للغتين العربية والإنجليزية ووحدات متخصصة لكل دور من أدوار تشغيل الميناء.',
          features: [
            'لوحات تحكم مخصصة لخمسة أدوار: وكيل الشحن، ضابط الميناء، مدير الرصيف، التاجر، والإدارة التنفيذية',
            'إدارة وصول السفن ورسوّها وتصاريحها مع سجلات العمليات',
            'رفع بيانات الحمولة (XML/JSON) وتتبع إجراءات التخليص',
            'مراقبة سعات التخزين وتوزيع الحاويات في المخازن والساحات',
            'إشعارات فورية عبر WebSockets (Laravel Reverb)',
            'دعم كامل للعربية (RTL) والإنجليزية مع التوقيع الإلكتروني',
          ],
          tech: ['React 18', 'Vite', 'TypeScript', 'Laravel 12', 'Tailwind CSS', 'MySQL / SQLite', 'WebSockets'],
          status: 'في تَقَدم',
          link: 'https://github.com/mo3stx8/MPMS',
        },
      },
    },
    projectsPage: {
      heroTitle: 'مشاريعنا',
      heroSubtitle: 'مشاريع أنجزناها لعملائنا وشركائنا',
      features: 'تفاصيل المشروع',
      techStack: 'مجال العمل',
      projects: {
        yard: {
          title: 'YARD',
          subtitle: 'صيانة تقنية شاملة للأنظمة والشبكات',
          description:
            'أنجزنا لمنظمة YARD عملية صيانة شاملة للجانب التقني للشركة، شملت أنظمتها وبنيتها التحتية للشبكات، لضمان استقرار وكفاءة وأمان العمليات التقنية اليومية.',
          features: [
            'صيانة شاملة للأنظمة التقنية للشركة',
            'صيانة وتحسين البنية التحتية للشبكات',
            'ضمان استقرار وكفاءة العمليات اليومية',
          ],
          tech: ['إدارة الأنظمة', 'البنية التحتية للشبكات'],
          status: 'مكتمل',
        },
        agf: {
          title: 'AGF',
          subtitle: 'صيانة أجهزة مؤسسة البنات الشاملة في اليمن',
          description:
            'نفذنا أعمال صيانة شاملة لأجهزة مؤسسة البنات الشاملة (All Girls Foundation) في اليمن، شملت الأجهزة التقنية والمعدات لضمان كفاءتها واستمرارية عملها اليومي.',
          features: [
            'صيانة شاملة للأجهزة التقنية والمعدات',
            'فحص وتشخيص الأعطال وإصلاحها',
            'ضمان استمرارية تشغيل الأجهزة',
          ],
          tech: ['صيانة الأجهزة', 'إدارة الأنظمة'],
          status: 'مكتمل',
        },
        aacl: {
          title: 'AACL',
          subtitle: 'صيانة شبكة المنطقة الحرة للتخليص الجمركي والخدمات اللوجستية',
          description:
            'نفذنا أعمال صيانة شاملة للشبكة الخاصة بالمنطقة الحرة للتخليص الجمركي والخدمات اللوجستية AACL، شملت البنية التحتية للشبكات وضمان استقرار وسرعة وأمان الاتصال بين الأنظمة.',
          features: [
            'صيانة شاملة للبنية التحتية للشبكة',
            'تحسين أداء وسرعة الاتصال بين الأنظمة',
            'ضمان أمان واستقرار الشبكة',
          ],
          tech: ['البنية التحتية للشبكات', 'إدارة الأنظمة'],
          status: 'مكتمل',
        },
        latech: {
          title: 'LATECH',
          subtitle: 'متجر إلكتروني لمتجر تقني محلي',
          description:
            'بنينا متجراً إلكترونياً متكاملاً لمتجر LATECH التقني المحلي، يشمل عرض المنتجات وإدارة المخزون وسلة الشراء والطلب، بواجهة عصرية سريعة ومتجاوبة مع جميع الأجهزة.',
          features: [
            'عرض المنتجات والتصنيفات والبحث',
            'سلة شراء وإدارة الطلبات',
            'لوحة تحكم لإدارة المنتجات والمخزون',
            'تصميم متجاوب وسريع',
          ],
          tech: ['تطوير الويب', 'منصة تجارة إلكترونية'],
          status: 'مكتمل',
        },
        appointment: {
          title: 'My-Appointment',
          subtitle: 'موقع إلكتروني لمستشفى لإدارة جميع وظائف المستشفى',
          description:
            'بنينا موقعاً إلكترونياً متكاملاً لمستشفى باسم My-Appointment، يتيح تنفيذ جميع وظائف المستشفى إلكترونياً؛ من إدارة المواعيد والسجلات الطبية إلى إدارة المرضى والأقسام والأطباء والعمليات اليومية.',
          features: [
            'إدارة المواعيد وحجوزات المرضى',
            'سجلات طبية إلكترونية للمرضى',
            'إدارة الأقسام والموظفين والأطباء',
            'متابعة الحالات والخدمات الطبية',
          ],
          tech: ['تطوير الويب', 'نظام إدارة المستشفيات'],
          status: 'مكتمل',
        },
      },
    },
    contactPage: {
      heroTitle: 'تواصل معنا',
      heroSubtitle: 'نحن هنا لمساعدتك في مشروعك القادم',
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        subject: 'الموضوع',
        message: 'رسالتك',
        submit: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
        success: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
        error: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
        comingSoon: 'نموذج التواصل سيُفعَّل قريباً.',
      },
      info: {
        title: 'معلومات التواصل',
        address: 'الجمهورية  اليمنية',
        email: 'info@siliconcove.com',
        phone: '+967 775 886 025',
        phone2:'+966 56 077 9488',
        hours: 'الأحد - الخميس: 9:00 - 18:00',
      },
    },
    footer: {
      description:
        'منشأة تقنية متخصصة في تطوير البرمجيات والحلول الرقمية المتكاملة.',
      quickLinks: 'روابط سريعة',
      services: 'خدماتنا',
      contact: 'تواصل',
      rights: 'جميع الحقوق محفوظة.',
    },
    loading: {
      tagline: 'نبني المستقبل الرقمي',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      projects: 'Projects',
      services: 'Services',
      contact: 'Contact',
      langToggle: 'ع',
    },
    hero: {
      badge: 'Your Trusted Tech Partner',
      title: 'Building the Digital Future',
      titleHighlight: 'With Innovation',
      subtitle:
        'SiliconCove is a tech entity specializing in software development and integrated digital solutions for government, private sector, and individuals.',
      ctaPrimary: 'Start Your Project',
      ctaSecondary: 'Explore Services',
    },
    aboutPreview: {
      label: 'About Us',
      title: 'Leaders in Integrated Tech Solutions',
      description:
        'We deliver website development, mobile apps, custom management and commercial systems, with specialized technical support, cybersecurity, IT consulting, and cloud solutions.',
      points: [
        'Extensive experience in government and private projects',
        'Team specialized in cutting-edge technologies',
        'Commitment to highest quality and security standards',
      ],
      cta: 'Learn More About Us',
    },
    servicesPreview: {
      label: 'Our Services',
      title: 'Comprehensive Digital Solutions',
      subtitle: 'We cover the full tech project lifecycle from idea to deployment and support.',
      viewAll: 'View All Services',
    },
    services: {
      webDev: {
        title: 'Web Development',
        description: 'Professional, fast, responsive websites with exceptional UX.',
      },
      mobileApps: {
        title: 'Mobile Apps',
        description: 'High-performance iOS and Android apps with modern interfaces.',
      },
      customSystems: {
        title: 'Custom Systems',
        description: 'Management and commercial systems tailored to your business.',
      },
      cybersecurity: {
        title: 'Cybersecurity',
        description: 'Comprehensive protection for your data and digital infrastructure.',
      },
      cloud: {
        title: 'Cloud Solutions',
        description: 'Flexible, scalable cloud infrastructure.',
      },
      consulting: {
        title: 'IT Consulting',
        description: 'Strategic guidance to achieve your digital goals.',
      },
      support: {
        title: 'Technical Support',
        description: '24/7 support ensuring business continuity.',
      },
      hardware: {
        title: 'Hardware Supply',
        description: 'Reliable tech equipment and hardware provisioning.',
      },
    },
    techStack: {
      label: 'Technologies',
      title: 'Built with Modern Tech',
      subtitle: 'We use modern tools and frameworks for performance and scalability.',
    },
    whyChooseUs: {
      label: 'Why Us',
      title: 'Why Choose SiliconCove?',
      items: [
        {
          title: 'Proven Expertise',
          description: 'Track record of complex government and enterprise projects.',
        },
        {
          title: 'Custom Solutions',
          description: 'Every project designed for your unique requirements, not templates.',
        },
        {
          title: 'Advanced Security',
          description: 'Strict security standards protecting your data and privacy.',
        },
        {
          title: 'Ongoing Support',
          description: 'Long-term partnership with continuous support and updates.',
        },
      ],
    },
    statistics: {
      projects: 'Projects Delivered',
      clients: 'Happy Clients',
      years: 'Years Experience',
      experts: 'Tech Experts',
    },
    cta: {
      title: 'Ready to Turn Your Idea into Reality?',
      subtitle: 'Contact us today and let us build your digital solutions together.',
      button: 'Contact Us Now',
    },
    aboutPage: {
      heroTitle: 'About Us',
      heroSubtitle: 'Your partner in digital transformation',
      mission: {
        label: 'Our Mission',
        title: 'Enabling Digital Transformation',
        description:
          'We empower organizations and individuals to achieve their digital goals through innovative, reliable software solutions.',
      },
      vision: {
        label: 'Our Vision',
        title: 'Leading Tech Solutions',
        description:
          'To be the premier tech partner in the region, known for quality, innovation, and commitment.',
      },
      values: {
        label: 'Our Values',
        title: 'What Sets Us Apart',
        items: ['Quality', 'Transparency', 'Innovation', 'Commitment'],
      },
    },
    servicesPage: {
      heroTitle: 'Our Services',
      heroSubtitle: 'Integrated tech solutions for all your needs',
    },
    productsPage: {
      heroTitle: 'Our Products',
      heroSubtitle: 'Products and systems we build for our clients and partners',
      features: 'Key Features',
      techStack: 'Technologies Used',
      viewProject: 'View Project',
      products: {
        mpms: {
          title: 'Manarah',
          subtitle: 'Port Operations & Logistics Management System for the Port of Mukalla',
          description:
            'An enterprise-grade, role-based Port Operations and Logistics Management System built for the Port of Mukalla, Yemen. It combines a high-performance Laravel 12 REST API with a modern React 18 / Vite / TypeScript frontend, offering real-time updates, dual-language support, and specialized modules for every port operation role.',
          features: [
            'Role-based dashboards for five port roles: Shipping Agent, Port Officer, Wharf Manager, Trader, and Executive',
            'Vessel arrival, berthing and clearance management with operational event logs',
            'Cargo manifest upload (XML/JSON) with clearance progress tracking',
            'Wharf storage capacity and container distribution tracking',
            'Real-time notifications via WebSockets (Laravel Reverb)',
            'Full Arabic (RTL) / English support with digital signature capture',
          ],
          tech: ['React 18', 'Vite', 'TypeScript', 'Laravel 12', 'Tailwind CSS', 'MySQL / SQLite', 'WebSockets'],
          status: 'In Progress',
          link: 'https://github.com/mo3stx8/MPMS',
        },
      },
    },
    projectsPage: {
      heroTitle: 'Our Projects',
      heroSubtitle: 'Projects we have delivered for our clients and partners',
      features: 'Project Highlights',
      techStack: 'Field of Work',
      projects: {
        yard: {
          title: 'YARD',
          subtitle: 'Full IT Maintenance for Systems & Network',
          description:
            'A completed maintenance engagement for YARD Organization, covering their technical side — systems and network infrastructure — to keep operations stable, secure, and efficient.',
          features: [
            'Comprehensive maintenance of the organization systems',
            'Network infrastructure maintenance and optimization',
            'Ensuring the stability and efficiency of daily operations',
          ],
          tech: ['System Administration', 'Network Infrastructure'],
          status: 'Completed',
        },
        agf: {
          title: 'AGF',
          subtitle: 'Equipment Maintenance for All Girls Foundation in Yemen',
          description:
            'We performed comprehensive maintenance on the equipment of All Girls Foundation (AGF) in Yemen, covering their technical equipment and devices to ensure efficiency and continuity of daily operations.',
          features: [
            'Comprehensive maintenance of technical equipment and devices',
            'Testing, diagnosing and fixing faults',
            'Ensuring continuous equipment operation',
          ],
          tech: ['Hardware Maintenance', 'System Administration'],
          status: 'Completed',
        },
        aacl: {
          title: 'AACL',
          subtitle: 'Network Maintenance for Free Zone for Customs Clearance & Logistics Services',
          description:
            'We performed comprehensive maintenance on the network of the Free Zone for Customs Clearance and Logistics Services (AACL), covering the network infrastructure and ensuring stable, fast, and secure connectivity between systems.',
          features: [
            'Comprehensive network infrastructure maintenance',
            'Improved connection performance and speed between systems',
            'Ensuring network security and stability',
          ],
          tech: ['Network Infrastructure', 'System Administration'],
          status: 'Completed',
        },
        latech: {
          title: 'LATECH',
          subtitle: 'E-commerce Store for a Local Tech Shop',
          description:
            'We built a complete e-commerce store for LATECH, a local tech shop. It includes product listings, inventory management, shopping cart and ordering, with a modern, fast, responsive interface across all devices.',
          features: [
            'Product listings, categories and search',
            'Shopping cart and order management',
            'Dashboard to manage products and inventory',
            'Fast, responsive design',
          ],
          tech: ['Web Development', 'E-commerce Platform'],
          status: 'Completed',
        },
        appointment: {
          title: 'My-Appointment',
          subtitle: 'Hospital Website That Handles All Hospital Functions',
          description:
            'We built a comprehensive hospital website called My-Appointment that can perform all hospital functions electronically, from appointment scheduling and electronic medical records to managing patients, departments, doctors, and daily operations.',
          features: [
            'Appointment scheduling and patient bookings',
            'Electronic medical records for patients',
            'Management of departments, staff and doctors',
            'Case follow-up and medical services',
          ],
          tech: ['Web Development', 'Hospital Management System'],
          status: 'Completed',
        },
      },
    },
    contactPage: {
      heroTitle: 'Contact Us',
      heroSubtitle: 'We are here to help with your next project',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        subject: 'Subject',
        message: 'Your Message',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Your message was sent successfully! We will contact you soon.',
        error: 'An error occurred. Please try again.',
        comingSoon: 'The contact form will be activated soon.',
      },
      info: {
        title: 'Contact Information',
        address: 'Republice of Yemen',
        email: 'info@siliconcove.com',
        phone: '+967 775 886 025',
        phone2:'+966 56 077 9488',
        hours: 'Sun - Thu: 9:00 AM - 6:00 PM',
      },
    },
    footer: {
      description:
        'A tech entity specializing in software development and integrated digital solutions.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      rights: 'All rights reserved.',
    },
    loading: {
      tagline: 'Building the Digital Future',
    },
  },
}

export interface StatData {
  key: 'projects' | 'clients' | 'years' | 'experts'
  value: number
  suffix: string
}


export const statsData: StatData[] = [
  { key: 'projects', value: 80, suffix: '+' },
  { key: 'clients', value: 80, suffix: '+' },
  { key: 'years', value: 3, suffix: '+' },
  { key: 'experts', value: 20, suffix: '+' },
]

export interface TechStackItem {
  name: string
  category: 'frontend' | 'backend' | 'cloud' | 'devops' | 'mobile' | 'database'
}

export const techStackItems: TechStackItem[] = [
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Laravel', category: 'backend' },
  { name: 'PHP', category: 'backend' },
  { name: 'AWS', category: 'cloud' },
  { name: 'Docker', category: 'devops' },
  { name: 'Flutter', category: 'mobile' },
  { name: 'Dart', category: 'mobile' },
  { name: 'MYSQL', category: 'database' },
  { name: 'SQL Server', category: 'database' },
]

export const serviceKeys: ServiceKey[] = [
  'webDev',
  'mobileApps',
  'customSystems',
  'cybersecurity',
  'cloud',
  'consulting',
  'support',
  'hardware',
]

export const productKeys: ProductKey[] = ['mpms']

export const projectKeys: ProjectKey[] = ['yard', 'agf', 'aacl', 'latech', 'appointment']
