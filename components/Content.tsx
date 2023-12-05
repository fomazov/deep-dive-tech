"use client";

// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import EntityData from "@/components/EntityData";
import { Key, useEffect } from "react";

// Actions
import { fetchCreatures } from "@/lib/store";

// Helpers
import { useDispatch, useSelector } from "@/lib/hooks";

// Types
import { Creature } from "@/types";

export default function Home() {
  const dispatch = useDispatch();
  const { data, status } = useSelector(({ creatures }) => creatures);

  useEffect(() => {
    dispatch(fetchCreatures());
  }, []);

  const renderCreatures = () => {
    return status === "loading"
      ? "loading..."
      : data?.map((creature: Creature, i: Key) => (
          <EntityData key={i} creature={creature} />
        ));
  };

  return (
    <Tabs defaultValue="people" className="w-full">
      <TabsList className="mb-5 w-full">
        <TabsTrigger value="marine">Sea Creatures</TabsTrigger>
        <TabsTrigger value="posts">Posts</TabsTrigger>
        <TabsTrigger value="comments">Comments</TabsTrigger>
      </TabsList>
      <TabsContent value="people">{renderCreatures()}</TabsContent>
      <TabsContent value="posts"></TabsContent>
      <TabsContent value="comments"></TabsContent>
    </Tabs>
  );
}
