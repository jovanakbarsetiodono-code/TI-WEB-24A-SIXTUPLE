import Image from "next/image";
import HeroSection from "../components/herosection";

export default function Home() {
  return (
    <div className="home-page">
      <main className="home-main">
        <HeroSection />

        <div className="home-image-row">
          <Image
            src="/wira3.jpg"
            alt="Wira Garden"
            width={400}
            height={250}
            className="home-image"
          />

          <Image
            src="/wiragarden.jpg"
            alt="Wira Garden 2"
            width={400}
            height={250}
            className="home-image"
          />
        </div>

        <p className="home-description">
          Wira Garden adalah destinasi wisata alam di Lampung yang menawarkan
          keindahan taman hijau, aliran sungai, dan suasana yang sejuk serta
          nyaman untuk rekreasi keluarga.Dengan suasana yang masih alami, Wira
          Garden menjadi pilihan tepat untuk melepas penat dari aktivitas
          sehari-hari.asa
        </p>

        <div className="home-button-wrapper">
          <a href="/lokasi" className="home-button">
            Lihat Selengkapnya
          </a>

          <a href="/ticket" className="home-button">
            Pesan Tiket
          </a>
        </div>

        <div className="home-info">
          <div className="home-card">
            <h2>Harga Tiket</h2>
            <p>Rp 10.000 - Rp 20.000</p>
          </div>

          <div className="home-card">
            <h2>Jam Buka</h2>
            <p>08.00 - 17.00 WIB</p>
          </div>

          <div className="home-card">
            <h2>Lokasi</h2>
            <p>Lampung</p>
          </div>
        </div>
      </main>
    </div>
  );
}
