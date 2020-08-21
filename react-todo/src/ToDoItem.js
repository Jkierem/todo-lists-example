import React from 'react'

const ToDoItem = (props) => {
    const { todo: {
        name, completed
    } } = props
    return <li>
        <input type="checkbox" checked={completed} /><label>{name}</label>
    </li>
}

export default ToDoItem