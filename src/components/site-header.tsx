"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BrandName } from "@/components/brand-name";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <div className="pointer-events-auto relative z-[60] border-b-[3px] border-ink bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="font-heading text-sm sm:text-base">
            <BrandName />
          </Link>
          <nav className="hidden items-center gap-2 sm:flex">
            {nav.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                size="sm"
                render={<Link href={item.href} />}
                className={cn(
                  pathname.startsWith(item.href) && "border-ink bg-cyan"
                )}
              >
                {item.label}
              </Button>
            ))}
            <Button size="sm" render={<a href={`mailto:${site.email}`} />}>
              Contact
            </Button>
          </nav>
          <Button
            variant="outline"
            size="icon"
            className="sm:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="pointer-events-auto sm:hidden">
          <button
            type="button"
            className="fixed inset-0 z-50 bg-white/80"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <nav className="fixed inset-x-0 top-[57px] z-50 border-b-[3px] border-ink bg-white px-4 py-6">
            <div className="flex flex-col gap-3">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-[3px] border-ink bg-flash-yellow px-3 py-2 font-heading text-sm"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`mailto:${site.email}`}
                className="border-[3px] border-ink bg-magenta px-3 py-2 font-heading text-sm"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
