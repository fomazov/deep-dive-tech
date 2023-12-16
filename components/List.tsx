// Components
import EntityData from "@/components/ListItem";

// Types
import { ListItemProps } from "@/types";

const List = ({ data }: { data: ListItemProps[] }) =>
  data.map((item: ListItemProps) => <EntityData key={item.id} {...item} />);

export default List;
