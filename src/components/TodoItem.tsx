import React, { FC } from 'react'
import { ITodo } from '../types/types'
interface TodoItemProps {
    item: ITodo
}
const TodoItem: FC<TodoItemProps> = ({ item }) => {
    return (
        <div>
            <div>
                {item.id} {item.title}
            </div>
            <div>
                <input type='checkbox' checked={item.completed} />
            </div>
        </div>
    )
}

export default TodoItem
