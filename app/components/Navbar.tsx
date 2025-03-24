'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiSearch, FiUser } from 'react-icons/fi';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/90 shadow-sm sticky top-0 z-50 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-accent-red font-serif text-2xl">宿 悠</span>
            <span className="ml-2 text-primary-800 text-lg">YADO YUME</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-primary-700 hover:text-accent-red transition-colors">
            私たちについて
          </Link>
          <Link href="/locations" className="text-primary-700 hover:text-accent-red transition-colors">
            宿泊施設
          </Link>
          <Link href="/experiences" className="text-primary-700 hover:text-accent-red transition-colors">
            体験
          </Link>
          <Link href="/contact" className="text-primary-700 hover:text-accent-red transition-colors">
            お問い合わせ
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <button className="btn btn-primary bg-accent-red hover:bg-accent-red/90 text-white border-none">
            予約する
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 