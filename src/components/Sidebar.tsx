import React from "react";

type SidebarProps = {
  activeId: string;
  onSelect: (id: string) => void;
};

const navItems = [
  { id: "global", label: "Global Roadmap" },
  { id: "dev", label: "Dev Roadmap" },
];

const Sidebar: React.FC<SidebarProps> = ({ activeId, onSelect }) => {
  return (
    <aside className="w-64 h-screen bg-black text-white p-6 fixed top-0 left-0 z-20 flex flex-col">
      {/* Top Label */}
      <div className="mt-8">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-6">
          ● Global Roadmap
        </p>

        {/* Navigation Items */}
        <ul className="space-y-4">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSelect(item.id)}
                  className={`block w-full px-4 py-3 rounded-lg font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-gray-800 text-orange-500"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  <span className="inline-block mr-2">●</span>
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;