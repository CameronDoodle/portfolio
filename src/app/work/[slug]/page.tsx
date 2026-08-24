import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MediaBlock } from "@/components/media-block";
import { disciplineColors, getWork, works } from "@/content/works";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return { title: "Work" };
  return { title: work.title, description: work.summary };
}

export default async function WorkCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-6xl px-4 pt-28 pb-8 sm:px-6">
        <div className="relative aspect-[16/9] overflow-hidden border-[3px] border-ink bg-white hard-shadow-magenta sm:aspect-[2/1]">
          <Image
            src={work.cover}
            alt={work.coverAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {work.disciplines.map((d) => {
            const color = disciplineColors[d];
            return (
              <Badge
                key={d}
                variant="outline"
                className={cn(
                  "h-auto rounded-none border-[3px] border-ink px-2 py-1 font-heading text-[10px] uppercase",
                  color.fill,
                  color.text
                )}
              >
                {d}
              </Badge>
            );
          })}
        </div>
        <h1 className="mt-4 text-3xl sm:text-5xl">{work.title}</h1>
        <p className="mt-3 text-grey">
          {work.role} · {work.year}
        </p>
      </section>

      <article className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_240px]">
        <div>
          <p className="text-xl text-ink">{work.summary}</p>
          <dl className="mt-10 space-y-8">
            <div className="border-[3px] border-ink bg-white p-4 hard-shadow-cyan">
              <dt className="font-heading text-[10px] text-magenta uppercase">
                Problem
              </dt>
              <dd className="mt-2 text-grey">{work.problem}</dd>
            </div>
            <div className="border-[3px] border-ink bg-white p-4 hard-shadow-yellow">
              <dt className="font-heading text-[10px] text-ink uppercase">
                What I made
              </dt>
              <dd className="mt-2 text-grey">{work.made}</dd>
            </div>
            <div className="border-[3px] border-ink bg-white p-4 hard-shadow-red">
              <dt className="font-heading text-[10px] text-flash-red uppercase">
                Outcome
              </dt>
              <dd className="mt-2 text-grey">{work.outcome}</dd>
            </div>
          </dl>
          <div className="mt-12 flex flex-col gap-8">
            {work.media.map((media, i) => (
              <MediaBlock key={i} media={media} />
            ))}
          </div>
        </div>
        <aside className="space-y-6 border-[3px] border-ink bg-white p-4 hard-shadow lg:pt-4">
          <div>
            <p className="font-heading text-[10px] text-magenta uppercase">
              Tools
            </p>
            <ul className="mt-3 space-y-1 text-sm text-grey">
              {work.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
          {work.links.length > 0 ? (
            <div>
              <p className="font-heading text-[10px] text-cyan uppercase">
                Links
              </p>
              <ul className="mt-3 space-y-2">
                {work.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-ink underline decoration-magenta decoration-2 underline-offset-4 hover:text-magenta"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <Button variant="outline" render={<Link href="/work" />}>
            All work
          </Button>
        </aside>
      </article>
    </main>
  );
}
