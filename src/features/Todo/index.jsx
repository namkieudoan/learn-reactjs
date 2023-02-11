import React from 'react'
import { TodoList } from './components/TodoList'

export const TodoFeature = () => {
    const TodoListData = [
        {
            id:1,
            name: "Quet Nha",
            status: "completed",
        },
        {
            id:2,
            name: "Lau Nha",
            status: "completed",
        },
        {
            id:3,
            name: "Rua Bat",
            status: "completed",
        },
        {
            id:4,
            name: "Phoi Quan Ao",
            status: "completed",
        },
        {
            id:5,
            name: "Nau Com",
            status: "completed",
        },
    ]
  return (
    <div>
        <TodoList data={TodoListData} />
    </div>
  )
}
