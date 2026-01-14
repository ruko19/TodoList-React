import React from "react";
import Tag from "./Tag";
import DeleteIcon from "../assets/delete.png";

const TaskCard = () => {
  return (
    <article className="w-[100%] min-h-[100%] border border-[#dcdcdc] rounded-xl p-[15px] m-[15px]">
      <p className="text-[18px] font-medium mb-[15px]">This is sample task</p>
      <div className="flex justify-between align-center">
        <div>
          <Tag tagName="HTML" />
          <Tag tagName="CSS" />
        </div>
        <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#dcdcdc] ease-in-out">
          <img
            src={DeleteIcon}
            alt=""
            className="w-[20px] h-[20px] opacity-60 hover:opacity-100 ease-in-out"
          />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
