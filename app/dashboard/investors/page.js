"use client";

import { useEffect, useState } from "react";

export default function Investors() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/investors/me", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(setData)
      .catch(console.log);
  }, []);

  if (!data) {
    return (
      <div className="p-6 text-gray-500">Loading investor data...</div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      
      <div>
        <h1 className="text-2xl font-semibold text-blue-600">
          Investor Details
        </h1>
        <p className="text-gray-500">
          {data.first_name} {data.last_name}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="First Name" value={data.first_name} />
          <Field label="Last Name" value={data.last_name} />
          <Field label="Email" value={data.email} />
          <Field label="Phone" value={data.phone} />
          <Field label="Date of Birth" value={formatDate(data.dob)} />
          <Field label="Gender" value={data.gender} />
          <Field label="PAN" value={data.pan} />
          <Field label="Aadhaar" value={data.aadhaar} />
          <Field label="Occupation" value={data.occupation} />
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className="font-medium text-gray-800">{value || "-"}</p>
    </div>
  );
}

function formatDate(date) {
  if (!date) return "-";
  return new Date(date).toLocaleDateString();
}