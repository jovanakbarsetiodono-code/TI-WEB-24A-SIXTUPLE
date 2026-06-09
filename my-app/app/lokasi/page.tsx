import styles from "./lokasi.module.css";

export default function Lokasi() {
  return (
    <div className={styles["lokasi-page"]}>
      <div className={styles["lokasi-container"]}>
        <h1 className={styles["lokasi-title"]}>Lokasi Wira Garden</h1>

        <h4 className={styles["lokasi-description"]}>
          Wira Garden terletak di Batu Putu, Kecamatan Teluk Betung Utara, Kota
          Bandar Lampung, Provinsi Lampung.
        </h4>

        <div className={styles["lokasi-wrapper"]}>
          <iframe
            src="https://www.google.com/maps?q=wira%20garden%20lampung&output=embed"
            className={styles["lokasi-map"]}
          />

          <div className={styles["lokasi-info"]}>
            <h2 className={styles["subtitle"]}>Informasi Lokasi</h2>

            <div className={styles["lokasi-info-grid"]}>
              <p>📍 Batu Putu, Bandar Lampung</p>
              <p>🕒 08.00 - 17.00 WIB</p>
              <p>💰 Rp10.000 - Rp20.000</p>
              <p>🚗 Motor & Mobil</p>
            </div>
            <h2 className={styles["subtitle"]}>Deskripsi</h2>

            <p className={styles["deskripsi"]}>
              Wira Garden merupakan salah satu destinasi wisata alam di Bandar
              Lampung yang menawarkan suasana sejuk dengan pepohonan hijau,
              aliran sungai yang jernih, serta berbagai spot foto menarik.
              Tempat ini cocok untuk rekreasi bersama keluarga, teman, maupun
              pasangan yang ingin menikmati keindahan alam dan ketenangan jauh
              dari hiruk pikuk perkotaan.
            </p>

            <p>Fasilitas:</p>

            <ul className={styles["list"]}>
              <li>- Area parkir</li>
              <li>- Tempat istirahat</li>
              <li>- Spot foto</li>
              <li>- Toilet umum</li>
            </ul>

            <p>Rekomendasi: Pagi atau sore hari</p>
          </div>
        </div>
      </div>
    </div>
  );
}
