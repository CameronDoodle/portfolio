import { Suspense } from "react";
import type { Metadata } from "next";
import { WorkCard } from "@/components/work-card";
import { WorkFilters } from "@/components/work-filters";
import {
  getWorksByDiscipline,
  isDiscipline,
  type Discipline,
} from "@/content/works";
import { attachProjectMedia } from "@/lib/project-media";

export const metadata: Metadata = {
  title: "Work",
  description: "Games, art, music, hardware, and picture — archive.",
};

export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ d?: string }>;
}) {
  const { d } = await searchParams;
  const active: Discipline | undefined = d && isDiscipline(d) ? d : undefined;
  const items = getWorksByDiscipline(active).map(attachProjectMedia);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 pt-28 pb-20 sm:px-6">
      <p className="inline-block border-[3px] border-ink bg-punch px-2 py-1 font-heading text-[10px] text-white uppercase">
        Archive
      </p>
      <h1 className="mt-4 text-3xl sm:text-5xl">Work</h1>
      <p className="mt-3 max-w-xl text-grey">
        Filter by discipline. Video and hardware sit next to games because they
        are how the picture, trailers, and tools actually shipped.
      </p>
      <div className="mt-8">
        <Suspense>
          <WorkFilters active={active} />
        </Suspense>
      </div>
      {items.length === 0 ? (
        <p className="mt-16 border-[3px] border-dashed border-ink bg-background px-6 py-16 text-center text-grey">
          Nothing in {active} yet. Add a project in{" "}
          <code className="text-ink">src/content/works.ts</code>.
        </p>
      ) : (
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {items.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
      )}
    </main>
  );
}
