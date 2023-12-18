// Components
import { Skeleton } from "@/components/ui/Skeleton";

// Types
import type { LoadingPlaceholderProps } from "@/types";

export function LoadingPlaceholder({
  elementsCount,
}: Readonly<LoadingPlaceholderProps>) {
  return (
    <div className="flex flex-col">
      {[...Array(elementsCount)].map((_, i) => (
        <div key={i} className="space-y-2 w-full mb-6 h-[100px]">
          <Skeleton className="h-12" />
          <Skeleton className="h-12" />
        </div>
      ))}
    </div>
  );
}
