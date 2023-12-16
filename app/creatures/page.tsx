"use client";

// Core
import { useEffect } from "react";

// Components
import Loading from "@/components/Loading";
import List from "@/components/List";

// Actions
import { fetchCreatures } from "@/lib/store";

// Helpers
import { useDispatch, useSelector } from "@/lib/hooks";
import { SITE_CONFIG } from "@/config/site";

export default function Creatures() {
  const dispatch = useDispatch();

  // Read more about aborting requests here:
  // https://redux-toolkit.js.org/api/createAsyncThunk#canceling-while-running

  useEffect(() => {
    const creaturesFetchRequest = dispatch(
      fetchCreatures({ count: SITE_CONFIG.itemsPerRequest }),
    );

    // Cancel pending requests
    return () => creaturesFetchRequest.abort();
  }, [dispatch]);

  const { data, status } = useSelector(({ creatures }) => creatures);
  const content = status === "loading" ? <Loading /> : <List data={data} />;

  return (
    <main className="flex flex-1 flex-col m-auto max-w-md w-full items-left">
      {content}
    </main>
  );
}
