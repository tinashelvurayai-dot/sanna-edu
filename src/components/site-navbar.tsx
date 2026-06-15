import { Link, useNavigate } from "@tanstack/react-router";
import { LayoutDashboard, LogOut, ShieldCheck } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";
import { checkIsAdmin } from "@/lib/admin.functions";
import logo from "@/assets/edusanna-logo.png.asset.json";

const ADMIN_SHORTCUT_KEY = "edusanna_admin_shortcut_until";

export function SiteNavbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const checkAdmin = useServerFn(checkIsAdmin);
  const { data: adminData } = useQuery({
    queryKey: ["is-admin", user?.id],
    queryFn: () => checkAdmin(),
    enabled: !!user,
    staleTime: 5 * 60_000,
  });

  const tapCount = useRef(0);
  const tapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleLogoClick = (e: React.MouseEvent) => {
    tapCount.current += 1;
    if (tapTimer.current) clearTimeout(tapTimer.current);
    tapTimer.current = setTimeout(() => {
      tapCount.current = 0;
    }, 3000);
    if (tapCount.current >= 17) {
      e.preventDefault();
      tapCount.current = 0;
      if (adminData?.isAdmin) {
        // Grant 1-hour admin shortcut window
        try {
          window.sessionStorage.setItem(
            ADMIN_SHORTCUT_KEY,
            String(Date.now() + 60 * 60 * 1000),
          );
        } catch {
          // ignore
        }
        navigate({ to: "/admin" });
      } else {
        navigate({ to: "/admin-gate" });
      }
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate({ to: "/" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[rgba(7,9,26,0.7)] border-b border-[rgba(139,124,255,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-2">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-90 transition min-w-0">
            <img src={logo.url} alt="Edusanna logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0" />
            <div className="flex flex-col justify-center min-w-0">
              <span className="text-lg sm:text-2xl font-bold gradient-text leading-tight truncate">EDUSANNA</span>
              <span className="text-xs text-blue-600 font-medium truncate">Elevate Your Mind</span>
            </div>
          </Link>

          <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0">
            <Link to="/courses" className="hidden sm:inline">
              <Button variant="ghost" className="text-blue-700 hover:text-blue-800 hover:bg-blue-50 text-sm">Courses</Button>
            </Link>
            {user ? (
              <>
                <Link to="/dashboard">
                  <Button variant="ghost" className="text-blue-700 hover:bg-blue-50 text-sm">
                    <LayoutDashboard className="w-4 h-4 mr-1.5" />
                    <span className="hidden sm:inline">Dashboard</span>
                  </Button>
                </Link>
                {adminData?.isAdmin && (
                  <Link to="/admin">
                    <Button variant="ghost" className="text-purple-700 hover:bg-purple-50 text-sm">
                      <ShieldCheck className="w-4 h-4 sm:mr-1.5" />
                      <span className="hidden sm:inline">Admin</span>
                    </Button>
                  </Link>
                )}
                <Button onClick={handleSignOut} variant="ghost" className="text-blue-700 hover:bg-blue-50 text-sm">
                  <LogOut className="w-4 h-4 sm:mr-1.5" />
                  <span className="hidden sm:inline">Sign out</span>
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth" search={{ mode: "login" }} className="hidden sm:inline">
                  <Button variant="ghost" className="text-blue-700 hover:text-blue-800 hover:bg-blue-50 text-sm">Login</Button>
                </Link>
                <Link to="/auth" search={{ mode: "signup" }}>
                  <Button className="premium-button text-xs sm:text-base px-3 sm:px-6 py-2 h-auto sm:h-10">
                    <span className="hidden sm:inline">Get Started</span>
                    <span className="sm:hidden">Start</span>
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}