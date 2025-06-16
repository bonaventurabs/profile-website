import Link from "next/link";
import Image from "next/image";
import { JSX } from "react";

function Badge({
  name,
  path,
  icon,
}: {
  name: string;
  path: string;
  icon?: string | JSX.Element;
}) {
  return (
    <Link
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-baseline justify-end gap-1 rounded border border-neutral-200 bg-neutral-50 p-1 text-sm text-neutral-900 no-underline hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:border-neutral-600"
    >
      {icon && typeof icon === "string" ? (
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
  );
}

// List of badges
const badgeList = [
  { name: "Next.js", path: "https://nextjs.org/", icon: "/next.js.svg" },
  {
    name: "Tailwind CSS",
    path: "https://tailwindcss.com/",
    icon: "/tailwindcss.svg",
  },
  {
    name: "TypeScript",
    path: "https://www.typescriptlang.org/",
    icon: "/typescript.svg",
  },
  {
    name: "JavaScript",
    path: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "/javascript.svg",
  },
  { name: "Go", path: "https://go.dev/", icon: "/golang-1.svg" },
  { name: "Python", path: "https://www.python.org/", icon: "/python.svg" },
  { name: "React", path: "https://react.dev/", icon: "/react.svg" },
  {
    name: "PostgreSQL",
    path: "https://www.postgresql.org/",
    icon: "/postgresql.svg",
  },
  { name: "Docker", path: "https://www.docker.com/", icon: "/docker.svg" },
  {
    name: "Firebase",
    path: "https://firebase.google.com/",
    icon: "/firebase.svg",
  },
];

// Dynamically generate and export badge components
const badgeComponents = badgeList.reduce((acc, badge) => {
  const componentName = `${badge.name.replace(/\s+/g, "")}Badge`;
  acc[componentName] = () => (
    <Badge name={badge.name} path={badge.path} icon={badge.icon} />
  );
  return acc;
}, {} as Record<string, () => JSX.Element>);

export default Badge;
export const {
  NextJSBadge,
  TailwindCSSBadge,
  TypescriptBadge,
  JavascriptBadge,
  GoBadge,
  PythonBadge,
  ReactBadge,
  PostgresBadge,
  DockerBadge,
  FirebaseBadge,
} = badgeComponents;
