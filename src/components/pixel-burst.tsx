import { cn } from "@/lib/utils";

const tiles = [
  "bg-magenta",
  "bg-cyan",
  "bg-flash-yellow",
  "bg-flash-red",
  "bg-white",
  "bg-grey",
  "bg-cyan",
  "bg-magenta",
  "bg-flash-red",
  "bg-flash-yellow",
  "bg-black",
  "bg-white",
  "bg-magenta",
  "bg-grey",
  "bg-cyan",
  "bg-flash-yellow",
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
