// Components
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function EntityData() {
  return (
    <Card className="mb-3">
      <CardHeader>
        <CardTitle>Data Set Name</CardTitle>
        <CardDescription>Data Set Content</CardDescription>
      </CardHeader>
    </Card>
  );
}
