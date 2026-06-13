import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Award, ArrowLeft, Loader2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { toast } from "sonner";
import { getCatalogItem, getCourseTitle, PRICES, type CourseLevel } from "@/lib/courses";
import { createPayPalOrder } from "@/lib/paypal.functions";

type Search = { courseId: string; level: CourseLevel; error?: string };

export const Route = createFileRoute("/_authenticated/certificate-payment")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    courseId: String(search.courseId ?? ""),
    level: search.level === "diploma" ? "diploma" : "certificate",
    error: typeof search.error === "string" ? search.error : undefined,
  }),
  component: CertificatePaymentPage,
});

function CertificatePaymentPage() {
  const { courseId, level, error } = Route.useSearch();
  const navigate = useNavigate();
  const createOrder = useServerFn(createPayPalOrder);
  const [loading, setLoading] = useState(false);

  const item = getCatalogItem(courseId);
  const title = item ? getCourseTitle(item, level) : courseId;
  const price = PRICES[level as CourseLevel];

  useEffect(() => {
    if (error === "cancelled") toast.info("Payment cancelled. You can try again any time.");
  }, [error]);

  const handlePay = async () => {
    if (!item) {
      toast.error("Course not found.");
      return;
    }
    setLoading(true);
    try {
      const { approveUrl } = await createOrder({
        data: { courseId, courseName: title, level },
      });
      window.location.href = approveUrl;
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not start PayPal checkout.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SiteNavbar />
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-lg mx-auto">
          <button onClick={() => navigate({ to: "/course/$id", params: { id: courseId } })} className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to course
          </button>

          <div className="glass-card-light p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-5">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-blue-900 mb-1">Official {level === "diploma" ? "Diploma" : "Certificate"}</h1>
            <p className="text-blue-600 mb-6">{title}</p>

            <div className="rounded-xl bg-blue-50 border border-blue-100 p-5 mb-6 text-left">
              <div className="flex justify-between text-blue-800 mb-2">
                <span>{level === "diploma" ? "Diploma" : "Certificate"} credential</span>
                <span className="font-semibold">${price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-blue-900 font-bold text-lg border-t border-blue-200 pt-2">
                <span>Total</span>
                <span>${price.toFixed(2)} USD</span>
              </div>
            </div>

            <Button onClick={handlePay} disabled={loading} className="premium-button w-full py-3 text-lg">
              {loading ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : null}
              Pay with PayPal
            </Button>
            <p className="flex items-center justify-center gap-1.5 text-xs text-blue-500 mt-3">
              <ShieldCheck className="w-4 h-4" /> Secure checkout via PayPal
            </p>
          </div>

          {!item && (
            <p className="text-center text-sm text-red-600 mt-4">
              Course not found. <Link to="/courses" className="underline">Browse courses</Link>
            </p>
          )}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
