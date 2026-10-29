function RingkasanBuku({ total, jumlahKategori }) {
  return (
    <div className="ringkasan">
      <div className="ringkasan-item">
        <strong>{total}</strong>
        <span>Total Buku</span>
      </div>
      <div className="ringkasan-item">
        <strong>{jumlahKategori}</strong>
        <span>Kategori</span>
      </div>
    </div>
  );
}

export default RingkasanBuku;
