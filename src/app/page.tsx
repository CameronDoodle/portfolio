import Link from "next/link";
import { BrandName } from "@/components/brand-name";
import { PixelBurst } from "@/components/pixel-burst";
import { Button } from "@/components/ui/button";
import { WorkCard } from "@/components/work-card";
import { site } from "@/content/site";
import { getFeaturedWorks } from "@/content/works";

export default function Home() {
  const featured = getFeaturedWorks();
  const [lead, ...rest] = featured;

  return (
    <main className="flex-1">
      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="animate-fade-up inline-block border-[3px] border-ink bg-flash-yellow px-2 py-1 font-heading text-[10px] uppercase sm:text-xs">
            Portfolio
          </p>
          <h1 className="animate-fade-up mt-5 text-4xl sm:text-6xl">
            <BrandName />
          </h1>
          <p
            className="animate-fade-up mt-5 max-w-xl text-lg text-ink sm:text-xl"
            style={{ animationDelay: "80ms" }}
          >
            {site.role}
          </p>
          <p
            className="animate-fade-up mt-4 max-w-xl text-base text-grey"
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
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -top-4 -left-4 size-10 border-[3px] border-ink bg-cyan" />
          <div className="absolute -right-3 -bottom-3 size-8 border-[3px] border-ink bg-flash-red" />
          <PixelBurst className="hard-shadow w-full" />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="inline-block border-[3px] border-ink bg-cyan px-2 py-1 font-heading text-[10px] uppercase">
              Featured
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl">Selected work</h2>
          </div>
          <Button variant="outline" render={<Link href="/work" />}>
            Full archive
          </Button>
        </div>
        <div className="flex flex-col gap-8">
          {lead ? <WorkCard work={lead} large /> : null}
          <div className="grid gap-8 md:grid-cols-2">
            {rest.map((work) => (
              <WorkCard key={work.slug} work={work} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-[3px] border-ink bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:flex-row sm:items-end sm:justify-between sm:px-6">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl">Looking for a studio seat</h2>
            <p className="mt-3 text-grey">{site.bio}</p>
          </div>
          <Button size="lg" variant="secondary" render={<Link href="/about" />}>
            About & contact
          </Button>
        </div>
      </section>
    </main>
  );
}
