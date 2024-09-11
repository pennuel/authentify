import React from 'react';
import { Link } from 'next/link';
import { Button } from '@/components/ui/button';
import { Palette } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/30 backdrop-blur-lg py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center text-white">
          <Palette className="h-8 w-8 mr-2" />
          <span className="text-2xl font-bold">Authentify</span>
        </Link>
        <nav>
        <Link href="/explore" passHref>
        <Button variant="ghost" className="text-white hover:text-purple-200">Explore</Button>
      </Link>
      <Link href="/my-collection" passHref>
        <Button variant="ghost" className="text-white hover:text-purple-200">My Collection</Button>
      </Link>
      <Link href="/profile" passHref>
        <Button variant="ghost" className="text-white hover:text-purple-200">Profile</Button>
      </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;