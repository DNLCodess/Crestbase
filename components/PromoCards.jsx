import { ArrowLeft } from "lucide-react";

export default function PromoCards() {
  const cards = [
    {
      type: "goal",
      title: "Real estate goal",
      subtitle:
        "Tell us your goal and our AI recommends properties that align with it",
      buttonText: "Explore",
      bg: "bg-gradient-to-br from-[#3D79EF] to-[#35A162]",
      textColor: "text-white",
      showButton: true,
    },
    {
      type: "safe",
      badgeText: "8% per annum",
      title: "Prop Safe",
      subtitle: "Save towards your real estate goals",
      bg: "bg-[#35A162]",
      textColor: "text-white",
      showBadge: true,
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto mt-6">
      <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
        <ArrowLeft className="w-4 h-4 text-gray-600 cursor-pointer hover:text-black transition-colors" />
        Marketplace
      </h3>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 max-w-3xl">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`rounded-2xl px-5 py-5 md:py-6 h-[140px] flex flex-col justify-between shadow-md ${card.bg} ${card.textColor}`}
          >
            <div>
              {card.showBadge && (
                <span className="inline-block text-xs font-medium px-3 py-[5px] rounded-full bg-white text-[#3D79EF] border border-[#3D79EF] shadow-inner mb-2">
                  {card.badgeText}
                </span>
              )}
              <h3 className="text-sm md:text-lg font-semibold leading-snug capitalize">
                {card.title}
              </h3>
              <p className="text-xs md:text-sm opacity-90 mt-1 leading-relaxed">
                {card.subtitle}
              </p>
            </div>

            {card.showButton && (
              <div className="flex justify-end">
                <button className="text-xs font-medium px-4 py-1.5 rounded-full bg-white text-[#3D79EF] border border-[#3D79EF] shadow-sm hover:bg-[#f0f6ff] transition-all duration-200">
                  {card.buttonText}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
