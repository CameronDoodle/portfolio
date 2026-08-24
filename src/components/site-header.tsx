"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
      <div className="pointer-events-auto relative z-[60] mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <Link
          href="/"
          className="font-heading text-lg tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {site.name}
        </Link>
        <nav className="hidden items-center gap-1 sm:flex">
          {nav.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              size="sm"
              render={<Link href={item.href} />}
              className={cn(
                "text-muted-foreground",
                pathname.startsWith(item.href) && "text-foreground"
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
          variant="ghost"
          size="icon"
          className="sm:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open ? (
        <div className="pointer-events-auto sm:hidden">
          <button
            type="button"
            className="fixed inset-0 z-50 bg-background/80"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <nav className="fixed inset-x-0 top-16 z-50 border-t border-border bg-background px-4 py-6">
            <div className="flex flex-col gap-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg text-muted-foreground hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`mailto:${site.email}`}
                className="text-lg text-tungsten hover:underline"
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
