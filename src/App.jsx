import React, { useEffect, useState } from "react";
import { useGetAllTodosQuery } from "./app/api/todoApi";
import { Link } from "react-router-dom";

const App = () => {
  const [todoData, setTodoData] = useState([]);

  const { data, isLoading, isError } = useGetAllTodosQuery();

  const searchHandler = (search) => {
    const filteredData = data.todos.filter((item) =>
      item.todo.includes(search)
    );

    setTodoData(filteredData);
  };

  useEffect(() => {
    if (data) {
      setTodoData(data.todos);
    }
  }, [data]);

  if (isError) return <div>error</div>;

  if (isLoading) return <div>isLoading...........</div>;

  return (
    <section className="todo-section">
      <div className="todo-search">
        <input type="search" onChange={(e) => searchHandler(e.target.value)} />
      </div>

      <div className="todo-content">
        {todoData?.map((item, index) => (
          <div className="todo-item">
            <Link to={`/todo/${item.id}`} key={index}>
              {item.todo}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default App;
