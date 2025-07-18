import { ChevronLeft, Search } from "lucide-react";
import { BiSupport } from "react-icons/bi";

export default function MobileHeader() {
  return (
    <header className="flex items-center justify-between  py-3 bg-white md:hidden">
      <div className="flex items-center gap-2">
        <ChevronLeft className="w-5 h-5 text-gray-900" />
        <span className="text-base font-bold text-gray-900">Marketplace</span>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2">
          <BiSupport className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2">
          <Search className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </header>
  );
}
