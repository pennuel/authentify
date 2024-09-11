import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Authentify</h3>
            <p className="text-sm">Empowering African Artists through Blockchain</p>
          </div>
          <nav className="flex gap-4">
            <Link href="#" className="hover:underline">About</Link>
            <Link href="#" className="hover:underline">FAQ</Link>
            <Link href="#" className="hover:underline">Terms of Service</Link>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm">
          © 2023 Authentify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;