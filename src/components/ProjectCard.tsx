import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../types'

interface ProjectCardProps {
    project: Project
}

/** 单个项目卡片：截图、描述、技术栈与访问链接 */
export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-stone-300/80 hover:shadow-xl hover:shadow-stone-200/60">
            <div className="relative overflow-hidden border-b border-stone-100 bg-stone-100">
                <img
                    src={project.image}
                    alt={`${project.title} 项目截图`}
                    width={1200}
                    height={675}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-base font-semibold tracking-tight text-stone-900">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-500">{project.description}</p>

                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="技术栈">
                    {project.techStack.map((tech) => (
                        <li
                            key={tech}
                            className="rounded-md border border-stone-200 bg-stone-50 px-2 py-1 text-[11px] text-stone-500"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>

                <div className="mt-5 flex items-center gap-5 border-t border-stone-100 pt-4 text-xs">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 font-medium text-indigo-600 transition hover:text-indigo-500"
                    >
                        在线预览
                        <ExternalLink className="size-3.5" />
                    </a>
                    <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-stone-400 transition hover:text-stone-700"
                    >
                        <Github className="size-3.5" />
                        源码
                    </a>
                </div>
            </div>
        </article>
    )
}
