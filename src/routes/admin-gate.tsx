import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Loader2, ShieldCheck, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/edusanna-logo.png.asset.json";

export const Route = createFileRoute("/admin-gate")({
  head: () => ({ meta: [{ title: "Admin Access | Edusanna" }, { name: "robots", content: "noindex" }] }),
  component: AdminGatePage,
});

// Allowlisted admin accounts. The first sign-in attempt silently provisions
// the account if it does not yet exist, so the credentials below "just work".
const ADMIN_ALLOWLIST = ["edusannaonlinelearning@gmail.com", "tinashelvurayai@gmail.com"];

function AdminGatePage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const signIn = await supabase.auth.signInWithPassword({ email, password });
      if (!signIn.error) {
        toast.success("Welcome back, admin.");
        navigate({ to: "/admin" });
        return;
      }

      const msg = signIn.error.message.toLowerCase();
      const looksMissing = msg.includes("invalid login") || msg.includes("invalid credentials") || msg.includes("not confirmed");
      const allowlisted = ADMIN_ALLOWLIST.includes(email.trim().toLowerCase());

      if (looksMissing && allowlisted) {
        // Silent first-time provisioning for the allowlisted admin.
        const signUp = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/admin`,
            data: { full_name: email.split("@")[0], signup_type: "standard", is_admin_signup: "true" },
          },
        });
        if (signUp.error && !signUp.error.message.toLowerCase().includes("already")) throw signUp.error;
        const retry = await supabase.auth.signInWithPassword({ email, password });
        if (retry.error) throw retry.error;
        toast.success("Welcome, admin.");
        navigate({ to: "/admin" });
        return;
      }

      throw signIn.error;
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Sign-in failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md glass-card-light p-8">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
        <div className="flex flex-col items-center mb-6">
          <img src={logo.url} alt="Edusanna logo" className="w-20 h-20 object-contain mb-2" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" /> Restricted Admin Area
          </div>
        </div>

        <h1 className="text-2xl font-bold text-blue-900 text-center mb-1">Admin sign in</h1>
        <p className="text-sm text-blue-600 text-center mb-6">Enter your admin credentials to access the dashboard.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Admin email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} placeholder="••••••••" />
          </div>
          <Button type="submit" disabled={submitting} className="premium-button w-full py-3">
            {submitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}
