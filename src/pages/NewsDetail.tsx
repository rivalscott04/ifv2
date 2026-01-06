import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft, Share2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import PageHeader from "@/components/landing/PageHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { newsData } from "@/data/newsData";
import { motion } from "framer-motion";

export default function NewsDetail() {
    const { id } = useParams();
    const { t } = useTranslation();

    const newsItem = newsData.find((item) => item.id === id);

    if (!newsItem) {
        return (
            <div className="min-h-screen bg-background">
                <Header />
                <div className="section-container section-padding text-center">
                    <h1 className="text-2xl font-bold mb-4">Berita tidak ditemukan</h1>
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

            <main className="py-12">
                <div className="section-container max-w-5xl mx-auto">
                    <PageHeader
                        title={newsItem.title}
                        badge={newsItem.category}
                        breadcrumbs={[
                            { label: t("news.portalTitle", "Berita & Pengumuman"), href: "/berita" },
                            { label: newsItem.title }
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
                                    <span>{newsItem.date}</span>
                                </div>
                                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                                    {newsItem.category}
                                </Badge>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" className="gap-2">
                                    <Share2 className="w-4 h-4" />
                                    Bagikan
                                </Button>
                            </div>
                        </div>

                        <div className="aspect-video rounded-2xl overflow-hidden mb-10 shadow-lg">
                            <img
                                src={newsItem.image}
                                alt={newsItem.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground">
                            <p className="text-xl leading-relaxed mb-6 font-medium text-foreground">
                                {newsItem.excerpt}
                            </p>
                            <div className="whitespace-pre-line leading-relaxed">
                                {newsItem.content}
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
