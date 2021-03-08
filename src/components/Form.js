import React from "react";
import "./form.css";

const Form = ({
  inputHandler,
  setTodos,
  inputText,
  todos,
  setInputText,
  setStaus,
}) => {
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false }]);
    setInputText("");
  };

  const statusHandler=(e)=>{
      setStaus(e.target.value)

  }

  return (
    <form>
      <div>
        <input
          type="text"
          className="todo-input"
          onChange={inputHandler}
          value={inputText}
        />
        <button onClick={submitTodoHandler}>add</button>
      </div>

      <div className="select">
        <select onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
