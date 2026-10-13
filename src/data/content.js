import pasirTimbulImg from '../assets/pasir-timbul.jpg'

export const stats = [
  { value: '600+', label: 'pulau, gosong & atol' },
  { value: '±75%', label: 'jenis karang keras dunia ada di sini' },
  { value: '1.400+', label: 'spesies ikan karang' },
  { value: '4', label: 'pulau besar: Waigeo, Batanta, Salawati, Misool' },
]

export const destinations = [
  {
    id: 'wayag',
    name: 'Wayag',
    area: 'Waigeo Barat · ± 4 jam speedboat dari Waisai',
    photo: 'wayag',
    tag: 'Ikon Raja Ampat',
    summary:
      'Bukit-bukit karst hijau menyembul dari laguna biru toska. Pemandangan dari puncak Wayag adalah wajah Raja Ampat yang paling sering kamu lihat di kartu pos.',
    highlights: ['Mendaki bukit karst', 'Laguna tenang', 'Hiu karang bayi di perairan dangkal'],
  },
  {
    id: 'piaynemo',
    name: 'Piaynemo',
    area: 'Kepulauan Fam · ± 2 jam dari Waisai',
    photo: 'piaynemo',
    tag: '"Wayag kecil"',
    summary:
      'Tangga kayu sekitar 300-an anak tangga membawamu ke gardu pandang dengan panorama gugusan pulau karst berbentuk bintang. Lebih mudah dijangkau daripada Wayag.',
    highlights: ['Gardu pandang', 'Matahari terbit', 'Termasuk geosite Geopark Raja Ampat'],
  },
  {
    id: 'arborek',
    name: 'Kampung Arborek',
    area: 'Distrik Meos Mansar · ± 1 jam dari Waisai',
    photo: 'arborek',
    tag: 'Desa wisata',
    summary:
      'Kampung mungil berpasir putih yang dikelola warganya sendiri. Di bawah dermaganya, ikan-ikan berkerumun di antara karang; di dekatnya ada titik selam terkenal tempat pari manta datang dibersihkan.',
    highlights: ['Snorkeling di dermaga', 'Kerajinan anyaman pandan', 'Homestay warga'],
  },
  {
    id: 'misool',
    name: 'Misool',
    area: 'Raja Ampat Selatan · ± 4–5 jam dari Waisai',
    photo: 'rockArt',
    tag: 'Sejarah & karst',
    summary:
      'Pulau-pulau batu kapur dengan gua, laguna tersembunyi, dan lukisan tebing prasejarah berwarna oker—cap tangan, ikan, dan figur yang ditinggalkan manusia ribuan tahun lalu.',
    highlights: ['Lukisan tebing kuno', 'Danau ubur-ubur', 'Kawasan konservasi laut'],
  },
  {
    id: 'kabui',
    name: 'Teluk Kabui & The Passage',
    area: 'Antara Pulau Gam dan Waigeo',
    photo: 'kabui',
    tag: 'Tempat legenda bermula',
    summary:
      'Teluk berhias pulau-pulau jamur karst ini dipercaya sebagai tempat asal tujuh telur dalam legenda Raja Ampat. Selat sempitnya, The Passage, dipenuhi karang lunak warna-warni.',
    highlights: ['Kayak di antara pulau jamur', 'Karang lunak', 'Arus yang kaya nutrisi'],
  },
  {
    id: 'pasir-timbul',
    name: 'Pasir Timbul',
    area: 'Dekat Pulau Mansuar · 30–60 menit dari Waisai',
    photo: null,
    image: pasirTimbulImg,
    tag: 'Pulau yang datang & pergi',
    summary:
      'Hamparan pasir putih sepanjang ± 150 meter yang hanya muncul ketika air laut surut. Berjalan bertelanjang kaki di "pulau" di tengah laut—sebelum ia tenggelam lagi.',
    highlights: ['Hanya muncul saat surut', 'Laut tenang & dangkal', 'Foto dari drone'],
    article: true,
  },
]

