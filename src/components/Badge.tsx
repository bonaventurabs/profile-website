import Link from "next/link";
import Image from "next/image";
import React from "react";

type BadgeInfo = {
  name: string;
  path: string;
  icon?: string | React.ReactNode;
};

function Badge({ name, path, icon }: BadgeInfo) {
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
const badgeList: BadgeInfo[] = [
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

// Helper to normalize keys
const normalizeKey = (name: string) =>
  name.replace(/[\s\.\-]/g, "").toLowerCase();

// Build badge components and lookup
const badgeComponents: Record<string, React.FC> = {};
const badgeLookup: Record<string, React.ReactNode> = {};

badgeList.forEach((badge) => {
  const key = normalizeKey(badge.name);
  const Comp = () => <Badge {...badge} />;
  badgeComponents[`${key}badge`] = Comp;
  badgeLookup[key] = <Badge {...badge} />;
});

// Exported badge components (named)
export const {
  nextjsbadge: NextJSBadge,
  tailwindcssbadge: TailwindCSSBadge,
  typescriptbadge: TypescriptBadge,
  javascriptbadge: JavascriptBadge,
  gobadge: GoBadge,
  pythonbadge: PythonBadge,
  reactbadge: ReactBadge,
  postgresqlbadge: PostgresBadge,
  dockerbadge: DockerBadge,
  firebasebadge: FirebaseBadge,
} = badgeComponents;

// Lookup by key (case-insensitive, normalized)
export function getBadgeByKey(key: string): React.ReactNode {
  const normalized = normalizeKey(key);
  return badgeLookup[normalized] || <Badge name={key} path="#" />;
}

export default Badge;
