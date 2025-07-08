# Quotes Generator - Next.js

Aplikasi sederhana untuk menampilkan dan generate kutipan (quotes) secara acak menggunakan Next.js.

## Fitur

- Menampilkan kutipan random dari API eksternal
- Tombol untuk generate kutipan baru
- Loading state saat mengambil data
- Tampilan responsif dan rapi dengan CSS Module


## Struktur Folder

```
quotes-generator/
├── components/
│   └── QuoteBox.js
├── pages/
│   └── index.js
├── styles/
│   └── Home.module.css
├── package.json
└── jsconfig.json
```

## Penjelasan File

- **pages/index.js**  
  Halaman utama aplikasi, menampilkan judul dan komponen QuoteBox.

- **components/QuoteBox.js**  
  Komponen utama untuk mengambil dan menampilkan kutipan random.

- **styles/Home.module.css**  
  CSS Module untuk styling halaman dan komponen.

- **jsconfig.json**  
  Konfigurasi alias path agar import lebih mudah.

- **javascript_don**  
 folder berisi file index.html dan script.js yang merupakan auto generator berbasis JavaScript DOM tanpa library/framework tambahan.


## Instalasi Berbasis Javascript DOM tanpa framework

1. **Clone repository ini**  
   ```bash
   git clone repo
   cd quotes-generator
   cd javascript_dom
   ```


2. **Jalankan aplikasi**  
   ```bash
   start index.html
   ```
   Maka akan terbuka browser ke [http://127.0.0.1:5500/javascript_dom/](http://127.0.0.1:5500/javascript_dom/)



## Instalasi Berbasis Next.JS

1. **Clone repository ini**  
   ```bash
   git clone repo
   cd quotes-generator
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Jalankan aplikasi**  
   ```bash
   npm run dev
   ```
   Buka browser ke [http://localhost:3000](http://localhost:3000)
   
## API

Menggunakan endpoint:  
[https://dummyjson.com/docs/quotes]
