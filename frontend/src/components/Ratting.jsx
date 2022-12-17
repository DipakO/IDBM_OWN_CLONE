import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Ratting = ({ rating }) => {
  return (
    <div>
      {[...Array(10)].map((_, i) => {
        return (
          <span key={i}>
            {rating > i ? (
              <AiFillStar fontSize={"25px "} />
            ) : (
              <AiOutlineStar fontSize={"25px"} />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Ratting;
