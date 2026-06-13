"use client";

import { useEffect, useState } from "react";
import styles from "./laporan.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";


type Pemesanan = {
  id: number;
  nama_pemesan: string;
  no_hp: string;
  jenis_tiket: string;
  jumlah_tiket: number;
  tanggal_kunjungan: string;
  total_harga: number;
};

export default function LaporanPage() {
  const [dataPemesanan, setDataPemesanan] = useState<Pemesanan[]>([]);
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    router.push("/login-admin");
  };

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");

    if (!isAdmin) {
      router.push("/login-admin");
    }
  }, [router]);

  useEffect(() => {
    fetch("/api/pemesanan")
      .then((res) => res.json())
      .then((data) => setDataPemesanan(data));
  }, []);

  const totalPemesanan = dataPemesanan.length;

  const totalTiket = dataPemesanan.reduce(
    (total, item) => total + item.jumlah_tiket,
    0,
  );

  const totalPendapatan = dataPemesanan.reduce(
    (total, item) => total + item.total_harga,
    0,
  );

  return (
    <div className={styles.adminLayout}>
      <aside className={styles.sidebar}>
        <h2>Wira Garden</h2>

        <ul>
          <li>
            <Link href="/admin">Dashboard</Link>
          </li>

          <li className={styles.activeMenu}>
            <Link href="/laporan">Laporan</Link>
          </li>
        </ul>

        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </aside>

      <main className={styles.container}>
        <h1 className={styles.title}>Laporan Wisata Wira Garden</h1>

        <p className={styles.description}>
          Ringkasan data pemesanan wisata Wira Garden.
        </p>

        <div className={styles.reportCard}>
          <div className={styles.item}>
            <span>Total Pemesanan</span>
            <strong>{totalPemesanan}</strong>
          </div>

          <div className={styles.item}>
            <span>Total Tiket Terjual</span>
            <strong>{totalTiket}</strong>
          </div>

          <div className={styles.item}>
            <span>Hari Teramai</span>
            <strong>Minggu</strong>
          </div>

          <div className={styles.item}>
            <span>Total Pendapatan</span>
            <strong>Rp {totalPendapatan.toLocaleString("id-ID")}</strong>
          </div>
        </div>

        <div className={styles.summary}>
          <h2>Kesimpulan</h2>

          <p>
            Laporan ini menampilkan ringkasan data pemesanan tiket wisata Wira
            Garden berdasarkan data yang tersimpan pada sistem.
          </p>
        </div>
      </main>
    </div>
  );
}
