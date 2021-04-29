import React from "react";
import "./input.scss";
import { saveTodo } from "../../features/todoSlice";
import { useDispatch } from "react-redux";

const Input = () => {
  const [input, setInput] = React.useState("");
  const [title, setTitle] = React.useState("");
  React.useEffect(() => {
    setInput([]);
  }, []);
  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );

    setInput("");
    setTitle("");
  };

  const close = () => {
    setInput("");
    setTitle("");
  };

  const textArea = document.querySelector("textarea");
  const textRowCount = textArea ? textArea.value.split("\n").length : 0;
  const rows = textRowCount + 1;

  return (
    <div className="input">
      <div className="inputContainer">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Title"
          autoFocus
        />

        <textarea
          rows={rows < 15 ? rows : 16}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="inputBottom">
          <button onClick={addTodo}>Add!</button>
          <button onClick={close}>Close!</button>
        </div>
      </div>
    </div>
  );
};

export default Input;
