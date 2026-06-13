import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Users, CreditCard, Award, DollarSign, Clock, ShieldAlert, Loader2,
} from "lucide-react";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import {
  checkIsAdmin, getAdminStats, listPayments, listUsers, updatePaymentStatus,
  createManualPayment, getLearnerCourses,
} from "@/lib/admin.functions";
import { CertificatePreview, type CertificateData } from "@/components/certificate-preview";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({ meta: [{ title: "Admin Dashboard | Edusanna" }] }),
  component: AdminPage,
});

const STATUS_OPTIONS = [
  { value: "paid_pending_admin", label: "Pending" },
  { value: "noted", label: "Noted" },
  { value: "certificate_sent", label: "Sent" },
] as const;

function statusBadge(status: string) {
  const map: Record<string, string> = {
    paid_pending_admin: "bg-amber-100 text-amber-700",
    noted: "bg-blue-100 text-blue-700",
    certificate_sent: "bg-green-100 text-green-700",
  };
  const label = STATUS_OPTIONS.find((s) => s.value === status)?.label ?? status;
  return <Badge className={`${map[status] ?? "bg-gray-100 text-gray-700"} border-0`}>{label}</Badge>;
}

function AdminPage() {
  const checkAdmin = useServerFn(checkIsAdmin);
  const { data: adminCheck, isLoading: checking } = useQuery({
    queryKey: ["is-admin"],
    queryFn: () => checkAdmin(),
  });

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!adminCheck?.isAdmin) {
    return (
      <div className="min-h-screen">
        <SiteNavbar />
        <section className="pt-40 pb-20 px-4 text-center max-w-md mx-auto">
          <ShieldAlert className="w-14 h-14 text-red-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-blue-900 mb-2">Access denied</h1>
          <p className="text-blue-600 mb-6">You do not have permission to view the admin dashboard.</p>
          <Link to="/dashboard"><Button className="premium-button">Back to dashboard</Button></Link>
        </section>
        <SiteFooter />
      </div>
    );
  }

  return <AdminContent />;
}