// Artikel lama "Pasir Timbul" — dirapikan dari file asli (oleh Kevin Aprilio)
export const pasirTimbulArticle = {
  author: 'Kevin Aprilio',
  sections: [
    {
      h: 'Bagian dari fenomena alam',
      p: 'Pasir Timbul adalah hamparan daratan yang hanya muncul ketika air laut sedang surut. Dari kejauhan tampak seolah ada pulau kecil yang tiba-tiba lahir di tengah laut. Ditambah air yang jernih dan bersih, fenomena ini terasa seperti keajaiban.',
    },
    {
      h: 'Hamparan pasir lembut',
      p: 'Saat surut, terbentang pasir putih yang lembut sepanjang sekitar 150 meter. Kamu bisa berjalan tanpa alas kaki, bermain pasir, mengumpulkan cangkang kerang, berenang, dan tentu saja memenuhi galeri dengan foto.',
    },
    {
      h: 'Lautnya tenang',
      p: 'Ketika daratan ini muncul, laut di sekitarnya biasanya tenang dengan ombak kecil. Ikan-ikan kecil warna-warni sesekali terlihat berenang mengitari tepinya. Tetap awasi anak-anak dan ikuti arahan pemandu perahu.',
    },
    {
      h: 'Datang di waktu yang tepat',
      p: 'Pasir Timbul hanya terlihat ketika air surut dan bisa kembali tertutup dalam waktu singkat. Jadwal surut berubah setiap hari, jadi tanyakan tabel pasang-surut kepada pemandu atau pemilik homestay sebelum berangkat.',
    },
    {
      h: 'Lokasi & perjalanan',
      p: 'Pasir Timbul berada di sekitar Pulau Mansuar, Distrik Meos Mansar. Dari Waisai, perjalanan dengan speedboat sekitar 30 menit sampai satu jam, tergantung cuaca dan jenis perahu. Di sekitarnya ada Pulau Kri dan Mansuar dengan banyak resor dan homestay.',
    },
    {
      h: 'Tips berkunjung',
      p: 'Jaga kondisi fisik karena perjalanan panjang dan berganti kendaraan; bawa obat anti mabuk laut bila perlu. Bawa kamera (drone membuat hamparan pasir terlihat paling dramatis dari atas), dan bawa kantong untuk membawa pulang sampahmu sendiri. Untuk berhemat, gunakan paket trip bersama yang membagi biaya sewa speedboat.',
    },
  ],
}

export const marineLife = [
  {
    name: 'Pari manta',
    detail: 'Manta karang dan manta oseanik datang ke "stasiun pembersihan" seperti Manta Sandy dekat Arborek, tempat ikan kecil membersihkan tubuh mereka.',
  },
  {
    name: 'Hiu berjalan',
    detail: 'Hiu bambu Raja Ampat (Hemiscyllium freycineti) "berjalan" di dasar karang memakai siripnya—hanya hidup di perairan sekitar sini.',
  },
  {
    name: 'Wobbegong',
    detail: 'Hiu karpet berumbai yang menyamar sempurna di bawah karang meja, menunggu mangsa lewat.',
  },
  {
    name: 'Kuda laut kerdil',
    detail: 'Seukuran kuku jari, bersembunyi di kipas laut gorgonian. Butuh mata jeli pemandu untuk menemukannya.',
  },
  {
    name: 'Penyu',
    detail: 'Penyu belimbing, lekang, dan sisik bertelur di pantai-pantai yang sarangnya dijaga warga kampung.',
  },
  {
    name: 'Cenderawasih',
    detail: 'Di darat, cenderawasih merah dan cenderawasih botak (Wilson) menari di hutan Waigeo, Gam, dan Batanta—keduanya endemik di sini.',
  },
]

export const legendChapters = [
  {
    title: 'Tujuh butir telur',
    text: 'Dahulu kala, sepasang suami-istri menyusuri tepi Sungai Waikeo di Teluk Kabui. Di antara bebatuan, mereka menemukan tujuh butir telur yang tidak biasa, lalu membawanya pulang dan menjaganya baik-baik.',
  },
  {
    title: 'Empat raja',
    text: 'Empat telur menetas menjadi anak laki-laki yang kelak menjadi raja. Masing-masing memerintah satu pulau besar: Waigeo, Salawati, Misool, dan Batanta. Dari sinilah nama "Raja Ampat"—empat raja—berasal.',
  },
  {
    title: 'Putri, batu, dan roh',
    text: 'Telur kelima menetas menjadi seorang putri. Telur keenam berubah menjadi batu, dan telur ketujuh menjadi makhluk gaib. Batu itu sampai kini dikeramatkan di sebuah situs di tepi sungai di Waigeo Selatan dan dihormati masyarakat.',
  },
  {
    title: 'Jejak sejarah',
    text: 'Legenda ini hidup berdampingan dengan sejarah: sejak abad ke-15 dan 16, wilayah ini terhubung dengan kesultanan Bacan dan Tidore di Maluku. Gelar-gelar raja di Waigeo, Salawati, Misool, dan Batanta dikenal dalam hubungan itu—sebelum Raja Ampat menjadi bagian Hindia Belanda dan kemudian Indonesia.',
  },
]

