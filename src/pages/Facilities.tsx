import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import PageHeader from "@/components/landing/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Layers } from "lucide-react";

const facilityList = [
    {
        name: "Laboratorium Komputasi Dasar",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
        desc: "Fasilitas untuk praktikum dasar pemrograman dan algoritma.",
    },
    {
        name: "Laboratorium Riset & AI",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
        desc: "Laboratorium khusus untuk riset kecerdasan buatan dan data science.",
    },
    {
        name: "Perpustakaan Teknik",
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=300&fit=crop",
        desc: "Koleksi buku teks dan jurnal ilmiah terlengkap di bidang teknik.",
    },
];

export default function Facilities() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pt-16 pb-16">
                <div className="section-container">
                    <PageHeader
                        badge="Layanan & Fasilitas"
                        title="Fasilitas Kampus"
                        description="Kami menyediakan sarana terbaik untuk mendukung kenyamanan belajar dan riset mahasiswa."
                        breadcrumbs={[{ label: "Layanan", href: "#" }, { label: "Fasilitas" }]}
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {facilityList.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Card className="overflow-hidden border-none shadow-lg group">
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                                            <h3 className="text-white font-bold text-xl leading-tight">{item.name}</h3>
                                        </div>
                                    </div>
                                    <CardContent className="p-6 bg-card">
                                        <div className="flex items-center gap-2 text-primary font-bold mb-3 text-sm">
                                            <Layers size={16} />
                                            SPESIFIKASI MODEREN
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
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
