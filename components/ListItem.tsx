// Components
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/HoverCard";

// Types
import { ListItemProps } from "@/types";

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

const ListItem: React.FC<ListItemProps> = ({
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
        <CardContent>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button className="px-0" variant="link">
                ( hover here to see more )
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-full">
              <div className="flex flex-row">
                {[
                  { label: "Lifespan", value: lifespan },
                  { label: "Size", value: size },
                  { label: "Habitat", value: habitat },
                ].map(property => (
                  <PropertyItem key={`${id}-${property.label}`} {...property} />
                ))}
              </div>
            </HoverCardContent>
          </HoverCard>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default ListItem;
