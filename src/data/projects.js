export const profileData = {
  name: "Muhamad Rizal Fahlefi",
  degree: "S.Kom — Teknik Informatika (IPK 3.49)",
  role: "Full-Stack Web Developer",
  location: "Magelang, Indonesia",
  email: "rizal.fahlefi@email.com",
  github: "https://github.com/username-kamu",
  linkedin: "https://linkedin.com/in/username-kamu",
  bio: "Lulusan Teknik Informatika dengan fokus pada pengembangan aplikasi web modern menggunakan React JS, JavaScript, dan PHP. Berpengalaman membangun sistem digitalisasi dokumen instansi hingga aplikasi streaming media interaktif.",
};

export const projectsData = [
  {
    id: 1,
    title: "RizTube — Interactive Media Streaming App",
    category: "Frontend & Media",
    year: "2026",
    shortDesc: "Aplikasi web pemutar video dan audio lokal dengan fitur ambient lighting dinamis, manajemen antrean, dan pencocokan subtitle otomatis.",
    problem: "Pemutar media standar browser kurang mendukung pengelolaan koleksi video multi-part, penggabungan subtitle .srt otomatis berdasarkan judul, serta pengalaman visual layar lebar.",
    solution: "Membangun antarmuka streaming menggunakan Plyr dengan efek ambient lighting real-time (blur dinamis dari video/thumbnail), fitur bundling episode, serta memigrasi arsitektur dari PHP ke React JS berbasis komponen.",
    features: [
      "Dynamic YouTube-style ambient lighting dengan kontrol warna & intensitas blur",
      "Auto-matching file subtitle .srt dan dukungan upload audio MP3 + thumbnail terpisah",
      "Sistem antrean pemutaran (Queue) dan bundling video multi-part",
    ],
    techStack: ["React JS", "JavaScript (ES6+)", "Plyr.js", "PHP", "CSS3"],
    githubUrl: "https://github.com/username-kamu/riztube",
    demoUrl: "",
  },
  {
    id: 2,
    title: "Sistem Pengumpulan Dokumen Digital",
    category: "Full-Stack",
    year: "2025",
    shortDesc: "Aplikasi web internal untuk mendigitalisasi dan memusatkan alur pengumpulan berkas administrasi di Korwil Disdikbud Secang.",
    problem: "Proses pengumpulan dokumen dari berbagai unit pendidikan masih dilakukan secara manual sehingga menyulitkan pelacakan kelengkapan berkas dan pengarsipan.",
    solution: "Merancang dan membangun portal web pengumpulan dokumen terpusat selama program magang untuk mempercepat proses unggah, validasi, dan rekapitulasi berkas.",
    features: ["Manajemen unggah dan kategorisasi dokumen digital terstruktur", "Pelacakan status kelengkapan berkas secara real-time", "Antarmuka ringkas yang mudah digunakan oleh staf administrasi"],
    techStack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/username-kamu/sistem-dokumen-secang",
    demoUrl: "",
  },
  {
    id: 3,
    title: "Full-Stack Task & Productivity REST API",
    category: "Full-Stack",
    year: "2026",
    shortDesc: "Aplikasi manajemen tugas dan pelacakan progres harian berbasis arsitektur decoupled antara frontend React dan backend Node.js REST API.",
    problem: "Kebutuhan akan aplikasi pencatat progres skill dan tugas harian yang cepat dengan pemisahan logika antara antarmuka pengguna dan layanan data.",
    solution: "Mengimplementasikan operasi CRUD penuh menggunakan React Hooks (useState, useEffect) yang terhubung ke REST API Express/Node.js.",
    features: ["Operasi Create, Read, Update, Delete (CRUD) secara asinkron", "Manajemen state reaktif dengan filter status penyelesaian tugas", "Arsitektur RESTful JSON API yang siap dikembangkan ke database SQL/NoSQL"],
    techStack: ["React JS", "Node.js", "Express", "REST API", "Tailwind CSS"],
    githubUrl: "https://github.com/username-kamu/crud-quest-tracker",
    demoUrl: "",
  },
];

export const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React JS", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend & Database",
    skills: ["PHP", "Node.js & Express", "REST API", "MySQL", "JSON Data Modeling"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git & GitHub", "Vite", "VS Code", "AI Prompt Engineering", "Linux / Windows CLI"],
  },
];
