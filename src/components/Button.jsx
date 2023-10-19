import React from "react";

const Button = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export default Button;