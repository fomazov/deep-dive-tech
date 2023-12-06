"use client";

// Components
import EntityData from "@/components/EntityData";
import { Key, useEffect } from "react";
import { LoadingPlaceholder } from "@/components/LoadingPlaceholder";

// Actions
import { fetchCreatures } from "@/lib/store";

// Helpers
import { useDispatch, useSelector } from "@/lib/hooks";
import { SITE_CONFIG } from "@/config/site";

// Types
import { EntityDataProps } from "@/types";

export default function Creatures() {
  const dispatch = useDispatch();
  const { data, status } = useSelector(({ creatures }) => creatures);

  useEffect(() => {
    dispatch(fetchCreatures(SITE_CONFIG.itemsPerRequest));
  }, []);

  return status === "loading" ? (
    <LoadingPlaceholder elementsCount={SITE_CONFIG.itemsPerRequest} />
  ) : (
    data?.map((item: EntityDataProps, i: Key) => <EntityData key={i} {...item} />)
  );
}
