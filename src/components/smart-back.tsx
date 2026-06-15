import { useRouter, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

/**
 * Back link that returns to the previous in-app page when possible,
 * falling back to a provided href. If `preferAuthIfCameFromAuth` is true
 * and the document referrer is /auth, it routes back to /auth so the user
 * can resume signup without losing their entered details (the form state
 * is preserved by the browser's bfcache when we use history.back()).
 */
export function SmartBack({
  fallback = "/",
  label = "Back",
  preferAuthIfCameFromAuth = false,
}: {
  fallback?: string;
  label?: string;
  preferAuthIfCameFromAuth?: boolean;
}) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window === "undefined") return;
    if (preferAuthIfCameFromAuth) {
      try {
        const ref = document.referrer ? new URL(document.referrer) : null;
        if (ref && ref.pathname === "/auth" && ref.origin === window.location.origin) {
          window.history.back();
          return;
        }
      } catch {
        // ignore
      }
    }
    if (window.history.length > 1) {
      window.history.back();
    } else {
      router.navigate({ to: fallback });
    }
  };

  return (
    <Link
      to={fallback}
      onClick={handleClick}
      className="inline-flex items-center gap-2 text-sm font-medium text-purple-200 hover:text-white transition mb-4"
    >
      <ArrowLeft className="w-4 h-4" />
      {label}
    </Link>
  );
}
