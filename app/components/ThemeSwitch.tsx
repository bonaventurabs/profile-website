'use client'

import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { Fragment } from 'react'
import { RiMoonFill } from 'react-icons/ri'
import { RiSunFill } from 'react-icons/ri'

const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <Switch
      checked={currentTheme === 'dark'}
      onChange={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      as={Fragment}
    >
      {({ checked }: { checked: boolean }) => (
        <button
          className={`${
            checked ? 'bg-gray-700' : 'bg-gray-200'
          } relative inline-flex h-6 w-[50px] items-center rounded-full border-2 border-gray-300 transition hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:hover:border-gray-500 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              checked ? 'translate-x-[26px]' : 'translate-x-0'
            } inline-block h-5 w-5 transform rounded-full bg-gray-50 p-0.5 shadow-sm transition dark:bg-gray-900`}
          >
            {checked ? (
              <RiMoonFill className="h-4 w-4 text-gray-50" />
            ) : (
              <RiSunFill className="h-4 w-4 text-yellow-500" />
            )}
          </span>
        </button>
      )}
    </Switch>
  )
}

export default ThemeSwitcher
