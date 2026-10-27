import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-ivory pt-16 pb-8 px-4 border-t border-navy-border">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-rose mb-4">LUXE SCENT</h2>
          <p className="text-muted-blue text-sm leading-relaxed">
            Premium fragrances for every occasion. Discover your signature scent with our exclusive collection.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-rose">Shop</h3>
          <ul className="space-y-2 text-sm text-muted-blue">
            <li><Link href="/shop?category=men" className="hover:text-ivory">Men</Link></li>
            <li><Link href="/shop?category=women" className="hover:text-ivory">Women</Link></li>
            <li><Link href="/shop?category=unisex" className="hover:text-ivory">Unisex</Link></li>
            <li><Link href="/shop?category=attar" className="hover:text-ivory">Attar</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-rose">Help</h3>
          <ul className="space-y-2 text-sm text-muted-blue">
            <li><Link href="/contact" className="hover:text-ivory">Contact Us</Link></li>
            <li><Link href="/about" className="hover:text-ivory">About Us</Link></li>
            <li><Link href="/track-order" className="hover:text-ivory">Track Order</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-rose">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-blue">
            <li>support@luxescent.pk</li>
            <li>+92 300 1234567</li>
            <li>Karachi, Pakistan</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t border-navy-border text-center text-muted-blue text-sm">
      <p>&copy; 2026 Luxe Scent. All rights reserved.</p>
      </div>
    </footer>
  );
}