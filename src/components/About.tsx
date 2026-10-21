import { Code2, Database, GraduationCap, Palette, Sparkles, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { profile } from '../data/profile'
import { skillCategories } from '../data/skills'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

/** 技能分类图标映射 */
const categoryIcons: Record<string, LucideIcon> = {
    frontend: Code2,
    ui: Palette,
    engineering: Wrench,
    backend: Database,
}

/** 关于我：个人介绍与技能列表 */
export function About() {
    return (
        <section id="about" className="relative scroll-mt-24 border-t border-stone-900/5 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
                <Reveal>
                    <SectionHeading
                        eyebrow="关于我"
                        title="在课堂之外，把想法做出来"
                        description="作为数字经济 2501 班的学生，我在课余时间持续练习前端开发，关注页面细节、交互体验与代码的可维护性。"
                    />
                </Reveal>

                <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
                    <Reveal delay={0.05}>
                        <div className="space-y-5 text-[15px] leading-8 text-stone-600">
                            {profile.about.map((paragraph) => (
                                <p key={paragraph.slice(0, 12)}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <span className="inline-flex items-center gap-2 rounded-full border border-stone-900/10 bg-white/70 px-3 py-1.5 text-xs text-stone-600 shadow-sm">
                                <GraduationCap className="size-3.5 text-indigo-500" />
                                {profile.location}
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-stone-900/10 bg-white/70 px-3 py-1.5 text-xs text-stone-600 shadow-sm">
                                <Sparkles className="size-3.5 text-violet-500" />
                                专注于 Web 交互与工程化
                            </span>
                        </div>
                    </Reveal>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {skillCategories.map((category, index) => {
                            const Icon = categoryIcons[category.id] ?? Code2
                            return (
                                <Reveal key={category.id} delay={0.08 + index * 0.06} className="h-full">
                                    <div className="h-full rounded-2xl border border-stone-900/10 bg-white/70 p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-stone-900/15 hover:bg-white hover:shadow-md hover:shadow-stone-200/60">
                                        <div className="flex size-10 items-center justify-center rounded-xl border border-indigo-500/15 bg-linear-to-br from-indigo-50 to-violet-50 text-indigo-500">
                                            <Icon className="size-5" />
                                        </div>
                                        <h3 className="mt-4 text-sm font-semibold text-stone-900">{category.title}</h3>
                                        <p className="mt-1.5 text-xs leading-relaxed text-stone-500">
                                            {category.description}
                                        </p>
                                        <ul className="mt-4 flex flex-wrap gap-1.5">
                                            {category.skills.map((skill) => (
                                                <li
                                                    key={skill}
                                                    className="rounded-md border border-stone-200 bg-white/80 px-2 py-1 text-[11px] text-stone-500"
                                                >
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Reveal>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
