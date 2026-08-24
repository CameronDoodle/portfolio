import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-4 py-32 text-center">
      <p className="text-xs tracking-[0.24em] text-tungsten uppercase">404</p>
      <h1 className="mt-3 text-4xl">That page is not in the archive</h1>
      <p className="mt-3 text-muted-foreground">
        The work may have moved, or the link is unfinished.
      </p>
      <div className="mt-8 flex justify-center">
        <Button render={<Link href="/work" />}>Back to work</Button>
      </div>
    </main>
  );
}
