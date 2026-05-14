"use client";

import { useEffect, useState } from "react";

export default function Funds() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/funds")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-blue-600">
        Funds
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((f) => (
          <div key={f.fund_id} className="bg-white rounded-2xl shadow-md p-6">
            <p className="text-sm text-gray-700 font-medium">Fund Name:</p>
            <p className="text-gray-900 font-semibold">{f.fund_name}</p>
            <p className="text-sm text-gray-700 font-medium">Fund Type:</p>
            <p className="text-gray-900 font-semibold">{f.fund_type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}