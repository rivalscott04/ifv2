import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  BookOpen, 
  Calendar, 
  Megaphone, 
  Users, 
  Award, 
  FolderOpen, 
  GraduationCap, 
  Phone 
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function QuickAccess() {
  const { t } = useTranslation();
  
  const quickLinks = [
    { icon: BookOpen, label: t("quickAccess.curriculum"), href: "/akademik/kurikulum", isRoute: true, description: t("quickAccess.curriculumDesc") },
    { icon: Calendar, label: t("quickAccess.calendar"), href: "/akademik/kalender", isRoute: true, description: t("quickAccess.calendarDesc") },
    { icon: Megaphone, label: t("quickAccess.announcement"), href: "/berita", isRoute: true, description: t("quickAccess.announcementDesc") },
    { icon: Users, label: t("quickAccess.lecturers"), href: "/dosen", isRoute: true, description: t("quickAccess.lecturersDesc") },
    { icon: Award, label: t("quickAccess.scholarship"), href: "#", isRoute: false, description: t("quickAccess.scholarshipDesc") },
    { icon: FolderOpen, label: t("quickAccess.repository"), href: "#", isRoute: false, description: t("quickAccess.repositoryDesc") },
    { icon: GraduationCap, label: t("quickAccess.alumni"), href: "#", isRoute: false, description: t("quickAccess.alumniDesc") },
    { icon: Phone, label: t("quickAccess.contact"), href: "#contact", isRoute: false, description: t("quickAccess.contactDesc") },
  ];
  
  return (
    <section className="section-container -mt-8 relative z-20 overflow-visible">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-3 w-full"
      >
        {quickLinks.map((link) => (
          <motion.div
            key={link.label}
            variants={itemVariants}
          >
            {link.isRoute ? (
              <Link
                to={link.href}
                className="group glass-card rounded-xl p-4 text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 w-full block"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="font-medium text-sm text-foreground mb-0.5">{link.label}</div>
                <div className="text-xs text-muted-foreground hidden sm:block">{link.description}</div>
              </Link>
            ) : (
              <a
                href={link.href}
                className="group glass-card rounded-xl p-4 text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 w-full block"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="font-medium text-sm text-foreground mb-0.5">{link.label}</div>
                <div className="text-xs text-muted-foreground hidden sm:block">{link.description}</div>
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
