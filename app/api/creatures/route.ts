import { NextRequest, NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

export async function GET(req: NextRequest, res: NextResponse) {
  // simulate IO latency
  await new Promise(r => setTimeout(r, 500));

  const url = new URL(req.url);
  const queryParams = new URLSearchParams(url.search);
  const count = queryParams.get("count") ?? 10;

  const creatures = Array.from({ length: +count }, () => ({
    habitat: faker.location.country(),
    lifespan: `${faker.number.int({ min: 1, max: 100 })} years`,
    size: `${faker.number.int({ min: 1, max: 20 })} feet`,
    species: faker.animal.fish(),
  }));

  return NextResponse.json([...creatures]);
}
