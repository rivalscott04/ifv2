import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Search, Phone, MapPin, Briefcase, Clock } from "lucide-react";
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

interface StaffMember {
    name: string;
    role: string;
    image: string;
    email: string;
    phone?: string;
    office?: string;
    description?: string;
    responsibilities?: string[];
    workHours?: string;
    nip?: string;
}

const staffList: StaffMember[] = [
    {
        name: "Budi Darmono",
        role: "Administrasi Akademik",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop",
        email: "budi@unram.ac.id",
        phone: "+62 370 633007",
        office: "Gedung Teknik Lantai 2, Ruang 201",
        description: "Bertanggung jawab atas administrasi akademik Program Studi Teknik Informatika, termasuk pengelolaan data mahasiswa, jadwal kuliah, dan dokumen akademik.",
        responsibilities: [
            "Pengelolaan data akademik mahasiswa",
            "Penyusunan jadwal kuliah dan ujian",
            "Pengelolaan dokumen akademik",
            "Koordinasi dengan fakultas dan universitas",
            "Pelayanan informasi akademik"
        ],
        workHours: "Senin - Jumat, 08:00 - 16:00 WITA",
        nip: "197501151995031001",
    },
    {
        name: "Siska Amelia",
        role: "Administrasi Keuangan",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
        email: "siska@unram.ac.id",
        phone: "+62 370 633008",
        office: "Gedung Teknik Lantai 2, Ruang 202",
        description: "Mengelola administrasi keuangan Program Studi, termasuk pengelolaan anggaran, pembayaran SPP, dan laporan keuangan.",
        responsibilities: [
            "Pengelolaan anggaran program studi",
            "Pembayaran SPP dan biaya akademik",
            "Pembukuan dan laporan keuangan",
            "Koordinasi dengan bagian keuangan universitas",
            "Pelayanan informasi keuangan"
        ],
        workHours: "Senin - Jumat, 08:00 - 16:00 WITA",
        nip: "198003202000122001",
    },
    {
        name: "Hendra Wijaya",
        role: "Teknisi Laboratorium",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop",
        email: "hendra@unram.ac.id",
        phone: "+62 370 633009",
        office: "Laboratorium Komputer, Gedung Teknik Lantai 1",
        description: "Bertanggung jawab atas pemeliharaan dan pengelolaan fasilitas laboratorium komputer, termasuk perangkat keras dan perangkat lunak.",
        responsibilities: [
            "Pemeliharaan perangkat komputer dan jaringan",
            "Instalasi dan konfigurasi software",
            "Pengelolaan inventaris laboratorium",
            "Dukungan teknis untuk praktikum",
            "Pemeliharaan keamanan sistem"
        ],
        workHours: "Senin - Jumat, 08:00 - 16:00 WITA",
        nip: "198505152005011001",
    },
    {
        name: "Andi Pratama",
        role: "Teknisi Jaringan",
        image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=200&h=200&fit=crop",
        email: "andi.p@unram.ac.id",
        phone: "+62 370 633010",
        office: "Server Room, Gedung Teknik Lantai 1",
        description: "Mengelola infrastruktur jaringan komputer Program Studi, termasuk server, switch, router, dan koneksi internet.",
        responsibilities: [
            "Pemeliharaan infrastruktur jaringan",
            "Konfigurasi server dan perangkat jaringan",
            "Monitoring dan troubleshooting jaringan",
            "Manajemen bandwidth dan keamanan jaringan",
            "Dukungan teknis untuk sistem informasi"
        ],
        workHours: "Senin - Jumat, 08:00 - 16:00 WITA",
        nip: "198708252007011001",
    },
    {
        name: "Rina Kusuma",
        role: "Sekretariat",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
        email: "rina.k@unram.ac.id",
        phone: "+62 370 633011",
        office: "Gedung Teknik Lantai 2, Ruang 203",
        description: "Mengelola administrasi umum Program Studi, termasuk surat-menyurat, arsip, dan pelayanan informasi kepada mahasiswa dan dosen.",
        responsibilities: [
            "Pengelolaan surat masuk dan keluar",
            "Arsip dokumen program studi",
            "Pelayanan informasi umum",
            "Koordinasi kegiatan program studi",
            "Dukungan administrasi untuk dosen dan mahasiswa"
        ],
        workHours: "Senin - Jumat, 08:00 - 16:00 WITA",
        nip: "199001152010122001",
    },
];

