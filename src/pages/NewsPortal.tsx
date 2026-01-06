import { useState } from "react";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import PageHeader from "@/components/landing/PageHeader";
import { NewsCard } from "@/components/NewsCard";
import { AnnouncementCard } from "@/components/AnnouncementCard";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { newsData } from "@/data/newsData";
import { announcementsData } from "@/data/announcementsData";
import { motion } from "framer-motion";

export default function NewsPortal() {
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("all");

    const filteredNews = newsData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredAnnouncements = announcementsData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main className="py-12">
                <div className="section-container">
                    <PageHeader
                        title={t("news.portalTitle", "Berita & Pengumuman")}
                        badge={t("news.portalBadge", "Informasi Terbaru")}
                        breadcrumbs={[
                            { label: t("news.portalTitle", "Berita & Pengumuman") }
                        ]}
                    />

                    {/* Search and Filters */}
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10 border-b border-border pb-8">
                        <div className="relative w-full max-w-md group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <Input
                                placeholder={t("news.searchPlaceholder", "Cari berita atau pengumuman...")}
                                className="pl-10 h-11 border-border focus-visible:ring-primary shadow-sm"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveTab}>
                            <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
                                <TabsTrigger value="all">{t("news.tabs.all", "Semua")}</TabsTrigger>
                                <TabsTrigger value="news">{t("news.tabs.news", "Berita")}</TabsTrigger>
                                <TabsTrigger value="announcements">{t("news.tabs.ann", "Pengumuman")}</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>

                    <Tabs value={activeTab} className="w-full">
                        {/* All Content */}
                        <TabsContent value="all" className="mt-0 space-y-12">
                            {filteredNews.length > 0 && (
                                <div>
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                        <span className="w-1 h-8 bg-primary rounded-full"></span>
                                        {t("news.latestNews", "Berita Terbaru")}
                                    </h2>
                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                                    >
                                        {filteredNews.map((item) => (
                                            <motion.div key={`news-${item.id}`} variants={itemVariants}>
                                                <NewsCard item={item} />
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            )}

                            {filteredAnnouncements.length > 0 && (
                                <div>
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                        <span className="w-1 h-8 bg-amber rounded-full"></span>
                                        {t("news.announcements", "Pengumuman")}
                                    </h2>
                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4"
                                    >
                                        {filteredAnnouncements.map((item) => (
                                            <motion.div key={`ann-${item.id}`} variants={itemVariants}>
                                                <AnnouncementCard item={item} />
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            )}

                            {filteredNews.length === 0 && filteredAnnouncements.length === 0 && (
                                <div className="text-center py-20">
                                    <p className="text-muted-foreground">{t("news.noResults", "Tidak ada hasil yang ditemukan.")}</p>
                                </div>
                            )}
                        </TabsContent>

                        {/* News Only */}
                        <TabsContent value="news" className="mt-0">
                            {filteredNews.length > 0 ? (
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                                >
                                    {filteredNews.map((item) => (
                                        <motion.div key={`news-tab-${item.id}`} variants={itemVariants}>
                                            <NewsCard item={item} />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            ) : (
                                <div className="text-center py-20">
                                    <p className="text-muted-foreground">{t("news.noNewsResults", "Tidak ada berita yang ditemukan.")}</p>
                                </div>
                            )}
                        </TabsContent>

                        {/* Announcements Only */}
                        <TabsContent value="announcements" className="mt-0">
                            {filteredAnnouncements.length > 0 ? (
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4"
                                >
                                    {filteredAnnouncements.map((item) => (
                                        <motion.div key={`ann-tab-${item.id}`} variants={itemVariants}>
                                            <AnnouncementCard item={item} />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            ) : (
                                <div className="text-center py-20">
                                    <p className="text-muted-foreground">{t("news.noAnnResults", "Tidak ada pengumuman yang ditemukan.")}</p>
                                </div>
                            )}
                        </TabsContent>
                    </Tabs>
                </div>
            </main>

            <Footer />
        </div>
    );
}
