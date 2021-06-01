import React from "react";

const Todos = (props) => {
  return (
    <li>
      <span>
        {props.task_id} {props.task_name}{" "}
      </span>
      <input onChange={props.changeEvent} value={props.children} />
      <button onClick={props.delEvent}>Delete</button>
    </li>
  );
};
export default Todos;
