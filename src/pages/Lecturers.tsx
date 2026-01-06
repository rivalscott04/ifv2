import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ExternalLink, BookOpen, GraduationCap, Search, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import PageHeader from "@/components/landing/PageHeader";
import { lecturers, type Lecturer } from "@/data/lecturers";

function LecturerCard({
  lecturer,
  index,
  onClick,
}: {
  lecturer: Lecturer;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
      className="group w-full text-left bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <div className="flex items-start gap-4">
        <img
          src={lecturer.image}
          alt={lecturer.name}
          className="w-16 h-16 rounded-full object-cover ring-2 ring-border group-hover:ring-primary/50 transition-all"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
            {lecturer.name}
          </h3>
          <p className="text-sm text-muted-foreground">{lecturer.title}</p>
          {lecturer.expertise.length > 0 && (
            <p className="text-sm text-amber mt-1 truncate">{lecturer.expertise[0]}</p>
          )}
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
          Lihat Profil →
        </span>
      </div>
    </motion.button>
  );
}

function LecturerModal({
  lecturer,
  open,
  onOpenChange,
}: {
  lecturer: Lecturer | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!lecturer) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4 border-b border-border">
          <div className="flex items-center gap-4">
            <img
              src={lecturer.image}
              alt={lecturer.name}
              className="w-20 h-20 rounded-full object-cover ring-2 ring-primary/20"
            />
            <div>
              <DialogTitle className="text-xl font-bold text-foreground">
                {lecturer.name}
              </DialogTitle>
              <p className="text-sm font-medium text-primary mt-1">{lecturer.title}</p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {lecturer.expertise.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Bidang Keahlian
              </h4>
              <div className="flex flex-wrap gap-2">
                {lecturer.expertise.map((exp) => (
                  <span
                    key={exp}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full font-medium"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Kontak & Profil Akademik
            </h4>
            <div className="space-y-2">
              <a
                href={`mailto:${lecturer.email}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                <span className="text-sm text-foreground">{lecturer.email}</span>
              </a>
              {(lecturer.scholar || lecturer.sinta) && (
                <div className="grid grid-cols-2 gap-2">
                  {lecturer.scholar && (
                    <a
                      href={lecturer.scholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                      <span className="text-sm text-foreground">Google Scholar</span>
                    </a>
                  )}
                  {lecturer.sinta && (
                    <a
                      href={lecturer.sinta}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                      <span className="text-sm text-foreground">SINTA</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {lecturer.courses.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Mata Kuliah yang Diampu
              </h4>
              <ul className="space-y-2">
                {lecturer.courses.map((course) => (
                  <li key={course} className="flex items-center gap-3 text-sm text-foreground">
                    <GraduationCap className="w-4 h-4 text-amber flex-shrink-0" />
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Accordion type="single" collapsible className="border-t border-border pt-2">
            <AccordionItem value="admin-data" className="border-b-0">
              <AccordionTrigger className="text-sm text-muted-foreground hover:text-foreground hover:no-underline py-3">
                Data Kepegawaian
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">NIP</span>
                    <span className="font-mono text-foreground">{lecturer.nip}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">NIDN</span>
                    <span className="font-mono text-foreground">{lecturer.nidn}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Pangkat/Golongan</span>
                    <span className="text-foreground text-right">{lecturer.rank}</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function LecturersPage() {
  const { t } = useTranslation();
  const [selectedLecturer, setSelectedLecturer] = useState<Lecturer | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCardClick = (lecturer: Lecturer) => {
    setSelectedLecturer(lecturer);
    setModalOpen(true);
  };

  const filteredLecturers = lecturers.filter(
    (lecturer) =>
      lecturer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lecturer.expertise.some((exp) => exp.toLowerCase().includes(searchQuery.toLowerCase())) ||
      lecturer.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Dosen & Tenaga Pengajar - Program Studi Teknik Informatika | Universitas Mataram</title>
        <meta
          name="description"
          content="Daftar lengkap dosen dan tenaga pengajar Program Studi Teknik Informatika Universitas Mataram dengan keahlian di bidang Artificial Intelligence, Data Science, Software Engineering, Cyber Security, dan teknologi informasi lainnya."
        />
        <meta name="keywords" content="dosen teknik informatika, tenaga pengajar, dosen universitas mataram, profesor informatika, ahli AI, data science expert, software engineering, cyber security specialist, unram" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/dosen" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/dosen" />
        <meta property="og:title" content="Dosen & Tenaga Pengajar - Program Studi Teknik Informatika Universitas Mataram" />
        <meta property="og:description" content="Daftar lengkap dosen dan tenaga pengajar Program Studi Teknik Informatika Universitas Mataram dengan keahlian di bidang AI, Data Science, Software Engineering, dan lainnya." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:locale" content="id_ID" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dosen & Tenaga Pengajar - Program Studi Teknik Informatika Universitas Mataram" />
        <meta name="twitter:description" content="Daftar lengkap dosen dan tenaga pengajar Program Studi Teknik Informatika Universitas Mataram dengan keahlian di berbagai bidang teknologi informasi." />
      </Helmet>

      <Header />

      <main className="pt-16 pb-16">
        <div className="section-container">
          <PageHeader
            badge={t("nav.lecturers")}
            title={t("nav.lecturers")}
            description="Dosen-dosen Program Studi Teknik Informatika yang kompeten dan berpengalaman di bidangnya."
            breadcrumbs={[{ label: "Profil", href: "/#about" }, { label: t("nav.lecturers") }]}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Cari berdasarkan nama, keahlian, atau jabatan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredLecturers.map((lecturer, index) => (
              <LecturerCard
                key={lecturer.name}
                lecturer={lecturer}
                index={index}
                onClick={() => handleCardClick(lecturer)}
              />
            ))}
          </div>

          {filteredLecturers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Tidak ada dosen yang ditemukan.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />

      <LecturerModal
        lecturer={selectedLecturer}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  );
}
