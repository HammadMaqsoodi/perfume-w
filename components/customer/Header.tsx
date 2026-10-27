import Link from 'next/link';
import { Search, User, ShoppingBag } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#0B1B3A] border-b border-[#24385E] sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* 1. Logo Section (Left) */}
        <div className="flex items-center gap-2">
          {/* Simple Perfume Bottle Icon */}
          <div className="text-[#E8B4A0]">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 2h4"/>
              <path d="M12 2v4"/>
              <path d="M8 6h8l2 16H6z"/>
            </svg>
          </div>
          <Link href="/" className="flex flex-col">
            <span className="text-[#E8B4A0] text-xl font-bold tracking-widest leading-none">LUMIÈRE</span>
            <span className="text-[#9AA4B8] text-[10px] tracking-[0.3em] mt-1">PERFUMES</span>
          </Link>
        </div>

        {/* 2. Navigation Menu (Center) */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-[#F5EDE6] text-sm font-medium hover:text-[#E8B4A0] transition-colors">Home</Link>
          <Link href="/shop" className="text-[#F5EDE6] text-sm font-medium hover:text-[#E8B4A0] transition-colors">Shop</Link>
          <Link href="/brands" className="text-[#F5EDE6] text-sm font-medium hover:text-[#E8B4A0] transition-colors">Brands</Link>
          <Link href="/about" className="text-[#F5EDE6] text-sm font-medium hover:text-[#E8B4A0] transition-colors">About</Link>
          <Link href="/contact" className="text-[#F5EDE6] text-sm font-medium hover:text-[#E8B4A0] transition-colors">Contact</Link>
        </nav>

        {/* 3. Icons Section (Right) */}
        <div className="flex items-center space-x-5 text-[#F5EDE6]">
          <Search className="w-5 h-5 hover:text-[#E8B4A0] cursor-pointer transition-colors" />
          <User className="w-5 h-5 hover:text-[#E8B4A0] cursor-pointer transition-colors" />
          <div className="relative">
            <ShoppingBag className="w-5 h-5 hover:text-[#E8B4A0] cursor-pointer transition-colors" />
            <span className="absolute -top-2 -right-2 bg-[#E8B4A0] text-[#0B1B3A] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </div>
        </div>

      </div>
    </header>
  );
}