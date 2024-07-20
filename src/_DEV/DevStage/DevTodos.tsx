import TodoCreateForm from "@/src/components/generated/TodoCreateForm";
import { ProviderClientContext } from "@/src/contexts/providers/ProviderClient/ProviderClient";
import { Models, m } from "@/data-schema";
import { useContext, useEffect, useState } from "react";
import EntityList from "../EntityList/EntityList";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/src/contexts/routes";

type Todo = Models[m.Todo];
type Todos = Todo[];
export default function DevTodos() {
  const [todos, setTodos] = useState<Todos>([]);
  const client = useContext(ProviderClientContext);
  const nav = useNavigate();
  function deleteTodo(id: string) {
    client.models.Todo.delete({ id });
  }

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: ({ items: todos }) => setTodos([...todos]),
    });
  }, [client.models.Todo]);

  return (
    <>
      <div>Todos</div>
      <TodoCreateForm
        overrides={{
          content: {
            label: "Create Todo",
          },
        }}
        onSubmit={(fields) => {
          nav(ROUTES.dev._);

          return fields;
        }}
      />
      <EntityList entities={todos} handleDelete={deleteTodo} />
    </>
  );
}
