"use client";

import { useContext } from "react";
import ProfileContext from "../../core/contexts/ProfileProvider";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { storedDetails } = useContext(ProfileContext);
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("http://localhost:5000/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    router.push("/login");
  };

  return (
    <div className="h-[60px] bg-white flex items-center justify-between px-6 shadow-sm">
      
      <h1 className="text-lg font-semibold text-gray-800">
        SIP
      </h1>

      <div className="flex items-center gap-4">
        <p className="text-gray-600 text-sm">
          {storedDetails
            ? `${storedDetails.first_name || ""} ${storedDetails.last_name || ""}`.trim() || storedDetails.email
            : "User"}
        </p>

        <button
          onClick={handleLogout}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
}