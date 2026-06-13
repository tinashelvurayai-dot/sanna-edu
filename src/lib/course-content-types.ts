// Shared types for the full (long) course content that lives in the
// certificates / diplomas data files.
export interface CourseQuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface CourseContentModule {
  id: number;
  title: string;
  content: string;
  completed?: boolean;
  duration?: string;
  quiz?: CourseQuizQuestion[];
}

export interface CourseContent {
  id: string;
  title: string;
  description: string;
  duration: string;
  students?: number;
  rating?: number;
  modules: CourseContentModule[];
  finalExam?: CourseQuizQuestion[];
}