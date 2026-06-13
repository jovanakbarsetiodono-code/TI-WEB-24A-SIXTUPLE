import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { NextResponse } from "next/server";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.tb_pemesanan.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      message: "Data berhasil dihapus",
    });
  } catch (error) {
    console.error("ERROR DELETE:", error);

    return NextResponse.json(
      {
        message: "Gagal menghapus data",
      },
      {
        status: 500,
      }
    );
  }
}