import type { Metadata } from "next";
import { Geist, Geist_Mono, Silkscreen } from "next/font/google";
import { GridTrail } from "@/components/grid-trail";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixel = Silkscreen({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
};

const themeBoot = `(function(){try{function apply(on){document.documentElement.classList.toggle('dark',on);if(document.body)document.body.classList.toggle('dark',on)}var d=localStorage.getItem('theme')==='dark';if(d)apply(true);document.addEventListener('DOMContentLoaded',function(){if(localStorage.getItem('theme')==='dark')apply(true)});document.addEventListener('click',function(e){var n=e.target;if(n&&n.nodeType!==1)n=n.parentElement;var t=n&&n.closest?n.closest('[data-theme-toggle]'):null;if(!t)return;var on=!document.documentElement.classList.contains('dark');apply(on);localStorage.setItem('theme',on?'dark':'light')})}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pixel.variable} pixel-grid flex min-h-full flex-col bg-background font-sans text-foreground`}
      >
        <GridTrail />
        <SiteHeader />
        <div className="relative z-[2] flex flex-1 flex-col">{children}</div>
        <div className="relative z-[2]">
          <SiteFooter />
        </div>
        <script src="/grid-trail.js" defer />
      </body>
    </html>
  );
}
