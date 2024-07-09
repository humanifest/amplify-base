import { rkey } from "@avaelus/super-project-utils";
import EntityCard from "./EntityCard";

export default function EntityList({ entities, handleDelete }: any) {
  return entities?.map((entity: any, i: number) => (
    <EntityCard
      key={rkey(i, entity.id)}
      handleDelete={handleDelete}
      {...entity}
    />
  ));
}
