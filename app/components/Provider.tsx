'use client'

import { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'

type Props = {
  children: string | React.JSX.Element | React.JSX.Element[] | React.ReactNode
}

const Provider = ({ children }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  )
}

export default Provider