export const cultureItems = [
  {
    title: 'Sasi: hukum adat menjaga laut',
    photo: 'fishermen',
    text: 'Sasi adalah larangan adat untuk memanen hasil laut tertentu—misalnya lola, teripang, atau lobster—di area dan waktu yang disepakati. Saat sasi "ditutup", laut dibiarkan pulih; saat "dibuka", warga memanen bersama. Upacaranya kerap melibatkan tokoh adat, gereja, atau masjid. Di beberapa kampung di Misool, kelompok perempuan bahkan mengelola sasi mereka sendiri.',
  },
  {
    title: 'Suling Tambur & Tari Wor',
    photo: 'arborek',
    text: 'Tamu yang datang ke kampung sering disambut alunan Suling Tambur—orkes suling bambu dan tambur yang dibawa dari tradisi Biak—serta nyanyian dan tarian penyambutan. Tari Wor, warisan budaya Biak, menuturkan syukur dan doa lewat lagu dan gerak bersama.',
  },
  {
    title: 'Kerajinan & kampung wisata',
    photo: 'arborekHut',
    text: 'Di Arborek, Sawinggrai, dan Friwen, warga membuka homestay, memandu snorkeling, dan menganyam topi, tas, serta hiasan dari daun pandan. Membeli langsung dari pengrajin dan menginap di homestay lokal berarti uangmu berputar di kampung.',
  },
  {
    title: 'Hidup rukun dalam keberagaman',
    photo: 'misoolChild',
    text: 'Masyarakat Raja Ampat terdiri dari suku Ma\'ya sebagai penduduk asli, serta Biak, Matbat, Moi, dan pendatang dari Maluku dan daerah lain. Kristen dan Islam hidup berdampingan—tak jarang dalam satu keluarga. Saat bertamu, membawa pinang adalah tanda hormat yang hangat.',
  },
  {
    title: 'Lukisan tebing Misool',
    photo: 'rockArt',
    text: 'Di tebing-tebing karst Misool terdapat lukisan berwarna oker: cap tangan, ikan, hewan, dan figur manusia. Diperkirakan berusia ribuan tahun, lukisan ini menjadi bukti bahwa manusia sudah lama hidup akrab dengan laut di sini.',
  },
  {
    title: 'Bahasa-bahasa kepulauan',
    photo: 'sawinggrai',
    text: 'Bahasa Ma\'ya termasuk sedikit bahasa di Indonesia yang memiliki nada (tonal), seperti bahasa Mandarin. Di kepulauan ini juga dituturkan bahasa Biak, Matbat, dan lainnya—dengan bahasa Melayu Papua sebagai bahasa pergaulan.',
  },
]

export const travelInfo = [
  {
    icon: 'plane',
    title: 'Cara ke sana',
    items: [
      'Terbang ke Bandara Domine Eduard Osok, Sorong (SOQ)—biasanya transit di Makassar, Manado, atau Ambon.',
      'Dari Pelabuhan Sorong, naik kapal cepat ke Waisai (ibu kota Raja Ampat) sekitar 2 jam.',
      'Dari Waisai, lanjut speedboat sewaan atau ikut trip ke pulau tujuan. Alternatif: kapal pinisi liveaboard.',
    ],
  },
  {
    icon: 'sun',
    title: 'Waktu terbaik',
    items: [
      'Oktober–April: laut umumnya lebih tenang, cocok untuk menyelam dan ke pulau jauh seperti Wayag.',
      'Juni–September: angin selatan membuat ombak lebih tinggi, terutama di selatan (Misool).',
      'Cuaca tropis bisa berubah cepat—selalu ikuti saran kapten perahu.',
    ],
  },
  {
    icon: 'ticket',
    title: 'Izin masuk',
    items: [
      'Setiap pengunjung wajib membeli Kartu Jasa Lingkungan (sering disebut "PIN") untuk konservasi.',
      'Bisa dibeli di Sorong atau Waisai. Tarif berbeda untuk wisatawan domestik dan mancanegara.',
      'Tarif dapat berubah—cek informasi terbaru di loket resmi atau situs Dinas Pariwisata Raja Ampat.',
    ],
  },
  {
    icon: 'wallet',
    title: 'Biaya & penginapan',
    items: [
      'Pengeluaran terbesar adalah sewa speedboat; ikut open trip untuk berbagi biaya.',
      'Pilihan menginap: homestay milik warga, resor, hingga kapal liveaboard.',
      'Bawa uang tunai secukupnya—ATM hanya ada di Waisai dan Sorong, sinyal terbatas di pulau.',
    ],
  },
]

export const ecoTips = [
  'Jangan menginjak atau menyentuh karang—pakai sabuk/rompi apung bila belum mahir berenang.',
  'Gunakan tabir surya ramah terumbu (reef-safe) atau baju renang lengan panjang.',
  'Bawa botol minum isi ulang dan bawa pulang sampahmu sendiri.',
  'Jangan memberi makan ikan atau mengambil kerang, karang, dan pasir sebagai oleh-oleh.',
  'Minta izin sebelum memotret warga, dan hormati aturan sasi di setiap kampung.',
]
