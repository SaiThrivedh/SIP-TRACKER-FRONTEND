"use client";

import { useEffect, useState } from "react";

export default function Holdings() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/investors/holdings", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(setData)
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-blue-600">
        Holdings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md p-6">
            <p className="text-sm text-gray-700 font-medium">Fund Name:</p>
            <p className="text-gray-900 font-semibold">{item.fund_name }</p>

            <p className="text-sm text-gray-700 font-medium mt-3">Units:</p>
            <p className="text-gray-900 font-semibold">{item.total_units}</p>
          </div>
        ))}
      </div>
    </div>
  );
}