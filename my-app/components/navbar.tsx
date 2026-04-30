"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navClass = (path: string) =>
    `nav-item ${pathname === path ? "nav-active" : ""}`;

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <h2 className="logo">Wira Garden</h2>

        <div className="nav-menu">
          <Link href="/" className={navClass("/")}>Home</Link>
          <Link href="/about" className={navClass("/about")}>Deskripsi</Link>
          <Link href="/tiket" className={navClass("/tiket")}>Tiket</Link>
          <Link href="/galeri" className={navClass("/galeri")}>Galeri</Link>
          <Link href="/lokasi" className={navClass("/lokasi")}>Lokasi</Link>
        </div>

      </div>
    </nav>
  );
}