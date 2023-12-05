import { faker } from "@faker-js/faker";

export async function GET(req: Request, res: Response) {
  // simulate IO latency
  await new Promise(r => setTimeout(r, 500));

  const creatures = Array.from({ length: 15 }, () => ({
    habitat: faker.location.country(),
    lifespan: `${faker.number.int({ min: 1, max: 100 })} years`,
    size: `${faker.number.int({ min: 1, max: 20 })} feet`,
    species: faker.animal.fish(),
  }));

  return Response.json([...creatures]);
}
