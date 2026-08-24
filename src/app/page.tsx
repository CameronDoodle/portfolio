import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WorkCard } from "@/components/work-card";
import { site } from "@/content/site";
import { getFeaturedWorks } from "@/content/works";

export default function Home() {
  const featured = getFeaturedWorks();
  const [lead, ...rest] = featured;

  return (
    <main className="flex-1">
      <section className="relative flex min-h-dvh flex-col justify-end overflow-hidden">
        {lead ? (
          <Image
            src={lead.cover}
            alt=""
            fill
            priority
            className="animate-ken object-cover"
            sizes="100vw"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/25" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-32 sm:px-6 sm:pb-24">
          <p className="animate-fade-up text-xs tracking-[0.28em] text-tungsten uppercase">
            Portfolio
          </p>
          <h1 className="animate-fade-up mt-4 max-w-3xl text-5xl leading-[1.05] text-foreground sm:text-7xl">
            {site.name}
          </h1>
          <p
            className="animate-fade-up mt-5 max-w-xl text-lg text-muted-foreground sm:text-xl"
            style={{ animationDelay: "80ms" }}
          >
            {site.role}
          </p>
          <p
            className="animate-fade-up mt-4 max-w-xl text-base text-muted-foreground/90"
            style={{ animationDelay: "140ms" }}
          >
            {site.tagline}
          </p>
          <div
            className="animate-fade-up mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "200ms" }}
          >
            <Button size="lg" render={<Link href="/work" />}>
              View work
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<a href={`mailto:${site.email}`} />}
            >
              Email for roles
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.24em] text-tungsten uppercase">
              Featured
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Selected work</h2>
          </div>
          <Button variant="ghost" render={<Link href="/work" />}>
            Full archive
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          {lead ? <WorkCard work={lead} large /> : null}
          <div className="grid gap-4 md:grid-cols-2">
            {rest.map((work) => (
              <WorkCard key={work.slug} work={work} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 sm:flex-row sm:items-end sm:justify-between sm:px-6">
          <div className="max-w-xl">
            <h2 className="text-3xl">Looking for a studio seat</h2>
            <p className="mt-3 text-muted-foreground">{site.bio}</p>
          </div>
          <Button size="lg" render={<Link href="/about" />}>
            About & contact
          </Button>
        </div>
      </section>
    </main>
  );
}
