export interface Project {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  liveUrl: string
  sourceUrl: string
}

export interface SkillCategory {
  id: string
  title: string
  description: string
  skills: string[]
}
