export interface AnnouncementItem {
    id: string;
    title: string;
    date: string;
    content: string;
    priority: boolean;
}

export const announcementsData: AnnouncementItem[] = [
    {
        id: "1",
        title: "Jadwal Ujian Akhir Semester Genap 2024/2025",
        date: "20 Jan 2025",
        content: "Pelaksanaan UAS Genap akan dimulai pada tanggal 1 Juni 2025. Jadwal lengkap per mata kuliah dapat diunduh melalui portal akademik mahasiwa.",
        priority: true,
    },
    {
        id: "2",
        title: "Pendaftaran KKN Periode Februari - Maret 2025",
        date: "18 Jan 2025",
        content: "Pendaftaran Kuliah Kerja Nyata (KKN) untuk periode awal tahun 2025 telah dibuka. Mahasiswa yang telah menempuh minimal 100 SKS wajib mendaftar.",
        priority: false,
    },
    {
        id: "3",
        title: "Batas Akhir Pengumpulan Proposal Tugas Akhir",
        date: "15 Jan 2025",
        content: "Diberitahukan kepada mahasiswa angkatan 2021, batas akhir bimbingan dan pengumpulan berkas proposal TA adalah akhir bulan ini.",
        priority: true,
    },
    {
        id: "4",
        title: "Beasiswa Prestasi Akademik 2025",
        date: "25 Jan 2025",
        content: "Dibuka pendaftaran beasiswa prestasi bagi mahasiswa dengan IPK minimal 3.75. Informasi persyaratan lebih lanjut tersedia di ruang tata usaha.",
        priority: false,
    },
];
