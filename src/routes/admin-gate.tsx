import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { Loader2, ShieldCheck, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { adminGateState } from "@/lib/admin.functions";
import logo from "@/assets/edusanna-logo.png.asset.json";

export const Route = createFileRoute("/admin-gate")({
  head: () => ({ meta: [{ title: "Admin Access | Edusanna" }, { name: "robots", content: "noindex" }] }),
  component: AdminGatePage,
});

function AdminGatePage() {
  const navigate = useNavigate();
  const getState = useServerFn(adminGateState);
  const { data, isLoading } = useQuery({ queryKey: ["admin-gate-state"], queryFn: () => getState() });

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const adminExists = data?.adminExists ?? false;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (adminExists) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back, admin.");
        navigate({ to: "/admin" });
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/admin`,
            data: { full_name: fullName, signup_type: "standard", is_admin_signup: "true" },
          },
        });
        if (error) throw error;
        toast.success("Admin account created. Confirm your email, then tap the footer logo 7 times to sign in.");
        navigate({ to: "/" });
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
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

        {isLoading ? (
          <div className="py-10 text-center"><Loader2 className="w-7 h-7 animate-spin text-blue-600 mx-auto" /></div>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-blue-900 text-center mb-1">
              {adminExists ? "Admin sign in" : "Create admin account"}
            </h1>
            <p className="text-sm text-blue-600 text-center mb-6">
              {adminExists
                ? "Enter your verified admin details to access the dashboard."
                : "Set up the platform administrator account."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!adminExists && (
                <div>
                  <Label htmlFor="fullName">Full name</Label>
                  <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required placeholder="Luke Jakes" />
                </div>
              )}
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
                {adminExists ? "Sign in" : "Create admin account"}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
