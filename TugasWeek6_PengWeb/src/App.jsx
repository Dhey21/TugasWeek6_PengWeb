import { useState } from "react";
import Header from "./components/Header";
import RingkasanBuku from "./components/RingkasanBuku";
import FormBuku from "./components/FormBuku";
import DaftarBuku from "./components/DaftarBuku";
import "./App.css";

const dataAwal = [
  { id: 1, judul: "Laskar Pelangi", penulis: "Andrea Hirata", tahun: 2005, kategori: "Novel" },
  { id: 2, judul: "Bumi Manusia", penulis: "Pramoedya Ananta Toer", tahun: 1980, kategori: "Sastra" },
  { id: 3, judul: "Clean Code", penulis: "Robert C. Martin", tahun: 2008, kategori: "Teknologi" },
  { id: 4, judul: "Sapiens", penulis: "Yuval Noah Harari", tahun: 2011, kategori: "Sejarah" },
];

function App() {
  const [daftarBuku, setDaftarBuku] = useState(dataAwal);

  const tambahBuku = (bukuBaru) => {
    setDaftarBuku([...daftarBuku, { id: Date.now(), ...bukuBaru }]);
  };

  const jumlahKategori = new Set(daftarBuku.map((b) => b.kategori)).size;

  return (
    <div className="container">
      <Header judul="Pustaka Mini" subjudul="Katalog buku perpustakaan mini" />
      <RingkasanBuku total={daftarBuku.length} jumlahKategori={jumlahKategori} />
      <FormBuku onTambah={tambahBuku} />
      <DaftarBuku daftarBuku={daftarBuku} />
    </div>
  );
}

export default App;