import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { site } from "@/content/site";
import { disciplines } from "@/content/works";

export const metadata: Metadata = {
  title: "About",
  description: site.bio,
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 pt-28 pb-20 sm:px-6">
      <p className="text-xs tracking-[0.24em] text-tungsten uppercase">About</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">{site.name}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{site.role}</p>
      <p className="mt-8 text-foreground/90">{site.bio}</p>
      <div className="mt-6 space-y-4 text-muted-foreground">
        {site.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <Separator className="my-12" />

      <h2 className="text-2xl">Disciplines</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {disciplines.map((d) => (
          <li
            key={d}
            className="border border-border/80 px-4 py-3 text-sm text-muted-foreground"
          >
            {d}
          </li>
        ))}
      </ul>

      <Separator className="my-12" />

      <h2 className="text-2xl">Contact</h2>
      <p className="mt-3 text-muted-foreground">
        For studio roles, send a note with the seat and a couple of pieces you
        want to talk about. CV on request.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button size="lg" render={<a href={`mailto:${site.email}`} />}>
          {site.email}
        </Button>
        <Button
          size="lg"
          variant="outline"
          render={<a href={site.links.linkedin} />}
        >
          LinkedIn
        </Button>
      </div>
    </main>
  );
}
