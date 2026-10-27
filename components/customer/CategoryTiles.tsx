// import Link from 'next/link';

// export default function CategoryTiles() {
//   return (
//     <section className="py-16 px-4 bg-[#F7F1EA]">
//       <div className="container mx-auto">

//         {/* Section Header */}
//         <div className="flex justify-between items-center mb-10">
//           <h2 className="text-2xl md:text-2xl font-serif font-bold text-[#1B2133]">Popular Categories</h2>
          
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

//           {/* Card 1: Men */}
//           <Link href="/shop?category=men" className="group block">
//             <div className="bg-[#0B1B3A] rounded-lg overflow-hidden aspect-[4/5] flex flex-col relative border border-[#24385E]">
//               <div className="flex-1 flex items-center justify-center p-6 bg-[#14284B]">
//                 {/* Men ki image yahan lagayein */}
//                 <img src="image/card-image/men.png" alt="Men Perfume" className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
//               </div>
//               <div className="p-4 text-center bg-[#0B1B3A]">
//                 <h3 className="text-[#F5EDE6] text-sm font-medium tracking-wide group-hover:text-[#E8B4A0] transition">Men</h3>
//               </div>
//             </div>
//           </Link>

//           {/* Card 2: Women */}
//           <Link href="/shop?category=women" className="group block">
//             <div className="bg-[#0B1B3A] rounded-lg overflow-hidden aspect-[4/5] flex flex-col relative border border-[#24385E]">
//               <div className="flex-1 flex items-center justify-center p-6 bg-[#14284B]">
//                 {/* Women ki image yahan lagayein */}
//                 <img src="image/card-image/women.png" alt="Women Perfume" className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
//               </div>
//               <div className="p-4 text-center bg-[#0B1B3A]">
//                 <h3 className="text-[#F5EDE6] text-sm font-medium tracking-wide group-hover:text-[#E8B4A0] transition">Women</h3>
//               </div>
//             </div>
//           </Link>

//           {/* Card 3: Unisex */}
//           <Link href="/shop?category=unisex" className="group block">
//             <div className="bg-[#0B1B3A] rounded-lg overflow-hidden aspect-[4/5] flex flex-col relative border border-[#24385E]">
//               <div className="flex-1 flex items-center justify-center p-6 bg-[#14284B]">
//                 {/* Unisex ki image yahan lagayein */}
//                 <img src="image/card-image/unisex.png" alt="Unisex Perfume" className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
//               </div>
//               <div className="p-4 text-center bg-[#0B1B3A]">
//                 <h3 className="text-[#F5EDE6] text-sm font-medium tracking-wide group-hover:text-[#E8B4A0] transition">Unisex</h3>
//               </div>
//             </div>
//           </Link>

//           {/* Card 4: Attar */}
//           <Link href="/shop?category=attar" className="group block">
//             <div className="bg-[#0B1B3A] rounded-lg overflow-hidden aspect-[4/5] flex flex-col relative border border-[#24385E]">
//               <div className="flex-1 flex items-center justify-center p-6 bg-[#14284B]">
//                 {/* Attar ki image yahan lagayein */}
//                 <img src="image/card-image/attar.png" alt="Attar" className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
//               </div>
//               <div className="p-4 text-center bg-[#0B1B3A]">
//                 <h3 className="text-[#F5EDE6] text-sm font-medium tracking-wide group-hover:text-[#E8B4A0] transition">Attar</h3>
//               </div>
//             </div>
//           </Link>

//         </div>
//       </div>
//     </section>
//   );
// }


import Link from 'next/link';

export default function CategoryTiles() {
  return (
    <section className="py-16 px-4 bg-[#F7F1EA]">
      <div className="container mx-auto">

        {/* Section Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1B2133]">Popular Categories</h2>
          
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

          {/* Card 1: Men */}
          <Link href="/shop?category=men" className="group block">
            {/* HEIGHT YAHAN SE CONTROL HOGI (Abhi 350px set hai) */}
            <div className="bg-[#0B1B3A] rounded-lg overflow-hidden  h-[350px] flex flex-col relative border border-[#24385E]">
              <div className="flex-1 flex items-center justify-center p-6 bg-[#14284B]">
                <img src="image/card-image/men.png" alt="Men Perfume" className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
              </div>
              
            </div>
          </Link>

          {/* Card 2: Women */}
          <Link href="/shop?category=women" className="group block">
            <div className="bg-[#0B1B3A] rounded-lg overflow-hidden h-[350px] flex flex-col relative border border-[#24385E]">
              <div className="flex-1 flex items-center justify-center p-6 bg-[#14284B]">
                <img src="image/card-image/women.png" alt="Women Perfume" className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
              </div>
              
            </div>
          </Link>

          {/* Card 3: Unisex */}
          <Link href="/shop?category=unisex" className="group block">
            <div className="bg-[#0B1B3A] rounded-lg overflow-hidden h-[350px] flex flex-col relative border border-[#24385E]">
              <div className="flex-1 flex items-center justify-center p-6 bg-[#14284B]">
                <img src="image/card-image/unisex.png" alt="Unisex Perfume" className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
              </div>
              
            </div>
          </Link>

          {/* Card 4: Attar */}
          <Link href="/shop?category=attar" className="group block">
            <div className="bg-[#0B1B3A] rounded-lg overflow-hidden h-[350px] flex flex-col relative border border-[#24385E]">
              <div className="flex-1 flex items-center justify-center p-6 bg-[#14284B]">
                <img src="image/card-image/attar.png" alt="Attar" className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
              </div>
              
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}