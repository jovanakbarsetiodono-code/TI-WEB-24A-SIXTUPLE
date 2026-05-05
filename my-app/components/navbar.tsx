"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navClass = (path: string) =>
    `nav-item ${pathname === path ? "active" : ""}`;

  return (
    <nav className="navbar">
      <h1 className="logo">Wira Garden</h1>

      <div className="nav-menu">
        <Link href="/" className={navClass("/")}>Home</Link>
        <Link href="/Deskripsi" className={navClass("/Deskripsi")}>Deskripsi</Link>
        <Link href="/lokasi" className={navClass("/lokasi")}>Lokasi</Link>
        <Link href="/tiket" className={navClass("/tiket")}>Tiket</Link>
        <Link href="/galeri" className={navClass("/galeri")}>Galeri</Link>
      </div>
    </nav>
  )
}