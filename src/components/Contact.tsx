import { ArrowUpRight, AtSign, BookOpen, Github, GraduationCap, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

/** 社交平台图标映射 */
const socialIcons: Record<string, LucideIcon> = {
  github: Github,
  juejin: BookOpen,
  x: AtSign,
}

/** 联系方式：邮箱与社交账号，均可点击跳转 */
export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-stone-900/10 bg-linear-to-br from-white/85 via-white/60 to-indigo-100/40 px-6 py-10 shadow-xl shadow-stone-200/40 sm:px-10 sm:py-14">
            <div
              className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-indigo-200/40 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-32 -right-16 size-80 rounded-full bg-rose-200/35 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
              <div>
                <SectionHeading
                  eyebrow="联系方式"
                  title="有想法？欢迎和我聊聊。"
                  description="无论是实习机会、课程交流，还是单纯想聊聊前端，我的收件箱都随时敞开。"
                />

                <a
                  href={`mailto:${profile.email}`}
                  className="group mt-8 inline-flex max-w-full items-center gap-2.5 rounded-full bg-linear-to-r from-indigo-500 to-violet-500 px-5 py-3.5 text-sm font-medium text-white shadow-lg shadow-indigo-200/80 transition hover:brightness-105"
                >
                  <Mail className="size-4 shrink-0" />
                  <span className="truncate">{profile.email}</span>
                  <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <p className="mt-5 flex items-center gap-2 text-xs text-stone-400">
                  <GraduationCap className="size-3.5" />
                  {profile.location}
                </p>
              </div>

              <div className="grid gap-3">
                {profile.socials.map((social) => {
                  const Icon = socialIcons[social.id] ?? AtSign
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex items-center gap-3 rounded-2xl border border-stone-200/80 bg-white/70 p-4 shadow-sm transition duration-300 hover:border-stone-300 hover:bg-white hover:shadow-md hover:shadow-stone-200/50"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-500 transition group-hover:text-stone-800">
                        <Icon className="size-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-medium text-stone-800">
                          {social.label}
                        </span>
                        <span className="block truncate text-xs text-stone-400">{social.handle}</span>
                      </span>
                      <ArrowUpRight className="size-4 shrink-0 text-stone-300 transition group-hover:text-stone-600" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
