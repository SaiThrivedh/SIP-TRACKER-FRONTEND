"use client";

import { useEffect, useState } from "react";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/sips/transactions", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(console.log);
  }, []);

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl shadow-sm p-6">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Transactions</h2>

        <input
          placeholder="Search"
          className="bg-gray-100 px-4 py-2 rounded-lg text-sm outline-none text-gray-800"
        />
      </div>

      <div className="flex-1 overflow-hidden">
        <table className="w-full text-sm border-separate border-spacing-y-2">
          
          <thead>
            <tr className="text-gray-500 text-left">
              <th className="px-4 py-2">Txn ID</th>
              <th className="px-4 py-2">SIP</th>
              <th className="px-4 py-2">Portfolio</th>
              <th className="px-4 py-2">Fund</th>
              <th className="px-4 py-2 text-right">Amount</th>
              <th className="px-4 py-2 text-right">NAV</th>
              <th className="px-4 py-2 text-right">Units</th>
              <th className="px-4 py-2 text-right">Date</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.transaction_id} className="bg-gray-50 rounded-xl">
                <td className="px-4 py-3 text-gray-800">{txn.transaction_id}</td>
                <td className="px-4 text-gray-700">{txn.sip_id}</td>
                <td className="px-4 text-gray-700">{txn.portfolio_id}</td>
                <td className="px-4 text-gray-700">{txn.fund_id}</td>

                <td className="px-4 text-right font-medium text-emerald-600">
                  ₹{Number(txn.transaction_amount).toLocaleString()}
                </td>

                <td className="px-4 text-right text-gray-700">
                  {txn.nav_at_purchase}
                </td>

                <td className="px-4 text-right text-gray-700">
                  {txn.units_allocated}
                </td>

                <td className="px-4 text-right text-gray-500">
                  {new Date(txn.transaction_date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}