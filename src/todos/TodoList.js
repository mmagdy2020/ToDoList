import React from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { removeToDo, completedToDO} from "../store/action";
import "./TodoList.css";

const TodoList = ({ todos = [], onRemovePressed , onCompletedPress}) => (

  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo, key) => (
      <TodoListItem key={key} todo={todo} onRemovePressed={onRemovePressed} onCompletedPress ={onCompletedPress}/>
    ))}
  </div>
);

const mapStateTOProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeToDo(text)),
  onCompletedPress: (text) => dispatch(completedToDO(text))
})

export default connect(mapStateTOProps,mapDispatchToProps)(TodoList);
