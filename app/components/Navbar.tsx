'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { RiLinkedinFill } from 'react-icons/ri'
import { RiGithubFill } from 'react-icons/ri'
import cx from '@/utils/cx'
import ThemeSwitch from '@/components/ThemeSwitch'

const navItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Photography',
    path: '/photography',
  },
]

function NavItem({ path, name }: { path: string; name: string }) {
  const pathname = usePathname()
  const isActive = pathname === path

  return (
    <li>
      <Link
        key={path}
        href={path}
        className={cx(
          'align-middle font-medium text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200',
          {
            'text-neutral-800 dark:text-neutral-200': isActive,
          }
        )}
      >
        {name}
      </Link>
    </li>
  )
}

const Navbar = () => {
  return (
    <header className="sticky inset-x-0 z-10 pb-0 pt-4 shadow-md dark:shadow-neutral-950">
      <div className="container mx-auto mb-2 flex h-full max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="flex items-center justify-center gap-4  overflow-hidden"
        >
          <Image
            src="/images/profile.jpg"
            alt="Bonaventura Bagas"
            className="h-12 w-12 rounded-full object-cover"
            width={48}
            height={48}
          />
          <h2 className="overflow-auto whitespace-nowrap font-geist font-medium text-gray-700 dark:text-neutral-200">
            Bonaventura Bagas Sukarno
          </h2>
        </Link>
        <div className="flex items-center">
          <div className="hidden items-center gap-x-8 sm:flex">
            <Link
              href={process.env.LINKEDIN_URL ?? ''}
              rel="noopener noreferrer"
              target="_blank"
            >
              <RiLinkedinFill className="h-7 w-7 text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200" />
            </Link>
            <Link
              href={process.env.GITHUB_URL ?? ''}
              rel="noopener noreferrer"
              target="_blank"
            >
              <RiGithubFill className="h-7 w-7 text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200" />
            </Link>
          </div>
          <div className="ml-6 flex items-center border-l border-slate-300 pl-6 dark:border-slate-700">
            <ThemeSwitch />
          </div>
        </div>
      </div>
      <nav className="container mx-auto my-2 flex max-w-6xl items-center">
        <ul className="flex flex-row items-center justify-start gap-8 overflow-x-auto p-4  md:justify-center md:space-x-4">
          {navItems.map((item) => (
            <NavItem key={item.path} path={item.path} name={item.name} />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
