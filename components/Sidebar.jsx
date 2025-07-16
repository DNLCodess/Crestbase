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
      className={`hidden lg:flex flex-col h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Header with Collapse Control */}
      <div className="flex items-center justify-between px-4 py-6">
        {!collapsed && (
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">
            Crestbase
          </h1>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-500 hover:text-blue-600 transition p-1 rounded-md"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 px-2 flex-1">
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

      {/* Bottom Config Section */}
      <div className="mt-auto border-t border-gray-200 px-2 py-4">
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
      className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all group ${
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
        <div className="relative w-5 h-5 flex-shrink-0">
          <Icon className="w-5 h-5" />
          {badge && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
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
