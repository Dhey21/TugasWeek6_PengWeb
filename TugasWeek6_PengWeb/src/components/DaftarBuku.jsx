import KartuBuku from "./KartuBuku";

function DaftarBuku({ daftarBuku }) {
  if (daftarBuku.length === 0) {
    return <p className="kosong">Belum ada data buku</p>;
  }

  return (
    <div className="daftar">
      {daftarBuku.map((buku) => (
        <KartuBuku
          key={buku.id}
          judul={buku.judul}
          penulis={buku.penulis}
          tahun={buku.tahun}
          kategori={buku.kategori}
        />
      ))}
    </div>
  );
}

export default DaftarBuku;
