import Image from "next/image";
import styles from "./deskripsi.module.css";

export default function Page() {
  return (
    <div className={styles["deskripsi-page"]}>
      <main className={styles["deskripsi-main"]}>
        <h1 className={styles["deskripsi-title"]}>Deskripsi Wira Garden</h1>

        <p className={styles["deskripsi-text"]}>
          Wira Garden merupakan tempat wisata alam di Bandar Lampung yang
          menawarkan suasana sejuk, pemandangan sungai, serta area bersantai
          yang nyaman untuk pengunjung.
        </p>

        <div className={styles["deskripsi-image-row"]}>
          <Image
            src="/wira4.jpg"
            alt="Wira Garden"
            width={400}
            height={250}
            className={styles["deskripsi-image"]}
          />

          <Image
            src="/wira5.jpg"
            alt="Wira Garden"
            width={400}
            height={250}
            className={styles["deskripsi-image"]}
          />
        </div>

        <p className={styles["deskripsi-description"]}>
          Wira Garden merupakan destinasi wisata alam yang terletak di Bandar
          Lampung. Tempat ini dikenal dengan suasana yang sejuk, pepohonan
          hijau, serta aliran sungai yang jernih sehingga cocok untuk melepas
          penat dari aktivitas sehari-hari.
        </p>
        <p className={styles["deskripsi-description"]}>
          Wira Garden menawarkan keindahan alam yang masih terjaga dengan aliran
          sungai yang jernih, pepohonan yang rindang, dan udara yang segar.
          Tempat ini menjadi pilihan ideal bagi wisatawan yang ingin menikmati
          wisata alam di Bandar Lampung.
        </p>

        <h2 className={styles["deskripsi-subtitle"]}>Keunggulan</h2>

        <ul className={styles["deskripsi-list"]}>
          <li>Memiliki lingkungan yang masih alami dan sejuk.</li>
          <li>Cocok dijadikan tempat rekreasi bersama keluarga.</li>
          <li>Menyediakan banyak spot foto yang menarik.</li>
          <li>Menyediakan fasilitas yang memadai untuk pengunjung.</li>
          <li>Memiliki harga yang terjangkau.</li>
        </ul>
      </main>
    </div>
  );
}
