import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ArrowLeft, CheckCircle2, Circle, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { SiteNavbar } from "@/components/site-navbar";
import { CourseContentBody } from "@/components/course-content";
import { QuizModule } from "@/components/quiz-module";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { getCatalogItem, loadCourseModules, getCourseTitle, type CourseLevel } from "@/lib/courses";

export const Route = createFileRoute("/_authenticated/learn/$courseId/$level")({
  loader: ({ params }) => {
    const item = getCatalogItem(params.courseId);
    if (!item || (params.level !== "certificate" && params.level !== "diploma")) throw notFound();
    return { item };
  },
  head: () => ({ meta: [{ title: "Learn | Edusanna" }] }),
  component: LearnPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-3">Course not found</h1>
      <Link to="/courses"><Button className="premium-button">Browse courses</Button></Link>
    </div>
  ),
});

function LearnPage() {
  const { item } = Route.useLoaderData();
  const { courseId, level } = Route.useParams();
  const lvl = level as CourseLevel;
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const title = getCourseTitle(item, lvl);
  const [active, setActive] = useState(0);

  const { data: modules = [], isLoading: modulesLoading } = useQuery({
    queryKey: ["course-modules", courseId, lvl],
    queryFn: () => loadCourseModules(courseId, lvl),
    staleTime: 10 * 60_000,
  });

  const { data: progress } = useQuery({
    queryKey: ["progress", user?.id, courseId, lvl],
    enabled: !!user,
    queryFn: async () => {
      const { data } = await supabase
        .from("course_progress")
        .select("completed_modules,is_completed")
        .eq("user_id", user!.id).eq("course_id", courseId).eq("level", lvl)
        .maybeSingle();
      return data;
    },
  });

  const completed = progress?.completed_modules ?? [];
  const currentModule = modules[active];
  const isModuleDone = currentModule ? completed.includes(currentModule.id) : false;
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    // jump to first incomplete module on load
    const firstIncomplete = modules.findIndex((m) => !(progress?.completed_modules ?? []).includes(m.id));
    if (firstIncomplete > 0) setActive(firstIncomplete);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  // Reset quiz view when switching modules
  useEffect(() => { setShowQuiz(false); }, [active]);

  const markComplete = async (moduleId: number) => {
    if (!user) return;
    const updated = Array.from(new Set([...completed, moduleId]));
    const allDone = modules.every((m) => updated.includes(m.id));
    const { error } = await supabase.from("course_progress").upsert(
      {
        user_id: user.id, course_id: courseId, level: lvl,
        completed_modules: updated, is_completed: allDone,
      },
      { onConflict: "user_id,course_id,level" },
    );
    if (error) { toast.error(error.message); return; }
    queryClient.invalidateQueries({ queryKey: ["progress", user.id, courseId, lvl] });
    queryClient.invalidateQueries({ queryKey: ["dashboard", user.id] });
    if (allDone) {
      toast.success("🎉 Course complete! You can now request your credential.");
    } else {
      toast.success("Module complete!");
      if (active < modules.length - 1) setActive((a) => a + 1);
    }
  };

  const pct = modules.length ? Math.round((completed.length / modules.length) * 100) : 0;

  return (
    <div className="min-h-screen">
      <SiteNavbar />
      <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
          {/* Sidebar */}
          <aside className="glass-card-light p-5 h-fit lg:sticky lg:top-24">
            <Link to="/course/$id" params={{ id: courseId }} className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mb-4">
              <ArrowLeft className="w-4 h-4 mr-1" /> Course details
            </Link>
            <h2 className="font-bold text-blue-900 leading-snug mb-1">{title}</h2>
            <p className="text-xs text-purple-600 capitalize mb-3">{lvl} · {pct}% complete</p>
            <div className="h-2 rounded-full bg-blue-100 mb-4 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600" style={{ width: `${pct}%` }} />
            </div>
            <nav className="space-y-1">
              {modules.map((m, i) => {
                const done = completed.includes(m.id);
                return (
                  <button
                    key={m.id}
                    onClick={() => setActive(i)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition ${active === i ? "bg-blue-100 text-blue-900 font-semibold" : "text-blue-700 hover:bg-blue-50"}`}
                  >
                    {done ? <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" /> : <Circle className="w-4 h-4 text-blue-300 flex-shrink-0" />}
                    <span className="truncate">{m.title}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Content */}
          <main className="glass-card-light p-6 sm:p-10 min-w-0">
            {modulesLoading && (
              <div className="py-20 text-center text-blue-500">Loading course content…</div>
            )}
            {!modulesLoading && currentModule && (
              <>
                <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">Module {active + 1} of {modules.length}</span>
                <h1 className="text-2xl sm:text-3xl font-black text-blue-900 mt-1 mb-6">{currentModule.title}</h1>

                <article className="max-w-none">
                  <CourseContentBody content={currentModule.content} />
                </article>

                {currentModule.quiz?.length && currentModule.quiz[0] ? (
                  <div className="mt-10">
                    <h2 className="text-xl font-bold text-blue-900 mb-4">Knowledge check</h2>
                    {isModuleDone ? (
                      <div className="rounded-xl bg-green-50 text-green-800 p-5 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" /> You've passed this module's quiz.
                      </div>
                    ) : (
                      <QuizModule questions={currentModule.quiz} onPassed={() => markComplete(currentModule.id)} />
                    )}
                  </div>
                ) : (
                  <div className="mt-10">
                    {isModuleDone ? (
                      <div className="rounded-xl bg-green-50 text-green-800 p-5 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" /> Module completed.
                      </div>
                    ) : (
                      <Button onClick={() => markComplete(currentModule.id)} className="premium-button py-3">
                        Mark module complete
                      </Button>
                    )}
                  </div>
                )}

                {progress?.is_completed && (
                  <div className="mt-10 rounded-2xl hero-gradient-premium p-8 text-center">
                    <Trophy className="w-12 h-12 text-white mx-auto mb-3" />
                    <h3 className="text-2xl font-black text-white mb-2">Course complete!</h3>
                    <p className="text-blue-50 mb-4">Great work. Credential payments &amp; downloads are coming soon.</p>
                    <Link to="/dashboard"><Button className="bg-white text-blue-700 hover:bg-blue-50 font-bold">Back to dashboard</Button></Link>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}