import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Work } from "@/content/works";
import { cn } from "@/lib/utils";

export function WorkCard({
  work,
  large = false,
}: {
  work: Work;
  large?: boolean;
}) {
  return (
    <Link
      href={`/work/${work.slug}`}
      className={cn(
        "group relative block overflow-hidden bg-card",
        large ? "aspect-[16/9] sm:aspect-[2/1]" : "aspect-[16/10]"
      )}
    >
      <Image
        src={work.cover}
        alt={work.coverAlt}
        fill
        sizes={large ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        priority={large}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4 sm:p-6">
        <div className="flex flex-wrap gap-1.5 opacity-90">
          {work.disciplines.map((d) => (
            <Badge
              key={d}
              variant="outline"
              className="border-foreground/20 bg-background/30 text-[10px] tracking-wide uppercase backdrop-blur-sm"
            >
              {d}
            </Badge>
          ))}
        </div>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3
              className={cn(
                "text-foreground",
                large ? "text-3xl sm:text-4xl" : "text-2xl"
              )}
            >
              {work.title}
            </h3>
            <p className="mt-1 max-w-xl text-sm text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-sm:opacity-100">
              {work.role} · {work.year}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
