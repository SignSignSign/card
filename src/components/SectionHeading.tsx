interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

/** 各模块统一的标题结构 */
export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <span className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-indigo-500 uppercase">
        <span className="h-px w-6 bg-linear-to-r from-indigo-400 to-violet-400" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-stone-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-stone-500">{description}</p>
      ) : null}
    </div>
  )
}
