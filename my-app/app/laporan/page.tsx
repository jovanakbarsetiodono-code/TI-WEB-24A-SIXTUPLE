"use client";

import styles from "./laporan.module.css";

export default function LaporanPage() {
return ( <div className={styles.container}> <h1 className={styles.title}>Laporan Wisata Wira Garden</h1>

  <p className={styles.description}>
    Halaman laporan pemesanan wisata Wira Garden.
  </p>

  <div className={styles.reportCard}>
    <div className={styles.item}>
      <span>Total Pemesanan</span>
      <strong>-</strong>
    </div>

    <div className={styles.item}>
      <span>Total Tiket Terjual</span>
      <strong>-</strong>
    </div>

    <div className={styles.item}>
      <span>Total Pendapatan</span>
      <strong>-</strong>
    </div>
  </div>
</div>

);
}
