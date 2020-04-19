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

        const {id,title  } = this.props.todo

        return (
            <div style={this.getStyle()}>
                <p>
                    <input id={id} type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {" "}
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>X</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired
}

const btnStyle = {
    background:"red",
    color: "white",
    border:"none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor:"pointer",
    float:"right"
}

export default TodoItem
