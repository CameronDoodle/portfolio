import fs from "node:fs";
import path from "node:path";
import type { Work, WorkMedia } from "@/content/works";

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

export type ResolvedWork = Work & {
  cover: string | null;
};

function workDir(slug: string) {
  return path.join(process.cwd(), "public", "work", slug);
}

function publicSrc(slug: string, filename: string) {
  return `/work/${slug}/${filename.replaceAll("\\", "/")}`;
}

function isImageFile(filename: string) {
  return IMAGE_EXT.has(path.extname(filename).toLowerCase());
}

function isCoverName(filename: string) {
  return path.parse(filename).name.toLowerCase() === "cover";
}

function altFromFilename(filename: string, fallback: string) {
  const stem = path.parse(filename).name.replace(/^(\d+[-_.])+/g, "");
  const label = stem.replace(/[-_]+/g, " ").trim();
  if (!label || label.toLowerCase() === "cover") return fallback;
  return label.replace(/\b\w/g, (c) => c.toUpperCase());
}

function listImages(slug: string) {
  const dir = workDir(slug);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && isImageFile(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

export function attachProjectMedia(work: Work): ResolvedWork {
  const files = listImages(work.slug);
  const namedCover = files.find(isCoverName);
  const coverFile = namedCover ?? (files.length === 1 ? files[0] : null);
  const galleryFiles = files.filter((name) => name !== coverFile);

  const folderPhotos: WorkMedia[] = galleryFiles.map((name) => ({
    type: "image" as const,
    src: publicSrc(work.slug, name),
    alt: altFromFilename(name, work.coverAlt),
  }));

  return {
    ...work,
    cover: coverFile ? publicSrc(work.slug, coverFile) : null,
    media: [...folderPhotos, ...work.media],
  };
}
