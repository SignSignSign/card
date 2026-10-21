import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

/** 项目展示：响应式卡片网格 */
export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 border-t border-stone-900/5 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_top,rgba(167,139,250,0.14),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="项目"
            title="一些正在生长的作品"
            description="课堂练习与课余项目，从数据看板到小游戏，记录我持续学习前端的过程。"
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={0.06 + (index % 3) * 0.06}
              className="h-full"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
