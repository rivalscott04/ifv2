import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: t("nav.home"), href: "/", isRoute: true },
    {
      label: t("nav.profile"),
      href: "/#about",
      isRoute: true,
      dropdown: [
        { label: t("nav.history"), href: "/profil/sejarah", isRoute: true },
        { label: t("nav.vision"), href: "/profil/visi-misi", isRoute: true },
        { label: t("nav.structure"), href: "/profil/struktur", isRoute: true },
        { label: t("nav.lecturers"), href: "/dosen", isRoute: true },
        { label: t("nav.staf"), href: "/profil/staf", isRoute: true },
      ]
    },
    {
      label: t("nav.academic"),
      href: "/#akademik",
      isRoute: true,
      dropdown: [
        { label: t("nav.plo"), href: "/akademik/plo", isRoute: true },
        { label: t("nav.curriculum"), href: "/akademik/kurikulum", isRoute: true },
        { label: t("nav.calendar"), href: "/akademik/kalender", isRoute: true },
      ]
    },
    { label: t("nav.facilities"), href: "/fasilitas", isRoute: true },
    { label: t("nav.news"), href: "/#news", isRoute: true },
  ];

  const utilityLinks = [
    { label: t("utility.siakad"), href: "https://sia.unram.ac.id" },
    { label: t("utility.lms"), href: "https://berajah-if.unram.ac.id" },
    { label: t("utility.ta"), href: "https://ta.if.unram.ac.id" },
    { label: t("utility.form"), href: "https://form.if.unram.ac.id/index.php/beranda" },
    { label: t("utility.repository"), href: "#" },
  ];

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }

    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (location.pathname === path || path === '/') {
        // Jika sudah di halaman yang sama, scroll ke section
        setTimeout(() => {
          const element = document.querySelector(hash ? `#${hash}` : 'main');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Navigate ke halaman lain dengan hash
        navigate(href);
        setTimeout(() => {
          const element = document.querySelector(hash ? `#${hash}` : 'main');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      }
    } else {
      navigate(href);
    }
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Utility Bar */}
      <div className="bg-primary text-primary-foreground/90 text-xs">
        <div className="section-container py-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="hidden sm:inline whitespace-nowrap">informatika@unram.ac.id</span>
              <span className="hidden md:inline whitespace-nowrap">+62 370 633007</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto overflow-x-auto sm:overflow-visible pb-1 sm:pb-0 -mx-4 sm:mx-0 px-4 sm:px-0 scrollbar-hide">
              {utilityLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1 hover:text-primary-foreground transition-colors whitespace-nowrap text-[10px] sm:text-xs flex-shrink-0"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="w-3 h-3 flex-shrink-0" />
                </a>
              ))}
              <div className="flex-shrink-0 ml-auto sm:ml-0">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-card/95 backdrop-blur-md border-b border-border">
        <div className="section-container">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
              <img 
                src="/unram.svg" 
                alt="Universitas Mataram" 
                className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform flex-shrink-0"
              />
              <div className="hidden sm:block min-w-0">
                <div className="font-semibold text-foreground leading-tight text-sm lg:text-base truncate">{t("hero.title")}</div>
                <div className="text-xs sm:text-sm text-muted-foreground truncate">{t("hero.titleHighlight")}</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    onClick={(e) => {
                      if (item.href.includes('#')) {
                        handleNavClick(item.href, e);
                      }
                    }}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-48 bg-card rounded-lg border border-border shadow-lg overflow-hidden"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            onClick={(e) => {
                              if (subItem.href.includes('#')) {
                                handleNavClick(subItem.href, e);
                              } else {
                                setActiveDropdown(null);
                              }
                            }}
                            className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="cta"
                size="default"
                asChild
              >
                <a
                  href="https://pmb.unram.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("nav.register")}
                </a>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-accent rounded-md"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border bg-card overflow-hidden"
            >
              <div className="section-container py-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => {
                            setActiveDropdown(activeDropdown === item.label ? null : item.label);
                          }}
                          className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""
                              }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 space-y-1">
                                {item.dropdown.map((subItem) => (
                                  <Link
                                    key={subItem.label}
                                    to={subItem.href}
                                    onClick={(e) => {
                                      if (subItem.href.includes('#')) {
                                        handleNavClick(subItem.href, e);
                                      } else {
                                        setMobileMenuOpen(false);
                                        setActiveDropdown(null);
                                      }
                                    }}
                                    className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-accent rounded-md transition-colors"
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      item.isRoute ? (
                        <Link
                          to={item.href}
                          onClick={(e) => {
                            if (item.href.includes('#')) {
                              handleNavClick(item.href, e);
                            } else {
                              setMobileMenuOpen(false);
                            }
                          }}
                          className="block px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="block px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      )
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Button
                    variant="cta"
                    className="w-full"
                    asChild
                  >
                    <a
                      href="https://pmb.unram.ac.id"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("nav.register")}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
