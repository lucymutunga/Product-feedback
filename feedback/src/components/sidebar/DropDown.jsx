import React from "react";

const DropDown = () => {
  return (
    <div className="drops border text-[#647196] p-2">
      <ul>
        <li className="border-b border-solid border-[#647196]-500 ">
          Most Upvotes
        </li>
        <li className="border-b border-solid border-[#647196]-500 ">
          Least Upvotes
        </li>
        <li className="border-b border-solid border-[#647196]-500 ">
          Most Comments
        </li>
        <li className=" ">Least Comments</li>
      </ul>
    </div>
  );
};

export default DropDown;
