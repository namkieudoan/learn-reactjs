import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';


export function TodoList({data}) {
  return (
    <ul>
        {data.map((todo, idx) => {
            return (
                <li 
                    key={todo.idx} 
                    className = {classNames({
                        "todo-item": true, 
                        complete: todo.status === "completed"
                    })}
                > 
                    {todo.name}
                </li>
            )
        })}
    </ul>
  )
}

TodoList.propstype =   {
    data:PropTypes.array
}
TodoList.defaultProps = {
    data: []
}