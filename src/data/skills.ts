import type { SkillCategory } from '../types'

/**
 * 技能数据
 * 按类别组织，新增技能时直接编辑对应分类的 skills 数组。
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: '前端核心',
    description: '构建稳定、可维护的现代 Web 应用',
    skills: ['React', 'TypeScript', 'JavaScript ES6+', 'Next.js', 'Vue 3', 'React Router'],
  },
  {
    id: 'ui',
    title: '样式与交互',
    description: '用克制的设计语言打磨使用体验',
    skills: ['Tailwind CSS', 'Framer Motion', 'CSS Animation', '响应式设计', 'Figma'],
  },
  {
    id: 'engineering',
    title: '工程化',
    description: '让项目在协作中保持清晰与高效',
    skills: ['Vite', 'Webpack', 'ESLint', 'Git', 'GitHub Actions', 'Vitest'],
  },
  {
    id: 'backend',
    title: '其他能力',
    description: '打通从界面到数据的完整链路',
    skills: ['Node.js', 'REST API', 'Supabase', 'MySQL', 'Docker'],
  },
]
