import { cn } from "@/lib/utils";

const tiles = [
  "bg-electric",
  "bg-sun",
  "bg-blaze",
  "bg-punch",
  "bg-lime",
  "bg-violet",
  "bg-background",
  "bg-grey",
  "bg-punch",
  "bg-electric",
  "bg-lime",
  "bg-sun",
  "bg-violet",
  "bg-blaze",
  "bg-electric",
  "bg-punch",
];

export function PixelBurst({ className }: { className?: string }) {
  return (
    <div
      className={cn("grid grid-cols-4 border-[3px] border-ink", className)}
      aria-hidden
    >
      {tiles.map((tile, i) => (
        <div key={i} className={cn("aspect-square", tile)} />
      ))}
    </div>
  );
}
