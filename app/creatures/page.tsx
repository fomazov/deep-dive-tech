"use client";

// Components
import EntityData from "@/components/EntityData";
import { Key, useEffect } from "react";

// Actions
import { fetchCreatures } from "@/lib/store";

// Helpers
import { useDispatch, useSelector } from "@/lib/hooks";

// Types
import { Creature } from "@/types";

export default function Creatures() {
  const dispatch = useDispatch();
  const { data, status } = useSelector(({ creatures }) => creatures);

  useEffect(() => {
    dispatch(fetchCreatures());
  }, []);

  return status === "loading"
    ? "loading..."
    : data?.map((creature: Creature, i: Key) => (
        <EntityData key={i} creature={creature} />
      ));
}
