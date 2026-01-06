import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import PageHeader from "@/components/landing/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

const events = [
    {
        date: "1 - 15 Agustus 2025",
        title: "Registrasi Ulang Mahasiswa Baru",
        description: "Proses administrasi dan verifikasi dokumen bagi calon mahasiswa baru.",
    },
    {
        date: "25 Agustus 2025",
        title: "Awal Perkuliahan Semester Ganjil",
        description: "Hari pertama perkuliahan secara resmi dimulai untuk seluruh angkatan.",
    },
    {
        date: "13 - 24 Oktober 2025",
        title: "Ujian Tengah Semester (UTS)",
        description: "Evaluasi capaian pembelajaran pertengahan semester.",
    },
];

export default function AcademicCalendar() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pt-16 pb-16">
                <div className="section-container">
                    <PageHeader
                        badge="Akademik"
                        title="Kalender Akademik"
                        description="Informasi lengkap jadwal kegiatan akademik untuk semester berjalan."
                        breadcrumbs={[{ label: "Akademik", href: "/#akademik" }, { label: "Kalender Akademik" }]}
                    />

                    <div className="max-w-3xl mt-12 space-y-6">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Card className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                                    <CardContent className="p-6 flex gap-6 items-start">
                                        <div className="hidden sm:flex flex-col items-center justify-center p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                                            <CalendarIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 text-sm font-bold text-amber mb-2">
                                                <Clock className="w-4 h-4" />
                                                {event.date}
                                            </div>
                                            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                            <p className="text-muted-foreground">{event.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
