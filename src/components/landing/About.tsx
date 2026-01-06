import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
import aboutStudents from "@/assets/about-students.jpg";

export default function About() {
  const { t } = useTranslation();
  
  const highlights = [
    t("about.highlight1"),
    t("about.highlight2"),
    t("about.highlight3"),
    t("about.highlight4"),
  ];
  
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <OptimizedImage
                src={aboutStudents}
                alt="Mahasiswa sedang belajar coding di laboratorium komputer"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-amber uppercase tracking-wider">{t("about.badge")}</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-6">
              {t("about.title")}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t("about.description1")}
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t("about.description2")}
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="outline" className="group" asChild>
              <Link to="/profil/visi-misi">
                {t("about.cta")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
