"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();

  if (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/laporan") ||
    pathname.startsWith("/login-admin")
  ) {
    return null;
  }

  return <Navbar />;
}