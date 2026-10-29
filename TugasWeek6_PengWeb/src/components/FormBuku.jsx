import { useState } from "react";

const kosong = { judul: "", penulis: "", tahun: "", kategori: "Novel" };

function FormBuku({ onTambah }) {
  const [input, setInput] = useState(kosong);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.judul.trim() || !input.penulis.trim() || !input.tahun) return;
    onTambah({ ...input, tahun: Number(input.tahun) });
    setInput(kosong);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tambah Buku</h2>
      <input name="judul" placeholder="Judul buku" value={input.judul} onChange={handleChange} />
      <input name="penulis" placeholder="Penulis" value={input.penulis} onChange={handleChange} />
      <input name="tahun" type="number" placeholder="Tahun terbit" value={input.tahun} onChange={handleChange} />
      <select name="kategori" value={input.kategori} onChange={handleChange}>
        <option>Novel</option>
        <option>Sastra</option>
        <option>Teknologi</option>
        <option>Sejarah</option>
        <option>Pengembangan Diri</option>
      </select>
      <button type="submit">Tambah</button>
    </form>
  );
}

export default FormBuku;
