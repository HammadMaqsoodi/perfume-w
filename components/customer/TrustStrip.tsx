import { Truck, Banknote, MapPin } from 'lucide-react';

export default function TrustStrip() {
  return (
    <section className="bg-navy-surface py-8 px-4 border-y border-navy-border">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="flex flex-col items-center text-ivory">
          <Banknote className="w-8 h-8 text-rose mb-2" />
          <h3 className="font-bold text-ivory">Cash on Delivery</h3>
          <p className="text-muted-blue text-sm">Pay when you receive</p>
        </div>
        <div className="flex flex-col items-center text-ivory">
          <Truck className="w-8 h-8 text-rose mb-2" />
          <h3 className="font-bold text-ivory">Delivery Across Pakistan</h3>
          <p className="text-muted-blue text-sm">Fast & secure shipping</p>
        </div>
        <div className="flex flex-col items-center text-ivory">
          <MapPin className="w-8 h-8 text-rose mb-2" />
          <h3 className="font-bold text-ivory">Order Tracking</h3>
          <p className="text-muted-blue text-sm">Track your parcel live</p>
        </div>
      </div>
    </section>
  );
}