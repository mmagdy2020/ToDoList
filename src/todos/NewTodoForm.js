import React, { useState } from "react";
import {connect} from 'react-redux'
import { createToDo } from "../store/action";

import "./NewTodoForm.css";

const NewTodoForm = ({todos,onCreatePressed}) => {
  const [inputValue, setInputValue] = useState("");


  console.log(inputValue);
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)} />

      <button
      onClick={() => {
          const isDuplicateText =
              todos.some(todo => todo.text === inputValue);
          if (!isDuplicateText) {
              onCreatePressed(inputValue);
              setInputValue('');
          }else{
            alert(`${inputValue} Already exist...`)
          }
      }}
      className="new-todo-button">
      Create Todo
  </button>
      </div>
  );
};

const mapStateTOProps = (state) =>({
todos : state.todos
})

const mapDispatchToProps =(dispatch) =>({
    onCreatePressed: text => dispatch(createToDo(text))

})

export default connect(mapStateTOProps,mapDispatchToProps)(NewTodoForm);
