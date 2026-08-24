import { BrandName } from "@/components/brand-name";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t-[3px] border-ink bg-background">
      <div className="h-2 w-full bg-[repeating-linear-gradient(90deg,#01befe_0_24px,#ffdd00_24px_48px,#ff7d00_48px_72px,#ff006d_72px_96px,#adff02_96px_120px,#8f00ff_120px_144px)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-grey sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          <BrandName className="text-sm" />
          <span className="text-grey"> · {site.location}</span>
        </p>
        <div className="flex flex-wrap gap-5">
          <a className="text-ink hover:text-punch" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="hover:text-electric" href={site.links.youtube}>
            YouTube
          </a>
          <a className="hover:text-lime" href={site.links.itch}>
            itch.io
          </a>
          <a className="hover:text-violet" href={site.links.github}>
            GitHub
          </a>
          <a className="hover:text-blaze" href={site.links.linkedin}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
