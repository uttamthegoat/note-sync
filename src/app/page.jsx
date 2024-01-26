import TodoForm from "@/components/clients/TodoForm";
import TodoInfo from "@/components/servers/TodoInfo";

export default function Home() {
  return (
    <main className="container my-4">
      <>
        <TodoForm />
      </>
      {/* todo list */}
      <section>
        <TodoInfo
          title={"day 1"}
          description={"kill everyone"}
          id={3}
          completed={true}
        />
      </section>
    </main>
  );
}
