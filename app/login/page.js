"use client";

import { useState, useContext } from "react";
import InputField from "../components/InputField";
import { useRouter } from "next/navigation";
import ProfileContext from "../core/contexts/ProfileProvider";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { storeInvestorData } = useContext(ProfileContext);

  const handleLogin = async () => {
    try {
       console.log("Login clicked");
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        credentials: "include", 
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      console.log("Response received");
      const result = await response.json();
       console.log(result); 
      storeInvestorData(result.user); 
      router.push("/dashboard");

    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[350px] flex flex-col items-center">
        
        <p className="text-2xl font-semibold text-blue-600 mb-6">
          Login
        </p>

        <InputField
          placeholder="Email"
          type="email"
          inputValue={setEmail}
        />

        <InputField
          placeholder="Password"
          type="password"
          inputValue={setPassword}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2 w-full"
        >
          Login
        </button>

      </div>
    </div>
  );
}