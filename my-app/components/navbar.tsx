"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navClass = (path: string) =>
    `nav-item ${pathname === path ? "active" : ""}`;

  return (
    <nav className="navbar">
      <h1 className="logo">Wira Garden</h1>
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <div className={`nav-menu ${isOpen ? "show" : ""}`}>
        <Link href="/" className={navClass("/")}>
          Home
        </Link>
        <Link href="/deskripsi" className={navClass("/deskripsi")}>
          Deskripsi
        </Link>
        <Link href="/lokasi" className={navClass("/lokasi")}>
          Lokasi
        </Link>
        <Link href="/ticket" className={navClass("/ticket")}>
          Ticket
        </Link>
        <Link href="/galeri" className={navClass("/galeri")}>
          Galeri
        </Link>
        <Link href="/review" className={navClass("/review")}>
          Review
        </Link>
      </div>
    </nav>
  );
}
