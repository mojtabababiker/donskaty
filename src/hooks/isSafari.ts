import { useEffect, useState } from "react";

export function useIsSafari() {
  const [isSafari, setIsSafari] = useState(true);

  useEffect(() => {
    const isSafari =
      window.navigator.userAgent.includes("Safari") &&
      !window.navigator.userAgent.includes("Chrome");

    setIsSafari(isSafari);
  }, []);

  return isSafari;
}
