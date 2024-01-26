import { cookies } from "next/headers";
import React from "react";
import { TodoItem } from "../components/ServerComponents";

const fetchTodo = async (token) => {
  try {
    const res = await fetch(`${process.env.URL}/api/gettask`, {
      cache: "no-cache",
      headers: {
        cookie: `token=${token}`,
      },
    });
    const data = await res.json();
    // console.log(data);

    if (!data.success) return [];

    return data.tasks;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const Todos = async () => {
  const token = cookies().get("access_token")?.value;
  // console.log(token);
  const tasks = await fetchTodo(token);

  return (
    <section className="todosContainer">
      {tasks?.map((i) => (
        <TodoItem
          key={i._id}
          title={i.title}
          description={i.description}
          id={i._id}
          completed={i.isCompleted}
        />
      ))}
    </section>
  );
};

export default Todos;
