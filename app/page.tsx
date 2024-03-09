import Link from 'next/link'
import { GoBadge, NextJSBadge, PythonBadge } from './components/Badge'

export default function Home() {
  return (
    <section>
      <div className="rounded-2xl border-2 border-gray-300 bg-slate-100 p-6 dark:border-gray-600 dark:bg-neutral-950 lg:p-24 lg:px-36">
        <h1 className="text-md mb-8 text-3xl font-semibold tracking-wide text-gray-900 dark:text-gray-200">
          {`Hi, I'm Bagas `}{' '}
          <div className="inline-flex text-sm font-light">or</div>{' '}
          {` Navent 👋`}
        </h1>
        <p className="my-10 p-1 leading-8 text-gray-600 dark:text-gray-300">
          {`I'm a fresh graduate of Information System and Technology at `}
          <Link
            href="https://www.itb.ac.id/"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            Institut Teknologi Bandung
          </Link>
          .
          {` I am enthusiastic and highly motivated about learning
        technology, especially software engineering and data. I use several tools, such as `}
          <GoBadge />
          {`, `}
          <NextJSBadge />
          {`, and `}
          <PythonBadge />
          {`.`}
        </p>
      </div>
    </section>
  )
}
