"use client";

import { useEffect, useState } from "react";

export default function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/sips/transactions", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => setPayments(data.slice(-2).reverse()))
      .catch(console.log);
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Recently Payments
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {payments.map((txn) => (
          <div
            key={txn.transaction_id}
            className="bg-white rounded-2xl px-5 py-4 flex items-center justify-between shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gray-200 rounded-full"></div>

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  SIP {txn.sip_id}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(txn.transaction_date).toDateString()}
                </p>
              </div>
            </div>

            <p className="text-sm font-semibold text-emerald-600">
              ₹{Number(txn.transaction_amount).toLocaleString()}
            </p>

            <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
              Done
            </span>

            <span className="text-gray-300">•••</span>
          </div>
        ))}
      </div>
    </div>
  );
}