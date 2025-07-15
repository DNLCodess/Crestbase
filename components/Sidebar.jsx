"use client";

import {
  Home,
  BarChart,
  Heart,
  MessageCircle,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`hidden lg:flex flex-col h-full bg-white border-r border-gray-200 transition-all duration-300 ${
        collapsed ? "w-20 px-3" : "w-64 px-6"
      } py-14 flex-shrink-0`}
    >
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-500 hover:text-blue-600 transition"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {!collapsed && (
        <h1 className="text-2xl font-bold text-gray-800 mb-10">Crestbase</h1>
      )}

      <nav className="flex flex-col gap-2 flex-1">
        <SidebarItem icon={Home} label="Home" active collapsed={collapsed} />
        <SidebarItem icon={BarChart} label="Leisure" collapsed={collapsed} />
        <SidebarItem icon={Heart} label="Saves" collapsed={collapsed} />
        <SidebarItem
          icon={MessageCircle}
          label="Chats"
          badge="10"
          collapsed={collapsed}
        />
        <SidebarItem icon={User} label="Account" avatar collapsed={collapsed} />
      </nav>

      {/* Bottom: System Configuration */}
      <div className="mt-auto pt-8 border-t border-gray-200">
        <SidebarItem
          icon={Settings}
          label="System Config"
          collapsed={collapsed}
        />
      </div>
    </aside>
  );
}

function SidebarItem({ icon: Icon, label, active, badge, avatar, collapsed }) {
  return (
    <div
      className={`relative flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all group ${
        active
          ? "bg-blue-100 text-blue-600 font-semibold"
          : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
      }`}
    >
      {avatar ? (
        <img
          src="https://i.pravatar.cc/40"
          alt="Avatar"
          className="w-8 h-8 rounded-full object-cover"
        />
      ) : (
        <div className="relative w-5 h-5">
          <Icon className="w-5 h-5" />
          {badge && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-semibold w-5 h-5 flex items-center justify-center rounded-full">
              {badge}
            </span>
          )}
        </div>
      )}

      {!collapsed && (
        <span className="text-sm tracking-wide whitespace-nowrap">{label}</span>
      )}
    </div>
  );
}