function AdminContent() {
  const fetchStats = useServerFn(getAdminStats);
  const { data: stats } = useQuery({ queryKey: ["admin-stats"], queryFn: () => fetchStats() });

  return (
    <div className="min-h-screen">
      <SiteNavbar />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-blue-900 mb-1">Admin Dashboard</h1>
          <p className="text-blue-600 mb-8">Manage payments, learners and credentials.</p>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            <StatCard icon={<Users className="w-5 h-5" />} label="Users" value={stats?.totalUsers ?? "…"} />
            <StatCard icon={<CreditCard className="w-5 h-5" />} label="Payments" value={stats?.totalPayments ?? "…"} />
            <StatCard icon={<DollarSign className="w-5 h-5" />} label="Revenue" value={stats ? `$${stats.totalRevenue.toFixed(2)}` : "…"} />
            <StatCard icon={<Clock className="w-5 h-5" />} label="Pending" value={stats?.pending ?? "…"} />
            <StatCard icon={<Award className="w-5 h-5" />} label="Sent" value={stats?.certificatesSent ?? "…"} />
          </div>

          <Tabs defaultValue="payments">
            <TabsList className="mb-6">
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
            </TabsList>
            <TabsContent value="payments"><PaymentsTab /></TabsContent>
            <TabsContent value="users"><UsersTab /></TabsContent>
            <TabsContent value="certificates"><CertificatesTab /></TabsContent>
          </Tabs>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function PaymentsTab() {
  const qc = useQueryClient();
  const fetchPayments = useServerFn(listPayments);
  const updateStatus = useServerFn(updatePaymentStatus);
  const { data, isLoading } = useQuery({ queryKey: ["admin-payments"], queryFn: () => fetchPayments() });

  const mutation = useMutation({
    mutationFn: (vars: { id: string; status: "paid_pending_admin" | "noted" | "certificate_sent" }) =>
      updateStatus({ data: vars }),
    onSuccess: () => {
      toast.success("Payment updated");
      qc.invalidateQueries({ queryKey: ["admin-payments"] });
      qc.invalidateQueries({ queryKey: ["admin-stats"] });
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Update failed"),
  });

  if (isLoading) return <p className="text-blue-500 py-8">Loading payments…</p>;
  const payments = data?.payments ?? [];

  return (
    <div className="space-y-6">
      <CashPaymentForm />
      {payments.length === 0 ? (
        <div className="glass-card-light p-10 text-center text-blue-700">No payments yet.</div>
      ) : (
      <div className="glass-card-light p-2 sm:p-4 overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((p: any) => (
            <TableRow key={p.id}>
              <TableCell>
                <div className="font-medium text-blue-900">{p.student_name ?? "-"}</div>
                <div className="text-xs text-blue-500">{p.email ?? ""}</div>
              </TableCell>
              <TableCell className="max-w-[180px] truncate">{p.course_name ?? p.course_id}</TableCell>
              <TableCell className="capitalize">{p.certificate_type}</TableCell>
              <TableCell>${Number(p.amount).toFixed(2)}</TableCell>
              <TableCell className="text-xs text-blue-500">{new Date(p.created_at).toLocaleDateString()}</TableCell>
              <TableCell>{statusBadge(p.payment_status)}</TableCell>
              <TableCell>
                <Select
                  value={p.payment_status}
                  onValueChange={(v) => mutation.mutate({ id: p.id, status: v as any })}
                >
                  <SelectTrigger className="w-[120px] h-9"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {STATUS_OPTIONS.map((s) => (
                      <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      )}
    </div>
  );
}

function CashPaymentForm() {
  const qc = useQueryClient();
  const fetchUsers = useServerFn(listUsers);
  const fetchLearnerCourses = useServerFn(getLearnerCourses);
  const recordPayment = useServerFn(createManualPayment);
  const { data: usersData } = useQuery({ queryKey: ["admin-users"], queryFn: () => fetchUsers() });
  const users = usersData?.users ?? [];

  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [courseName, setCourseName] = useState("");
  const [level, setLevel] = useState<"certificate" | "diploma">("certificate");
  const [manualMode, setManualMode] = useState(false);

  const { data: learnerCoursesData, isFetching: loadingCourses } = useQuery({
    queryKey: ["learner-courses", userId],
    queryFn: () => fetchLearnerCourses({ data: { userId } }),
    enabled: Boolean(userId),
  });
  const learnerCourses = learnerCoursesData?.courses ?? [];

  const pickCourse = (key: string) => {
    const c = learnerCourses.find((x: any) => `${x.courseId}::${x.level}` === key);
    if (!c) return;
    setCourseId(c.courseId);
    setCourseName(c.title);
    setLevel(c.level);
  };

  const mutation = useMutation({
    mutationFn: () => recordPayment({ data: { userId, courseId, courseName, level } }),
    onSuccess: () => {
      toast.success("Cash payment recorded");
      qc.invalidateQueries({ queryKey: ["admin-payments"] });
      qc.invalidateQueries({ queryKey: ["admin-stats"] });
      qc.invalidateQueries({ queryKey: ["learner-courses", userId] });
      setUserId(""); setCourseId(""); setCourseName(""); setLevel("certificate");
      setManualMode(false); setOpen(false);
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Failed to record payment"),
  });

  if (!open) {
    return (
      <div className="glass-card-light p-4 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h3 className="font-bold text-blue-900">Paid with cash?</h3>
          <p className="text-sm text-blue-600">Pick a learner and we'll auto-detect the courses they've studied.</p>
        </div>
        <Button onClick={() => setOpen(true)} className="premium-button">Record cash payment</Button>
      </div>
    );
  }

  const hasCourses = learnerCourses.length > 0;

  return (
    <div className="glass-card-light p-5 space-y-4">
      <h3 className="font-bold text-blue-900">Record a cash / offline payment</h3>
      <div>
        <Label>Learner</Label>
        <Select value={userId} onValueChange={(v) => { setUserId(v); setCourseId(""); setCourseName(""); setManualMode(false); }}>
          <SelectTrigger className="h-10"><SelectValue placeholder="Select learner" /></SelectTrigger>
          <SelectContent>
            {users.map((u: any) => (
              <SelectItem key={u.id} value={u.id}>
                {(u.full_name ?? "Learner")} - {u.email ?? "no email"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {userId && (
        <>
          {loadingCourses ? (
            <p className="text-sm text-blue-500">Loading their courses…</p>
          ) : hasCourses && !manualMode ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Course this learner studied</Label>
                <button type="button" onClick={() => setManualMode(true)} className="text-xs text-blue-600 hover:underline">
                  Enter manually instead
                </button>
              </div>
              <Select value={courseId && level ? `${courseId}::${level}` : ""} onValueChange={pickCourse}>
                <SelectTrigger className="h-10"><SelectValue placeholder="Pick from their progress" /></SelectTrigger>
                <SelectContent>
                  {learnerCourses.map((c: any) => {
                    const key = `${c.courseId}::${c.level}`;
                    return (
                      <SelectItem key={key} value={key} disabled={c.alreadyPaid}>
                        {c.title} - {c.level === "diploma" ? "Diploma" : "Certificate"}
                        {c.isCompleted ? " (completed)" : c.completedModules ? ` (${c.completedModules} modules)` : ""}
                        {c.alreadyPaid ? " - already paid" : ""}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cashCourse">Course name</Label>
                <Input id="cashCourse" value={courseName} onChange={(e) => setCourseName(e.target.value)} placeholder="Data Science" />
              </div>
              <div>
                <Label>Level</Label>
                <Select value={level} onValueChange={(v) => setLevel(v as "certificate" | "diploma")}>
                  <SelectTrigger className="h-10"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="certificate">Certificate ($12)</SelectItem>
                    <SelectItem value="diploma">Diploma ($18)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {hasCourses && (
                <button type="button" onClick={() => setManualMode(false)} className="text-xs text-blue-600 hover:underline justify-self-start">
                  ← Back to detected courses
                </button>
              )}
            </div>
          )}

          {courseName && (
            <div className="text-sm text-blue-700 bg-blue-50 rounded-md px-3 py-2">
              Recording <strong>{courseName}</strong> ({level}) - <strong>${level === "diploma" ? 18 : 12}</strong>
            </div>
          )}
        </>
      )}

      <div className="flex gap-3">
        <Button
          onClick={() => mutation.mutate()}
          disabled={mutation.isPending || !userId || !courseName}
          className="premium-button"
        >
          {mutation.isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
          Save as paid
        </Button>
        <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
      </div>
    </div>
  );
}

function UsersTab() {
  const fetchUsers = useServerFn(listUsers);
  const { data, isLoading } = useQuery({ queryKey: ["admin-users"], queryFn: () => fetchUsers() });

  if (isLoading) return <p className="text-blue-500 py-8">Loading users…</p>;
  const users = data?.users ?? [];
  if (users.length === 0) return <div className="glass-card-light p-10 text-center text-blue-700">No users yet.</div>;

  return (
    <div className="glass-card-light p-2 sm:p-4 overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>School</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Joined</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((u: any) => (
            <TableRow key={u.id}>
              <TableCell className="font-medium text-blue-900">{u.full_name ?? "-"}</TableCell>
              <TableCell className="text-blue-600">{u.email ?? "-"}</TableCell>
              <TableCell className="capitalize">
                <Badge className={`border-0 ${u.signup_type === "academia" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"}`}>
                  {u.signup_type ?? "standard"}
                </Badge>
              </TableCell>
              <TableCell>{u.school_name ?? "-"}</TableCell>
              <TableCell className="text-xs text-blue-500">{[u.city, u.country].filter(Boolean).join(", ") || "-"}</TableCell>
              <TableCell className="text-xs text-blue-500">{new Date(u.created_at).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="glass-card-light p-4 flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 flex items-center justify-center flex-shrink-0">{icon}</div>
      <div className="min-w-0">
        <div className="text-xl font-black text-blue-900 truncate">{value}</div>
        <div className="text-xs text-blue-600">{label}</div>
      </div>
    </div>
  );
}

function genCertId() {
  const rnd = () => Math.random().toString(36).slice(2, 6).toUpperCase();
  return `EDU-${rnd()}-${rnd()}`;
}

function CertificatesTab() {
  const fetchPayments = useServerFn(listPayments);
  const updateStatus = useServerFn(updatePaymentStatus);
  const qc = useQueryClient();
  const { data } = useQuery({ queryKey: ["admin-payments"], queryFn: () => fetchPayments() });
  const payments = data?.payments ?? [];

  const [cert, setCert] = useState<CertificateData>({
    studentName: "",
    courseName: "",
    level: "certificate",
    date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
    certificateId: genCertId(),
  });
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const loadFromPayment = (id: string) => {
    setSelectedId(id);
    const p = payments.find((x: any) => x.id === id);
    if (!p) return;
    setCert((c) => ({
      ...c,
      studentName: p.student_name ?? "",
      courseName: p.course_name ?? p.course_id ?? "",
      level: p.certificate_type === "diploma" ? "diploma" : "certificate",
      certificateId: p.certificate_id ?? genCertId(),
    }));
  };

  const markSent = useMutation({
    mutationFn: (id: string) => updateStatus({ data: { id, status: "certificate_sent" } }),
    onSuccess: () => {
      toast.success("Marked as sent");
      qc.invalidateQueries({ queryKey: ["admin-payments"] });
      qc.invalidateQueries({ queryKey: ["admin-stats"] });
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Failed"),
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
      <div className="glass-card-light p-5 space-y-4 no-print h-fit">
        <h3 className="font-bold text-blue-900">Create a certificate</h3>

        {payments.length > 0 && (
          <div>
            <Label>Fill from a payment</Label>
            <Select onValueChange={loadFromPayment}>
              <SelectTrigger className="h-10"><SelectValue placeholder="Select a paid student" /></SelectTrigger>
              <SelectContent>
                {payments.map((p: any) => (
                  <SelectItem key={p.id} value={p.id}>
                    {(p.student_name ?? "Student")} - {p.course_name ?? p.course_id}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div>
          <Label htmlFor="sn">Student name</Label>
          <Input id="sn" value={cert.studentName} onChange={(e) => setCert((c) => ({ ...c, studentName: e.target.value }))} placeholder="Luke Jakes" />
        </div>
        <div>
          <Label htmlFor="cn">Course name</Label>
          <Input id="cn" value={cert.courseName} onChange={(e) => setCert((c) => ({ ...c, courseName: e.target.value }))} placeholder="Data Science" />
        </div>
        <div>
          <Label>Level</Label>
          <Select value={cert.level} onValueChange={(v) => setCert((c) => ({ ...c, level: v as CertificateData["level"] }))}>
            <SelectTrigger className="h-10"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="certificate">Certificate</SelectItem>
              <SelectItem value="diploma">Diploma</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="dt">Date</Label>
          <Input id="dt" value={cert.date} onChange={(e) => setCert((c) => ({ ...c, date: e.target.value }))} />
        </div>
        <div>
          <Label htmlFor="cid">Verification ID</Label>
          <Input id="cid" value={cert.certificateId} onChange={(e) => setCert((c) => ({ ...c, certificateId: e.target.value }))} />
        </div>
        <Button onClick={() => window.print()} className="premium-button w-full">Print / Download PDF</Button>
        {selectedId && (
          <Button
            variant="outline"
            disabled={markSent.isPending}
            onClick={() => markSent.mutate(selectedId)}
            className="w-full border-green-200 text-green-700 hover:bg-green-50"
          >
            Mark certificate as sent
          </Button>
        )}
        <p className="text-xs text-blue-500">Use your browser's "Save as PDF" option to download, then email it to the student.</p>
      </div>

      <div>
        <CertificatePreview data={cert} />
      </div>
    </div>
  );
}
