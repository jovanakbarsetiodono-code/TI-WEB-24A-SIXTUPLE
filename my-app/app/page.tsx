import Image from "next/image";

export default function Home() {
  return (
    <div className="page">
      <main className="main">

        <h1 className="title">
           Wira Garden Lampung
        </h1>

        <Image
          src="/wira1.jpg"
          alt="Wira Garden"
          width={500}
          height={300}
          className="image"
        />

        <p className="description">
          Wira Garden adalah destinasi wisata alam di Lampung yang menawarkan
          keindahan taman hijau, aliran sungai, dan suasana yang sejuk serta
          nyaman untuk rekreasi keluarga.
        </p>

        <div className="info">

          <div className="card">
            <h2>Harga Tiket</h2>
            <p>Rp 10.000 - Rp 20.000</p>
          </div>

          <div className="card">
            <h2>Jam Buka</h2>
            <p>08.00 - 17.00 WIB</p>
          </div>

          <div className="card">
            <h2>Lokasi</h2>
            <p>Lampung</p>
          </div>

        </div>

      </main>
    </div>
  );
}