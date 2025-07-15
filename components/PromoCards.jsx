import { ArrowLeft } from "lucide-react";

export default function PromoCards() {
  const cards = [
    {
      type: "goal",
      title: "Real estate goal",
      subtitle:
        "Tell us your goal and our AI recommend properties that aligns with it",
      buttonText: "Explore",
      bg: "bg-[#3D79EF]",
      textColor: "text-white",
      showButton: true,
    },
    {
      type: "safe",
      badgeText: "8% per annum",
      title: "Prop safe",
      subtitle: "Save towards your real estate goals",
      bg: "bg-[#35A162]",
      textColor: "text-white",
      showBadge: true,
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto mt-6">
      <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
        <ArrowLeft className="w-4 h-4 text-gray-600 cursor-pointer hover:text-black transition-colors duration-150" />
        Marketplace
      </h3>

      <div className="grid gap-3 md:gap-4 grid-cols-1 md:grid-cols-2 max-w-3xl">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`rounded-xl px-4 py-5 md:p-6 h-[130px] flex flex-col justify-between ${card.bg} ${card.textColor}`}
          >
            <div>
              {card.showBadge && (
                <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full bg-white text-[#3D79EF] mb-2 shadow-sm border border-[#3D79EF]">
                  {card.badgeText}
                </span>
              )}
              <h3 className="text-base md:text-lg font-semibold leading-snug">
                {card.title}
              </h3>
              <p className="text-xs md:text-sm opacity-90 mt-1">
                {card.subtitle}
              </p>
            </div>

            {card.showButton && (
              <div className="flex justify-end">
                <button className="text-xs font-medium px-4 py-[2px] rounded-full bg-white text-[#3D79EF] border border-[#3D79EF] outline outline-[2px] outline-[#C73A3A] shadow-sm transition">
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
