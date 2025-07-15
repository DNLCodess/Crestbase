import { Home, BarChart, Heart, MessageCircle, User } from "lucide-react";

const tabs = [
  { icon: <Home />, label: "Home" },
  { icon: <BarChart />, label: "Leisure" },
  { icon: <Heart />, label: "Saves" },
  { icon: <MessageCircle />, label: "Chats", badge: "9+" },
  { icon: <User />, label: "Profile" },
];

export default function MobileTabs() {
  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 shadow-sm flex justify-between px-4 py-2 z-50">
      {tabs.map((tab, i) => (
        <div
          key={i}
          className="relative flex flex-col items-center text-xs text-gray-600"
        >
          {tab.icon}
          <span>{tab.label}</span>
          {tab.badge && (
            <span className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">
              {tab.badge}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
