import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  Code2, 
  Database, 
  Brain, 
  Network, 
  Server, 
  ShieldCheck 
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FocusAreas() {
  const { t } = useTranslation();
  
  const focusAreas = [
    {
      icon: Code2,
      title: t("focusAreas.softwareEngineering"),
      description: t("focusAreas.softwareEngineeringDesc"),
    },
    {
      icon: Database,
      title: t("focusAreas.dataScience"),
      description: t("focusAreas.dataScienceDesc"),
    },
    {
      icon: Brain,
      title: t("focusAreas.ai"),
      description: t("focusAreas.aiDesc"),
    },
    {
      icon: Network,
      title: t("focusAreas.networks"),
      description: t("focusAreas.networksDesc"),
    },
    {
      icon: Server,
      title: t("focusAreas.informationSystems"),
      description: t("focusAreas.informationSystemsDesc"),
    },
    {
      icon: ShieldCheck,
      title: t("focusAreas.cyberSecurity"),
      description: t("focusAreas.cyberSecurityDesc"),
    },
  ];
  
  return (
    <section className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-sm font-medium text-amber uppercase tracking-wider">{t("focusAreas.badge")}</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            {t("focusAreas.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("focusAreas.description")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {focusAreas.map((area) => (
            <motion.div
              key={area.title}
              variants={cardVariants}
              className="group bg-card rounded-xl p-6 border border-border hover:border-amber/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber/10 transition-colors">
                <area.icon className="w-7 h-7 text-primary group-hover:text-amber transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
