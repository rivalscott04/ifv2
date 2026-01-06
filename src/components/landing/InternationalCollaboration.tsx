import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Partner universities data
const partners = [
  {
    id: "snu",
    name: "Seoul National University",
    logo: "/snu.svg",
    website: "https://www.snu.ac.kr/",
  },
  {
    id: "kaist",
    name: "KAIST",
    logo: "/KAIST_logo.svg",
    website: "https://www.kaist.ac.kr/",
  },
  {
    id: "kumamoto",
    name: "Kumamoto University",
    logo: "/kumamoto-university.svg",
    website: "https://www.kumamoto-u.ac.jp/",
  },
  {
    id: "um-malaya",
    name: "University of Malaya",
    logo: "/um_malaya.svg",
    website: "https://www.um.edu.my/",
  },
];

export default function InternationalCollaboration() {
  const { t } = useTranslation();

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
          <span className="text-sm font-medium text-amber uppercase tracking-wider">
            {t("collaboration.badge")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            {t("collaboration.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("collaboration.description")}
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 max-w-5xl mx-auto"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full flex flex-col items-center justify-center p-4 transition-all duration-300 hover:scale-[1.02]"
                aria-label={`${t("collaboration.viewDetails")} ${partner.name}`}
              >
                {/* Logo container with grayscale filter */}
                <div className="w-full h-24 md:h-28 flex items-center justify-center mb-3">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full max-w-[120px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                {/* University name */}
                <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center">
                  {partner.name}
                </p>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            {t("collaboration.caption")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

