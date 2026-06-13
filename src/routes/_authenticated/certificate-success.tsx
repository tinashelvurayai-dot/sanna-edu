import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { getCatalogItem, getCourseTitle, type CourseLevel } from "@/lib/courses";
import { capturePayPalOrder } from "@/lib/paypal.functions";

type Search = { courseId: string; level: CourseLevel; token?: string };

export const Route = createFileRoute("/_authenticated/certificate-success")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    courseId: String(search.courseId ?? ""),
    level: search.level === "diploma" ? "diploma" : "certificate",
    token: typeof search.token === "string" ? search.token : undefined,
  }),
  component: CertificateSuccessPage,
});

function CertificateSuccessPage() {
  const { courseId, level, token } = Route.useSearch();
  const capture = useServerFn(capturePayPalOrder);
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");
  const [certificateId, setCertificateId] = useState("");
  const ran = useRef(false);

  const item = getCatalogItem(courseId);
  const title = item ? getCourseTitle(item, level) : courseId;

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    if (!token) {
      setStatus("error");
      setMessage("Missing payment reference. If you were charged, contact support.");
      return;
    }
    (async () => {
      try {
        const res = await capture({ data: { orderId: token, courseId, courseName: title, level } });
        if (res.success) {
          setCertificateId(res.certificateId ?? "");
          setStatus("success");
        } else {
          setStatus("error");
          setMessage(res.error ?? "Payment could not be verified.");
        }
      } catch (err) {
        setStatus("error");
        setMessage(err instanceof Error ? err.message : "Something went wrong verifying your payment.");
      }
    })();
  }, [token, courseId, level, title, capture]);

  return (
    <div className="min-h-screen">
      <SiteNavbar />
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-lg mx-auto glass-card-light p-8 text-center">
          {status === "loading" && (
            <>
              <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
              <h1 className="text-xl font-bold text-blue-900">Confirming your payment...</h1>
              <p className="text-blue-600 mt-1">Please don't close this page.</p>
            </>
          )}
          {status === "success" && (
            <>
              <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-blue-900 mb-1">Payment successful!</h1>
              <p className="text-blue-600 mb-4">
                Your {level === "diploma" ? "Diploma" : "Certificate"} for <strong>{title}</strong> is being prepared by our team.
              </p>
              {certificateId && (
                <p className="text-sm text-blue-500 mb-6">Reference: <span className="font-mono font-semibold">{certificateId}</span></p>
              )}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/dashboard"><Button className="premium-button">Go to dashboard</Button></Link>
                <Link to="/courses"><Button variant="outline" className="border-blue-200 text-blue-700">Browse courses</Button></Link>
              </div>
            </>
          )}
          {status === "error" && (
            <>
              <XCircle className="w-14 h-14 text-red-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-blue-900 mb-1">Payment not completed</h1>
              <p className="text-blue-600 mb-6">{message}</p>
              <Link to="/course/$id" params={{ id: courseId }}><Button className="premium-button">Back to course</Button></Link>
            </>
          )}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
