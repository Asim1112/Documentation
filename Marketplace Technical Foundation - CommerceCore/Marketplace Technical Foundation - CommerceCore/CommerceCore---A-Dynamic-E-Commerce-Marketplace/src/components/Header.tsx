"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col max-w-[1440px] mx-auto">
      {/* Top Bar */}
      <div className="h-[36px] bg-gray-100 flex justify-between items-center px-6 md:px-12 w-full">
        <Image src="/logo-icon.svg" alt="logo" width={24} height={24} />
        <ul className="flex md:flex gap-2 text-xs font-medium">
          <li><Link href="/FindAStore" className="hover:text-blue-500">Find a Store</Link></li>
          <li>|</li>
          <li><Link href="/Help" className="hover:text-blue-500">Help</Link></li>
          <li>|</li>
          <li><Link href="/JoinUs" className="hover:text-blue-500">Join Us</Link></li>
          <li>|</li>
          <li><Link href="/Login" className="hover:text-blue-500">Sign In</Link></li>
        </ul>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-6 md:px-10 w-full h-[60px]">
        {/* Logo */}
        <Link href="/">
          <Image src="/nike-logo.svg" alt="Nike logo" width={78} height={78} />
        </Link>

        {/* Navigation for larger screens */}
        <ul className="hidden sm:flex sm:gap-2 sm:text-xs md:flex md:text-base md:gap-6 mx-auto font-medium">
          <li><Link href="/NewFeatured" className="hover:text-blue-500">New & Featured</Link></li>
          <li><Link href="/Men" className="hover:text-blue-500">Men</Link></li>
          <li><Link href="/Women" className="hover:text-blue-500">Women</Link></li>
          <li><Link href="#" className="hover:text-blue-500">Kids</Link></li>
          <li><Link href="#" className="hover:text-blue-500">Sale</Link></li>
          <li><Link href="/APIdata" className="hover:text-blue-500">SNKRS</Link></li>
        </ul>

        {/* Right-side icons & Search */}
        <div className="flex gap-6 sm:flex md:flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-[80px] h-[30px] text-xs sm:text-base sm:w-[130px] sm:h-[40px] md:w-[180px] md:h-[40px] rounded-full bg-gray-100 pl-10"
            />
            <Image src="/search-mirror-icon.svg" alt="search" width={20} height={20} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <div className="flex gap-2 items-center sm:flex sm:gap-2 md:gap-4">  
          <Link href="#">
            <Image src="/icon-heart.svg" alt="Favorites" width={20} height={20} className="hover:scale-150 transition-transform duration-200 ease-in-out"/>
          </Link>
          <Link href="/Cart">
            <Image src="/icon-box.svg" alt="Cart" width={28} height={28} className="hover:scale-150 transition-transform duration-200 ease-in-out"/>
          </Link>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="sm:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-gray-100 p-4 space-y-2">
          <Link href="/NewFeatured" className="hover:text-blue-500">New & Featured</Link>
          <Link href="/Men" className="hover:text-blue-500">Men</Link>
          <Link href="/Women" className="hover:text-blue-500">Women</Link>
          <Link href="#" className="hover:text-blue-500">Kids</Link>
          <Link href="#" className="hover:text-blue-500">Sale</Link>
          <Link href="/APIdata" className="hover:text-blue-500">SNKRS</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
