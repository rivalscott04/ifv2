import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BookOpen, Clock, Layers } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import PageHeader from "@/components/landing/PageHeader";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

const courses = [
    // Semester 1
    { code: "IF1101", name: "Dasar Pemrograman", credits: 3, semester: 1, type: "Wajib" },
    { code: "IF1102", name: "Matematika Diskrit", credits: 3, semester: 1, type: "Wajib" },
    { code: "UNI1101", name: "Pendidikan Agama", credits: 2, semester: 1, type: "Wajib" },
    { code: "UNI1102", name: "Bahasa Indonesia", credits: 2, semester: 1, type: "Wajib" },
    { code: "UNI1103", name: "Pancasila", credits: 2, semester: 1, type: "Wajib" },
    { code: "IF1103", name: "Logika Informatika", credits: 3, semester: 1, type: "Wajib" },
    // Semester 2
    { code: "IF1201", name: "Pemrograman Berorientasi Objek", credits: 3, semester: 2, type: "Wajib" },
    { code: "IF1202", name: "Aljabar Linear", credits: 3, semester: 2, type: "Wajib" },
    { code: "IF1203", name: "Arsitektur Komputer", credits: 3, semester: 2, type: "Wajib" },
    // Semester 3
    { code: "IF2101", name: "Struktur Data", credits: 4, semester: 3, type: "Wajib" },
    { code: "IF2102", name: "Sistem Operasi", credits: 3, semester: 3, type: "Wajib" },
    { code: "IF2103", name: "Basis Data", credits: 3, semester: 3, type: "Wajib" },
    // Semester 4
    { code: "IF2201", name: "Analisis Algoritma", credits: 3, semester: 4, type: "Wajib" },
    { code: "IF2202", name: "Rekayasa Perangkat Lunak", credits: 3, semester: 4, type: "Wajib" },
    // Semester 5
    { code: "IF3101", name: "Kecerdasan Buatan", credits: 3, semester: 5, type: "Wajib" },
    { code: "IF3102", name: "Jaringan Komputer", credits: 3, semester: 5, type: "Wajib" },
    // Semester 6
    { code: "IF3201", name: "Keamanan Informasi", credits: 3, semester: 6, type: "Wajib" },
    { code: "IFC101", name: "Cloud Computing", credits: 3, semester: 6, type: "Pilihan" },
    // Semester 7
    { code: "IF4101", name: "Etika Profesi", credits: 2, semester: 7, type: "Wajib" },
    { code: "IF4102", name: "Metodologi Penelitian", credits: 2, semester: 7, type: "Wajib" },
    // Semester 8
    { code: "IF4201", name: "Tugas Akhir / Skripsi", credits: 6, semester: 8, type: "Wajib" },
];

const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Curriculum() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("1");

    const filteredCourses = courses.filter((course) =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.code.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getCoursesBySemester = (semester: number) => {
        return filteredCourses.filter(c => c.semester === semester);
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="py-8 md:py-12">
                <div className="section-container">
                    <PageHeader
                        badge="Akademik"
                        title="Struktur Kurikulum"
                        description="Daftar mata kuliah inti dan pilihan yang disusun secara sistematis untuk mendukung profil lulusan."
                        breadcrumbs={[{ label: "Akademik", href: "/#akademik" }, { label: "Kurikulum" }]}
                    />

                    {/* Search and Quick Info */}
                    <div className="flex flex-col md:flex-row gap-6 justify-between items-center mt-6 mb-8">
                        <div className="relative w-full max-w-md group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <Input
                                placeholder="Cari nama atau kode mata kuliah..."
                                className="pl-10 h-11 border-border focus-visible:ring-primary shadow-sm"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center gap-6 text-sm text-muted-foreground bg-muted/30 px-4 py-2 rounded-lg border border-border">
                            <div className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-primary" />
                                <span className="font-medium text-foreground">{courses.length}</span> Mata Kuliah
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-amber" />
                                <span className="font-medium text-foreground">
                                    {courses.reduce((acc, curr) => acc + curr.credits, 0)}
                                </span> SKS Total
                            </div>
                        </div>
                    </div>

                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
                            <TabsList className="inline-flex w-auto md:w-full justify-start md:justify-center mb-6">
                                {semesters.map((s) => (
                                    <TabsTrigger key={s} value={s.toString()} className="px-4 md:flex-1">
                                        Semester {s}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab + searchQuery}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
                            >
                                <Table>
                                    <TableHeader className="bg-muted/50">
                                        <TableRow>
                                            <TableHead className="w-[120px] font-bold">Kode</TableHead>
                                            <TableHead className="font-bold">Mata Kuliah</TableHead>
                                            <TableHead className="w-[100px] font-bold text-center">SKS</TableHead>
                                            <TableHead className="w-[120px] font-bold text-center">Sifat</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {getCoursesBySemester(parseInt(activeTab)).length > 0 ? (
                                            getCoursesBySemester(parseInt(activeTab)).map((course) => (
                                                <TableRow key={course.code} className="hover:bg-muted/30 transition-colors">
                                                    <TableCell className="font-mono text-primary font-semibold">{course.code}</TableCell>
                                                    <TableCell className="font-medium">{course.name}</TableCell>
                                                    <TableCell className="text-center">
                                                        <Badge variant="outline" className="font-semibold">{course.credits} SKS</Badge>
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        <span className={`text-xs font-bold uppercase ${course.type === 'Wajib' ? 'text-navy-light' : 'text-amber'}`}>
                                                            {course.type}
                                                        </span>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        ) : (
                                            <TableRow>
                                                <TableCell colSpan={4} className="h-32 text-center text-muted-foreground">
                                                    {searchQuery ? "Mata kuliah tidak ditemukan dalam semester ini." : "Tidak ada data mata kuliah."}
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </motion.div>
                        </AnimatePresence>
                    </Tabs>
                </div>
            </main>
            <Footer />
        </div>
    );
}
