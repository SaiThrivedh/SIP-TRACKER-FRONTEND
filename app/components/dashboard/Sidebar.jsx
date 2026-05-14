"use client";

import { useRouter, usePathname } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menu = [
    {
      section: "Investor",
      items: [
        { name: "Create Investor", path: "/dashboard/investors/create" },
        { name: "Investor Details", path: "/dashboard/investors" },
        { name: "Holdings", path: "/dashboard/holdings" },
        { name: "Net Worth", path: "/dashboard/networth" },
      ],
    },
    {
      section: "Funds",
      items: [
        { name: "All Funds", path: "/dashboard/funds" },
      ],
    },
    {
      section: "SIPs",
      items: [
        { name: "SIP Details", path: "/dashboard/sips" },
        { name: "Transactions", path: "/dashboard/transactions" },
      ],
    },
  ];

  return (
    <div className="w-[230px] h-screen bg-white p-4 shadow-sm">
      <h1 className="text-xl font-semibold text-blue-600 mb-6">
        SIP Tracker
      </h1>

      {menu.map((section) => (
        <div key={section.section} className="mb-6">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
            {section.section}
          </p>

          {section.items.map((item) => (
            <button
              key={item.name}
              onClick={() => router.push(item.path)}
              className={`w-full text-left px-3 py-2 rounded-lg mb-1 transition-all duration-200 ${
                pathname === item.path
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}