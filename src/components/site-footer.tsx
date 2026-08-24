import { BrandName } from "@/components/brand-name";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t-[3px] border-ink bg-white">
      <div className="h-2 w-full bg-[repeating-linear-gradient(90deg,#ff2bd6_0_24px,#00e5ff_24px_48px,#ffe600_48px_72px,#ff3b30_72px_96px)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-grey sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          <BrandName className="text-sm" />
          <span className="text-grey"> · {site.location}</span>
        </p>
        <div className="flex flex-wrap gap-5">
          <a className="text-ink hover:text-magenta" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="hover:text-magenta" href={site.links.youtube}>
            YouTube
          </a>
          <a className="hover:text-cyan" href={site.links.itch}>
            itch.io
          </a>
          <a className="hover:text-flash-red" href={site.links.github}>
            GitHub
          </a>
          <a className="hover:text-magenta" href={site.links.linkedin}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
