"use client";

import { useEffect, useState } from "react";

export default function Cards() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/sips/transactions", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(setTransactions)
      .catch(console.log);
  }, []);

  const totalAmount = transactions.reduce(
    (sum, t) => sum + Number(t.transaction_amount || 0),
    0
  );

  const sorted = [...transactions].sort(
    (a, b) => new Date(b.transaction_date) - new Date(a.transaction_date)
  );

  const last7 = sorted.slice(0, 7);
  const values = last7.length ? last7.map(t => Number(t.transaction_amount || 0)) : [0];
  const max = Math.max(...values, 1);

  return (
    <div className="grid grid-cols-4 gap-5">
      
      <div className="bg-white rounded-2xl p-5 border border-gray-100 flex flex-col justify-between h-[170px]">
        <p className="text-sm text-gray-500">Total Transactions</p>
        <p className="text-2xl font-semibold text-gray-900">{transactions.length}</p>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-gray-100 flex flex-col justify-between h-[170px]">
        <p className="text-sm text-gray-500">Savings</p>

        <svg className="w-full h-[60px]">
          <polyline
            fill="none"
            stroke="#14b8a6"
            strokeWidth="2"
            points={values
              .map((v, i) =>
                `${(i / (values.length - 1 || 1)) * 100},${60 - (v / max) * 60}`
              )
              .join(" ")}
          />
        </svg>

        <div>
          <p className="text-lg font-semibold text-emerald-600">
            ₹{totalAmount.toLocaleString()}
          </p>
          <p className="text-xs text-red-400">-11% last week</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 flex flex-col justify-between h-[170px]">
        <div className="flex justify-between">
          <p className="text-sm text-gray-500">Income</p>
          <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
            +8%
          </span>
        </div>

        <div className="flex items-end gap-2 h-[70px]">
          {values.map((v, i) => (
            <div
              key={i}
              className="w-3 bg-orange-400 rounded"
              style={{ height: `${(v / max) * 100}%` }}
            />
          ))}
        </div>
      </div>

      <div className="rounded-2xl p-5 text-white bg-gradient-to-br from-teal-400 to-emerald-500 flex flex-col justify-between h-[170px]">
        <div>
          <p className="text-2xl font-bold">
            ₹{Math.floor(totalAmount / 30).toLocaleString()}
          </p>
          <p className="text-xs opacity-80">Per Month</p>
        </div>

        <p className="text-sm">Choose Best Plan</p>

        <div className="flex justify-between items-center">
          <span className="text-xs">Details</span>
          <button className="bg-black px-3 py-1 text-xs rounded-full">
            Upgrade
          </button>
        </div>
      </div>

    </div>
  );
}