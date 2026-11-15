export const profile = {
  name: 'Dhinesh V', title: 'Aspiring Full Stack Developer', location: 'Chennai, Tamil Nadu',
  email: 'dhineshv42@gmail.com', github: 'https://github.com/dhineshv-dev',
  linkedin: 'https://linkedin.com/in/dhineshvdev',
  intro: 'Computer Science Engineering student focused on building reliable, user-friendly web applications using Java, Spring Boot, REST APIs and modern frontend technologies.',
  education: [
    { degree: 'B.E. Computer Science and Engineering', institution: 'Vel Tech Multi Tech Dr. Rangarajan Dr. Sakunthala Engineering College, Chennai', period: '2024 – 2028', result: 'CGPA: 7.8 / 10.0' },
    { degree: 'Higher Secondary (CBSE)', institution: 'A.K.T Memorial Vidya Saaket School, Kallakurichi', period: '2023 – 2024', result: '86%' }
  ],
  skills: [
    { category: 'Languages', items: ['Java', 'Python', 'SQL'] },
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)'] },
    { category: 'Backend', items: ['Spring Boot', 'Spring Security', 'RESTful APIs'] },
    { category: 'Persistence & Database', items: ['Spring Data JPA', 'Hibernate', 'MySQL', 'Schema Design'] },
    { category: 'Core Concepts', items: ['OOP', 'Data Structures & Algorithms', 'DBMS', 'Collections Framework'] },
    { category: 'Tools & IoT', items: ['Git', 'GitHub', 'VS Code', 'LeetCode', 'Arduino IDE', 'ESP32', 'IoT Sensors'] }
  ],
  projects: [
    { number: '01', name: 'ShopEasy', type: 'Spring Boot Backend Learning Project', description: 'An initial Spring Boot project created while learning backend development, with Maven configuration, Spring Web MVC dependencies, and a basic application-context test. E-commerce features and database integration are not yet implemented.', tags: ['Java', 'Spring Boot', 'Spring Web MVC', 'Maven', 'JUnit'], github: null },
    { number: '02', name: 'Smart Motor', type: 'Simulation-Based Agriculture Monitoring', description: 'A software prototype using simulated sensor readings, rule-based motor protection, anomaly detection, and a Tamil/English voice assistant. ESP32 firmware and physical sensor integration are planned.', tags: ['Spring Boot', 'React', 'Python', 'MySQL', 'Docker', 'Ollama'], github: null, overview: 'https://github.com/dhineshv-dev/dhineshv-dev/blob/main/projects/smart-motor.md' }
  ],
  achievements: [{ name: 'Naukri Campus Young Turks 2026', detail: '91.64 percentile in the national-level skill contest', date: 'October 2026' }]
};
