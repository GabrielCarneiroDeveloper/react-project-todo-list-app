import React from 'react'

import Header from '../template/Header'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

import './Todo.css'

export default props => (
  <div className="todo">
    <Header name="Tasks" small="Cadastro" />
    <TodoForm />
    <TodoList />
  </div>
);