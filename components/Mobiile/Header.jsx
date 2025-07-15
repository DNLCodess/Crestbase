import { ChevronLeft, RotateCcw, Search } from "lucide-react";

export default function MobileHeader() {
  return (
    <header className="flex items-center justify-between  py-3 bg-white md:hidden">
      <div className="flex items-center gap-2">
        <ChevronLeft className="w-5 h-5 text-gray-600" />
        <span className="text-base font-medium text-gray-900">Marketplace</span>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2">
          <RotateCcw className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2">
          <Search className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </header>
  );
}
