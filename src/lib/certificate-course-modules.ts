/**
 * Returns module data for certificate courses
 * Fallback for when database is unavailable
 */

interface Module {
  id: string
  title: string
  content: string
  duration?: string
}

const certificateModules: Record<string, Module[]> = {
  // Default fallback modules for any certificate
  'default': [
    { id: '1', title: 'Getting Started', content: 'Introduction to the course and overview of learning objectives.' },
    { id: '2', title: 'Module 1: Foundations', content: 'Learn the essential foundations and key concepts in this subject.' },
    { id: '3', title: 'Module 2: Core Skills', content: 'Develop core practical skills used in the industry.' },
    { id: '4', title: 'Module 3: Advanced Concepts', content: 'Explore more advanced topics and specialized knowledge.' },
    { id: '5', title: 'Module 4: Practical Applications', content: 'Apply your knowledge to real-world scenarios and problems.' },
    { id: '6', title: 'Final Project', content: 'Complete a final project demonstrating your competency.' },
  ]
}

export function getCertificateModules(certificateTitle: string): Module[] {
  // Try exact match first
  const modules = certificateModules[certificateTitle.toLowerCase()]
  
  // Return default if not found
  return modules || certificateModules['default']
}

export function getCertificateModuleCount(certificateTitle: string): number {
  return getCertificateModules(certificateTitle).length
}
