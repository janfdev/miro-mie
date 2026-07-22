export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  priceNumber: number;
  image: string;
  badge?: string;
}

export interface Testimonial {
  name: string;
  initial: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  role?: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 'mie-yamin',
    name: 'Mie Yamin',
    category: 'Mie',
    description: 'Mie yamin dengan racikan bumbu khas Miro, topping ayam cincang, pangsit renyah, dan sayuran segar. Pilihan rasa manis gurih yang bikin nagih!',
    price: 'Rp 15.000',
    priceNumber: 15000,
    image: '/images/mie-yamin.jpg',
    bestseller: true,
  } as MenuItem & { bestseller: boolean },
  {
    id: 'mie-ayam',
    name: 'Mie Ayam',
    category: 'Mie',
    description: 'Mie ayam dengan potongan ayam berbumbu, sawi hijau, dan kuah kaldu gurih. Porsi besar, harga bersahabat!',
    price: 'Rp 16.000',
    priceNumber: 16000,
    image: '/images/mie-ayam.jpg',
  },
  {
    id: 'baso',
    name: 'Baso',
    category: 'Baso',
    description: 'Baso sapi asli dengan tekstur kenyal dan daging pilihan. Disajikan dengan mie, tahu, dan kuah kaldu sapi yang kaya rasa.',
    price: 'Rp 20.000',
    priceNumber: 20000,
    image: '/images/baso.jpg',
  },
  {
    id: 'es-teler',
    name: 'Es Teler',
    category: 'Minuman',
    description: 'Es teler segar dengan alpukat, kelapa muda, nangka, dan susu kental manis. Penyegar sempurna setelah makan mie!',
    price: 'Rp 15.000',
    priceNumber: 15000,
    image: '/images/es-teler.jpg',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Andi S.',
    initial: 'A',
    avatar: 'https://ui-avatars.com/api/?name=Andi+S&size=96&background=E7E5E4&color=44403C&bold=true&format=svg',
    rating: 5,
    text: 'Mie yaminnya juara! Bumbu khasnya beda dari tempat lain. Sudah langganan sejak 2023. Porsinya pas, harganya juga ramah di kantong.',
    date: '2 minggu lalu',
    role: 'Pelanggan Setia',
  },
  {
    name: 'Rina W.',
    initial: 'R',
    avatar: 'https://ui-avatars.com/api/?name=Rina+W&size=96&background=E7E5E4&color=44403C&bold=true&format=svg',
    rating: 5,
    text: 'Baso sapi di sini beneran daging asli, bukan baso tepung! Kuahnya gurih banget. Wajib coba kalau ke daerah sini.',
    date: '1 bulan lalu',
    role: 'Food Blogger',
  },
  {
    name: 'Budi P.',
    initial: 'B',
    avatar: 'https://ui-avatars.com/api/?name=Budi+P&size=96&background=E7E5E4&color=44403C&bold=true&format=svg',
    rating: 5,
    text: 'Es teler-nya segar banget, porsi buahnya banyak! Cocok buat temen makan siang. Tempatnya juga bersih dan nyaman.',
    date: '3 minggu lalu',
    role: 'Warga Lokal',
  },
  {
    name: 'Sari D.',
    initial: 'S',
    avatar: 'https://ui-avatars.com/api/?name=Sari+D&size=96&background=E7E5E4&color=44403C&bold=true&format=svg',
    rating: 5,
    text: 'Mie ayam favorit keluarga! Anak-anak suka banget. Pelayanannya cepat dan ramah. Recommended!',
    date: '1 minggu lalu',
    role: 'Ibu Rumah Tangga',
  },
];

export const siteConfig = {
  name: 'Mie Yamin Miro',
  tagline: 'Mie Yamin Miro',
  description: 'Nikmati Mie Yamin, Baso, Mie Ayam, dan Es Teler terbaik. Bahan segar setiap hari, racikan bumbu khas, harga ramah di kantong. Buka setiap hari!',
  phone: '6282313338851',
  whatsapp: '6282313338851',
  address: 'Jl. Fatahillah No.40, Watubelah, Kec. Sumber, Kabupaten Cirebon, Jawa Barat 45611',
  hours: 'Setiap Hari: 09.00 — 21.00 WIB',
  year: '2026',
  instagram: '@mieyaminmiro',
  tiktok: '@mieyaminmiro',
  facebook: 'Mie Yamin Miro',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sid!2sid!4v1',
};
