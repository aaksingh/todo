import React from "react";
import "./TodoItem.scss";
import { useSelector } from "react-redux";
import { setCheck } from "../../features/todoSlice";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
const TodoItem = (props) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(props.id));
  };
  return (
    <div className="todoItem">
      <Checkbox
        checked={props.done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <p className={props.done && "todoItem--done"}>{props.todo}</p>
    </div>
  );
};

export default TodoItem;
