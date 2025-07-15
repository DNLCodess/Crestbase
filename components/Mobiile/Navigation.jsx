import { useState } from "react";
import { Home, Building, Heart, MessageCircle, User } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileBottomNavigation() {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    {
      id: "home",
      icon: Home,
      label: "Home",
      color: "text-blue-600",
    },
    {
      id: "explore",
      icon: Building,
      label: "Explore",
      color: "text-gray-500",
    },
    {
      id: "favorites",
      icon: Heart,
      label: "Saved",
      color: "text-gray-500",
      badge: true,
    },
    {
      id: "messages",
      icon: MessageCircle,
      label: "Messages",
      color: "text-gray-500",
    },
    {
      id: "profile",
      icon: User,
      label: "Account",
      color: "text-gray-500",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 md:hidden">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-col items-center py-2 min-w-0 relative"
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? "text-blue-600" : "text-gray-400"
                  }`}
                />
                {tab.badge && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                )}
              </div>
              <span
                className={`text-xs mt-1 ${
                  isActive ? "text-blue-600 font-medium" : "text-gray-400"
                }`}
              >
                {tab.label}
              </span>

              {isActive && (
                <motion.div
                  className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