function StaffCard({
    staff,
    index,
    onClick,
}: {
    staff: StaffMember;
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
                    src={staff.image}
                    alt={staff.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-border group-hover:ring-primary/50 transition-all"
                />
                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                        {staff.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{staff.role}</p>
                    <a
                        href={`mailto:${staff.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                        <span className="truncate">{staff.email}</span>
                    </a>
                </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    Lihat Detail →
                </span>
            </div>
        </motion.button>
    );
}

function StaffModal({
    staff,
    open,
    onOpenChange,
}: {
    staff: StaffMember | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    if (!staff) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
                <DialogHeader className="pb-4 border-b border-border">
                    <div className="flex items-center gap-4">
                        <img
                            src={staff.image}
                            alt={staff.name}
                            className="w-20 h-20 rounded-full object-cover ring-2 ring-primary/20"
                        />
                        <div>
                            <DialogTitle className="text-xl font-bold text-foreground">
                                {staff.name}
                            </DialogTitle>
                            <p className="text-sm font-medium text-primary mt-1">{staff.role}</p>
                        </div>
                    </div>
                </DialogHeader>

                <div className="space-y-6 pt-4">
                    {staff.description && (
                        <div>
                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                                Deskripsi Tugas
                            </h4>
                            <p className="text-sm text-foreground leading-relaxed">
                                {staff.description}
                            </p>
                        </div>
                    )}

                    {staff.responsibilities && staff.responsibilities.length > 0 && (
                        <div>
                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                                <Briefcase className="w-4 h-4" />
                                Tanggung Jawab
                            </h4>
                            <ul className="space-y-2">
                                {staff.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-foreground">
                                        <span className="text-primary mt-1.5">•</span>
                                        <span>{resp}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div>
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                            Kontak & Informasi
                        </h4>
                        <div className="space-y-2">
                            <a
                                href={`mailto:${staff.email}`}
                                className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                            >
                                <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                                <span className="text-sm text-foreground">{staff.email}</span>
                            </a>
                            {staff.phone && (
                                <a
                                    href={`tel:${staff.phone}`}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                                >
                                    <Phone className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                                    <span className="text-sm text-foreground">{staff.phone}</span>
                                </a>
                            )}
                            {staff.office && (
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                                    <MapPin className="w-4 h-4 text-muted-foreground" />
                                    <span className="text-sm text-foreground">{staff.office}</span>
                                </div>
                            )}
                            {staff.workHours && (
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                                    <Clock className="w-4 h-4 text-muted-foreground" />
                                    <span className="text-sm text-foreground">{staff.workHours}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {staff.nip && (
                        <Accordion type="single" collapsible className="border-t border-border pt-2">
                            <AccordionItem value="admin-data" className="border-b-0">
                                <AccordionTrigger className="text-sm text-muted-foreground hover:text-foreground hover:no-underline py-3">
                                    Data Kepegawaian
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between py-2 border-b border-border/50">
                                            <span className="text-muted-foreground">NIP</span>
                                            <span className="font-mono text-foreground">{staff.nip}</span>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default function Staff() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleCardClick = (staff: StaffMember) => {
        setSelectedStaff(staff);
        setModalOpen(true);
    };

    const filteredStaff = staffList.filter(
        (staff) =>
            staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            staff.role.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pt-16 pb-16">
                <div className="section-container">
                    <PageHeader
                        badge="Profil Prodi"
                        title="Tenaga Kependidikan"
                        description="Tim profesional yang mendukung kelancaran administrasi dan operasional Program Studi."
                        breadcrumbs={[{ label: "Profil", href: "/#about" }, { label: "Staf" }]}
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
                                placeholder="Cari berdasarkan nama atau jabatan..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredStaff.map((staff, index) => (
                            <StaffCard
                                key={staff.name}
                                staff={staff}
                                index={index}
                                onClick={() => handleCardClick(staff)}
                            />
                        ))}
                    </div>

                    {filteredStaff.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">Tidak ada staf yang ditemukan.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />

            <StaffModal
                staff={selectedStaff}
                open={modalOpen}
                onOpenChange={setModalOpen}
            />
        </div>
    );
}
