import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          {site.name} · {site.location}
        </p>
        <div className="flex flex-wrap gap-5">
          <a className="hover:text-foreground" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="hover:text-foreground" href={site.links.youtube}>
            YouTube
          </a>
          <a className="hover:text-foreground" href={site.links.itch}>
            itch.io
          </a>
          <a className="hover:text-foreground" href={site.links.github}>
            GitHub
          </a>
          <a className="hover:text-foreground" href={site.links.linkedin}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
