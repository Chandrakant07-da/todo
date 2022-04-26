import React from "react";


const todoList = ({ todo }) => {
  return (
    <React.Fragment>
      <div className="todo flex align-items-center gap-medium">
        {todo}
        <input type="checkbox" />
      </div>
    </React.Fragment>
  );
};

export default todoList;