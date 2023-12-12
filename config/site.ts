export const SITE_CONFIG = {
  name: "deep-dive-tech",
  title: "Deep Dive Tech",
  description: "Navigating the Depths of Cutting-Edge Innovation.",
  defaultTheme: "system",
  links: {
    github:
      "https://github.com/fomazov/deep-dive-tech/tree/feature/request_cancellation",
    website: "https://oleksii.fomazov.name",
  },
  latency: 2000,
  itemsPerRequest: 10,
  defaultItemsPerRequest: 10,
};

export type SiteConfig = typeof SITE_CONFIG;
