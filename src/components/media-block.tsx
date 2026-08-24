import Image from "next/image";
import type { WorkMedia } from "@/content/works";

export function MediaBlock({ media }: { media: WorkMedia }) {
  if (media.type === "image") {
    return (
      <figure className="overflow-hidden border-[3px] border-ink bg-white hard-shadow-cyan">
        <div className="relative aspect-[16/10]">
          <Image
            src={media.src}
            alt={media.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
      </figure>
    );
  }

  if (media.type === "audio") {
    return (
      <figure className="border-[3px] border-ink bg-flash-yellow px-5 py-6 hard-shadow">
        <figcaption className="mb-3 font-heading text-xs text-ink">
          {media.title}
        </figcaption>
        <audio className="w-full" controls src={media.src} preload="metadata" />
      </figure>
    );
  }

  if (!media.id) return null;

  return (
    <figure className="overflow-hidden border-[3px] border-ink bg-white hard-shadow-magenta">
      <div className="relative aspect-video">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${media.id}`}
          title={media.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </figure>
  );
}
