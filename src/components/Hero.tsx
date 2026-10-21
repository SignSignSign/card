import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { profile } from '../data/profile'

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

/** 首页 Hero：个人定位、简介、头像与主要入口 */
export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative flex min-h-svh scroll-mt-24 items-center overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      {/* 浅色背景：柔和光晕与细网格 */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-linear-to-b from-indigo-50/80 via-ink to-ink" />
        <div className="absolute -top-48 left-1/2 h-[560px] w-[860px] max-w-[150vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.28),transparent_65%)] blur-2xl" />
        <div className="absolute -right-24 top-1/4 size-96 rounded-full bg-rose-200/35 blur-3xl" />
        <div className="absolute -left-24 bottom-16 size-80 rounded-full bg-sky-200/35 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(80,70,60,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(80,70,60,0.045)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 rounded-full border border-stone-900/10 bg-white/70 px-3.5 py-1.5 text-xs text-stone-600 shadow-sm backdrop-blur"
          >
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="mt-6 text-4xl font-semibold tracking-tight text-balance text-stone-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]"
          >
            你好，我是{profile.name}
            <span className="mt-2 block bg-linear-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
              把想法变成有温度的界面
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-base leading-8 text-stone-500"
          >
            {profile.intro}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-500 to-violet-500 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-indigo-200/80 transition hover:brightness-105"
            >
              查看我的项目
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-stone-900/10 bg-white/70 px-6 py-3.5 text-sm font-medium text-stone-700 shadow-sm backdrop-blur transition hover:border-stone-900/15 hover:bg-white hover:text-stone-900"
            >
              <Mail className="size-4" />
              与我联系
            </a>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-10 text-xs tracking-wide text-stone-400">
            React · TypeScript · Tailwind CSS · Framer Motion
          </motion.p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[360px]"
        >
          <div
            className="absolute -inset-6 rounded-[2.75rem] bg-linear-to-br from-indigo-300/40 via-violet-200/30 to-rose-200/25 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative rounded-[2rem] border border-stone-900/10 bg-white/70 p-2 shadow-2xl shadow-indigo-100/60 backdrop-blur-sm">
            <img
              src={profile.avatar}
              alt={`${profile.name} 的头像`}
              width={800}
              height={800}
              fetchPriority="high"
              decoding="async"
              className="aspect-square w-full rounded-[1.6rem] object-cover"
            />
            <div className="absolute inset-x-2 bottom-2 flex items-center justify-between rounded-2xl border border-stone-900/10 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-md">
              <div>
                <p className="text-sm font-medium text-stone-900">{profile.name}</p>
                <p className="text-xs text-stone-500">{profile.role}</p>
              </div>
              <span className="size-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
            </div>
          </div>

          <span className="absolute -left-3 top-8 hidden rounded-full border border-stone-900/10 bg-white/85 px-3 py-1.5 text-xs text-stone-600 shadow-sm backdrop-blur sm:block">
            React
          </span>
          <span className="absolute -right-3 top-1/2 hidden rounded-full border border-stone-900/10 bg-white/85 px-3 py-1.5 text-xs text-stone-600 shadow-sm backdrop-blur sm:block">
            TypeScript
          </span>
        </motion.div>
      </div>
    </section>
  )
}
