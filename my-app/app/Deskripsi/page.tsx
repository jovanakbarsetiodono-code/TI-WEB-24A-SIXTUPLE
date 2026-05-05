import Image from "next/image";

export default function Page() {
  return (
    <div className="page">
      <main className="main">
        <h1 className="title">Deskripsi Wira Garden</h1>

        <Image
          src="/wira2.jpg"
          alt="Wira Garden"
          width={500}
          height={300}
          className="image"
        />

        <p className="description">
          Wira Garden merupakan destinasi wisata alam yang terletak di Bandar
          Lampung. Tempat ini dikenal dengan suasana yang sejuk, pepohonan
          hijau, serta aliran sungai yang jernih sehingga cocok untuk melepas
          penat dari aktivitas sehari-hari.
        </p>

        <h2 className="subtitle">Keunggulan</h2>

        <ul className="list">
          <li>Lingkungan masih alami dan sejuk</li>
          <li>Cocok untuk rekreasi keluarga</li>
          <li>Banyak spot foto menarik</li>
        </ul>
      </main>
    </div>
  );
}