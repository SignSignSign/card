import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

interface NavItem {
  id: string
  label: string
}

const navItems: NavItem[] = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于我' },
  { id: 'projects', label: '项目' },
  { id: 'contact', label: '联系' },
]

/** 顶部固定导航栏，支持平滑跳转、滚动高亮与移动端菜单 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // 滚动一定距离后为导航栏添加背景与边框
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 通过 IntersectionObserver 实现当前模块高亮
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const goToSection = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || menuOpen
          ? 'border-b border-stone-900/5 bg-ink/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
        }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <button
          type="button"
          onClick={() => goToSection('home')}
          className="group flex items-center gap-3 text-left"
          aria-label="返回首页"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-linear-to-br from-indigo-400 to-violet-400 text-sm font-semibold text-white shadow-lg shadow-indigo-200/70">
            YK
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold tracking-tight text-stone-900">
              {profile.name}
            </span>
            <span className="block text-[11px] text-stone-500">{profile.role}</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="页面模块导航">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSection(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${isActive ? 'text-stone-900' : 'text-stone-500 hover:text-stone-900'
                  }`}
              >
                {item.label}
                {isActive ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-linear-to-r from-indigo-400 to-violet-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                ) : null}
              </button>
            )
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex size-10 items-center justify-center rounded-xl border border-stone-900/10 bg-white/70 text-stone-600 shadow-sm transition hover:bg-white md:hidden"
          aria-label={menuOpen ? '关闭导航菜单' : '打开导航菜单'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-stone-900/5 md:hidden"
          >
            <nav className="mx-auto max-w-6xl px-5 py-4 sm:px-8" aria-label="移动端页面模块导航">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSection(item.id)}
                  className={`block w-full rounded-xl px-3 py-3 text-left text-sm transition-colors ${activeSection === item.id
                      ? 'bg-white text-stone-900 shadow-sm'
                      : 'text-stone-500 hover:bg-white/60 hover:text-stone-900'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
