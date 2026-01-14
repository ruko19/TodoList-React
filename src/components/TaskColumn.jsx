import React from "react";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon }) => {
  return (
    <section className="w-[33.33%] mx-5">
      <h2 className="flex align-center">
        <img src={icon} alt="" className="w-[30px] h-[30px] mr-[5px]" />
        {title}
      </h2>
      <TaskCard />
    </section>
  );
};

export default TaskColumn;
