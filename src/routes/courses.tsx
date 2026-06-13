import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { courseCatalog, courseCategories, searchCourses } from "@/lib/courses";
import { getCourseIcon } from "@/lib/course-icons";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "All Courses A-Z | Edusanna Online Learning" },
      { name: "description", content: "Browse 70+ free Edusanna courses from A to Z across technology, business, health, finance, agriculture and more. Earn a certificate or diploma." },
      { property: "og:title", content: "All Courses A-Z | Edusanna" },
      { property: "og:description", content: "Browse 70+ free certificate and diploma courses across many fields." },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const results = useMemo(() => searchCourses(query, category), [query, category]);
  const grouped = useMemo(() => {
    const map = new Map<string, typeof courseCatalog>();
    for (const c of results) {
      const arr = map.get(c.letter) ?? [];
      arr.push(c);
      map.set(c.letter, arr);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [results]);

  return (
    <div className="min-h-screen">
      <SiteNavbar />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">Explore All Courses</span>
          </h1>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto mb-8">
            {courseCatalog.length}+ courses A-Z. Learn free, then earn a Certificate ($12) or Diploma ($18).
          </p>

          <div className="relative max-w-xl mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses..."
              className="pl-12 h-12 rounded-xl border-blue-200 bg-white"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${!category ? "bg-blue-600 text-white" : "bg-white text-blue-700 border border-blue-200 hover:bg-blue-50"}`}
            >
              All
            </button>
            {courseCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${category === cat.id ? "bg-blue-600 text-white" : "bg-white text-blue-700 border border-blue-200 hover:bg-blue-50"}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {grouped.length === 0 && (
            <p className="text-center text-blue-600 py-16">No courses match your search.</p>
          )}
          {grouped.map(([letter, courses]) => (
            <div key={letter} className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white text-2xl font-black flex items-center justify-center">
                  {letter}
                </span>
                <div className="h-px flex-1 bg-blue-100" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => {
                  const Icon = getCourseIcon(course.icon);
                  return (
                    <Link key={course.id} to="/course/$id" params={{ id: course.id }} className="course-card p-6 block">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-blue-900 mb-1">{course.certificateTitle}</h3>
                      <p className="text-sm text-blue-500 mb-3">Diploma: {course.diplomaTitle}</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-700"><Clock className="w-3 h-3" /> 3hrs</span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">Certificate $12</span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700">Diploma $18</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}