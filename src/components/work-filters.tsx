"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { disciplines, type Discipline } from "@/content/works";
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
        className={cn(!active && "bg-tungsten text-primary-foreground")}
      >
        All
      </Button>
      {disciplines.map((d) => (
        <Button
          key={d}
          size="sm"
          variant={active === d ? "default" : "outline"}
          render={<Link href={hrefFor(d)} />}
        >
          {d}
        </Button>
      ))}
    </div>
  );
}
