"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/cx";

type PhotoItem = {
  src: string;
  alt: string;
  label: string;
  description: string;
  category: "work" | "intern" | "competition" | "other";
};

const photos: PhotoItem[] = [
  {
    src: "/gallery/work-1.jpg",
    alt: "Working on a project",
    label: "Software Engineer",
    description:
      "Building scalable backend services and creating seamless user experiences at my current role.",
    category: "work",
  },
  {
    src: "/gallery/hackathon-1.jpg",
    alt: "Hackathon team",
    label: "Hackathon Winner",
    description:
      "Won 1st place at a national hackathon — built a full-stack app in 24 hours with an amazing team.",
    category: "competition",
  },
  {
    src: "/gallery/intern-1.jpg",
    alt: "Internship",
    label: "Software Engineer Intern",
    description:
      "My first internship experience — diving deep into production codebases and shipping real features.",
    category: "intern",
  },
  {
    src: "/gallery/competition-1.jpg",
    alt: "Coding competition",
    label: "Competitive Programming",
    description:
      "Competing in algorithmic programming contests, sharpening problem-solving skills.",
    category: "competition",
  },
  {
    src: "/gallery/work-2.jpg",
    alt: "Team collaboration",
    label: "Team Collaboration",
    description:
      "Working closely with cross-functional teams to deliver impactful products.",
    category: "work",
  },
  {
    src: "/gallery/hackathon-2.jpg",
    alt: "Hackathon presentation",
    label: "Hackathon Demo Day",
    description:
      "Presenting our solution to a panel of judges and industry professionals.",
    category: "competition",
  },
];

const categoryColors: Record<PhotoItem["category"], string> = {
  work: "bg-blue-500",
  intern: "bg-emerald-500",
  competition: "bg-amber-500",
  other: "bg-purple-500",
};

const categoryLabels: Record<PhotoItem["category"], string> = {
  work: "Work",
  intern: "Internship",
  competition: "Competition",
  other: "Other",
};

export default function PhotoGrid() {
  const [selected, setSelected] = useState<PhotoItem | null>(null);

  return (
    <section id="milestones" className="w-full py-20 px-4 md:px-8 bg-background relative scroll-mt-16">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-12 text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Moments &amp; Milestones
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          A glimpse into my journey — work, internships, hackathons, and
          everything in between.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-6xl mx-auto columns-2 md:columns-3 gap-4 space-y-4">
        {photos.map((photo, idx) => (
          <PhotoCard
            key={idx}
            photo={photo}
            index={idx}
            onClick={() => setSelected(photo)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-card rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <div className="relative w-full aspect-[4/3] bg-muted">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
            <div className="p-6 space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "inline-block w-2.5 h-2.5 rounded-full",
                    categoryColors[selected.category]
                  )}
                />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {categoryLabels[selected.category]}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">
                {selected.label}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function PhotoCard({
  photo,
  index,
  onClick,
}: {
  photo: PhotoItem;
  index: number;
  onClick: () => void;
}) {
  // Vary aspect ratios for the masonry effect
  const aspects = [
    "aspect-[3/4]",
    "aspect-[4/3]",
    "aspect-[1/1]",
    "aspect-[3/4]",
    "aspect-[4/5]",
    "aspect-[4/3]",
  ];
  const aspect = aspects[index % aspects.length];

  return (
    <div
      className={cn(
        "group relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer",
        "ring-1 ring-border/50 hover:ring-primary/30 transition-all duration-300",
        aspect
      )}
      onClick={onClick}
    >
      {/* Image */}
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 33vw"
      />

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Category dot */}
      <div className="absolute top-3 left-3">
        <span
          className={cn(
            "inline-block w-2.5 h-2.5 rounded-full ring-2 ring-white/50",
            categoryColors[photo.category]
          )}
        />
      </div>

      {/* Info on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white font-semibold text-sm md:text-base leading-snug">
          {photo.label}
        </p>
        <p className="text-white/70 text-xs md:text-sm mt-1 line-clamp-2">
          {photo.description}
        </p>
      </div>
    </div>
  );
}
