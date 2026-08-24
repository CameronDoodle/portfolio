"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
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
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="sm:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="bg-background">
            <SheetHeader>
              <SheetTitle
                style={{ fontFamily: "var(--font-heading)" }}
                className="text-left font-normal"
              >
                {site.name}
              </SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-3 px-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg text-muted-foreground hover:text-foreground"
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
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
