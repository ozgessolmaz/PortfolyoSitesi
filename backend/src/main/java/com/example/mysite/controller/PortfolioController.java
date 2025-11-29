package com.example.mysite.controller;

import com.example.mysite.model.ContactRequest;
import com.example.mysite.model.Experience;
import com.example.mysite.model.Profile;
import com.example.mysite.model.Project;
import com.example.mysite.model.Skill;
import com.example.mysite.model.SocialLink;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class PortfolioController {

    private static final Logger LOGGER = LoggerFactory.getLogger(PortfolioController.class);

    private final Profile profile = buildProfile();
    private final List<Project> projects = buildProjects();
    private final List<Experience> experiences = buildExperiences();
    private final List<Skill> skills = buildSkills();

    @GetMapping("/profile")
    public Profile getProfile() {
        return profile;
    }

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return projects;
    }

    @GetMapping("/experiences")
    public List<Experience> getExperiences() {
        return experiences;
    }

    @GetMapping("/skills")
    public Map<String, List<Skill>> getSkills() {
        // Group skills by category for simpler rendering on the frontend
        return skills.stream().collect(
                java.util.stream.Collectors.groupingBy(Skill::category, java.util.TreeMap::new, java.util.stream.Collectors.toList())
        );
    }

    @PostMapping("/contact")
    public ResponseEntity<Void> submitContact(@Valid @RequestBody ContactRequest request) {
        // In a real project you would forward this to email/Slack/persistence.
        LOGGER.info("New contact request from {} <{}>: {}", request.name(), request.email(), request.message());
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    private Profile buildProfile() {
        return new Profile(
                "Özge Solmaz",
                "Software Engineer & AI Enthusiast",
                "React ve Spring Boot ile kullanıcı odaklı deneyimler geliştirirken; bilgisayarlı görü projeleriyle gerçek dünyayı dijital çözümlere bağlıyorum.",
                List.of(
                        new SocialLink("GitHub", "https://github.com/ozgessolmaz", "ozgessolmaz"),
                        new SocialLink("LinkedIn", "https://www.linkedin.com/in/%C3%B6zge-solmaz-497404226/", "Özge Solmaz"),
                        new SocialLink("Email", "mailto:solmazozge02@gmail.com", "solmazozge02@gmail.com")
                ),
                List.of(
                        "Landmarkr ile seyahat planlamasını kişiselleştiren full-stack web deneyimi",
                        "Turkcell iş birliğiyle geliştirilen SignDesk projesinde işaret dili çevirisi",
                        "Python tabanlı plaka tanıma ve OCR çözümleriyle veri otomasyonu"
                ),
                "Istanbul, Turkey"
        );
    }

    private List<Project> buildProjects() {
        List<Project> projectList = new ArrayList<>();
        projectList.add(new Project(
                "project-landmarkr",
                "Landmarkr",
                "React ve Spring Boot kullanarak geliştirdiğim seyahat platformu; kullanıcıların gitmek istedikleri destinasyonlardaki popüler yerleri ve konaklama seçeneklerini keşfetmesini sağlıyor.",
                List.of("React", "Spring Boot", "PostgreSQL", "Tailwind CSS"),
                null,
                "https://github.com/ozgessolmaz"
        ));
        projectList.add(new Project(
                "project-signdesk",
                "Turkcell SignDesk",
                "Görüntü işleme ve işaret dili modelleriyle, işaret dilini metne ve metni işarete çevirerek işitme engelli bireyler için erişilebilir iletişim sunan proje.",
                List.of("Python", "OpenCV", "TensorFlow", "React"),
                "https://signdesk.live/",
                "https://github.com/ozgessolmaz"
        ));
        projectList.add(new Project(
                "project-plate-recognition",
                "Plaka Tanıma Sistemi",
                "Trafik kameralarından gelen verilerde araç plakalarını tespit eden ve tanıyan Python tabanlı bilgisayarlı görü çözümü.",
                List.of("Python", "OpenCV", "YOLO"),
                null,
                "https://github.com/ozgessolmaz"
        ));
        projectList.add(new Project(
                "project-ocr",
                "OCR Fatura Yakalama",
                "Fatura ve fişleri optik karakter tanıma ile yapısal veriye dönüştüren otomasyon çalışması.",
                List.of("Python", "Tesseract OCR", "Pandas"),
                null,
                "https://github.com/ozgessolmaz"
        ));
        projectList.add(new Project(
                "project-mask-detection",
                "Mask Detection",
                "Gerçek zamanlı kamera görüntülerinde maske kullanımını tespit eden derin öğrenme modeli.",
                List.of("Python", "Keras", "OpenCV"),
                null,
                "https://github.com/ozgessolmaz"
        ));
        projectList.add(new Project(
                "project-react-native-todo",
                "ToDo App (React Native)",
                "Günlük görevleri planlamak için hafif yapıda React Native mobil uygulaması.",
                List.of("React Native", "Expo", "JavaScript"),
                null,
                "https://github.com/ozgessolmaz"
        ));
        projectList.add(new Project(
                "project-learning-repos",
                "Algorithm & Coding Practice",
                "LeetCode çözümleri, Java algoritma pratikleri ve Spring Boot denemelerini barındıran öğrenme depoları.",
                List.of("Java", "Python", "Spring Boot"),
                null,
                "https://github.com/ozgessolmaz"
        ));
        return projectList;
    }

    private List<Experience> buildExperiences() {
        return List.of(
                new Experience(
                        "exp-overtech",
                        "OVERTECH",
                        "Software Support Specialist Engineer",
                        LocalDate.of(2025, 9, 29),
                        null,
                        List.of(
                                "Pavo POS cihazlarının yeni nesil modellerini Spring Boot tabanlı ödeme servisleriyle entegre ederek saha kurulum sürelerini kısalttım.",
                                "Cihaz logları ve alarm mekanizmalarını izleyip proaktif müdahalelerle müşteri kesinti oranını azalttım.",
                                "Satış sonrası ekiplerle birlikte POS firmware güncellemelerinin geri bildirim döngüsünü dijitalleştirerek destek süreçlerini hızlandırdım."
                        ),
                        "Istanbul, Turkey"
                ),
                new Experience(
                        "exp-turkcell-gyk",
                        "Turkcell Geleceği Yazan Kadınlar",
                        "Yapay Zeka Programı Katılımcısı",
                        LocalDate.of(2025, 1, 28),
                        LocalDate.of(2025, 10, 12),
                        List.of(
                                "SignDesk projesinde işaret dilini metne çeviren bilgisayarlı görü modelini geliştirdim.",
                                "Python, TensorFlow ve OpenCV eğitimleri ile makine öğrenmesi pipeline’ları oluşturdum.",
                                "Takım arkadaşlarımla birlikte saha demosu hazırlayarak sosyal etki odaklı çözüm sunduk."
                        ),
                        "Istanbul, Turkey"
                ),
                new Experience(
                        "exp-tam-finans-intern-ce",
                        "TAM Finans",
                        "Bilgisayar Mühendisi Stajyeri",
                        LocalDate.of(2025, 1, 27),
                        LocalDate.of(2025, 5, 16),
                        List.of(
                                "Kredi başvurusu süreçlerini izleyen React bileşenleri geliştirdim ve performans optimizasyonu yaptım.",
                                "Spring Boot mikroservislerinin log analizini otomatikleştirerek sorun tespit süresini kısalttım.",
                                "Takım içi kod incelemelerine aktif katılım sağlayarak kalite standartlarını yükselttim."
                        ),
                        "Istanbul, Turkey"
                ),
                new Experience(
                        "exp-tam-finans-intern",
                        "TAM Finans",
                        "Yazılım Stajyeri",
                        LocalDate.of(2024, 7, 1),
                        LocalDate.of(2024, 9, 13),
                        List.of(
                                "Kurumsal müşteriler için hazırlanan iç panellere yeni raporlama ekranları ekledim.",
                                "REST API’lerde hata yakalama mekanizmalarını güçlendiren birim testleri yazdım.",
                                "Ürün yöneticileriyle yakın çalışarak kullanıcı geri bildirimlerini backlog’a aktardım."
                        ),
                        "Istanbul, Turkey"
                ),
                new Experience(
                        "exp-akuple",
                        "Aküple Yazılım",
                        "Yazılım Stajyeri",
                        LocalDate.of(2024, 1, 20),
                        LocalDate.of(2024, 3, 13),
                        List.of(
                                "React tabanlı müşteri portalında bileşen kütüphanesini standart hale getirdim.",
                                "Spring Boot servisleri için Swagger tabanlı API dokümantasyonu oluşturdum.",
                                "Kod gözden geçirmeleri ve sprint planlama toplantılarıyla çevik sürece katkı sundum."
                        ),
                        "Konya, Turkey"
                ),
                new Experience(
                        "exp-tubitak",
                        "TÜBİTAK",
                        "Eğitim Programı Katılımcısı",
                        LocalDate.of(2023, 10, 1),
                        LocalDate.of(2023, 11, 30),
                        List.of(
                                "Bilgisayarlı görü ve yapay zeka konulu atölyelerde akademisyenlerle projeler geliştirdim.",
                                "Veri bilimi uygulamalarında Python ve bilimsel kütüphaneleri etkin kullandım.",
                                "Program sonunda tanımlanan proje sunumuyla analitik problem çözme becerisi sergiledim."
                        ),
                        "Ankara, Turkey"
                )
        );
    }

    private List<Skill> buildSkills() {
        return List.of(
                new Skill("Languages", "Java", 90),
                new Skill("Languages", "JavaScript / TypeScript", 85),
                new Skill("Languages", "Python", 80),
                new Skill("Frontend", "React", 90),
                new Skill("Frontend", "Tailwind CSS", 85),
                new Skill("Frontend", "Design Systems", 80),
                new Skill("Backend", "Spring Boot", 88),
                new Skill("Backend", "REST API Design", 92),
                new Skill("Backend", "PostgreSQL", 75),
                new Skill("DevOps", "Docker", 70),
                new Skill("DevOps", "GitHub Actions", 65),
                new Skill("AI/ML", "Computer Vision", 72),
                new Skill("AI/ML", "TensorFlow", 68)
        );
    }
}
