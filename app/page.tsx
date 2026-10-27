// import AnnouncementBar from '../components/customer/AnnouncementBar';
import Header from '../components/customer/Header';
import Hero from '../components/customer/Hero';
import CategoryTiles from '../components/customer/CategoryTiles';
import FeaturedProducts from '../components/customer/FeaturedProducts';
import TrustStrip from '../components/customer/TrustStrip';
import Footer from '../components/customer/Footer';

export default function Home() {
  return (
    <main className="bg-cream min-h-screen font-sans text-charcoal">
      {/* <AnnouncementBar /> */}
      <Header />
      <Hero />
      <CategoryTiles />
      <FeaturedProducts />
      <TrustStrip />
      <Footer />
    </main>
  );
}