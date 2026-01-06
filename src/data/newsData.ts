export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Workshop Machine Learning untuk Mahasiswa Semester 5",
    date: "15 Jan 2025",
    excerpt: "Program Studi Teknik Informatika mengadakan workshop intensif tentang implementasi machine learning.",
    content: "Workshop ini bertujuan untuk memberikan pemahaman mendalam tentang konsep dasar dan implementasi praktis machine learning menggunakan Python. Peserta akan belajar tentang regresi, klasifikasi, dan pengenalan neural networks.",
    image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=500&fit=crop",
    category: "Akademik",
  },
  {
    id: "2",
    title: "Mahasiswa IF Raih Juara Kompetisi Hackathon Nasional",
    date: "10 Jan 2025",
    excerpt: "Tim mahasiswa berhasil meraih juara pertama dalam ajang hackathon tingkat nasional.",
    content: "Selamat kepada tim 'Alpha Code' dari Teknik Informatika yang berhasil menyabet juara pertama dalam Hackfest 2025. Proyek mereka tentang solusi manajemen limbah cerdas berbasis IoT mendapat pujian dari para juri.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop",
    category: "Prestasi",
  },
  {
    id: "3",
    title: "Kerjasama dengan Industri Teknologi untuk Program Magang",
    date: "5 Jan 2025",
    excerpt: "Penandatanganan MoU dengan beberapa perusahaan teknologi terkemuka.",
    content: "Prodi Teknik Informatika resmi menjalin kerjasama magang dengan 5 perusahaan startup unicorn. Kerjasama ini mencakup program magang bersertifikat selama satu semester bagi mahasiswa tingkat akhir.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    category: "Kerjasama",
  },
  {
    id: "4",
    title: "Kuliah Umum: Masa Depan Keamanan Siber",
    date: "2 Feb 2025",
    excerpt: "Menghadirkan pakar keamanan siber internasional untuk berbagi wawasan.",
    content: "Jangan lewatkan kuliah umum yang akan membahas tren terbaru dalam ancaman siber dan bagaimana cara memitigasinya di era AI. Terbuka untuk seluruh mahasiswa Fakultas Teknik.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
    category: "Akademik",
  },
];
