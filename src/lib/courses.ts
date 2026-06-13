import { courseCatalog, courseCategories } from "./course-catalog";
import type { CourseCatalogItem } from "./course-types";
import type { CourseContent, CourseContentModule } from "./course-content-types";
import { certificateCourses } from "./lib/courses/lib/courses/certificates";
import { diplomaCourses } from "./lib/courses/lib/courses/diplomas";
import { getCertificateModules } from "./certificate-course-modules";
import { getDiplomaModules } from "./diploma-course-modules";
import { getCourseSkills } from "./course-skills";
import { courseContentMeta } from "./generated/course-content-meta";
import { courseContentLoaders } from "./generated/course-content-registry";

export type CourseLevel = "certificate" | "diploma";

export const PRICES: Record<CourseLevel, number> = {
  certificate: 12,
  diploma: 18,
};

export { courseCatalog, courseCategories };

export function getCatalogItem(id: string): CourseCatalogItem | undefined {
  return courseCatalog.find((c) => c.id === id);
}

export function getCourseTitle(item: CourseCatalogItem, level: CourseLevel): string {
  return level === "certificate" ? item.certificateTitle : item.diplomaTitle;
}

export function getCategory(id: string) {
  return courseCategories.find((c) => c.id === id);
}

/**
 * Lightweight course content (description, ratings, module outline) for a
 * course/level, sourced from the generated metadata. Module bodies and quizzes
 * are NOT included here - use {@link loadCourseModules} for the full content.
 * The imported library provides a single content set per course, so both the
 * certificate and diploma levels share it.
 */
export function getCourseContent(id: string, _level: CourseLevel): CourseContent | undefined {
  const meta = courseContentMeta[id];
  if (meta) {
    return {
      id,
      title: id,
      description: meta.description ?? "",
      duration: meta.duration ?? "",
      students: meta.students,
      rating: meta.rating,
      modules: meta.modules.map((m) => ({
        id: m.id,
        title: m.title,
        duration: m.duration,
        content: "",
        quiz: m.quizCount ? (Array.from({ length: m.quizCount }) as CourseContentModule["quiz"]) : undefined,
      })),
    };
  }
  const source = _level === "certificate" ? certificateCourses : diplomaCourses;
  return source[id];
}

/**
 * Returns the modules for a course. Uses the full pasted content when present,
 * otherwise falls back to generic module outlines so the platform stays usable
 * before the long course data is added.
 */
export function getCourseModules(id: string, level: CourseLevel): CourseContentModule[] {
  const content = getCourseContent(id, level);
  if (content?.modules?.length) return content.modules;

  const item = getCatalogItem(id);
  const title = item ? getCourseTitle(item, level) : id;
  const fallback = level === "certificate" ? getCertificateModules(title) : getDiplomaModules(title);
  return fallback.map((m, i) => ({
    id: i + 1,
    title: m.title,
    content: m.content,
    duration: m.duration,
  }));
}

/**
 * Loads the FULL module content (bodies + quizzes) for a course, lazily
 * importing the large content file only when needed (e.g. on the learn page).
 * Falls back to the generic module outline when no imported content exists.
 */
export async function loadCourseModules(id: string, level: CourseLevel): Promise<CourseContentModule[]> {
  const loader = courseContentLoaders[id];
  if (loader) {
    try {
      const content = await loader();
      if (content?.modules?.length) return content.modules;
    } catch {
      /* fall through to outline */
    }
  }
  return getCourseModules(id, level);
}

export function getSkills(id: string, title: string): string[] {
  return getCourseSkills(id, title).map((s) => s.name);
}

export function searchCourses(query: string, category: string | null): CourseCatalogItem[] {
  const q = query.trim().toLowerCase();
  return courseCatalog.filter((c) => {
    const matchesCategory = !category || c.category === category;
    const matchesQuery =
      !q ||
      c.certificateTitle.toLowerCase().includes(q) ||
      c.diplomaTitle.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });
}

export type { CourseCatalogItem, CourseContent, CourseContentModule };