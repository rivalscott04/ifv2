import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
import heroStudents from "@/assets/hero-students.jpg";

export default function Hero() {
  const { t } = useTranslation();
  
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[600px] flex items-center">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-foreground/10 rounded-full text-primary-foreground/80 text-sm mb-6"
            >
              <span className="w-2 h-2 bg-amber rounded-full animate-pulse" />
              {t("hero.badge")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            >
              {t("hero.title")}{" "}
              <span className="text-amber">{t("hero.titleHighlight")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl lg:text-2xl text-primary-foreground/90 font-light mb-4 leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl" className="group" asChild>
                <a
                  href="https://pmb.unram.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("hero.ctaPrimary")}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="heroSecondary" size="xl" className="group" asChild>
                <Link to="/akademik/kurikulum">
                  <BookOpen className="w-5 h-5" />
                  {t("hero.ctaSecondary")}
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <OptimizedImage
                src={heroStudents}
                alt="Mahasiswa informatika sedang berdiskusi dan coding bersama"
                priority={true}
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/20 to-transparent pointer-events-none" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-xl p-5 shadow-xl border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-amber">A</span>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t("hero.accreditation")}</div>
                  <div className="font-semibold text-foreground">{t("hero.accreditationValue")}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80V60C240 20 480 0 720 0C960 0 1200 20 1440 60V80H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
}
