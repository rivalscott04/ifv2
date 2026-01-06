import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import PageHeader from "@/components/landing/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
    {
        year: "1996",
        title: "Visi Strategis UNRAM",
        description: "Rencana pendirian Program Studi Teknik Informatika tertuang dalam Rencana Strategis (RENSTRA) UNRAM 1996 – 2005.",
    },
    {
        year: "2009",
        title: "Persiapan Pembukaan",
        description: "Terbit SK Rektor No. 1399/H18.11.4/KU/2009 untuk persiapan pembukaan Prodi di bawah Fakultas Teknik.",
    },
    {
        year: "2012",
        title: "Izin Operasional Resmi",
        description: "Pada 5 Juni 2012, SK Mendikbud No. 105/E/0/2012 diterbitkan sebagai izin operasional resmi Program Studi.",
    },
    {
        year: "2012",
        title: "Angkatan Pertama",
        description: "Agustus 2012, angkatan pertama diterima dengan antusiasme tinggi, berkembang langsung menjadi dua kelas paralel.",
    },
    {
        year: "2024",
        title: "Pencapaian Unggul",
        description: "Terus berkembang hingga meraih predikat Akreditasi Unggul, membuktikan dedikasi kualitas pendidikan berkelanjutan.",
    },
];

export default function History() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pt-16 pb-16">
                <div className="section-container">
                    <PageHeader
                        badge="Profil Prodi"
                        title="Sejarah Singkat"
                        description="Perjalanan panjang Program Studi Teknik Informatika Universitas Mataram dalam membangun talenta digital nasional."
                        breadcrumbs={[{ label: "Profil", href: "/#about" }, { label: "Sejarah" }]}
                    />

                    <div className="max-w-4xl mx-auto mt-16 relative">
                        {/* Timeline Line */}
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-border rounded-full" />

                        <div className="space-y-12">
                            {timelineEvents.map((event, index) => (
                                <motion.div
                                    key={event.title}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`relative flex items-center justify-between w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    <div className="hidden md:block w-5/12" />

                                    {/* Timeline Dot */}
                                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                                    <Card className="w-full md:w-5/12 ml-8 md:ml-0 overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow bg-card/50 backdrop-blur-sm">
                                        <CardContent className="p-6">
                                            <span className="text-2xl font-bold text-amber">{event.year}</span>
                                            <h3 className="text-xl font-bold mt-2 mb-3">{event.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {event.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
