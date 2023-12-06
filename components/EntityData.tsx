// Components
import { Button } from "@/components/ui/Button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/HoverCard";

// Types
import { EntityDataProps } from "@/types";

const PropertyItem: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div className="ml-8 grid grid-cols-[25px_1fr] items-start first:ml-0">
    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
    <div className="space-y-1">
      <p className="text-sm font-medium leading-none">{label}</p>
      <p className="text-sm text-muted-foreground">{value}</p>
    </div>
  </div>
);

const EntityData: React.FC<EntityDataProps> = ({
  id,
  habitat,
  lifespan,
  size,
  species,
}) => {
  if (!id) {
    return null;
  }

  return (
    <Card className="mb-3">
      <CardHeader>
        <CardTitle>{species}</CardTitle>
        <CardDescription>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button className="px-0" variant="link">
                #{id}
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-full">
              <div className="flex flex-row">
                {[
                  { label: "Lifespan", value: lifespan },
                  { label: "Size", value: size },
                  { label: "Habitat", value: habitat },
                ].map((property, index) => (
                  <PropertyItem key={index} {...property} />
                ))}
              </div>
            </HoverCardContent>
          </HoverCard>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default EntityData;
