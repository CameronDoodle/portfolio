import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MediaBlock } from "@/components/media-block";
import { getWork, works } from "@/content/works";

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
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src={work.cover}
          alt={work.coverAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-4 pb-12 pt-28 sm:px-6">
          <div className="flex flex-wrap gap-1.5">
            {work.disciplines.map((d) => (
              <Badge
                key={d}
                variant="outline"
                className="border-foreground/25 bg-background/40 backdrop-blur-sm"
              >
                {d}
              </Badge>
            ))}
          </div>
          <h1 className="mt-4 text-5xl sm:text-6xl">{work.title}</h1>
          <p className="mt-3 text-muted-foreground">
            {work.role} · {work.year}
          </p>
        </div>
      </section>

      <article className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_240px]">
        <div>
          <p className="text-xl text-foreground/90">{work.summary}</p>
          <dl className="mt-10 space-y-8">
            <div>
              <dt className="text-xs tracking-[0.2em] text-tungsten uppercase">
                Problem
              </dt>
              <dd className="mt-2 text-muted-foreground">{work.problem}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.2em] text-tungsten uppercase">
                What I made
              </dt>
              <dd className="mt-2 text-muted-foreground">{work.made}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.2em] text-tungsten uppercase">
                Outcome
              </dt>
              <dd className="mt-2 text-muted-foreground">{work.outcome}</dd>
            </div>
          </dl>
          <div className="mt-12 flex flex-col gap-6">
            {work.media.map((media, i) => (
              <MediaBlock key={i} media={media} />
            ))}
          </div>
        </div>
        <aside className="space-y-6 lg:pt-2">
          <div>
            <p className="text-xs tracking-[0.2em] text-tungsten uppercase">
              Tools
            </p>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              {work.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
          {work.links.length > 0 ? (
            <div>
              <p className="text-xs tracking-[0.2em] text-tungsten uppercase">
                Links
              </p>
              <ul className="mt-3 space-y-2">
                {work.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <Separator />
          <Button variant="outline" render={<Link href="/work" />}>
            All work
          </Button>
        </aside>
      </article>
    </main>
  );
}
