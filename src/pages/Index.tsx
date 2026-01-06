import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import QuickAccess from "@/components/landing/QuickAccess";
import About from "@/components/landing/About";
import FocusAreas from "@/components/landing/FocusAreas";
import WhyStudy from "@/components/landing/WhyStudy";
import InternationalCollaboration from "@/components/landing/InternationalCollaboration";
import Statistics from "@/components/landing/Statistics";
import Lecturers from "@/components/landing/Lecturers";
import News from "@/components/landing/News";
import CallToAction from "@/components/landing/CallToAction";
import Footer from "@/components/landing/Footer";

const Index = () => {
  // Structured Data untuk SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Program Studi Teknik Informatika - Universitas Mataram",
    "alternateName": "Prodi Teknik Informatika UNRAM",
    "url": "/",
    "logo": "/logo.png",
    "description": "Program Studi Teknik Informatika Universitas Mataram mencetak profesional IT yang kompeten dalam software engineering, data science, AI, dan cyber security. Terakreditasi Unggul BAN-PT 2024.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Majapahit No. 62",
      "addressLocality": "Mataram",
      "addressRegion": "Nusa Tenggara Barat",
      "postalCode": "83125",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-370-633007",
      "contactType": "Administrative",
      "email": "informatika@unram.ac.id"
    },
    "sameAs": [
      "https://www.instagram.com/proditiunram",
      "https://www.youtube.com/@proditiunram",
      "https://www.linkedin.com/company/proditiunram"
    ]
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Program Studi Teknik Informatika",
    "description": "Program studi yang fokus pada pengembangan kompetensi di bidang teknologi informasi, software engineering, data science, artificial intelligence, dan cyber security.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Universitas Mataram",
      "sameAs": "/"
    },
    "educationalCredentialAwarded": "Sarjana Komputer (S.Kom.)",
    "courseCode": "IF",
    "inLanguage": "id"
  };

  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Program Studi Teknik Informatika - Universitas Mataram | Terakreditasi Unggul</title>
        <meta 
          name="description" 
          content="Program Studi Teknik Informatika Universitas Mataram mencetak profesional IT yang kompeten dalam software engineering, data science, AI, dan cyber security. Terakreditasi Unggul BAN-PT 2024. Daftar mahasiswa baru sekarang!" 
        />
        <meta name="keywords" content="teknik informatika, program studi teknik informatika, universitas mataram, unram, software engineering, data science, artificial intelligence, cyber security, pendidikan tinggi, fakultas teknik, akreditasi unggul, ban-pt, s1 teknik informatika, sarjana komputer" />
        <meta name="author" content="Program Studi Teknik Informatika - Universitas Mataram" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="Indonesian" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:title" content="Program Studi Teknik Informatika - Universitas Mataram | Terakreditasi Unggul" />
        <meta property="og:description" content="Program Studi Teknik Informatika Universitas Mataram mencetak profesional IT yang kompeten dalam software engineering, data science, AI, dan cyber security. Terakreditasi Unggul BAN-PT 2024." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Program Studi Teknik Informatika - Universitas Mataram" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="Program Studi Teknik Informatika - Universitas Mataram" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="/" />
        <meta name="twitter:title" content="Program Studi Teknik Informatika - Universitas Mataram" />
        <meta name="twitter:description" content="Program Studi Teknik Informatika Universitas Mataram mencetak profesional IT yang kompeten dalam software engineering, data science, AI, dan cyber security. Terakreditasi Unggul BAN-PT 2024." />
        <meta name="twitter:image" content="/og-image.jpg" />
        <meta name="twitter:image:alt" content="Program Studi Teknik Informatika - Universitas Mataram" />

        {/* Preload critical images untuk loading lebih cepat */}
        <link rel="preload" as="image" href={heroStudents} fetchPriority="high" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(courseSchema)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <QuickAccess />
          <About />
          <FocusAreas />
          <WhyStudy />
          <InternationalCollaboration />
          <Statistics />
          <Lecturers />
          <News />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
