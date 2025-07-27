'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Efter Jahan Ema</h1>
        <div className="space-x-6">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`hover:underline ${
                pathname === href ? 'underline font-semibold' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
