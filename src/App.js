import React, {Component} from 'react'
import './App.css'
import Todos from "./components/Todos"

class App extends Component {

  state = {
    todos: [
      {
        id:1,
        title:"Go to dentist",
        completed:false
      },
      {
        id:2,
        title:"Meet Bernie",
        completed:true
      },
      {
        id:3,
        title:"Call mom",
        completed:false
      },
    ]
  }
  
  render() {
    
    return (
    <div className="App">
       <Todos todos={this.state.todos} />
    </div>
  )}
}

export default App
