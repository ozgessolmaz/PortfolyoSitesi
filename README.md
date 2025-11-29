# React + Spring Boot Portfolio

Modern portfolio web application built with React (Tailwind CSS) and a Spring Boot REST API. The backend serves profile, project, experience, and skills data while also handling contact form submissions.

## Monorepo Yapısı

Bu dizin içerisinde hem React hem de Spring Boot projeleri yan yana bulunur:

- `backend/` — Spring Boot REST API
- `src/`, `public/`, `package.json` vb. — React uygulaması

## Gereksinimler

- Node.js 18+
- npm 8+
- Java 17 (veya uyumlu JDK)
- Maven 3.8+

## Backend (Spring Boot)

```bash
cd backend
mvn spring-boot:run
```

Uygulama varsayılan olarak `http://localhost:8080` adresinde açılır ve aşağıdaki uç noktaları sağlar:

- `GET /api/profile`
- `GET /api/projects`
- `GET /api/experiences`
- `GET /api/skills`
- `POST /api/contact`

`POST /api/contact` doğrulamayı geçtiğinde 201 döner ve form içeriğini loglar.

### Docker ile çalıştırmak

```bash
cd backend
docker build -t ozge-portfolio-backend .
docker run -p 8080:8080 ozge-portfolio-backend
```

İsteğe bağlı JVM parametreleri için `JAVA_OPTS` ortam değişkenini kullanabilirsiniz:

```bash
docker run -p 8080:8080 -e JAVA_OPTS="-Xms256m -Xmx512m" ozge-portfolio-backend
```

## Frontend (React)

```bash
npm install
npm start
```

Arayüz `http://localhost:3000` adresinde çalışır ve backend verilerini çekmek için varsayılan olarak `http://localhost:8080/api` taban adresini kullanır.

### API Taban Adresini Değiştirmek

Farklı bir backend adresi kullanmanız gerekiyorsa `.env` dosyası oluşturarak aşağıdaki gibi belirtin:

```
REACT_APP_API_BASE_URL=http://localhost:8081/api
```

## Üretim Derlemesi

```bash
npm run build
```

Komut `build/` klasöründe optimize edilmiş statik dosyalar üretir.

## Test

```bash
npm test
```

Şu anda proje özelinde test senaryosu eklenmedi; Create React App varsayılan test koşucu yapılandırması yüklüdür.

## Notlar

 - Tailwind yapılandırması `tailwind.config.js` dosyasında bulunur.
- Backend, frontende CORS erişimi için `http://localhost:3000` kaynağına izin verir. Farklı bir origin gerekirse `PortfolioController` üzerindeki `@CrossOrigin` anotasyonunu güncelleyin.
- İletişim formu backend tarafında sadece loglama yapar; gerçek bir e-posta/mesajlaşma entegrasyonu eklemek için `PortfolioController.submitContact` metodunu genişletebilirsiniz.
