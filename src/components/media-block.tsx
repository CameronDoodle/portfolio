import Image from "next/image";
import type { WorkMedia } from "@/content/works";

export function MediaBlock({ media }: { media: WorkMedia }) {
  if (media.type === "image") {
    return (
      <figure className="overflow-hidden bg-card">
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
      <figure className="border border-border bg-card px-5 py-6">
        <figcaption className="mb-3 text-sm text-muted-foreground">
          {media.title}
        </figcaption>
        <audio className="w-full" controls src={media.src} preload="metadata" />
      </figure>
    );
  }

  if (!media.id) return null;

  return (
    <figure className="overflow-hidden bg-card">
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
