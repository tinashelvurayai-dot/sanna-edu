import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Edusanna" },
      { name: "description", content: "Edusanna Terms of Service and user agreement." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen premium-bg py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-purple-200 mb-2">Terms of Service</h1>
          <p className="text-white/60">Last updated: January 2024</p>
        </div>

        <div className="rounded-2xl border border-purple-500/20 bg-[rgba(15,18,42,0.6)] backdrop-blur-xl shadow-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-purple-200 mb-4">1. Acceptance of Terms</h2>
            <p className="text-white/90 leading-relaxed">
              By accessing and using Edusanna, you accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-200 mb-4">2. User Accounts</h2>
            <div className="space-y-4 text-white/90">
              <p>
                You agree to provide accurate, current, and complete information during registration and to maintain the
                confidentiality of your password and account information.
              </p>
              <p>
                You are responsible for all activities that occur under your account. You must notify us immediately if
                you suspect unauthorized use of your account.
              </p>
              <p>
                We reserve the right to refuse service, terminate accounts, and remove or edit content at our sole
                discretion.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-200 mb-4">3. Course Content and Learning Materials</h2>
            <div className="space-y-4 text-white/90">
              <p>
                All course materials, content, and intellectual property provided on Edusanna are protected by copyright
                and other intellectual property laws. You may access and use this content for personal, non-commercial
                educational purposes only.
              </p>
              <p>You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Reproduce, distribute, or transmit course materials without permission</li>
                <li>Remove any copyright, trademark, or other proprietary notices</li>
                <li>Share your account credentials with others</li>
                <li>Attempt to bypass or circumvent any access controls</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-200 mb-4">4. Certificates and Credentials</h2>
            <div className="space-y-4 text-white/90">
              <p>
                Completion of courses results in certificates and diplomas issued by Edusanna, not accredited educational
                institutions unless explicitly stated.
              </p>
              <p>
                These credentials represent completion of our courses and should not be represented as degrees or
                accredited certifications unless authorized by the issuing body.
              </p>
              <p>
                Edusanna reserves the right to revoke any certificate obtained through fraud, misrepresentation, or
                violation of these terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-200 mb-4">5. Payments and Refunds</h2>
            <div className="space-y-4 text-white/90">
              <p>
                <strong>Free Learning:</strong> Edusanna offers free access to all courses. Payments are only required
                when requesting certificates or diplomas.
              </p>
              <p>
                <strong>Certificate Payments:</strong> All payments are processed securely through PayPal. Prices are
                displayed before checkout.
              </p>
              <p>
                <strong>Refund Policy:</strong> Refund requests must be submitted within 14 days of purchase. Refunds are
                granted at our discretion.
              </p>
              <p>
                <strong>Taxes:</strong> You are responsible for any applicable taxes on certificate purchases.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-200 mb-4">6. User Conduct and Prohibited Activities</h2>
            <p className="text-white/90 mb-4">You agree not to:</p>
            <ul className="list-disc list-inside text-white/90 space-y-2">
              <li>Engage in any form of harassment, abuse, or discrimination</li>
              <li>Post or transmit viruses, malicious code, or harmful materials</li>
              <li>Attempt to gain unauthorized access to systems or data</li>
              <li>Engage in phishing, spoofing, or social engineering</li>
              <li>Post spam, unsolicited advertising, or promotional materials</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on any intellectual property rights</li>
              <li>Disrupt the normal operation of the platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-200 mb-4">7. Limitation of Liability</h2>
            <p className="text-white/90 leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY LAW, EDUSANNA AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL
              NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING
              BUT NOT LIMITED TO LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR IN CONNECTION WITH THE USE OF
              THIS PLATFORM, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-200 mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-white/90 leading-relaxed">
              THE PLATFORM AND ALL CONTENT, MATERIALS, AND SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, OR NON-INFRINGEMENT.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-200 mb-4">9. Indemnification</h2>
            <p className="text-white/90 leading-relaxed">
              You agree to indemnify and hold harmless Edusanna, its officers, directors, employees, and agents from any
              claims, damages, losses, or expenses (including attorney's fees) arising out of or relating to your use of
              the platform or violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-200 mb-4">10. Modifications to Terms</h2>
            <p className="text-white/90 leading-relaxed">
              Edusanna reserves the right to modify these terms at any time. We will notify users of material changes via
              email or through the platform. Your continued use constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-200 mb-4">11. Governing Law</h2>
            <p className="text-white/90 leading-relaxed">
              These terms are governed by and construed in accordance with the laws applicable in the jurisdiction where
              Edusanna operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-200 mb-4">12. Contact Us</h2>
            <p className="text-white/90 leading-relaxed">
              If you have questions about these Terms of Service, please contact us at: edusannaonlinelearning@gmail.com
            </p>
          </section>
        </div>

        <div className="mt-12 flex justify-center gap-6">
          <Link to="/privacy">
            <Button variant="outline">Privacy Policy</Button>
          </Link>
          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}