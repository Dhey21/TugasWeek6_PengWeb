function KartuBuku({ judul, penulis, tahun, kategori }) {
  return (
    <div className="kartu">
      <span className="badge">{kategori}</span>
      <h3>{judul}</h3>
      <p>{penulis}</p>
      <small>Terbit {tahun}</small>
    </div>
  );
}

export default KartuBuku;
