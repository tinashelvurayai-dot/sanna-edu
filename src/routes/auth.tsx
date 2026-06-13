import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader2, Building2, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { useAuth } from "@/lib/auth";
import { PhoneInput, COUNTRIES, type Country } from "@/components/phone-input";
import logo from "@/assets/edusanna-logo.png.asset.json";

type AuthMode = "login" | "signup";
type SignupType = "standard" | "academia";

const REMEMBER_KEY = "edusanna_remember_email";

export const Route = createFileRoute("/auth")({
  validateSearch: (search: Record<string, unknown>): { mode: AuthMode } => ({
    mode: search.mode === "signup" ? "signup" : "login",
  }),
  head: () => ({
    meta: [
      { title: "Sign In or Sign Up | Edusanna" },
      { name: "description", content: "Create your free Edusanna account or log in to continue learning." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const { mode } = Route.useSearch();
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [submitting, setSubmitting] = useState(false);

  const [signupType, setSignupType] = useState<SignupType | null>(null);
  const [fullName, setFullName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneCountry, setPhoneCountry] = useState<Country>(COUNTRIES[0]);
  const [mobile, setMobile] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (!loading && user) navigate({ to: "/dashboard" });
  }, [loading, user, navigate]);

  // Prefill remembered email on the login screen.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(REMEMBER_KEY);
    if (saved) {
      setEmail(saved);
      setRememberMe(true);
    }
  }, []);

  const switchMode = (next: AuthMode) => {
    setSignupType(null);
    navigate({ to: "/auth", search: { mode: next } });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "signup") {
      if (!termsAccepted) {
        toast.error("Please agree to the Privacy Policy and Terms of Use.");
        return;
      }
      if (password !== confirmPassword) {
        toast.error("Passwords do not match.");
        return;
      }
    }
    setSubmitting(true);
    try {
      if (mode === "signup") {
        const isAcademia = signupType === "academia";
        const fullMobile = isAcademia && mobile ? `${phoneCountry.dial} ${mobile}` : null;
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
            data: {
              full_name: fullName,
              // Country is derived from the phone country code (academia only).
              country: isAcademia ? phoneCountry.name : null,
              mobile_number: fullMobile,
              signup_type: signupType ?? "standard",
              school_name: isAcademia ? schoolName : null,
            },
          },
        });
        if (error) throw error;
        toast.success("Account created! Check your email to confirm, then log in.");
        switchMode("login");
      } else {
        if (rememberMe) {
          window.localStorage.setItem(REMEMBER_KEY, email);
        } else {
          window.localStorage.removeItem(REMEMBER_KEY);
        }
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back!");
        navigate({ to: "/dashboard" });
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogle = async () => {
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (result.error) {
      toast.error("Google sign-in failed. Please try again.");
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/dashboard" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md glass-card-light p-8">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
        <Link to="/" className="flex flex-col items-center mb-8">
          <img src={logo.url} alt="Edusanna logo" className="w-24 h-24 object-contain mb-2" />
          <span className="text-2xl font-bold gradient-text">EDUSANNA</span>
          <span className="text-xs text-blue-600">Elevate Your Mind</span>
        </Link>

        {mode === "signup" && !signupType ? (
          <>
            <h1 className="text-2xl font-bold text-blue-900 text-center mb-1">Choose your learning path</h1>
            <p className="text-sm text-blue-600 text-center mb-6">Select the option that best fits your goals</p>
            <div className="space-y-4">
              <button
                type="button"
                onClick={() => setSignupType("standard")}
                className="w-full p-6 rounded-xl border-2 border-blue-200 bg-white hover:bg-blue-50 transition-all text-center group"
              >
                <User className="w-7 h-7 mx-auto mb-2 text-blue-600" />
                <h3 className="font-bold text-xl text-blue-900 mb-1 group-hover:text-blue-700">STANDARD</h3>
                <p className="text-sm text-blue-600 font-semibold">For individual learners</p>
              </button>
              <button
                type="button"
                onClick={() => setSignupType("academia")}
                className="w-full p-6 rounded-xl border-2 border-purple-200 bg-white hover:bg-purple-50 transition-all text-center group"
              >
                <Building2 className="w-7 h-7 mx-auto mb-2 text-purple-600" />
                <h3 className="font-bold text-xl text-blue-900 mb-1 group-hover:text-purple-700">ACADEMIA</h3>
                <p className="text-sm text-purple-600 font-semibold">Best for contracted schools</p>
              </button>
            </div>
            <p className="text-center text-sm text-blue-600 mt-6">
              Already have an account?{" "}
              <button onClick={() => switchMode("login")} className="font-semibold text-blue-800 hover:underline">
                Log in
              </button>
            </p>
          </>
        ) : (
        <>
        <h1 className="text-2xl font-bold text-blue-900 text-center mb-1">
          {mode === "signup"
            ? `${signupType === "academia" ? "Academia" : "Standard"} sign up`
            : "Welcome back"}
        </h1>
        <p className="text-sm text-blue-600 text-center mb-6">
          {mode === "signup" ? "Start learning in minutes" : "Log in to continue learning"}
        </p>
        {mode === "signup" && (
          <button
            type="button"
            onClick={() => setSignupType(null)}
            className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        )}

        <Button onClick={handleGoogle} type="button" variant="outline" className="w-full mb-5 border-blue-200 text-blue-800 hover:bg-blue-50">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z"/><path fill="#EA4335" d="M12 4.75c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.46 14.97.5 12 .5A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.37 12 4.75z"/></svg>
          Continue with Google
        </Button>

        <div className="relative my-5 text-center">
          <span className="bg-white px-3 text-xs text-blue-400 relative z-10">or with email</span>
          <div className="absolute inset-x-0 top-1/2 h-px bg-blue-100" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <div>
              <Label htmlFor="fullName">Full name</Label>
              <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required placeholder="Luke Jakes" />
            </div>
          )}
          {mode === "signup" && signupType === "academia" && (
            <div>
              <Label htmlFor="schoolName">School / Institution name</Label>
              <Input id="schoolName" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} required placeholder="Your school or institution" />
            </div>
          )}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} placeholder="••••••••" />
          </div>
          {mode === "signup" && (
            <div>
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <Input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required minLength={6} placeholder="••••••••" />
            </div>
          )}
          {mode === "signup" && signupType === "academia" && (
            <div>
              <Label htmlFor="mobile">Mobile number</Label>
              <PhoneInput
                country={phoneCountry}
                number={mobile}
                onCountryChange={setPhoneCountry}
                onNumberChange={setMobile}
              />
              <p className="text-xs text-blue-500 mt-1">Your country is detected from your dialling code.</p>
            </div>
          )}
          {mode === "login" && (
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-blue-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-blue-800">Remember me</span>
            </label>
          )}
          {mode === "signup" && (
            <label className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100 cursor-pointer">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="w-5 h-5 mt-0.5 rounded border-blue-300 text-blue-600 focus:ring-blue-500 flex-shrink-0"
              />
              <span className="text-sm text-blue-900">
                I agree to the{" "}
                <Link to="/privacy" className="font-semibold text-blue-700 underline">Privacy Policy</Link>
                {" "}and{" "}
                <Link to="/terms" className="font-semibold text-blue-700 underline">Terms of Use</Link>
              </span>
            </label>
          )}
          <Button type="submit" disabled={submitting} className="premium-button w-full py-3">
            {submitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {mode === "signup" ? "Create account" : "Log in"}
          </Button>
        </form>

        <p className="text-center text-sm text-blue-600 mt-6">
          {mode === "signup" ? "Already have an account?" : "Don't have an account?"}{" "}
          <button onClick={() => switchMode(mode === "signup" ? "login" : "signup")} className="font-semibold text-blue-800 hover:underline">
            {mode === "signup" ? "Log in" : "Sign up"}
          </button>
        </p>
        </>
        )}
      </div>
    </div>
  );
}