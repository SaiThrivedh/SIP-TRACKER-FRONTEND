"use client";

import { createContext, useState, useEffect } from "react";

const ProfileContext = createContext();

export default ProfileContext;

export function ProfileProvider({ children }) {
  const [storedDetails, setStoredDetails] = useState(null);

  const storeInvestorData = (data) => {
    setStoredDetails(data);
  };

  const clearInvestorData = () => {
    setStoredDetails(null);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/sips/${storedDetails.investor_id}`, {
          credentials: "include",
        });

        if (res.ok) {
          const data = await res.json();
          setStoredDetails(data.user);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  return (
    <ProfileContext.Provider
      value={{ storedDetails, storeInvestorData, clearInvestorData }}
    >
      {children}
    </ProfileContext.Provider>
  );
}