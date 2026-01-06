# Program Studi Teknik Informatika - Website

Website resmi Program Studi Teknik Informatika, Fakultas Teknik, Universitas Mataram.

## Teknologi yang Digunakan

Proyek ini dibangun dengan teknologi modern:

- **Vite** - Build tool yang cepat dan efisien
- **TypeScript** - Type safety untuk JavaScript
- **React 18** - Library UI modern
- **React Router** - Routing untuk aplikasi single-page
- **shadcn/ui** - Komponen UI yang dapat dikustomisasi
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animasi yang halus dan modern
- **React Helmet Async** - Manajemen meta tags untuk SEO

## Fitur

- ✅ Landing page yang responsif dan modern
- ✅ Halaman profil dosen dengan pencarian
- ✅ SEO yang dioptimalkan dengan structured data (JSON-LD)
- ✅ Open Graph dan Twitter Cards untuk social sharing
- ✅ Animasi yang halus dengan Framer Motion
- ✅ Desain mobile-first yang responsif

## Instalasi & Pengembangan

### Prasyarat

- Node.js (versi 18 atau lebih baru)
- npm atau yarn

### Langkah Instalasi

```sh
# 1. Clone repository
git clone <YOUR_GIT_URL>

# 2. Masuk ke direktori proyek
cd <YOUR_PROJECT_NAME>

# 3. Install dependencies
npm install

# 4. Jalankan development server
npm run dev
```

Aplikasi akan berjalan di `http://localhost:8080`

## Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build untuk production
- `npm run preview` - Preview build production
- `npm run lint` - Menjalankan ESLint

## Struktur Proyek

```
src/
├── components/        # Komponen React yang dapat digunakan kembali
│   ├── landing/      # Komponen khusus untuk landing page
│   └── ui/           # Komponen UI dari shadcn/ui
├── pages/            # Halaman aplikasi
├── App.tsx           # Root component dengan routing
└── main.tsx          # Entry point aplikasi
```

## SEO Optimization

Website ini telah dioptimalkan untuk SEO dengan:

- Meta tags yang lengkap dan relevan
- Structured data (JSON-LD) untuk Organization dan Course
- Open Graph tags untuk social media sharing
- Twitter Cards untuk optimasi Twitter
- Canonical URLs untuk menghindari duplicate content
- Robots.txt yang dikonfigurasi dengan baik
- Semantic HTML structure

## Deployment

### Build untuk Production

```sh
npm run build
```

File hasil build akan berada di folder `dist/` yang siap untuk di-deploy ke hosting manapun.

### Rekomendasi Hosting

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

## Lisensi

© 2025 Program Studi Teknik Informatika - Universitas Mataram. All rights reserved.
