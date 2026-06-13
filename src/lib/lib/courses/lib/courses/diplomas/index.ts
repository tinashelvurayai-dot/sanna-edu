// =============================================================================
// DIPLOMAS COURSE DATA (aggregator)
// -----------------------------------------------------------------------------
// The individual *-course-data.ts files in this folder hold the full diplomas
// course content imported from the source repo. They are kept out of the eager
// catalog bundle for performance and will be wired in via lazy-loading.
//
// `diplomaCourses` is the record consumed by src/lib/courses.ts, keyed by the
// course id used in course-catalog.ts. Add entries here as courses are wired.
// =============================================================================
import type { CourseContent } from "@/lib/course-content-types";

export const diplomaCourses: Record<string, CourseContent> = {};
