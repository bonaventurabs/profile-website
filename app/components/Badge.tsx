import Link from 'next/link'
import Image from 'next/image'

function Badge({
  name,
  path,
  icon,
}: {
  name: string
  path: string
  icon?: string | JSX.Element
}) {
  return (
    <Link
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-baseline justify-end gap-1 rounded border border-neutral-200 bg-neutral-50 p-1 text-sm text-neutral-900 no-underline hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:border-neutral-600"
    >
      {icon && typeof icon === 'string' ? (
        <Image
          src={icon}
          alt={name}
          width={20}
          height={20}
          className="h-5 w-auto max-w-[30px] self-center"
        />
      ) : (
        icon
      )}
      {name}
    </Link>
  )
}

const NextJSBadge = () => (
  <Badge name="Next.js" path="https://nextjs.org/" icon="/next.js.svg" />
)

const TailwindCSSBadge = () => (
  <Badge
    name="Tailwind CSS"
    path="https://tailwindcss.com/"
    icon="/tailwindcss.svg"
  />
)

const TypescriptBadge = () => (
  <Badge
    name="TypeScript"
    path="https://www.typescriptlang.org/"
    icon="/typescript.svg"
  />
)

const JavascriptBadge = () => (
  <Badge
    name="JavaScript"
    path="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    icon="/javascript.svg"
  />
)

const GoBadge = () => (
  <Badge name="Go" path="https://go.dev/" icon="/golang-1.svg" />
)

const PythonBadge = () => (
  <Badge name="Python" path="https://www.python.org/" icon="/python.svg" />
)

const ReactBadge = () => (
  <Badge name="React" path="https://react.dev/" icon="/react.svg" />
)

const PostgresBadge = () => (
  <Badge
    name="PostgreSQL"
    path="https://www.postgresql.org/"
    icon="/postgresql.svg"
  />
)

const DockerBadge = () => (
  <Badge name="Docker" path="https://www.docker.com/" icon="/docker.svg" />
)

const FirebaseBadge = () => (
  <Badge
    name="Firebase"
    path="https://firebase.google.com/"
    icon="/firebase.svg"
  />
)

export default Badge
export {
  ReactBadge,
  NextJSBadge,
  TailwindCSSBadge,
  PythonBadge,
  TypescriptBadge,
  JavascriptBadge,
  GoBadge,
  PostgresBadge,
  DockerBadge,
  FirebaseBadge,
}
