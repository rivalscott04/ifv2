import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft, Share2, Megaphone } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import PageHeader from "@/components/landing/PageHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { announcementsData } from "@/data/announcementsData";
import { motion } from "framer-motion";

export default function AnnouncementDetail() {
    const { id } = useParams();
    const { t } = useTranslation();

    const announcement = announcementsData.find((item) => item.id === id);

    if (!announcement) {
        return (
            <div className="min-h-screen bg-background">
                <Header />
                <div className="section-container section-padding text-center">
                    <h1 className="text-2xl font-bold mb-4">Pengumuman tidak ditemukan</h1>
                    <Button asChild>
                        <Link to="/berita">Kembali ke Berita</Link>
                    </Button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main className="py-8 md:py-12">
                <div className="section-container max-w-3xl mx-auto">
                    <PageHeader
                        title={announcement.title}
                        badge={announcement.priority ? "Penting" : "Pengumuman"}
                        breadcrumbs={[
                            { label: t("news.portalTitle", "Berita & Pengumuman"), href: "/berita" },
                            { label: "Pengumuman", href: "/berita" },
                            { label: announcement.title }
                        ]}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-muted-foreground border-b border-border pb-6">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" />
                                    <span>{announcement.date}</span>
                                </div>
                                {announcement.priority && (
                                    <Badge className="bg-amber text-amber-foreground border-none">
                                        Penting
                                    </Badge>
                                )}
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" className="gap-2">
                                    <Share2 className="w-4 h-4" />
                                    Bagikan
                                </Button>
                            </div>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-10 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                                <Megaphone className="w-64 h-64 rotate-12" />
                            </div>

                            <div className="relative prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground">
                                <div className="whitespace-pre-line leading-relaxed text-xl">
                                    {announcement.content}
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-border">
                            <Button asChild variant="ghost" className="gap-2 group">
                                <Link to="/berita">
                                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                    Kembali ke Portal Berita
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
