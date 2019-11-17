import React, { Component } from 'react'
import axios from 'axios'

import Header from '../template/Header'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

import './Todo.css'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

  state = {
    description: '',
    list: []
  }

  async componentDidMount() {
    console.log('loading..')
    await this.refresh()
    console.log(this.state.list)
  }

  refresh = async () => {
    await axios.get(`${URL}?sort=-createdAt`)
      .then(
        response => this.setState({ list: response.data, description: '' })
      )
  }

  handleRemove = async (todo) => {
    if(window.confirm('Do you really want remove it?')){
      await axios.delete(`${URL}/${todo._id}`)
      this.refresh()
    }
    
  }

  handleAdd = () => {
    const description = this.state.description
    axios.post(URL, { description })
      .then(response => this.refresh())
  }
  
  handleChange = (e) => {
    this.setState({ description: e.target.value })
  }

  handleMarkAsDone = async (todo) => {
    const response = await axios.put(`${URL}/${todo._id}`, 
    {...todo, done: !todo.done ? true : false})
    this.refresh()
  }

  render() {
      return (
        <div className="todo">
          <Header name="Tasks" small="Cadastro" />
          <TodoForm 
            description={this.state.description}
            handleChange={this.handleChange}
            handleAdd={this.handleAdd} />
          <TodoList 
            handleRemove={this.handleRemove}
            handleMarkAsDone={this.handleMarkAsDone}
            list={this.state.list} />
        </div>
      );    
  }
    
}