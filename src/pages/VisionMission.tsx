import { motion } from "framer-motion";
import { Target, Lightbulb, CheckCircle2 } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import PageHeader from "@/components/landing/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

export default function VisionMission() {
    const missions = [
        "Menyelenggarakan pendidikan berkualitas internasional di bidang teknologi informasi.",
        "Mengembangkan riset inovatif yang berdampak luas bagi masyarakat dan industri.",
        "Menjalin kerjasama strategis dengan institusi global dan industri terkemuka.",
        "Menerapkan teknologi tepat guna untuk pemberdayaan masyarakat lokal.",
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pt-16 pb-16">
                <div className="section-container">
                    <PageHeader
                        badge="Profil Prodi"
                        title="Visi & Misi"
                        description="Arah dan tujuan strategis kami dalam mencetak profesional IT yang berkarakter dan berdaya saing global."
                        breadcrumbs={[{ label: "Profil", href: "/#about" }, { label: "Visi & Misi" }]}
                    />

                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        {/* Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="h-full bg-primary/5 border-primary/20 overflow-hidden relative group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                    <Target size={120} />
                                </div>
                                <CardContent className="p-8">
                                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                                        <Target className="text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-bold mb-6">Visi</h2>
                                    <p className="text-xl leading-relaxed text-foreground/90 font-medium italic">
                                        "Menjadi pusat unggulan pendidikan dan riset bidang informatika yang diakui secara internasional pada tahun 2030."
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Card className="h-full bg-card border-border overflow-hidden relative group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                                    <Lightbulb size={120} />
                                </div>
                                <CardContent className="p-8">
                                    <div className="w-12 h-12 rounded-lg bg-amber/20 flex items-center justify-center mb-6">
                                        <Lightbulb className="text-amber" />
                                    </div>
                                    <h2 className="text-3xl font-bold mb-6">Misi</h2>
                                    <ul className="space-y-4">
                                        {missions.map((mission, index) => (
                                            <li key={index} className="flex gap-3 items-start group">
                                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {mission}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
