"use client";

import { useState } from "react";

export default function CreateInvestor() {
  const [form, setForm] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    pan: "",
    aadhaar: "",
    occupation: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/investors", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        alert("Failed to create investor");
        return;
      }

      alert("Investor Created");

      setForm({
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        pan: "",
        aadhaar: "",
        occupation: "",
        password: ""
      });

    } catch (err) {
      console.log(err);
      alert("Error");
    }
  };

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto overflow-x-hidden">
      
      {/* Header Section */}
      <div>
        <h1 className="text-2xl font-semibold text-blue-600">
          Create Investor
        </h1>
        <p className="text-gray-500">Enter personal and identity details below</p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        
        <h2 className="text-lg font-semibold mb-6 text-gray-700">
          Personal Information
        </h2>

        {/* Responsive Grid - fixes the scroll bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <InputGroup label="First Name">
            <input name="first_name" value={form.first_name} placeholder="John" onChange={handleChange} className="input-clean" />
          </InputGroup>

          <InputGroup label="Middle Name">
            <input name="middle_name" value={form.middle_name} placeholder="Quincy" onChange={handleChange} className="input-clean" />
          </InputGroup>

          <InputGroup label="Last Name">
            <input name="last_name" value={form.last_name} placeholder="Doe" onChange={handleChange} className="input-clean" />
          </InputGroup>

          <InputGroup label="Email">
            <input name="email" type="email" value={form.email} placeholder="john@example.com" onChange={handleChange} className="input-clean" />
          </InputGroup>

          <InputGroup label="Phone">
            <input name="phone" value={form.phone} placeholder="+91 00000 00000" onChange={handleChange} className="input-clean" />
          </InputGroup>

          <InputGroup label="Date of Birth">
            <input name="dob" type="date" value={form.dob} onChange={handleChange} className="input-clean" />
          </InputGroup>

          <InputGroup label="Gender">
            <input name="gender" value={form.gender} placeholder="Male/Female/Other" onChange={handleChange} className="input-clean" />
          </InputGroup>

          <InputGroup label="PAN">
            <input name="pan" value={form.pan} placeholder="ABCDE1234F" onChange={handleChange} className="input-clean" />
          </InputGroup>

          <InputGroup label="Aadhaar">
            <input name="aadhaar" value={form.aadhaar} placeholder="1234 5678 9012" onChange={handleChange} className="input-clean" />
          </InputGroup>

          <InputGroup label="Occupation">
            <input name="occupation" value={form.occupation} placeholder="Software Engineer" onChange={handleChange} className="input-clean" />
          </InputGroup>

          <InputGroup label="Password">
            <input name="password" type="password" value={form.password} placeholder="••••••••" onChange={handleChange} className="input-clean" />
          </InputGroup>
        </div>

        {/* Submit Action */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
          <button 
            onClick={handleSubmit} 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-xl transition-all shadow-lg active:scale-95"
          >
            Create Investor Profile
          </button>
        </div>
      </div>

      {/* Custom Styles using Tailwind utility patterns */}
      <style jsx>{`
        .input-clean {
          width: 100%;
          background: transparent;
          font-weight: 500;
          color: #1f2937;
          outline: none;
        }
        .input-clean::placeholder {
          color: #9ca3af;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
}

// Reusable Input Wrapper to match your Field component
function InputGroup({ label, children }) {
  return (
    <div className="bg-gray-50 p-4 rounded-xl border border-transparent focus-within:border-blue-200 focus-within:bg-white transition-all">
      <p className="text-xs text-gray-500 mb-1 font-medium">{label}</p>
      {children}
    </div>
  );
}