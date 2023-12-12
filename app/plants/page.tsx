"use client";

// Components
import EntityData from "@/components/EntityData";
import { Key, useEffect } from "react";
import { LoadingPlaceholder } from "@/components/LoadingPlaceholder";

// Actions
import { fetchPlants } from "@/lib/store";

// Helpers
import { useDispatch, useSelector } from "@/lib/hooks";
import { SITE_CONFIG } from "@/config/site";

// Types
import { EntityDataProps } from "@/types";

export default function Plants() {
  const dispatch = useDispatch();
  const { data, status } = useSelector(({ plants }) => plants);

  // Read more about aborting requests here:
  // https://redux-toolkit.js.org/api/createAsyncThunk#canceling-while-running

  useEffect(() => {
    const plantsFetchRequest = dispatch(
      fetchPlants({ count: SITE_CONFIG.itemsPerRequest }),
    );

    // Cancel pending requests
    return () => plantsFetchRequest.abort();
  }, [dispatch]);

  return status === "loading" ? (
    <LoadingPlaceholder elementsCount={SITE_CONFIG.itemsPerRequest} />
  ) : (
    data?.map((item: EntityDataProps, i: Key) => <EntityData key={i} {...item} />)
  );
}
