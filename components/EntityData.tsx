// Components
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";

// Types
import { EntityDataProps } from "@/types";

const EntityData: React.FC<EntityDataProps> = ({ creature }) => {
  return (
    <Card className="mb-3">
      <CardHeader>
        <CardTitle>{creature.species}</CardTitle>
      </CardHeader>
    </Card>
  );
};
export default EntityData;
