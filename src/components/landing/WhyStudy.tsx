import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Award, Users, FlaskConical, Building2, TrendingUp } from "lucide-react";

export default function WhyStudy() {
  const { t } = useTranslation();
  
  const reasons = [
    {
      icon: Award,
      title: t("whyStudy.accreditation"),
      description: t("whyStudy.accreditationDesc"),
    },
    {
      icon: Users,
      title: t("whyStudy.lecturers"),
      description: t("whyStudy.lecturersDesc"),
    },
    {
      icon: FlaskConical,
      title: t("whyStudy.curriculum"),
      description: t("whyStudy.curriculumDesc"),
    },
    {
      icon: Building2,
      title: t("whyStudy.partnership"),
      description: t("whyStudy.partnershipDesc"),
    },
    {
      icon: TrendingUp,
      title: t("whyStudy.graduates"),
      description: t("whyStudy.graduatesDesc"),
    },
  ];
  
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-sm font-medium text-amber uppercase tracking-wider">{t("whyStudy.badge")}</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            {t("whyStudy.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("whyStudy.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto bg-primary/5 rounded-2xl flex items-center justify-center mb-4">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
