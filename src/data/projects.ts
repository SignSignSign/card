import type { Project } from '../types'

/**
 * 项目作品数据
 * 新增或修改作品时，直接编辑此数组即可。
 * 截图资源放在 public/images 目录下，使用 `/images/文件名` 引用。
 */
export const projects: Project[] = [
  {
    id: 'nebula-analytics',
    title: 'Nebula Analytics',
    description:
      '面向运营团队的实时数据分析平台，支持多维度指标看板、图表联动与自定义报表导出。',
    image: '/images/project-nebula.svg',
    techStack: ['React', 'TypeScript', 'ECharts', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com/yangkeyi/nebula-analytics',
  },
  {
    id: 'devflow-ai',
    title: 'DevFlow AI',
    description:
      '集成 AI 对话与代码审查的开发者工作台，帮助团队快速定位问题、生成重构建议。',
    image: '/images/project-devflow.svg',
    techStack: ['React', 'TypeScript', 'Vite', 'Node.js'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com/yangkeyi/devflow-ai',
  },
  {
    id: 'starisle',
    title: '星屿 StarIsle',
    description:
      '以阅读为核心的轻量内容社区，提供沉浸式阅读、标签检索与作者主页等体验。',
    image: '/images/project-starisle.svg',
    techStack: ['Next.js', 'MDX', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com/yangkeyi/starisle',
  },
  {
    id: 'pixel-quest',
    title: 'PixelQuest',
    description:
      '使用 Canvas 打造的像素风横版冒险小游戏，包含关卡、敌人、音效与本地存档。',
    image: '/images/project-pixelquest.svg',
    techStack: ['Canvas', 'TypeScript', 'Web Audio', 'Vite'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com/yangkeyi/pixelquest',
  },
  {
    id: 'cloud-vault',
    title: 'CloudVault',
    description:
      '面向小团队的云文件管理界面，提供文件网格、拖拽上传、容量统计与分享管理。',
    image: '/images/project-cloudvault.svg',
    techStack: ['React', 'Zustand', 'Supabase', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com/yangkeyi/cloudvault',
  },
  {
    id: 'fit-pulse',
    title: 'FitPulse',
    description:
      '聚合每日运动数据的 PWA 应用，通过可视化图表与目标提醒帮助用户保持运动节奏。',
    image: '/images/project-fitpulse.svg',
    techStack: ['React', 'Recharts', 'PWA', 'TypeScript'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com/yangkeyi/fitpulse',
  },
]
