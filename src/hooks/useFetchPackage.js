import { useState, useEffect } from "react";

const API_URL = "http://localhost:3001/pachete";

const useFetchPackages = (id = "") => {
  const [packages, setPackages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL + id);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const packageData = await response.json();
        setPackages(packageData);
        setLoading(false);
      } catch (error) {
        setError("Eroare 808");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { packages, loading, error };
};

export default useFetchPackages;
