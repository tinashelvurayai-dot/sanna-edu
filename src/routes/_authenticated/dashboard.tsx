import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { BookOpen, GraduationCap, Trophy, ArrowRight } from "lucide-react";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { getCatalogItem, getCourseModules, type CourseLevel } from "@/lib/courses";
import { getCourseIcon } from "@/lib/course-icons";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({ meta: [{ title: "My Dashboard | Edusanna" }] }),
  component: Dashboard,
});

interface EnrollmentRow {
  id: string;
  course_id: string;
  level: CourseLevel;
  course_title: string | null;
}
interface ProgressRow {
  course_id: string;
  level: CourseLevel;
  completed_modules: number[];
  is_completed: boolean;
}

function Dashboard() {
  const { user } = useAuth();

  const { data: profile } = useQuery({
    queryKey: ["profile", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data } = await supabase.from("profiles").select("full_name").eq("id", user!.id).maybeSingle();
      return data;
    },
  });

  const { data, isLoading } = useQuery({
    queryKey: ["dashboard", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const [enr, prog] = await Promise.all([
        supabase.from("enrollments").select("id,course_id,level,course_title").eq("user_id", user!.id).order("created_at", { ascending: false }),
        supabase.from("course_progress").select("course_id,level,completed_modules,is_completed").eq("user_id", user!.id),
      ]);
      return {
        enrollments: (enr.data ?? []) as EnrollmentRow[],
        progress: (prog.data ?? []) as ProgressRow[],
      };
    },
  });

  const enrollments = data?.enrollments ?? [];
  const progress = data?.progress ?? [];
  const completedCount = progress.filter((p) => p.is_completed).length;

  const metaName = (user?.user_metadata as { full_name?: string } | undefined)?.full_name;
  const fullName = profile?.full_name || metaName || user?.email?.split("@")[0] || "learner";
  const firstName = fullName.split(" ")[0];

  return (
    <div className="min-h-screen">
      <SiteNavbar />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-blue-900 mb-1">Welcome back, {firstName}</h1>
          <p className="text-blue-600 mb-8">Continue where you left off.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <StatCard icon={<BookOpen className="w-6 h-6" />} label="Enrolled courses" value={enrollments.length} />
            <StatCard icon={<Trophy className="w-6 h-6" />} label="Completed" value={completedCount} />
            <StatCard icon={<GraduationCap className="w-6 h-6" />} label="In progress" value={Math.max(enrollments.length - completedCount, 0)} />
          </div>

          <h2 className="text-xl font-bold text-blue-900 mb-4">My courses</h2>
          {isLoading ? (
            <p className="text-blue-500 py-8">Loading…</p>
          ) : enrollments.length === 0 ? (
            <div className="glass-card-light p-10 text-center">
              <p className="text-blue-700 mb-4">You haven't enrolled in any courses yet.</p>
              <Link to="/courses"><Button className="premium-button">Browse courses</Button></Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {enrollments.map((enr) => {
                const item = getCatalogItem(enr.course_id);
                if (!item) return null;
                const Icon = getCourseIcon(item.icon);
                const total = getCourseModules(enr.course_id, enr.level).length;
                const prog = progress.find((p) => p.course_id === enr.course_id && p.level === enr.level);
                const done = prog?.completed_modules.length ?? 0;
                const pct = total ? Math.round((done / total) * 100) : 0;
                return (
                  <div key={enr.id} className="glass-card-light p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-blue-900 truncate">{enr.course_title ?? item.certificateTitle}</h3>
                        <span className="text-xs font-semibold text-purple-600 capitalize">{enr.level}</span>
                      </div>
                    </div>
                    <Progress value={pct} className="h-2 mb-2" />
                    <p className="text-xs text-blue-500 mb-4">{done}/{total} modules · {pct}%</p>
                    <Link to="/learn/$courseId/$level" params={{ courseId: enr.course_id, level: enr.level }}>
                      <Button className="premium-button w-full">
                        {prog?.is_completed ? "Review" : "Continue"} <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="glass-card-light p-6 flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 flex items-center justify-center">{icon}</div>
      <div>
        <div className="text-2xl font-black text-blue-900">{value}</div>
        <div className="text-sm text-blue-600">{label}</div>
      </div>
    </div>
  );
}