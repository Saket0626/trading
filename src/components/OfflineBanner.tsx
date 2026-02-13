import { useState, useEffect } from "react";
import { WifiOff } from "lucide-react";

export function OfflineBanner() {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-amber-600 text-white py-3 px-4 flex items-center justify-center gap-2 shadow-lg"
      role="alert"
    >
      <WifiOff className="h-5 w-5" aria-hidden />
      <span className="font-medium">You're offline. Some features may not work.</span>
    </div>
  );
}
