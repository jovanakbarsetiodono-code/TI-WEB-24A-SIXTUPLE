-- CreateTable
CREATE TABLE "tb_pemesanan" (
    "id" SERIAL NOT NULL,
    "nama_pemesan" TEXT NOT NULL,
    "no_hp" TEXT NOT NULL,
    "jumlah_tiket" INTEGER NOT NULL,
    "tanggal_kunjungan" TEXT NOT NULL,
    "total_harga" INTEGER NOT NULL,

    CONSTRAINT "tb_pemesanan_pkey" PRIMARY KEY ("id")
);
