/**
 * Returns module data for diploma courses
 * Fallback for when database is unavailable
 */

interface Module {
  id: string
  title: string
  content: string
  duration?: string
}

const diplomaModules: Record<string, Module[]> = {
  // Default fallback modules for any diploma
  'default': [
    { id: '1', title: 'Course Introduction', content: 'Welcome to this comprehensive diploma program. You will learn industry-standard practices and gain practical skills.' },
    { id: '2', title: 'Fundamentals', content: 'Master the foundational concepts and theories essential for success in this field.' },
    { id: '3', title: 'Core Principles', content: 'Deep dive into the core principles and best practices used by professionals.' },
    { id: '4', title: 'Advanced Topics', content: 'Explore advanced topics and cutting-edge techniques in the industry.' },
    { id: '5', title: 'Case Studies', content: 'Learn from real-world case studies and practical applications.' },
    { id: '6', title: 'Professional Practice', content: 'Develop professional skills and understand workplace requirements.' },
    { id: '7', title: 'Capstone Project', content: 'Complete a comprehensive capstone project demonstrating your knowledge.' },
    { id: '8', title: 'Final Assessment', content: 'Take the final examination to earn your diploma certificate.' },
  ]
}

export function getDiplomaModules(diplomaTitle: string): Module[] {
  // Try exact match first
  const modules = diplomaModules[diplomaTitle.toLowerCase()]
  
  // Return default if not found
  return modules || diplomaModules['default']
}

export function getDiplomaModuleCount(diplomaTitle: string): number {
  return getDiplomaModules(diplomaTitle).length
}
