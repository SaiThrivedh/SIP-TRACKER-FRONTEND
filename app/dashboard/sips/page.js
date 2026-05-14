"use client";

import { useEffect, useState } from "react";

export default function Sips() {
  const [data, setData] = useState(null);

  useEffect(() => {
  fetch("http://localhost:5000/api/sips/1", {
    credentials: "include"
  })
    .then(res => res.json())
    .then(setData);
}, []);

  if (!data) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-blue-600">
        SIP Details
      </h1>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <p className="text-sm text-gray-700 font-medium">Amount:</p>
        <p className="text-gray-900 font-semibold">{data.sip_amount}</p>
        <p className="text-sm text-gray-700 font-medium">Status:</p>
        <p className="text-gray-900 font-semibold">{data.status}</p>
      </div>
    </div>
  );
}