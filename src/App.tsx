import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./i18n/config"; // Initialize i18n

// Lazy load pages untuk code splitting - hanya load saat diperlukan
const Index = lazy(() => import("./pages/Index"));
const Lecturers = lazy(() => import("./pages/Lecturers"));
const History = lazy(() => import("./pages/History"));
const VisionMission = lazy(() => import("./pages/VisionMission"));
const OrgStructure = lazy(() => import("./pages/OrgStructure"));
const Staff = lazy(() => import("./pages/Staff"));
const PLO = lazy(() => import("./pages/PLO"));
const Curriculum = lazy(() => import("./pages/Curriculum"));
const AcademicCalendar = lazy(() => import("./pages/AcademicCalendar"));
const Facilities = lazy(() => import("./pages/Facilities"));
const NewsPortal = lazy(() => import("./pages/NewsPortal"));
const NewsDetail = lazy(() => import("./pages/NewsDetail"));
const AnnouncementDetail = lazy(() => import("./pages/AnnouncementDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component untuk saat lazy loading
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dosen" element={<Lecturers />} />
              <Route path="/profil/sejarah" element={<History />} />
              <Route path="/profil/visi-misi" element={<VisionMission />} />
              <Route path="/profil/struktur" element={<OrgStructure />} />
              <Route path="/profil/staf" element={<Staff />} />
              <Route path="/akademik/plo" element={<PLO />} />
              <Route path="/akademik/kurikulum" element={<Curriculum />} />
              <Route path="/akademik/kalender" element={<AcademicCalendar />} />
              <Route path="/fasilitas" element={<Facilities />} />
              <Route path="/berita" element={<NewsPortal />} />
              <Route path="/berita/:id" element={<NewsDetail />} />
              <Route path="/pengumuman/:id" element={<AnnouncementDetail />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
