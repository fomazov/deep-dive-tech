// Components
import { LoadingPlaceholder } from "@/components/LoadingPlaceholder";

// Helpers
import { SITE_CONFIG } from "@/config/site";

const Loading = () => (
  <LoadingPlaceholder elementsCount={SITE_CONFIG.itemsPerRequest} />
);

export default Loading;
