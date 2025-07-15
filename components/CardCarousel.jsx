import { Heart } from "lucide-react";
import listings from "../app/data/listings";

export default function CardCarousel() {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">
        Top featured apartments for rent
      </h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {listings.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl overflow-hidden shadow-sm min-w-[220px]"
          >
            <div className="relative">
              <img src={item.image} className="h-40 w-full object-cover" />
              <Heart className="absolute top-2 right-2 w-5 h-5 text-white" />
            </div>
            <div className="p-3 text-sm">
              <p className="font-semibold">{item.title}</p>
              <p className="text-gray-400">{item.location}</p>
              <p className="mt-1 font-bold text-black">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
