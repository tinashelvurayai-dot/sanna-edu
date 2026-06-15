import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SmartBack } from "@/components/smart-back";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Edusanna" },
      { name: "description", content: "Edusanna Privacy Policy and data protection information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen premium-bg py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <SmartBack fallback="/auth" label="Back" preferAuthIfCameFromAuth />
          <h1 className="text-4xl font-bold text-purple-200 mb-2">Privacy Policy</h1>
          <p className="text-white/60">Last updated: January 2024</p>
        </div>

        <div className="rounded-2xl border border-purple-500/20 bg-[rgba(15,18,42,0.6)] backdrop-blur-xl shadow-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-purple-200 mb-4">1. Introduction</h2>
            <p className="text-white/90 leading-relaxed">
              Edusanna ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website and use
              our online learning platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-200 mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-purple-300 mb-2">Personal Information</h3>
                <p className="text-white/90">We collect information you voluntarily provide, including but not limited to:</p>
                <ul className="list-disc list-inside text-white/90 mt-2 space-y-1">
                  <li>Full name, email address, and phone number</li>
                  <li>Country, city, and location information</li>
                  <li>School or institution name (for Academia plan users)</li>
                  <li>Password and account credentials</li>
                  <li>Profile information and preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-purple-300 mb-2">Usage Data</h3>
                <p className="text-white/90">We automatically collect information about your interactions with our platform:</p>
                <ul className="list-disc list-inside text-white/90 mt-2 space-y-1">
                  <li>Course enrollment and completion data</li>
                  <li>Learning progress and module completion</li>
                  <li>Session information and access timestamps</li>
                  <li>Device information and IP addresses</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-200 mb-4">3. How We Use Your Information</h2>
            <p className="text-white/90 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-white/90 space-y-2">
              <li>Create and manage your user account</li>
              <li>Deliver course content and learning materials</li>
              <li>Track your progress and completion status</li>
              <li>Issue certificates and diplomas</li>
              <li>Process payments for certificates</li>
              <li>Send educational communications and updates</li>
              <li>Improve our platform and user experience</li>
              <li>Comply with legal obligations</li>
              <li>Monitor for security threats and fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-200 mb-4">4. Data Security</h2>
            <p className="text-white/90 leading-relaxed">
              We implement comprehensive security measures to protect your personal information. Your data is encrypted
              both in transit and at rest. We use enterprise-grade security infrastructure with Row Level Security (RLS)
              policies, SSL/TLS encryption, and regular security audits. However, no method of transmission over the
              Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-200 mb-4">5. Data Retention</h2>
            <p className="text-white/90 leading-relaxed">
              We retain your personal information for as long as your account is active or as needed to provide services.
              You may request deletion of your account at any time, which will result in the removal of all personal data
              (except data required by law or for legitimate business purposes). Course completion records and
              certificates may be retained for verification purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-200 mb-4">6. Third-Party Services</h2>
            <p className="text-white/90 mb-4">Our platform uses the following third-party services:</p>
            <ul className="list-disc list-inside text-white/90 space-y-2">
              <li><strong>PayPal:</strong> Payment processing for certificates</li>
              <li><strong>Analytics providers:</strong> Usage tracking and product insights</li>
            </ul>
            <p className="text-white/90 mt-4">
              These services have their own privacy policies. We encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-200 mb-4">7. Your Privacy Rights</h2>
            <p className="text-white/90 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-white/90 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Download a copy of your data</li>
              <li>Object to processing of your information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-200 mb-4">8. Contact Us</h2>
            <p className="text-white/90 leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              edusannaonlinelearning@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-200 mb-4">9. Updates to This Policy</h2>
            <p className="text-white/90 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices. We will notify you of
              any material changes by updating the "Last updated" date at the top of this page. Your continued use of the
              platform after such modifications constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>
        </div>

        <div className="mt-12 flex justify-center gap-6">
          <Link to="/terms">
            <Button variant="outline">Terms of Service</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}