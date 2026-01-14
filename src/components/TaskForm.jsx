import React, { useState } from "react";
import Tag from "./Tag";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("todo");

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskSelectChange = (e) => {
    setStatus(e.target.value);
  };
  console.log(task);

  return (
    <header className="flex justify-center align-center border-b pt-[20px]">
      <form action="" className="">
        <input
          onChange={(e) => handleTaskChange(e)}
          type="text"
          placeholder="Add a task"
          className="w-full mb-[15px] px-3 py-2 text-[20px] font-medium
         bg-[#f9f9f9] text-black
         border border-[#dfe3e6] rounded-[5px]"
        />
        <div className="flex align-center justify-between">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JS" />
            <Tag tagName="REACT" />
          </div>

          <div>
            <select
              onChange={handleTaskChange}
              name=""
              id=""
              className="text-xl font-medium border-2 border-gray-200 rounded-[5px] py-[2px] px-[10px] mr-[10px] cursor-pointer"
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button className="text-xl font-medium bg-blue-600 text-white rounded-[5px] h-[40px] py-[3px] px-[10px] px-[13px] ml-[10px] cursor-pointer">
              + add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
