// Semua foto berasal dari Wikimedia Commons dengan lisensi bebas (CC BY / CC BY-SA).
// Foto dimuat langsung dari server Wikimedia, jadi butuh koneksi internet.
// Lebar thumbnail yang didukung Wikimedia: 500, 960, 1280, 1920.

const BASE = 'https://thumb.wikimedia.org/wikipedia/commons/thumb'

export const wm = (photo, width = 1280) =>
  `${BASE}/${photo.path}/${photo.file}/${width}px-${photo.file}`

export const commonsPage = (photo) =>
  `https://commons.wikimedia.org/wiki/File:${photo.file}`

export const photos = {
  wayag: {
    path: '7/7f', file: 'Wayag_Island.jpg',
    title: 'Gugusan karst Wayag', place: 'Wayag, Waigeo Barat',
    author: 'Rolandandika', license: 'CC BY-SA 4.0', category: 'lanskap', ratio: 'wide',
  },
  wayagOther: {
    path: '0/01', file: 'The_Other_Side_of_Wayag_Island.jpg',
    title: 'Sisi lain Wayag', place: 'Wayag',
    author: 'Rolandandika', license: 'CC BY-SA 4.0', category: 'lanskap', ratio: 'wide',
  },
  wayagElias: {
    path: '1/1b', file: 'Wayag_Island%2C_Raja_Ampat_%2814467281965%29.jpg',
    title: 'Laguna di antara bukit karst', place: 'Wayag',
    author: 'Elias Levy', license: 'CC BY 2.0', category: 'lanskap', ratio: 'wide',
  },
  piaynemo: {
    path: '5/57', file: 'Piaynemo_Raja_Ampat.jpg',
    title: 'Panorama Piaynemo', place: 'Piaynemo, Misool',
    author: 'Rolandandika', license: 'CC BY-SA 4.0', category: 'lanskap', ratio: 'wide',
  },
  piaynemoBeauty: {
    path: '9/91', file: 'The_Beauty_of_Piaynemo.jpg',
    title: 'Pulau-pulau batu Piaynemo', place: 'Piaynemo',
    author: 'Rolandandika', license: 'CC BY-SA 4.0', category: 'lanskap', ratio: 'wide',
  },
  piaynemoKarst: {
    path: '2/24', file: 'Karst_Landscape_of_Piaynemo_Island.jpg',
    title: 'Lanskap karst dari puncak', place: 'Piaynemo',
    author: 'WhiteducksIG', license: 'CC BY-SA 4.0', category: 'lanskap', ratio: 'tall',
  },
  piaynemoSunrise: {
    path: '6/6a', file: 'Sunrise_Pianemo_Island.Raja_Ampat.jpg',
    title: 'Matahari terbit di Piaynemo', place: 'Piaynemo',
    author: 'James Mamoto', license: 'CC BY-SA 4.0', category: 'lanskap', ratio: 'wide',
  },
  sunrise: {
    path: '4/44', file: 'Sunrise.raja_ampat.jpg',
    title: 'Fajar di "Wayag kecil"', place: 'Piaynemo',
    author: 'James Mamoto', license: 'CC BY-SA 4.0', category: 'lanskap', ratio: 'wide',
  },
  majestic: {
    path: '8/87', file: 'Majestic_Raja_Ampat.jpg',
    title: 'Ribuan pulau, jutaan pesona', place: 'Raja Ampat',
    author: 'Nickoasmara', license: 'CC BY-SA 4.0', category: 'lanskap', ratio: 'tall',
  },
  kabui: {
    path: '4/4f', file: 'Kabui_Bay_-_Gam_Island_view_-_Raja_Ampat.jpg',
    title: 'Teluk Kabui', place: 'Antara Gam & Waigeo',
    author: 'prilfish', license: 'CC BY 2.0', category: 'lanskap', ratio: 'wide',
  },
  overhang: {
    path: '4/44', file: 'Raja_Ampat_-_14162581706.jpg',
    title: 'Perahu di bawah tebing', place: 'Raja Ampat',
    author: 'Max Mossler', license: 'CC BY 2.0', category: 'lanskap', ratio: 'pano',
  },
  pulauSayang: {
    path: '6/6a', file: 'Pantai_Pulau_Sayang_Raja_Ampat.jpg',
    title: 'Pantai Pulau Sayang', place: 'Kepulauan Ayau',
    author: 'Deky Mambraku', license: 'CC BY-SA 4.0', category: 'lanskap', ratio: 'wide',
  },
  pasirPutih: {
    path: 'e/ec', file: 'Pasir_Putih_di_Raja_Ampat.jpg',
    title: 'Pasir putih & air sebening kaca', place: 'Raja Ampat',
    author: 'Hasiholan Siahaan XIV', license: 'CC BY-SA 4.0', category: 'lanskap', ratio: 'wide',
  },
  piaynemoRizal: {
    path: 'a/a7', file: 'Pulau_Piaynemo%2C_Raja_Ampat.jpg',
    title: 'Pulau Piaynemo', place: 'Piaynemo',
    author: 'Rizalubun', license: 'CC BY-SA 4.0', category: 'lanskap', ratio: 'wide',
  },
  softCoral: {
    path: 'e/e8', file: 'Soft_corals_between_Gam_and_Waigeo%2C_Raja_Ampat.jpg',
    title: 'Karang lunak di selat Gam–Waigeo', place: 'The Passage',
    author: 'Fabian Lambeck', license: 'CC BY-SA 4.0', category: 'bawah-laut', ratio: 'wide',
  },
  anemone: {
    path: 'c/cc', file: 'Anemonefish_in_Raja_Ampat%2C_Papua%3B_December_2016.jpg',
    title: 'Ikan badut di anemon', place: 'Raja Ampat',
    author: 'prilfish', license: 'CC BY 2.0', category: 'bawah-laut', ratio: 'wide',
  },
  manta: {
    path: '5/51', file: 'Manta_birostris_Raja_Ampat.JPG',
    title: 'Pari manta raksasa', place: 'Raja Ampat',
    author: 'Manuae', license: 'CC BY-SA 4.0', category: 'satwa', ratio: 'wide',
  },
  diver: {
    path: '6/6b', file: 'A_diver_in_Raja_Ampat_seascape.jpg',
    title: 'Penyelam di taman karang', place: 'Raja Ampat',
    author: 'Fakhrizal Setiawan', license: 'CC BY-SA 4.0', category: 'bawah-laut', ratio: 'wide',
  },
  coral: {
    path: 'd/d3', file: 'Coral_in_Raja_Ampat.jpg',
    title: 'Bawah dermaga Arborek', place: 'Arborek',
    author: 'Akbar raf', license: 'CC BY-SA 4.0', category: 'bawah-laut', ratio: 'wide',
  },
  sharks: {
    path: 'f/fd', file: 'Sharks_in_The_Shore.jpg',
    title: 'Hiu karang di air dangkal', place: 'Raja Ampat',
    author: 'Rolandandika', license: 'CC BY-SA 4.0', category: 'satwa', ratio: 'tall',
  },
  wilson: {
    path: 'd/df', file: 'Wilson%27s_bird-of-paradise_on_Waigeo%2C_Raja_Ampat.jpg',
    title: 'Cenderawasih botak (Wilson)', place: 'Waigeo',
    author: 'Fabian Lambeck', license: 'CC BY-SA 4.0', category: 'satwa', ratio: 'wide',
  },
  redBop: {
    path: '7/71', file: 'Red_Bird_of_Paradise_2.jpg',
    title: 'Cenderawasih merah', place: 'Endemik Waigeo, Gam & Batanta',
    author: 'Peter Tan', license: 'CC BY-SA 2.0', category: 'satwa', ratio: 'tall',
  },
  arborek: {
    path: 'a/a5', file: 'Arborek_island.jpg',
    title: 'Gerbang sambutan Kampung Arborek', place: 'Arborek',
    author: 'Anazlombu', license: 'CC BY-SA 4.0', category: 'kehidupan', ratio: 'wide',
  },
  arborekHut: {
    path: 'e/e5', file: 'Kampung_Arborek.jpg',
    title: 'Pondok kayu di Arborek', place: 'Arborek',
    author: 'Anazlombu', license: 'CC BY-SA 4.0', category: 'kehidupan', ratio: 'wide',
  },
  misoolChild: {
    path: 'c/cc', file: 'Misool-Raja_Ampat.jpg',
    title: 'Sore di Kampung Limalas', place: 'Misool',
    author: 'Nugroho Arif Prabowo', license: 'CC BY-SA 4.0', category: 'kehidupan', ratio: 'wide',
  },
  rockArt: {
    path: 'f/fc', file: 'Rockpainting_di_Misool%2C_Raja_Ampat.jpg',
    title: 'Lukisan tebing prasejarah', place: 'Misool',
    author: 'Nugroho Arif Prabowo', license: 'CC BY-SA 4.0', category: 'kehidupan', ratio: 'wide',
  },
  fishermen: {
    path: 'a/a5', file: 'Waigeo_fishermen.jpg',
    title: 'Perahu nelayan & hutan bakau', place: 'Waigeo',
    author: 'Lord Mountbatten', license: 'CC BY-SA 4.0', category: 'kehidupan', ratio: 'wide',
  },
  sawinggraiBoat: {
    path: '7/72', file: 'Boat_used_by_locals_in_Sawinggrai_Village%27s_beach%2C_Raja_Ampat.jpg',
    title: 'Perahu warga di Sawinggrai', place: 'Sawinggrai',
    author: 'Brizinsky T Juneanto', license: 'CC BY-SA 4.0', category: 'kehidupan', ratio: 'wide',
  },
  sawinggrai: {
    path: 'f/f0', file: 'Sawinggrai%2C_Meos_Mansar%2C_Raja_Ampat_Regency%2C_West_Papua%2C_Indonesia_-_panoramio_%281%29.jpg',
    title: 'Kampung Sawinggrai', place: 'Meos Mansar',
    author: 'Buena Ventura', license: 'CC BY 3.0', category: 'kehidupan', ratio: 'wide',
  },
  friwen: {
    path: 'd/d6', file: 'Village_of_Friwen.jpg',
    title: 'Papan sambutan Kampung Friwen', place: 'Friwen',
    author: 'Siharaditia', license: 'CC BY-SA 4.0', category: 'kehidupan', ratio: 'wide',
  },
}

// Urutan foto di galeri
export const galleryOrder = [
  'wayag', 'softCoral', 'piaynemoKarst', 'manta', 'piaynemoSunrise', 'wilson',
  'overhang', 'anemone', 'arborek', 'majestic', 'wayagOther', 'diver',
  'pulauSayang', 'redBop', 'misoolChild', 'kabui', 'coral', 'sharks',
  'piaynemoBeauty', 'fishermen', 'wayagElias', 'rockArt', 'pasirPutih',
  'sawinggrai', 'sunrise', 'arborekHut', 'friwen', 'piaynemoRizal', 'sawinggraiBoat',
]

export const galleryFilters = [
  { id: 'semua', label: 'Semua' },
  { id: 'lanskap', label: 'Lanskap & Pulau' },
  { id: 'bawah-laut', label: 'Bawah Laut' },
  { id: 'satwa', label: 'Satwa' },
  { id: 'kehidupan', label: 'Kampung & Budaya' },
]
