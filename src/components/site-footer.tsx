import { Link, useNavigate } from "@tanstack/react-router";
import { useRef } from "react";
import { Mail } from "lucide-react";
import logo from "@/assets/edusanna-logo.png.asset.json";

export function SiteFooter() {
  const navigate = useNavigate();
  const taps = useRef(0);
  const lastTap = useRef(0);

  // Tap the footer logo 7 times quickly to open the hidden admin gate.
  const handleLogoTap = () => {
    const now = Date.now();
    if (now - lastTap.current > 1500) taps.current = 0;
    lastTap.current = now;
    taps.current += 1;
    if (taps.current >= 7) {
      taps.current = 0;
      navigate({ to: "/admin-gate" });
    }
  };

  return (
    <footer className="bg-blue-950 text-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img
              src={logo.url}
              alt="Edusanna logo"
              onClick={handleLogoTap}
              className="w-11 h-11 object-contain cursor-pointer select-none"
              draggable={false}
            />
            <span className="text-xl font-bold text-white">EDUSANNA</span>
          </div>
          <p className="text-sm text-blue-300 max-w-xs">
            Africa's free online learning platform. Elevate your mind with certificate and diploma programs A-Z.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/courses" className="hover:text-white transition">All Courses</Link></li>
            <li><Link to="/auth" search={{ mode: "signup" }} className="hover:text-white transition">Get Started</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <a href="mailto:edusannaonlinelearning@gmail.com" className="flex items-center gap-2 text-sm hover:text-white transition">
            <Mail className="w-4 h-4" />
            edusannaonlinelearning@gmail.com
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-blue-900 text-center text-sm text-blue-400">
        © {new Date().getFullYear()} Edusanna Online Learning. All rights reserved.
      </div>
    </footer>
  );
}