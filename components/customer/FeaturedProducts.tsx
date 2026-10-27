import Link from 'next/link';

const products = [
  { id: 1, name: 'Oud Royal', brand: 'Luxe Scent', price: 4500 },
  { id: 2, name: 'Rose Musk', brand: 'Luxe Scent', price: 3200 },
  { id: 3, name: 'Midnight Amber', brand: 'Luxe Scent', price: 5000 },
  { id: 4, name: 'Citrus Breeze', brand: 'Luxe Scent', price: 2800 },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 px-4 bg-cream">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Best Sellers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group">
              <div className="bg-cream-soft border border-cream-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
                <div className="h-56 bg-navy-surface flex items-center justify-center text-ivory text-lg font-bold group-hover:bg-navy transition">
                  Image
                </div>
                <div className="p-4">
                  <p className="text-muted-grey text-xs uppercase tracking-wider">{product.brand}</p>
                  <h3 className="text-charcoal font-semibold mt-1 group-hover:text-rose-deep transition">
                    {product.name}
                  </h3>
                  <p className="text-navy font-bold mt-2">
                    PKR {product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/shop"
            className="inline-block border-2 border-rose-deep text-rose-deep font-bold px-8 py-3 rounded-full hover:bg-rose-deep hover:text-ivory transition duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}