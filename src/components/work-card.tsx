import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  disciplineColors,
  type Discipline,
  type Work,
} from "@/content/works";
import { cn } from "@/lib/utils";

const shadows: Record<Discipline, string> = {
  Games: "hard-shadow-magenta",
  Art: "hard-shadow-cyan",
  Music: "hard-shadow-yellow",
  Hardware: "hard-shadow-red",
  Video: "hard-shadow",
};

export function WorkCard({
  work,
  large = false,
}: {
  work: Work;
  large?: boolean;
}) {
  const lead = work.disciplines[0];
  const shadow = shadows[lead] ?? "hard-shadow";

  return (
    <Link
      href={`/work/${work.slug}`}
      className={cn(
        "group relative block overflow-hidden border-[3px] border-ink bg-white",
        shadow,
        large ? "aspect-[16/9] sm:aspect-[2/1]" : "aspect-[16/10]"
      )}
    >
      <Image
        src={work.cover}
        alt={work.coverAlt}
        fill
        sizes={large ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
        className="object-cover"
        priority={large}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-3 sm:p-4">
        <div className="flex flex-wrap gap-1.5">
          {work.disciplines.map((d) => {
            const color = disciplineColors[d];
            return (
              <Badge
                key={d}
                variant="outline"
                className={cn(
                  "h-auto rounded-none border-[2px] border-ink px-1.5 py-0.5 font-heading text-[9px] uppercase",
                  color.fill,
                  color.text
                )}
              >
                {d}
              </Badge>
            );
          })}
        </div>
        <h3
          className={cn(
            "text-ink",
            large ? "text-xl sm:text-3xl" : "text-lg sm:text-xl"
          )}
        >
          {work.title}
        </h3>
        <p className="text-xs text-grey sm:text-sm">
          {work.role} · {work.year}
        </p>
      </div>
    </Link>
  );
}
