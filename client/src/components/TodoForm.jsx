import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";

const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTodo(text));

    setText("");
  };

  const onInputChange = (e) => {
    setText(e.target.value);
    const capitalizedText =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setText(capitalizedText);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        placeholder="Enter new todo..."
        className="input text-capitalize"
        onChange={onInputChange}
        value={text}
        autoCapitalize="words"
      />
    </form>
  );
};

export default TodoForm;
