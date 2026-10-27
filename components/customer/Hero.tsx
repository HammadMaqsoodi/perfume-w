import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[450px] flex items-center overflow-hidden">
      
      {/* 1. BACKGROUND IMAGE AREA */}
      <div className="absolute inset-0 z-0">
        {/* Jab aapki image ready ho, toh neeche wali line uncomment karke apna image URL daal dein */}
        <img src="image/Lumière Perfume in Midnight Blue.png" alt="Hero Background" className="w-full h-full object-inherit" />
        
        {/* Jab tak image nahi lagti, yeh navy color dikhega */}
        <div className="w-full h-full bg-[#0B1B3A]"></div>
        
        {/* Text saaf parhne ke liye upar se thora dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 2. CONTENT AREA (Sirf Left Side) */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl">
          
          <p className="text-[#9AA4B8] text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-4">
            Premium Fragrances
          </p>
          
          <h1 className="text-[#F5EDE6] text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
            Luxury Scents <br /> for Every Moment
          </h1>
          
          <p className="text-[#9AA4B8] text-sm md:text-base mb-8 max-w-md leading-relaxed">
            Discover timeless fragrances that define you.
          </p>

          {/* Rose Gold Button with Deep Navy Text */}
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-[#E8B4A0] text-[#0B1B3A] font-semibold px-7 py-3 text-sm hover:bg-[#D9A08C] transition-colors duration-300"
          >
            Shop Now <span className="text-lg leading-none">→</span>
          </Link>

        </div>
      </div>

    </section>
  );
}