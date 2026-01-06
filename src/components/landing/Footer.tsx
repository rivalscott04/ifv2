import { Mail, Phone, MapPin, ExternalLink, Instagram, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t("footer.curriculum"), href: "/akademik/kurikulum" },
    { label: t("footer.calendar"), href: "/akademik/kalender" },
    { label: t("footer.repository"), href: "#" },
    { label: t("footer.alumni"), href: "#" },
  ];

  const academicLinks = [
    { label: t("utility.siakad"), href: "https://sia.unram.ac.id", external: true },
    { label: t("utility.lms"), href: "https://berajah-if.unram.ac.id", external: true },
    { label: t("utility.ta"), href: "https://ta.if.unram.ac.id", external: true },
    { label: t("utility.form"), href: "https://form.if.unram.ac.id/index.php/beranda", external: true },
    { label: t("footer.journal"), href: "#", external: true },
    { label: t("footer.library"), href: "#", external: true },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-5 flex-wrap sm:flex-nowrap">
              <img 
                src="/unram.svg" 
                alt="Universitas Mataram" 
                className="h-10 sm:h-12 w-auto object-contain flex-shrink-0"
              />
              <div className="min-w-0">
                <div className="font-semibold leading-tight text-sm sm:text-base">{t("footer.studyProgram")}</div>
                <div className="text-xs sm:text-sm text-primary-foreground/70">{t("footer.informatics")}</div>
              </div>
            </a>
            <p className="text-xs sm:text-sm text-primary-foreground/70 leading-relaxed mb-5">
              {t("footer.faculty")}<br />
              {t("footer.university")}
            </p>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="break-words">{t("footer.address")}</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">+62 370 633007</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">if@unram.ac.id</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground text-sm sm:text-base">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors break-words"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground text-sm sm:text-base">{t("footer.academicServices")}</h4>
            <ul className="space-y-2">
              {academicLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-1 break-words"
                  >
                    <span className="break-words">{link.label}</span>
                    {link.external && <ExternalLink className="w-3 h-3 flex-shrink-0" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Accreditation */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground text-sm sm:text-base">{t("footer.accreditation")}</h4>
            <div className="bg-primary-foreground/10 rounded-lg p-3 sm:p-4 mb-6">
              <div className="text-2xl sm:text-3xl font-bold text-amber mb-1">A</div>
              <div className="text-xs sm:text-sm text-primary-foreground/70">{t("footer.accreditationValue")}</div>
              <div className="text-xs text-primary-foreground/50 mt-1">{t("footer.accreditationYear")}</div>
            </div>
            <h4 className="font-semibold mb-3 text-primary-foreground text-sm sm:text-base">{t("footer.followUs")}</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/ifunramofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors flex-shrink-0"
                aria-label="Instagram IF UNRAM"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@teknikinformatikaunram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors flex-shrink-0"
                aria-label="YouTube Teknik Informatika UNRAM"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-primary-foreground/50">
          <p className="text-center sm:text-left break-words">{t("footer.copyright", { year: currentYear })}</p>
          <div className="flex gap-4 sm:gap-6 flex-wrap justify-center sm:justify-end">
            <a href="#" className="hover:text-primary-foreground transition-colors whitespace-nowrap">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-primary-foreground transition-colors whitespace-nowrap">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
