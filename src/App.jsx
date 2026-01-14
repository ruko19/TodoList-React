import React from "react";
import TaskForm from "./components/TaskForm";

const App = () => {
  return (
    <div className="grid grid-rows-[150px_auto]">
      <TaskForm />
      <main className="flex justify-evenly py-[20px] px-[8%] ">
        <section className="w-[33.33%] bg-orange-500 mx-5">section 1 </section>
        <section className="w-[33.33%] bg-orange-500 mx-5">section 2 </section>
        <section className="w-[33.33%] bg-orange-500 mx-5">section 3 </section>
      </main>
    </div>
  );
};

export default App;
