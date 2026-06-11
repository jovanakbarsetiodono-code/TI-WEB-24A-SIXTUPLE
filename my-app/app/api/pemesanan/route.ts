import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { NextResponse } from "next/server";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

export async function GET() {
  const pemesanan = await prisma.tb_pemesanan.findMany();

  return NextResponse.json(pemesanan);
}

export async function POST(req: Request) {
  const body = await req.json();

  const pemesanan = await prisma.tb_pemesanan.create({
    data: {
      nama_pemesan: body.nama_pemesan,
      no_hp: body.no_hp,
      jenis_tiket: body.jenis_tiket,
      jumlah_tiket: body.jumlah_tiket,
      tanggal_kunjungan: body.tanggal_kunjungan,
      total_harga: body.total_harga,
    },
  });

  return NextResponse.json(pemesanan);
}