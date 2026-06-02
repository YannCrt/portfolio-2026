'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAVIGATION_LINKS } from '@/constants/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effet pour détecter le scroll et ajouter une bordure lumineuse subtile
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'border-b border-[var(--color-border-glow)] bg-[var(--color-background)]/70 backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-6 sm:px-8">
        {/* Logo / Brand */}
        <Link href="/" className="text-sm font-semibold tracking-wider text-neutral-100 hover:opacity-80 transition-opacity">
          Yann Cretin
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 sm:gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-neutral-400 hover:text-neutral-100 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}