"use client";

import { useEffect, useState } from "react";

export default function NetWorth() {
  const [data, setData] = useState(null);

  useEffect(() => {
  fetch("http://localhost:5000/api/investors/networth", {
    credentials: "include"
  })
    .then(res => res.json())
    .then(setData);
}, []);

  if (!data) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold text-blue-600">Net Worth</h1>
      <p className="text-3xl mt-4 text-gray-900 font-semibold"> ₹ {data.total || 0}</p>
    </div>
  );
}