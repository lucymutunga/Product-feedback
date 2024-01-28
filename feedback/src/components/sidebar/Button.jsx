import React from "react";
import { useNavigate } from "react-router-dom";
const Button = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/addfeedback");
  };
  return (
    <span>
      <button
        onClick={handleClick}
        className="text-white font-medium  bg-[#AD1FEA] hover:bg-[#C75AF6] py-2 px-2 rounded-lg md:w-40 md:h-11 w-60"
      >
        + Add Feedback
      </button>
    </span>
  );
};

export default Button;
