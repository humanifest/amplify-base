import { useEffect, useState } from "react";

export default function useSubdomain() {
  const [subdomain, setSubdomain] = useState("");

  useEffect(() => {
    const hostname = window.location.hostname;
    const parts = hostname.split(".");
    if (parts.length > 2) {
      setSubdomain(parts[0]); // Get the first part as the subdomain
    } else {
      setSubdomain(""); // No subdomain found
    }
  }, []);

  return subdomain;
}
