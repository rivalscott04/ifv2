import { motion } from "framer-motion";
import { ArrowRight, Calendar, Megaphone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { newsData } from "@/data/newsData";
import { announcementsData } from "@/data/announcementsData";

export default function News() {
  const { t } = useTranslation();

  // Take top 3 for landing page
  const latestNews = newsData.slice(0, 3);
  const latestAnnouncements = announcementsData.slice(0, 3);

  return (
    <section id="news" className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-sm font-medium text-amber uppercase tracking-wider">{t("news.badge")}</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3">
            {t("news.title")}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-foreground">{t("news.latestNews")}</h3>
              <Button variant="ghost" size="sm" className="group" asChild>
                <Link to="/berita">
                  {t("news.allNews")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestNews.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
                >
                  <Link to={`/berita/${item.id}`}>
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </div>
                      <h4 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">{item.excerpt}</p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Announcements Column */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Megaphone className="w-5 h-5 text-amber" />
                {t("news.announcements")}
              </h3>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              {latestAnnouncements.map((item, index) => (
                <Link
                  key={item.title}
                  to={`/pengumuman/${item.id}`}
                  className={`block p-4 hover:bg-accent/50 transition-colors ${index !== latestAnnouncements.length - 1 ? 'border-b border-border' : ''
                    }`}
                >
                  <div className="flex items-start gap-3">
                    {item.priority && (
                      <span className="flex-shrink-0 w-2 h-2 mt-2 bg-amber rounded-full" />
                    )}
                    <div className={!item.priority ? 'ml-5' : ''}>
                      <h4 className="font-medium text-foreground text-sm mb-1 hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
              <div className="p-4 bg-secondary/30">
                <Button variant="ghost" size="sm" className="w-full group" asChild>
                  <Link to="/berita">
                    {t("news.allAnnouncements")}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
