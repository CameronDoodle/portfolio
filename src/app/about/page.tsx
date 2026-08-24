import type { Metadata } from "next";
import { BrandName } from "@/components/brand-name";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { disciplineColors, disciplines } from "@/content/works";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: site.bio,
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 pt-28 pb-20 sm:px-6">
      <p className="inline-block border-[3px] border-ink bg-flash-red px-2 py-1 font-heading text-[10px] text-white uppercase">
        About
      </p>
      <h1 className="mt-4 text-3xl sm:text-5xl">
        <BrandName />
      </h1>
      <p className="mt-4 text-lg text-ink">{site.role}</p>
      <p className="mt-8 text-ink">{site.bio}</p>
      <div className="mt-6 space-y-4 text-grey">
        {site.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <h2 className="mt-12 text-xl">Disciplines</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {disciplines.map((d) => {
          const color = disciplineColors[d];
          return (
            <li
              key={d}
              className={cn(
                "border-[3px] border-ink px-4 py-3 font-heading text-xs hard-shadow",
                color.fill,
                color.text
              )}
            >
              {d}
            </li>
          );
        })}
      </ul>

      <h2 className="mt-12 text-xl">Contact</h2>
      <p className="mt-3 text-grey">
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
