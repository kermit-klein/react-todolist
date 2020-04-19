import React, { Component } from 'react'

export class AddTodo extends Component {

   state = {
       title:""
   }

    onChange = (e) => {this.setState({[e.target.name] : e.target.value})}

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({title:""})
    }

    render() {
        return (
               <form  onSubmit={this.onSubmit} style={{display:"flex"}}>
                   <input type="text" name="title" placeholder="Type task" style={{flex:"10",padding:"5px"}} onChange={this.onChange} value={this.state.title}  />
                   <input className="btn" type="submit" value="Submit" style={{flex:"1"}}/>
               </form>
        )
    }
}

export default AddTodo
