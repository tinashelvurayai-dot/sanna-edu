export interface User {
  id: string
  fullName: string
  email: string
  password: string
  mobileNumber: string
  country: string
  city: string
  createdAt: Date
  updatedAt: Date
}

export type CourseLevel = "certificate" | "diploma"

export interface Course {
  id: string
  title: string
  level: CourseLevel // certificate or diploma
  category: string
  description: string
  modules: Module[]
  logoUrl: string
  price: number // 12 for certificate, 18 for diploma
  duration: string
  prerequisites?: string[] // For diploma courses
  createdAt: Date
  certificateId?: string // For diploma courses, links to prerequisite certificate
  diplomaId?: string // For certificate courses, links to advanced diploma
}

export interface Module {
  id: string
  courseId: string
  title: string
  content: string
  order: number
  exercises: Exercise[]
}

export interface Exercise {
  id: string
  moduleId: string
  questions: Question[]
  timeLimit: number // in minutes
  passThreshold: number // percentage
}

export interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

export interface UserProgress {
  id: string
  userId: string
  courseId: string
  courseLevel: CourseLevel
  currentModule: number
  completedModules: number[]
  exerciseScores: { [moduleId: string]: number }
  examScore?: number
  finalGrade?: "distinction" | "merit" | "pass" // For diploma courses
  startDate: Date
  completionDate?: Date
  uniqueId?: string
  isHighlighted?: boolean
  certificateUrl?: string
}

export interface Exam {
  id: string
  courseId: string
  questions: Question[]
  timeLimit: number // in minutes
  passThreshold: number
}

export interface CourseCatalogItem {
  id: string
  letter: string
  certificateTitle: string
  diplomaTitle: string
  category: string
  icon: string
  color: string
}
