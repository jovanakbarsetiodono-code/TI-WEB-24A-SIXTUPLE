"use client";

import styles from "./ticket.module.css";
import { useState, useEffect } from "react";
type Pemesanan = {
  id: number;
  nama_pemesan: string;
  no_hp: string;
  jenis_tiket: string;
  jumlah_tiket: number;
  tanggal_kunjungan: string;
  total_harga: number;
};
type Ticket = {
  id: number;
  nama: string;
  harga: number;
};
export default function TicketPage() {
  const [namaPemesan, setNamaPemesan] = useState("");
  const [noHp, setNoHp] = useState("");
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [jumlahTiket, setJumlahTiket] = useState(1);
  const [tanggalKunjungan, setTanggalKunjungan] = useState("");
  const [pesan, setPesan] = useState("");
  const [detailPemesanan, setDetailPemesanan] = useState<Pemesanan | null>(
    null,
  );

  useEffect(() => {
    fetch("/api/ticket")
      .then((res) => res.json())
      .then((data) => {
        setTickets(data);

        if (data.length > 0) {
          setSelectedTicket(data[0]);
        }
      });
  }, []);

  const hargaTiket = selectedTicket?.harga || 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const totalHarga = jumlahTiket * hargaTiket;

    const response = await fetch("/api/pemesanan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nama_pemesan: namaPemesan,
        no_hp: noHp,
        jenis_tiket: selectedTicket?.nama,
        jumlah_tiket: jumlahTiket,
        tanggal_kunjungan: tanggalKunjungan,
        total_harga: totalHarga,
      }),
    });

    if (response.ok) {
      const data = await response.json();

      setPesan("Pemesanan tiket berhasil!");
      setDetailPemesanan(data);
      setNamaPemesan("");
      setNoHp("");
      setJumlahTiket(1);
      setTanggalKunjungan("");
    } else {
      setPesan("Terjadi kesalahan saat melakukan pemesanan.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Pemesanan Tiket Wira Garden</h1>

        <p className={styles.subtitle}>
          Pesan tiket wisata Wira Garden dengan mudah dan cepat
        </p>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Nama Pemesan</label>
            <input
              type="text"
              value={namaPemesan}
              onChange={(e) => setNamaPemesan(e.target.value)}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Nomor HP</label>
            <input
              type="text"
              value={noHp}
              onChange={(e) => setNoHp(e.target.value)}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Jenis Tiket</label>

            <select
              className={styles.input}
              value={selectedTicket?.id || ""}
              onChange={(e) => {
                const ticket = tickets.find(
                  (t) => t.id === Number(e.target.value),
                );

                setSelectedTicket(ticket || null);
              }}
            >
              {tickets.map((ticket) => (
                <option key={ticket.id} value={ticket.id}>
                  {ticket.nama} - Rp{ticket.harga.toLocaleString("id-ID")}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Jumlah Tiket</label>
            <input
              type="number"
              min="1"
              value={jumlahTiket}
              onChange={(e) => setJumlahTiket(Number(e.target.value))}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Tanggal Kunjungan</label>
            <input
              type="date"
              value={tanggalKunjungan}
              onChange={(e) => setTanggalKunjungan(e.target.value)}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.infoBox}>
            <p>
              Harga Tiket:
              <strong>Rp{hargaTiket.toLocaleString("id-ID")}</strong>
            </p>
            <p>
              Total Harga:
              <strong>
                {" "}
                Rp{(jumlahTiket * hargaTiket).toLocaleString("id-ID")}
              </strong>
            </p>
          </div>

          <button type="submit" className={styles.button}>
            Pesan Tiket
          </button>
        </form>

        {pesan && <p className={styles.success}>{pesan}</p>}
        {detailPemesanan && (
          <div className={styles.infoBox}>
            <h3>Detail Pemesanan</h3>

            <p>
              <strong>Nama:</strong> {detailPemesanan.nama_pemesan}
            </p>

            <p>
              <strong>No HP:</strong> {detailPemesanan.no_hp}
            </p>

            <p>
              <strong>Jenis Tiket:</strong> {detailPemesanan.jenis_tiket}
            </p>

            <p>
              <strong>Jumlah Tiket:</strong> {detailPemesanan.jumlah_tiket}
            </p>

            <p>
              <strong>Tanggal Kunjungan:</strong>{" "}
              {detailPemesanan.tanggal_kunjungan}
            </p>

            <p>
              <strong>Total Harga:</strong> Rp
              {detailPemesanan.total_harga.toLocaleString("id-ID")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
