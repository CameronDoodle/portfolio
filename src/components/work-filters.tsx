"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  disciplineColors,
  disciplines,
  type Discipline,
} from "@/content/works";
import { cn } from "@/lib/utils";

export function WorkFilters({ active }: { active?: Discipline }) {
  const pathname = usePathname();
  const params = useSearchParams();

  function hrefFor(next?: Discipline) {
    const nextParams = new URLSearchParams(params.toString());
    if (!next) nextParams.delete("d");
    else nextParams.set("d", next);
    const q = nextParams.toString();
    return q ? `${pathname}?${q}` : pathname;
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        size="sm"
        variant={!active ? "default" : "outline"}
        render={<Link href={hrefFor()} />}
      >
        All
      </Button>
      {disciplines.map((d) => {
        const color = disciplineColors[d];
        const on = active === d;
        return (
          <Button
            key={d}
            size="sm"
            variant="outline"
            render={<Link href={hrefFor(d)} />}
            className={cn(on && color.fill, on && color.text)}
          >
            {d}
          </Button>
        );
      })}
    </div>
  );
}
