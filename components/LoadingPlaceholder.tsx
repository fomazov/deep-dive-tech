// Components
import { Skeleton } from "@/components/ui/Skeleton";

// Types
import type { LoadingPlaceholderProps } from "@/types";

export function LoadingPlaceholder({ elementsCount }: LoadingPlaceholderProps) {
  return [...Array(elementsCount)].map((_, i) => (
    <div key={i} className="space-y-2 w-full mb-6">
      <Skeleton className="h-4" />
      <Skeleton className="h-4" />
    </div>
  ));
}
