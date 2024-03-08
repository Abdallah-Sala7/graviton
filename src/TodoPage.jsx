import { useParams } from "react-router-dom";
import { useGetTodoByIdQuery } from "./app/api/todoApi";

const TodoPage = () => {
  const params = useParams();

  const { data, isError, isLoading } = useGetTodoByIdQuery({
    id: params.id,
  });

  if (isError) return <div>error</div>;

  if (isLoading) return <div>isLoading...........</div>;

  return (
    <section className="todo-section">
      <div className="">
        <h1>{data.todo}</h1>

        <p>{data.completed ? "completed" : "not completed"}</p>
      </div>
    </section>
  );
};

export default TodoPage;
