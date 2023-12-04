// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EntityData from "@/components/entity-data";

export default function Home() {
  const renderList = (elementsNumber: number) => {
    return [...Array(elementsNumber)].map((_, i) => <EntityData key={i} />);
  };

  return (
    <main className="flex flex-1 flex-col m-auto max-w-2xl w-full items-left justify-between">
      <Tabs defaultValue="people" className="w-full">
        <TabsList className="mb-5">
          <TabsTrigger value="people">People</TabsTrigger>
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
        </TabsList>
        <TabsContent value="people">{renderList(10)}</TabsContent>
        <TabsContent value="posts">{renderList(30)}</TabsContent>
        <TabsContent value="comments">{renderList(50)}</TabsContent>
      </Tabs>
    </main>
  );
}
