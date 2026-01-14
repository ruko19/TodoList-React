import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import TodoIcon from "./assets/direct-hit.png";
import DoingIcon from "./assets/glowing-star.png";
import DoneIcon from "./assets/check-mark-button.png";

const App = () => {
  return (
    <div className="grid grid-rows-[150px_auto]">
      <TaskForm />
      <main className="flex justify-evenly py-[20px] px-[8%] ">
        <TaskColumn title="To Do" icon={TodoIcon} />
        <TaskColumn title="Doing" icon={DoingIcon} />
        <TaskColumn title="Done" icon={DoneIcon} />
      </main>
    </div>
  );
};

export default App;
