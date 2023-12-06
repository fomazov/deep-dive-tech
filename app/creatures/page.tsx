"use client";

// Components
import EntityData from "@/components/EntityData";
import { Key, useEffect } from "react";
import { LoadingPlaceholder } from "@/components/LoadingPlaceholder";

// Actions
import { fetchCreatures } from "@/lib/store";

// Helpers
import { useDispatch, useSelector } from "@/lib/hooks";

// Types
import { Creature } from "@/types";

export default function Creatures() {
  const dispatch = useDispatch();
  const { data, status } = useSelector(({ creatures }) => creatures);

  const ELEMENTS_COUNT = 7;

  useEffect(() => {
    dispatch(fetchCreatures(ELEMENTS_COUNT));
  }, []);

  return status === "loading" ? (
    <div className="flex flex-col">
      <LoadingPlaceholder elementsCount={ELEMENTS_COUNT} />
    </div>
  ) : (
    data?.map((creature: Creature, i: Key) => (
      <EntityData key={i} creature={creature} />
    ))
  );
}
