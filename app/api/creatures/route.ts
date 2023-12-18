import { NextRequest, NextResponse } from "next/server";
import { faker } from "@faker-js/faker";
import { SITE_CONFIG } from "@/config/site";

export async function GET(req: NextRequest, res: NextResponse) {
  const { defaultItemsPerRequest, latency } = SITE_CONFIG;

  // simulate IO latency
  await new Promise(r => setTimeout(r, latency));

  const url = new URL(req.url);
  const queryParams = new URLSearchParams(url.search);
  const count = queryParams.get("count") ?? defaultItemsPerRequest;

  const creatures = Array.from({ length: +count }, () => ({
    id: faker.string.uuid(),
    habitat: faker.location.country(),
    lifespan: `${faker.number.int({ min: 1, max: 100 })} years`,
    size: `${faker.number.int({ min: 1, max: 20 })} feet`,
    species: faker.animal.fish(),
  }));

  return NextResponse.json([...creatures]);
}
