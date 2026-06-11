"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./admin.module.css";

type Pemesanan = {
  id: number;
  nama_pemesan: string;
  no_hp: string;
  jenis_tiket: string;
  jumlah_tiket: number;
  tanggal_kunjungan: string;
  total_harga: number;
};

export default function AdminPage() {
  const [dataPemesanan, setDataPemesanan] = useState<Pemesanan[]>([]);
  const totalPemesanan = dataPemesanan.length;
  const [search, setSearch] = useState("");
  const [selectedData, setSelectedData] = useState<Pemesanan | null>(null);
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

  const totalTiket = dataPemesanan.reduce(
    (total, item) => total + item.jumlah_tiket,
    0,
  );

  const totalPendapatan = dataPemesanan.reduce(
    (total, item) => total + item.total_harga,
    0,
  );

  useEffect(() => {
    fetch("/api/pemesanan")
      .then((res) => res.json())
      .then((data) => setDataPemesanan(data));
  }, []);
  const handleDelete = async (id: number) => {
    const konfirmasi = confirm("Yakin ingin menghapus data ini?");

    if (!konfirmasi) return;

    const response = await fetch(`/api/pemesanan/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setDataPemesanan(dataPemesanan.filter((item) => item.id !== id));
    }
  };
  const filteredData = dataPemesanan.filter((item) =>
    item.nama_pemesan.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className={styles.adminLayout}>
      <aside className={styles.sidebar}>
        <h2>Wira Garden</h2>

        <ul>
          <li>Dashboard</li>
          <li>Pemesanan</li>
          <li>Laporan</li>
        </ul>

        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </aside>

      <main className={styles.container}>
        <h1 className={styles.title}>Dashboard Admin Wira Garden</h1>

        <p className={styles.description}>
          Kelola data pemesanan wisata Wira Garden
        </p>

        <div className={styles.statsContainer}>
          <div className={styles.statCard}>
            <h3>Total Pemesanan</h3>
            <p>{totalPemesanan}</p>
          </div>

          <div className={styles.statCard}>
            <h3>Tiket Terjual</h3>
            <p>{totalTiket}</p>
          </div>

          <div className={styles.statCard}>
            <h3>Total Pendapatan</h3>
            <p>Rp{totalPendapatan.toLocaleString("id-ID")}</p>
          </div>
        </div>

        <h2 className={styles.subTitle}>Data Pemesanan</h2>

        <input
          type="text"
          placeholder="Cari nama pemesan..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
        />

        <div className={styles.tableWrapper}>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>No HP</th>
                  <th>Jenis Tiket</th>
                  <th>Jumlah Tiket</th>
                  <th>Tanggal Kunjungan</th>
                  <th>Total Harga</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.nama_pemesan}</td>
                    <td>{item.no_hp}</td>
                    <td>{item.jenis_tiket}</td>
                    <td>{item.jumlah_tiket}</td>
                    <td>{item.tanggal_kunjungan}</td>
                    <td>Rp{item.total_harga.toLocaleString("id-ID")}</td>

                    <td>
                      <button
                        className={styles.detailButton}
                        onClick={() => setSelectedData(item)}
                      >
                        Detail
                      </button>

                      <button
                        className={styles.deleteButton}
                        onClick={() => handleDelete(item.id)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {selectedData && (
              <div className={styles.modalOverlay}>
                <div className={styles.modal}>
                  <h2>Detail Pemesanan</h2>

                  <div className={styles.detailRow}>
                    <span>Nama Pemesan</span>
                    <strong>{selectedData.nama_pemesan}</strong>
                  </div>

                  <div className={styles.detailRow}>
                    <span>No HP</span>
                    <strong>{selectedData.no_hp}</strong>
                  </div>

                  <div className={styles.detailRow}>
                    <span>Jenis Tiket</span>
                    <strong>{selectedData.jenis_tiket}</strong>
                  </div>

                  <div className={styles.detailRow}>
                    <span>Jumlah Tiket</span>
                    <strong>{selectedData.jumlah_tiket}</strong>
                  </div>

                  <div className={styles.detailRow}>
                    <span>Tanggal Kunjungan</span>
                    <strong>{selectedData.tanggal_kunjungan}</strong>
                  </div>

                  <div className={styles.detailRow}>
                    <span>Total Harga</span>
                    <strong>
                      Rp{selectedData.total_harga.toLocaleString("id-ID")}
                    </strong>
                  </div>

                  <button
                    className={styles.closeButton}
                    onClick={() => setSelectedData(null)}
                  >
                    Tutup
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
