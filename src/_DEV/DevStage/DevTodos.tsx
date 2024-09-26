import TodoCreateForm from "@/src/components/generated/TodoCreateForm";
import client from "@/src/utils/amplifyClient";
import { Models, m } from "@/data-schema";
import { useEffect, useState } from "react";
import EntityList from "../EntityList/EntityList";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/src/contexts/routes";

type Todo = Models[m.Todo];
type Todos = Todo[];
export default function DevTodos() {
  const [todos, setTodos] = useState<Todos>([]);
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
