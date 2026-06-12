/*
  Warnings:

  - Added the required column `jenis_tiket` to the `tb_pemesanan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tb_pemesanan" ADD COLUMN     "jenis_tiket" TEXT NOT NULL;
