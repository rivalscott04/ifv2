import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, ExternalLink, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { lecturers, type Lecturer } from "@/data/lecturers";

function LecturerCard({ 
  lecturer, 
  index, 
  onClick 
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
      transition={{ duration: 0.4, delay: index * 0.1 }}
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
        <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors inline-flex items-center gap-1">
          Lihat Profil
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </motion.button>
  );
}

function LecturerModal({ 
  lecturer, 
  open, 
  onOpenChange 
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
          {/* Research Interests */}
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

          {/* Contact & Links */}
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

          {/* Courses Taught */}
          {lecturer.courses.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Mata Kuliah yang Diampu
              </h4>
              <ul className="space-y-2">
                {lecturer.courses.map((course) => (
                  <li
                    key={course}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <GraduationCap className="w-4 h-4 text-amber flex-shrink-0" />
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Administrative Data - Collapsible */}
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

export default function Lecturers() {
  const [selectedLecturer, setSelectedLecturer] = useState<Lecturer | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = (lecturer: Lecturer) => {
    setSelectedLecturer(lecturer);
    setModalOpen(true);
  };

  return (
    <section id="lecturers" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-sm font-medium text-amber uppercase tracking-wider">
              Tenaga Pengajar
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3">
              Dosen Program Studi
            </h2>
          </div>
          <Button variant="outline" className="group w-fit" asChild>
            <Link to="/dosen">
              Lihat Semua Dosen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lecturers.slice(0, 6).map((lecturer, index) => (
            <LecturerCard
              key={lecturer.name}
              lecturer={lecturer}
              index={index}
              onClick={() => handleCardClick(lecturer)}
            />
          ))}
        </div>
      </div>

      <LecturerModal
        lecturer={selectedLecturer}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
