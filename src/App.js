import React, {Component} from 'react'
import './App.css'
import Todos from "./components/Todos"
import Header from "./components/layout/Header"
import AddTodo from "./components/AddTodo"
import {v4 as uuidv4} from "uuid"

class App extends Component {

  state = {
    todos: [
      {
        id:uuidv4(),
        title:"Go to dentist",
        completed:false
      },
      {
        id:uuidv4(),
        title:"Meet Bernie",
        completed:true
      },
      {
        id:uuidv4(),
        title:"Call mom",
        completed:false
      },
    ]
  }
  // Toggle Complete
  markComplete = (id) => {
    this.setState(
      {todos: this.state.todos.map(todo=>{
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })}
    )
  }
 // Delete Todo
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

 // Add todo
 addTodo = (title) => {
   const newTodo = {
     id:uuidv4(),
     title:title,
     completed:false
   }
   this.setState({todos:[...this.state.todos, newTodo]} )
 } 

  render() {
    
    return (
    <div className="App">
      <div className="container">
      <Header />
      <AddTodo addTodo={this.addTodo} />
       <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
       </div>
    </div>
  )}
}

export default App
