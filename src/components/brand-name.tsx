import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function BrandName({
  className,
  firstClassName,
  lastClassName,
}: {
  className?: string;
  firstClassName?: string;
  lastClassName?: string;
}) {
  return (
    <span className={cn("inline-flex flex-wrap gap-x-[0.35em]", className)}>
      <span className={cn("text-punch", firstClassName)}>{site.firstName}</span>
      <span className={cn("text-grey", lastClassName)}>{site.lastName}</span>
    </span>
  );
}
