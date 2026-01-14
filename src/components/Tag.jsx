import React from "react";

const Tag = (props) => {
  return (
    <button className="text-xl font-medium bg-gray-100 border-2 border-gray-200 rounded-[5px] py-[2px] px-[10px] mr-[10px] cursor-pointer">
      {props.tagName}
    </button>
  );
};

export default Tag;
