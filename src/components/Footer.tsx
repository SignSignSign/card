import { ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'

/** 页脚：版权信息与返回顶部 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-stone-900/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-xs text-stone-400 sm:flex-row sm:px-8">
        <p>
          © {year} {profile.name}. 保留所有权利。
        </p>

        <div className="flex items-center gap-5">
          <p>Built with React · TypeScript · Tailwind CSS</p>
          <a
            href="#home"
            className="inline-flex items-center gap-1 text-stone-500 transition hover:text-stone-800"
          >
            回到顶部
            <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
