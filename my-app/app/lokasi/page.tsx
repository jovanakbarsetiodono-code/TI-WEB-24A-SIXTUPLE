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
              <p>💰 Harga Tiket Camping 35.000</p>
              <p>🕒 08.00 - 17.00 WIB</p>
              <p>💰 Harga Tiket Dewasa 20.000</p>
              <p>📍 Batu Putu, Bandar Lampung</p>
              <p>💰 Harga Tiket Anak-anak 10.000</p>
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

            <h2 className={styles["subtitle"]}>Fasilitas</h2>

            <ul className={styles.list}>
              <li>🅿️ Area Parkir</li>
              <li>🪑 Tempat Istirahat</li>
              <li>📸 Spot Foto</li>
              <li>🚻 Toilet Umum</li>
              <li>🏕️ Area Camping</li>
              <li>🍽️ Warung Makan atau Kantin</li>
            </ul>

            <section className={styles.recommendation}>
              <h2 className={styles["subtitle"]}>Rekomendasi Aktivitas</h2>

              <ul className={styles.recommendationList}>
                <li>📸 Berfoto di spot alam yang instagramable</li>
                <li>🏕️ Camping bersama keluarga atau teman</li>
                <li>🧺 Piknik di area terbuka</li>
                <li>🌿 Menikmati suasana alam yang sejuk</li>
                <li>🚶 Berjalan santai mengelilingi area wisata</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
