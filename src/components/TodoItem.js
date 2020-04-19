import React, { Component } from 'react'
import PropTypes from "prop-types"

export class TodoItem extends Component {

    getStyle = () => {
           return {
               textDecoration : this.props.todo.completed ? "line-through" : "none",
               background:"#a1d4f4",
               padding: "10px",
               borderBottom: "1px #ccc333 dotted"
           }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todos:PropTypes.object.isRequired
}



export default TodoItem
