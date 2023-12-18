export const SITE_CONFIG = {
  name: "marine-creatures",
  title: "Marine Creatures",
  description: "Navigating the ocean of tech",
  defaultTheme: "system",
  links: {
    github: "https://github.com/fomazov/marine-creatures",
    website: "https://oleksii.fomazov.name",
  },
  latency: 2000,
  itemsPerRequest: 10,
  defaultItemsPerRequest: 10,
};

export type SiteConfig = typeof SITE_CONFIG;
