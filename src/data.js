export const profile = {
  name: 'Özge Solmaz',
  title: 'Full-stack Developer & AI Enthusiast',
  location: 'İstanbul, Türkiye',
  summary:
    'React, Spring Boot ve yapay zeka teknolojileriyle kullanıcı odaklı, ölçeklenebilir ürünler geliştiriyorum. Hem frontend hem backend tarafında sorumluluk alarak uçtan uca çözümler üretiyorum.',
  highlights: [
    'Modern frontend stack (React, Tailwind, TypeScript) ile güçlü kullanıcı arayüzleri',
    'Spring Boot ile RESTful API ve kurumsal mimari deneyimi',
    'Bilgisayarlı görü ve makine öğrenimi projeleri',
    'Takım içi iletişim ve bilgi paylaşımına önem veren çalışma tarzı',
  ],
  socialLinks: [
    {
      platform: 'GitHub',
      username: 'ozgessolmaz',
      url: 'https://github.com/ozgessolmaz',
    },
    {
      platform: 'LinkedIn',
      username: 'Özge Solmaz',
      url: 'https://www.linkedin.com',
    },
  ],
};

export const projects = [
  {
    id: 'project-landmarkr',
    name: 'Landmarkr',
    description:
      'React ve Spring Boot kullanarak geliştirdiğim seyahat platformu; kullanıcıların gitmek istedikleri destinasyonlardaki popüler yerleri ve konaklama seçeneklerini keşfetmesini sağlıyor.',
    technologies: ['React', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: null,
    sourceUrl: 'https://github.com/ozgessolmaz',
  },
  {
    id: 'project-signdesk',
    name: 'Turkcell SignDesk',
    description:
      'Görüntü işleme ve işaret dili modelleriyle, işaret dilini metne ve metni işarete çevirerek işitme engelli bireyler için erişilebilir iletişim sunan proje.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'React'],
    liveUrl: 'https://signdesk.live/',
    sourceUrl: 'https://github.com/nisasubozkurt/Turkcell_SignDesk',
  },
  {
    id: 'project-plate-recognition',
    name: 'Plaka Tanıma Sistemi',
    description:
      'Trafik kameralarından gelen verilerde araç plakalarını tespit eden ve tanıyan Python tabanlı bilgisayarlı görü çözümü.',
    technologies: ['Python', 'OpenCV', 'YOLO'],
    liveUrl: null,
    sourceUrl: 'https://github.com/ozgessolmaz',
  },
  {
    id: 'project-ocr',
    name: 'OCR Fatura Yakalama',
    description:
      'Fatura ve fişleri optik karakter tanıma ile yapısal veriye dönüştüren otomasyon çalışması.',
    technologies: ['Python', 'Tesseract OCR', 'Pandas'],
    liveUrl: null,
    sourceUrl: 'https://github.com/ozgessolmaz',
  },
  {
    id: 'project-mask-detection',
    name: 'Mask Detection',
    description:
      'Gerçek zamanlı kamera görüntülerinde maske kullanımını tespit eden derin öğrenme modeli.',
    technologies: ['Python', 'Keras', 'OpenCV'],
    liveUrl: null,
    sourceUrl: 'https://github.com/ozgessolmaz',
  },
  {
    id: 'project-react-native-todo',
    name: 'ToDo App (React Native)',
    description:
      'Günlük görevleri planlamak için hafif yapıda React Native mobil uygulaması.',
    technologies: ['React Native', 'Expo', 'JavaScript'],
    liveUrl: null,
    sourceUrl: 'https://github.com/ozgessolmaz',
  },
  {
    id: 'project-learning-repos',
    name: 'Algorithm & Coding Practice',
    description:
      'LeetCode çözümleri, Java algoritma pratikleri ve Spring Boot denemelerini barındıran öğrenme depoları.',
    technologies: ['Java', 'Python', 'Spring Boot'],
    liveUrl: null,
    sourceUrl: 'https://github.com/ozgessolmaz',
  },
];

export const experiences = [
  {
    id: 'exp-overtech',
    company: 'OVERTECH',
    role: 'Software Support Specialist Engineer',
    startDate: '2025-09-29',
    endDate: null,
    location: 'Istanbul, Turkey',
    achievements: [
      'Pavo POS cihazlarının yeni nesil modellerini Spring Boot tabanlı ödeme servisleriyle entegre ederek saha kurulum sürelerini kısalttım.',
      'Cihaz logları ve alarm mekanizmalarını izleyip proaktif müdahalelerle müşteri kesinti oranını azalttım.',
      'Satış sonrası ekiplerle birlikte POS firmware güncellemelerinin geri bildirim döngüsünü dijitalleştirerek destek süreçlerini hızlandırdım.',
    ],
  },
  {
    id: 'exp-turkcell-gyk',
    company: 'Turkcell Geleceği Yazan Kadınlar',
    role: 'Yapay Zeka Programı Katılımcısı',
    startDate: '2025-01-28',
    endDate: '2025-10-12',
    location: 'Istanbul, Turkey',
    achievements: [
      'SignDesk projesinde işaret dilini metne çeviren bilgisayarlı görü modelini geliştirdim.',
      'Python, TensorFlow ve OpenCV eğitimleri ile makine öğrenmesi pipeline’ları oluşturdum.',
      'Takım arkadaşlarımla birlikte saha demosu hazırlayarak sosyal etki odaklı çözüm sunduk.',
    ],
  },
  {
    id: 'exp-tam-finans-intern-ce',
    company: 'TAM Finans',
    role: 'Bilgisayar Mühendisi Stajyeri',
    startDate: '2025-01-27',
    endDate: '2025-05-16',
    location: 'Istanbul, Turkey',
    achievements: [
      'Kredi başvurusu süreçlerini izleyen React bileşenleri geliştirdim ve performans optimizasyonu yaptım.',
      'Spring Boot mikroservislerinin log analizini otomatikleştirerek sorun tespit süresini kısalttım.',
      'Takım içi kod incelemelerine aktif katılım sağlayarak kalite standartlarını yükselttim.',
    ],
  },
  {
    id: 'exp-tam-finans-intern',
    company: 'TAM Finans',
    role: 'Yazılım Stajyeri',
    startDate: '2024-07-01',
    endDate: '2024-09-13',
    location: 'Istanbul, Turkey',
    achievements: [
      'Kurumsal müşteriler için hazırlanan iç panellere yeni raporlama ekranları ekledim.',
      'REST API’lerde hata yakalama mekanizmalarını güçlendiren birim testleri yazdım.',
      'Ürün yöneticileriyle yakın çalışarak kullanıcı geri bildirimlerini backlog’a aktardım.',
    ],
  },
  {
    id: 'exp-akuple',
    company: 'Aküple Yazılım',
    role: 'Yazılım Stajyeri',
    startDate: '2024-01-20',
    endDate: '2024-03-13',
    location: 'Konya, Turkey',
    achievements: [
      'React tabanlı müşteri portalında bileşen kütüphanesini standart hale getirdim.',
      'Spring Boot servisleri için Swagger tabanlı API dokümantasyonu oluşturdum.',
      'Kod gözden geçirmeleri ve sprint planlama toplantılarıyla çevik sürece katkı sundum.',
    ],
  },
  {
    id: 'exp-tubitak',
    company: 'TÜBİTAK',
    role: 'Eğitim Programı Katılımcısı',
    startDate: '2023-10-01',
    endDate: '2023-11-30',
    location: 'Ankara, Turkey',
    achievements: [
      'Bilgisayarlı görü ve yapay zeka konulu atölyelerde akademisyenlerle projeler geliştirdim.',
      'Veri bilimi uygulamalarında Python ve bilimsel kütüphaneleri etkin kullandım.',
      'Program sonunda tanımlanan proje sunumuyla analitik problem çözme becerisi sergiledim.',
    ],
  },
];

export const education = [
  {
    id: 'edu-msc-neu',
    institution: 'Necmettin Erbakan Üniversitesi',
    school: 'Fen Bilimleri Enstitüsü',
    degree: 'Yüksek Lisans',
    field: 'Bilgisayar Mühendisliği (Tezli)',
    period: '2025 - Devam ediyor',
  },
  {
    id: 'edu-bsc-neu',
    institution: 'Necmettin Erbakan Üniversitesi',
    school: null,
    degree: 'Lisans',
    field: 'Bilgisayar Mühendisliği',
    period: '2021 - 2025',
  },
  {
    id: 'edu-hs-final',
    institution: 'Özel Güneşli Final Anadolu Lisesi',
    school: null,
    degree: 'Lise',
    field: null,
    period: '2017 - 2021',
  },
];

export const certificates = [
  {
    id: 'cert-turkcell-gyk',
    name: 'Turkcell Geleceği Yazan Kadınlar - Yapay Zeka Programı',
    issuer: 'Turkcell',
    period: '28.01.2025 - 12.10.2025',
  },
  {
    id: 'cert-tubitak-2023',
    name: 'TÜBİTAK Eğitim Programı',
    issuer: 'TÜBİTAK',
    period: '08.10.2023 - 08.11.2023',
  },
];

export const skills = {
  'Frontend': [
    { name: 'React', proficiency: 80 },
    { name: 'JavaScript', proficiency: 80 },
    { name: 'Tailwind CSS', proficiency: 70 },
  ],
  'Backend': [
    { name: 'Spring Boot', proficiency: 70 },
    { name: 'REST API Tasarımı', proficiency: 75 },
  ],
  'Veri ve AI': [
    { name: 'Python', proficiency: 75 },
    { name: 'Bilgisayarlı Görü', proficiency: 65 },
  ],
};
