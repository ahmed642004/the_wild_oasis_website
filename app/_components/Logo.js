"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        width={60} // ✅ required
        height={60} // ✅ passed manually
        alt="The Wild Oasis logo"
        quality={100}
      />
      {/* <span className="text-base font-semibold text-primary-100">
        The Wild <strong>Oasis</strong>
      </span> */}
    </Link>
  );
}

export default Logo;
