"use client";

import { useEffect, useState } from "react";

export default function Transactions() {
  const [data, setData] = useState([]);
 
  useEffect(() => {
  fetch("http://localhost:5000/api/sips/transactions", {
    credentials: "include"
  })
    .then(res => res.json())
    .then(setData);
}, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-blue-600">
        Transactions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((t) => (
          <div key={t.transaction_id} className="bg-white rounded-2xl shadow-md p-6">
            <p className="text-sm text-gray-700 font-medium">Amount:</p>
            <p className="text-gray-900 font-semibold">{t.transaction_amount}</p>
            <p className="text-sm text-gray-700 font-medium">Date:</p>
            <p className="text-gray-900 font-semibold">{new Date(t.transaction_date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}